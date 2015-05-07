(function() {
	'use strict';

	angular
		.module('app.sekolah')
		.controller('SekolahInstrumenCtrl', SekolahInstrumenCtrl)

	function SekolahInstrumenCtrl($scope, sekolah, AppSekolahRepository) {
		$scope.sekolah = sekolah;
		$scope.prodi_current = false;
		$scope.butir = {};
		$scope.jawaban = [];
		$scope.instrumen = {};
        $scope.program = {};

		var _source_bagian,
                _bagian,
                _source_instrumen,
                _group_id,
                _sources,
                _total,
                _index, 
                _program;

        var DB_Butir;

		$scope.goEvaluasi = function(prodi) {
			if ($scope.prodi_current == false) {
				$scope.prodi_current = parseInt(prodi);
				$('.prodi-evaluasi').addClass('hide');
                $('#prodi-'+prodi).removeClass('hide');   
				/**
				 * Initialize
				 */
				__init_group();
				__init_source();




			} else {
				$scope.prodi_current = false;
				$scope.butir = {};
				$('.prodi-evaluasi').removeClass('hide');     
			}
		}

		var __init_group = function() {
			if (sekolah.jenjang_id == 20) {
				if ($scope.prodi_current == 224) {   // SDLB
                    _group_id = { group_id : 16 };
                } else if ($scope.prodi_current == 225) { // SMPLB
                    _group_id = { group_id : 17 };
                } else if ($scope.prodi_current == 226) {  // SMALB
                    _group_id = { group_id : 18 };
                }
			} else {
				_group_id   = getGroupIdJenjang(sekolah.jenjang_id);
			}
		}

		var __init_source = function() {
            _source_bagian     = TAFFY(INSTRUMEN.BAGIAN);
            _source_instrumen  = TAFFY(INSTRUMEN.BUTIR);
            _bagian            = _source_bagian({ group_id: { is: parseInt(_group_id.group_id) }});

            _sources        =  _source_instrumen()
                                .join( _bagian, ['bagian_id', 'id'])
                                .order('nomor');
            
            _index          = findIndexByKeyValue(sekolah.program, 'id', $scope.prodi_current);
            _program        = sekolah.program[_index];


            // Initial Data Butir Instrumen
            // ------------------------------------------------
            if (_program.butir == undefined) {
                _program.butir = [];
            }

            DB_Butir = TAFFY(_program.butir);

            _sources.get().forEach(function(entry) {

                var instrumen    = DB_Butir({ nomor: { is: parseInt(entry.nomor) } });
                var data = { 
                    id: entry.id,
                    bagian_id: entry.bagian_id,
                    nomor: entry.nomor,
                    instrumen: entry 
                };

                if (instrumen.first()) {
                    instrumen.update(data);
                } else {
                    DB_Butir.insert(data);
                }
            });

            _program.butir  = DB_Butir().get(); 

            AppSekolahRepository.update(sekolah);

            _total          = _sources.count();

            $scope.sources  = _sources.get();
            $scope.total    = _total;
            $scope.program  = _program;

            // __source_initialize($scope.sources, $scope._current);
        }

        $scope.test = function() {
        	console.log($scope.jawaban);
        }

        $scope.update = function() {
            // console.log(sekolah);

            App.Skoring.init(DB_Butir, $scope.program.komponen, _group_id.group_id, $scope.prodi_current);

            $scope.program.komponen = App.Skoring.komponen();
            $scope.program.hasil = App.Skoring.hasil();

            // console.log(App.Skoring.komponen());

            AppSekolahRepository.update(sekolah);
        }

        $scope.getValue = function(id, bagian, bobot, nomor, nilai) {
        	insertUpdate(id, bagian, bobot, nomor, nilai);
        }

        var insertUpdate = function(id, bagian, bobot, nomor, nilai) {
            
            //AppSekolahRepository.update(sekolah);

        	/*var _butir 		= {},
        		_komponen 	= {},
        		_index      = findIndexByKeyValue(sekolah.program, 'id', $scope.prodi_current),
        		_program	= sekolah.program[_index],
        		_evaluasi	= {};

        	_evaluasi.id 		= id;
        	_evaluasi.prodi_id  = $scope.prodi_current;
        	_evaluasi.bagian_id	= bagian;
        	_evaluasi.nomor 	= nomor;
        	_evaluasi.jawaban	= nilai;
        	_evaluasi.hasil 	= nilai * bobot;

        	if (_program.butir == undefined) {
        		_program.butir = [];
        	}

        	if (_program.komponen == undefined) {
        		_program.komponen = [];
        	}

        	if (_program.hasil == undefined) {
        		_program.hasil = {};
        	}

        	var db 		= TAFFY(_program.butir);
        	var soal 	= db({ nomor: { is: parseInt(nomor) } });

        	if (soal.first()) {
        		console.debug('Update');
        		soal.update(_evaluasi);
        	} else {
        		console.debug('Insert');
        		
        		// console.log(db);
        		db.insert(_evaluasi);
        		console.debug(db().get());
        	}

        	 _program.butir = db().get();

        	// console.log(_program);
        	// console.log(_evaluasi);

        	App.Skoring.init(db, _program.komponen, _group_id.group_id, $scope.prodi_current);

        	_program.komponen   = App.Skoring.komponen();
            _program.hasil      = App.Skoring.hasil();
            
            AppSekolahRepository.update(sekolah);*/
        }

	}
	
})();