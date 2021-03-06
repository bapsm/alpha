var APP = {};

APP.GROUP = [
  {"id": "", "nama": "Pilih group jenjang"},
  {"id": 11, "nama": "SD/MI"},
  {"id": 12, "nama": "SMP/MTs"},
  {"id": 13, "nama": "SMA/MA"},
  {"id": 14, "nama": "SMK/MAK"},
  {"id": 15, "nama": "SLB"},
  {"id": 16, "nama": "SDLB"},
  {"id": 17, "nama": "SMPLB"},
  {"id": 18, "nama": "SMALB"},
];

APP.JENJANG = [
  {"id": "", "nama": "Pilih jenjang"},
  {"id": 12, "group_id": 11, "nama": "SD"},
  {"id": 13, "group_id": 11, "nama": "MI"},
  {"id": 14, "group_id": 12, "nama": "SMP"},
  {"id": 15, "group_id": 12, "nama": "MTs"},
  {"id": 16, "group_id": 13, "nama": "SMA"},
  {"id": 17, "group_id": 13, "nama": "MA"},
  {"id": 18, "group_id": 14, "nama": "SMK"},
  {"id": 19, "group_id": 14, "nama": "MAK"},
  {"id": 20, "group_id": 15, "nama": "SLB"},
];

APP.PRODI = [
  { "id": 1, "jenjang_id" : 18, "kode": "001", "nama": "Teknik Konstruksi Baja" },
  { "id": 2, "jenjang_id" : 18, "kode": "002", "nama": "Teknik Konstruksi Kayu" },
  { "id": 3, "jenjang_id" : 18, "kode": "003", "nama": "Teknik Konstruksi Batu dan Beton" },
  { "id": 4, "jenjang_id" : 18, "kode": "004", "nama": "Teknik Gambar Bangunan" },
  { "id": 5, "jenjang_id" : 18, "kode": "005", "nama": "Teknik Furnitur" },
  { "id": 6, "jenjang_id" : 18, "kode": "006", "nama": "Teknik Plambing dan Sanitasi" },
  { "id": 201, "jenjang_id" : 18, "kode": "007", "nama": "Geomatika" },
  { "id": 8, "jenjang_id" : 18, "kode": "008", "nama": "Teknik Pembangkit Tenaga Listrik" },
  { "id": 202, "jenjang_id" : 18, "kode": "009", "nama": "Teknik Jaringan Tenaga Listrik" },
  { "id": 203, "jenjang_id" : 18, "kode": "010", "nama": "Teknik Instalasi Pemanfaatan Tenaga Listrik" },
  { "id": 12, "jenjang_id" : 18, "kode": "011", "nama": "Teknik Otomasi Industri" },
  { "id": 13, "jenjang_id" : 18, "kode": "012", "nama": "Teknik Pendinginan dan Tata Udara" },
  { "id": 14, "jenjang_id" : 18, "kode": "013", "nama": "Teknik Pemesinan" },
  { "id": 15, "jenjang_id" : 18, "kode": "014", "nama": "Teknik Pengelasan" },
  { "id": 16, "jenjang_id" : 18, "kode": "015", "nama": "Teknik Fabrikasi Logam" },
  { "id": 17, "jenjang_id" : 18, "kode": "016", "nama": "Teknik Pengecoran Logam" },
  { "id": 19, "jenjang_id" : 18, "kode": "017", "nama": "Teknik Pemeliharaan Mekanik Industri" },
  { "id": 18, "jenjang_id" : 18, "kode": "018", "nama": "Teknik Gambar Mesin" },
  { "id": 25, "jenjang_id" : 18, "kode": "019", "nama": "Pemeliharaan dan Perbaikan Motor dan Rangka Pesawat Udara (Airframe Power Plant)" },
  { "id": 26, "jenjang_id" : 18, "kode": "020", "nama": "Pemesinan Pesawat Udara (Aircraft Machining)" },
  { "id": 27, "jenjang_id" : 18, "kode": "021", "nama": "Konstruksi Badan Pesawat Udara (Aircraft Sheet Metal Forming)" },
  { "id": 28, "jenjang_id" : 18, "kode": "022", "nama": "Konstruksi Rangka Pesawat Udara (Airframe Mechanics)" },
  { "id": 29, "jenjang_id" : 18, "kode": "023", "nama": "Kelistrikan Pesawat Udara (Aircraft Electricity)" },
  { "id": 30, "jenjang_id" : 18, "kode": "024", "nama": "Elektronika Pesawat Udara (Aviation Avionics)" },
  { "id": 31, "jenjang_id" : 18, "kode": "025", "nama": "Pemeliharaan dan Perbaikan Instrumen Elektronika Pesawat Udara (Electrical Avionics)" },
  { "id": 45, "jenjang_id" : 18, "kode": "026", "nama": "Persiapan Grafika" },
  { "id": 46, "jenjang_id" : 18, "kode": "027", "nama": "Produksi Grafika" },
  { "id": 48, "jenjang_id" : 18, "kode": "028", "nama": "Teknik Instrumentasi Gelas" },
  { "id": 50, "jenjang_id" : 18, "kode": "029", "nama": "Kontrol Proses" },
  { "id": 51, "jenjang_id" : 18, "kode": "030", "nama": "Kontrol Mekanik" },
  { "id": 204, "jenjang_id" : 18, "kode": "031", "nama": "Teknik Pelayanan Produksi" },
  { "id": 205, "jenjang_id" : 18, "kode": "032", "nama": "Teknik Pergudangan" },
  { "id": 40, "jenjang_id" : 18, "kode": "033", "nama": "Teknik Pemintalan Serat Buatan" },
  { "id": 41, "jenjang_id" : 18, "kode": "034", "nama": "Teknik Pembuatan Benang" },
  { "id": 42, "jenjang_id" : 18, "kode": "035", "nama": "Teknik Pembuatan Kain" },
  { "id": 43, "jenjang_id" : 18, "kode": "036", "nama": "Teknik Penyempurnaan Tekstil" },
  { "id": 61, "jenjang_id" : 18, "kode": "037", "nama": "Teknik Produksi Minyak dan Gas" },
  { "id": 62, "jenjang_id" : 18, "kode": "038", "nama": "Teknik Pemboran Minyak dan Gas" },
  { "id": 63, "jenjang_id" : 18, "kode": "039", "nama": "Teknik Pengolahan Minyak, Gas dan Petro Kimia" },
  { "id": 47, "jenjang_id" : 18, "kode": "040", "nama": "Geologi Pertambangan" },
  { "id": 52, "jenjang_id" : 18, "kode": "041", "nama": "Kimia Analisis" },
  { "id": 53, "jenjang_id" : 18, "kode": "042", "nama": "Kimia Industri" },
  { "id": 20, "jenjang_id" : 18, "kode": "043", "nama": "Teknik Kendaraan Ringan" },
  { "id": 21, "jenjang_id" : 18, "kode": "044", "nama": "Teknik Sepeda Motor" },
  { "id": 23, "jenjang_id" : 18, "kode": "045", "nama": "Teknik Alat Berat" },
  { "id": 22, "jenjang_id" : 18, "kode": "046", "nama": "Teknik Perbaikan Bodi Otomotif" },
  { "id": 32, "jenjang_id" : 18, "kode": "047", "nama": "Teknik Konstruksi Kapal Baja" },
  { "id": 33, "jenjang_id" : 18, "kode": "048", "nama": "Teknik Konstruksi Kapal Kayu" },
  { "id": 34, "jenjang_id" : 18, "kode": "049", "nama": "Teknik Konstruksi Kapal Fiberglas" },
  { "id": 35, "jenjang_id" : 18, "kode": "050", "nama": "Teknik Instalasi Pemesinan Kapal" },
  { "id": 36, "jenjang_id" : 18, "kode": "051", "nama": "Teknik Pengelasan Kapal" },
  { "id": 37, "jenjang_id" : 18, "kode": "052", "nama": "Kelistrikan Kapal" },
  { "id": 38, "jenjang_id" : 18, "kode": "053", "nama": "Teknik Gambar Rancang Bangun Kapal" },
  { "id": 39, "jenjang_id" : 18, "kode": "054", "nama": "Interior Kapal" },
  { "id": 64, "jenjang_id" : 18, "kode": "055", "nama": "Teknik Audio-Video" },
  { "id": 65, "jenjang_id" : 18, "kode": "056", "nama": "Teknik Elektronika Industri" },
  { "id": 207, "jenjang_id" : 18, "kode": "057", "nama": "Teknik Elektronika Komunikasi" },
  { "id": 66, "jenjang_id" : 18, "kode": "058", "nama": "Teknik Mekatronika" },
  { "id": 24, "jenjang_id" : 18, "kode": "059", "nama": "Teknik Ototronik" },
  { "id": 208, "jenjang_id" : 18, "kode": "060", "nama": "Teknik Energi Hidro" },
  { "id": 209, "jenjang_id" : 18, "kode": "061", "nama": "Teknik Energi Surya dan Angin" },
  { "id": 210, "jenjang_id" : 18, "kode": "062", "nama": "Teknik Energi Biomassa" },
  { "id": 70, "jenjang_id" : 18, "kode": "063", "nama": "Rekayasa Perangkat Lunak" },
  { "id": 71, "jenjang_id" : 18, "kode": "064", "nama": "Teknik Komputer dan Jaringan" },
  { "id": 72, "jenjang_id" : 18, "kode": "065", "nama": "Multimedia" },
  { "id": 67, "jenjang_id" : 18, "kode": "066", "nama": "Teknik Transmisi Telekomunikasi" },
  { "id": 68, "jenjang_id" : 18, "kode": "067", "nama": "Teknik Suitsing" },
  { "id": 69, "jenjang_id" : 18, "kode": "068", "nama": "Teknik Jaringan Akses" },
  { "id": 75, "jenjang_id" : 18, "kode": "069", "nama": "Teknik Produksi dan Penyiaran Program Radio dan Pertelevisian" },
  { "id": 76, "jenjang_id" : 18, "kode": "070", "nama": "Keperawatan" },
  { "id": 77, "jenjang_id" : 18, "kode": "071", "nama": "Keperawatan Gigi" },
  { "id": 78, "jenjang_id" : 18, "kode": "072", "nama": "Analis Kesehatan" },
  { "id": 79, "jenjang_id" : 18, "kode": "073", "nama": "Farmasi" },
  { "id": 80, "jenjang_id" : 18, "kode": "074", "nama": "Farmasi Industri" },
  { "id": 81, "jenjang_id" : 18, "kode": "075", "nama": "Perawatan Sosial" },
  { "id": 104, "jenjang_id" : 18, "kode": "076", "nama": "Agribisnis Tanaman Pangan dan Hortikultura" },
  { "id": 105, "jenjang_id" : 18, "kode": "077", "nama": "Agribisnis Tanaman Perkebunan" },
  { "id": 106, "jenjang_id" : 18, "kode": "078", "nama": "Agribisnis Pembibitan dan Kultur Jaringan Tanaman" },
  { "id": 107, "jenjang_id" : 18, "kode": "079", "nama": "Agribisnis Ternak Ruminansia" },
  { "id": 108, "jenjang_id" : 18, "kode": "080", "nama": "Agribisnis Ternak Unggas" },
  { "id": 109, "jenjang_id" : 18, "kode": "081", "nama": "Agribisnis Aneka Ternak" },
  { "id": 211, "jenjang_id" : 18, "kode": "082", "nama": "Kesehatan Hewan" },
  { "id": 114, "jenjang_id" : 18, "kode": "083", "nama": "Teknologi Pengolahan Hasil Pertanian" },
  { "id": 212, "jenjang_id" : 18, "kode": "084", "nama": "Teknik Pengolahan Hasil Perikanan" },
  { "id": 115, "jenjang_id" : 18, "kode": "085", "nama": "Pengawasan Mutu Hasil Pertanian dan Perikanan" },
  { "id": 213, "jenjang_id" : 18, "kode": "086", "nama": "Alat Mesin Pertanian" },
  { "id": 214, "jenjang_id" : 18, "kode": "087", "nama": "Teknik Tanah dan Air" },
  { "id": 215, "jenjang_id" : 18, "kode": "088", "nama": "Teknik Inventarisasi dan Pemetaan Hujan" },
  { "id": 216, "jenjang_id" : 18, "kode": "089", "nama": "Teknik Konservasi Sumberdaya Hutan" },
  { "id": 217, "jenjang_id" : 18, "kode": "090", "nama": "Teknik Rehabilitasi dan Reklamasi Hutan" },
  { "id": 218, "jenjang_id" : 18, "kode": "091", "nama": "Teknik Produksi Hasil Hutan" },
  { "id": 54, "jenjang_id" : 18, "kode": "092", "nama": "Nautika Kapal Penangkap Ikan" },
  { "id": 55, "jenjang_id" : 18, "kode": "093", "nama": "Teknika Kapal Penangkap Ikan" },
  { "id": 111, "jenjang_id" : 18, "kode": "094", "nama": "Budidaya Perikanan" },
  { "id": 220, "jenjang_id" : 18, "kode": "095", "nama": "Budidaya Krustacea" },
  { "id": 221, "jenjang_id" : 18, "kode": "096", "nama": "Budidaya Kekerangan" },
  { "id": 112, "jenjang_id" : 18, "kode": "097", "nama": "Budidaya Rumput Laut" },
  { "id": 56, "jenjang_id" : 18, "kode": "098", "nama": "Nautika Kapal Niaga" },
  { "id": 57, "jenjang_id" : 18, "kode": "099", "nama": "Teknika Kapal Niaga" },
  { "id": 118, "jenjang_id" : 18, "kode": "100", "nama": "Administrasi Perkantoran" },
  { "id": 119, "jenjang_id" : 18, "kode": "101", "nama": "Akuntansi" },
  { "id": 120, "jenjang_id" : 18, "kode": "102", "nama": "Perbankan" },
  { "id": 222, "jenjang_id" : 18, "kode": "103", "nama": "Perbankan Syariah" },
  { "id": 121, "jenjang_id" : 18, "kode": "104", "nama": "Pemasaran" },
  { "id": 97, "jenjang_id" : 18, "kode": "105", "nama": "Usaha Perjalanan Wisata" },
  { "id": 98, "jenjang_id" : 18, "kode": "106", "nama": "Akomodasi Perhotelan" },
  { "id": 99, "jenjang_id" : 18, "kode": "107", "nama": "Jasa Boga" },
  { "id": 100, "jenjang_id" : 18, "kode": "108", "nama": "Patiseri" },
  { "id": 102, "jenjang_id" : 18, "kode": "109", "nama": "Tata Kecantikan Rambut" },
  { "id": 101, "jenjang_id" : 18, "kode": "110", "nama": "Tata Kecantikan Kulit" },
  { "id": 103, "jenjang_id" : 18, "kode": "111", "nama": "Tata Busana" },
  { "id": 82, "jenjang_id" : 18, "kode": "112", "nama": "Seni Lukis" },
  { "id": 83, "jenjang_id" : 18, "kode": "113", "nama": "Seni Patung" },
  { "id": 84, "jenjang_id" : 18, "kode": "114", "nama": "Desain Komunikasi Visual" },
  { "id": 85, "jenjang_id" : 18, "kode": "115", "nama": "Desain Interior" },
  { "id": 73, "jenjang_id" : 18, "kode": "116", "nama": "Animasi" },
  { "id": 86, "jenjang_id" : 18, "kode": "117", "nama": "Desain dan Produksi Kria Tekstil" },
  { "id": 87, "jenjang_id" : 18, "kode": "118", "nama": "Desain dan Produksi Kria Kulit" },
  { "id": 88, "jenjang_id" : 18, "kode": "119", "nama": "Desain dan Produksi Kria Keramik" },
  { "id": 89, "jenjang_id" : 18, "kode": "120", "nama": "Desain dan Produksi Kria Logam" },
  { "id": 90, "jenjang_id" : 18, "kode": "121", "nama": "Desain dan Produksi Kria Kayu" },
  { "id": 91, "jenjang_id" : 18, "kode": "122", "nama": "Seni Musik Klasik" },
  { "id": 92, "jenjang_id" : 18, "kode": "123", "nama": "Seni Musik Non Klasik" },
  { "id": 93, "jenjang_id" : 18, "kode": "124", "nama": "Seni Tari" },
  { "id": 94, "jenjang_id" : 18, "kode": "125", "nama": "Seni Karawitan" },
  { "id": 95, "jenjang_id" : 18, "kode": "126", "nama": "Seni Pedalangan" },
  { "id": 96, "jenjang_id" : 18, "kode": "127", "nama": "Pemeranan (Seni Teater)" },
  { "id": 223, "jenjang_id" : 18, "kode": "128", "nama": "Tata Artistik" },
  { "id": 224, "jenjang_id" : 20, "kode": "", "nama": "SDLB" },
  { "id": 225, "jenjang_id" : 20, "kode": "", "nama": "SMPLB" },
  { "id": 226, "jenjang_id" : 20, "kode": "", "nama": "SMALB" },
  { "id": 200, "jenjang_id" : "", "kode": "", "nama": "-" },
];

APP.STATUS = [
  {"id": "", "nama": "Pilih status"},
  {"id": "N", "nama" : "Negeri"},
  {"id": "S", "nama" : "Swasta"},
]