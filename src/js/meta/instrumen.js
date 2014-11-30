
var INSTRUMEN = {};

INSTRUMEN.BAGIAN = [
  {"id": 294, "group_id": 11, "nama": "Standar Isi", "bobot": 15.00, "skormaks": 220.00 },
  {"id": 295, "group_id": 11, "nama": "Standar Proses", "bobot": 15.00, "skormaks": 128.00 },
  {"id": 296, "group_id": 11, "nama": "Standar Kompetensi Lulusan", "bobot": 13.00, "skormaks": 216.00 },
  {"id": 297, "group_id": 11, "nama": "Standar Pendidik dan Tendik", "bobot": 15.00, "skormaks": 224.00 },
  {"id": 298, "group_id": 11, "nama": "Standar Sarana dan Prasarana", "bobot": 11.00, "skormaks": 308.00 },
  {"id": 299, "group_id": 11, "nama": "Standar Pengelolaan", "bobot": 10.00, "skormaks": 268.00 },
  {"id": 300, "group_id": 11, "nama": "Standar Pembiayaan", "bobot": 10.00, "skormaks": 312.00 },
  {"id": 301, "group_id": 11, "nama": "Standar Penilaian Pendidikan", "bobot": 11.00, "skormaks": 244.00 },
  {"id": 302, "group_id": 12, "nama": "Standar Isi", "bobot": 13.00, "skormaks": 180.00 },
  {"id": 303, "group_id": 12, "nama": "Standar Proses", "bobot": 15.00, "skormaks": 136.00 },
  {"id": 304, "group_id": 12, "nama": "Standar Kompetensi Lulusan", "bobot": 13.00, "skormaks": 240.00 },
  {"id": 305, "group_id": 12, "nama": "Standar Pendidik dan Tendik", "bobot": 15.00, "skormaks": 288.00 },
  {"id": 306, "group_id": 12, "nama": "Standar Sarana dan Prasarana", "bobot": 12.00, "skormaks": 308.00 },
  {"id": 307, "group_id": 12, "nama": "Standar Pengelolaan", "bobot": 11.00, "skormaks": 244.00 },
  {"id": 308, "group_id": 12, "nama": "Standar Pembiayaan", "bobot": 10.00, "skormaks": 296.00 },
  {"id": 309, "group_id": 12, "nama": "Standar Penilaian Pendidikan", "bobot": 11.00, "skormaks": 244.00 },
  {"id": 310, "group_id": 13, "nama": "Standar Isi", "bobot": 15.00, "skormaks": 72.00 },
  {"id": 311, "group_id": 13, "nama": "Standar Proses", "bobot": 10.00, "skormaks": 36.00 },
  {"id": 312, "group_id": 13, "nama": "Standar Kompetensi Lulusan", "bobot": 10.00, "skormaks": 100.00 },
  {"id": 313, "group_id": 13, "nama": "Standar Pendidik dan Tendik", "bobot": 15.00, "skormaks": 80.00 },
  {"id": 314, "group_id": 13, "nama": "Standar Sarana dan Prasarana", "bobot": 15.00, "skormaks": 120.00 },
  {"id": 315, "group_id": 13, "nama": "Standar Pengelolaan", "bobot": 10.00, "skormaks": 80.00 },
  {"id": 316, "group_id": 13, "nama": "Standar Pembiayaan", "bobot": 15.00, "skormaks": 96.00 },
  {"id": 317, "group_id": 13, "nama": "Standar Penilaian Pendidikan", "bobot": 10.00, "skormaks": 76.00 },
  {"id": 318, "group_id": 14, "nama": "Standar Isi", "bobot": 12.00, "skormaks": 216.00 },
  {"id": 319, "group_id": 14, "nama": "Standar Proses", "bobot": 15.00, "skormaks": 172.00 },
  {"id": 320, "group_id": 14, "nama": "Standar Kompetensi Lulusan", "bobot": 13.00, "skormaks": 384.00 },
  {"id": 321, "group_id": 14, "nama": "Standar Pendidik dan Tendik", "bobot": 15.00, "skormaks": 324.00 },
  {"id": 322, "group_id": 14, "nama": "Standar Sarana dan Prasarana", "bobot": 13.00, "skormaks": 316.00 },
  {"id": 323, "group_id": 14, "nama": "Standar Pengelolaan", "bobot": 10.00, "skormaks": 320.00 },
  {"id": 324, "group_id": 14, "nama": "Standar Pembiayaan", "bobot": 11.00, "skormaks": 332.00 },
  {"id": 325, "group_id": 14, "nama": "Standar Penilaian Pendidikan", "bobot": 11.00, "skormaks": 260.00 },
  {"id": 326, "group_id": 16, "nama": "Standar Isi", "bobot": 15.00, "skormaks": 204.00 },
  {"id": 327, "group_id": 16, "nama": "Standar Proses", "bobot": 15.00, "skormaks": 172.00 },
  {"id": 328, "group_id": 16, "nama": "Standar Kompetensi Lulusan", "bobot": 10.00, "skormaks": 264.00 },
  {"id": 329, "group_id": 16, "nama": "Standar Pendidik dan Tendik", "bobot": 15.00, "skormaks": 252.00 },
  {"id": 330, "group_id": 16, "nama": "Standar Sarana dan Prasarana", "bobot": 15.00, "skormaks": 388.00 },
  {"id": 331, "group_id": 16, "nama": "Standar Pengelolaan", "bobot": 10.00, "skormaks": 304.00 },
  {"id": 332, "group_id": 16, "nama": "Standar Pembiayaan", "bobot": 10.00, "skormaks": 364.00 },
  {"id": 333, "group_id": 16, "nama": "Standar Penilaian Pendidikan", "bobot": 10.00, "skormaks": 316.00 },
  {"id": 334, "group_id": 17, "nama": "Standar Isi", "bobot": 15.00, "skormaks": 220.00 },
  {"id": 335, "group_id": 17, "nama": "Standar Proses", "bobot": 15.00, "skormaks": 172.00 },
  {"id": 336, "group_id": 17, "nama": "Standar Kompetensi Lulusan", "bobot": 10.00, "skormaks": 300.00 },
  {"id": 337, "group_id": 17, "nama": "Standar Pendidik dan Tendik", "bobot": 15.00, "skormaks": 280.00 },
  {"id": 338, "group_id": 17, "nama": "Standar Sarana dan Prasarana", "bobot": 15.00, "skormaks": 412.00 },
  {"id": 339, "group_id": 17, "nama": "Standar Pengelolaan", "bobot": 10.00, "skormaks": 284.00 },
  {"id": 340, "group_id": 17, "nama": "Standar Pembiayaan", "bobot": 10.00, "skormaks": 360.00 },
  {"id": 341, "group_id": 17, "nama": "Standar Penilaian Pendidikan", "bobot": 10.00, "skormaks": 332.00 },
  {"id": 342, "group_id": 18, "nama": "Standar Isi", "bobot": 15.00, "skormaks": 204.00 },
  {"id": 343, "group_id": 18, "nama": "Standar Proses", "bobot": 15.00, "skormaks": 160.00 },
  {"id": 344, "group_id": 18, "nama": "Standar Kompetensi Lulusan", "bobot": 10.00, "skormaks": 360.00 },
  {"id": 345, "group_id": 18, "nama": "Standar Pendidik dan Tendik", "bobot": 15.00, "skormaks": 288.00 },
  {"id": 346, "group_id": 18, "nama": "Standar Sarana dan Prasarana", "bobot": 15.00, "skormaks": 404.00 },
  {"id": 347, "group_id": 18, "nama": "Standar Pengelolaan", "bobot": 10.00, "skormaks": 284.00 },
  {"id": 348, "group_id": 18, "nama": "Standar Pembiayaan", "bobot": 10.00, "skormaks": 328.00 },
  {"id": 349, "group_id": 18, "nama": "Standar Penilaian Pendidikan", "bobot": 10.00, "skormaks": 300.00 }
];

INSTRUMEN.BUTIR = [
  {
    "id": 5293,
    "bagian_id": 301,
    "nomor": 140,
    "nama": "Guru mengolah/menganalisis hasil penilaian untuk mengetahui kemajuan hasil belajar dan kesulitan belajar siswa.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sebanyak 86%-100% guru mengolah/menganalisis hasil penilaian untuk mengetahui kemajuan hasil belajar dan kesulitan belajar siswa" },
      { "id": 2, "nilai" : 3, "nama" : "Sebanyak 71%-85% guru mengolah/menganalisis hasil penilaian untuk mengetahui kemajuan hasil belajar dan kesulitan belajar siswa" },
      { "id": 3, "nilai" : 2, "nama" : "Sebanyak 56%-70% guru mengolah/menganalisis hasil penilaian untuk mengetahui kemajuan hasil belajar dan kesulitan belajar siswa" },
      { "id": 4, "nilai" : 1, "nama" : "Sebanyak 41%-55% guru mengolah/menganalisis hasil penilaian untuk mengetahui kemajuan hasil belajar dan kesulitan belajar siswa" },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 41% guru mengolah/menganalisis hasil penilaian untuk mengetahui kemajuan hasil belajar dan kesulitan belajar siswa" }
    ],
    "jawaban": 4
  },
  {
    "id": 5310,
    "bagian_id": 301,
    "nomor": 157,
    "nama": "Sekolah/Madrasah menerima siswa baru dengan menggunakan berbagai pertimbangan.",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "penerimaan siswa baru hanya mempertimbangkan usia" },
      { "id": 2, "nilai" : 3, "nama" : "penerimaan siswa baru mempertimbangkan usia dan jarak tempat tinggal" },
      { "id": 3, "nilai" : 2, "nama" : "penerimaan siswa baru mempertimbangkan usia dan tes masuk" },
      { "id": 4, "nilai" : 1, "nama" : "penerimaan siswa baru mempertimbangkan unsur usia, jarak tempat tinggal, dan sertifikat tamat TK/RA" },
      { "id": 5, "nilai" : 0, "nama" : "penerimaan siswa baru tidak mempertimbangkan persyaratan apa pun" }
    ],
    "jawaban": 4
  },
  {
    "id": 5309,
    "bagian_id": 301,
    "nomor": 156,
    "nama": "Sekolah/Madrasah menyerahkan ijazah  kepada setiap  siswa yang telah  lulus sesuai  dengan ketent uan yang ditetapkan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Kurang dari 7 hari setelah blangko ijazah diterima dari Dinas Pendidikan/Kankemenag" },
      { "id": 2, "nilai" : 3, "nama" : "Antara 8-14 hari setelah blangko ijazah diterima dari Dinas Pendidikan/Kankemenag" },
      { "id": 3, "nilai" : 2, "nama" : "Antara 15-21  hari setelah blangko ijazah diterima dari Dinas Pendidikan/Kankemenag" },
      { "id": 4, "nilai" : 1, "nama" : "Antara 22-28 hari setelah blangko  ijazah diterima dari Dinas Pendidikan/Kandepag" },
      { "id": 5, "nilai" : 0, "nama" : "Lebih dari 28 hari setelah blangko  ijazah diterima dari Dinas Pendidikan/Kandepag" }
    ],
    "jawaban": 4
  },
  {
    "id": 5308,
    "bagian_id": 301,
    "nomor": 155,
    "nama": "Sekolah/Madrasah menerbitkan dan menyerahkan surat Keterangan Hasil  Ujian Nasional  (SKHUN) setiap siswa yang mengikuti Ujian Nasional (UN).",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Kurang dari 7 hari setelah pengumuman hasil ujian" },
      { "id": 2, "nilai" : 3, "nama" : "Antara 8-14 hari setelah pengumuman hasil ujian" },
      { "id": 3, "nilai" : 2, "nama" : "Antara 15-21  hari setelah pengumuman hasil ujian" },
      { "id": 4, "nilai" : 1, "nama" : "Antara 22-28  hari setelah pengumuman hasil ujian" },
      { "id": 5, "nilai" : 0, "nama" : "Lebih dari 28 hari setelah pengumuman hasil ujian" }
    ],
    "jawaban": 4
  },
  {
    "id": 5307,
    "bagian_id": 301,
    "nomor": 154,
    "nama": "Sekolah/Madrasah menentukan nilai  minimal mata pelajaran sebagai kriteria kelulusan Ujian Nasional (UN).",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Lebih besar dari 5,00" },
      { "id": 2, "nilai" : 3, "nama" : "Antara 4,01-5,00" },
      { "id": 3, "nilai" : 2, "nama" : "Antara 3,01-4,00" },
      { "id": 4, "nilai" : 1, "nama" : "Antara 2,01-3,00" },
      { "id": 5, "nilai" : 0, "nama" : "Lebih kecil dari 2,01" }
    ],
    "jawaban": 4
  },
  {
    "id": 5306,
    "bagian_id": 301,
    "nomor": 153,
    "nama": "Sekolah/Madrasah menentukan nilai  rata-rata sebagai kriteria kelulusan Ujian Nasional (UN).",
    "bobot": 2,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Lebih besar dari 6,00" },
      { "id": 2, "nilai" : 3, "nama" : "Antara 5,01-6,00" },
      { "id": 3, "nilai" : 2, "nama" : "Antara 4,01-5,00" },
      { "id": 4, "nilai" : 1, "nama" : "Antara 3,01-4,00" },
      { "id": 5, "nilai" : 0, "nama" : "Lebih kecil dari 3,01" }
    ],
    "jawaban": 4
  },
  {
    "id": 5305,
    "bagian_id": 301,
    "nomor": 152,
    "nama": "Sekolah/Madrasah menentukan kelulusan siswa dari satuan pendidikan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Menentukan kelulusan melalui rapat yang dihadiri guru kelas, guru mata pelajaran, dan kepala sekolah/madrasah" },
      { "id": 2, "nilai" : 3, "nama" : "Menentukan kelulusan melalui rapat yang dihadiri guru kelas dan kepala sekolah/madrasah, tanpa  guru mata pelajaran" },
      { "id": 3, "nilai" : 2, "nama" : "Menentukan kelulusan melalui rapat dihari oleh perwakilan guru dan kepala sekolah/madrasah" },
      { "id": 4, "nilai" : 1, "nama" : "Menentukan kelulusan tanpa  melalui rapat" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak menentukan  kelulusan dari satuan pendidikan" }
    ],
    "jawaban": 4
  },
  {
    "id": 5304,
    "bagian_id": 301,
    "nomor": 151,
    "nama": "Sekolah/Madrasah melaporkan pencapaian hasil belajar siswa kepada Dinas Pendidikan/kankemenag  Kabupaten/Kota.",
    "bobot": 2,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melaporkan pencapaian hasil belajar siswa kurang dari 20 hari setelah akhir semester" },
      { "id": 2, "nilai" : 3, "nama" : "Melaporkan pencapaian hasil belajar siswa antara 21-40 hari setelah akhir semester" },
      { "id": 3, "nilai" : 2, "nama" : "Melaporkan pencapaian hasil belajar siswa antara 41-60 hari setelah akhir semester" },
      { "id": 4, "nilai" : 1, "nama" : "Melaporkan pencapaian hasil belajar siswa antara 61-80   hari setelah akhir semester" },
      { "id": 5, "nilai" : 0, "nama" : "Melaporkan pencapaian hasil belajar siswa lebih dari 80 hari setelah akhir semester" }
    ],
    "jawaban": 4
  },
  {
    "id": 5303,
    "bagian_id": 301,
    "nomor": 150,
    "nama": "Sekolah/Madrasah melaporkan hasil penilaian setiap akhir semester kepada orang tua/wali siswa dalam bentuk buku laporan pendidikan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Laporan hasil penilaian setiap akhir semester dengan penjelasan kepala sekolah/madrasah dan wali  kelas kepada orang tua/wali siswa dan siswa yang bersangkutan" },
      { "id": 2, "nilai" : 3, "nama" : "Laporan hasil penilaian setiap akhir semester dengan penjelasan kepala sekolah/madrasah dan wali  kelas kepada orang tua/wali siswa tanpa siswa yang bersangkutan" },
      { "id": 3, "nilai" : 2, "nama" : "Laporan hasil penilaian setiap akhir semester tanpa penjelasan umum kepala sekolah/madrasah tetapi langsung dari wali  kelas kepada orang tua/wali siswa dan siswa yang bersangkutan" },
      { "id": 4, "nilai" : 1, "nama" : "Laporan hasil penilaian setiap akhir semester tanpa penjelasan umum kepala sekolah/madrasah tetapi langsung dari wali  kelas kepada orang tua/wali siswa tanpa siswa yang bersangkutan" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melaporkan hasil penilaian langsung kepada siswa" }
    ],
    "jawaban": 4
  },
  {
    "id": 5302,
    "bagian_id": 301,
    "nomor": 149,
    "nama": "Sekolah/Madrasah menentukan nilai  akhir kelompok mata  pelajaran agama dan akhlak mulia, kewarganegaraan dan kepribadian.",
    "bobot": 2,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Menentukan nilai akhir melalui rapat  yang dihadiri oleh kepala  sekolah,  guru mata  pelajaran,  dan guru kelas" },
      { "id": 2, "nilai" : 3, "nama" : "Menentukan nilai akhir melalui rapat  yang dihadiri oleh kepala  sekolah dan guru mata  pelajaran" },
      { "id": 3, "nilai" : 2, "nama" : "Menentukan nilai akhir melalui rapat  yang dihadiri oleh kepala  sekolah dan sebagian guru" },
      { "id": 4, "nilai" : 1, "nama" : "Menentukan nilai akhir oleh guru mata pelajaran tanpa melalui rapat" },
      { "id": 5, "nilai" : 0, "nama" : "Ditetapkan oleh guru" }
    ],
    "jawaban": 4
  },
  {
    "id": 5301,
    "bagian_id": 301,
    "nomor": 148,
    "nama": "Sekolah/madrasah menentukan nilai  akhir kelompok mata  pelajaran estetika dan kelompok mata  pelajaran  pendidikan  jasmani, olahraga, dan kesehatan.",
    "bobot": 2,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Menentukan nilai akhir melalui rapat  yang dihadiri oleh kepala  sekolah,  guru mata  pelajaran,  dan guru kelas" },
      { "id": 2, "nilai" : 3, "nama" : "Menentukan nilai akhir melalui rapat  yang dihadiri oleh kepala  sekolah dan guru kelas tanpa guru mata  pelajaran" },
      { "id": 3, "nilai" : 2, "nama" : "Menentukan nilai akhir melalui rapat  yang dihadiri oleh kepala  sekolah dan sebagian guru" },
      { "id": 4, "nilai" : 1, "nama" : "Menentukan nilai akhir oleh guru mata pelajaran tanpa melalui rapat" },
      { "id": 5, "nilai" : 0, "nama" : "Ditetapkan oleh guru" }
    ],
    "jawaban": 4
  },
  {
    "id": 5300,
    "bagian_id": 301,
    "nomor": 147,
    "nama": "Sekolah/Madrasah menentukan kriteria kenaikan kelas melalui rapat.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Menentukan kriteria kenaikan kelas melalui rapat yang dihadiri kepala sekolah, guru kelas, dan guru mata pelajaran" },
      { "id": 2, "nilai" : 3, "nama" : "Menentukan kriteria kenaikan kelas melalui rapat yang dihadiri kepala sekolah dan guru kelas tanpa guru mata pelajaran" },
      { "id": 3, "nilai" : 2, "nama" : "Menentukan kriteria kenaikan kelas melaui rapat yang dihadiri kepala sekolah dan sebagian guru" },
      { "id": 4, "nilai" : 1, "nama" : "Kriteria kenaikan kelas ditentukan oleh kepala sekolah tanpa melalui rapat" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak ada kriteria kenaikan kelas secara jelas" }
    ],
    "jawaban": 4
  },
  {
    "id": 5299,
    "bagian_id": 301,
    "nomor": 146,
    "nama": "Sekolah/Madrasah mengkoordinasikan ulangan tengah semester, ulangan akhir semester, dan ulangan kenaikan kelas.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sekolah/Madrasah mengkoordinasikan ulangan tengah semester, akhir semester, dan kenaikan kelas melalui rapat yang  dihadiri oleh guru mata  pelajaran,  guru kelas,  dan kepala sekolah" },
      { "id": 2, "nilai" : 3, "nama" : "Sekolah/Madrasah mengkoordinasikan ulangan tengah semester, akhir semester, dan kenaikan kelas melalui rapat yang dihadiri oleh guru kelas,  dan kepala  sekolah" },
      { "id": 3, "nilai" : 2, "nama" : "Sekolah/Madrasah mengkoordinasikan ulangan tengah semester, akhir semester, dan kenaikan kelas melalui rapat yang dihadiri oleh  sebagian guru dan kepala sekolah" },
      { "id": 4, "nilai" : 1, "nama" : "Sekolah/Madrasah mengkoordinasikan ulangan tengah semester,   akhir semester, dan kenaikan kelas tanpa melalui rapat" },
      { "id": 5, "nilai" : 0, "nama" : "Sekolah/Madrasah tidak mengkoordinasikan ulangan tengah semester dan akhir semester" }
    ],
    "jawaban": 4
  },
  {
    "id": 5298,
    "bagian_id": 301,
    "nomor": 145,
    "nama": "Guru mengkomunikasikan hasil penilaian kepribadian siswa kepada guru Pendidikan Kewarganegaraan sebagai  informasi untuk menentukan nilai akhir semester.",
    "bobot": 2,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sebanyak 86%-100% guru melaporkan hasil penilaian kepribadian siswa kepada guru Pendidikan Kewarganegaraan" },
      { "id": 2, "nilai" : 3, "nama" : "Sebanyak 71%-85% guru melaporkan hasil penilaian kepribadian siswa kepada guru Pendidikan Kewarganegaraan" },
      { "id": 3, "nilai" : 2, "nama" : "Sebanyak 56%-70% guru melaporkan hasil penilaian kepribadian siswa kepada guru Pendidikan Kewarganegaraan" },
      { "id": 4, "nilai" : 1, "nama" : "Sebanyak 41%-55% guru melaporkan hasil penilaian kepribadian siswa kepada guru Pendidikan Kewarganegaraan" },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 41% guru melaporkan hasil penilaian kepribadian siswa kepada guru Pendidikan Kewarganegaraan" }
    ],
    "jawaban": 4
  },
  {
    "id": 5297,
    "bagian_id": 301,
    "nomor": 144,
    "nama": "Guru mengkomunikasikan hasil penilaian akhlak siswa kepada  guru Pendidikan Agama sebagai  informasi  untuk menentukan nilai akhir semester.",
    "bobot": 2,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sebanyak 86%-100% guru melaporkan hasil penilaian akhlak siswa kepada guru Pendidikan Agama" },
      { "id": 2, "nilai" : 3, "nama" : "Sebanyak 71%-85% guru melaporkan hasil penilaian akhlak siswa kepada guru Pendidikan Agama" },
      { "id": 3, "nilai" : 2, "nama" : "Sebanyak 56%-70% guru melaporkan hasil penilaian akhlak siswa kepada guru Pendidikan Agama" },
      { "id": 4, "nilai" : 1, "nama" : "Sebanyak 41%-55% guru melaporkan hasil penilaian akhlak siswa kepada guru Pendidikan Agama" },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 41% guru melaporkan hasil penilaian akhlak siswa kepada guru Pendidikan Agama" }
    ],
    "jawaban": 4
  },
  {
    "id": 5296,
    "bagian_id": 301,
    "nomor": 143,
    "nama": "Guru melaporkan hasil penilaian mata pelajaran pada setiap akhir semester kepada kepala sekolah/madrasah dalam bentuk laporan prestasi belajar siswa.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sebanyak 100% guru melaporkan hasil penilaian prestasi belajar siswa kepada kepala sekolah/madrasah" },
      { "id": 2, "nilai" : 3, "nama" : "Sebanyak 95%-99% guru melaporkan hasil penilaian prestasi belajar siswa kepada kepala sekolah/madrasah" },
      { "id": 3, "nilai" : 2, "nama" : "Sebanyak 90%-94% guru melaporkan hasil penilaian prestasi belajar siswa kepada kepala sekolah/madrasah" },
      { "id": 4, "nilai" : 1, "nama" : "Sebanyak 85%-89% guru melaporkan hasil penilaian prestasi belajar siswa kepada kepala sekolah/madrasah" },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 85% guru melaporkan hasil penilaian prestasi belajar siswa kepada kepala sekolah/madrasah" }
    ],
    "jawaban": 4
  },
  {
    "id": 5295,
    "bagian_id": 301,
    "nomor": 142,
    "nama": "Guru memanfaatkan hasil penilaian untuk perbaikan pembelajaran.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sebanyak 86%-100% guru memanfaatkan hasil penilaian untuk perbaikan pembelajaran" },
      { "id": 2, "nilai" : 3, "nama" : "Sebanyak 71%-85% guru memanfaatkan hasil penilaian untuk perbaikan pembelajaran" },
      { "id": 3, "nilai" : 2, "nama" : "Sebanyak 56%-70% guru memanfaatkan hasil penilaian untuk perbaikan pembelajaran" },
      { "id": 4, "nilai" : 1, "nama" : "Sebanyak 41%-55% guru memanfaatkan hasil penilaian untuk perbaikan pembelajaran" },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 41% guru memanfaatkan hasil penilaian untuk perbaikan pembelajaran" }
    ],
    "jawaban": 4
  },
  {
    "id": 5294,
    "bagian_id": 301,
    "nomor": 141,
    "nama": "Guru mengembalikan hasil pemeriksaan pekerjaan siswa disertai balikan/ komentar yang mendidik.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sebanyak 86%-100% guru mengembalikan hasil pemeriksaan pekerjaan siswa disertai balikan/komentar yang mendidik" },
      { "id": 2, "nilai" : 3, "nama" : "Sebanyak 71%-85% guru mengembalikan hasil pemeriksaan pekerjaan siswa disertai balikan/komentar yang mendidik" },
      { "id": 3, "nilai" : 2, "nama" : "Sebanyak 56%-70% guru mengembalikan hasil pemeriksaan pekerjaan siswa disertai balikan/komentar yang mendidik" },
      { "id": 4, "nilai" : 1, "nama" : "Sebanyak 41%-55% guru mengembalikan hasil pemeriksaan pekerjaan siswa disertai balikan/komentar yang mendidik" },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 41% guru mengembalikan hasil pemeriksaan pekerjaan siswa disertai balikan/komentar yang mendidik" }
    ],
    "jawaban": 4
  },
  {
    "id": 5211,
    "bagian_id": 297,
    "nomor": 58,
    "nama": "Kepala sekolah/madrasah memiliki kemampuan kewirausahaan yang ditunjukkan dengan adanya kegiatan kewirausahaan sebagai sumber belajar siswa seperti: (1) koperasi siswa, (2) peternakan/perikanan, (3) pertanian/perkebunan, (4) kantin sekolah, (5) unit produksi dan lain- lain.",
    "bobot": 2,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki 4 atau lebih jenis usaha" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki 3 jenis usaha" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki 2 jenis usaha" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki 1 jenis usaha" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki usaha" }
    ],
    "jawaban": 4
  },
  {
    "id": 5154,
    "bagian_id": 294,
    "nomor": 1,
    "nama": "Sekolah/Madrasah melaksanakan kurikulum berdasarkan muatan Kurikulum Tingkat Satuan Pendidikan (KTSP). ",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melaksanakan kurikulum berdasarkan 8 muatan KTSP " },
      { "id": 2, "nilai" : 3, "nama" : "Melaksanakan kurikulum berdasarkan 7 muatan KTSP " },
      { "id": 3, "nilai" : 2, "nama" : "Melaksanakan kurikulum berdasarkan 6 muatan KTSP " },
      { "id": 4, "nilai" : 1, "nama" : "Melaksanakan kurikulum berdasarkan 5 atau kurang muatan KTSP " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melaksanakan KTSP " }
    ],
    "jawaban": 4
  },
  {
    "id": 5155,
    "bagian_id": 294,
    "nomor": 2,
    "nama": "Sekolah/Madrasah mengembangkan kurikulum dengan melibatkan pihak terkait berpedoman pada  panduan penyusunan kurikulum yang disusun oleh BSNP.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Mengembangkan kurikulum bersama kepala sekolah/madrasah, seluruh guru, komite sekolah/madrasah atau penyelenggara lembaga pendidikan dan tokoh pendidikan setempat" },
      { "id": 2, "nilai" : 3, "nama" : "Mengembangkan kurikulum bersama kepala sekolah/madrasah, seluruh guru, dan komite sekolah/ madrasah atau penyelenggara lembaga pendidikan" },
      { "id": 3, "nilai" : 2, "nama" : "Mengembangkan kurikulum bersama kepala sekolah/madrasah dan seluruh guru" },
      { "id": 4, "nilai" : 1, "nama" : "Mengembangkan  kurikulum bersama kepala sekolah/madrasah dibantu beberapa orang guru" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak mengembangkan kurikulum" }
    ],
    "jawaban": 4
  },
  {
    "id": 5156,
    "bagian_id": 294,
    "nomor": 3,
    "nama": "Sekolah/Madrasah mengembangkan  kurikulum  dengan  menggunakan prinsip pengembangan KTSP.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Menggunakan 7 prinsip pengembangan KTSP" },
      { "id": 2, "nilai" : 3, "nama" : "Menggunakan 5-6 prinsip pengembangan KTSP" },
      { "id": 3, "nilai" : 2, "nama" : "Menggunakan 3-4 prinsip pengembangan KTSP" },
      { "id": 4, "nilai" : 1, "nama" : "Menggunakan 1-2 prinsip pengembangan KTSP" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak mengembangkan kurikulum" }
    ],
    "jawaban": 4
  },
  {
    "id": 5157,
    "bagian_id": 294,
    "nomor": 4,
    "nama": "Sekolah/Madrasah melaksanakan   pengembangan   kurikulum  melalui mekanisme penyusunan KTSP.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Mekanisme pengembangan kurikulum  dilakukan  melalui 7 kegiatan pokok" },
      { "id": 2, "nilai" : 3, "nama" : "Mekanisme pengembangan kurikulum  dilakukan  melalui 5-6 (enam) kegiatan pokok" },
      { "id": 3, "nilai" : 2, "nama" : "Mekanisme pengembangan kurikulum  dilakukan  melalui 3-4 kegiatan pokok" },
      { "id": 4, "nilai" : 1, "nama" : "Mekanisme pengembangan kurikulum  dilakukan  melalui 1-2 kegiatan pokok" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak mengembangkan kurikulum" }
    ],
    "jawaban": 4
  },
  {
    "id": 5158,
    "bagian_id": 294,
    "nomor": 5,
    "nama": "Sekolah/Madrasah melaksanakan   kurikulum  dalam   bentuk  pengajaran berdasarkan prinsip pelaksanaan kurikulum.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melaksanakan kurikulum berdasarkan 7 prinsip pelaksanaan" },
      { "id": 2, "nilai" : 3, "nama" : "Melaksanakan kurikulum berdasarkan 5-6 prinsip pelaksanaan kurikulum" },
      { "id": 3, "nilai" : 2, "nama" : "Melaksanakan kurikulum berdasarkan 3-4 prinsip pelaksanaan" },
      { "id": 4, "nilai" : 1, "nama" : "Melaksanakan kurikulum berdasarkan 1-2 prinsip pelaksanaan" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melaksanakan kurikulum berdasarkan prinsip dimaksud" }
    ],
    "jawaban": 4
  },
  {
    "id": 5159,
    "bagian_id": 294,
    "nomor": 6,
    "nama": "Sekolah/Madrasah menyusun   kurikulum  muatan   lokal  dan  kurikulum berbasis pendidikan karakter dengan melibatkan berbagai pihak.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melibatkan kepala sekolah/madrasah, guru, komite sekolah/madrasah atau penyelenggara lembaga pendidikan, dinas pendidikan/Kankemenag kabupaten/kota dan instansi terkait di daerah;" },
      { "id": 2, "nilai" : 3, "nama" : "Melibatkan kepala sekolah/madrasah, guru, komite sekolah/madrasah atau penyelenggara lembaga pendidikan dan dinas pendidikan/Kankemenag kabupaten/kota;" },
      { "id": 3, "nilai" : 2, "nama" : "Melibatkan kepala sekolah/madrasah, guru, dan komite sekolah/madrasah atau penyelenggara lembaga pendidikan;" },
      { "id": 4, "nilai" : 1, "nama" : "Melibatkan kepala sekolah/madrasah, dan guru;" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak menyusun  kurikulum muatan lokal dan kurikulum berbasis pendidikan karakter." }
    ],
    "jawaban": 4
  },
  {
    "id": 5160,
    "bagian_id": 294,
    "nomor": 7,
    "nama": "Sekolah/Madrasah melaksanakan program pengembangan diri dalam bentuk kegiatan layanan konseling.",
    "bobot": 2,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melaksanakan 4 jenis atau lebih kegiatan layanan konseling" },
      { "id": 2, "nilai" : 3, "nama" : "Melaksanakan 3 jenis kegiatan layanan konseling" },
      { "id": 3, "nilai" : 2, "nama" : "Melaksanakan 2 jenis kegiatan layanan konseling" },
      { "id": 4, "nilai" : 1, "nama" : "Melaksanakan 1 jenis kegiatan layanan konseling" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melaksanakan kegiatan layanan konseling" }
    ],
    "jawaban": 4
  },
  {
    "id": 5161,
    "bagian_id": 294,
    "nomor": 8,
    "nama": "Sekolah/Madrasah melaksanakan program pengembangan diri dalam bentuk kegiatan ekstrakurikuler.",
    "bobot": 2,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melaksanakan 4 jenis atau lebih kegiatan ekstrakurikuler" },
      { "id": 2, "nilai" : 3, "nama" : "Melaksanakan 3 jenis kegiatan ekstrakurikuler" },
      { "id": 3, "nilai" : 2, "nama" : "Melaksanakan 2 jenis kegiatan ekstrakurikuler" },
      { "id": 4, "nilai" : 1, "nama" : "Melaksanakan 1 jenis kegiatan ekstrakurikuler" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melaksanakan kegiatan ekstrakurikuler" }
    ],
    "jawaban": 4
  },
  {
    "id": 5162,
    "bagian_id": 294,
    "nomor": 9,
    "nama": "Sekolah/Madrasah menjabarkan   Standar Kompetensi (SK) dan Kompetensi Dasar (KD) ke dalam indikator-indikator untuk setiap mata pelajaran.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sebanyak 8 atau  lebih mata  pelajaran telah sesuai antara SK, KD, dan indikator-indikatornya" },
      { "id": 2, "nilai" : 3, "nama" : "Sebanyak 5-7  mata pelajaran telah sesuai antara SK,  KD, dan indikator-indikatornya" },
      { "id": 3, "nilai" : 2, "nama" : "Sebanyak 2-4 mata pelajaran telah sesuai antara SK,  KD, dan indikator-indikatornya" },
      { "id": 4, "nilai" : 1, "nama" : "Sebanyak 1 mata pelajaran telah sesuai antara SK, KD,   dan indikator-indikatornya" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak ada mata pelajaran yang sesuai antara SK,  KD,   dan indikator-indikatornya" }
    ],
    "jawaban": 4
  },
  {
    "id": 5163,
    "bagian_id": 294,
    "nomor": 10,
    "nama": "Sekolah/Madrasah menerapkan kegiatan pembelajaran sesuai dengan ketentuan beban belajar yang tertuang pada lampiran Permendiknas Nomor 22 Tahun 2006.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Menerapkan 4 ketentuan beban belajar sesuai dengan Permendiknas" },
      { "id": 2, "nilai" : 3, "nama" : "Menerapkan 3 ketentuan beban belajar sesuai dengan Permendiknas" },
      { "id": 3, "nilai" : 2, "nama" : "Menerapkan 2 ketentuan beban belajar sesuai dengan Permendiknas " },
      { "id": 4, "nilai" : 1, "nama" : "Menerapkan 1 ketentuan beban belajar sesuai dengan Permendiknas" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak menerapkan  ketentuan beban belajar sesuai dengan Permendiknas" }
    ],
    "jawaban": 4
  },
  {
    "id": 5164,
    "bagian_id": 294,
    "nomor": 11,
    "nama": "Guru mengalokasikan waktu  untuk penugasan terstruktur dan kegiatan mandiri tidak terstruktur kepada siswa maksimal 40% dari alokasi waktu tiap mata pelajaran",
    "bobot": 2,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sebanyak 76%-100% guru memberikan penugasan terstruktur dan kegiatan mandiri tidak terstruktur" },
      { "id": 2, "nilai" : 3, "nama" : "Sebanyak 51%-75% guru memberikan penugasan terstruktur dan kegiatan mandiri tidak terstruktur" },
      { "id": 3, "nilai" : 2, "nama" : "Sebanyak 26%-50% guru memberikan penugasan terstruktur dan kegiatan mandiri tidak terstruktur" },
      { "id": 4, "nilai" : 1, "nama" : "Sebanyak 1%-25% guru memberikan penugasan terstruktur dan kegiatan mandiri tidak terstruktur" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak ada guru yang mengalokasikan penugasan terstruktur dan kegiatan mandiri tidak terstruktur" }
    ],
    "jawaban": 4
  },
  {
    "id": 5165,
    "bagian_id": 294,
    "nomor": 12,
    "nama": "Pengembangan KTSP dilaksanakan dengan mengacu kepada: (1) Standar Isi, (2) Standar Kompetensi Lulusan, (3) berpedoman pada  panduan penyusunan kurikulum yang disusun oleh BSNP,  serta (4) memperhatikan pertimbangan komite sekolah/madrasah.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Dilaksanakan dengan mengacu kepada 4 unsur di atas" },
      { "id": 2, "nilai" : 3, "nama" : "Dilaksanakan dengan mengacu kepada 3 unsur di atas" },
      { "id": 3, "nilai" : 2, "nama" : "Dilaksanakan dengan mengacu kepada 2 unsur di atas" },
      { "id": 4, "nilai" : 1, "nama" : "Dilaksanakan dengan mengacu  1 unsur di atas" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak mengembangkan KTSP" }
    ],
    "jawaban": 4
  },
  {
    "id": 5166,
    "bagian_id": 294,
    "nomor": 13,
    "nama": "Sekolah/Madrasah mengembangkan silabus mata pelajaran dengan menggunakan 7 langkah pengembangan silabus",
    "bobot": 2,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sebanyak 91%-100% silabus mata pelajaran dikembangkan dengan menggunakan 7 langkah pengembangan silabus" },
      { "id": 2, "nilai" : 3, "nama" : "Sebanyak 81%-90% silabus mata pelajaran dikembangkan dengan menggunakan 7 langkah pengembangan silabus" },
      { "id": 3, "nilai" : 2, "nama" : "Sebanyak 71%-80% silabus mata pelajaran dikembangkan dengan menggunakan 7 langkah pengembangan silabus" },
      { "id": 4, "nilai" : 1, "nama" : "Sebanyak 61%-70% silabus mata pelajaran dikembangkan dengan menggunakan 7 langkah pengembangan silabus" },
      { "id": 5, "nilai" : 0, "nama" : "Sebanyak kurang dari 61% silabus mata pelajaran yang dikembangkan dengan menggunakan 7 langkah pengembangan silabus" }
    ],
    "jawaban": 4
  },
  {
    "id": 5167,
    "bagian_id": 294,
    "nomor": 14,
    "nama": "Dalam mengembangkan KTSP,  guru menyusun silabus setiap mata pelajaran yang diajarkan.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sebanyak 91% atau lebih silabus dikembangkan sendiri oleh guru bersama-sama guru lain  dalam satu sekolah/madrasah" },
      { "id": 2, "nilai" : 3, "nama" : "Sebanyak 76% atau lebih silabus dikembangkan melalui gugus atau Kelompok Kerja Guru (KKG)" },
      { "id": 3, "nilai" : 2, "nama" : "Sebanyak 76% atau lebih silabus dikembangkan melalui Unit Pelaksana Teknis Daerah (UPTD)/Dinas Pendidikan/Kandepag" },
      { "id": 4, "nilai" : 1, "nama" : "Sebanyak 76% atau lebih silabus dikembangkan dengan mengadopsi atau mengadaptasi KTSP  yang sudah ada" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak ada guru yang menyusun  silabus sendiri" }
    ],
    "jawaban": 4
  },
  {
    "id": 5168,
    "bagian_id": 294,
    "nomor": 15,
    "nama": "Sekolah/Madrasah memiliki silabus untuk setiap mata  pelajaran sesuai dengan panduan penyusunan KTSP.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sebanyak 7 atau  lebih mata  pelajaran memiliki silabus" },
      { "id": 2, "nilai" : 3, "nama" : "Sebanyak 5-6 mata pelajaran memiliki silabus" },
      { "id": 3, "nilai" : 2, "nama" : "Sebanyak 3-4 mata pelajaran memiliki silabus" },
      { "id": 4, "nilai" : 1, "nama" : "Sebanyak 1-2 mata pelajaran memiliki silabus" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak ada mata pelajaran yang memiliki silabus" }
    ],
    "jawaban": 4
  },
  {
    "id": 5169,
    "bagian_id": 294,
    "nomor": 16,
    "nama": "Sekolah/Madrasah menentukan Kriteria Ketuntasan Minimal (KKM) 75,00 persen  untuk setiap mata pelajaran melalui rapat  dewan guru.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sebanyak 6 atau  lebih mata  pelajaran dengan KKM sama dengan 75,00 persen atau lebih" },
      { "id": 2, "nilai" : 3, "nama" : "Sebanyak 5 mata pelajaran dengan KKM sama dengan 75,00 persen atau lebih" },
      { "id": 3, "nilai" : 2, "nama" : "Sebanyak 4 mata pelajaran dengan KKM sama dengan 75,00 persen atau lebih" },
      { "id": 4, "nilai" : 1, "nama" : "Sebanyak 3 mata pelajaran dengan KKM sama dengan 75,00 persen atau lebih" },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 3 mata pelajaran dengan KKM sama dengan 75,00 persen atau lebih" }
    ],
    "jawaban": 4
  },
  {
    "id": 5170,
    "bagian_id": 294,
    "nomor": 17,
    "nama": "Sekolah/Madrasah menentukan Kriteria Ketuntasan Minimal (KKM) dengan memperhatikan unsur: (1) karakteristik siswa/Intake siswa, (2) karakteristik mata pelajaran/kompleksitas, dan (3) kondisi sekolah/madrasah/daya dukung",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Menentukan KKM dengan memperhatikan 3 unsur melalui rapat dewan guru" },
      { "id": 2, "nilai" : 3, "nama" : "Menentukan KKM dengan memperhatikan 2 unsur melalui rapat dewan guru" },
      { "id": 3, "nilai" : 2, "nama" : "Menentukan KKM dengan memperhatikan 1 unsur melalui rapat dewan guru" },
      { "id": 4, "nilai" : 1, "nama" : "Menentukan KKM tanpa memperhatikan 3 unsur melalui rapat dewan guru" },
      { "id": 5, "nilai" : 0, "nama" : "Menentukan KKM tanpa memperhatikan 3 unsur dan tidak melalui rapat dewan guru" }
    ],
    "jawaban": 4
  },
  {
    "id": 5171,
    "bagian_id": 294,
    "nomor": 18,
    "nama": "Sekolah/Madrasah memiliki kalender pendidikan yang menuat pengaturan waktu untuk kegiatan pembelajaran peserta didik  selama satu  tahun  ajaran: (1) awal tahun pelajaran, (2) minggu efektif, (3) pembelajaran efeektif, dan (4) hari libur.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memuat 4 macam pengaturan waktu" },
      { "id": 2, "nilai" : 3, "nama" : "Memuat 3 macam pengaturan waktu" },
      { "id": 3, "nilai" : 2, "nama" : "Memuat 2 macam pengaturan waktu" },
      { "id": 4, "nilai" : 1, "nama" : "Memuat 1 macam pengaturan waktu" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki kalender  pendidikan" }
    ],
    "jawaban": 4
  },
  {
    "id": 5172,
    "bagian_id": 295,
    "nomor": 19,
    "nama": "Setiap mata  pelajaran memiliki Rencana Pelaksanaan Pembelajaran (RPP) dengan mengintegrasikan pendidikan karakter yang dijabarkan dari silabus.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sebanyak 8 atau  lebih mata  pelajaran memiliki RPP dengan mengintegrasikan pendidikan karakter yang dijabarkan dari silabus" },
      { "id": 2, "nilai" : 3, "nama" : "Sebanyak 6-7 mata pelajaran memiliki RPP dengan mengintegrasikan pendidikan karakter yang dijabarkan  dari silabus" },
      { "id": 3, "nilai" : 2, "nama" : "Sebanyak 4-5 mata pelajaran memiliki RPP dengan mengintegrasikan pendidikan karakter yang dijabarkan  dari silabus" },
      { "id": 4, "nilai" : 1, "nama" : "Sebanyak 2-3 mata pelajaran memiliki RPP dengan mengintegrasikan pendidikan karakter yang dijabarkan  dari silabus" },
      { "id": 5, "nilai" : 0, "nama" : "Sebanyak 1 atau tidak ada mata pelajaran memiliki RPP dengan mengintegrasikan pendidikan karakter yang dijabarkan dari silabus" }
    ],
    "jawaban": 4
  },
  {
    "id": 5173,
    "bagian_id": 295,
    "nomor": 20,
    "nama": "RPP disusun dengan memperhatikan 6 prinsip penyusunan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sebanyak 91%-100% RPP sudah memperhatikan 6 prinsip penyusunan" },
      { "id": 2, "nilai" : 3, "nama" : "Sebanyak 81%-90% RPP sudah memperhatikan 6 prinsip penyusunan" },
      { "id": 3, "nilai" : 2, "nama" : "Sebanyak 71%-80% RPP sudah memperhatikan 6 prinsip penyusunan" },
      { "id": 4, "nilai" : 1, "nama" : "Sebanyak 61%-70% RPP sudah memperhatikan 6 prinsip penyusunan" },
      { "id": 5, "nilai" : 0, "nama" : "Sebanyak kurang dari 61 % RPP  yang sudah memperhatikan 6 prinsip penyusunan" }
    ],
    "jawaban": 4
  },
  {
    "id": 5174,
    "bagian_id": 295,
    "nomor": 21,
    "nama": "Sekolah/Madrasah melaksanakan proses pembelajaran dengan memenuhi persyaratan yang ditentukan",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memenuhi 4 persyaratan pelaksanaan proses pembelajaran" },
      { "id": 2, "nilai" : 3, "nama" : "Memenuhi 3 persyaratan pelaksanaan proses pembelajaran" },
      { "id": 3, "nilai" : 2, "nama" : "Memenuhi 2 persyaratan pelaksanaan proses pembelajaran" },
      { "id": 4, "nilai" : 1, "nama" : "Memenuhi 1 persyaratan pelaksanaan proses pembelajaran" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memenuhi persyaratan pelaksanaan proses pembelajaran" }
    ],
    "jawaban": 4
  },
  {
    "id": 5175,
    "bagian_id": 295,
    "nomor": 22,
    "nama": "Proses pembelajaran di sekolah/madrasah dilaksanakan sesuai dengan langkah-langkah pembelajaran.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sebanyak 91%-100% guru melaksanakan proses pembelajaran sesuai dengan langkah-langkah pembelajaran" },
      { "id": 2, "nilai" : 3, "nama" : "Sebanyak 81%-90% guru melaksanakan proses pembelajaran sesuai dengan langkah-langkah pembelajaran" },
      { "id": 3, "nilai" : 2, "nama" : "Sebanyak 71%-80% guru melaksanakan proses pembelajaran sesuai dengan langkah-langkah pembelajaran" },
      { "id": 4, "nilai" : 1, "nama" : "Sebanyak 61%-70% guru melaksanakan proses pembelajaran sesuai dengan langkah-langkah pembelajaran" },
      { "id": 5, "nilai" : 0, "nama" : "Sebanyak kurang dari 61 % guru yang melaksanakan proses pembelajaran  sesuai dengan langkah-langkah pembelajaran" }
    ],
    "jawaban": 4
  },
  {
    "id": 5176,
    "bagian_id": 295,
    "nomor": 23,
    "nama": "Sekolah/Madrasah melaksanakan pembelajaran melalui pendekatan tematik untuk kelas I, II dan III.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Kelas I, II dan III melaksanakan pembelajaran melalui pendekatan tematik" },
      { "id": 2, "nilai" : 3, "nama" : "Kelas I dan II melaksanakan pembelajaran melalui pendekatan tematik" },
      { "id": 3, "nilai" : 2, "nama" : "Kelas I dan III atau kelas  II dan III melaksanakan pembelajaran melalui pendekatan tematik" },
      { "id": 4, "nilai" : 1, "nama" : "Kelas I atau II atau III melaksanakan pembelajaran melalui pendekatan tematik" },
      { "id": 5, "nilai" : 0, "nama" : "Kelas I, II dan III tidak melaksanakan pembelajaran melalui pendekatan tematik" }
    ],
    "jawaban": 4
  },
  {
    "id": 5212,
    "bagian_id": 297,
    "nomor": 59,
    "nama": "Kepala sekolah/madrasah memiliki kemampuan bekerjasama dengan pihak lain untuk kepentingan sekolah/madrasah,berpartisipasi dalam kegiatan sosial kemasyarakatan, dan memiliki kepekaan sosial terhadap orang atau  kelompok lain.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Mampu bekerjasama dengan 4 pihak atau lebih" },
      { "id": 2, "nilai" : 3, "nama" : "Mampu bekerjasama dengan 3 pihak" },
      { "id": 3, "nilai" : 2, "nama" : "Mampu bekerjasama dengan 2 pihak" },
      { "id": 4, "nilai" : 1, "nama" : "Mampu bekerjasama dengan 1 pihak" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak mampu bekerjasama dengan pihak manapun" }
    ],
    "jawaban": 4
  },
  {
    "id": 5177,
    "bagian_id": 295,
    "nomor": 24,
    "nama": "Sekolah/Madrasah melaksanakan pembelajaran melalui pendekatan mata pelajaran untuk kelas  IV, V dan VI.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Kelas IV, V dan VI melaksanakan pembelajaran melalui pendekatan mata pelajaran" },
      { "id": 2, "nilai" : 3, "nama" : "Kelas V dan  VI melaksanakan pembelajaran melalui pendekatan mata pelajaran" },
      { "id": 3, "nilai" : 2, "nama" : "Kelas IV dan  V atau IV dan VI melaksanakan pembelajaran melalui pendekatan mata pelajaran" },
      { "id": 4, "nilai" : 1, "nama" : "Kelas IV atau V atau VI melaksanakan pembelajaran melalui pendekatan mata pelajaran" },
      { "id": 5, "nilai" : 0, "nama" : "Kelas IV, V dan VI tidak melaksanakan pembelajaran melalui pendekatan mata pelajaran" }
    ],
    "jawaban": 4
  },
  {
    "id": 5178,
    "bagian_id": 295,
    "nomor": 25,
    "nama": "Pemantauan proses pembelajaran dilakukan oleh kepala sekolah/ madrasah mencakup tahap perencanaan, tahap pelaksanaan, dan tahap penilaian hasil pembelajaran.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Mencakup 3 tahap pemantauan serta dilakukan diskusi hasil pemantauan" },
      { "id": 2, "nilai" : 3, "nama" : "Mencakup 3 tahap pemantauan tanpa dilakukan diskusi hasil pemantauan" },
      { "id": 3, "nilai" : 2, "nama" : "Mencakup 2 tahap pemantauan" },
      { "id": 4, "nilai" : 1, "nama" : "Mencakup 1 tahap pemantauan" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak pernah  melakukan pemantauan" }
    ],
    "jawaban": 4
  },
  {
    "id": 5179,
    "bagian_id": 295,
    "nomor": 26,
    "nama": "Supervisi proses pembelajaran dilakukan oleh kepala sekolah/madrasah dengan melakukan kunjungan kelas serta melakukan tindak lanjut dengan cara pemberian contoh, diskusi, pelatihan, dan konsultasi.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melakukan supervisi proses pembelajaran dengan tindak lanjut melalui 4 cara" },
      { "id": 2, "nilai" : 3, "nama" : "Melakukan supervisi proses pembelajaran dengan tindak lanjut melalui 3 cara" },
      { "id": 3, "nilai" : 2, "nama" : "Melakukan supervisi proses pembelajaran dengan tindak lanjut melalui 2 cara" },
      { "id": 4, "nilai" : 1, "nama" : "Melakukan supervisi proses pembelajaran dengan tindak lanjut melalui 1 cara" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melakukan supervisi proses pembelajaran" }
    ],
    "jawaban": 4
  },
  {
    "id": 5180,
    "bagian_id": 295,
    "nomor": 27,
    "nama": "Evaluasi terhadap guru dalam proses pembelajaran dilakukan oleh kepala sekolah/madrasah dengan memperhatikan 4 aspek, yaitu: (1) persiapan, (2) pelaksanaan, (3) evaluasi pembelajaran, dan (4) rencana  tindak lanjut.",
    "bobot": 2,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Evaluasi dilakukan dengan memperhatikan 4 aspek" },
      { "id": 2, "nilai" : 3, "nama" : "Evaluasi dilakukan dengan memperhatikan 3 aspek" },
      { "id": 3, "nilai" : 2, "nama" : "Evaluasi dilakukan dengan memperhatikan 2 aspek" },
      { "id": 4, "nilai" : 1, "nama" : "Evaluasi dilakukan dengan memperhatikan 1 aspek" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melakukan evaluasi" }
    ],
    "jawaban": 4
  },
  {
    "id": 5181,
    "bagian_id": 295,
    "nomor": 28,
    "nama": "Kepala sekolah/madrasah menyampaikan hasil pengawasan proses pembelajaran kepada pemangku kepentingan.",
    "bobot": 2,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Hasil  pengawasan disampaikan kepada guru yang bersangkutan, dewan guru, pengawas sekolah/madrasah, dan komite sekolah/madrasah" },
      { "id": 2, "nilai" : 3, "nama" : "Hasil  pengawasan disampaikan kepada yang bersangkutan, dewan guru, dan pengawas sekolah/madrasah" },
      { "id": 3, "nilai" : 2, "nama" : "Hasil  pengawasan disampaikan kepada yang bersangkutan dan dewan guru" },
      { "id": 4, "nilai" : 1, "nama" : "Hasil  pengawasan disampaikan kepada yang bersangkutan saja" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak menyampaikan hasil pengawasan" }
    ],
    "jawaban": 4
  },
  {
    "id": 5182,
    "bagian_id": 295,
    "nomor": 29,
    "nama": "Kepala sekolah/madrasah melakukan tindak lanjut terhadap hasil pengawasan proses pembelajaran.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sebanyak 91%-100% hasil pengawasan selama satu tahun terakhir ditindaklanjuti" },
      { "id": 2, "nilai" : 3, "nama" : "Sebanyak 81%-90% hasil pengawasan selama satu tahun terakhir ditindaklanjuti" },
      { "id": 3, "nilai" : 2, "nama" : "Sebanyak 71%-80% hasil pengawasan selama satu tahun terakhir ditindaklanjuti" },
      { "id": 4, "nilai" : 1, "nama" : "Sebanyak 61%-70% hasil pengawasan selama satu tahun terakhir ditindaklanjuti" },
      { "id": 5, "nilai" : 0, "nama" : "Sebanyak kurang dari 61% hasil pengawasan selama satu tahun terakhir ditindaklanjuti" }
    ],
    "jawaban": 4
  },
  {
    "id": 5183,
    "bagian_id": 296,
    "nomor": 30,
    "nama": "Siswa  memperoleh   pengalaman   belajar   untuk   memiliki  kemampuan berpikir logis, kritis, kreatif, dan inovatif dalam pengambilan keputusan.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sebanyak 91%-100% mata pelajaran memuat tugas terstruktur secara kelompok atau individu dalam bentuk pemecahan masalah yang memberikan kesempatan berpikir logis, kritis, kreatif, dan inovatif dalam pengambilan keputusan" },
      { "id": 2, "nilai" : 3, "nama" : "Sebanyak 81%-90% mata pelajaran memuat tugas terstruktur secara kelompok atau individu dalam bentuk pemecahan masalah yang memberikan kesempatan berpikir logis, kritis, kreatif, dan inovatif dalam pengambilan keputusan" },
      { "id": 3, "nilai" : 2, "nama" : "Sebanyak 71%-80% mata pelajaran memuat tugas terstruktur secara kelompok atau individu dalam bentuk pemecahan masalah yang memberikan kesempatan berpikir logis, kritis, kreatif, dan inovatif dalam pengambilan keputusan" },
      { "id": 4, "nilai" : 1, "nama" : "Sebanyak 61%-70% mata pelajaran memuat tugas terstruktur secara kelompok atau individu dalam bentuk pemecahan masalah yang memberikan kesempatan berpikir logis, kritis, kreatif, dan inovatif dalam pengambilan keputusan" },
      { "id": 5, "nilai" : 0, "nama" : "Sebanyak kurang dari 61% mata pelajaran memuat tugas terstruktur secara kelompok atau individu dalam bentuk pemecahan masalah yang memberikan kesempatan berpikir logis, kritis, kreatif, dan inovatif dalam pengambilan keputusan" }
    ],
    "jawaban": 4
  },
  {
    "id": 5184,
    "bagian_id": 296,
    "nomor": 31,
    "nama": "Siswa memperoleh pengalaman belajar yang menunjukkan rasa keingintahuan yang tinggi dan menyadari potensinya.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sekolah/Madrasah memfasilitasi kegiatan siswa dengan memanfaatkan dan memfungsikan sumber belajar meliputi bahan ajar, buku teks, perpustakaan, laboratorium, dan internet" },
      { "id": 2, "nilai" : 3, "nama" : "Sekolah/Madrasah memfasilitasi kegiatan siswa dengan memanfaatkan dan memfungsikan sumber belajar meliputi bahan ajar, buku teks, perpustakaan, dan laboratorium" },
      { "id": 3, "nilai" : 2, "nama" : "Sekolah/Madrasah memfasilitasi kegiatan siswa dengan memanfaatkan dan memfungsikan sumber belajar meliputi bahan ajar, buku teks, dan perpustakaan" },
      { "id": 4, "nilai" : 1, "nama" : "Sekolah/Madrasah memfasilitasi kegiatan siswa dengan memanfaatkan dan memfungsikan sumber belajar meliputi bahan ajar dan buku teks" },
      { "id": 5, "nilai" : 0, "nama" : "Sekolah/Madrasah tidak pernah memfasilitasi kegiatan siswa dengan sumber belajar" }
    ],
    "jawaban": 4
  },
  {
    "id": 5185,
    "bagian_id": 296,
    "nomor": 32,
    "nama": "Siswa memperoleh pengalaman belajar yang menunjukkan kemampuan mengenali gejala alam dan sosial.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sebanyak 91%-100% RPP mata pelajaran Ilmu Pengetahuan Alam (IPA) dan Ilmu Pengetahuan Sosial (IPS) memuat kegiatan pembelajaran yang menunjukkan kemampuan mengenali gejala alam dan sosial" },
      { "id": 2, "nilai" : 3, "nama" : "Sebanyak 81%-90% RPP mata pelajaran IPA dan IPS memuat kegiatan pembelajaran yang menunjukkan kemampuan mengenali gejala alam dan sosial" },
      { "id": 3, "nilai" : 2, "nama" : "Sebanyak 71%-80% RPP mata pelajaran IPA dan IPS memuat kegiatan pembelajaran yang menunjukkan kemampuan mengenali gejala alam dan sosial" },
      { "id": 4, "nilai" : 1, "nama" : "Sebanyak 61%-70% RPP mata pelajaran IPA dan IPS memuat kegiatan pembelajaran yang menunjukkan kemampuan mengenali gejala alam dan sosial" },
      { "id": 5, "nilai" : 0, "nama" : "Sebanyak kurang dari 61% RPP mata pelajaran IPA dan IPS yang memuat kegiatan pembelajaran yang menunjukkan kemampuan mengenali gejala alam dan sosia" }
    ],
    "jawaban": 4
  },
  {
    "id": 5186,
    "bagian_id": 296,
    "nomor": 33,
    "nama": "Siswa memperoleh pengalaman belajar menggunakan informasi tentang lingkungan sekitar secara logis, kritis, dan kreatif melalui pemanfaatan sumber belajar berupa; (1) bahan ajar, (2) buku teks, (3) perpustakaan, (4) laboratorium, dan (5) internet.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sekolah/Madrasah memfasilitasi kegiatan siswa dengan memanfaatkan dan memfungsikan 5 sumber belajar" },
      { "id": 2, "nilai" : 3, "nama" : "Sekolah/Madrasah memfasilitasi kegiatan siswa dengan memanfaatkan dan memfungsikan 4  sumber belajar" },
      { "id": 3, "nilai" : 2, "nama" : "Sekolah/Madrasah memfasilitasi kegiatan siswa dengan memanfaatkan dan memfungsikan 3 sumber belajar" },
      { "id": 4, "nilai" : 1, "nama" : "Sekolah/Madrasah memfasilitasi kegiatan siswa dengan memanfaatkan dan memfungsikan 2 sumber belajar" },
      { "id": 5, "nilai" : 0, "nama" : "Sekolah/Madrasah memfasilitasi kegiatan siswa dengan memanfaatkan dan memfungsikan hanya 1 sumber belajar" }
    ],
    "jawaban": 4
  },
  {
    "id": 5187,
    "bagian_id": 296,
    "nomor": 34,
    "nama": "Siswa memperoleh pengalaman belajar yang menunjukkan kegemaran membaca dan menulis.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sebanyak 91%-100% RPP mata pelajaran memuat kegiatan pembelajaran membaca dan menulis" },
      { "id": 2, "nilai" : 3, "nama" : "Sebanyak 81%-90% RPP mata pelajaran memuat kegiatan pembelajaran membaca dan menulis" },
      { "id": 3, "nilai" : 2, "nama" : "Sebanyak 71%-80% RPP mata pelajaran memuat kegiatan pembelajaran membaca dan menulis" },
      { "id": 4, "nilai" : 1, "nama" : "Sebanyak 61%-70% RPP mata pelajaran memuat kegiatan pembelajaran membaca dan menulis" },
      { "id": 5, "nilai" : 0, "nama" : "Sebanyak kurang dari 61% RPP mata pelajaran yang memuat kegiatan pembelajaran membaca dan menulis" }
    ],
    "jawaban": 4
  },
  {
    "id": 5188,
    "bagian_id": 296,
    "nomor": 35,
    "nama": "Siswa memperoleh pengalaman belajar yang menunjukkan kecintaan dan kepedulian terhadap lingkungan sosial dan fisik.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sebanyak 91%-100% RPP mata pelajaran dikaitkan dengan kecintaan dan kepedulian terhadap   lingkungan" },
      { "id": 2, "nilai" : 3, "nama" : "Sebanyak 81%-90% RPP mata pelajaran dikaitkan dengan kecintaan dan kepedulian terhadap   lingkungan" },
      { "id": 3, "nilai" : 2, "nama" : "Sebanyak 71%-80% RPP mata pelajaran dikaitkan dengan kecintaan dan kepedulian terhadap   lingkungan" },
      { "id": 4, "nilai" : 1, "nama" : "Sebanyak 61%-70% RPP mata pelajaran dikaitkan dengan kecintaan dan kepedulian terhadap   lingkungan" },
      { "id": 5, "nilai" : 0, "nama" : "Sebanyak kurang dari 61% RPP mata pelajaran yang dikaitkan dengan kecintaan dan kepedulian terhadap   lingkungan" }
    ],
    "jawaban": 4
  },
  {
    "id": 5189,
    "bagian_id": 296,
    "nomor": 36,
    "nama": "Siswa memperoleh pengalaman belajar yang menunjukkan kemampuan untuk melakukan kegiatan seni dan budaya lokal.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Dalam satu tahun terakhir, sekolah/madrasah melaksanakan atau memfasilitasi 4 jenis/kali kegiatan seni dan budaya lokal" },
      { "id": 2, "nilai" : 3, "nama" : "Dalam satu tahun terakhir, sekolah/madrasah melaksanakan atau memfasilitasi 3 jenis/kali kegiatan seni dan budaya lokal" },
      { "id": 3, "nilai" : 2, "nama" : "Dalam satu tahun terakhir, sekolah/madrasah melaksanakan atau memfasilitasi 2 jenis/kali kegiatan seni dan budaya lokal" },
      { "id": 4, "nilai" : 1, "nama" : "Dalam satu tahun terakhir, sekolah/madrasah melaksanakan atau memfasilitasi 1 jenis/kali kegiatan seni dan budaya lokal" },
      { "id": 5, "nilai" : 0, "nama" : "Dalam satu tahun terakhir, sekolah/madrasah tidak melaksanakan atau memfasilitasi kegiatan seni dan budaya lokal" }
    ],
    "jawaban": 4
  },
  {
    "id": 5190,
    "bagian_id": 296,
    "nomor": 37,
    "nama": "Dalam satu tahun terakhir, siswa memperoleh pengalaman belajar untuk dapat mematuhi aturan-aturan sosial yang berlaku di lingkungannya.",
    "bobot": 2,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Tidak ada siswa yang melanggar peraturan sekolah (terlambat masuk, membolos, tidak berseragam, berkelahi, dan lainnya)" },
      { "id": 2, "nilai" : 3, "nama" : "Kurang dari 5% siswa yang melanggar peraturan sekolah (terlambat masuk, membolos, tidak berseragam, berkelahi, dan lainnya)" },
      { "id": 3, "nilai" : 2, "nama" : "Antara 6-10%  siswa yang melanggar peraturan sekolah (terlambat masuk, membolos, tidak berseragam, berkelahi, dan lainnya)" },
      { "id": 4, "nilai" : 1, "nama" : "Antara 11-15%   siswa yang melanggar peraturan sekolah (terlambat masuk, membolos, tidak berseragam, berkelahi, dan lainnya)" },
      { "id": 5, "nilai" : 0, "nama" : "Lebih dari 15% siswa yang melanggar peraturan sekolah (terlambat masuk, membolos, tidak berseragam, berkelahi, dan lainnya)" }
    ],
    "jawaban": 4
  },
  {
    "id": 5191,
    "bagian_id": 296,
    "nomor": 38,
    "nama": "Dalam setahun terakhir siswa memperoleh pengalaman belajar yang dapat menunjukkan kecintaan dan kebanggaan terhadap bangsa, negara dan tanah air Indonesia.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sekolah/madrasah mengadakan 4 kali  atau  lebih kegiatan yang mampu menumbuhkan kecintaan dan kebanggaan terhadap bangsa, negara, dan tanah air  Indonesia" },
      { "id": 2, "nilai" : 3, "nama" : "Sekolah/madrasah mengadakan 3 kali  kegiatan yang mampu menumbuhkan kecintaan dan kebanggaan terhadap bangsa, negara, dan tanah air  Indonesia" },
      { "id": 3, "nilai" : 2, "nama" : "Sekolah/madrasah mengadakan 2 kali  kegiatan yang mampu menumbuhkan kecintaan dan kebanggaan terhadap bangsa, negara, dan tanah air  Indonesia" },
      { "id": 4, "nilai" : 1, "nama" : "Sekolah/madrasah mengadakan 1 kali  kegiatan yang mampu menumbuhkan kecintaan dan kebanggaan terhadap bangsa, negara, dan tanah air  Indonesia" },
      { "id": 5, "nilai" : 0, "nama" : "Sekolah/madrasah tidak pernah mengadakan kegiatan yang mampu menumbuhkan kecintaan dan kebanggaan terhadap bangsa, negara, dan tanah air  Indonesia" }
    ],
    "jawaban": 4
  },
  {
    "id": 5192,
    "bagian_id": 296,
    "nomor": 39,
    "nama": "Siswa memperoleh pengalaman belajar yang menunjukkan kebiasaan hidup bersih, sehat, bugar, aman dan memanfaatkan waktu luang.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sekolah/Madrasah tiap pekan menyelenggarakan kegiatan kebersihan" },
      { "id": 2, "nilai" : 3, "nama" : "Sekolah/Madrasah setiap bulan menyelenggarakan kegiatan kebersihan" },
      { "id": 3, "nilai" : 2, "nama" : "Sekolah/Madrasah setiap triwulan menyelenggarakan kegiatan kebersihan" },
      { "id": 4, "nilai" : 1, "nama" : "Sekolah/Madrasah setiap semester menyelenggarakan kegiatan kebersihan" },
      { "id": 5, "nilai" : 0, "nama" : "Sekolah/Madrasah tidak pernah menyelenggarakan kegiatan kebersihan" }
    ],
    "jawaban": 4
  },
  {
    "id": 5193,
    "bagian_id": 296,
    "nomor": 40,
    "nama": "Siswa memperoleh pengalaman belajar untuk dapat menjalankan ajaran agama yang dianut sesuai dengan tahap perkembangan anak.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sekolah/madrasah setiap minggu menyelenggarakan 4 jenis atau lebih kegiatan pembelajaran agama yang dianut sesuai dengan tahap perkembangan anak" },
      { "id": 2, "nilai" : 3, "nama" : "Sekolah/madrasah setiap minggu menyelenggarakan 3 jenis kegiatan pembelajaran agama yang dianut sesuai dengan tahap perkembangan anak" },
      { "id": 3, "nilai" : 2, "nama" : "Sekolah/madrasah setiap minggu menyelenggarakan 2 jenis kegiatan pembelajaran agama yang dianut sesuai dengan tahap perkembangan anak" },
      { "id": 4, "nilai" : 1, "nama" : "Sekolah/madrasah setiap minggu menyelenggarakan 1 jenis kegiatan pembelajaran agama yang dianut sesuai dengan tahap perkembangan anak" },
      { "id": 5, "nilai" : 0, "nama" : "Sekolah/madrasah setiap minggu tidak menyelenggarakan kegiatan pembelajaran agama yang dianut sesuai dengan tahap perkembangan anak" }
    ],
    "jawaban": 4
  },
  {
    "id": 5194,
    "bagian_id": 296,
    "nomor": 41,
    "nama": "Siswa memperoleh pengalaman belajar untuk menghargai keberagaman agama, bangsa, suku, ras, dan golongan sosial ekonomi.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Dalam satu tahun terakhir, sekolah/madrasah menyelenggarakan 4 kali  atau  lebih kegiatan pembelajaran untuk menghargai keberagaman agama, bangsa, suku, ras, dan golongan sosial ekonomi" },
      { "id": 2, "nilai" : 3, "nama" : "Dalam satu tahun terakhir, sekolah/madrasah menyelenggarakan 3 kali  kegiatan pembelajaran untuk menghargai keberagaman agama, bangsa, suku, ras, dan golongan sosial ekonomi" },
      { "id": 3, "nilai" : 2, "nama" : "Dalam satu tahun terakhir, sekolah/madrasah menyelenggarakan 2 kali  kegiatan pembelajaran untuk menghargai keberagaman agama, bangsa, suku, ras, dan golongan sosial ekonomi" },
      { "id": 4, "nilai" : 1, "nama" : "Dalam satu tahun terakhir, sekolah/madrasah menyelenggarakan 1 kali  kegiatan pembelajaran untuk menghargai keberagaman agama, bangsa, suku, ras, dan golongan sosial ekonomi" },
      { "id": 5, "nilai" : 0, "nama" : "Dalam satu tahun terakhir, sekolah/madrasah tidak menyelenggarakan kegiatan pembelajaran untuk menghargai keberagaman agama, bangsa, suku, ras, dan golongan sosial ekonomi" }
    ],
    "jawaban": 4
  },
  {
    "id": 5195,
    "bagian_id": 296,
    "nomor": 42,
    "nama": "Siswa memperoleh pengalaman belajar bekerjasama dalam kelompok, tolong-menolong dan menjaga diri  sendiri dalam lingkungan keluarga dan teman sebaya.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sebanyak 91%-100% RPP mata pelajaran menggunakan metode belajar secara kelompok (cooperatif learning)" },
      { "id": 2, "nilai" : 3, "nama" : "Sebanyak 81%-90% RPP mata pelajaran menggunakan metode belajar secara kelompok (cooperatif learning)" },
      { "id": 3, "nilai" : 2, "nama" : "Sebanyak 71%-80% RPP mata pelajaran menggunakan metode belajar secara kelompok (cooperatif learning)" },
      { "id": 4, "nilai" : 1, "nama" : "Sebanyak 61%-70% RPP mata pelajaran menggunakan metode belajar secara kelompok (cooperatif learning)" },
      { "id": 5, "nilai" : 0, "nama" : "Sebanyak kurang dari 61% RPP mata pelajaran yang menggunakan metode belajar secara kelompok (cooperatif learning)" }
    ],
    "jawaban": 4
  },
  {
    "id": 5196,
    "bagian_id": 296,
    "nomor": 43,
    "nama": "Siswa memperoleh pengalaman belajar yang menunjukkan kemampuan memecahkan masalah sederhana dalam kehidupan sehari-hari.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sebanyak 91%-100% RPP mata pelajaran menggunakan metode pemecahan masalah (problem solving/problem based learning)" },
      { "id": 2, "nilai" : 3, "nama" : "Sebanyak 81%-90% RPP mata pelajaran menggunakan metode pemecahan masalah (problem solving/problem based learning)" },
      { "id": 3, "nilai" : 2, "nama" : "Sebanyak 71%-80% RPP mata pelajaran menggunakan metode pemecahan masalah (problem solving/problem based learning)" },
      { "id": 4, "nilai" : 1, "nama" : "Sebanyak 61%-70% RPP mata pelajaran menggunakan metode pemecahan masalah (problem solving/problem based learning)" },
      { "id": 5, "nilai" : 0, "nama" : "Sebanyak kurang dari 61% RPP mata pelajaran yang menggunakan metode pemecahan masalah (problem solving/problem based  learning)" }
    ],
    "jawaban": 4
  },
  {
    "id": 5213,
    "bagian_id": 297,
    "nomor": 60,
    "nama": "Kepala sekolah/madrasah melakukan supervisi dan monitoring setiap tahun.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sebanyak 91%-100% gurutelah sisupervisi dan dimonitor oleh kepala sekolah/madrasah" },
      { "id": 2, "nilai" : 3, "nama" : "Sebanyak 81%-90% gurutelah sisupervisi dan dimonitor oleh kepala sekolah/madrasah" },
      { "id": 3, "nilai" : 2, "nama" : "Sebanyak 71%-80% gurutelah sisupervisi dan dimonitor oleh kepala sekolah/madrasah" },
      { "id": 4, "nilai" : 1, "nama" : "Sebanyak 61%-70% gurutelah sisupervisi dan dimonitor oleh kepala sekolah/madrasah" },
      { "id": 5, "nilai" : 0, "nama" : "Sebanyak kurang dari 61% gurutelah sisupervisi dan dimonitor oleh kepala sekolah/madrasah" }
    ],
    "jawaban": 4
  },
  {
    "id": 5197,
    "bagian_id": 296,
    "nomor": 44,
    "nama": "Siswa memperoleh pengalaman belajar dalam berkomunikasi baik lisan maupun tulisan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Tersedianya kumpulan karya tulis siswa baik dari penugasan maupun lomba, laporan hasil kunjungan karya wisata/studi lapangan, majalah dinding, dan buletin siswa internal sekolah/madrasah, serta diskusi dan presentasi" },
      { "id": 2, "nilai" : 3, "nama" : "Tersedianya kumpulan karya tulis siswa baik dari penugasan maupun lomba, laporan hasil kunjungan karya wisata/studi lapangan, dan majalah dinding, serta  diskusi dan presentasi" },
      { "id": 3, "nilai" : 2, "nama" : "Tersedianya kumpulan karya tulis siswa baik dari penugasan maupun lomba, dan laporan hasil kunjungan karya wisata/studi lapangan, serta diskusi dan presentasi" },
      { "id": 4, "nilai" : 1, "nama" : "Tersedianya kumpulan karya tulis siswa baik dari penugasan maupun lomba, serta diskusi dan presentasi" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak tersedia kumpulan karya tulis siswa, diskusi, dan presentasi" }
    ],
    "jawaban": 4
  },
  {
    "id": 5198,
    "bagian_id": 296,
    "nomor": 45,
    "nama": "Siswa memperoleh pengalaman belajar yang menunjukkan keterampilan menyimak, berbicara, membaca, menulis, dan berhitung.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sekolah/Madrasah menghasilkan 4 karya siswa atau lebih" },
      { "id": 2, "nilai" : 3, "nama" : "Sekolah /Madrasah menghasilkan 3 karya siswa" },
      { "id": 3, "nilai" : 2, "nama" : "Sekolah /Madrasah menghasilkan 2 karya siswa" },
      { "id": 4, "nilai" : 1, "nama" : "Sekolah /Madrasah menghasilkan 1 karya siswa" },
      { "id": 5, "nilai" : 0, "nama" : "Sekolah /Madrasah tidak menghasilkan karya siswa" }
    ],
    "jawaban": 4
  },
  {
    "id": 5199,
    "bagian_id": 296,
    "nomor": 46,
    "nama": "Sekolah/Madrasah memiliki prestasi yang ditunjukkan dengan rata-rata hasil ujian nasional sekolah",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Rata-rata ujian nasional sekolah lebih dari 8,00" },
      { "id": 2, "nilai" : 3, "nama" : "Rata-rata ujian nasional sekolah antara 7,01-8,00" },
      { "id": 3, "nilai" : 2, "nama" : "Rata-rata ujian nasional sekolah lebih dari 6,01-7,00" },
      { "id": 4, "nilai" : 1, "nama" : "Rata-rata ujian nasional sekolah lebih dari 5,01-6,00" },
      { "id": 5, "nilai" : 0, "nama" : "Rata-rata ujian nasional sekolah lebih rendah 5,01" }
    ],
    "jawaban": 4
  },
  {
    "id": 5200,
    "bagian_id": 297,
    "nomor": 47,
    "nama": "Guru memiliki kualifikasi akademik minimum.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sebanyak 91%-100% guru berpendidikan minimum S1/D-IV PGSD/PGMI" },
      { "id": 2, "nilai" : 3, "nama" : "Sebanyak 81%-90% guru berpendidikan minimum S1/D-IV PGSD/PGMI" },
      { "id": 3, "nilai" : 2, "nama" : "Sebanyak 71%-80% guru berpendidikan minimum S1/D-IV PGSD/PGMI" },
      { "id": 4, "nilai" : 1, "nama" : "Sebanyak 61%-70% guru berpendidikan minimum S1/D-IV PGSD/PGMI" },
      { "id": 5, "nilai" : 0, "nama" : "Sebanyak kurang dari 61% guru berpendidikan minimum S1/D- IV PGSD/PGMI" }
    ],
    "jawaban": 4
  },
  {
    "id": 5201,
    "bagian_id": 297,
    "nomor": 48,
    "nama": "Guru agama, guru pendidikan jasmani, dan guru kesenian mengajar sesuai dengan latar belakang pendidikannya.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Ketiga mata pelajaran diajarkan oleh guru yang sesuai dengan latar belakang pendidikannya" },
      { "id": 2, "nilai" : 3, "nama" : "Hanya 2 mata pelajaran diajarkan oleh guru yang sesuai dengan latar belakang pendidikannya" },
      { "id": 3, "nilai" : 2, "nama" : "Hanya 1 mata pelajaran diajarkan oleh guru yang sesuai dengan latar belakang pendidikannya" },
      { "id": 4, "nilai" : 1, "nama" : "Tidak ada guru yang sesuai dengan mata pelajaran, tetapi diajarkan oleh tenaga dari institusi lain  yang relevan." },
      { "id": 5, "nilai" : 0, "nama" : "Ketiga mata pelajaran diajarkan oleh guru kelas" }
    ],
    "jawaban": 4
  },
  {
    "id": 5202,
    "bagian_id": 297,
    "nomor": 49,
    "nama": "Guru memiliki kompetensi pedagogik sesuai dengan prinsip-prinsip pembelajaran.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sebanyak 91%-100% guru memiliki kompetensi pedagogik sesuai dengan prinsip-prinsip pembelajaran" },
      { "id": 2, "nilai" : 3, "nama" : "Sebanyak 81%-90%  guru memiliki kompetensi pedagogik sesuai dengan prinsip-prinsip pembelajaran" },
      { "id": 3, "nilai" : 2, "nama" : "Sebanyak 71%-80% guru memiliki kompetensi pedagogik sesuai dengan prinsip-prinsip pembelajaran" },
      { "id": 4, "nilai" : 1, "nama" : "Sebanyak 61%-70% guru memiliki kompetensi pedagogik sesuai dengan prinsip-prinsip pembelajaran" },
      { "id": 5, "nilai" : 0, "nama" : "Sebanyak kurang dari 61% guru yang memiliki kompetensi pedagogik  sesuai  dengan  prinsip-prinsip pembelajaran" }
    ],
    "jawaban": 4
  },
  {
    "id": 5203,
    "bagian_id": 297,
    "nomor": 50,
    "nama": "Guru memiliki kompetensi kepribadian sebagai agen pembelajaran.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sebanyak 91%-100% guru memiliki kompetensi kepribadian" },
      { "id": 2, "nilai" : 3, "nama" : "Sebanyak 81%-90% guru memiliki kompetensi kepribadian" },
      { "id": 3, "nilai" : 2, "nama" : "Sebanyak 71%-80% guru memiliki kompetensi kepribadian" },
      { "id": 4, "nilai" : 1, "nama" : "Sebanyak 61%-70% guru memiliki kompetensi kepribadian" },
      { "id": 5, "nilai" : 0, "nama" : "Sebanyak kurang dari 61% guru yang memiliki kompetensi kepribadian" }
    ],
    "jawaban": 4
  },
  {
    "id": 5204,
    "bagian_id": 297,
    "nomor": 51,
    "nama": "Guru berkomunikasi secara  efektif, empatik, dan santun  dengan sesama pendidik, tenaga kependidikan, orang tua, dan masyarakat.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Adanya dialog dalam rapat  dewan guru, rapat antara guru dan kepala sekolah/madrasah, guru dan komite sekolah/madrasah, serta pertemuan antara guru dan orangtua siswa" },
      { "id": 2, "nilai" : 3, "nama" : "Adanya dialog dalam rapat  dewan guru, rapat antara guru dan kepala sekolah/madrasah, serta guru dan komite sekolah/madrasah" },
      { "id": 3, "nilai" : 2, "nama" : "Adanya dialog dalam rapat  dewan guru serta rapat antara guru dan kepala sekolah/madrasah" },
      { "id": 4, "nilai" : 1, "nama" : "Adanya dialog dalam rapat  dewan guru" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak pernah  diadakan rapat" }
    ],
    "jawaban": 4
  },
  {
    "id": 5205,
    "bagian_id": 297,
    "nomor": 52,
    "nama": "Guru memiliki kesehatan jasmani dan rohani untuk menjalankan tugas mengajar dan tugas lainnya.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Rata-rata kehadiran guru 96%-100% untuk menjalankan tugas mengajar dan tugas lainnya" },
      { "id": 2, "nilai" : 3, "nama" : "Rata-rata kehadiran guru 91%-95% untuk menjalankan tugas mengajar dan tugas lainnya" },
      { "id": 3, "nilai" : 2, "nama" : "Rata-rata kehadiran guru 86%-90% untuk menjalankan tugas mengajar dan tugas lainnya" },
      { "id": 4, "nilai" : 1, "nama" : "Rata-rata kehadiran guru 81%-85% untuk menjalankan tugas mengajar dan tugas lainnya" },
      { "id": 5, "nilai" : 0, "nama" : "Rata-rata kehadiran guru kurang dari 81% untuk menjalankan tugas mengajar dan tugas lainnya" }
    ],
    "jawaban": 4
  },
  {
    "id": 5206,
    "bagian_id": 297,
    "nomor": 53,
    "nama": "Kepala sekolah/madrasah berstatus sebagai guru,  memiliki sertifikat pendidik, dan Surat Keputusan (SK) sebagai kepala sekolah/madrasah.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Berstatus sebagai guru, memiliki sertifikat pendidik, dan memiliki SK sebagai kepala sekolah/madrasah" },
      { "id": 2, "nilai" : 3, "nama" : "Berstatus sebagai guru, memiliki sertifikat pendidik, tetapi tidak memiliki SK sebagai kepala sekolah/madrasah" },
      { "id": 3, "nilai" : 2, "nama" : "Berstatus sebagai guru, tidak memiliki sertifikat pendidik, tetapi memiliki SK sebagai kepala sekolah/madrasah" },
      { "id": 4, "nilai" : 1, "nama" : "Berstatus sebagai guru, tidak memiliki sertifikat pendidik, tidak memiliki SK sebagai kepala sekolah/ madrasah" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak berstatus sebagai guru,  tidak memiliki sertifikat pendidik, dan tidak memiliki SK sebagai kepala sekolah/madrasah" }
    ],
    "jawaban": 4
  },
  {
    "id": 5207,
    "bagian_id": 297,
    "nomor": 54,
    "nama": "Kepala sekolah/madrasah memiliki kualifikasi akademik minimum Sarjana (S1) atau Diploma Empat (D-IV).",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki kualifikasi akademik  menimum S1  atau D-IV PGSD/PGMI, dari perguruan tinggi terakreditasi, dan memiliki sertifikat pendidik" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki kualifikasi akademik  menimum S1  atau D-IV PGSD/PGMI, dari perguruan tinggi terakreditasi, tetapi tidak memiliki sertifikat pendidik" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki kualifikasi akademik  berpendidikan S1 atau D-IV kependidikan non-PGSD/PGMI, dari perguruan tinggi terakreditasi, tetapi tidak memiliki sertifikat pendidik" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki kualifikasi akademik  berpendidikan S1 atau D-IV nonkependidikan, dari perguruan tinggi tidak terakreditasi, dan tidak memiliki sertifikat pendidik" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki kualifikasi akademik yang dipersyaratkan" }
    ],
    "jawaban": 4
  },
  {
    "id": 5208,
    "bagian_id": 297,
    "nomor": 55,
    "nama": "Kepala sekolah/madrasah memiliki pengalaman mengajar sekurang- kurangnya 5 tahun.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki pengalaman mengajar 5 tahun atau lebih" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki pengalaman mengajar 3-4 tahun" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki pengalaman mengajar 2-3 tahun" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki pengalaman mengajar 1-2 tahun" },
      { "id": 5, "nilai" : 0, "nama" : "Memiliki pengalaman mengajar kurang dari 1 tahun" }
    ],
    "jawaban": 4
  },
  {
    "id": 5209,
    "bagian_id": 297,
    "nomor": 56,
    "nama": "Kepala sekolah/madrasah memiliki kompetensi kepribadian.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "memiliki kompetensi kepribadian yang meliputi 6 unsur" },
      { "id": 2, "nilai" : 3, "nama" : "memiliki kompetensi kepribadian yang meliputi 4-5 unsur" },
      { "id": 3, "nilai" : 2, "nama" : "memiliki kompetensi kepribadian yang meliputi 2-3 unsur" },
      { "id": 4, "nilai" : 1, "nama" : "memiliki kompetensi kepribadian hanya 1 unsur" },
      { "id": 5, "nilai" : 0, "nama" : "tidak memiliki kompetensi kepribadian" }
    ],
    "jawaban": 4
  },
  {
    "id": 5210,
    "bagian_id": 297,
    "nomor": 57,
    "nama": "Kepala sekolah/madrasah memiliki kemampuan manajerial yang ditunjukkan dengan kemajuan/keberhasilan dalam mengelola:(1) kesiswaan, (2) guru dan tenaga kependidikan, (3) pengembangan kurikulum, (4) sarana dan prasarana, (5) pembiayaan, dan (6) hubungan masyarakat.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Menunjukkan pencapaian kemajuan pada 6 aspek atau lebih" },
      { "id": 2, "nilai" : 3, "nama" : "Menunjukkan pencapaian kemajuan pada 4-5 aspek atau lebih" },
      { "id": 3, "nilai" : 2, "nama" : "Menunjukkan pencapaian kemajuan pada 2-3 aspek atau lebih" },
      { "id": 4, "nilai" : 1, "nama" : "Menunjukkan pencapaian kemajuan pada 1 aspek atau lebih" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak menunjukan pencapaian kemajuan" }
    ],
    "jawaban": 4
  },
  {
    "id": 5214,
    "bagian_id": 297,
    "nomor": 61,
    "nama": "Tenaga administrasi minimum memiliki kualifikasi akademik pendidikan menengah atau yang sederajat.",
    "bobot": 2,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sekolah/Madrasah memiliki tenaga adminstrasi lebih dari seorang yang memiliki kualifikasi pendidikan menengah atau sederajat" },
      { "id": 2, "nilai" : 3, "nama" : "Sekolah/Madrasah memiliki tenaga adminstrasi lebih dari seorang tetapi tidak semua memiliki kualifikasi pendidikan menengah atau sederajat" },
      { "id": 3, "nilai" : 2, "nama" : "Sekolah/Madrasah memiliki tenaga adminstrasi 1 orang yang memiliki kualifikasi pendidikan menengah atau  sederajat, atau lebih dari 1 orang tetapi semuanya tidak memiliki kualifikasi pendidikan menengah atau sederajat" },
      { "id": 4, "nilai" : 1, "nama" : "Sekolah/Madrasah memiliki tenaga adminstrasi 1 orang tetapi tidak memiliki kualifikasi pendidikan menengah atau sederajat" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak ada tenaga administrasi" }
    ],
    "jawaban": 4
  },
  {
    "id": 5215,
    "bagian_id": 297,
    "nomor": 62,
    "nama": "Tenaga administrasi memiliki latar belakang pendidikan sesuai dengan tugasnya.",
    "bobot": 2,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki tenaga adminstrasi lebih dari seorang yang semuanya memiliki latar belakang pendidikan sesuai dengan tugasnya" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki tenaga adminstrasi lebih dari seorang tetapi tidak semua memiliki latar belakang pendidikan sesuai dengan tugasnya" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki tenaga adminstrasi 1 orang yang memiliki latar belakang pendidikan sesuai dengan tugasnya, atau lebih dari 1 orang tetapi semuanya tidak memiliki latar belakang pendidikan sesuai dengan tugasnya" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki tenaga adminstrasi 1 orang tetapi tidak memiliki latar belakang pendidikan sesuai dengan tugasnya" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak ada tenaga administrasi" }
    ],
    "jawaban": 4
  },
  {
    "id": 5216,
    "bagian_id": 297,
    "nomor": 63,
    "nama": "Tenaga perpustakaan minimum memiliki kualifikasi akademik pendidikan menengah atau yang sederajat.",
    "bobot": 2,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki tenaga perpustakaan lebih dari seorang yang semuanya memiliki kualifikasi pendidikan menengah atau sederajat" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki tenaga perpustakaan lebih dari seorang tetapi tidak semua memiliki kualifikasi pendidikan menengah atau sederajat" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki tenaga perpustakaan 1 orang yang memiliki kualifikasi pendidikan menengah atau sederajat, atau lebih dari 1 orang tetapi tidak memiliki kualifikasi pendidikan menengah atau sederajat" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki tenaga perpustakaan 1 orang tetapi tidak memiliki kualifikasi pendidikan menengah atau  sederajat" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak ada tenaga perpustakaan" }
    ],
    "jawaban": 4
  },
  {
    "id": 5217,
    "bagian_id": 297,
    "nomor": 64,
    "nama": "Tenaga perpustakaan memiliki surat  penugasan sebagai penanggung jawab perpustakaan.",
    "bobot": 2,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki tenaga perpustakaan lebih dari seorang yang semuanya memiliki surat  penugasan sebagai penanggung jawab perpustakaan" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki tenaga perpustakaan lebih dari seorang tetapi tidak semua memiliki surat  penugasan sebagai penanggung jawab perpustakaan" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki tenaga perpustakaan satu orang dan memiliki surat penugasan sebagai penanggung jawab perpustakaan" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki tenaga perpustakaan satu orang tetapi tidak memiliki surat  penugasan sebagai penanggung jawab perpustakaan" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak ada tenaga yang diberi tugas sebagai penanggung jawab perpustakaan" }
    ],
    "jawaban": 4
  },
  {
    "id": 5218,
    "bagian_id": 297,
    "nomor": 65,
    "nama": "Sekolah/Madrasah memiliki petugas layanan khusus, yaitu: (1) penjaga sekolah/madrasah; (2) tukang kebun;  (3) tenaga kebersihan; (4) pengemudi; dan (5) pesuruh.",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki 4 jenis atau  lebih petugas layanan khusus" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki 3 jenis petugas layanan khusus" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki 2 jenis petugas layanan khusus" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki 1 jenis petugas layanan khusus" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki petugas layanan khusus" }
    ],
    "jawaban": 4
  },
  {
    "id": 5219,
    "bagian_id": 298,
    "nomor": 66,
    "nama": "Sekolah/Madrasah memiliki luas lahan sesuai dengan ketentuan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki luas lahan sesuai ketentuan" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki lahan seluas 75% _                                                                                                                                                                                                                                                              99% dari ketentuan" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki lahan seluas 50% _                                                                                                                                                                                                                                                              74% dari ketentuan" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki lahan seluas 25% _                                                                                                                                                                                                                                                              49% dari ketentuan" },
      { "id": 5, "nilai" : 0, "nama" : "Memiliki luas lahan kurang dari 25% dari ketentuan" }
    ],
    "jawaban": 4
  },
  {
    "id": 5220,
    "bagian_id": 298,
    "nomor": 67,
    "nama": "Sekolah/madrasah berada  di lokasi yang aman, terhindar dari potensi bahaya yang mengancam kesehatan, keselamatan jiwa, dan memiliki akses  untuk penyelamatan dalam keadaan darurat.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Berada di lokasi aman,  terhindar dari potensi bahaya yang mengancam kesehatan, keselamatan jiwa, dan memiliki akses untuk penyelamatan dalam keadaan darurat" },
      { "id": 2, "nilai" : 3, "nama" : "Berada di lokasi aman,  terhindar dari potensi bahaya yang mengancam kesehatan, keselamatan jiwa, tetapi tidak memiliki akses untuk penyelamatan dalam keadaan darurat" },
      { "id": 3, "nilai" : 2, "nama" : "Berada di lokasi aman,  terhindar dari potensi bahaya yang mengancam kesehatan, tetapi tidak terhindar dari potensi bahaya yang mengancam kesehatan jiwa, dan tidak memiliki akses untuk penyelamatan dalam keadaan darurat" },
      { "id": 4, "nilai" : 1, "nama" : "Berada di lokasi aman, tetapi tidak terhindar dari potensi bahaya yang mengancam kesehatan, mengancam keselamatan jiwa, dan tidak memiliki akses  untuk penyelamatan dalam keadaan darurat" },
      { "id": 5, "nilai" : 0, "nama" : "Berada di lokasi yang tidak aman,   tidak terhindar dari potensi bahaya yang mengancam kesehatan jiwa, tidak terhindar dari potensi bahaya yang mengancam keselamatan jiwa, dan tidak memiliki akses untuk penyelamatan dalam keadaan darurat" }
    ],
    "jawaban": 4
  },
  {
    "id": 5221,
    "bagian_id": 298,
    "nomor": 68,
    "nama": "Lahan sekolah/madrasah berada di lokasi yang terhindar dari gangguan pencemaran air, pencemaran udara, pencemaran tanah, dan kebisingan",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Berada di lokasi yang terhindar dari gangguan pencemaran air, pencemaran udara,  pencemaran tanah, dan kebisingan" },
      { "id": 2, "nilai" : 3, "nama" : "Berada di lokasi yang terhindar dari gangguan pencemaran air, pencemaran udara,  dan pencemaran tanah" },
      { "id": 3, "nilai" : 2, "nama" : "Berada di lokasi yang terhindar dari gangguan pencemaran air  dan pencemaran udara" },
      { "id": 4, "nilai" : 1, "nama" : "Berada di lokasi yang terhindar dari gangguan pencemaran air." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak berada  di lokasi yang aman  dari gangguan pencemaran air, pencemaran udara,  pencemaran tanah, dan kebisingan" }
    ],
    "jawaban": 4
  },
  {
    "id": 5222,
    "bagian_id": 298,
    "nomor": 69,
    "nama": "Sekolah/Madrasah berada di lokasi yang sesuai dengan peruntukan, memiliki status hak atas tanah, ijin pemanfaatan dari pemegang hak atas tanah, dan ijin mendirikan bangunan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Berada di lokasi yang sesuai dengan peruntukan, memiliki status hak atas tanah, ijin pemanfaatan dari pemegang hak atas tanah, dan ijin  mendirikan bangunan" },
      { "id": 2, "nilai" : 3, "nama" : "Berada di lokasi yang sesuai dengan peruntukannya, memiliki status hak atas tanah,   ijin pemanfaatan dari pemegang hak atas tanah, tetapi tidak memiliki ijin  mendirikan bangunan" },
      { "id": 3, "nilai" : 2, "nama" : "Berada di lokasi yang sesuai dengan peruntukannya, memiliki status hak atas tanah, tetapi  tidak memiliki ijin  pemanfaatan dari pemegang hak atas tanah, dan tidak memiliki ijin mendirikan bangunan" },
      { "id": 4, "nilai" : 1, "nama" : "Berada di lokasi yang sesuai dengan peruntukannya tetapi memiliki status hak atas tanah, tidak memiliki ijin pemanfaatan dari pemegang hak atas tanah, dan tidak memiliki ijin  mendirikan bangunan" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak Berada di lokasi yang sesuai dengan peruntukan, tidak memiliki status hak atas tanah,   tidak memiliki ijin pemanfaatan dari pemegang hak atas tanah, dan tidak memiliki ijin mendirikan bangunan" }
    ],
    "jawaban": 4
  },
  {
    "id": 5223,
    "bagian_id": 298,
    "nomor": 70,
    "nama": "Sekolah/madrasah memiliki lantai bangunan sesuai dengan ketentuan luas minimal.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Luas lantai bangunan sesuai dengan ketentuan" },
      { "id": 2, "nilai" : 3, "nama" : "Luas lantai bangunan 75 %-99% dari ketentuan" },
      { "id": 3, "nilai" : 2, "nama" : "Luas  lantai bangunan 50%-74% dari ketentuan" },
      { "id": 4, "nilai" : 1, "nama" : "Luas lantai bangunan 25%-49% dari ketentuan" },
      { "id": 5, "nilai" : 0, "nama" : "Luas lantai bangunan kurang dari 25 % dari ketentuan" }
    ],
    "jawaban": 4
  },
  {
    "id": 5224,
    "bagian_id": 298,
    "nomor": 71,
    "nama": "Bangunan sekolah/madrasah memiliki struktur yang stabil dan kokoh serta dilengkapi dengan  sistem pencegahan bahaya kebakaran dan petir.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki struktur yang stabil dan kokoh serta dilengkapi dengan sistem pencegahan bahaya kebakaran dan petir" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki struktur yang stabil dan kokoh, tetapi tidak dilengkapi dengan sistem pencegahan bahaya kebakaran" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki struktur yang stabil tetapi kurang kokoh dan tidak dilengkapi dengan  sistem pencegahan bahaya kebakaran" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki struktur yang stabil dan tidak kurang kokoh tetapi tidak dilengkapi dengan  sistem pencegahan bahaya kebakaran" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki struktur yang stabil dan kokoh serta tidak dilengkapi dengan sistem pencegahan bahaya kebakaran dan petir" }
    ],
    "jawaban": 4
  },
  {
    "id": 5225,
    "bagian_id": 298,
    "nomor": 72,
    "nama": "Sekolah/Madrasah memiliki sanitasi di dalam dan di luar bangunan yang dapat   memenuhi kebutuhan: (1) air  bersih, (2) saluran air kotor dan/atau air limbah, (3) tempat sampah, dan (4) saluran air  hujan.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki sanitasi di dalam dan di luar bangunan yang dapat memenuhi keempat kebutuhan di atas." },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki sanitasi di dalam dan di luar bangunan yang dapat memenuhi 3 dari 4 kebutuhan." },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki sanitasi di dalam dan di luar bangunan yang dapat memenuhi 2 dari 4 kebutuhan." },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki sanitasi di dalam dan di luar bangunan yang dapat memenuhi 1 dari 4 kebutuhan." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki sanitasi di dalam dan di luar yang dapat memenuhi keempat kebutuhan di atas." }
    ],
    "jawaban": 4
  },
  {
    "id": 5226,
    "bagian_id": 298,
    "nomor": 73,
    "nama": "Bangunan sekolah/madrasah memiliki ventilasi udara dan pencahayaan yang memadai.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki ventilasi udara dan pencahayaan memadai" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki ventilasi udara memadai tetapi pencahayaan kurang memadai" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki ventilasi udara kurang memadai tetapi pencahayaan memadai" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki ventilasi udara dan pencahayaan kurang memadai" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki ventilasi udara dan pencahayaan" }
    ],
    "jawaban": 4
  },
  {
    "id": 5227,
    "bagian_id": 298,
    "nomor": 74,
    "nama": "Bangunan sekolah/madrasah memiliki instalasi listrik atau  sumber  daya lain.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki instalasi listrik  dengan daya 900 watt atau lebih" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki instalasi listrik  dengan daya 450 watt" },
      { "id": 3, "nilai" : 2, "nama" : "Tidak memiliki instalasi listrik, tetapi menggunakan sumber daya lain setara dengan daya 900 watt" },
      { "id": 4, "nilai" : 1, "nama" : "Tidak memiliki instalasi listrik, tetapi menggunakan sumber daya lain setara dengan daya 450 watt" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki instalasi listrik  dan tidak menggunakan sumber daya lain" }
    ],
    "jawaban": 4
  },
  {
    "id": 5228,
    "bagian_id": 298,
    "nomor": 75,
    "nama": "Sekolah/Madrasah memiliki izin mendirikan bangunan dan izin penggunaan bangunan sesuai dengan peruntukannya.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki izin mendirikan  bangunan dan izin penggunaan bangunan sesuai dengan peruntukannya sebelum bangunan berdiri" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki izin mendirikan  bangunan, dan memiliki izin penggunaan bangunan sesuai dengan peruntukannya setelah bangunan berdiri" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki izin mendirikan dan memiliki izin penggunaan bangunan sementara" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki izin mendirikan  tetapi tidak memiliki izin penggunaan bangunan" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki izin mendirikan bangunan dan izin penggunaan bangunan" }
    ],
    "jawaban": 4
  },
  {
    "id": 5229,
    "bagian_id": 298,
    "nomor": 76,
    "nama": "Sekolah/Madrasah melakukan pemeliharaan terhadap bangunan secara berkala.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melakukan pemeliharaan ringan dan berat terhadap bangunan secara berkala sesuai ketentuan" },
      { "id": 2, "nilai" : 3, "nama" : "Melakukan pemeliharaan ringan dan berat terhadap bangunan, tetapi melebihi waktu yang sesuai ketentuan" },
      { "id": 3, "nilai" : 2, "nama" : "Melakukan pemeliharaan ringan tetapi melebihi waktu yang sesuai ketentuan, dan tidak pernah melakukan pemeliharaan berat" },
      { "id": 4, "nilai" : 1, "nama" : "Melakukan pemeliharaan terhadap bangunan, jika sudah ada bagian bangunan yang rusak berat" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak pernah  melakukan pemeliharaan" }
    ],
    "jawaban": 4
  },
  {
    "id": 5230,
    "bagian_id": 298,
    "nomor": 77,
    "nama": "Sekolah/Madrasah memiliki prasarana yang lengkap",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sekolah/madrasah  memiliki  9-11   dari  prasarana   sesuai ketentuan" },
      { "id": 2, "nilai" : 3, "nama" : "Sekolah/Madrasah memiliki 7-8 dari prasarana sesuai ketentuan" },
      { "id": 3, "nilai" : 2, "nama" : "Sekolah/Madrasah memiliki 5-6 dari prasarana sesuai ketentuan" },
      { "id": 4, "nilai" : 1, "nama" : "Sekolah/Madrasah memiliki 3-4 dari prasarana sesuai ketentuan" },
      { "id": 5, "nilai" : 0, "nama" : "Sekolah/Madrasah memiliki 1-2 dari prasarana sesuai ketentuan" }
    ],
    "jawaban": 4
  },
  {
    "id": 5231,
    "bagian_id": 298,
    "nomor": 78,
    "nama": "Sekolah/Madrasah memiliki ruang  kelas dengan jumlah, ukuran, dan sarana sesuai ketentuan.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki ruang kelas dengan jumlah, ukuran, dan sarana sesuai ketentuan" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki sejumlah ruang kelas dan sarana sesuai dengan ketentuan tetapi  ukuran ruang kelas tidak sesuai dengan ketentuan" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki ruang kelas dengan jumlah dan ukuran tidak sesuai ketentuan tetapi memiliki sarana sesuai ketentuan" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki ruang kelas dengan ukuran, jumlah, dan sarana tidak sesuai ketentuan" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki ruang  kelas" }
    ],
    "jawaban": 4
  },
  {
    "id": 5232,
    "bagian_id": 298,
    "nomor": 79,
    "nama": "Sekolah/Madrasah memiliki ruang  perpustakaan dengan luas dan sarana sesuai ketentuan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki ruang perpustakaan dilengkapi dengan  buku teks, buku panduan pendidikan, buku pengayaan, buku referensi dan sumber belajar lain, perabot, media pendidikan, dan perlengkapan lain" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki ruang perpustakaan dilengkapi dengan  buku teks, buku panduan pendidikan, buku pengayaan, buku referensi dan sumber belajar lain, dan perabot" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki ruang perpustakaan dilengkapi dengan  buku teks, buku panduan pendidikan dan buku pengayaan" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki ruang perpustakaan dilengkapi dengan  buku teks" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki perpustakaan" }
    ],
    "jawaban": 4
  },
  {
    "id": 5233,
    "bagian_id": 298,
    "nomor": 80,
    "nama": "Sekolah/Madrasah memiliki buku teks pelajaran yang telah ditetapkan dengan Permendiknas.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki buku teks pelajaran dengan rasio 1 buku teks/mata pelajaran/siswa" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki buku teks pelajaran dengan rasio 1 buku teks/mata pelajaran untuk 2-5 siswa" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki buku teks pelajaran dengan rasio 1 buku teks/mata pelajaran untuk 6-10 siswa" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki buku teks pelajaran dengan rasio 1 buku teks/mata pelajaran untuk 11 siswa atau lebih" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki buku teks pelajaran yang ditetapkan oleh Mendiknas" }
    ],
    "jawaban": 4
  },
  {
    "id": 5234,
    "bagian_id": 298,
    "nomor": 81,
    "nama": "Sekolah/Madrasah memanfaatkan buku teks pelajaran yang telah ditetapkan dengan Permendiknas.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sebanyak 8 atau  lebih mata  pelajaran menggunakan buku teks pelajaran yang telah ditetapkan dengan Permendiknas" },
      { "id": 2, "nilai" : 3, "nama" : "Sebanyak 6-7 mata pelajaran menggunakan buku teks pelajaran yang telah ditetapkan dengan Permendiknas" },
      { "id": 3, "nilai" : 2, "nama" : "Sebanyak 4-5 mata pelajaran menggunakan buku teks pelajaran yang telah ditetapkan dengan Permendiknas" },
      { "id": 4, "nilai" : 1, "nama" : "Sebanyak 1-3 mata pelajaran menggunakan buku teks pelajaran yang telah ditetapkan dengan Permendiknas" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak ada mata pelajaran yang menggunakan buku teks pelajaran yang telah ditetapkan dengan Permendiknas" }
    ],
    "jawaban": 4
  },
  {
    "id": 5235,
    "bagian_id": 298,
    "nomor": 82,
    "nama": "Sekolah/Madrasah memiliki laboratorium Ilmu Pengetahuan Alam (IPA)dengan sarana laboratorium  IPA lengkap.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki laboratorium IPA dengan 1 almari atau lebih dan memiliki 13 jenis sarana atau lebih" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki laboratorium IPA, dengan 1 almari dan memiliki 8-12 sarana" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki laboratorium IPA, tanpa  memiliki almari dan memiliki 4-7 sarana" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki laboratorium IPA, tanpa  memiliki almari dan memiliki 1-3 sarana" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki laboratorium  IPA" }
    ],
    "jawaban": 4
  },
  {
    "id": 5236,
    "bagian_id": 298,
    "nomor": 83,
    "nama": "Sekolah/Madrasah memiliki ruang  pimpinan dengan  luas dan sarana sesuai ketentuan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki ruang pimpinan dengan luas dan sarana sesuai ketentuan" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki ruang pimpinan dengan luas sesuai ketentuan tetapi tidak memiliki sarana sesuai ketentuan" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki ruang pimpinan dengan luas tidak sesuai ketentuan tetapi memiliki sarana sesuai ketentuan" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki ruang pimpinan dengan luas dan sarana tidak sesuai ketentuan" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki ruang  pimpinan" }
    ],
    "jawaban": 4
  },
  {
    "id": 5252,
    "bagian_id": 299,
    "nomor": 99,
    "nama": "Sekolah/Madrasah melaksanakan kegiatan pengembangan kurikulum dan pembelajaran.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melaksanakan 4 atau lebih kegiatan pengembangan kurikulum dan pembelajaran" },
      { "id": 2, "nilai" : 3, "nama" : "Melaksanakan 3 kegiatan pengembangan kurikulum dan pembelajaran" },
      { "id": 3, "nilai" : 2, "nama" : "Melaksanakan 2 kegiatan pengembangan kurikulum dan pembelajaran" },
      { "id": 4, "nilai" : 1, "nama" : "Melaksanakan 1 kegiatan pengembangan kurikulum dan pembelajaran" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melaksanakan kegiatan pengembangan kurikulum dan pembelajaran" }
    ],
    "jawaban": 4
  },
  {
    "id": 5237,
    "bagian_id": 298,
    "nomor": 84,
    "nama": "Sekolah/Madrasah memiliki ruang  guru dengan luas dan sarana sesuai ketentuan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki ruang guru dengan luas dan sarana sesuai ketentuan" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki ruang guru dengan luas sesuai ketentuan tetapi memiliki sarana tidak sesuai ketentuan" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki ruang guru dengan luas tidak sesuai ketentuan tetapi memiliki sarana sesuai ketentuan" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki ruang guru dengan luas dan sarana tidak sesuai ketentuan" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki ruang guru" }
    ],
    "jawaban": 4
  },
  {
    "id": 5238,
    "bagian_id": 298,
    "nomor": 85,
    "nama": "Sekolah/madrasah memiliki tempat beribadah bagi warga sekolah/madrasah dengan luas dan perlengkapan sesuai ketentuan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki tempat beribadah dengan luas dan perlengkapan sesuai ketentuan" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki tempat beribadah dengan luas sesuai ketentuan tetapi tidak memiliki perlengkapan sesuai  ketentuan" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki tempat beribadah dengan luas tidak sesuai ketentuan tetapi memiliki perlengkapan  sesuai ketentuan" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki tempat beribadah dengan luas dan perlengkapan tidak sesuai ketentuan" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki tempat beribadah" }
    ],
    "jawaban": 4
  },
  {
    "id": 5239,
    "bagian_id": 298,
    "nomor": 86,
    "nama": "Sekolah/Madrasah memiliki ruang  Unit Kesehatan Sekolah/Madrasah (UKS/M) dengan luas dan sarana sesuai ketentuan.",
    "bobot": 2,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki ruang UKS/M  dengan luas dan sarana sesuai ketentuan" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki ruang UKS/M  dengan luas sesuai ketentuan tetapi memiliki sarana tidak sesuai ketentuan" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki ruang UKS/M  dengan luas tidak sesuai ketentuan tetapi memiliki sarana sesuai ketentuan" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki ruang UKS/M  dengan luas dan sarana tidak sesuai ketentuan" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki ruang  UKS/M" }
    ],
    "jawaban": 4
  },
  {
    "id": 5240,
    "bagian_id": 298,
    "nomor": 87,
    "nama": "Sekolah/Madrasah memiliki jamban dengan jumlah, ukuran, dan sarana sesuai ketentuan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki jamban dengan jumlah, ukuran, dan sarana sesuai ketentuan" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki jamban dengan jumlah dan  ukuran sesuai ketentuan tetapi memiliki sarana tidak sesuai dengan ketentuan" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki jamban dengan jumlah dan  ukuran tidak sesuai ketentuan tetapi memiliki sarana sesuai ketentuan" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki jamban dengan jumlah, ukuran, dan sarana tidak sesuai ketentuan" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki jamban" }
    ],
    "jawaban": 4
  },
  {
    "id": 5241,
    "bagian_id": 298,
    "nomor": 88,
    "nama": "Sekolah/Madrasah memiliki gudang dengan luas dan sarana sesuai ketentuan.",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki gudang dengan luas dan sarana sesuai ketentuan" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki gudang dengan luas sesuai ketentuan tetapi memiliki sarana tidak sesuai ketentuan" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki gudang dengan luas tidak sesuai ketentuan tetapi memiliki sarana sesuai ketentuan" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki gudang dengan luas dan sarana tidak sesuai ketentuan" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki gudang" }
    ],
    "jawaban": 4
  },
  {
    "id": 5242,
    "bagian_id": 298,
    "nomor": 89,
    "nama": "Sekolah/Madrasah memiliki ruang  sirkulasi dengan luas dan kualitas sesuai ketentuan.",
    "bobot": 2,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki ruang sirkulasi dengan luas dan kualitas sesuai ketentuan" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki ruang sirkulasi dengan luas sesuai ketentuan tetapi kualitasnya tidak sesuai ketentuan" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki ruang sirkulasi dengan luas tidak sesuai ketentuan tetapi kualitasnya sesuai ketentuan" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki ruang sirkulasi dengan luas dan kualitas tidak sesuai ketentuan" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki ruang  sirkulasi" }
    ],
    "jawaban": 4
  },
  {
    "id": 5243,
    "bagian_id": 298,
    "nomor": 90,
    "nama": "Sekolah/Madrasah memiliki tempat bermain/berolahraga dengan luas dan sarana sesuai ketentuan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki tempat bermain/berolahraga dengan luas dan sarana sesuai ketentuan" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki tempat bermain/berolahraga dengan luas sesuai ketentuan tetapi memiliki sarana tidak sesuai ketentuan" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki tempat bermain/berolahraga dengan luas tidak sesuai ketentuan tetapi memiliki sarana sesuai ketentuan" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki tempat bermain/berolahraga dengan luas dan sarana tidak sesuai ketentuan" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki tempat bermain/berolahraga" }
    ],
    "jawaban": 4
  },
  {
    "id": 5244,
    "bagian_id": 299,
    "nomor": 91,
    "nama": "Madrasah telah merumuskan, menetapkan dan mensosialisasikan visi lembaga.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Merumuskan dan menetapkan visi, mudah dipahami, dan sering disosialisasikan" },
      { "id": 2, "nilai" : 3, "nama" : "Merumuskan dan menetapkan visi, mudah dipahami, dan pernah disosialisasikan" },
      { "id": 3, "nilai" : 2, "nama" : "Merumuskan dan menetapkan visi, mudah  dipahami, tetapi tidak disosialisasikan" },
      { "id": 4, "nilai" : 1, "nama" : "Merumuskan dan menetapkan visi, sulit dipahami, dan tidak disosialisasikan" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak merumuskan dan menetapkan visi" }
    ],
    "jawaban": 4
  },
  {
    "id": 5245,
    "bagian_id": 299,
    "nomor": 92,
    "nama": "Sekolah/Madrasah telah merumuskan dan menetapkan misi  lembaga.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Merumuskan dan menetapkan misi, mudah dipahami dan sering disosialisasikan" },
      { "id": 2, "nilai" : 3, "nama" : "Merumuskan dan menetapkan misi, mudah dipahami dan pernah disosialisasikan" },
      { "id": 3, "nilai" : 2, "nama" : "Merumuskan dan menetapkan misi, mudah dipahami tetapi tidak disosialisasikan" },
      { "id": 4, "nilai" : 1, "nama" : "Merumuskan dan menetapkan misi, sulit dipahami dan tidak disosialisasikan" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak merumuskan dan menetapkan misi" }
    ],
    "jawaban": 4
  },
  {
    "id": 5246,
    "bagian_id": 299,
    "nomor": 93,
    "nama": "Sekolah/Madrasah telah merumuskan dan menetapkan tujuan lembaga.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Merumuskan dan menetapkan tujuan, mudah  dipahami dan sering disosialisasikan" },
      { "id": 2, "nilai" : 3, "nama" : "Merumuskan dan menetapkan tujuan, mudah  dipahami dan pernah disosialisasikan" },
      { "id": 3, "nilai" : 2, "nama" : "Merumuskan dan menetapkan tujuan, mudah  dipahami tetapi tidak disosialisasikan" },
      { "id": 4, "nilai" : 1, "nama" : "Merumuskan dan menetapkan tujuan, sulit dipahami dan tidak disosialisasikan" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak merumuskan dan menetapkan tujuan" }
    ],
    "jawaban": 4
  },
  {
    "id": 5247,
    "bagian_id": 299,
    "nomor": 94,
    "nama": "Sekolah/Madrasah memiliki rencana  kerja jangka menengah dan rencana kerja tahunan serta disosialisasikan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki rencana  kerja jangka menengah dan rencana  kerja tahunan keduanya saling berkaitan serta keduanya  sudah disosialisasikan" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki rencana  kerja jangka menengah dan rencana  kerja tahunan keduanya saling berkaitan serta salah satunya sudah disosialisasikan" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki rencana  kerja jangka menengah dan rencana  kerja tahunan keduanya tidak saling berkaitan serta sudah disosialisasikan" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki rencana  kerja jangka menengah atau rencana kerja tahunan, serta sudah disosialisasikan" },
      { "id": 5, "nilai" : 0, "nama" : "Memiliki rencana  kerja tahunan tetapi tidak disosialisasikan." }
    ],
    "jawaban": 4
  },
  {
    "id": 5248,
    "bagian_id": 299,
    "nomor": 95,
    "nama": "Sekolah/Madrasah memiliki pedoman yang mengatur berbagai aspek pengelolaan secara tertulis yang mudah dipahami oleh pihak-pihak terkait.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki pedoman  yang  mengatur 7 atau  lebih aspek pengelolaan secara tertulis" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki pedoman  yang  mengatur 5 atau 6 aspek pengelolaan secara tertulis" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki pedoman  yang  mengatur 3 atau 4 aspek pengelolaan secara tertulis" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki pedoman  yang  mengatur 1 atau 2 aspek pengelolaan secara tertulis" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki pedoman yang mengatur pengelolaan secara tertulis" }
    ],
    "jawaban": 4
  },
  {
    "id": 5249,
    "bagian_id": 299,
    "nomor": 96,
    "nama": "Sekolah/Madrasah memiliki struktur organisasi dengan kejelasan uraian tugas.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki struktur organisasi yang dipajang di dinding dan disertai uraian tugas yang jelas" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki struktur organisasi dan disertai uraian tugas yang jelas" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki struktur organisasi dan disertai uraian tugas  tetapi tidak jelas" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki struktur organisasi tetapi tidak ada uraian tugas" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki struktur organisasi" }
    ],
    "jawaban": 4
  },
  {
    "id": 5250,
    "bagian_id": 299,
    "nomor": 97,
    "nama": "Sekolah/Madrasah melaksanakan kegiatan sesuai dengan rencana kerja tahunan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sebanyak 91%-100% kegiatan sesuai dengan rencana kerja tahunan" },
      { "id": 2, "nilai" : 3, "nama" : "Sebanyak 81%-90% kegiatan sesuai dengan rencana kerja tahunan" },
      { "id": 3, "nilai" : 2, "nama" : "Sebanyak 71%-80% kegiatan sesuai dengan rencana kerja tahunan" },
      { "id": 4, "nilai" : 1, "nama" : "Sebanyak 61%-70% kegiatan sesuai dengan rencana kerja tahunan" },
      { "id": 5, "nilai" : 0, "nama" : "Sebanyak kurang dari 61% kegiatan sesuai dengan rencana kerja tahunan" }
    ],
    "jawaban": 4
  },
  {
    "id": 5251,
    "bagian_id": 299,
    "nomor": 98,
    "nama": "Sekolah/Madrasah melaksanakan kegiatan kesiswaan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melaksanakan 4 atau lebih jenis kegiatan kesiswaan" },
      { "id": 2, "nilai" : 3, "nama" : "Melaksanakan 3 jenis kegiatan kesiswaan" },
      { "id": 3, "nilai" : 2, "nama" : "Melaksanakan 2 jenis kegiatan kesiswaan" },
      { "id": 4, "nilai" : 1, "nama" : "Melaksanakan 1 jenis kegiatan kesiswaan" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melaksanakan kegiatan kesiswaan" }
    ],
    "jawaban": 4
  },
  {
    "id": 5253,
    "bagian_id": 299,
    "nomor": 100,
    "nama": "Sekolah/Madrasah melaksanakan program  pengelolaan pendayagunaan pendidik dan tenaga kependidikan.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melaksanakan 4 atau lebih program pengelolaan pendayagunaan pendidik dan tenaga kependidikan" },
      { "id": 2, "nilai" : 3, "nama" : "Melaksanakan 3 program pengelolaan pendayagunaan pendidik dan tenaga kependidikan" },
      { "id": 3, "nilai" : 2, "nama" : "Melaksanakan 2 program pengelolaan pendayagunaan pendidik dan tenaga kependidikan" },
      { "id": 4, "nilai" : 1, "nama" : "Melaksanakan 1  program pengelolaan pendayagunaan pendidik dan tenaga kependidikan" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melaksanakan program pengelolaan pendayagunaan pendidik dan tenaga kependidikan" }
    ],
    "jawaban": 4
  },
  {
    "id": 5254,
    "bagian_id": 299,
    "nomor": 101,
    "nama": "Sekolah/Madrasah mengelola sarana dan prasarana pembelajaran.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Mengelola 4 atau  lebih program sarana dan prasarana" },
      { "id": 2, "nilai" : 3, "nama" : "Mengelola 3 program sarana dan prasarana" },
      { "id": 3, "nilai" : 2, "nama" : "Mengelola 2 program sarana dan prasarana" },
      { "id": 4, "nilai" : 1, "nama" : "Mengelola 1 program sarana dan prasarana" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak mengelola  program sarana dan prasarana" }
    ],
    "jawaban": 4
  },
  {
    "id": 5255,
    "bagian_id": 299,
    "nomor": 102,
    "nama": "Sekolah/Madrasah mengelola pembiayaan pendidikan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki 4 program pengelolaan pembiayaan pendidikan" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki 3 program pengelolaan pembiayaan pendidikan" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki 2 program pengelolaan pembiayaan pendidikan" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki 1 program pengelolaan pembiayaan pendidikan" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki program pengelolaan pembiayaan pendidikan" }
    ],
    "jawaban": 4
  },
  {
    "id": 5256,
    "bagian_id": 299,
    "nomor": 103,
    "nama": "Sekolah/Madrasah melakukan kegiatan yang mengarah pada menciptakan suasana, iklim, dan lingkungan pembelajaran yang kondusif.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melaksanakan 4  atau lebih kegiatan menciptakan suasana, iklim, dan lingkungan pembelajaran yang kondusif" },
      { "id": 2, "nilai" : 3, "nama" : "Melaksanakan 3 kegiatan menciptakan suasana, iklim, dan lingkungan pembelajaran yang kondusif" },
      { "id": 3, "nilai" : 2, "nama" : "Melaksanakan 2 kegiatan menciptakan suasana, iklim, dan lingkungan pembelajaran yang kondusif" },
      { "id": 4, "nilai" : 1, "nama" : "Melaksanakan 1 kegiatan menciptakan suasana, iklim, dan lingkungan pembelajaran yang kondusif" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melaksanakan kegiatan menciptakan suasana, iklim, dan lingkungan pembelajaran yang kondusif" }
    ],
    "jawaban": 4
  },
  {
    "id": 5257,
    "bagian_id": 299,
    "nomor": 104,
    "nama": "Sekolah/Madrasah melibatkan masyarakat dan membangun kemitraan dengan lembaga lain  yang relevan dalam pengelolaan pendidikan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki 4 atau lebih dokumen  kemitraan" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki 3 atau lebih dokumen  kemitraan" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki 2 atau lebih dokumen  kemitraan" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki 1 atau lebih dokumen  kemitraan" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki dokumen  kemitraan" }
    ],
    "jawaban": 4
  },
  {
    "id": 5258,
    "bagian_id": 299,
    "nomor": 105,
    "nama": "Sekolah/Madrasah memiliki program pengawasan yang disosialisasikan kepada pendidik dan tenaga kependidikan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki 4 atau lebih dokumen  program pengawasan" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki 3 dokumen program pengawasan" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki 2 dokumen program pengawasan" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki 1 dokumen program pengawasan" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki dokumen  program pengawasan" }
    ],
    "jawaban": 4
  },
  {
    "id": 5259,
    "bagian_id": 299,
    "nomor": 106,
    "nama": "Sekolah/Madrasah melaksanakan kegiatan evaluasi diri.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melaksanakan evaluasi diri  setidak-tidaknya sekali dalam 1 semester" },
      { "id": 2, "nilai" : 3, "nama" : "Melaksanakan evaluasi diri  sekali dalam 2  semester" },
      { "id": 3, "nilai" : 2, "nama" : "Melaksanakan evaluasi diri  sekali dalam 3 semester" },
      { "id": 4, "nilai" : 1, "nama" : "Melaksanakan evaluasi diri  sekali dalam 4 semester" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melaksanakan evaluasi diri" }
    ],
    "jawaban": 4
  },
  {
    "id": 5260,
    "bagian_id": 299,
    "nomor": 107,
    "nama": "Sekolah/Madrasah melaksanakan evaluasi kinerja pendidik dan tenaga kependidikan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melaksanakan 4 program evaluasi kinerja pendidik dan tenaga kependidikan" },
      { "id": 2, "nilai" : 3, "nama" : "Melaksanakan 3 program evaluasi kinerja pendidik dan tenaga kependidikan" },
      { "id": 3, "nilai" : 2, "nama" : "Melaksanakan 2 program evaluasi kinerja pendidik dan tenaga kependidikan" },
      { "id": 4, "nilai" : 1, "nama" : "Melaksanakan 1 program evaluasi kinerja pendidik dan tenaga kependidikan" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melakukan program evaluasi kinerja pendidik dan tenaga kependidikan" }
    ],
    "jawaban": 4
  },
  {
    "id": 5261,
    "bagian_id": 299,
    "nomor": 108,
    "nama": "Sekolah/Madrasah mempersiapkan unsur-unsur pelaksanaan akreditasi.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Mempersiapkan 4 unsur pelaksanaan akreditasi" },
      { "id": 2, "nilai" : 3, "nama" : "Mempersiapkan 3 unsur pelaksanaan akreditasi" },
      { "id": 3, "nilai" : 2, "nama" : "Mempersiapkan 2 unsur pelaksanaan akreditasi" },
      { "id": 4, "nilai" : 1, "nama" : "Mempersiapkan 1 unsur pelaksanaan akreditasi" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak mempersiapkan 1 unsur pun pelaksanaan akreditasi" }
    ],
    "jawaban": 4
  },
  {
    "id": 5262,
    "bagian_id": 299,
    "nomor": 109,
    "nama": "Kepala Sekolah/Madrasah melaksanakan tugas pokok dan fungsi (Tupoksi) kepemimpinan sesuai dengan standar yang telah ditentukan.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melaksanakan  15-18 tupoksi  kepemimpinan kepala sekolah/madrasah" },
      { "id": 2, "nilai" : 3, "nama" : "Melaksanakan  11-14 tupoksi  kepemimpinan kepala sekolah/madrasah" },
      { "id": 3, "nilai" : 2, "nama" : "Melaksanakan  6-10 tupoksi  kepemimpinan kepala sekolah/madrasah" },
      { "id": 4, "nilai" : 1, "nama" : "Melaksanakan  1-5 tupoksi  kepemimpinan kepala sekolah/madrasah" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melaksanakan tupoksi  kepemimpinan kepala sekolah/madrasah" }
    ],
    "jawaban": 4
  },
  {
    "id": 5263,
    "bagian_id": 299,
    "nomor": 110,
    "nama": "Sekolah/Madrasah memiliki sistem informasi manajemen untuk mendukung administrasi pendidikan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki sistem informasi dan memiliki fasilitas dan petugas khusus" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki sistem informasi dan memiliki fasilitas tetapi  tidak memiliki petugas khusus" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki sistem informasi dan memiliki petugas khusus tetapi tidak memiliki fasilitas" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki sistem informasi tetapi tidak memiliki fasilitas dan/atau petugas khusus" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki sistem informasi" }
    ],
    "jawaban": 4
  },
  {
    "id": 5264,
    "bagian_id": 300,
    "nomor": 111,
    "nama": "Sekolah/Madrasah memiliki catatan tahunan berupa dokumen investasi sarana dan prasarana secara menyeluruh.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki catatan tahunan berupa dokumen nilai  aset sarana dan prasarana secara menyeluruh selama 3 tahun  terakhir" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki catatan tahunan berupa dokumen nilai  aset sarana dan prasarana secara menyeluruh selama 2 tahun  terakhir" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki catatan tahunan berupa dokumen nilai  aset sarana dan prasarana secara menyeluruh selama 1 tahun  terakhir" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki catatan tahunan berupa dokumen nilai  aset sarana dan prasarana secara tidak menyeluruh selama 1 (satu) tahun terakhir" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki catatan tahunan berupa dokumen nilai  aset sarana dan prasarana" }
    ],
    "jawaban": 4
  },
  {
    "id": 5265,
    "bagian_id": 300,
    "nomor": 112,
    "nama": "Sekolah/Madrasah membelanjakan biaya untuk pengembangan pendidik dan tenaga kependidikan berdasarkan Rencana Kerja dan Anggaran Sekolah/Madrasah (RKA-S/M).",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Membelanjakan biaya sebanyak 76%-100% dari anggaran pengembangan pendidik dan tenaga kependidikan dalam RKA- S/M" },
      { "id": 2, "nilai" : 3, "nama" : "Membelanjakan biaya sebanyak 51%-75% dari anggaran pengembangan pendidik dan tenaga kependidikan dalam RKA- S/M" },
      { "id": 3, "nilai" : 2, "nama" : "Membelanjakan biaya sebanyak 26%-50% dari anggaran pengembangan pendidik dan tenaga kependidikan dalam RKA- S/M" },
      { "id": 4, "nilai" : 1, "nama" : "Membelanjakan biaya sebanyak 1%-25% dari anggaran pengembangan pendidik dan tenaga kependidikan dalam RKA- S/M" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak membelanjakan biaya untuk pengembangan pendidik dan tenaga kependidikan" }
    ],
    "jawaban": 4
  },
  {
    "id": 5266,
    "bagian_id": 300,
    "nomor": 113,
    "nama": "Sekolah/Madrasah memiliki modal kerja sebesar yang tertuang dalam RKA-S/M untuk membiayai seluruh kebutuhan pendidikan.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sekolah/Madrasah dapat  merealisasikan 91%-100% modal kerja" },
      { "id": 2, "nilai" : 3, "nama" : "Sekolah/Madrasah dapat  merealisasikan 81%-90% modal kerja" },
      { "id": 3, "nilai" : 2, "nama" : "Sekolah/Madrasah dapat  merealisasikan 71%-80% modal kerja" },
      { "id": 4, "nilai" : 1, "nama" : "Sekolah/Madrasah dapat  merealisasikan kurang dari 70% modal kerja" },
      { "id": 5, "nilai" : 0, "nama" : "Sekolah/Madrasah tidak dapat merealisasikan modal kerja" }
    ],
    "jawaban": 4
  },
  {
    "id": 5267,
    "bagian_id": 300,
    "nomor": 114,
    "nama": "Sekolah/Madrasah membayar gaji, honor kegiatan-kegiatan sekolah, insentif   dan tunjangan lain  guru pada tahun berjalan.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Mengeluarkan dana untuk pembayaran gaji, honor kegiatan-kegiatan sekolah, insentif, dan tunjangan lain bagi pendidik pada tahun berjalan" },
      { "id": 2, "nilai" : 3, "nama" : "Mengeluarkan dana untuk pembayaran gaji, honor kegiatan- kegiatan sekolah, dan insentif, tetapi tidak mengeluarkan tunjangan lain  bagi pendidik pada tahun berjalan" },
      { "id": 3, "nilai" : 2, "nama" : "Mengeluarkan dana untuk pembayaran gaji dan honor kegiatan-kegiatan sekolah  tetapi tidak membayar  insentif dan tunjangan lain  bagi pendidik pada tahun berjalan" },
      { "id": 4, "nilai" : 1, "nama" : "Mengeluarkan dana untuk pembayaran gaji tetapi tidak membayar honor kegiatan-kegiatan sekolah, insentif dan tunjangan lain  bagi pendidik pada tahun berjalan" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak mengeluarkan dana untuk gaji, honor kegiatan-kegiatan sekolah, insentif, dan tunjangan lain  bagi pendidik pada tahun berjalan sesuai yang direncanakan" }
    ],
    "jawaban": 4
  },
  {
    "id": 5268,
    "bagian_id": 300,
    "nomor": 115,
    "nama": "Sekolah/Madrasah membayar gaji, honor kegiatan-kegiatan sekolah, insentif, dan tunjangan lain  tenaga kependidikan pada tahun berjalan.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Mengeluarkan dana untuk pembayaran gaji, honor kegiatan-kegiatan sekolah, insentif, dan tunjangan lain bagi tenaga kependidikan pada tahun berjalan" },
      { "id": 2, "nilai" : 3, "nama" : "Mengeluarkan dana untuk pembayaran gaji, honor kegiatan- kegiatan sekolah, dan insentif, tetapi tidak mengeluarkan tunjangan lain  bagi tenaga kependidikan pada tahun berjalan" },
      { "id": 3, "nilai" : 2, "nama" : "Mengeluarkan dana untuk pembayaran gaji dan honor kegiatan-kegiatan sekolah  tetapi tidak membayar  insentif dan tunjangan lain  bagi tenaga kependidikan pada tahun berjalan" },
      { "id": 4, "nilai" : 1, "nama" : "Mengeluarkan dana untuk pembayaran gaji tetapi tidak membayar honor kegiatan-kegiatan sekolah, insentif dan tunjangan lain  bagi tenaga kependidikan pada tahun berjalan" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak mengeluarkan dana apa pun bagi tenaga kependidikan pada tahun berjalan" }
    ],
    "jawaban": 4
  },
  {
    "id": 5269,
    "bagian_id": 300,
    "nomor": 116,
    "nama": "Sekolah/Madrasah membelanjakan biaya untuk menunjang pelaksanaan kegiatan pembelajaran untuk satu tahun terakhir.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Membelanjakan biaya sebanyak 96%-100% dari alokasi anggaran" },
      { "id": 2, "nilai" : 3, "nama" : "Membelanjakan biaya sebanyak 91%-95% dari alokasi anggaran" },
      { "id": 3, "nilai" : 2, "nama" : "Membelanjakan biaya sebanyak 86%-90% dari alokasi anggaran" },
      { "id": 4, "nilai" : 1, "nama" : "Membelanjakan biaya sebanyak 81%-85% dari alokasi anggaran" },
      { "id": 5, "nilai" : 0, "nama" : "Membelanjakan biaya kurang dari 81% dari alokasi anggaran" }
    ],
    "jawaban": 4
  },
  {
    "id": 5270,
    "bagian_id": 300,
    "nomor": 117,
    "nama": "Sekolah/Madrasah membelanjakan   dana   untuk   kegiatan   kesiswaan selama satu tahun terakhir.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Membelanjakan dana sebanyak 96%-100% dari alokasi anggaran" },
      { "id": 2, "nilai" : 3, "nama" : "Membelanjakan dana sebanyak 91%-95% dari alokasi anggaran" },
      { "id": 3, "nilai" : 2, "nama" : "Membelanjakan dana sebanyak 86%-90% dari alokasi anggaran" },
      { "id": 4, "nilai" : 1, "nama" : "Membelanjakan dana sebanyak 81%-85% dari alokasi anggaran" },
      { "id": 5, "nilai" : 0, "nama" : "Membelanjakan dana kurang dari 81% dari alokasi anggaran" }
    ],
    "jawaban": 4
  },
  {
    "id": 5271,
    "bagian_id": 300,
    "nomor": 118,
    "nama": "Sekolah/Madrasah membelanjakan  dana  pengadaan   alat   tulis  untuk kegiatan pembelajaran selama satu tahun terakhir.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Membelanjakan dana sebanyak 96%-100% dari alokasi anggaran" },
      { "id": 2, "nilai" : 3, "nama" : "Membelanjakan dana sebanyak 91%-95% dari alokasi anggaran" },
      { "id": 3, "nilai" : 2, "nama" : "Membelanjakan dana sebanyak 86%-90% dari alokasi anggaran" },
      { "id": 4, "nilai" : 1, "nama" : "Membelanjakan dana sebanyak 81%-85% dari alokasi anggaran" },
      { "id": 5, "nilai" : 0, "nama" : "Membelanjakan dana kurang dari 81% dari alokasi anggaran" }
    ],
    "jawaban": 4
  },
  {
    "id": 5272,
    "bagian_id": 300,
    "nomor": 119,
    "nama": "Sekolah/Madrasah membelanjakan dana  pengadaan bahan  habis  pakai untuk kegiatan pembelajaran selama satu tahun terakhir.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Membelanjakan dana sebanyak 96%-100% dari alokasi anggaran" },
      { "id": 2, "nilai" : 3, "nama" : "Membelanjakan dana sebanyak 91%-95% dari alokasi anggaran" },
      { "id": 3, "nilai" : 2, "nama" : "Membelanjakan dana sebanyak 86%-90% dari alokasi anggaran" },
      { "id": 4, "nilai" : 1, "nama" : "Membelanjakan dana sebanyak 81%-85% dari alokasi anggaran" },
      { "id": 5, "nilai" : 0, "nama" : "Membelanjakan dana kurang dari 81% dari alokasi anggaran" }
    ],
    "jawaban": 4
  },
  {
    "id": 5273,
    "bagian_id": 300,
    "nomor": 120,
    "nama": "Sekolah/Madrasah  membelanjakan  dana   pengadaan   alat  habis  pakai untuk kegiatan pembelajaran selama satu tahun terakhir.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Membelanjakan dana sebanyak 96%-100% dari alokasi anggaran" },
      { "id": 2, "nilai" : 3, "nama" : "Membelanjakan dana sebanyak 91%-95% dari alokasi anggaran" },
      { "id": 3, "nilai" : 2, "nama" : "Membelanjakan dana sebanyak 86%-90% dari alokasi anggaran" },
      { "id": 4, "nilai" : 1, "nama" : "Membelanjakan dana sebanyak 81%-85% dari alokasi anggaran" },
      { "id": 5, "nilai" : 0, "nama" : "Membelanjakan dana kurang dari 81% dari alokasi anggaran" }
    ],
    "jawaban": 4
  },
  {
    "id": 5274,
    "bagian_id": 300,
    "nomor": 121,
    "nama": "Sekolah/Madrasah  membelanjakan   dana   pengadaan   kegiatan rapat selama satu tahun terakhir.",
    "bobot": 2,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Membelanjakan dana sebanyak 96%-100% dari alokasi anggaran" },
      { "id": 2, "nilai" : 3, "nama" : "Membelanjakan dana sebanyak 91%-95% dari alokasi anggaran" },
      { "id": 3, "nilai" : 2, "nama" : "Membelanjakan dana sebanyak 86%-90% dari alokasi anggaran" },
      { "id": 4, "nilai" : 1, "nama" : "Membelanjakan dana sebanyak 81%-85% dari alokasi anggaran" },
      { "id": 5, "nilai" : 0, "nama" : "Membelanjakan dana kurang dari 81% dari alokasi anggaran" }
    ],
    "jawaban": 4
  },
  {
    "id": 5275,
    "bagian_id": 300,
    "nomor": 122,
    "nama": "Sekolah/Madrasah membelanjakan dana  transport dan perjalanan dinas selama satu tahun terakhir.",
    "bobot": 2,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Membelanjakan dana sebanyak 96%-100% dari alokasi anggaran" },
      { "id": 2, "nilai" : 3, "nama" : "Membelanjakan dana sebanyak 91%-95% dari alokasi anggaran" },
      { "id": 3, "nilai" : 2, "nama" : "Membelanjakan dana sebanyak 86%-90% dari alokasi anggaran" },
      { "id": 4, "nilai" : 1, "nama" : "Membelanjakan dana sebanyak 81%-85% dari alokasi anggaran" },
      { "id": 5, "nilai" : 0, "nama" : "Membelanjakan dana kurang dari 81% dari alokasi anggaran" }
    ],
    "jawaban": 4
  },
  {
    "id": 5276,
    "bagian_id": 300,
    "nomor": 123,
    "nama": "Sekolah/Madrasah membelanjakan dana penggandaan soal-soal ulangan/ujian selama satu tahun terakhir. ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Membelanjakan dana sebanyak 96%-100% dari alokasi anggaran" },
      { "id": 2, "nilai" : 3, "nama" : "Membelanjakan dana sebanyak 91%-95% dari alokasi anggaran" },
      { "id": 3, "nilai" : 2, "nama" : "Membelanjakan dana sebanyak 86%-90% dari alokasi anggaran" },
      { "id": 4, "nilai" : 1, "nama" : "Membelanjakan dana sebanyak 81%-85% dari alokasi anggaran" },
      { "id": 5, "nilai" : 0, "nama" : "Membelanjakan dana kurang dari 81% dari alokasi anggaran" }
    ],
    "jawaban": 4
  },
  {
    "id": 5277,
    "bagian_id": 300,
    "nomor": 124,
    "nama": "Sekolah/Madrasah membelanjakan  dana   pengadaan   daya   dan  jasa selama satu tahun terakhir.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Membelanjakan dana sebanyak 96%-100% dari alokasi anggaran" },
      { "id": 2, "nilai" : 3, "nama" : "Membelanjakan dana sebanyak 91%-95% dari alokasi anggaran" },
      { "id": 3, "nilai" : 2, "nama" : "Membelanjakan dana sebanyak 86%-90% dari alokasi anggaran" },
      { "id": 4, "nilai" : 1, "nama" : "Membelanjakan dana sebanyak 81%-85% dari alokasi anggaran" },
      { "id": 5, "nilai" : 0, "nama" : "Membelanjakan dana kurang dari 81% dari alokasi anggaran" }
    ],
    "jawaban": 4
  },
  {
    "id": 5278,
    "bagian_id": 300,
    "nomor": 125,
    "nama": "Sekolah/Madrasah membelanjakan anggaran untuk mendukung kegiatan operasi tidak langsung untuk satu tahun terakhir.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Membelanjakan dana sebanyak 96%-100% dari alokasi anggaran" },
      { "id": 2, "nilai" : 3, "nama" : "Membelanjakan dana sebanyak 91%-95% dari alokasi anggaran" },
      { "id": 3, "nilai" : 2, "nama" : "Membelanjakan dana sebanyak 86%-90% dari alokasi anggaran" },
      { "id": 4, "nilai" : 1, "nama" : "Membelanjakan dana sebanyak 81%-85% dari alokasi anggaran" },
      { "id": 5, "nilai" : 0, "nama" : "Membelanjakan dana kurang dari 81% dari alokasi anggaran" }
    ],
    "jawaban": 4
  },
  {
    "id": 5279,
    "bagian_id": 300,
    "nomor": 126,
    "nama": "Biaya operasi sekolah digunakan  untuk: (1) kesejahteraan warga sekolah/madrasah, (2) pengembangan guru dan tenaga kependidikan, (3) sarana prasarana, (4) pengembangan kurikulum dan kegiatan pembelajaran, dan (5) kegiatan ketatausahaan.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Selama setahun terakhir digunakan untuk 4-5 pos" },
      { "id": 2, "nilai" : 3, "nama" : "Selama setahun terakhir digunakan untuk 3 pos" },
      { "id": 3, "nilai" : 2, "nama" : "Selama setahun terakhir digunakan untuk 2 pos" },
      { "id": 4, "nilai" : 1, "nama" : "Selama setahun terakhir digunakan hanya untuk 1 pos" },
      { "id": 5, "nilai" : 0, "nama" : "Selama setahun terakhir belum digunakan" }
    ],
    "jawaban": 4
  },
  {
    "id": 5280,
    "bagian_id": 300,
    "nomor": 127,
    "nama": "Sekolah/Madrasah memungut biaya pendidikan.",
    "bobot": 2,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sekolah/Madrasah   tidak   memungut    biaya  pendidikan    dari siswa" },
      { "id": 2, "nilai" : 3, "nama" : "Memungut 30 % dari standar biaya persiswa" },
      { "id": 3, "nilai" : 2, "nama" : "Memungut 40 %  dari standar biaya persiswa" },
      { "id": 4, "nilai" : 1, "nama" : "Memungut 50 % dari standar biaya persiswa" },
      { "id": 5, "nilai" : 0, "nama" : "Memungut lebih dari 50% dari standar biaya persiswa" }
    ],
    "jawaban": 4
  },
  {
    "id": 5281,
    "bagian_id": 300,
    "nomor": 128,
    "nama": "Siswa dikenakan biaya pendaftaran ulang setiap awal  tahun pelajaran.",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Tidak ada seorangpun siswa dikenakan biaya pendaftaran ulang pada setiap awal tahun  pelajaran" },
      { "id": 2, "nilai" : 3, "nama" : "Sebanyak  1%-25% siswa dikenakan biaya pendaftaran ulang pada setiap awal tahun  pelajaran" },
      { "id": 3, "nilai" : 2, "nama" : "Sebanyak 26%-50% siswa dikenakan biaya pendaftaran ulang pada setiap awal tahun  pelajaran" },
      { "id": 4, "nilai" : 1, "nama" : "Sebanyak 51%-75% siswa dikenakan biaya pendaftaran ulang pada setiap awal tahun  pelajaran" },
      { "id": 5, "nilai" : 0, "nama" : "Sebanyak 76%-100% siswa dikenakan biaya pendaftaran ulang pada setiap awal tahun  pelajaran" }
    ],
    "jawaban": 4
  },
  {
    "id": 5282,
    "bagian_id": 300,
    "nomor": 129,
    "nama": "Sekolah/Madrasah memberikan bantuan untuk siswa  yang  kurang mampu secara ekonomi.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Membantu 91%-100% siswa kurang mampu secara ekonomi" },
      { "id": 2, "nilai" : 3, "nama" : "Membantu  81%-90% siswa kurang mampu secara ekonomi" },
      { "id": 3, "nilai" : 2, "nama" : "Membantu  71%-80% siswa kurang mampu secara ekonomi" },
      { "id": 4, "nilai" : 1, "nama" : "Membantu 61%-70% siswa kurang mampu secara ekonomi" },
      { "id": 5, "nilai" : 0, "nama" : "Membantu kurang dari 61% siswa kurang mampu secara ekonomi" }
    ],
    "jawaban": 4
  },
  {
    "id": 5283,
    "bagian_id": 300,
    "nomor": 130,
    "nama": "Sekolah/Madrasah melakukan pungutan biaya personal lain  di samping uang sekolah/madrasah.",
    "bobot": 2,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Tidak melakukan pungutan biaya personal lain" },
      { "id": 2, "nilai" : 3, "nama" : "Melakukan 1 jenis pungutan biaya personal lain" },
      { "id": 3, "nilai" : 2, "nama" : "Melakukan 2 jenis pungutan biaya personal lain" },
      { "id": 4, "nilai" : 1, "nama" : "Melakukan 3 jenis pungutan biaya personal lain" },
      { "id": 5, "nilai" : 0, "nama" : "Melakukan 4 atau lebih jenis pungutan biaya personal lain" }
    ],
    "jawaban": 4
  },
  {
    "id": 5284,
    "bagian_id": 300,
    "nomor": 131,
    "nama": "Pengambilan keputusan sekolah/madrasah untuk menarik atau  tidak menarik dana dari masyarakat dilakukan dengan melibatkan unsur: (1) penyelenggara pendidikan/ yayasan, (2) kepala sekolah/madrasah, (3) komite sekolah/madrasah, (4) perwakilan guru,  dan (5) perwakilan tenaga kependidikan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Pengambilan keputusan dilakukan dengan melibatkan 4 unsur yang terkait atau lebih" },
      { "id": 2, "nilai" : 3, "nama" : "Pengambilan keputusan dilakukan dengan melibatkan 3 unsur yang terkait" },
      { "id": 3, "nilai" : 2, "nama" : "Pengambilan keputusan dilakukan dengan melibatkan 2 unsur yang terkait" },
      { "id": 4, "nilai" : 1, "nama" : "Pengambilan keputusan dilakukan dengan melibatkan hanya 1 unsur yang terkait" },
      { "id": 5, "nilai" : 0, "nama" : "Pengambilan keputusan dilakukan berdasarkan sekolah/madrasah lainnya" }
    ],
    "jawaban": 4
  },
  {
    "id": 5285,
    "bagian_id": 300,
    "nomor": 132,
    "nama": "Sumbangan pendidikan atau dana dari masyarakat dikelola secara sistematis, transparan, efisien, dan akuntabel serta dilaporkan kepada komite sekolah/madrasah.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Dikelola secara sistematis, transparan, efisien, dan akuntabel serta dilaporkan kepada komite sekolah/madrasah" },
      { "id": 2, "nilai" : 3, "nama" : "Dikelola secara sistematis, transparan, efisien, dan akuntabel, tetapi tidak dilaporkan" },
      { "id": 3, "nilai" : 2, "nama" : "Dikelola secara sistematis, transparan, dan efisien, tetapi tidak akuntabel dan tidak dilaporkan" },
      { "id": 4, "nilai" : 1, "nama" : "Dikelola secara sistematis dan transparan, tetapi tidak efisien, akuntabel, dan tidak dilaporkan" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak dikelola secara sistematis, transparan, efisien, dan akuntabel, dan tidak dilaporkan" }
    ],
    "jawaban": 4
  },
  {
    "id": 5286,
    "bagian_id": 300,
    "nomor": 133,
    "nama": "Sekolah/Madrasah memiliki pedoman pengelolaan keuangan sebagai dasar dalam penyusunan RKA-S/M.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki pedoman  pengelolaan keuangan selama 4 tahun terakhir secara berturut-turut" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki pedoman  pengelolaan keuangan selama 3 tahun terakhir secara berturut-turut" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki pedoman  pengelolaan keuangan selama 2 tahun terakhir secara berturut-turut" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki pedoman  pengelolaan keuangan selama 1 tahun terakhir" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki pedoman pengelolaan keuangan" }
    ],
    "jawaban": 4
  },
  {
    "id": 5287,
    "bagian_id": 300,
    "nomor": 134,
    "nama": "Sekolah/Madrasah memiliki pembukuan biaya operasional.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki pembukuan biaya operasi secara menyeluruh selama 3 tahun  terakhir secara  berturut-turut" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki pembukuan biaya operasi secara menyeluruh selama 2 tahun  terakhir secara  berturut-turut" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki pembukuan biaya operasi secara menyeluruh selama 1 tahun terakhir" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki pembukuan biaya operasi secara tidak menyeluruh selama 1 tahun terakhir" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki pembukuan biaya operasional" }
    ],
    "jawaban": 4
  },
  {
    "id": 5288,
    "bagian_id": 300,
    "nomor": 135,
    "nama": "Sekolah/Madrasah membuat laporan pertanggungjawaban pengelolaan keuangan dan menyampaikannya kepada pemerintah atau yayasan.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Membuat laporan pertanggungjawaban pengelolaan keuangan dan menyampaikannya kepada pemerintah atau yayasan selama 4 tahun terakhir" },
      { "id": 2, "nilai" : 3, "nama" : "Membuat laporan pertanggungjawaban pengelolaan keuangan dan menyampaikannya kepada pemerintah atau yayasan selama 3 tahun terakhir" },
      { "id": 3, "nilai" : 2, "nama" : "Membuat laporan pertanggungjawaban pengelolaan keuangan dan menyampaikannya kepada pemerintah atau yayasan selama 2 tahun terakhir" },
      { "id": 4, "nilai" : 1, "nama" : "Membuat laporan pertanggungjawaban pengelolaan keuangan dan menyampaikannya kepada pemerintah atau yayasan selama 1 tahun terakhir" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak membuat laporan pertanggungjawaban pengelolaan keuangan" }
    ],
    "jawaban": 4
  },
  {
    "id": 5289,
    "bagian_id": 301,
    "nomor": 136,
    "nama": "Guru menginformasikan rancangan dan kriteria penilaian yang ada dalam silabus mata pelajaran kepada siswa pada semester yang berjalan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sebanyak 91%-100% guru menginformasikan rancangan dan kriteria penilaian kepada siswa" },
      { "id": 2, "nilai" : 3, "nama" : "Sebanyak 81%-90% guru menginformasikan rancangan dan kriteria penilaian kepada siswa" },
      { "id": 3, "nilai" : 2, "nama" : "Sebanyak 71%-80% guru menginformasikan rancangan dan kriteria penilaian kepada siswa" },
      { "id": 4, "nilai" : 1, "nama" : "Sebanyak 61%-70% guru menginformasikan rancangan dan kriteria penilaian kepada siswa" },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 61% guru yang menginformasikan rancangan dan kriteria penilaian kepada siswa" }
    ],
    "jawaban": 4
  },
  {
    "id": 5290,
    "bagian_id": 301,
    "nomor": 137,
    "nama": "Teknik penilaian yang ada pada silabus telah sesuai dengan indikator pencapaian kompetensi dasar (KD).",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sebanyak 96%-100% silabus memuat teknik penilaian yang sesuai dengan indikator pencapaian KD" },
      { "id": 2, "nilai" : 3, "nama" : "Sebanyak 91%-95% silabus memuat teknik penilaian yang sesuai dengan indikator pencapaian KD" },
      { "id": 3, "nilai" : 2, "nama" : "Sebanyak 86%-90% silabus memuat teknik penilaian yang sesuai dengan indikator pencapaian KD" },
      { "id": 4, "nilai" : 1, "nama" : "Sebanyak 81%-85% silabus memuat teknik penilaian yang sesuai dengan indikator pencapaian KD" },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 81% silabus memuat teknik penilaian yang sesuai dengan indikator pencapaian KD" }
    ],
    "jawaban": 4
  },
  {
    "id": 5291,
    "bagian_id": 301,
    "nomor": 138,
    "nama": "Guru mengembangkan instrumen dan pedoman penilaian sesuai dengan bentuk dan teknik penilaian.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sebanyak 86%-100% guru mengembangkan instrumen dan pedoman penilaian sesuai dengan bentuk dan teknik penilaian" },
      { "id": 2, "nilai" : 3, "nama" : "Sebanyak 71%-85% guru mengembangkan instrumen dan pedoman penilaian sesuai dengan bentuk dan teknik penilaian" },
      { "id": 3, "nilai" : 2, "nama" : "Sebanyak 56%-70% guru mengembangkan instrumen dan pedoman penilaian sesuai dengan bentuk dan teknik penilaian" },
      { "id": 4, "nilai" : 1, "nama" : "Sebanyak 41%-55% guru mengembangkan instrumen dan pedoman penilaian sesuai dengan bentuk dan teknik penilaian" },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 41% guru mengembangkan instrumen dan pedoman penilaian sesuai dengan bentuk dan teknik penilaian" }
    ],
    "jawaban": 4
  },
  {
    "id": 5292,
    "bagian_id": 301,
    "nomor": 139,
    "nama": "Guru menggunakan berbagai teknik penilaian.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sebanyak 86%-100% guru melakukan penilaian dengan menggunakan 4 atau  lebih teknik penilaian" },
      { "id": 2, "nilai" : 3, "nama" : "Sebanyak 71%-85% guru melakukan penilaian dengan menggunakan 4 atau  lebih teknik penilaian" },
      { "id": 3, "nilai" : 2, "nama" : "Sebanyak 56%-70% guru melakukan penilaian dengan menggunakan 4 atau  lebih teknik penilaian" },
      { "id": 4, "nilai" : 1, "nama" : "Sebanyak 41%-55% guru melakukan penilaian dengan menggunakan 4 atau  lebih teknik penilaian" },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 41% guru melakukan penilaian dengan menggunakan 4  atau  lebih teknik penilaian" }
    ],
    "jawaban": 4
  },
  {
    "id": 5440,
    "bagian_id": 308,
    "nomor": 130,
    "nama": "Sekolah/Madrasah membelanjakan biaya untuk  menunjang pelaksana- an kegiatan pembelajaran satu tahun terakhir.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Membelanjakan dana sebanyak 96%-100% dari alokasi anggaran" },
      { "id": 2, "nilai" : 3, "nama" : "Membelanjakan dana sebanyak 91%-95% dari alokasi anggaran" },
      { "id": 3, "nilai" : 2, "nama" : "Membelanjakan dana sebanyak 86%-90% dari alokasi anggaran" },
      { "id": 4, "nilai" : 1, "nama" : "Membelanjakan dana sebanyak 81%-85% dari alokasi anggaran" },
      { "id": 5, "nilai" : 0, "nama" : "Membelanjakan dana kurang dari 81% dari alokasi anggaran" }
    ],
    "jawaban": 4
  },
  {
    "id": 5314,
    "bagian_id": 302,
    "nomor": 4,
    "nama": "Sekolah/Madrasah melaksanakan pengembangan kurikulum melalui mekanisme penyusunan KTSP.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Mekanisme pengembangan kurikulum dilakukan melalui 7 kegiatan pokok" },
      { "id": 2, "nilai" : 3, "nama" : "Mekanisme pengembangan kurikulum dilakukan melalui 5-6 kegiatan pokok" },
      { "id": 3, "nilai" : 2, "nama" : "Mekanisme pengembangan kurikulum dilakukan melalui 3-4 kegiatan pokok" },
      { "id": 4, "nilai" : 1, "nama" : "Mekanisme pengembangan kurikulum dilakukan melalui 1-2 kegiatan pokok" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak mengembangkan kurikulum" }
    ],
    "jawaban": 4
  },
  {
    "id": 5315,
    "bagian_id": 302,
    "nomor": 5,
    "nama": "Sekolah/Madrasah melaksanakan kurikulum dalam bentuk pengajaran berdasarkan prinsip pelaksanaan kurikulum.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melaksanakan kurikulum berdasarkan 7 prinsip pelaksanaan" },
      { "id": 2, "nilai" : 3, "nama" : "Melaksanakan kurikulum berdasarkan 5-6 prinsip pelaksanaan" },
      { "id": 3, "nilai" : 2, "nama" : "Melaksanakan kurikulum berdasarkan 3-4 prinsip pelaksanaan" },
      { "id": 4, "nilai" : 1, "nama" : "Melaksanakan kurikulum berdasarkan 1-2 prinsip pelaksanaan" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melaksanakan kurikulum berdasarkan prinsip dimaksud" }
    ],
    "jawaban": 4
  },
  {
    "id": 5316,
    "bagian_id": 302,
    "nomor": 6,
    "nama": "Sekolah/Madrasah menyusun kurikulum muatan lokal dan kurikulum berbasis pendidikan karakter dengan melibatkan berbagai pihak.",
    "bobot": 2,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melibatkan kepala sekolah/madrasah, guru, komite sekolah/madrasah atau penyelenggara lembaga pendidikan, dinas pendidikan/Kankemenag kabupaten/kota, dan instansi terkait di daerah;" },
      { "id": 2, "nilai" : 3, "nama" : "Melibatkan kepala sekolah/madrasah, guru, komite sekolah/madrasah atau penyelenggara lembaga pendidikan, dan dinas pendidikan/Kankemenag kabupaten/kota;" },
      { "id": 3, "nilai" : 2, "nama" : "Melibatkan kepala sekolah/madrasah, guru, dan komite sekolah/madrasah atau penyelenggara lembaga pendidikan;" },
      { "id": 4, "nilai" : 1, "nama" : "Melibatkan kepala sekolah/madrasah dan guru;" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak menyusun kurikulum muatan lokal dan kurikulum berbasis pendidikan karakter" }
    ],
    "jawaban": 4
  },
  {
    "id": 5317,
    "bagian_id": 302,
    "nomor": 7,
    "nama": "Sekolah/Madrasah melaksanakan program pengembangan diri dalam bentuk kegiatan ekstrakurikuler.",
    "bobot": 2,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melaksanakan 7 jenis atau lebih kegiatan ekstrakurikuler" },
      { "id": 2, "nilai" : 3, "nama" : "Melaksanakan 5_6 jenis kegiatan ekstrakurikuler" },
      { "id": 3, "nilai" : 2, "nama" : "Melaksanakan 3_4 jenis kegiatan ekstrakurikuler" },
      { "id": 4, "nilai" : 1, "nama" : "Melaksanakan 1_2 jenis kegiatan ekstrakurikuler" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melaksanakan kegiatan ekstrakurikuler" }
    ],
    "jawaban": 4
  },
  {
    "id": 5318,
    "bagian_id": 302,
    "nomor": 8,
    "nama": "Sekolah/Madrasah melaksanakan program pengembangan diri dalam bentuk kegiatan layanan konseling.",
    "bobot": 2,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melaksanakan 4 jenis atau lebih kegiatan layanan konseling" },
      { "id": 2, "nilai" : 3, "nama" : "Melaksanakan 3 jenis kegiatan layanan konseling" },
      { "id": 3, "nilai" : 2, "nama" : "Melaksanakan 2 jenis kegiatan layanan konseling" },
      { "id": 4, "nilai" : 1, "nama" : "Melaksanakan 1 jenis kegiatan layanan konseling" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melaksanakan kegiatan layanan konseling" }
    ],
    "jawaban": 4
  },
  {
    "id": 5319,
    "bagian_id": 302,
    "nomor": 9,
    "nama": "Sekolah/Madrasah menjabarkan Standar Kompetensi (SK) dan Kompetensi Dasar (KD) ke dalam indikator-indikator untuk setiap mata pelajaran.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sebanyak 10 atau  lebih mata  pelajaran telah sesuai antara SK, KD,  dan indikator-indikatornya" },
      { "id": 2, "nilai" : 3, "nama" : "Sebanyak 7-9 mata pelajaran telah sesuai antara SK,  KD,  dan indikator-indikatornya" },
      { "id": 3, "nilai" : 2, "nama" : "Sebanyak 4-6 mata pelajaran telah sesuai antara SK,  KD,  dan indikator-indikatornya" },
      { "id": 4, "nilai" : 1, "nama" : "Sebanyak 1-3 mata pelajaran telah sesuai antara SK,  KD,  dan indikator-indikatornya" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak ada mata pelajaran yang sesuai antara SK,  KD,  dan indikator-indikatornya" }
    ],
    "jawaban": 4
  },
  {
    "id": 5320,
    "bagian_id": 302,
    "nomor": 10,
    "nama": "Sekolah/Madrasah menerapkan kegiatan pembelajaran sesuai dengan ketentuan beban belajar yang tertuang pada lampiran Permendiknas Nomor 22 Tahun 2006.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Satu jam pembelajaran tatap muka selama 40 menit, jumlah jam pembelajaran per minggu minimal 32 jam, dan jumlah minggu efektif per tahun  minimal 34 minggu" },
      { "id": 2, "nilai" : 3, "nama" : "Satu jam pembelajaran tatap muka selama 40 menit, jumlah jam pembelajaran per minggu minimal 32 jam, dan jumlah minggu efektif per tahun  kurang  dari 34 minggu" },
      { "id": 3, "nilai" : 2, "nama" : "Satu jam pembelajaran tatap muka selama 40 menit, jumlah jam pembelajaran per minggu kurang dari 32 jam, dan jumlah minggu efektif per tahun  kurang  dari 34 minggu" },
      { "id": 4, "nilai" : 1, "nama" : "Satu jam pembelajaran tatap muka kurang dari 40 menit, jumlah jam pembelajaran per minggu kurang dari 32 jam, dan jumlah minggu efektif per tahun  kurang dari 34 minggu" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak menerapkan  ketentuan beban belajar sesuai dengan Permendiknas" }
    ],
    "jawaban": 4
  },
  {
    "id": 5321,
    "bagian_id": 302,
    "nomor": 11,
    "nama": "Guru mata  pelajaran memberikan penugasan terstruktur dan kegiatan mandiri tidak terstruktur untuk mencapai kompetensi yang diberikan kepada siswa maksimal 50% dari alokasi waktu tiap mata pelajaran.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sebanyak 76%-100% guru mata pelajaran memberikan penugasan terstruktur dan kegiatan mandiri tidak terstruktur" },
      { "id": 2, "nilai" : 3, "nama" : "Sebanyak 51%-75% guru mata pelajaran memberikan penugasan terstruktur dan kegiatan mandiri tidak terstruktur" },
      { "id": 3, "nilai" : 2, "nama" : "Sebanyak 26%-50% guru mata pelajaran memberikan penugasan terstruktur dan kegiatan mandiri tidak terstruktur" },
      { "id": 4, "nilai" : 1, "nama" : "Sebanyak 1%-25% guru mata pelajaran memberikan penugasan terstruktur dan kegiatan mandiri tidak terstruktur" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak ada guru mata pelajaran memberikan penugasan terstruktur dan kegiatan mandiri tidak terstruktur" }
    ],
    "jawaban": 4
  },
  {
    "id": 5336,
    "bagian_id": 303,
    "nomor": 26,
    "nama": "Kepala sekolah/madrasah melakukan supervisi proses pembelajaran dan menindaklanjuti dengan empat cara yaitu: (1) pemberian  contoh, (2) diskusi, (3) pelatihan, dan (4) konsultasi.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Menindaklanjuti dengan 4 cara" },
      { "id": 2, "nilai" : 3, "nama" : "Menindaklanjuti dengan 3 cara" },
      { "id": 3, "nilai" : 2, "nama" : "Menindaklanjuti dengan 2 cara" },
      { "id": 4, "nilai" : 1, "nama" : "Menindaklanjuti dengan 1 cara" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak menindaklanjuti" }
    ],
    "jawaban": 4
  },
  {
    "id": 5322,
    "bagian_id": 302,
    "nomor": 12,
    "nama": "Dokumen lengkap KTSP disahkan  oleh kepala sekolah/madrasah dengan memperhatikan pertimbangan komite sekolah/madrasah atau penyelenggara pendidikan dan disetujui oleh Dinas Pendidikan atau Kankemenag Kab/Kota yang bersangkutan.",
    "bobot": 2,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "KTSP disahkan  oleh kepala sekolah/madrasah dengan memperhatikan pertimbangan komite sekolah/madrasah atau penyelenggara pendidikan  dan diketahui  oleh Dinas Pendidikan atau Kankemenag Kab/Kota yang bersangkutan" },
      { "id": 2, "nilai" : 3, "nama" : "KTSP disahkan  oleh kepala sekolah/madrasah dan disetujui oleh Dinas Pendidikan atau Kankemenag Kab/Kota yang bersangkutan" },
      { "id": 3, "nilai" : 2, "nama" : "KTSP disahkan  oleh kepala sekolah/madrasah dengan memperhatikan pertimbangan komite sekolah/madrasah atau penyelenggara pendidikan" },
      { "id": 4, "nilai" : 1, "nama" : "KTSP disahkan  oleh kepala sekolah/madrasah" },
      { "id": 5, "nilai" : 0, "nama" : "KTSP tidak disahkan" }
    ],
    "jawaban": 4
  },
  {
    "id": 5323,
    "bagian_id": 302,
    "nomor": 13,
    "nama": "Sekolah/Madrasah mengembangkan silabus mata pelajaran dengan menggunakan 7 langkah pengembangan silabus.",
    "bobot": 2,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sebanyak 91%-100% silabus mata pelajaran dikembangkan dengan menggunakan 7 langkah pengembangan silabus" },
      { "id": 2, "nilai" : 3, "nama" : "Sebanyak 81%-90% silabus mata pelajaran dikembangkan dengan menggunakan 7 langkah pengembangan silabus" },
      { "id": 3, "nilai" : 2, "nama" : "Sebanyak 71%-80% silabus mata pelajaran dikembangkan dengan menggunakan 7 langkah pengembangan silabus" },
      { "id": 4, "nilai" : 1, "nama" : "Sebanyak 61%-70% silabus mata pelajaran dikembangkan dengan menggunakan 7 langkah pengembangan silabus" },
      { "id": 5, "nilai" : 0, "nama" : "Sebanyak kurang dari 61% silabus mata pelajaran dikembangkan dengan menggunakan 7 langkah pengembangan silabus" }
    ],
    "jawaban": 4
  },
  {
    "id": 5324,
    "bagian_id": 302,
    "nomor": 14,
    "nama": "Dalam mengembangkan KTSP,  guru menyusun silabus sendiri.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sebanyak 91%-100% guru menyusun silabus sendiri" },
      { "id": 2, "nilai" : 3, "nama" : "Sebanyak 81%-90% guru menyusun silabus sendiri" },
      { "id": 3, "nilai" : 2, "nama" : "Sebanyak 71%-80% guru menyusun silabus sendiri" },
      { "id": 4, "nilai" : 1, "nama" : "Sebanyak 61%-70% guru menyusun silabus sendiri" },
      { "id": 5, "nilai" : 0, "nama" : "Sebanyak kurang dari 61% guru menyusun silabus sendiri" }
    ],
    "jawaban": 4
  },
  {
    "id": 5325,
    "bagian_id": 302,
    "nomor": 15,
    "nama": "Sekolah/Madrasah mengembangkan silabus secara mandiri atau cara lainnya berdasarkan standar isi, standar kompetensi lulusan, dan panduan penyusunan KTSP.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Mengembangkan silabus melalui kelompok guru mata  pelajaran di sekolah/madrasah" },
      { "id": 2, "nilai" : 3, "nama" : "Mengembangkan silabus oleh masing-masing  guru mata pelajaran di sekolah/madrasah" },
      { "id": 3, "nilai" : 2, "nama" : "Mengembangkan silabus secara berkelompok dari beberapa sekolah/madrasah" },
      { "id": 4, "nilai" : 1, "nama" : "Mengembangkan silabus dengan mengadopsi contoh yang sudah ada" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak mengembangkan silabus" }
    ],
    "jawaban": 4
  },
  {
    "id": 5326,
    "bagian_id": 302,
    "nomor": 16,
    "nama": "Sekolah/Madrasah menetapkan Kriteria Ketuntasan Minimal (KKM) 75,00 persen untuk setiap mata pelajaran melalui rapat.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sebanyak 6 atau  lebih mata  pelajaran dengan KKM 75,00 persen atau lebih" },
      { "id": 2, "nilai" : 3, "nama" : "Sebanyak 5 mata pelajaran dengan KKM 75,00 persen atau lebih" },
      { "id": 3, "nilai" : 2, "nama" : "Sebanyak 4 mata pelajaran dengan KKM 75,00 persen atau lebih" },
      { "id": 4, "nilai" : 1, "nama" : "Sebanyak 3 mata pelajaran dengan KKM 75,00 persen atau lebih" },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 3 mata pelajaran dengan KKM 75,00 persen atau lebih" }
    ],
    "jawaban": 4
  },
  {
    "id": 5327,
    "bagian_id": 302,
    "nomor": 17,
    "nama": "Sekolah/Madrasah menentukan KKM setiap mata pelajaran melalui rapat dewan guru dengan memperhatikan unsur:  (1) karakteristik siswa/Intake siswa, (2) karakteristik mata  pelajaran/kompleksitas, dan (3) kondisi sekolah/madrasah/daya dukung.",
    "bobot": 2,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Menentukan KKM dengan memperhatikan 3 unsur melalui rapat dewan guru" },
      { "id": 2, "nilai" : 3, "nama" : "Menentukan KKM dengan memperhatikan 2 unsur melalui rapat dewan guru" },
      { "id": 3, "nilai" : 2, "nama" : "Menentukan KKM dengan memperhatikan 1 unsur melalui rapat dewan guru" },
      { "id": 4, "nilai" : 1, "nama" : "Menentukan KKM tanpa memperhatikan 3 unsur melalui rapat dewan guru" },
      { "id": 5, "nilai" : 0, "nama" : "Menentukan KKM tanpa memperhatikan 3 unsur dan tidak melalui rapat dewan guru" }
    ],
    "jawaban": 4
  },
  {
    "id": 5328,
    "bagian_id": 303,
    "nomor": 18,
    "nama": "Sekolah/Madrasah memiliki kalender pendidikan yang memuat pengaturan waktu  untuk kegiatan pembelajaran peserta didik  selama satu  tahun  ajaran: (1) awal tahun pelajaran, (2) minggu efektif, (3) pembelajaran efektif, dan (4) hari libur.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memuat 4 macam pengaturan waktu" },
      { "id": 2, "nilai" : 3, "nama" : "Memuat 3 macam pengaturan waktu" },
      { "id": 3, "nilai" : 2, "nama" : "Memuat 2 macam pengaturan waktu" },
      { "id": 4, "nilai" : 1, "nama" : "Memuat 1 macam pengaturan waktu" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki kalender  pendidikan" }
    ],
    "jawaban": 4
  },
  {
    "id": 5329,
    "bagian_id": 303,
    "nomor": 19,
    "nama": "Setiap mata  pelajaran memiliki Rencana Pelaksanaan Pembelajaran (RPP) dengan mengintegrasikan pendidikan karakter yang dijabarkan dari silabus.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sebanyak 10 atau  lebih mata  pelajaran memiliki RPP dengan mengintegrasikan pendidikan karakter yang dijabarkan dari silabus " },
      { "id": 2, "nilai" : 3, "nama" : "Sebanyak 7-9 mata pelajaran memiliki RPP dengan mengintegrasikan pendidikan karakter yang dijabarkan  dari silabus" },
      { "id": 3, "nilai" : 2, "nama" : "Sebanyak 4-6 mata pelajaran memiliki RPP dengan mengintegrasikan pendidikan karakter yang dijabarkan  dari silabus" },
      { "id": 4, "nilai" : 1, "nama" : "Sebanyak 1-3 mata pelajaran memiliki RPP dengan mengintegrasikan pendidikan karakter yang dijabarkan  dari silabus" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak ada mata pelajaran memiliki RPP dengan mengintegrasikan pendidikan karakter yang dijabarkan  dari silabus" }
    ],
    "jawaban": 4
  },
  {
    "id": 5330,
    "bagian_id": 303,
    "nomor": 20,
    "nama": "RPP disusun dengan memperhatikan 6 prinsip penyusunan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sebanyak 91%-100% RPP sudah memperhatikan 6 prinsip penyusunan" },
      { "id": 2, "nilai" : 3, "nama" : "Sebanyak 81%-90% RPP sudah memperhatikan 6 prinsip penyusunan" },
      { "id": 3, "nilai" : 2, "nama" : "Sebanyak 71%-80% RPP sudah memperhatikan 6 prinsip penyusunan" },
      { "id": 4, "nilai" : 1, "nama" : "Sebanyak 61%-70% RPP sudah memperhatikan 6 prinsip penyusunan" },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 61% RPP sudah memperhatikan 6 prinsip penyusunan" }
    ],
    "jawaban": 4
  },
  {
    "id": 5331,
    "bagian_id": 303,
    "nomor": 21,
    "nama": "Dalam mengembangkan KTSP,  guru menyusun RPP.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sebanyak 91%-100% RPP disusun oleh guru" },
      { "id": 2, "nilai" : 3, "nama" : "Sebanyak 81%-90% RPP disusun oleh guru" },
      { "id": 3, "nilai" : 2, "nama" : "Sebanyak 71%-80% RPP disusun oleh guru" },
      { "id": 4, "nilai" : 1, "nama" : "Sebanyak 61%-70% RPP disusun oleh guru" },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 61% RPP disusun oleh guru" }
    ],
    "jawaban": 4
  },
  {
    "id": 5332,
    "bagian_id": 303,
    "nomor": 22,
    "nama": "Sekolah/Madrasah melaksanakan proses pembelajaran dengan memenuhi persyaratan yang ditentukan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memenuhi 4 persyaratan pelaksanaan proses pembelajaran" },
      { "id": 2, "nilai" : 3, "nama" : "Memenuhi 3 persyaratan pelaksanaan proses pembelajaran" },
      { "id": 3, "nilai" : 2, "nama" : "Memenuhi 2 persyaratan pelaksanaan proses pembelajaran" },
      { "id": 4, "nilai" : 1, "nama" : "Memenuhi 1 persyaratan pelaksanaan proses pembelajaran" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memenuhi persyaratan pelaksanaan proses pembelajaran" }
    ],
    "jawaban": 4
  },
  {
    "id": 5333,
    "bagian_id": 303,
    "nomor": 23,
    "nama": "Proses pembelajaran di sekolah/madrasah dilaksanakan sesuai dengan langkah-langkah pembelajaran.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sebanyak 91%-100% guru melaksanakan proses pembelajaran sesuai dengan langkah-langkah pembelajaran" },
      { "id": 2, "nilai" : 3, "nama" : "Sebanyak 81%-90% guru melaksanakan proses pembelajaran sesuai dengan langkah-langkah pembelajaran" },
      { "id": 3, "nilai" : 2, "nama" : "Sebanyak 71%-80% guru melaksanakan proses pembelajaran sesuai dengan langkah-langkah pembelajaran" },
      { "id": 4, "nilai" : 1, "nama" : "Sebanyak 61%-70% guru melaksanakan proses pembelajaran sesuai dengan langkah-langkah pembelajaran" },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 61% guru melaksanakan proses pembelajaran sesuai dengan langkah-langkah pembelajaran" }
    ],
    "jawaban": 4
  },
  {
    "id": 5334,
    "bagian_id": 303,
    "nomor": 24,
    "nama": "Sekolah/Madrasah melakukan penilaian hasil belajar untuk memperbaiki proses pembelajaran.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sebanyak 91%-100% guru melakukan penilaian hasil belajar untuk memperbaiki proses pembelajaran" },
      { "id": 2, "nilai" : 3, "nama" : "Sebanyak 81%-90% guru melakukan penilaian hasil belajar untuk memperbaiki proses pembelajaran" },
      { "id": 3, "nilai" : 2, "nama" : "Sebanyak 71%-80% guru melakukan penilaian hasil belajar untuk memperbaiki proses pembelajaran" },
      { "id": 4, "nilai" : 1, "nama" : "Sebanyak 61%-70% guru melakukan penilaian hasil belajar untuk memperbaiki proses pembelajaran" },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 61% guru melakukan penilaian hasil belajar untuk memperbaiki proses pembelajaran" }
    ],
    "jawaban": 4
  },
  {
    "id": 5335,
    "bagian_id": 303,
    "nomor": 25,
    "nama": "Kepala sekolah/ madrasah melakukan pemantauan proses pembelajaran mencakup tiga tahapan yaitu: (1) tahap perencanaan, (2) tahap pelaksanaan, dan (3) tahap penilaian hasil pembelajaran.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Mencakup 3 tahap pemantauan serta dilakukan diskusi hasil pemantauan" },
      { "id": 2, "nilai" : 3, "nama" : "Mencakup 3 tahap pemantauan tanpa dilakukan diskusi hasil pemantauan" },
      { "id": 3, "nilai" : 2, "nama" : "Mencakup 2 tahap pemantauan" },
      { "id": 4, "nilai" : 1, "nama" : "Mencakup 1 tahap pemantauan" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak pernah  melakukan pemantauan" }
    ],
    "jawaban": 4
  },
  {
    "id": 5337,
    "bagian_id": 303,
    "nomor": 27,
    "nama": "Kepala sekolah/madrasah melakukan evaluasi terhadap guru dalam proses pembelajaran dengan memperhatikan 4 aspek,  yaitu: (1) persiapan, (2) pelaksanaan, (3) evaluasi pembelajaran, dan (4) rencana tidak lanjut.",
    "bobot": 2,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Evaluasi dilakukan dengan memperhatikan 4 aspek" },
      { "id": 2, "nilai" : 3, "nama" : "Evaluasi dilakukan dengan memperhatikan 3 aspek" },
      { "id": 3, "nilai" : 2, "nama" : "Evaluasi dilakukan dengan memperhatikan 2 aspek" },
      { "id": 4, "nilai" : 1, "nama" : "Evaluasi dilakukan dengan memperhatikan 1 aspek" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melakukan evaluasi" }
    ],
    "jawaban": 4
  },
  {
    "id": 5338,
    "bagian_id": 303,
    "nomor": 28,
    "nama": "Kepala sekolah/madrasah menyampaikan hasil pengawasan proses pembelajaran kepada pemangku kepentingan.",
    "bobot": 2,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Hasil  pengawasan disampaikan kepada guru yang bersangkutan, dewan guru, pengawas sekolah/madrasah, dan komite sekolah/madrasah" },
      { "id": 2, "nilai" : 3, "nama" : "Hasil  pengawasan disampaikan kepada yang bersangkutan, dewan guru, dan pengawas sekolah/madrasah" },
      { "id": 3, "nilai" : 2, "nama" : "Hasil  pengawasan disampaikan kepada yang bersangkutan dan dewan guru" },
      { "id": 4, "nilai" : 1, "nama" : "Hasil  pengawasan disampaikan kepada yang bersangkutan saja" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak menyampaikan hasil pengawasan" }
    ],
    "jawaban": 4
  },
  {
    "id": 5339,
    "bagian_id": 303,
    "nomor": 29,
    "nama": "Kepala sekolah/madrasah melakukan tindak lanjut terhadap hasil pengawasan proses pembelajaran.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sebanyak 91%-100% hasil pengawasan selama satu tahun terakhir ditindaklanjuti" },
      { "id": 2, "nilai" : 3, "nama" : "Sebanyak 81%-90% hasil pengawasan selama satu tahun terakhir ditindaklanjuti" },
      { "id": 3, "nilai" : 2, "nama" : "Sebanyak 71%-80% hasil pengawasan selama satu tahun terakhir ditindak lanjuti" },
      { "id": 4, "nilai" : 1, "nama" : "Sebanyak 61%-70% hasil pengawasan selama satu tahun terakhir ditindaklanjuti" },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 61% hasil pengawasan selama satu tahun terakhir ditindaklanjuti" }
    ],
    "jawaban": 4
  },
  {
    "id": 5340,
    "bagian_id": 304,
    "nomor": 30,
    "nama": "Siswa memperoleh pengalaman belajar untuk memiliki kemampuan berpikir logis, kritis, kreatif, dan inovatif dalam pengambilan keputusan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sebanyak 91%-100% mata pelajaran memuat tugas terstruktur secara kelompok atau individual dalam bentuk pemecahan masalah yang memberikan kesempatan berpikir logis, kritis, kreatif, dan inovatif dalam pengambilan keputusan." },
      { "id": 2, "nilai" : 3, "nama" : "Sebanyak 81%-90% mata pelajaran memuat tugas terstruktur secara kelompok atau individual dalam bentuk pemecahan masalah yang memberikan kesempatan berpikir logis, kritis, kreatif, dan inovatif dalam pengambilan keputusan" },
      { "id": 3, "nilai" : 2, "nama" : "Sebanyak 71%-80% mata pelajaran memuat tugas terstruktur secara kelompok atau individual dalam bentuk pemecahan masalah yang memberikan kesempatan berpikir logis, kritis, kreatif, dan inovatif dalam pengambilan keputusan" },
      { "id": 4, "nilai" : 1, "nama" : "Sebanyak 61%-70% mata pelajaran memuat tugas terstruktur secara kelompok atau individual dalam bentuk pemecahan masalah yang memberikan kesempatan berpikir logis, kritis, kreatif, dan inovatif dalam pengambilan keputusan" },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 61% mata pelajaran memuat tugas terstruktur secara kelompok atau individual dalam bentuk pemecahan masalah yang memberikan kesempatan berpikir logis, kritis, kreatif, dan inovatif dalam pengambilan keputusan" }
    ],
    "jawaban": 4
  },
  {
    "id": 5341,
    "bagian_id": 304,
    "nomor": 31,
    "nama": "Siswa memperoleh pengalaman belajar yang dapat menganalisis gejala alam dan sosial.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sebanyak 91%-100% silabus mata pelajaran memuat pengalaman belajar siswa dalam menganalisis gejala alam dan sosial                                                                                                                                                                                                                                                              " },
      { "id": 2, "nilai" : 3, "nama" : "Sebanyak 81% _                                                                                                                                                                                                                                                              90% silabus mata pelajaran memuat pengalaman belajar siswa dalam menganalisis gejala alam dan sosial" },
      { "id": 3, "nilai" : 2, "nama" : "Sebanyak 71% _                                                                                                                                                                                                                                                              80% silabus mata pelajaran memuat pengalaman belajar siswa dalam menganalisis gejala alam dan sosial" },
      { "id": 4, "nilai" : 1, "nama" : "Sebanyak 61% dan sosial                                                                                                                                                                                                                                                              70% silabus mata pelajaran memuat pengalaman belajar siswa dalam menganalisis gejala alam" },
      { "id": 5, "nilai" : 0, "nama" : "" }
    ],
    "jawaban": 4
  },
  {
    "id": 5342,
    "bagian_id": 304,
    "nomor": 32,
    "nama": "Siswa memperoleh pengalaman belajar melalui program pembiasaan untuk mencari informasi/pengetahuan lebih lanjut dari berbagai sumber belajar selama satu tahun pelajaran terakhir.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sekolah/Madrasah menjalankan 10 kali  atau lebih kegiatan pembiasaan untuk mencari informasi/pengetahuan lebih lanjut dari berbagai sumber belajar" },
      { "id": 2, "nilai" : 3, "nama" : "Sekolah/Madrasah menjalankan 7-9 kali  kegiatan pembiasaan untuk mencari informasi/pengetahuan lebih lanjut dari berbagai sumber belajar" },
      { "id": 3, "nilai" : 2, "nama" : "Sekolah/Madrasah menjalankan 4-6 kali  kegiatan pembiasaan untuk mencari informasi/pengetahuan lebih lanjut dari berbagai sumber belajar" },
      { "id": 4, "nilai" : 1, "nama" : "Sekolah/Madrasah menjalankan 1-3 kali  kegiatan pembiasaan untuk mencari informasi/pengetahuan lebih lanjut dari berbagai sumber belajar" },
      { "id": 5, "nilai" : 0, "nama" : "Sekolah/Madrasah tidak menjalankan kegiatan pembiasaan untuk mencari informasi/pengetahuan lebih lanjut dari berbagai sumber belajar" }
    ],
    "jawaban": 4
  },
  {
    "id": 5343,
    "bagian_id": 304,
    "nomor": 33,
    "nama": "Siswa memperoleh pengalaman belajar yang mampu memanfaatkan lingkungan secara produktif dan bertanggung jawab.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sekolah/Madrasah melaksanakan 4 jenis atau lebih kegiatan yang dapat memanfaatkan lingkungan secara produktif dan bertanggung jawab" },
      { "id": 2, "nilai" : 3, "nama" : "Sekolah/Madrasah melaksanakan 3 jenis kegiatan yang dapat memanfaatkan lingkungan secara produktif dan bertanggung jawab" },
      { "id": 3, "nilai" : 2, "nama" : "Sekolah/Madrasah melaksanakan 2 jenis kegiatan yang dapat memanfaatkan lingkungan secara produktif dan bertanggung jawab" },
      { "id": 4, "nilai" : 1, "nama" : "Sekolah/Madrasah melaksanakan 1 jenis kegiatan yang dapat memanfaatkan lingkungan secara produktif dan bertanggung jawab" },
      { "id": 5, "nilai" : 0, "nama" : "Sekolah/Madrasah tidak melaksanakan kegiatan yang dapat memanfaatkan lingkungan secara produktif dan bertanggung jawab" }
    ],
    "jawaban": 4
  },
  {
    "id": 5344,
    "bagian_id": 304,
    "nomor": 34,
    "nama": "Siswa memperoleh pengalaman mengekspresikan diri  melalui kegiatan seni dan budaya.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sekolah/Madrasah memfasilitasi 4 kali  atau  lebih kegiatan untuk mengekspresikan diri  melalui kegiatan seni dan budaya dalam satu tahun terakhir" },
      { "id": 2, "nilai" : 3, "nama" : "Sekolah/Madrasah memfasilitasi 3 kali  kegiatan  untuk mengekspresikan diri  melalui kegiatan seni dan budaya dalam satu tahun terakhir" },
      { "id": 3, "nilai" : 2, "nama" : "Sekolah/Madrasah memfasilitasi 2 kali  kegiatan  untuk mengekspresikan diri  melalui kegiatan seni dan budaya dalam satu tahun terakhir" },
      { "id": 4, "nilai" : 1, "nama" : "Sekolah/Madrasah memfasilitasi 1 kali  kegiatan  untuk mengekspresikan diri  melalui kegiatan seni dan budaya dalam satu tahun terakhir" },
      { "id": 5, "nilai" : 0, "nama" : "Sekolah/Madrasah tidak memfasilitasi kegiatan untuk mengekspresikan diri  melalui kegiatan seni dan budaya dalam satu tahun terakhir" }
    ],
    "jawaban": 4
  },
  {
    "id": 5345,
    "bagian_id": 304,
    "nomor": 35,
    "nama": "Siswa memperoleh pengalaman belajar untuk mengembangkan kecintaan dan kebanggaan terhadap bangsa dan tanah air  Indonesia melalui jenis kegiatan pada kelompok mata pelajaran kewarganegaraan dan kepribadian.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sekolah/Madrasah melaksanakan 4 atau  lebih jenis kegiatan kelompok mata pelajaran kewarganegaraan dan kepribadian" },
      { "id": 2, "nilai" : 3, "nama" : "Sekolah/Madrasah melaksanakan 3 jenis kegiatan kelompok mata pelajaran kewarganegaraan dan kepribadian" },
      { "id": 3, "nilai" : 2, "nama" : "Sekolah/Madrasah melaksanakan 2 jenis kegiatan kelompok mata pelajaran kewarganegaraan dan kepribadian" },
      { "id": 4, "nilai" : 1, "nama" : "Sekolah/Madrasah melaksanakan 1 jenis kegiatan kelompok mata pelajaran kewarganegaraan dan kepribadian" },
      { "id": 5, "nilai" : 0, "nama" : "Sekolah/Madrasah tidak melaksanakan kegiatan kelompok mata pelajaran kewarganegaraan dan kepribadian" }
    ],
    "jawaban": 4
  },
  {
    "id": 5346,
    "bagian_id": 304,
    "nomor": 36,
    "nama": "Siswa memperoleh pengalaman belajar untuk menumbuhkembangkan sikap percaya diri  dan bertanggung jawab.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sekolah/Madrasah menjalankan kegiatan kesiswaan guna menumbuhkembangkan sikap percaya diri  dan tanggung jawab sebanyak 4 jenis dan/atau 4 kali  atau  lebih dalam satu tahun terakhir" },
      { "id": 2, "nilai" : 3, "nama" : "Sekolah/Madrasah menjalankan kegiatan kesiswaan guna menumbuhkembangkan sikap percaya diri  dan tanggung jawab sebanyak 3 jenis dan/atau 3 kali  dalam satu tahun terakhir" },
      { "id": 3, "nilai" : 2, "nama" : "Sekolah/Madrasah menjalankan kegiatan kesiswaan guna menumbuhkembangkan sikap percaya diri  dan tanggung jawab sebanyak 2 jenis dan/atau 2 kali  dalam satu tahun terakhir" },
      { "id": 4, "nilai" : 1, "nama" : "Sekolah/Madrasah menjalankan kegiatan kesiswaan guna menumbuhkembangkan sikap percaya diri  dan tanggung jawab sebanyak 1 jenis dan/atau 1 kali  dalam satu tahun terakhir" },
      { "id": 5, "nilai" : 0, "nama" : "Sekolah/Madrasah tidak menjalankan kegiatan kesiswaan guna menumbuhkembangkan sikap percaya diri  dan tanggung jawab" }
    ],
    "jawaban": 4
  },
  {
    "id": 5347,
    "bagian_id": 304,
    "nomor": 37,
    "nama": "Siswa memperoleh pengalaman belajar untuk berpartisipasi dalam penegakan aturan-aturan sosial.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sekolah/Madrasah menjalankan kegiatan penegakan aturan-aturan sosial sebanyak 4 jenis dan/atau 4 kali  atau  lebih dalam satu tahun terakhir" },
      { "id": 2, "nilai" : 3, "nama" : "Sekolah/Madrasah menjalankan kegiatan penegakan aturan- aturan sosial sebanyak 3 jenis dan/atau 3 kali  dalam satu tahun terakhir" },
      { "id": 3, "nilai" : 2, "nama" : "Sekolah/Madrasah menjalankan kegiatan penegakan aturan- aturan sosial sebanyak 2 jenis dan/atau 2 kali  dalam satu tahun terakhir" },
      { "id": 4, "nilai" : 1, "nama" : "Sekolah/Madrasah menjalankan kegiatan penegakan aturan- aturan sosial sebanyak 1 jenis dan/atau 1 kali  dalam satu tahun terakhir" },
      { "id": 5, "nilai" : 0, "nama" : "Sekolah/Madrasah tidak menjalankan kegiatan penegakan aturan-aturan sosial" }
    ],
    "jawaban": 4
  },
  {
    "id": 5348,
    "bagian_id": 304,
    "nomor": 38,
    "nama": "Siswa memperoleh pengalaman belajar yang mampu menumbuhkan sikap kompetitif dan  sportif untuk mendapatkan hasil yang terbaik.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sekolah/Madrasah melaksanakan 4 atau  lebih kegiatan yang mampu menumbuhkan sikap kompetitif dan sportif untuk mendapatkan hasil terbaik" },
      { "id": 2, "nilai" : 3, "nama" : "Sekolah/Madrasah melaksanakan 3 kegiatan yang mampu menumbuhkan sikap kompetitif dan sportif untuk mendapatkan hasil terbaik" },
      { "id": 3, "nilai" : 2, "nama" : "Sekolah/Madrasah melaksanakan 2 kegiatan yang mampu menumbuhkan sikap kompetitif dan sportif untuk mendapatkan hasil terbaik" },
      { "id": 4, "nilai" : 1, "nama" : "Sekolah/Madrasah melaksanakan 1 kegiatan yang mampu menumbuhkan sikap kompetitif dan sportif untuk mendapatkan hasil terbaik" },
      { "id": 5, "nilai" : 0, "nama" : "Sekolah/Madrasah tidak melaksanakan kegiatan yang mampu menumbuhkan sikap kompetitif dan sportif untuk mendapatkan hasil terbaik" }
    ],
    "jawaban": 4
  },
  {
    "id": 5349,
    "bagian_id": 304,
    "nomor": 39,
    "nama": "Siswa memperoleh pengalaman belajar yang dapat melibatkan partisipasi siswa dalam kehidupan bermasyarakat, berbangsa, dan bernegara secara demokratis dalam wadah NKRI.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sekolah/Madrasah melaksanakan 4 kali  atau  lebih kegiatan pembelajaran yang melibatkan partisipasi siswa dalam kehidupan bermasyarakat, berbangsa, dan bernegara secara demokratis dalam satu tahun terakhir " },
      { "id": 2, "nilai" : 3, "nama" : "Sekolah/Madrasah melaksanakan 3 kali  kegiatan pembelajaran yang melibatkan partisipasi siswa dalam kehidupan bermasyarakat, berbangsa, dan bernegara secara demokratis dalam satu tahun terakhir" },
      { "id": 3, "nilai" : 2, "nama" : "Sekolah/Madrasah melaksanakan 2 kali  kegiatan pembelajaran yang melibatkan partisipasi siswa dalam kehidupan bermasyarakat, berbangsa, dan bernegara secara demokratis dalam satu tahun terakhir" },
      { "id": 4, "nilai" : 1, "nama" : "Sekolah/Madrasah melaksanakan 1 kali  kegiatan pembelajaran yang melibatkan partisipasi siswa dalam kehidupan bermasyarakat, berbangsa, dan bernegara secara demokratis dalam satu tahun terakhir" },
      { "id": 5, "nilai" : 0, "nama" : "Sekolah/Madrasah tidak melaksanakan kegiatan pembelajaran yang melibatkan partisipasi siswa dalam kehidupan bermasyarakat, berbangsa, dan bernegara secara demokratis dalam satu tahun terakhir" }
    ],
    "jawaban": 4
  },
  {
    "id": 5350,
    "bagian_id": 304,
    "nomor": 40,
    "nama": "Siswa memperoleh pengalaman belajar untuk membentuk karakter, menumbuhkan rasa sportivitas, dan kebersihan lingkungan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sekolah/Madrasah melaksanakan 4 kali  atau  lebih kegiatan untuk membentuk karakter, menumbuhkan rasa sportivitas, dan kebersihan lingkungan dalam satu tahun terakhir " },
      { "id": 2, "nilai" : 3, "nama" : "Sekolah/Madrasah melaksanakan 3 kali  kegiatan untuk membentuk karakter, menumbuhkan rasa sportivitas, dan kebersihan lingkungan dalam satu tahun terakhir" },
      { "id": 3, "nilai" : 2, "nama" : "Sekolah/Madrasah melaksanakan 2 kali  kegiatan untuk membentuk karakter, menumbuhkan rasa sportivitas, dan kebersihan lingkungan dalam satu tahun terakhir" },
      { "id": 4, "nilai" : 1, "nama" : "Sekolah/Madrasah melaksanakan 1 kali  kegiatan untuk membentuk karakter, menumbuhkan rasa sportivitas, dan kebersihan lingkungan dalam satu tahun terakhir" },
      { "id": 5, "nilai" : 0, "nama" : "Sekolah/Madrasah tidak melaksanakan kegiatan untuk membentuk karakter, menumbuhkan rasa sportivitas, dan kebersihan lingkungan dalam satu tahun terakhir" }
    ],
    "jawaban": 4
  },
  {
    "id": 5351,
    "bagian_id": 304,
    "nomor": 41,
    "nama": "Siswa memperoleh pengalaman belajar untuk dapat menjalankan ajaran agama dan akhlak mulia yang bersifat  afektif.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sekolah/Madrasah memfasilitasi 4 jenis atau lebih kegiatan pembiasaan dan pengamalan ajaran agama dalam satu tahun terakhir" },
      { "id": 2, "nilai" : 3, "nama" : "Sekolah/Madrasah memfasilitasi 3 jenis kegiatan pembiasaan dan pengamalan ajaran agama dalam satu tahun terakhir" },
      { "id": 3, "nilai" : 2, "nama" : "Sekolah/Madrasah memfasilitasi 2 jenis kegiatan pembiasaan dan pengamalan ajaran agama dalam satu tahun terakhir" },
      { "id": 4, "nilai" : 1, "nama" : "Sekolah/Madrasah memfasilitasi 1 jenis kegiatan pembiasaan dan pengamalan ajaran agama dalam satu tahun terakhir" },
      { "id": 5, "nilai" : 0, "nama" : "Sekolah/Madrasah tidak pernah melaksanakan kegiatan pembiasaan dan pengamalan ajaran agama" }
    ],
    "jawaban": 4
  },
  {
    "id": 5352,
    "bagian_id": 304,
    "nomor": 42,
    "nama": "Siswa memperoleh pengalaman belajar untuk menghargai keberagaman agama, bangsa, suku, ras, dan golongan sosial ekonomi dalam lingkup global.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sekolah/Madrasah melaksanakan 4 kali  atau  lebih kegiatan pembelajaran untuk menghargai  keberagaman agama, bangsa, suku, ras, dan golongan sosial ekonomi dalam lingkup global pada satu tahun terakhir" },
      { "id": 2, "nilai" : 3, "nama" : "Sekolah/Madrasah melaksanakan 3 kali  kegiatan pembelajaran untuk menghargai keberagaman agama, bangsa, suku, ras, dan golongan sosial ekonomi dalam lingkup global pada satu tahun terakhir" },
      { "id": 3, "nilai" : 2, "nama" : "Sekolah/Madrasah melaksanakan 2 kali  kegiatan pembelajaran untuk menghargai keberagaman agama, bangsa, suku, ras, dan golongan sosial ekonomi dalam lingkup global pada satu tahun terakhir" },
      { "id": 4, "nilai" : 1, "nama" : "Sekolah/Madrasah melaksanakan 1 kali  kegiatan pembelajaran untuk menghargai keberagaman agama, bangsa, suku, ras, dan golongan sosial ekonomi dalam lingkup global pada satu tahun terakhir" },
      { "id": 5, "nilai" : 0, "nama" : "Sekolah/Madrasah tidak melaksanakan kegiatan pembelajaran untuk menghargai keberagaman agama, bangsa, suku, ras, dan golongan sosial ekonomi dalam lingkup global pada satu tahun terakhir" }
    ],
    "jawaban": 4
  },
  {
    "id": 5353,
    "bagian_id": 304,
    "nomor": 43,
    "nama": "Siswa memperoleh pengalaman belajar dalam pembentukan akhlak mulia melalui pembiasaan dan pengamalan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sekolah/Madrasah setiap minggu melaksanakan 4 kali  atau lebih kegiatan pembentukan akhlak mulia melalui program pengembangan diri" },
      { "id": 2, "nilai" : 3, "nama" : "Sekolah/Madrasah setiap minggu melaksanakan 3 kali  kegiatan pembentukan akhlak mulia melalui program pengembangan diri" },
      { "id": 3, "nilai" : 2, "nama" : "Sekolah/Madrasah setiap minggu melaksanakan 2 kali  kegiatan pembentukan akhlak mulia melalui program pengembangan diri" },
      { "id": 4, "nilai" : 1, "nama" : "Sekolah/Madrasah setiap minggu melaksanakan 1 kali  kegiatan pembentukan akhlak mulia melalui program pengembangan diri" },
      { "id": 5, "nilai" : 0, "nama" : "Sekolah/Madrasah tidak melaksanakan kegiatan pembentukan akhlak mulia melalui program pengembangan diri" }
    ],
    "jawaban": 4
  },
  {
    "id": 5405,
    "bagian_id": 306,
    "nomor": 95,
    "nama": "Sekolah/Madrasah memiliki ruang  tata  usaha dengan luas dan sarana sesuai ketentuan.",
    "bobot": 2,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki ruang tata usaha dengan luas dan sarana sesuai ketentuan" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki ruang tata usaha dengan luas tidak sesuai ketentuan tetapi memiliki sarana sesuai ketentuan" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki ruang tata usaha dengan luas sesuai ketentuan tetapi memiliki sarana tidak sesuai ketentuan" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki ruang tata usaha dengan luas dan sarana tidak sesuai ketentuan" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki ruang  tata  usaha" }
    ],
    "jawaban": 4
  },
  {
    "id": 5354,
    "bagian_id": 304,
    "nomor": 44,
    "nama": "Siswa memperoleh pengalaman belajar melalui program pembiasaan untuk menghargai perbedaan pendapat dan berempati terhadap orang lain.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sebanyak 91%-100% kegiatan pembelajaran menggunakan pendekatan diskusi, kerja kelompok, dan persaingan sehat" },
      { "id": 2, "nilai" : 3, "nama" : "Sebanyak 81%-90% kegiatan pembelajaran menggunakan pendekatan diskusi, kerja kelompok, dan persaingan sehat" },
      { "id": 3, "nilai" : 2, "nama" : "Sebanyak 71%-80% kegiatan pembelajaran menggunakan pendekatan diskusi, kerja kelompok, dan persaingan sehat" },
      { "id": 4, "nilai" : 1, "nama" : "Sebanyak 61%-70% kegiatan pembelajaran menggunakan pendekatan diskusi, kerja kelompok, dan persaingan sehat" },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 61% kegiatan pembelajaran menggunakan pendekatan diskusi, kerja kelompok, dan persaingan sehat" }
    ],
    "jawaban": 4
  },
  {
    "id": 5355,
    "bagian_id": 304,
    "nomor": 45,
    "nama": "Siswa memperoleh pengalaman belajar dalam menghasilkan karya kreatif baik individual maupun  kelompok",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sekolah/Madrasah memfasilitasi 4 kali  atau  lebih kegiatan siswa untuk menghasilkan karya kreatif baik individual maupun kelompok dalam satu  tahun  terakhir" },
      { "id": 2, "nilai" : 3, "nama" : "Sekolah/Madrasah memfasilitasi 3 kali  kegiatan siswa untuk menghasilkan karya kreatif baik individual maupun kelompok dalam satu tahun terakhir" },
      { "id": 3, "nilai" : 2, "nama" : "Sekolah/Madrasah memfasilitasi 2 kali  kegiatan siswa untuk menghasilkan karya kreatif baik individual maupun kelompok dalam satu tahun terakhir" },
      { "id": 4, "nilai" : 1, "nama" : "Sekolah/Madrasah memfasilitasi 1 kali  kegiatan siswa untuk menghasilkan karya kreatif baik individual maupun kelompok dalam satu tahun terakhir" },
      { "id": 5, "nilai" : 0, "nama" : "Sekolah/Madrasah tidak memfasilitasi kegiatan siswa untuk menghasilkan karya kreatif baik individual maupun kelompok dalam satu tahun terakhir" }
    ],
    "jawaban": 4
  },
  {
    "id": 5356,
    "bagian_id": 304,
    "nomor": 46,
    "nama": "Siswa memperoleh pengalaman keterampilan membaca dan menulis naskah secara sistematis dan estetis",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sekolah/Madrasah memiliki kumpulan karya tulis siswa baik dari penugasan maupun lomba, laporan hasil kunjungan karya wisata/studi lapangan, majalah dinding, dan buletin siswa internal" },
      { "id": 2, "nilai" : 3, "nama" : "Sekolah/Madrasah memiliki kumpulan karya tulis siswa baik dari penugasan maupun lomba, laporan hasil kunjungan karya wisata/studi lapangan, dan majalah dinding" },
      { "id": 3, "nilai" : 2, "nama" : "Sekolah/Madrasah memiliki kumpulan karya tulis siswa baik dari penugasan maupun lomba, dan laporan hasil kunjungan karya wisata/studi lapangan" },
      { "id": 4, "nilai" : 1, "nama" : "Sekolah/Madrasah memiliki kumpulan karya tulis siswa baik dari penugasan maupun lomba" },
      { "id": 5, "nilai" : 0, "nama" : "Sekolah/Madrasah tidak memiliki kumpulan karya tulis siswa" }
    ],
    "jawaban": 4
  },
  {
    "id": 5357,
    "bagian_id": 304,
    "nomor": 47,
    "nama": "Siswa memperoleh pengalaman keterampilan menyimak, membaca, menulis, dan berbicara baik dalam Bahasa Indonesia maupun Bahasa Inggris.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sekolah/Madrasah menghasilkan 4 atau lebih karya siswa" },
      { "id": 2, "nilai" : 3, "nama" : "Sekolah/Madrasah menghasilkan 3 karya siswa" },
      { "id": 3, "nilai" : 2, "nama" : "Sekolah/Madrasah menghasilkan 2 karya siswa" },
      { "id": 4, "nilai" : 1, "nama" : "Sekolah/Madrasah menghasilkan 1 karya siswa" },
      { "id": 5, "nilai" : 0, "nama" : "Sekolah/Madrasah tidak menghasilkan karya siswa" }
    ],
    "jawaban": 4
  },
  {
    "id": 5358,
    "bagian_id": 304,
    "nomor": 48,
    "nama": "Siswa memperoleh pengalaman belajar dalam mengembangkan iptek seiring dengan perkembangannya.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sekolah/Madrasah melaksanakan 4 kali  atau  lebih kegiatan pengembangan iptek" },
      { "id": 2, "nilai" : 3, "nama" : "Sekolah/Madrasah melaksanakan 3 kali  kegiatan pengembangan iptek" },
      { "id": 3, "nilai" : 2, "nama" : "Sekolah/Madrasah melaksanakan 2 kali  kegiatan pengembangan iptek" },
      { "id": 4, "nilai" : 1, "nama" : "Sekolah/Madrasah melaksanakan 1 kali  kegiatan pengembangan iptek" },
      { "id": 5, "nilai" : 0, "nama" : "Sekolah/Madrasah tidak melaksanakan kegiatan pengembangan iptek" }
    ],
    "jawaban": 4
  },
  {
    "id": 5359,
    "bagian_id": 304,
    "nomor": 49,
    "nama": "Siswa memperoleh pengalaman belajar dan mampu  menguasai pengetahuan untuk melanjutkan ke jenjang pendidikan yang lebih tinggi.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sekolah/Madrasah melaksanakan 4 kali  atau  lebih kegiatan yang mampu menguasai pengetahuan untuk melanjutkan ke jenjang pendidikan yang lebih tinggi" },
      { "id": 2, "nilai" : 3, "nama" : "Sekolah/Madrasah melaksanakan 3 kali  kegiatan yang mampu menguasai pengetahuan untuk melanjutkan ke jenjang pendidikan yang lebih tinggi" },
      { "id": 3, "nilai" : 2, "nama" : "Sekolah/Madrasah melaksanakan 2 kali  kegiatan yang mampu menguasai pengetahuan untuk melanjutkan ke jenjang pendidikan yang lebih tinggi" },
      { "id": 4, "nilai" : 1, "nama" : "Sekolah/Madrasah melaksanakan 1 kali  kegiatan yang mampu menguasai pengetahuan untuk melanjutkan ke jenjang pendidikan yang lebih tinggi" },
      { "id": 5, "nilai" : 0, "nama" : "Sekolah/Madrasah tidak pernah melaksanakan kegiatan yang mampu menguasai pengetahuan untuk melanjutkan ke jenjang pendidikan yang lebih tinggi" }
    ],
    "jawaban": 4
  },
  {
    "id": 5360,
    "bagian_id": 305,
    "nomor": 50,
    "nama": "Guru memiliki kualifikasi akademik minimum diploma empat (D-IV) atau sarjana (S1).",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sebanyak 91%-100% guru berpendidikan minimum D-IV  atau S1" },
      { "id": 2, "nilai" : 3, "nama" : "Sebanyak 81%-90% guru berpendidikan minimum D-IV  atau S1" },
      { "id": 3, "nilai" : 2, "nama" : "Sebanyak 71%-80% guru berpendidikan minimum D-IV  atau S1" },
      { "id": 4, "nilai" : 1, "nama" : "Sebanyak 61%-70% guru berpendidikan minimum D-IV  atau S1" },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 61% guru berpendidikan  minimum  D-IV atau S1" }
    ],
    "jawaban": 4
  },
  {
    "id": 5361,
    "bagian_id": 305,
    "nomor": 51,
    "nama": "Guru mata  pelajaran mengajar sesuai dengan latar belakang pendidikannya.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sebanyak 91%-100% guru mata pelajaran memiliki kesesuaian antara mata pelajaran yang diajarkan dengan latar belakang pendidikannya" },
      { "id": 2, "nilai" : 3, "nama" : "Sebanyak 81%-90% guru mata pelajaran memiliki kesesuaian antara mata pelajaran yang diajarkan dengan latar belakang pendidikannya" },
      { "id": 3, "nilai" : 2, "nama" : "Sebanyak 71%-80% guru mata pelajaran memiliki kesesuaian antara mata pelajaran yang diajarkan dengan latar belakang pendidikannya" },
      { "id": 4, "nilai" : 1, "nama" : "Sebanyak 61%-70% guru mata pelajaran memiliki kesesuaian antara mata pelajaran yang diajarkan dengan latar belakang pendidikannya" },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 61% guru mata pelajaran memiliki kesesuaian antara mata pelajaran yang diajarkan dengan latar belakang pendidikannya" }
    ],
    "jawaban": 4
  },
  {
    "id": 5362,
    "bagian_id": 305,
    "nomor": 52,
    "nama": "Guru memiliki kesehatan jasmani dan rohani untuk menjalankan tugas utama guru",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Rata-rata kehadiran guru 96%-100% untuk menjalankan tugas utama guru" },
      { "id": 2, "nilai" : 3, "nama" : "Rata-rata kehadiran guru 91%-95% untuk menjalankan tugas utama guru" },
      { "id": 3, "nilai" : 2, "nama" : "Rata-rata kehadiran guru 86%-90% untuk menjalankan tugas utama guru" },
      { "id": 4, "nilai" : 1, "nama" : "Rata-rata kehadiran guru 81%-85% untuk menjalankan tugas utama guru" },
      { "id": 5, "nilai" : 0, "nama" : "Rata-rata kehadiran guru kurang dari 81% untuk menjalankan tugas utama guru" }
    ],
    "jawaban": 4
  },
  {
    "id": 5363,
    "bagian_id": 305,
    "nomor": 53,
    "nama": "Guru merencanakan, melaksanakan, dan mengevaluasi pembelajaran sesuai dengan prinsip-prinsip pembelajaran.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sebanyak 91%-100% guru merencanakan, melaksanakan, dan mengevaluasi pembelajaran sesuai dengan prinsip-prinsip pembelajaran" },
      { "id": 2, "nilai" : 3, "nama" : "Sebanyak 81%-90% guru merencanakan, melaksanakan, dan mengevaluasi pembelajaran sesuai dengan prinsip-prinsip pembelajaran" },
      { "id": 3, "nilai" : 2, "nama" : "Sebanyak 71%-80% guru merencanakan, melaksanakan, dan mengevaluasi pembelajaran sesuai dengan prinsip-prinsip pembelajaran" },
      { "id": 4, "nilai" : 1, "nama" : "Sebanyak 61%-70% guru merencanakan, melaksanakan, dan mengevaluasi pembelajaran sesuai dengan prinsip-prinsip pembelajaran" },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 61% guru merencanakan, melaksanakan, dan mengevaluasi pembelajaran sesuai dengan prinsip-prinsip pembelajaran" }
    ],
    "jawaban": 4
  },
  {
    "id": 5364,
    "bagian_id": 305,
    "nomor": 54,
    "nama": "Guru memiliki integritas  kepribadian dan bertindak  sesuai dengan  norma agama, hukum, sosial, serta peraturan dan ketentuan yang berlaku.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Semua guru  berperilaku  sesuai dengan norma-norma agama, hukum, dan sosial" },
      { "id": 2, "nilai" : 3, "nama" : "Terdapat guru yang berperilaku kurang sesuai dengan norma-norma agama, hukum, dan sosial serta telah dilakukan pembinaan" },
      { "id": 3, "nilai" : 2, "nama" : "Terdapat guru yang berperilaku tidak sesuai dengan dengan norma-norma agama, hukum, dan sosial serta telah diberikan pembinaan dan sanksi" },
      { "id": 4, "nilai" : 1, "nama" : "Terdapat guru yang berperilaku bertentangan dengan dengan norma-norma agama, hukum, dan sosial serta telah diberikan sanksi" },
      { "id": 5, "nilai" : 0, "nama" : "Terdapat guru yang melanggar norma-norma agama, hukum, dan sosial tetapi tidak diberikan tindakan" }
    ],
    "jawaban": 4
  },
  {
    "id": 5365,
    "bagian_id": 305,
    "nomor": 55,
    "nama": "Guru berkomunikasi secara  efektif dan santun dengan sesama guru, tenaga kependidikan, siswa, dan orangtua siswa.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Adanya dialog dalam rapat  dewan guru, rapat antara guru dan kepala sekolah/madrasah, guru dan komite sekolah/madrasah, serta pertemuan antara guru dan orangtua siswa" },
      { "id": 2, "nilai" : 3, "nama" : "Adanya dialog dalam rapat  dewan guru, rapat antara guru dan kepala sekolah/madrasah, serta  guru dan komite sekolah/madrasah" },
      { "id": 3, "nilai" : 2, "nama" : "Adanya dialog dalam rapat  dewan guru serta rapat antara guru dan kepala sekolah/madrasah" },
      { "id": 4, "nilai" : 1, "nama" : "Adanya rapat  dewan guru" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak diadakan rapat" }
    ],
    "jawaban": 4
  },
  {
    "id": 5366,
    "bagian_id": 305,
    "nomor": 56,
    "nama": "Guru menguasai materi  pelajaran yang diajarkan serta mengembangkannya secara ilmiah.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sebanyak 96 _ 100% guru memiliki kesesuaian latar belakang pendidikan dengan mata pelajaran yang diampu, menghasilkan karya tulis, dan mengikuti berbagai pertemuan ilmiah" },
      { "id": 2, "nilai" : 3, "nama" : "Sebanyak 91 _ 95% guru memiliki kesesuaian latar belakang pendidikan dengan mata pelajaran yang diampu, menghasilkan karya tulis, dan mengikuti berbagai pertemuan ilmiah" },
      { "id": 3, "nilai" : 2, "nama" : "Sebanyak 86 _ 90% guru memiliki kesesuaian latar belakang pendidikan dengan mata pelajaran yang diampu, menghasilkan karya tulis, dan mengikuti berbagai pertemuan ilmiah" },
      { "id": 4, "nilai" : 1, "nama" : "Sebanyak 81 _ 85% guru memiliki kesesuaian latar belakang pendidikan dengan mata pelajaran yang diampu, menghasilkan karya tulis, dan mengikuti berbagai pertemuan ilmiah" },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 81% guru memiliki kesesuaian  latar belakang pendidikan dengan mata pelajaran yang diampu, menghasilkan karya tulis, dan mengikuti berbagai pertemuan ilmiah." }
    ],
    "jawaban": 4
  },
  {
    "id": 5367,
    "bagian_id": 305,
    "nomor": 57,
    "nama": "Kepala sekolah/madrasah memiliki kualifikasi akademik minimum sarjana (S1) atau diploma empat (D-IV)",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki kualifikasi akademik  minimum  berpendidikan S1 atau D-IV  kependidikan atau nonkependidikan yang dikeluarkan oleh perguruan tinggi terakreditasi" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki kualifikasi akademik  minimum  berpendidikan S1 atau D-IV  Kependidikan atau nonkependidikan yang dikeluarkan oleh perguruan tinggi tidak terakreditasi" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki kualifikasi akademik  berpendidikan dibawah S1 atau D-IV  kependidikan atau nonkependidikan yang dikeluarkan oleh perguruan tinggi terakreditasi " },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki kualifikasi akademik  berpendidikan dibawah S1 atau D-IV  kependidikan atau nonkependidikan yang dikeluarkan oleh perguruan tinggi tidak terakreditasi" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki kualifikasi akademik" }
    ],
    "jawaban": 4
  },
  {
    "id": 5368,
    "bagian_id": 305,
    "nomor": 58,
    "nama": "Kepala sekolah/madrasah memenuhi persyaratan sesuai dengan ketentuan yang berlaku.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Berstatus sebagai guru, memiliki SK sebagai kepala sekolah/madrasah, mempunyai pengalaman minimal 5 tahun sebagai guru, dan memiliki sertifikat pendidik" },
      { "id": 2, "nilai" : 3, "nama" : "Berstatus sebagai guru, memiliki SK sebagai kepala sekolah/madrasah, mempunyai pengalaman minimal 5 tahun sebagai guru,  tetapi tidak memiliki sertifikat pendidik" },
      { "id": 3, "nilai" : 2, "nama" : "Berstatus sebagai guru, memiliki SK kepala sekolah/madrasah, dan mempunyai pengalaman antara 3 _ 4 tahun sebagai guru" },
      { "id": 4, "nilai" : 1, "nama" : "Berstatus sebagai guru, memiliki SK kepala sekolah/madrasah, dan mempunyai pengalaman antara 1 _ 2 tahun sebagai guru" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak berstatus sebagai guru tetapi memiliki SK kepala sekolah/madrasah" }
    ],
    "jawaban": 4
  },
  {
    "id": 5369,
    "bagian_id": 305,
    "nomor": 59,
    "nama": "Kepala sekolah/madrasah memiliki pengalaman mengajar sekurang- kurangnya 5 tahun   pada waktu diangkat sebagai kepala sekolah/madrasah.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki pengalaman mengajar 5 tahun atau lebih" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki pengalaman mengajar 3-4 tahun" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki pengalaman mengajar 2-3 tahun" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki pengalaman mengajar 1-2 tahun" },
      { "id": 5, "nilai" : 0, "nama" : "Memiliki pengalaman mengajar kurang dari 1 tahun" }
    ],
    "jawaban": 4
  },
  {
    "id": 5370,
    "bagian_id": 305,
    "nomor": 60,
    "nama": "Kepala sekolah/madrasah memiliki kemampuan manajerial yang ditunjukkan dengan kemajuan/keberhasilan dalam mengelola: (1) kesiswaan, (2) guru dan tenaga kependidikan, (3) pengembangan kurikulum, (4) sarana dan prasarana, (5) pembiayaan, dan (6) hubungan masyarakat.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Menunjukkan pencapaian kemajuan pada 6 aspek atau lebih" },
      { "id": 2, "nilai" : 3, "nama" : "Menunjukkan pencapaian kemajuan pada 4 _ 5 aspek" },
      { "id": 3, "nilai" : 2, "nama" : "Menunjukkan pencapaian kemajuan pada 2 _ 3 aspek" },
      { "id": 4, "nilai" : 1, "nama" : "Menunjukkan pencapaian kemajuan pada 1 aspek" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak menunjukkan pencapaian kemajuan" }
    ],
    "jawaban": 4
  },
  {
    "id": 5371,
    "bagian_id": 305,
    "nomor": 61,
    "nama": "Kepala sekolah/madrasah memiliki kemampuan kewirausahaan yang ditunjukkan dengan adanya kegiatan kewirausahaan sebagai sumber belajar siswa seperti: (1) koperasi siswa, (2) peternakan/perikanan, (3) pertanian/perkebunan, (4) kantin sekolah, (5) unit produksi dan lain-lain.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki 4 atau lebih jenis usaha" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki 3 jenis usaha" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki 2 jenis usaha" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki 1 jenis usaha" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki usaha" }
    ],
    "jawaban": 4
  },
  {
    "id": 5372,
    "bagian_id": 305,
    "nomor": 62,
    "nama": "Kepala sekolah/madrasah melakukan supervisi dan monitoring setiap tahun.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sebanyak 91%-100% guru telah disupervisi dan dimonitor oleh kepala sekolah/madrasah" },
      { "id": 2, "nilai" : 3, "nama" : "Sebanyak 81%-90% guru telah disupervisi dan dimonitor oleh kepala sekolah/madrasah" },
      { "id": 3, "nilai" : 2, "nama" : "Sebanyak 71%-80% guru telah disupervisi dan dimonitor oleh kepala sekolah/madrasah" },
      { "id": 4, "nilai" : 1, "nama" : "Sebanyak 61%-70% guru telah disupervisi dan dimonitor oleh kepala sekolah/madrasah" },
      { "id": 5, "nilai" : 0, "nama" : "Sebanyak kurang dari 61% guru telah disupervisi dan dimonitor oleh kepala sekolah/madrasah" }
    ],
    "jawaban": 4
  },
  {
    "id": 5373,
    "bagian_id": 305,
    "nomor": 63,
    "nama": "Kepala Tenaga Administrasi memiliki kualifikasi akademik  minimal D-III.",
    "bobot": 2,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki kualifikasi akademik  pendidikan  minimal D-III dari lembaga pendidikan yang terakreditasi" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki kualifikasi akademik  pendidikan  D-II dari lembaga pendidikan yang terakreditasi" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki kualifikasi akademik  pendidikan  D-I dari lembaga pendidikan yang terakreditasi" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki kualifikasi akademik  Pendidikan Menengah" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki kualifikasi akademik atau  memiliki kualifikasi akademik di bawah Pendidikan Menengah atau tidak memilikiKepala Tenaga Administrasi" }
    ],
    "jawaban": 4
  },
  {
    "id": 5374,
    "bagian_id": 305,
    "nomor": 64,
    "nama": "Kepala tenaga administrasi pada  waktu diangkat memenuhi masa kerja minimal empat tahun sebagai tenaga administrasi.",
    "bobot": 2,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Lebih dari 4 tahun" },
      { "id": 2, "nilai" : 3, "nama" : "4 tahun" },
      { "id": 3, "nilai" : 2, "nama" : "3 tahun" },
      { "id": 4, "nilai" : 1, "nama" : "2 tahun" },
      { "id": 5, "nilai" : 0, "nama" : "1 tahun" }
    ],
    "jawaban": 4
  },
  {
    "id": 5375,
    "bagian_id": 305,
    "nomor": 65,
    "nama": "Tenaga administrasi memiliki kualifikasi akademik pendidikan menengah atau yang sederajat.",
    "bobot": 2,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sekolah/Madrasah memiliki 5 orang atau lebih tenaga administrasi berkualifikasi pendidikan menengah atau sederajat" },
      { "id": 2, "nilai" : 3, "nama" : "Sekolah/Madrasah memiliki 4 orang tenaga administrasi berkualifikasi pendidikan menengah atau sederajat" },
      { "id": 3, "nilai" : 2, "nama" : "Sekolah/Madrasah memiliki 3 orang tenaga administrasi berkualifikasi pendidikan menengah atau sederajat" },
      { "id": 4, "nilai" : 1, "nama" : "Sekolah/Madrasah memiliki 2 atau 1 orang tenaga administrasi berkualifikasi pendidikan menengah atau sederajat" },
      { "id": 5, "nilai" : 0, "nama" : "Sekolah/Madrasah tidak memiliki tenaga administrasi berkualifikasi pendidikan menengah atau sederajat" }
    ],
    "jawaban": 4
  },
  {
    "id": 5376,
    "bagian_id": 305,
    "nomor": 66,
    "nama": "Tenaga administrasi memiliki latar belakang pendidikan yang sesuai dengan bidang tugasnya.",
    "bobot": 2,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sekolah/Madrasah memiliki 5 orang atau lebih tenaga administrasi dengan latar belakang pendidikan sesuai dengan tugasnya " },
      { "id": 2, "nilai" : 3, "nama" : "Sekolah/Madrasah memiliki 4 orang tenaga administrasi dengan latar belakang pendidikan sesuai dengan tugasnya" },
      { "id": 3, "nilai" : 2, "nama" : "Sekolah/Madrasah memiliki 3 orang tenaga administrasi dengan latar belakang pendidikan sesuai dengan tugasnya" },
      { "id": 4, "nilai" : 1, "nama" : "Sekolah/Madrasah memiliki 2 atau 1 orang tenaga administrasi dengan latar belakang pendidikan sesuai dengan tugasnya" },
      { "id": 5, "nilai" : 0, "nama" : "Sekolah/Madrasah tidak memiliki tenaga administrasi dengan latar belakang pendidikan sesuai dengan tugasnya" }
    ],
    "jawaban": 4
  },
  {
    "id": 5377,
    "bagian_id": 305,
    "nomor": 67,
    "nama": "Kepala perpustakaan memiliki kualifikasi akademik minimal D-IV atau S1 dari jalur pendidikan atau  minimal (D-II) Ilmu Perpustakaan dan Informasi.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki kualifikasi akademik  minimal D-IV atau S1 dan mempunyai sertifikat kompetensi pengelolaan perpustakaan atau minimal (D-II) Ilmu Perpustakaan dan Informasi" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki kualifikasi akademik  dibawah D-IV  atau S1 dan mempunyai sertifikat kompetensi pengelolaan perpustakaan" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki kualifikasi akademik  D-IV atau S1, tidak mempunyai sertifikat kompetensi pengelolaan perpustakaan" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki kualifikasi akademik  dibawah D-IV  dan tidak mempunyai sertifikat kompetensi pengelolaan perpustakaan" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki kualifikasi akademik yang dipersyaratkan atau tidak memiliki Kepala Perpustakaan" }
    ],
    "jawaban": 4
  },
  {
    "id": 5378,
    "bagian_id": 305,
    "nomor": 68,
    "nama": "Kepala perpustakaan pada waktu diangkat memenuhi masa kerja minimal tiga tahun dari jalur pendidik atau empat tahun dari jalur tenaga kependidikan.",
    "bobot": 2,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melebihi masa kerja minimal" },
      { "id": 2, "nilai" : 3, "nama" : "Memenuhi masa  kerja minimal" },
      { "id": 3, "nilai" : 2, "nama" : "Kurang 1 tahun  dari masa kerja minimal" },
      { "id": 4, "nilai" : 1, "nama" : "Kurang 2 tahun  dari masa kerja minimal" },
      { "id": 5, "nilai" : 0, "nama" : "Kurang 3 tahun  dari masa kerja minimal" }
    ],
    "jawaban": 4
  },
  {
    "id": 5379,
    "bagian_id": 305,
    "nomor": 69,
    "nama": "Tenaga perpustakaan memiliki latar belakang pendidikan yang sesuai dengan tugasnya.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Tenaga perpustakaan memiliki latar belakang pendidikan minimal pendidikan menengah dan bersertifikat kompetensi pengelolaan perpustakaan" },
      { "id": 2, "nilai" : 3, "nama" : "Tenaga perpustakaan memiliki latar belakang pendidikan minimal pendidikan menengah dan tidak memiliki sertifikat kompetensi pengelolaan perpustakaan" },
      { "id": 3, "nilai" : 2, "nama" : "Tenaga perpustakaan memiliki latar belakang pendidikan di bawah pendidikan menengah dan bersertifikat kompetensi pengelolaan perpustakaan" },
      { "id": 4, "nilai" : 1, "nama" : "Tenaga perpustakaan memiliki latar belakang pendidikan di bawah pendidikan menengah dan tidak memiliki sertifikat kompetensi pengelolaan perpustakaan" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki tenaga perpustakaan" }
    ],
    "jawaban": 4
  },
  {
    "id": 5380,
    "bagian_id": 305,
    "nomor": 70,
    "nama": "Kepala laboratorium memiliki kualifikasi akademik minimal D-IV atau S1  dari jalur guru atau minimal (D-III) dari jalur laboran/teknisi.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Guru berpendidikan S1/D-IV atau  laboran/teknisi berpendidikan D-III dan pernah  mengikuti pelatihan tentang pengelolaan laboratorium" },
      { "id": 2, "nilai" : 3, "nama" : "Guru berpendidikan S1/D-IV atau  laboran/teknisi berpendidikan D-III dan belum pernah  mengikuti pelatihan tentang pengelolaan laboratorium" },
      { "id": 3, "nilai" : 2, "nama" : "Guru berpendidikan D-III atau laboran/teknisi berpendidikan D- II dan pernah mengikuti pelatihan tentang  pengelolaan laboratorium" },
      { "id": 4, "nilai" : 1, "nama" : "Guru berpendidikan D-III atau laboran/teknisi berpendidikan D- II dan belum pernah  mengikuti pelatihan tentang pengelolaan laboratorium" },
      { "id": 5, "nilai" : 0, "nama" : "Guru berpendidikan di bawah D-III atau laboran/teknisi berpendidikan di bawah D-II" }
    ],
    "jawaban": 4
  },
  {
    "id": 5381,
    "bagian_id": 305,
    "nomor": 71,
    "nama": "Kepala laboratorium pada waktu diangkat memenuhi masa kerja minimal tiga tahun dari jalur guru dan lima tahun dari jalur laboran.",
    "bobot": 2,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melebihi masa kerja minimal" },
      { "id": 2, "nilai" : 3, "nama" : "Memenuhi masa  kerja minimal" },
      { "id": 3, "nilai" : 2, "nama" : "Kurang 1 tahun  dari masa kerja minimal" },
      { "id": 4, "nilai" : 1, "nama" : "Kurang 2 tahun  dari masa kerja minimal" },
      { "id": 5, "nilai" : 0, "nama" : "Kurang 3 tahun  dari masa kerja minimal" }
    ],
    "jawaban": 4
  },
  {
    "id": 5382,
    "bagian_id": 305,
    "nomor": 72,
    "nama": "Kepala laboratorium memiliki kompetensi : (1) Kepribadian, (2) social, (3) manajerial, dan (4) profesional",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memenuhi 4 kriteria kompetensi" },
      { "id": 2, "nilai" : 3, "nama" : "Memenuhi 3 kriteria kompetensi" },
      { "id": 3, "nilai" : 2, "nama" : "Memenuhi 2 kriteria kompetensi" },
      { "id": 4, "nilai" : 1, "nama" : "Memenuhi 1 kriteria kompetensi" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memenuhi criteria kompetensi" }
    ],
    "jawaban": 4
  },
  {
    "id": 5383,
    "bagian_id": 305,
    "nomor": 73,
    "nama": "Teknisi laboratorium memiliki kualifikasi akademik  minimal D-II yang relevan dengan peralatan laboratorium.",
    "bobot": 2,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki kualifikasi akademik  minimal D-II" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki kualifikasi akademik  D-I" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki kualifikasi akademik  pendidikan  menengah" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki kualifikasi akademik  pendidikan  dasar" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki kualifikasi akademik atau  tidak memiliki teknisi laboratorium" }
    ],
    "jawaban": 4
  },
  {
    "id": 5384,
    "bagian_id": 305,
    "nomor": 74,
    "nama": "Laboran memiliki kualifikasi akademik minimal D-I.",
    "bobot": 2,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki kualifikasi akademik  minimal D-I" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki kualifikasi akademik  pendidikan  menengah" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki kualifikasi akademik  SMP/MTs/Paket B" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki kualifikasi akademik  SD/MI/Paket A" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki kualifikasi akademik atau  tidak memiliki laboran" }
    ],
    "jawaban": 4
  },
  {
    "id": 5385,
    "bagian_id": 305,
    "nomor": 75,
    "nama": "Sekolah/Madrasah  memiliki  petugas  layanan   khusus:    (1)  penjaga sekolah/madrasah;   (2)  tukang   kebun;   (3)   tenaga  kebersihan;   (4) pengemudi; dan (5) pesuruh.",
    "bobot": 2,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki 4 jenis atau  lebih petugas layanan khusus" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki 3 jenis petugas layanan khusus" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki 2 jenis petugas layanan khusus" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki 1 jenis petugas layanan khusus" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki petugas layanan khusus" }
    ],
    "jawaban": 4
  },
  {
    "id": 5386,
    "bagian_id": 306,
    "nomor": 76,
    "nama": "Sekolah/madrasah memiliki luas lahan sesuai ketentuan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "memiliki luas lahan sesuai ketentuan" },
      { "id": 2, "nilai" : 3, "nama" : "memiliki lahan seluas 90%_  99%  dari ketentuan" },
      { "id": 3, "nilai" : 2, "nama" : "memiliki lahan seluas 80%-89% dari ketentuan" },
      { "id": 4, "nilai" : 1, "nama" : "memiliki lahan seluas 70%-79% dari ketentuan" },
      { "id": 5, "nilai" : 0, "nama" : "memiliki lahan seluas kurang dari 70% dari ketentuan" }
    ],
    "jawaban": 4
  },
  {
    "id": 5387,
    "bagian_id": 306,
    "nomor": 77,
    "nama": "Sekolah/madrasah berada  di lokasi yang aman, terhindar dari potensi bahaya yang mengancam kesehatan dan keselamatan jiwa, serta memiliki akses untuk penyelamatan dalam keadaan darurat.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Berada di lokasi aman,  terhindar dari potensi bahaya yang mengancam kesehatan dan keselamatan jiwa, serta memiliki akses untuk penyelamatan  dalam  keadaan darurat" },
      { "id": 2, "nilai" : 3, "nama" : "Berada di lokasi aman,  terhindar dari potensi bahaya yang mengancam kesehatan dan keselamatan jiwa" },
      { "id": 3, "nilai" : 2, "nama" : "Berada di lokasi aman,  terhindar dari potensi bahaya yang mengancam keselamatan jiwa" },
      { "id": 4, "nilai" : 1, "nama" : "Berada di lokasi aman,  terhindar dari potensi bahaya yang mengancam kesehatan" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak berada  di lokasi aman" }
    ],
    "jawaban": 4
  },
  {
    "id": 5388,
    "bagian_id": 306,
    "nomor": 78,
    "nama": "Sekolah/madrasah berada  di lokasi yang nyaman, terhindar dari gangguan pencemaran air, pencemaran udara,  dan kebisingan serta memiliki sarana untuk meningkatkan kenyamanan",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Berada di lokasi yang nyaman, terhindar dari gangguan pencemaran air, pencemaran udara, dan kebisingan serta memiliki sarana untuk meningkatkan kenyamanan" },
      { "id": 2, "nilai" : 3, "nama" : "Berada di lokasi yang nyaman, terhindar dari gangguan pencemaran air, pencemaran udara, dan kebisingan" },
      { "id": 3, "nilai" : 2, "nama" : "Berada di lokasi yang nyaman, terhindar dari gangguan pencemaran air  dan kebisingan" },
      { "id": 4, "nilai" : 1, "nama" : "Berada di lokasi yang nyaman, terhindar dari gangguan pencemaran air" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak berada  di lokasi yang nyaman" }
    ],
    "jawaban": 4
  },
  {
    "id": 5389,
    "bagian_id": 306,
    "nomor": 79,
    "nama": "Sekolah/Madrasah berada di lokasi yang sesuai dengan peruntukannya, memiliki status hak atas tanah dan ijin  pemanfaatan dari pemegang hak atas tanah.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Berada di lokasi yang sesuai dengan peruntukannya, memiliki status hak atas tanah dan ijin  pemanfaatan dari pemegang hak atas tanah" },
      { "id": 2, "nilai" : 3, "nama" : "Berada di lokasi yang sesuai dengan peruntukannya dan memiliki status hak atas tanah tetapi tidak memiliki ijin pemanfaatan dari pemegang hak atas tanah" },
      { "id": 3, "nilai" : 2, "nama" : "Berada di lokasi yang sesuai dengan peruntukannya, tetapi tidak memiliki status hak atas tanah dan tidak memiliki ijin pemanfaatan dari pemegang hak atas tanah" },
      { "id": 4, "nilai" : 1, "nama" : "Tidak berada  di lokasi yang sesuai dengan peruntukannya, tetapi memiliki status hak atas tanah dan memiliki ijin pemanfaatan dari pemegang hak atas tanah" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak berada  di lokasi yang sesuai dengan peruntukannya" }
    ],
    "jawaban": 4
  },
  {
    "id": 5390,
    "bagian_id": 306,
    "nomor": 80,
    "nama": "Sekolah/madrasah memiliki lantai bangunan dengan luas sesuai ketentuan minimal.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Luas lantai bangunan sesuai ketentuan" },
      { "id": 2, "nilai" : 3, "nama" : "Luas lantai bangunan seluas 90%-99% dari ketentuan" },
      { "id": 3, "nilai" : 2, "nama" : "Luas lantai bangunan seluas 80%-89% dari ketentuan" },
      { "id": 4, "nilai" : 1, "nama" : "Luas lantai bangunan seluas 70%-79% dari ketentuan" },
      { "id": 5, "nilai" : 0, "nama" : "Luas lantai bangunan kurang dari 70% dari ketentuan" }
    ],
    "jawaban": 4
  },
  {
    "id": 5391,
    "bagian_id": 306,
    "nomor": 81,
    "nama": "Bangunan sekolah/madrasah memiliki struktur yang stabil dan kokoh serta dilengkapi dengan  sistem pencegahan bahaya kebakaran dan petir.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki struktur yang stabil dan kokoh serta dilengkapi dengan sistem pencegahan bahaya kebakaran dan petir" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki struktur yang stabil dan kokoh tetapi tidak dilengkapi dengan sistem pencegahan bahaya kebakaran" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki struktur yang stabil tetapi kurang kokoh dan tidak dilengkapi dengan  sistem pencegahan bahaya kebakaran" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki struktur yang tidak stabil dan kurang kokoh tetapi dilengkapi dengan  sistem pencegahan bahaya kebakaran" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki struktur yang stabil dan kokoh serta tidak dilengkapi dengan  sistem pencegahan bahaya kebakaran dan petir" }
    ],
    "jawaban": 4
  },
  {
    "id": 5392,
    "bagian_id": 306,
    "nomor": 82,
    "nama": "Bangunan sekolah/madrasah memiliki sanitasi sebagai persyaratan kesehatan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki 4 atau lebih jenis sanitasi sebagai persyaratan kesehatan" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki 3 jenis sanitasi sebagai persyaratan kesehatan" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki 2 jenis sanitasi sebagai persyaratan kesehatan" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki 1 jenis sanitasi sebagai persyaratan kesehatan" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki sanitasi sebagai persyaratan kesehatan" }
    ],
    "jawaban": 4
  },
  {
    "id": 5393,
    "bagian_id": 306,
    "nomor": 83,
    "nama": "Bangunan sekolah/madrasah memiliki ventilasi udara dan pencahayaan yang memadai.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki ventilasi udara dan pencahayaan memadai" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki ventilasi udara memadai tetapi pencahayaan kurang memadai" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki ventilasi udara kurang memadai tetapi pencahayaan memadai" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki ventilasi udara dan pencahayaan kurang memadai" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki ventilasi udara dan pencahayaan" }
    ],
    "jawaban": 4
  },
  {
    "id": 5394,
    "bagian_id": 306,
    "nomor": 84,
    "nama": "Bangunan sekolah/madrasah memiliki instalasi listrik atau  sumber  daya lain",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki instalasi listrik  dengan daya  1300 watt atau lebih" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki instalasi listrik  dengan daya 900 watt" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki instalasi listrik  dengan daya 450 watt" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki instalasi listrik  dengan memanfaatkan sumber daya lain yang digunakan secara bersama" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki instalasi listrik  dan tidak menggunakan sumber daya lain" }
    ],
    "jawaban": 4
  },
  {
    "id": 5395,
    "bagian_id": 306,
    "nomor": 85,
    "nama": "Sekolah/Madrasah memiliki izin mendirikan bangunan dan izin penggunaan bangunan sesuai dengan peruntukannya.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki izin mendirikan  bangunan dan izin penggunaan bangunan sesuai dengan peruntukannya sebelum bangunan berdiri" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki izin mendirikan  bangunan, dan memiliki izin penggunaan bangunan sesuai dengan peruntukannya setelah bangunan berdiri" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki izin mendirikan dan memiliki izin penggunaan bangunan sementara" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki izin mendirikan  tetapi tidak memiliki izin penggunaan bangunan" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki izin mendirikan bangunan dan izin penggunaan bangunan" }
    ],
    "jawaban": 4
  },
  {
    "id": 5396,
    "bagian_id": 306,
    "nomor": 86,
    "nama": "Sekolah/Madrasah melakukan pemeliharaan terhadap bangunan secara berkala",
    "bobot": 2,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melakukan pemeliharaan ringan dan berat terhadap bangunan secara berkala sesuai ketentuan" },
      { "id": 2, "nilai" : 3, "nama" : "Melakukan pemeliharaan ringan dan berat terhadap bangunan, tetapi melebihi waktu yang sesuai  ketentuan" },
      { "id": 3, "nilai" : 2, "nama" : "Melakukan pemeliharaan ringan tetapi melebihi waktu yang sesuai ketentuan, dan tidak pernah melakukan pemeliharaan berat" },
      { "id": 4, "nilai" : 1, "nama" : "Melakukan pemeliharaan terhadap bangunan, jika sudah ada bagian bangunan yang rusak berat" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak pernah  melakukan pemeliharaan" }
    ],
    "jawaban": 4
  },
  {
    "id": 5397,
    "bagian_id": 306,
    "nomor": 87,
    "nama": "Sekolah/Madrasah memiliki prasarana yang lengkap.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki 14 atau  lebih jenis prasarana yang dipersyaratkan" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki 10-13 jenis prasarana yang dipersyaratkan" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki 5-9 jenis  prasarana  yang dipersyaratkan" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki 1-4 jenis  prasarana  yang dipersyaratkan" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki prasarana sendiri" }
    ],
    "jawaban": 4
  },
  {
    "id": 5398,
    "bagian_id": 306,
    "nomor": 88,
    "nama": "Sekolah/Madrasah memiliki ruang  kelas dengan jumlah, ukuran, dan sarana sesuai ketentuan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki ruang kelas dengan jumlah, ukuran, dan sarana sesuai ketentuan" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki ruang kelas dengan 2 unsur di atas sesuai ketentuan" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki ruang kelas dengan 1 unsur di atas sesuai ketentuan" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki ruang kelas dengan 3 unsur di atas tidak sesuai ketentuan" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki ruang  kelas" }
    ],
    "jawaban": 4
  },
  {
    "id": 5399,
    "bagian_id": 306,
    "nomor": 89,
    "nama": "Sekolah/Madrasah memiliki ruang  perpustakaan dengan luas dan sarana sesuai ketentuan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki ruang perpustakaan dengan luas dan sarana sesuai dengan ketentuan" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki ruang perpustakaan dengan luas tidak sesuai ketentuan tetapi memiliki sarana sesuai ketentuan" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki ruang perpustakaan dengan luas sesuai ketentuan tetapi memiliki sarana tidak sesuai ketentuan" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki ruang perpustakaan dengan luas dan sarana tidak sesuai ketentuan" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki ruang  perpustakaan" }
    ],
    "jawaban": 4
  },
  {
    "id": 5400,
    "bagian_id": 306,
    "nomor": 90,
    "nama": "Sekolah/Madrasah memiliki buku teks pelajaran yang telah ditetapkan dengan Permendiknas.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki buku teks pelajaran dengan rasio 1 buku teks/mata pelajaran/siswa" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki buku teks pelajaran dengan rasio 1 buku teks/mata pelajaran untuk 2-5 siswa" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki buku teks pelajaran dengan rasio 1 buku teks/mata pelajaran untuk 6-10 siswa" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki buku teks pelajaran dengan rasio 1 buku teks/mata pelajaran untuk 11 atau  lebih siswa" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki buku teks" }
    ],
    "jawaban": 4
  },
  {
    "id": 5401,
    "bagian_id": 306,
    "nomor": 91,
    "nama": "Sekolah/Madrasah memanfaatkan buku teks pelajaran yang telah ditetapkan dengan Permendiknas.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sebanyak 10 atau  lebih mata  pelajaran menggunakan buku teks pelajaran yang telah ditetapkan dengan Permendiknas" },
      { "id": 2, "nilai" : 3, "nama" : "Sebanyak 7-9 mata pelajaran menggunakan buku teks pelajaran yang telah ditetapkan dengan Permendiknas" },
      { "id": 3, "nilai" : 2, "nama" : "Sebanyak 4-6 mata pelajaran menggunakan buku teks pelajaran yang telah ditetapkan dengan Permendiknas" },
      { "id": 4, "nilai" : 1, "nama" : "Sebanyak 1-3 mata pelajaran menggunakan buku teks pelajaran yang telah ditetapkan dengan Permendiknas" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak ada mata pelajaran menggunakan buku teks mata pelajaran yang telah ditetapkan dengan Permendiknas" }
    ],
    "jawaban": 4
  },
  {
    "id": 5402,
    "bagian_id": 306,
    "nomor": 92,
    "nama": "Sekolah/Madrasah memiliki ruang  laboratorium IPA yang dapat menampung minimum satu rombongan belajar dengan luas dan sarana sesuai ketentuan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki ruang  laboratorium IPA, yang dapat menampung minimum satu rombongan belajar, dengan luas dan sarana sesuai ketentuan" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki ruang  laboratorium IPA, yang dapat menampung minimum satu rombongan belajar, dengan luas tidak sesuai ketentuan tetapi memiliki sarana sesuai ketentuan" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki ruang  laboratorium IPA, yang dapat menampung minimum satu rombongan belajar, dengan luas sesuai ketentuan tetapi memiliki sarana tidak sesuai ketentuan" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki ruang  laboratorium IPA, yang tidak dapat menampung minimum satu rombongan belajar, dengan luas dan sarana tidak sesuai ketentuan" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki ruang  laboratorium IPA" }
    ],
    "jawaban": 4
  },
  {
    "id": 5403,
    "bagian_id": 306,
    "nomor": 93,
    "nama": "Sekolah/Madrasah memiliki ruang  pimpinan dengan  luas dan sarana sesuai ketentuan.",
    "bobot": 2,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki ruang pimpinan dengan luas dan sarana sesuai ketentuan" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki ruang pimpinan dengan luas tidak sesuai ketentuan tetapi memiliki sarana sesuai ketentuan" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki ruang pimpinan dengan luas sesuai ketentuan tetapi memiliki sarana tidak sesuai ketentuan" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki ruang pimpinan dengan luas dan sarana tidak sesuai ketentuan" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki ruang  pimpinan" }
    ],
    "jawaban": 4
  },
  {
    "id": 5404,
    "bagian_id": 306,
    "nomor": 94,
    "nama": "Sekolah/Madrasah memiliki ruang  guru dengan luas dan sarana sesuai ketentuan",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki ruang guru dengan luas dan sarana sesuai ketentuan" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki ruang guru dengan luas tidak sesuai ketentuan tetapi memiliki sarana sesuai ketentuan" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki ruang guru dengan luas sesuai ketentuan tetapi memiliki sarana tidak sesuai ketentuan" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki ruang guru dengan luas dan sarana tidak sesuai ketentuan" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki ruang guru" }
    ],
    "jawaban": 4
  },
  {
    "id": 5406,
    "bagian_id": 306,
    "nomor": 96,
    "nama": "Sekolah/Madrasah memiliki tempat beribadah  bagi warga sekolah/madrasah dengan luas dan perlengkapan sesuai ketentuan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki tempat beribadah dengan luas dan perlengkapan sesuai ketentuan" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki tempat beribadah dengan luas tidak sesuai ketentuan tetapi memiliki perlengkapan sesuai  ketentuan" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki tempat beribadah dengan luas sesuai ketentuan tetapi memiliki perlengkapan tidak sesuai ketentuan" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki tempat beribadah dengan luas dan perlengkapan tidak sesuai ketentuan" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki tempat beribadah" }
    ],
    "jawaban": 4
  },
  {
    "id": 5407,
    "bagian_id": 306,
    "nomor": 97,
    "nama": "Sekolah/Madrasah memiliki ruang  konseling dengan luas dan sarana sesuai ketentuan.",
    "bobot": 2,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki ruang konseling dengan luas dan sarana sesuai ketentuan" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki ruang konseling dengan luas tidak sesuai ketentuan tetapi memiliki sarana sesuai ketentuan" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki ruang konseling dengan luas sesuai ketentuan tetapi memiliki sarana tidak sesuai ketentuan" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki ruang konseling dengan luas dan sarana tidak sesuai ketentuan" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki ruang  konseling" }
    ],
    "jawaban": 4
  },
  {
    "id": 5408,
    "bagian_id": 306,
    "nomor": 98,
    "nama": "Sekolah/Madrasah memiliki ruang  UKS/M  dengan dengan luas dan sarana sesuai ketentuan.",
    "bobot": 2,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki ruang UKS/M  dengan luas dan sarana sesuai ketentuan" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki ruang UKS/M  dengan luas tidak sesuai ketentuan tetapi memiliki sarana sesuai ketentuan" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki ruang UKS/M  dengan luas sesuai ketentuan tetapi memiliki sarana tidak sesuai ketentuan" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki ruang UKS/M  dengan luas dan sarana tidak sesuai ketentuan" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki ruang  UKS/M" }
    ],
    "jawaban": 4
  },
  {
    "id": 5409,
    "bagian_id": 306,
    "nomor": 99,
    "nama": "Sekolah/Madrasah memiliki ruang  organisasi kesiswaan dengan luas dan sarana sesuai ketentuan.",
    "bobot": 2,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki ruang organisasi kesiswaan dengan luas dan sarana sesuai ketentuan" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki ruang organisasi kesiswaan dengan luas tidak sesuai ketentuan tetapi memiliki sarana sesuai ketentuan" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki ruang organisasi kesiswaan dengan luas sesuai ketentuan tetapi memiliki sarana tidak sesuai ketentuan" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki ruang organisasi kesiswaan dengan luas dan sarana tidak sesuai ketentuan" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki ruang  organisasi kesiswaan" }
    ],
    "jawaban": 4
  },
  {
    "id": 5410,
    "bagian_id": 306,
    "nomor": 100,
    "nama": "Sekolah/Madrasah memiliki jamban dengan jumlah, ukuran, dan sarana sesuai ketentuan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki jamban dengan jumlah, ukuran, dan sarana sesuai ketentuan" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki jamban dengan jumlah dan  ukuran tidak sesuai ketentuan tetapi memiliki sarana sesuai dengan ketentuan" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki jamban dengan jumlah dan  ukuran sesuai ketentuan tetapi memiliki sarana tidak sesuai ketentuan" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki jamban dengan jumlah, ukuran, dan sarana tidak sesuai ketentuan" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki jamban" }
    ],
    "jawaban": 4
  },
  {
    "id": 5411,
    "bagian_id": 306,
    "nomor": 101,
    "nama": "Sekolah/Madrasah memiliki gudang dengan luas dan sarana sesuai ketentuan.",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki gudang dengan luas dan sarana sesuai ketentuan" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki gudang dengan luas tidak sesuai ketentuan tetapi memiliki sarana sesuai ketentuan" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki gudang dengan luas sesuai  ketentuan tetapi memiliki sarana tidak sesuai ketentuan" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki gudang dengan luas dan sarana tidak sesuai ketentuan" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki gudang" }
    ],
    "jawaban": 4
  },
  {
    "id": 5412,
    "bagian_id": 306,
    "nomor": 102,
    "nama": "Sekolah/Madrasah memiliki ruang  sirkulasi dengan luas dan kualitas sesuai ketentuan.",
    "bobot": 2,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki ruang sirkulasi dengan luas dan kualitas sesuai ketentuan" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki ruang sirkulasi dengan luas tidak sesuai ketentuan tetapi memiliki kualitas sesuai ketentuan" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki ruang sirkulasi dengan luas sesuai ketentuan tetapi memiliki kualitas tidak sesuai ketentuan" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki ruang sirkulasi dengan luas dan kualitas tidak sesuai ketentuan" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki ruang  sirkulasi" }
    ],
    "jawaban": 4
  },
  {
    "id": 5413,
    "bagian_id": 306,
    "nomor": 103,
    "nama": "Sekolah/Madrasah memiliki tempat bermain/berolahraga dengan luas dan sarana sesuai ketentuan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki tempat bermain/berolahraga dengan luas dan sarana sesuai ketentuan" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki tempat bermain/berolahraga dengan luas tidak sesuai ketentuan tetapi memiliki sarana sesuai ketentuan" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki tempat bermain/berolahraga dengan luas sesuai ketentuan tetapi memiliki sarana tidak sesuai ketentuan" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki tempat bermain/berolahraga dengan luas dan sarana tidak sesuai ketentuan" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki tempat bermain/berolahraga" }
    ],
    "jawaban": 4
  },
  {
    "id": 5414,
    "bagian_id": 307,
    "nomor": 104,
    "nama": "Sekolah/Madrasah telah merumuskan, menetapkan, dan mensosialisasikan visi  lembaga.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Merumuskan dan menetapkan visi  bersama warga sekolah/madrasah, selaras dengan visi  institusi di atasnya, mudah dipahami dan disosialisasikan" },
      { "id": 2, "nilai" : 3, "nama" : "Merumuskan dan menetapkan visi  bersama warga sekolah/madrasah, selaras dengan visi  institusi di atasnya, mudah dipahami tetapi tidak disosialisasikan" },
      { "id": 3, "nilai" : 2, "nama" : "Merumuskan dan menetapkan visi  bersama warga sekolah/madrasah, tidak selaras dengan visi  institusi di atasnya mudah dipahami dan disosialisasikan" },
      { "id": 4, "nilai" : 1, "nama" : "Merumuskan dan menetapkan visi  bersama warga sekolah/madrasah, tidak selaras dengan visi  institusi di atasnya mudah dipahami  tetapi tidak disosialisasikan" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak merumuskan dan menetapkan visi" }
    ],
    "jawaban": 4
  },
  {
    "id": 5415,
    "bagian_id": 307,
    "nomor": 105,
    "nama": "Sekolah/Madrasah telah merumuskan dan menetapkan misi  lembaga yang sesuai dengan visi.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Merumuskan dan menetapkan misi bersama  warga sekolah/madrasah, sesuai dengan visi  dan sering disosialisasikan" },
      { "id": 2, "nilai" : 3, "nama" : "Merumuskan dan menetapkan misi bersama  warga sekolah/madrasah, sesuai dengan visi  dan pernah disosialisasikan" },
      { "id": 3, "nilai" : 2, "nama" : "Merumuskan dan menetapkan misi bersama  warga sekolah/madrasah, sesuai dengan visi  tetapi tidak disosialisasikan" },
      { "id": 4, "nilai" : 1, "nama" : "Merumuskan dan menetapkan misi bersama  warga sekolah/madrasah, tidak sesuai dengan visi  dan tidak disosialisasikan" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak merumuskan dan menetapkan misi" }
    ],
    "jawaban": 4
  },
  {
    "id": 5416,
    "bagian_id": 307,
    "nomor": 106,
    "nama": "Sekolah/Madrasah telah merumuskan dan menetapkan tujuan lembaga.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Merumuskan dan menetapkan tujuan, mudah  dipahami dan disosialisasikan" },
      { "id": 2, "nilai" : 3, "nama" : "Merumuskan dan menetapkan tujuan, mudah  dipahami tetapi tidak pernah disosialisasikan" },
      { "id": 3, "nilai" : 2, "nama" : "Merumuskan dan menetapkan tujuan, sulit dipahami dan disosialisasikan" },
      { "id": 4, "nilai" : 1, "nama" : "Merumuskan dan menetapkan tujuan, sulit dipahami dan tidak disosialisasikan" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak merumuskan dan menetapkan tujuan" }
    ],
    "jawaban": 4
  },
  {
    "id": 5417,
    "bagian_id": 307,
    "nomor": 107,
    "nama": "Sekolah/Madrasah memiliki rencana  kerja tahunan dan rencana kerja jangka menengah dan disosialisasikan kepada warga sekolah/ madrasah.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki rencana  kerja tahunan dan rencana kerja jangka menengah dan sudah disosialisasikan" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki rencana  kerja tahunan dan rencana kerja jangka menengah dan salah satunya sudah disosialisasikan" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki rencana  kerja tahunan dan rencana kerja jangka menengah tetapi belum disosialisasikan" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki rencana  kerja tahunan atau rencana kerja jangka menengah baik sudah maupun belum disosialisasikan" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki rencana  kerja tahunan dan rencana kerja jangka menengah" }
    ],
    "jawaban": 4
  },
  {
    "id": 5418,
    "bagian_id": 307,
    "nomor": 108,
    "nama": "Sekolah/Madrasah memiliki pedoman yang mengatur berbagai aspek pengelolaan secara tertulis yang mudah dipahami oleh pihak-pihak terkait.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki 7 atau lebih dokumen  aspek pengelolaan secara tertulis" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki 5 atau 6 dokumen aspek pengelolaan secara tertulis" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki 3 atau 4 dokumen aspek pengelolaan secara tertulis" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki 1 atau 2 dokumen aspek pengelolaan secara tertulis" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki dokumen  aspek pengelolaan secara tertulis" }
    ],
    "jawaban": 4
  },
  {
    "id": 5419,
    "bagian_id": 307,
    "nomor": 109,
    "nama": "Sekolah/Madrasah memiliki struktur organisasi dengan kejelasan uraian tugas.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki struktur organisasi yang dipajang di dinding dan disertai uraian tugas yang jelas" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki struktur organisasi dan disertai uraian tugas yang jelas" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki struktur organisasi dan disertai uraian tugas  tetapi tidak jelas" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki struktur organisasi tetapi tidak ada uraian tugas" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki struktur organisasi" }
    ],
    "jawaban": 4
  },
  {
    "id": 5420,
    "bagian_id": 307,
    "nomor": 110,
    "nama": "Sekolah/Madrasah melaksanakan  kegiatan  sesuai dengan  rencana kerja tahunan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sebanyak 91%-100% kegiatan dilaksanakan sesuai rencana kerja tahunan" },
      { "id": 2, "nilai" : 3, "nama" : "Sebanyak 81%-90% kegiatan dilaksanakan sesuai rencana kerja tahunan" },
      { "id": 3, "nilai" : 2, "nama" : "Sebanyak 71%-80% kegiatan dilaksanakan sesuai rencana kerja tahunan" },
      { "id": 4, "nilai" : 1, "nama" : "Sebanyak 61%-70% kegiatan dilaksanakan sesuai rencana kerja tahunan" },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 61% kegiatan dilaksanakan sesuai rencana kerja tahunan" }
    ],
    "jawaban": 4
  },
  {
    "id": 5421,
    "bagian_id": 307,
    "nomor": 111,
    "nama": "Sekolah/Madrasah melaksanakan pengelolaan kegiatan kesiswaan",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki 4 atau lebih jenis kegiatan kesiswaan" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki 3 jenis kegiatan kesiswaan" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki 2 jenis kegiatan kesiswaan" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki 1 jenis kegiatan kesiswaan" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki jenis kegiatan kesiswaan" }
    ],
    "jawaban": 4
  },
  {
    "id": 5422,
    "bagian_id": 307,
    "nomor": 112,
    "nama": "Sekolah/Madrasah melaksanakan kegiatan pengembangan kurikulum dan pembelajaran",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melaksanakan 4 atau lebih kegiatan pengembangan kurikulum dan pembelajaran" },
      { "id": 2, "nilai" : 3, "nama" : "Melaksanakan 3 kegiatan pengembangan kurikulum dan pembelajaran" },
      { "id": 3, "nilai" : 2, "nama" : "Melaksanakan 2 kegiatan pengembangan kurikulum dan pembelajaran" },
      { "id": 4, "nilai" : 1, "nama" : "Melaksanakan 1 kegiatan pengembangan kurikulum dan pembelajaran" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melaksanakan kegiatan pengembangan kurikulum dan pembelajaran" }
    ],
    "jawaban": 4
  },
  {
    "id": 5423,
    "bagian_id": 307,
    "nomor": 113,
    "nama": "Sekolah/Madrasah melaksanakan program  pengelolaan pendayagunaan pendidik dan tenaga kependidikan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melaksanakan 4 atau lebih program pengelolaan pendayagunaan pendidik dan tenaga kependidikan" },
      { "id": 2, "nilai" : 3, "nama" : "Melaksanakan 3 program pengelolaan pendayagunaan pendidik dan tenaga kependidikan" },
      { "id": 3, "nilai" : 2, "nama" : "Melaksanakan 2 program pengelolaan pendayagunaan pendidik dan tenaga kependidikan" },
      { "id": 4, "nilai" : 1, "nama" : "Melaksanakan 1 program pengelolaan pendayagunaan pendidik dan tenaga kependidikan" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melaksanakan program pengelolaan pendayagunaan pendidik dan tenaga kependidikan" }
    ],
    "jawaban": 4
  },
  {
    "id": 5424,
    "bagian_id": 307,
    "nomor": 114,
    "nama": "Sekolah/Madrasah mengelola sarana dan prasarana pembelajaran.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Mengelola 4 atau  lebih program sarana dan prasarana" },
      { "id": 2, "nilai" : 3, "nama" : "Mengelola 3 program sarana dan prasarana" },
      { "id": 3, "nilai" : 2, "nama" : "Mengelola 2 program sarana dan prasarana" },
      { "id": 4, "nilai" : 1, "nama" : "Mengelola 1 program sarana dan prasarana" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak mengelola  program sarana dan prasarana" }
    ],
    "jawaban": 4
  },
  {
    "id": 5425,
    "bagian_id": 307,
    "nomor": 115,
    "nama": "Sekolah/Madrasah mengelola pembiayaan pendidikan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki 4 program pengelolaan pembiayaan pendidikan" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki 3 program pengelolaan pembiayaan pendidikan" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki 2 program pengelolaan pembiayaan pendidikan" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki 1 program pengelolaan pembiayaan pendidikan" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki program pengelolaan pembiayaan pendidikan" }
    ],
    "jawaban": 4
  },
  {
    "id": 5426,
    "bagian_id": 307,
    "nomor": 116,
    "nama": "Sekolah/Madrasah melakukan kegiatan yang mengarah pada penciptaan suasana, iklim, dan lingkungan pembelajaran yang kondusif.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki 4 atau lebih kegiatan yang mengarah pada penciptaan suasana, iklim, dan lingkungan pembelajaran yang kondusif" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki 3 kegiatan  yang  mengarah pada penciptaan  suasana, iklim, dan lingkungan pembelajaran yang kondusif" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki 2 kegiatan  yang  mengarah pada penciptaan  suasana, iklim, dan lingkungan pembelajaran yang kondusif" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki 1 kegiatan  yang  mengarah pada penciptaan  suasana, iklim, dan lingkungan pembelajaran yang kondusif" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki kegiatan yang mengarah pada penciptaan suasana, iklim, dan lingkungan pembelajaran yang kondusif" }
    ],
    "jawaban": 4
  },
  {
    "id": 5427,
    "bagian_id": 307,
    "nomor": 117,
    "nama": "Sekolah/Madrasah melibatkan masyarakat dan membangun kemitraan dengan lembaga lain  yang relevan dalam pengelolaan pendidikan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki 4 atau lebih dokumen  kemitraan" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki 3 dokumen kemitraan" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki 2 dokumen kemitraan" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki 1 dokumen kemitraan" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki dokumen  kemitraan" }
    ],
    "jawaban": 4
  },
  {
    "id": 5428,
    "bagian_id": 307,
    "nomor": 118,
    "nama": "Sekolah/Madrasah melaksanakan program pengawasan yang disosiali- sasikan kepada  pendidik dan tenaga kependidikan.",
    "bobot": 2,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melaksanakan 4 atau 5 program pengawasan" },
      { "id": 2, "nilai" : 3, "nama" : "Melaksanakan 3 program pengawasan" },
      { "id": 3, "nilai" : 2, "nama" : "Melaksanakan 2 program pengawasan" },
      { "id": 4, "nilai" : 1, "nama" : "Melaksanakan 1 program pengawasan" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melaksanakan program pengawasan" }
    ],
    "jawaban": 4
  },
  {
    "id": 5429,
    "bagian_id": 307,
    "nomor": 119,
    "nama": "Sekolah/Madrasah melaksanakan kegiatan evaluasi diri.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melaksanakan evaluasi diri  sekurang-kurangnya sekali dalam 1 tahun" },
      { "id": 2, "nilai" : 3, "nama" : "Melaksanakan evaluasi diri  sekali dalam 2 tahun" },
      { "id": 3, "nilai" : 2, "nama" : "Melaksanakan evaluasi diri  sekali dalam 3 tahun" },
      { "id": 4, "nilai" : 1, "nama" : "Melaksanakan evaluasi diri  sekali dalam 4 tahun" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melaksanakan evaluasi diri" }
    ],
    "jawaban": 4
  },
  {
    "id": 5430,
    "bagian_id": 307,
    "nomor": 120,
    "nama": "Sekolah/Madrasah melaksanakan evaluasi kinerja pendidik dan tenaga kependidikan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melaksanakan 4 program evaluasi kinerja pendidik dan tenaga kependidikan" },
      { "id": 2, "nilai" : 3, "nama" : "Melaksanakan 3 program evaluasi kinerja pendidik dan tenaga kependidikan" },
      { "id": 3, "nilai" : 2, "nama" : "Melaksanakan 2 program evaluasi kinerja pendidik dan tenaga kependidikan" },
      { "id": 4, "nilai" : 1, "nama" : "Melaksanakan 1 program evaluasi kinerja pendidik dan tenaga kependidikan" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melakukan program evaluasi kinerja pendidik dan tenaga kependidikan" }
    ],
    "jawaban": 4
  },
  {
    "id": 5431,
    "bagian_id": 307,
    "nomor": 121,
    "nama": "Sekolah/Madrasah mempersiapkan unsur-unsur pelaksanaan akreditasi.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Mempersiapkan 4 unsur pelaksanaan akreditasi" },
      { "id": 2, "nilai" : 3, "nama" : "Mempersiapkan 3 unsur pelaksanaan akreditasi" },
      { "id": 3, "nilai" : 2, "nama" : "Mempersiapkan 2 unsur pelaksanaan akreditasi" },
      { "id": 4, "nilai" : 1, "nama" : "Mempersiapkan 1 unsur pelaksanaan akreditasi" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak mempersiapkan unsur pelaksanaan akreditasi" }
    ],
    "jawaban": 4
  },
  {
    "id": 5432,
    "bagian_id": 307,
    "nomor": 122,
    "nama": "Sekolah/Madrasah memiliki struktur kepemimpinan sesuai standar pendidik dan tenaga kependidikan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki kepala sekolah/madrasah dan wakil kepala sekolah/madrasah yang dipilih melalui rapat dewan guru dan proses penetapannya dilaporkan ke institusi di atasnya" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki kepala sekolah/madrasah dan wakil kepala sekolah/madrasah yang dipilih melalui rapat dewan guru tetapi proses penetapannya tidak dilaporkan ke institusi di atasnya" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki kepala sekolah/madrasah dan wakil kepala sekolah/madrasah yang dipilih melalui rapat perwakilan guru dan wali  kelas serta proses penetapannya dilaporkan  ke institusi di atasnya" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki kepala sekolah/madrasah dan wakil kepala sekolah/madrasah yang dipilih melalui rapat perwakilan guru dan wali kelas tetapi proses penetapannya tidak dilaporkan ke institusi di atasnya" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki wakil  kepala sekolah/madrasah atau memiliki wakil kepala sekolah/madrasah yang ditunjuk  langsung oleh kepala sekolah" }
    ],
    "jawaban": 4
  },
  {
    "id": 5433,
    "bagian_id": 307,
    "nomor": 123,
    "nama": "Sekolah/Madrasah memiliki sistem informasi manajemen untuk mendukung administrasi pendidikan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki sistem informasi, fasilitas, dan petugas khusus" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki sistem informasi, fasilitas tetapi tidak memiliki petugas khusus" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki sistem informasi dan petugas khusus tetapi tidak memiliki fasilitas" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki sistem informasi tetapi tidak memiliki fasilitas dan/atau petugas khusus" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki sistem informasi" }
    ],
    "jawaban": 4
  },
  {
    "id": 5434,
    "bagian_id": 308,
    "nomor": 124,
    "nama": "Sekolah/Madrasah menyusun Rencana Kerja dan Anggaran Sekolah/Madrasah  (RKA-S/M) dengan melibatkan stakeholders",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Menyusun RKA-S/M  dengan melibatkan 4 atau lebih unsur stakeholders sekolah/madrasah" },
      { "id": 2, "nilai" : 3, "nama" : "Menyusun RKA-S/M  dengan melibatkan 3 unsur stakeholders sekolah/madrasah" },
      { "id": 3, "nilai" : 2, "nama" : "Menyusun RKA-S/M  dengan melibatkan 2 unsur stakeholders sekolah/madrasah" },
      { "id": 4, "nilai" : 1, "nama" : "Menyusun RKA-S/M  dengan melibatkan 1 unsur stakeholders sekolah/madrasah" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak menyusun  RKA-S/M" }
    ],
    "jawaban": 4
  },
  {
    "id": 5435,
    "bagian_id": 308,
    "nomor": 125,
    "nama": "Sekolah/Madrasah memiliki catatan tahunan berupa dokumen investasi sarana dan prasarana secara menyeluruh.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki catatan tahunan berupa dokumen investasi sarana dan prasarana secara menyeluruh selama 3 tahun  terakhir" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki catatan tahunan berupa dokumen investasi sarana dan prasarana secara menyeluruh selama 2 tahun  terakhir" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki catatan tahunan berupa dokumen investasi sarana dan prasarana secara menyeluruh selama 1 tahun  terakhir" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki catatan tahunan berupa dokumen investasi sarana dan prasarana secara tidak menyeluruh selama 1 tahun terakhir" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki catatan tahunan berupa dokumen investasi sarana dan prasarana" }
    ],
    "jawaban": 4
  },
  {
    "id": 5436,
    "bagian_id": 308,
    "nomor": 126,
    "nama": "Sekolah/Madrasah membelanjakan biaya untuk pengembangan pendidik dan tenaga kependidikan berdasarkan RKA-S/M",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Membelanjakan biaya sebanyak 96%-100% dari anggaran pengembangan pendidik dan tenaga kependidikan dalamRKAS/M" },
      { "id": 2, "nilai" : 3, "nama" : "Membelanjakan biaya sebanyak 91%-95% dari anggaran pengembangan pendidik dan tenaga kependidikan dalam RKAS/M" },
      { "id": 3, "nilai" : 2, "nama" : "Membelanjakan biaya sebanyak 86%-90% dari anggaran pengembangan pendidik dan tenaga kependidikan dalam RKAS/M" },
      { "id": 4, "nilai" : 1, "nama" : "Membelanjakan biaya sebanyak 81%-85% dari anggaran pengembangan pendidik dan tenaga kependidikan dalam RKAS/M" },
      { "id": 5, "nilai" : 0, "nama" : "Membelanjakan biaya sebanyak kurang dari 81% dari anggaran pengembangan pendidik dan tenaga kependidikan dalam RKAS/M" }
    ],
    "jawaban": 4
  },
  {
    "id": 5437,
    "bagian_id": 308,
    "nomor": 127,
    "nama": "Sekolah/Madrasah memiliki modal kerja sebesar yang tertuang dalam RKA-S/M membiayai  seluruh kebutuhan pendidikan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sekolah/Madrasah dapat  merealisasikan 96%-100% modal kerja" },
      { "id": 2, "nilai" : 3, "nama" : "Sekolah/Madrasah dapat  merealisasikan 91%-95% modal kerja" },
      { "id": 3, "nilai" : 2, "nama" : "Sekolah/Madrasah dapat  merealisasikan 86%-90% modal kerja" },
      { "id": 4, "nilai" : 1, "nama" : "Sekolah/Madrasah dapat  merealisasikan 81%-85% modal kerja" },
      { "id": 5, "nilai" : 0, "nama" : "Sekolah/Madrasah dapat  merealisasikan kurang dari 81% modal kerja" }
    ],
    "jawaban": 4
  },
  {
    "id": 5438,
    "bagian_id": 308,
    "nomor": 128,
    "nama": "Sekolah/Madrasah membayar gaji,  honor kegiatan-kegiatan sekolah/madrasah, insentif, dan tunjangan lain  bagi guru pada tahun berjalan.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Membayar gaji, honor kegiatan-kegiatan sekolah/madrasah, insentif, dan tunjangan lain" },
      { "id": 2, "nilai" : 3, "nama" : "Membayar gaji, honor kegiatan-kegiatan sekolah/madrasah, dan insentif, tetapi tidak mengeluarkan tunjangan lain" },
      { "id": 3, "nilai" : 2, "nama" : "Membayar gaji dan honor kegiatan-kegiatan sekolah/madrasah tetapi tidak membayar insentif dan tunjangan lain" },
      { "id": 4, "nilai" : 1, "nama" : "Membayar gaji tetapi tidak membayar honor kegiatan- kegiatan sekolah/madrasa, insentif, dan tunjangan lain" },
      { "id": 5, "nilai" : 0, "nama" : "Membayar gaji tetapi tidak pasti dalam arti jumlah dan waktu" }
    ],
    "jawaban": 4
  },
  {
    "id": 5439,
    "bagian_id": 308,
    "nomor": 129,
    "nama": "Sekolah/Madrasah membayar gaji, honor kegiatan-kegiatan sekolah/madrasah, insentif, dan tunjangan lain  bagi tenaga kependidikan pada tahun berjalan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Membayar gaji, honor kegiatan-kegiatan sekolah/madrasah, insentif, dan tunjangan lain" },
      { "id": 2, "nilai" : 3, "nama" : "Membayar gaji, honor kegiatan-kegiatan sekolah/madrasah, dan insentif, tetapi tidak mengeluarkan tunjangan lain" },
      { "id": 3, "nilai" : 2, "nama" : "Membayar gaji dan honor kegiatan-kegiatan sekolah/madrasah tetapi tidak membayar insentif dan tunjangan lain" },
      { "id": 4, "nilai" : 1, "nama" : "Membayar gaji tetapi tidak membayar honor kegiatan- kegiatan sekolah/madrasa, insentif, dan tunjangan lain" },
      { "id": 5, "nilai" : 0, "nama" : "Membayar gaji tetapi tidak ada kepastian dalam arti jumlah dan waktu" }
    ],
    "jawaban": 4
  },
  {
    "id": 5441,
    "bagian_id": 308,
    "nomor": 131,
    "nama": "Sekolah/Madrasah membelanjakan dana  untuk kegiatan kesiswaan selama satu tahun terakhir.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Membelanjakan dana sebanyak 96%-100% dari alokasi anggaran" },
      { "id": 2, "nilai" : 3, "nama" : "Membelanjakan dana sebanyak 91%-95% dari alokasi anggaran" },
      { "id": 3, "nilai" : 2, "nama" : "Membelanjakan dana sebanyak 86%-90% dari alokasi anggaran" },
      { "id": 4, "nilai" : 1, "nama" : "Membelanjakan dana sebanyak 81%-85% dari alokasi anggaran" },
      { "id": 5, "nilai" : 0, "nama" : "Membelanjakan dana kurang dari 81% dari alokasi anggaran" }
    ],
    "jawaban": 4
  },
  {
    "id": 5442,
    "bagian_id": 308,
    "nomor": 132,
    "nama": "Sekolah/Madrasah membelanjakan biaya pengadaan alat tulis untuk kegiatan pembelajaran selama satu tahun terakhir.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Membelanjakan dana sebanyak 96%-100% dari alokasi anggaran" },
      { "id": 2, "nilai" : 3, "nama" : "Membelanjakan dana sebanyak 91%-95% dari alokasi anggaran" },
      { "id": 3, "nilai" : 2, "nama" : "Membelanjakan dana sebanyak 86%-90% dari alokasi anggaran" },
      { "id": 4, "nilai" : 1, "nama" : "Membelanjakan dana sebanyak 81%-85% dari alokasi anggaran" },
      { "id": 5, "nilai" : 0, "nama" : "Membelanjakan dana kurang dari 81% dari alokasi anggaran" }
    ],
    "jawaban": 4
  },
  {
    "id": 5443,
    "bagian_id": 308,
    "nomor": 133,
    "nama": "Sekolah/Madrasah membelanjakan dana pengadaan bahan habis pakai untuk kegiatan pembelajaran selama satu tahun terakhir.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Membelanjakan dana sebanyak 96%-100% dari alokasi anggaran" },
      { "id": 2, "nilai" : 3, "nama" : "Membelanjakan dana sebanyak 91%-95% dari alokasi anggaran" },
      { "id": 3, "nilai" : 2, "nama" : "Membelanjakan dana sebanyak 86%-90% dari alokasi anggaran" },
      { "id": 4, "nilai" : 1, "nama" : "Membelanjakan dana sebanyak 81%-85% dari alokasi anggaran" },
      { "id": 5, "nilai" : 0, "nama" : "Membelanjakan dana kurang dari 81% dari alokasi anggaran" }
    ],
    "jawaban": 4
  },
  {
    "id": 5444,
    "bagian_id": 308,
    "nomor": 134,
    "nama": "Sekolah/Madrasah membelanjakan dana pengadaan alat habis pakai untuk kegiatan pembelajaran selama satu tahun terakhir.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Membelanjakan dana sebanyak 96%-100% dari alokasi anggaran" },
      { "id": 2, "nilai" : 3, "nama" : "Membelanjakan dana sebanyak 91%-95% dari alokasi anggaran" },
      { "id": 3, "nilai" : 2, "nama" : "Membelanjakan dana sebanyak 86%-90% dari alokasi anggaran" },
      { "id": 4, "nilai" : 1, "nama" : "Membelanjakan dana sebanyak 81%-85% dari alokasi anggaran" },
      { "id": 5, "nilai" : 0, "nama" : "Membelanjakan dana kurang dari 81% dari alokasi anggaran" }
    ],
    "jawaban": 4
  },
  {
    "id": 5445,
    "bagian_id": 308,
    "nomor": 135,
    "nama": "Sekolah/Madrasah mengalokasikan dana kegiatan rapat  selama satu tahun terakhir.",
    "bobot": 2,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Membelanjakan dana sebanyak 96%-100% dari alokasi anggaran" },
      { "id": 2, "nilai" : 3, "nama" : "Membelanjakan dana sebanyak 91%-95% dari alokasi anggaran" },
      { "id": 3, "nilai" : 2, "nama" : "Membelanjakan dana sebanyak 86%-90% dari alokasi anggaran" },
      { "id": 4, "nilai" : 1, "nama" : "Membelanjakan dana sebanyak 81%-85% dari alokasi anggaran" },
      { "id": 5, "nilai" : 0, "nama" : "Membelanjakan dana kurang dari 81% dari alokasi anggaran" }
    ],
    "jawaban": 4
  },
  {
    "id": 5446,
    "bagian_id": 308,
    "nomor": 136,
    "nama": "Sekolah/Madrasah membelanjakan dana  transpor dan perjalanan dinas selama satu tahun terakhir.",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Membelanjakan dana sebanyak 96%-100% dari alokasi anggaran" },
      { "id": 2, "nilai" : 3, "nama" : "Membelanjakan dana sebanyak 91%-95% dari alokasi anggaran" },
      { "id": 3, "nilai" : 2, "nama" : "Membelanjakan dana sebanyak 86%-90% dari alokasi anggaran" },
      { "id": 4, "nilai" : 1, "nama" : "Membelanjakan dana sebanyak 81%-85% dari alokasi anggaran" },
      { "id": 5, "nilai" : 0, "nama" : "Membelanjakan dana kurang dari 81% dari alokasi anggaran" }
    ],
    "jawaban": 4
  },
  {
    "id": 5447,
    "bagian_id": 308,
    "nomor": 137,
    "nama": "Sekolah/Madrasah membelanjakan dana penggandaan soal-soal ulangan/ujian selama satu tahun terakhir.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Membelanjakan dana sebanyak 96%-100% dari alokasi anggaran" },
      { "id": 2, "nilai" : 3, "nama" : "Membelanjakan dana sebanyak 91%-95% dari alokasi anggaran" },
      { "id": 3, "nilai" : 2, "nama" : "Membelanjakan dana sebanyak 86%-90% dari alokasi anggaran" },
      { "id": 4, "nilai" : 1, "nama" : "Membelanjakan dana sebanyak 81%-85% dari alokasi anggaran" },
      { "id": 5, "nilai" : 0, "nama" : "Membelanjakan dana kurang dari 81% dari alokasi anggaran" }
    ],
    "jawaban": 4
  },
  {
    "id": 5448,
    "bagian_id": 308,
    "nomor": 138,
    "nama": "Sekolah/Madrasah membelanjakan dana pengadaan daya dan jasa selama satu tahun terakhir.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Membelanjakan dana sebanyak 96%-100% dari alokasi anggaran" },
      { "id": 2, "nilai" : 3, "nama" : "Membelanjakan dana sebanyak 91%-95% dari alokasi anggaran" },
      { "id": 3, "nilai" : 2, "nama" : "Membelanjakan dana sebanyak 86%-90% dari alokasi anggaran" },
      { "id": 4, "nilai" : 1, "nama" : "Membelanjakan dana sebanyak 81%-85% dari alokasi anggaran" },
      { "id": 5, "nilai" : 0, "nama" : "Membelanjakan dana kurang dari 81% dari alokasi anggaran" }
    ],
    "jawaban": 4
  },
  {
    "id": 5449,
    "bagian_id": 308,
    "nomor": 139,
    "nama": "Sekolah/Madrasah membelanjakan anggaran untuk mendukung kegiatan operasional tidak langsung untuk satu tahun terakhir.",
    "bobot": 2,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Membelanjakan dana sebanyak 96%-100% dari alokasi anggaran" },
      { "id": 2, "nilai" : 3, "nama" : "Membelanjakan dana sebanyak 91%-95% dari alokasi anggaran" },
      { "id": 3, "nilai" : 2, "nama" : "Membelanjakan dana sebanyak 86%-90% dari alokasi anggaran" },
      { "id": 4, "nilai" : 1, "nama" : "Membelanjakan dana sebanyak 81%-85% dari alokasi anggaran" },
      { "id": 5, "nilai" : 0, "nama" : "Membelanjakan dana kurang dari 81% dari alokasi anggaran" }
    ],
    "jawaban": 4
  },
  {
    "id": 5450,
    "bagian_id": 308,
    "nomor": 140,
    "nama": "Sumbangan pendidikan atau dana dari masyarakat dikelola secara sistematis, transparan, efisien, dan akuntabel, serta  dilaporkan kepada komite sekolah/madrasah.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Dikelola secara sistematis, transparan, efisien, dan akuntabel serta dilaporkan kepada komite sekolah/madrasah" },
      { "id": 2, "nilai" : 3, "nama" : "Dikelola secara sistematis, transparan, efisien, dan akuntabel, tetapi tidak dilaporkan" },
      { "id": 3, "nilai" : 2, "nama" : "Dikelola secara sistematis, transparan, dan efisien, tetapi tidak akuntabel dan tidak dilaporkan" },
      { "id": 4, "nilai" : 1, "nama" : "Dikelola secara sistematis dan transparan, tetapi tidak efisien, akuntabel, dan tidak dilaporkan" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak dikelola secara sistematis, transparan, efisien, dan akuntabel, dan tidak dilaporkan" }
    ],
    "jawaban": 4
  },
  {
    "id": 5451,
    "bagian_id": 308,
    "nomor": 141,
    "nama": "Penetapan besarnya uang sekolah/madrasah mempertimbangkan kemampuan ekonomi orangtua siswa.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sebanyak 91%-100% siswa dari keluarga tidak mampu mendapatkan keringanan" },
      { "id": 2, "nilai" : 3, "nama" : "Sebanyak 81%-90% siswa dari keluarga tidak mampu mendapatkan keringanan" },
      { "id": 3, "nilai" : 2, "nama" : "Sebanyak 71%-80% siswa dari keluarga tidak mampu mendapatkan keringanan" },
      { "id": 4, "nilai" : 1, "nama" : "Sebanyak 61%-70% siswa dari keluarga tidak mampu mendapatkan keringanan" },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 61% siswa dari keluarga tidak mampu mendapatkan keringanan" }
    ],
    "jawaban": 4
  },
  {
    "id": 5452,
    "bagian_id": 308,
    "nomor": 142,
    "nama": "Sekolah/Madrasah memberikan bantuan untuk siswa  yang  kurang mampu secara ekonomi.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Membantu 91%-100% siswa kurang mampu secara ekonomi" },
      { "id": 2, "nilai" : 3, "nama" : "Membantu  81%-90% siswa kurang mampu secara ekonomi" },
      { "id": 3, "nilai" : 2, "nama" : "Membantu  71%-80% siswa kurang mampu secara ekonomi" },
      { "id": 4, "nilai" : 1, "nama" : "Membantu  61%-70% siswa kurang mampu secara ekonomi" },
      { "id": 5, "nilai" : 0, "nama" : "Membantu kurang dari 61% siswa kurang mampu secara ekonomi" }
    ],
    "jawaban": 4
  },
  {
    "id": 5453,
    "bagian_id": 308,
    "nomor": 143,
    "nama": "Sekolah/Madrasah melakukan pungutan biaya personal lain  di samping uang sekolah/madrasah.",
    "bobot": 2,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Tidak melakukan pungutan biaya personal lain" },
      { "id": 2, "nilai" : 3, "nama" : "Melakukan 1 jenis pungutan biaya personal lain" },
      { "id": 3, "nilai" : 2, "nama" : "Melakukan 2 jenis pungutan biaya personal lain" },
      { "id": 4, "nilai" : 1, "nama" : "Melakukan 3 jenis pungutan biaya personal lain" },
      { "id": 5, "nilai" : 0, "nama" : "Melakukan 4 atau lebih jenis pungutan biaya personal lain" }
    ],
    "jawaban": 4
  },
  {
    "id": 5454,
    "bagian_id": 308,
    "nomor": 144,
    "nama": "Pengambilan keputusan dalam penetapan besarnya dana yang digali  dari masyarakat sebagai biaya operasional dilakukan dengan melibatkan berbagai pihak terkait.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Kepala sekolah/madrasah melibatkan komite sekolah/madrasah, perwakilan guru, perwakilan tenaga kependidikan, siswa, dan penyelenggara pendidikan/yayasan untuk swasta" },
      { "id": 2, "nilai" : 3, "nama" : "Kepala sekolah/madrasah melibatkan 3 di antara unsur di atas" },
      { "id": 3, "nilai" : 2, "nama" : "Kepala sekolah/madrasah melibatkan 2 di antara unsur di atas" },
      { "id": 4, "nilai" : 1, "nama" : "Kepala sekolah/madrasah melibatkan 1 di antara unsur di atas" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melibatkan siapapun" }
    ],
    "jawaban": 4
  },
  {
    "id": 5455,
    "bagian_id": 308,
    "nomor": 145,
    "nama": "Pengelolaan dana dari masyarakat sebagai biaya personal dilakukan secara transparan dan akuntabel sesuai RKA-S/M",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sebanyak 91%-100% dana dari masyarakat sesuai RKA-S/M" },
      { "id": 2, "nilai" : 3, "nama" : "Sebanyak 81%-90% dana dari masyarakat sesuai RKA-S/M" },
      { "id": 3, "nilai" : 2, "nama" : "Sebanyak 71%-80% dana dari masyarakat sesuai RKA-S/M" },
      { "id": 4, "nilai" : 1, "nama" : "Sebanyak 61%-70% dana dari masyarakat sesuai RKA-S/M" },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 61% dana dari masyarakat sesuai RKA-S/M" }
    ],
    "jawaban": 4
  },
  {
    "id": 5456,
    "bagian_id": 308,
    "nomor": 146,
    "nama": "Sekolah/Madrasah memiliki pedoman pengelolaan keuangan sebagai dasar dalam penyusunan RKA-S/M.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki pedoman  pengelolaan keuangan selama 4 tahun terakhir" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki pedoman  pengelolaan keuangan selama 3 tahun terakhir" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki pedoman  pengelolaan keuangan selama 2 tahun terakhir" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki pedoman  pengelolaan keuangan selama 1 tahun terakhir" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki pedoman pengelolaan keuangan" }
    ],
    "jawaban": 4
  },
  {
    "id": 5457,
    "bagian_id": 308,
    "nomor": 147,
    "nama": "Sekolah/Madrasah memiliki pembukuan biaya operasional.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki pembukuan biaya operasional selama 4 tahun terakhir" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki pembukuan biaya operasional selama 3 tahun terakhir" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki pembukuan biaya operasional selama 2 tahun terakhir" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki pembukuan biaya operasional selama 1 tahun terakhir" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki pembukuan biaya operasional" }
    ],
    "jawaban": 4
  },
  {
    "id": 5458,
    "bagian_id": 308,
    "nomor": 148,
    "nama": "Sekolah/Madrasah membuat laporan pertanggungjawaban pengelolaan keuangan dan menyampaikannya kepada pemerintah atau yayasan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Membuat laporan pertanggungjawaban pengelolaan keuangan dan menyampaikannya kepada pemerintah atau yayasan selama 4 tahun terakhir" },
      { "id": 2, "nilai" : 3, "nama" : "Membuat laporan pertanggungjawaban pengelolaan keuangan dan menyampaikannya kepada pemerintah atau yayasan selama 3 tahun terakhir" },
      { "id": 3, "nilai" : 2, "nama" : "Membuat laporan pertanggungjawaban pengelolaan keuangan dan menyampaikannya kepada pemerintah atau yayasan selama 2 tahun terakhir" },
      { "id": 4, "nilai" : 1, "nama" : "Membuat laporan pertanggungjawaban pengelolaan keuangan dan menyampaikannya kepada pemerintah atau yayasan selama 1 tahun terakhir" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak membuat laporan pertanggungjawaban pengelolaan keuangan" }
    ],
    "jawaban": 4
  },
  {
    "id": 5459,
    "bagian_id": 309,
    "nomor": 149,
    "nama": "Guru menginformasikan rancangan dan kriteria penilaian yang ada dalam silabus mata pelajaran kepada siswa pada awal semester.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sebanyak 96%-100% guru menginformasikan rancangan dan kriteria penilaian kepada siswa" },
      { "id": 2, "nilai" : 3, "nama" : "Sebanyak 91%-95% guru menginformasikan rancangan dan kriteria penilaian kepada siswa" },
      { "id": 3, "nilai" : 2, "nama" : "Sebanyak 86%-90% guru menginformasikan rancangan dan kriteria penilaian kepada siswa" },
      { "id": 4, "nilai" : 1, "nama" : "Sebanyak 81%-85% guru menginformasikan rancangan dan kriteria penilaian kepada siswa" },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 81% guru menginformasikan rancangan dan kriteria penilaian kepada siswa" }
    ],
    "jawaban": 4
  },
  {
    "id": 5460,
    "bagian_id": 309,
    "nomor": 150,
    "nama": "Teknik penilaian yang ada pada silabus telah sesuai dengan indikator pencapaian KD.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sebanyak 96%-100% silabus memuat teknik penilaian yang sesuai dengan indikator pencapaian  KD" },
      { "id": 2, "nilai" : 3, "nama" : "Sebanyak 91%-95% silabus memuat teknik penilaian yang sesuai dengan indikator pencapaian  KD" },
      { "id": 3, "nilai" : 2, "nama" : "Sebanyak 86%-90% silabus memuat teknik penilaian yang sesuai dengan indikator pencapaian  KD" },
      { "id": 4, "nilai" : 1, "nama" : "Sebanyak 81%-85% silabus memuat teknik penilaian yang sesuai dengan indikator pencapaian  KD" },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 81% silabus memuat teknik penilaian yang sesuai dengan indikator pencapaian KD" }
    ],
    "jawaban": 4
  },
  {
    "id": 5461,
    "bagian_id": 309,
    "nomor": 151,
    "nama": "Guru mengembangkan instrumen dan pedoman penilaian sesuai dengan bentuk dan teknik penilaian.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sebanyak 96%-100% guru mengembangkan instrumen dan pedoman penilaian sesuai dengan bentuk dan teknik penilaian" },
      { "id": 2, "nilai" : 3, "nama" : "Sebanyak 91%-95% guru mengembangkan instrumen dan pedoman penilaian sesuai dengan bentuk dan teknik penilaian" },
      { "id": 3, "nilai" : 2, "nama" : "Sebanyak 86%-90% guru mengembangkan instrumen dan pedoman penilaian sesuai dengan bentuk dan teknik penilaian" },
      { "id": 4, "nilai" : 1, "nama" : "Sebanyak 81%-85% guru mengembangkan instrumen dan pedoman penilaian sesuai dengan bentuk dan teknik penilaian" },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 81% guru mengembangkan instrumen dan pedoman penilaian sesuai dengan bentuk dan teknik penilaian" }
    ],
    "jawaban": 4
  },
  {
    "id": 5462,
    "bagian_id": 309,
    "nomor": 152,
    "nama": "Guru menggunakan berbagai teknik penilaian.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sebanyak 96%-100% guru melakukan   penilaian dengan menggunakan 4 atau  lebih teknik penilaian" },
      { "id": 2, "nilai" : 3, "nama" : "Sebanyak 91%-95% guru melakukan   penilaian dengan menggunakan 4 atau  lebih teknik penilaian" },
      { "id": 3, "nilai" : 2, "nama" : "Sebanyak 86%-90% guru melakukan   penilaian dengan menggunakan 4 atau  lebih teknik penilaian" },
      { "id": 4, "nilai" : 1, "nama" : "Sebanyak 81%-85% guru melakukan   penilaian dengan menggunakan 4 atau  lebih teknik penilaian" },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 81% guru melakukan penilaian dengan menggunakan 4 atau  lebih teknik penilaian" }
    ],
    "jawaban": 4
  },
  {
    "id": 5463,
    "bagian_id": 309,
    "nomor": 153,
    "nama": "Guru mengolah/menganalisis hasil penilaian untuk mengetahui kemajuan hasil belajar dan kesulitan belajar siswa.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sebanyak 96%-100% guru mengolah/menganalisis hasil penilaian untuk mengetahui kemajuan hasil belajar dan kesulitan belajar siswa" },
      { "id": 2, "nilai" : 3, "nama" : "Sebanyak 91%-95% guru mengolah/menganalisis hasil penilaian untuk mengetahui kemajuan hasil belajar dan kesulitan belajar siswa" },
      { "id": 3, "nilai" : 2, "nama" : "Sebanyak 86%-90% guru mengolah/menganalisis hasil penilaian untuk mengetahui kemajuan hasil belajar dan kesulitan belajar siswa" },
      { "id": 4, "nilai" : 1, "nama" : "Sebanyak 81%-85% guru mengolah/menganalisis hasil penilaian untuk mengetahui kemajuan hasil belajar dan kesulitan belajar siswa" },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 81% guru mengolah/menganalisis hasil penilaian untuk mengetahui kemajuan hasil belajar dan kesulitan belajar siswa" }
    ],
    "jawaban": 4
  },
  {
    "id": 5464,
    "bagian_id": 309,
    "nomor": 154,
    "nama": "Guru mengembalikan hasil pemeriksaan pekerjaan siswa disertai balikan/komentar yang mendidik.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sebanyak 96%-100% guru mengembalikan hasil pemeriksaan pekerjaan siswa disertai balikan/komentar yang mendidik" },
      { "id": 2, "nilai" : 3, "nama" : "Sebanyak 91%-95% guru mengembalikan hasil pemeriksaan pekerjaan siswa disertai balikan/komentar yang mendidik" },
      { "id": 3, "nilai" : 2, "nama" : "Sebanyak 86%-90% guru mengembalikan hasil pemeriksaan pekerjaan siswa disertai balikan/komentar yang mendidik" },
      { "id": 4, "nilai" : 1, "nama" : "Sebanyak 81%-85% guru mengembalikan hasil pemeriksaan pekerjaan siswa disertai balikan/komentar yang mendidik" },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 81% guru mengembalikan hasil pemeriksaan siswa disertai balikan/komentar yang mendidik" }
    ],
    "jawaban": 4
  },
  {
    "id": 5465,
    "bagian_id": 309,
    "nomor": 155,
    "nama": "Guru memanfaatkan hasil penilaian untuk perbaikan pembelajaran.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sebanyak 96%-100% guru memanfaatkan hasil penilaian untuk perbaikan pembelajaran" },
      { "id": 2, "nilai" : 3, "nama" : "Sebanyak 91%-95% guru memanfaatkan hasil penilaian untuk perbaikan pembelajaran" },
      { "id": 3, "nilai" : 2, "nama" : "Sebanyak 86%-90% guru memanfaatkan hasil penilaian untuk perbaikan pembelajaran" },
      { "id": 4, "nilai" : 1, "nama" : "Sebanyak 81%-85% guru memanfaatkan hasil penilaian untuk perbaikan pembelajaran" },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 81% guru memanfaatkan hasil penilaian untuk perbaikan pembelajaran" }
    ],
    "jawaban": 4
  },
  {
    "id": 5466,
    "bagian_id": 309,
    "nomor": 156,
    "nama": "Guru melaporkan hasil penilaian mata pelajaran pada setiap akhir semester kepada kepala sekolah/madrasah dalam bentuk laporan prestasi belajar siswa.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sebanyak 100% guru melaporkan hasil penilaian prestasi belajar siswa kepada kepala sekolah/madrasah" },
      { "id": 2, "nilai" : 3, "nama" : "Sebanyak 95%-99% guru melaporkan hasil penilaian prestasi belajar siswa kepada kepala sekolah/madrasah" },
      { "id": 3, "nilai" : 2, "nama" : "Sebanyak 90%-94% guru melaporkan hasil penilaian prestasi belajar siswa kepada kepala sekolah/madrasah" },
      { "id": 4, "nilai" : 1, "nama" : "Sebanyak 85%-89% guru melaporkan hasil penilaian prestasi belajar siswa kepada kepala sekolah/madrasah" },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 85% guru melaporkan hasil penilaian prestasi belajar siswa kepada kepala sekolah/madrasah" }
    ],
    "jawaban": 4
  },
  {
    "id": 5467,
    "bagian_id": 309,
    "nomor": 157,
    "nama": "Guru mengkomunikasikan hasil penilaian akhlak siswa kepada  guru pendidikan agama sebagai  informasi  untuk menentukan nilai akhir semester.",
    "bobot": 2,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sebanyak 96%-100% guru mengkomunikasikan hasil penilaian akhlak siswa kepada guru pendidikan agama" },
      { "id": 2, "nilai" : 3, "nama" : "Sebanyak 91%-95% guru mengkomunikasikan hasil penilaian akhlak siswa kepada guru pendidikan agama" },
      { "id": 3, "nilai" : 2, "nama" : "Sebanyak 86%-90% guru menyampaikan hasil penilaian akhlak siswa kepada guru pendidikan agama" },
      { "id": 4, "nilai" : 1, "nama" : "Sebanyak 81%-85% guru menyampaikan hasil penilaian akhlak siswa kepada guru pendidikan agama" },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 81% guru menyampaikan hasil penilaian akhlak siswa kepada guru pendidikan agama" }
    ],
    "jawaban": 4
  },
  {
    "id": 5468,
    "bagian_id": 309,
    "nomor": 158,
    "nama": "Guru mengkomunikasikan hasil penilaian kepribadian siswa kepada guru pendidikan kewarganegaraan sebagai  informasi untuk menentukan nilai akhir semester.",
    "bobot": 2,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sebanyak 96%-100% guru mengkomunikasikan hasil penilaian kepribadian siswa kepada guru pendidikan kewarganegaraan" },
      { "id": 2, "nilai" : 3, "nama" : "Sebanyak 91%-95% guru mengkomunikasikan hasil penilaian kepribadian siswa kepada guru pendidikan kewarganegaraan" },
      { "id": 3, "nilai" : 2, "nama" : "Sebanyak 86%-90% guru mengkomunikasikan hasil penilaian kepribadian siswa kepada guru pendidikan kewarganegaraan" },
      { "id": 4, "nilai" : 1, "nama" : "Sebanyak 81%-85% guru mengkomunikasikan hasil penilaian kepribadian siswa kepada guru pendidikan kewarganegaraan" },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 81% guru mengkomunikasikan hasil penilaian kepribadian siswa kepada guru pendidikan kewarganegaraan" }
    ],
    "jawaban": 4
  },
  {
    "id": 5469,
    "bagian_id": 309,
    "nomor": 159,
    "nama": "Sekolah/Madrasah mengkoordinasikan ulangan tengah semester, ulangan akhir semester dan ulangan kenaikan kelas.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Ulangan tengah semester, ulangan akhir semester, dan ulangan kenaikan kelas" },
      { "id": 2, "nilai" : 3, "nama" : "Ulangan akhir semester dan ulangan kenaikan kelas" },
      { "id": 3, "nilai" : 2, "nama" : "Ulangan tengah semester dan ulangan kenaikan kelas" },
      { "id": 4, "nilai" : 1, "nama" : "Hanya ulangan kenaikan kelas" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak pernah  mengkoordinasikan ulangan tengah semester, ulangan akhir semester, dan ulangan kenaikan kelas" }
    ],
    "jawaban": 4
  },
  {
    "id": 5470,
    "bagian_id": 309,
    "nomor": 160,
    "nama": "Sekolah/Madrasah menentukan kriteria kenaikan kelas melalui rapat.",
    "bobot": 2,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Menentukan kriteria kenaikan kelas melalui rapat kepala sekolah/madrasah, wali kelas, dan dewan guru" },
      { "id": 2, "nilai" : 3, "nama" : "Menentukan kriteria kenaikan kelas melalui rapat kepala sekolah/madrasah, wali  kelas, dan guru mata pelajaran" },
      { "id": 3, "nilai" : 2, "nama" : "Menentukan kriteria kenaikan kelas melalui rapat kepala sekolah/madrasah dan wali  kelas" },
      { "id": 4, "nilai" : 1, "nama" : "Kriteria kenaikan kelas ditentukan oleh wali  kelas tanpa melalui rapat" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak menentukan  kriteria kenaikan kelas" }
    ],
    "jawaban": 4
  },
  {
    "id": 5471,
    "bagian_id": 309,
    "nomor": 161,
    "nama": "Sekolah/Madrasah menentukan nilai  akhir kelompok mata  pelajaran agama dan akhlak mulia, kewarganegaraan dan kepribadian, estetika, serta pendidikan  jasmani, olahraga,  dan kesehatan.",
    "bobot": 2,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Menentukan nilai akhir melalui rapat  dewan guru dengan mempertimbangkan  hasil penilaian  oleh guru" },
      { "id": 2, "nilai" : 3, "nama" : "Menentukan nilai akhir melalui rapat  dewan guru tanpa mempertimbangkan  hasil penilaian  oleh guru" },
      { "id": 3, "nilai" : 2, "nama" : "Menentukan nilai akhir tanpa melalui rapat  dewan guru tetapi mempertimbangkan  hasil penilaian  oleh guru" },
      { "id": 4, "nilai" : 1, "nama" : "Menentukan nilai akhir bersama wali  kelas saja" },
      { "id": 5, "nilai" : 0, "nama" : "Hanya ditetapkan oleh kepala sekolah/madrasah" }
    ],
    "jawaban": 4
  },
  {
    "id": 5472,
    "bagian_id": 309,
    "nomor": 162,
    "nama": "Sekolah/Madrasah melaporkan hasil penilaian setiap akhir semester kepada semua orangtua/wali siswa.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Laporan hasil penilaian setiap akhir semester dengan penjelasan kepala sekolah/madrasah dan wali kelas kepada orangtua/wali siswa dan siswa yang bersangkutan" },
      { "id": 2, "nilai" : 3, "nama" : "Laporan hasil penilaian setiap akhir semester dengan penjelasan kepala sekolah/madrasah dan wali kelas kepada orangtua/wali siswa tanpa siswa yang bersangkutan" },
      { "id": 3, "nilai" : 2, "nama" : "Laporan hasil penilaian setiap akhir semester tanpa  penjelasan kepala sekolah/madrasah tetapi langsung dari wali  kelas kepada orangtua/wali siswa dan siswa yang bersangkutan" },
      { "id": 4, "nilai" : 1, "nama" : "Laporan hasil penilaian setiap akhir semester tanpa  penjelasan kepala sekolah/madrasah tetapi langsung dari wali  kelas kepada orangtua/wali siswa tanpa siswa yang bersangkutan" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melaporkan hasil penilaian kepada orangtua/wali siswa" }
    ],
    "jawaban": 4
  },
  {
    "id": 5473,
    "bagian_id": 309,
    "nomor": 163,
    "nama": "Sekolah/Madrasah melaporkan pencapaian hasil belajar siswa kepada Dinas Pendidikan/Kankemenag Kabupaten/Kota.",
    "bobot": 2,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melaporkan pencapaian hasil belajar siswa kurang dari 20 hari setelah akhir semester" },
      { "id": 2, "nilai" : 3, "nama" : "Melaporkan pencapaian hasil belajar siswa antara 21-40 hari setelah akhir semester" },
      { "id": 3, "nilai" : 2, "nama" : "Melaporkan pencapaian hasil belajar siswa antara 41-60 hari setelah akhir semester" },
      { "id": 4, "nilai" : 1, "nama" : "Melaporkan pencapaian hasil belajar siswa antara 61-80 hari setelah akhir semester" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melaporkan pencapaian hasil belajar siswa atau melaporkannya  lebih dari 80 hari" }
    ],
    "jawaban": 4
  },
  {
    "id": 5474,
    "bagian_id": 309,
    "nomor": 164,
    "nama": "Sekolah/Madrasah menentukan kelulusan siswa melalui rapat dewan guru sesuai kriteria kelulusan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Menentukan kelulusan siswa melalui rapat dewan guru" },
      { "id": 2, "nilai" : 3, "nama" : "Menentukan kelulusan siswa melalui rapat perwakilan guru- guru mata pelajaran" },
      { "id": 3, "nilai" : 2, "nama" : "Menentukan kelulusan siswa melalui rapat wali  kelas" },
      { "id": 4, "nilai" : 1, "nama" : "Menentukan kelulusan siswa melalui rapat guru BK" },
      { "id": 5, "nilai" : 0, "nama" : "Hanya ditetapkan oleh kepala sekolah/madrasah" }
    ],
    "jawaban": 4
  },
  {
    "id": 5475,
    "bagian_id": 309,
    "nomor": 165,
    "nama": "Sekolah/Madrasah menyerahkan Surat Keterangan Hasil Ujian Nasional (SKHUN) setiap siswa yang mengikuti Ujian Nasional (UN)",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Menyerahkan SKHUN  kurang dari 7 hari setelah diterima dari Dinas Pendidikan/Kankemenag" },
      { "id": 2, "nilai" : 3, "nama" : "Menyerahkan SKHUN antara 8-14 hari setelah diterima dari Dinas Pendidikan/Kankemenag" },
      { "id": 3, "nilai" : 2, "nama" : "Menyerahkan SKHUN antara 15-21 hari setelah diterima dari Dinas Pendidikan/Kankemenag" },
      { "id": 4, "nilai" : 1, "nama" : "Menyerahkan SKHUN antara 22-35 hari setelah diterima dari Dinas Pendidikan/Kankemenag" },
      { "id": 5, "nilai" : 0, "nama" : "Menyerahkan SKHUN  lebih dari 35 hari setelah diterima dari Dinas Pendidikan/Kankemenag" }
    ],
    "jawaban": 4
  },
  {
    "id": 5476,
    "bagian_id": 309,
    "nomor": 166,
    "nama": "Sekolah/Madrasah menyerahkan ijazah  kepada setiap  siswa yang telah  lulus sesuai  dengan ketent uan yang ditetapkan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Menyerahkan ijazah kepada siswa kurang dari 7 hari setelah blanko ijazah diterima dari Dinas Pendidikan/Kankemenag" },
      { "id": 2, "nilai" : 3, "nama" : "Menyerahkan ijazah kepada siswa kurang dari 8-14 hari setelah blanko ijazah diterima dari DinasPendidikan/Kankemenag" },
      { "id": 3, "nilai" : 2, "nama" : "Menyerahkan ijazah kepada siswa kurang dari 15-21 hari setelah blanko ijazah diterima dari Dinas Pendidikan/Kankemenag" },
      { "id": 4, "nilai" : 1, "nama" : "Menyerahkan ijazah kepada siswa kurang dari 22-28 hari setelah blanko ijazah diterima dari Dinas Pendidikan/Kankemenag" },
      { "id": 5, "nilai" : 0, "nama" : "Menyerahkan ijazah kepada siswa lebih dari 28 hari setelah blanko ijazah diterima dari Dinas Pendidikan/Kankemenag" }
    ],
    "jawaban": 4
  },
  {
    "id": 5477,
    "bagian_id": 309,
    "nomor": 167,
    "nama": "Sekolah/Madrasah menggunakan hasil ujian nasional SD/MI atau hasil Ujian Nasional Pendidikan Kesetaraan (UNPK) program Paket A sebagai bahan pertimbangan penerimaan siswa baru.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Menggunakan hasil ujian nasional SD/MI atau hasil UNPK program Paket A secara transparan sebagai bahan pertimbangan penerimaan siswa baru" },
      { "id": 2, "nilai" : 3, "nama" : "Menggunakan hasil ujian nasional SD/MI atau hasil UNPK program Paket A dan tes masuk secara transparan sebagai bahan pertimbangan penerimaan siswa baru" },
      { "id": 3, "nilai" : 2, "nama" : "Hanya menggunakan hasil ujian nasional SD/MI dan tes masuk secara transparan sebagai bahan pertimbangan penerimaan siswa baru" },
      { "id": 4, "nilai" : 1, "nama" : "Hanya menggunakan hasil ujian nasional SD/MI secara transparan sebagai bahan pertimbangan penerimaan siswa baru" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak menggunakan hasil ujian nasional SD/MI atau hasil UNPK program Paket A sebagai bahan pertimbangan penerimaan siswa baru" }
    ],
    "jawaban": 4
  },
  {
    "id": 5478,
    "bagian_id": 309,
    "nomor": 168,
    "nama": "Sekolah/Madrasah memiliki prestasi hasil ujian nasional yang ditunjukkan dengan persentase tingkat kelulusan tahun terakhir.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki prestasi hasil ujian nasional dengan tingkat kelulusan 96%-100%" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki prestasi hasil ujian nasional dengan tingkat kelulusan 91%-95%" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki prestasi hasil ujian nasional dengan tingkat kelulusan 86%-90%" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki prestasi hasil ujian nasional dengan tingkat kelulusan 81%-85%" },
      { "id": 5, "nilai" : 0, "nama" : "Memiliki prestasi hasil ujian nasional dengan tingkat kelulusan kurang dari 81%" }
    ],
    "jawaban": 4
  },
  {
    "id": 5479,
    "bagian_id": 309,
    "nomor": 169,
    "nama": "Sekolah/Madrasah memiliki prestasi yang ditunjukkan dengan rata-rata hasil ujian nasional tahun terakhir.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Semua mata  pelajaran yang diujikan lebih tinggi dari rata-rata nasional" },
      { "id": 2, "nilai" : 3, "nama" : "Tiga mata pelajaran yang diujikan lebih tinggi dari rata-rata nasional" },
      { "id": 3, "nilai" : 2, "nama" : "Dua mata pelajaran yang diujikan lebih tinggi dari rata-rata nasional" },
      { "id": 4, "nilai" : 1, "nama" : "Satu mata pelajaran yang diujikan lebih tinggi dari rata-rata nasional" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak ada mata pelajaran yang diujikan lebih tinggi dari rata- rata nasional" }
    ],
    "jawaban": 4
  },
  {
    "id": 5311,
    "bagian_id": 302,
    "nomor": 1,
    "nama": "Sekolah/Madrasah melaksanakan kurikulum berdasarkan muatan Kurikulum Tingkat Satuan Pendidikan (KTSP).",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melaksanakan kurikulum berdasarkan 8 muatan KTSP " },
      { "id": 2, "nilai" : 3, "nama" : "Melaksanakan kurikulum berdasarkan 7 muatan KTSP " },
      { "id": 3, "nilai" : 2, "nama" : "Melaksanakan kurikulum berdasarkan 6 muatan KTSP " },
      { "id": 4, "nilai" : 1, "nama" : "Melaksanakan kurikulum berdasarkan 5 atau kurang muatan KTSP " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melaksanakan KTSP " }
    ],
    "jawaban": 4
  },
  {
    "id": 5312,
    "bagian_id": 302,
    "nomor": 2,
    "nama": "Sekolah/Madrasah mengembangkan kurikulum bersama-sama Tim Pengembang Kurikulum berpedoman pada panduan penyusunan kurikulum yang disusun oleh BSNP.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Bersama seluruh guru, konselor, kepala sekolah/madrasah, narasumber, komite sekolah/madrasah dan/atau penyelenggara lembaga pendidikan" },
      { "id": 2, "nilai" : 3, "nama" : "Bersama guru, konselor, kepala sekolah/madrasah, dan narasumber" },
      { "id": 3, "nilai" : 2, "nama" : "Bersama guru, konselor, dan kepala sekolah/madrasah" },
      { "id": 4, "nilai" : 1, "nama" : "Bersama guru dan konselor" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melakukan pengembangan kurikulum" }
    ],
    "jawaban": 4
  },
  {
    "id": 5313,
    "bagian_id": 302,
    "nomor": 3,
    "nama": "Sekolah/Madrasah mengembangkan kurikulum dengan menggunakan prinsip pengembangan KTSP.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Menggunakan 7 prinsip pengembangan KTSP" },
      { "id": 2, "nilai" : 3, "nama" : "Menggunakan 5-6 prinsip pengembangan KTSP" },
      { "id": 3, "nilai" : 2, "nama" : "Menggunakan 3-4 prinsip pengembangan KTSP" },
      { "id": 4, "nilai" : 1, "nama" : "Menggunakan 1-2 prinsip pengembangan KTSP" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak mengembangkan kurikulum" }
    ],
    "jawaban": 4
  },
  {
    "id": 5630,
    "bagian_id": 317,
    "nomor": 151,
    "nama": "Guru mengolah hasil penilaian untuk mengetahui kemajuan hasil belajar dan kesulitan belajar siswa. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "96%-100% guru mengolah hasil penilaian " },
      { "id": 2, "nilai" : 3, "nama" : "91%-95% guru mengolah hasil penilaian " },
      { "id": 3, "nilai" : 2, "nama" : "86%-90% guru mengolah hasil penilaian " },
      { "id": 4, "nilai" : 1, "nama" : "81%-85% guru mengolah hasil penilaian " },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 81% guru mengolah hasil penilaian " }
    ],
    "jawaban": 4
  },
  {
    "id": 5631,
    "bagian_id": 317,
    "nomor": 152,
    "nama": "Guru mengembalikan hasil pemeriksaan pekerjaan siswa disertai balikan/komentar yang mendidik. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "96%-100% guru mengembalikan hasil pemeriksaan pekerjaan siswa disertai balikan/komentar " },
      { "id": 2, "nilai" : 3, "nama" : "91%-95% guru mengembalikan hasil pemeriksaan pekerjaan siswa disertai balikan/koment " },
      { "id": 3, "nilai" : 2, "nama" : "86%-90% guru mengembalikan hasil pemeriksaan pekerjaan siswa disertai balikan/komentar " },
      { "id": 4, "nilai" : 1, "nama" : "81%-85% guru mengembalikan hasil pemeriksaan pekerjaan siswa disertai balikan/k " },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 81% guru mengembalikan hasil pemeriksaan pekerjaan siswa disertai balikan/komentar " }
    ],
    "jawaban": 4
  },
  {
    "id": 5632,
    "bagian_id": 317,
    "nomor": 153,
    "nama": "Guru memanfaatkan hasil penilaian untuk perbaikan pembelajaran. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "96%-100% guru memanfaatkan hasil penilaian untuk perbaikan pembelajaran " },
      { "id": 2, "nilai" : 3, "nama" : "91%-95% guru memanfaatkan hasil penilaian untuk perbaikan pembelajaran " },
      { "id": 3, "nilai" : 2, "nama" : "86%-90% guru memanfaatkan hasil penilaian untuk perbaikan pembelajaran " },
      { "id": 4, "nilai" : 1, "nama" : "81%-85% guru memanfaatkan hasil penilaian untuk perbaikan pembelajaran " },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 81% guru memanfaatkan hasil penilaian untuk perbaikan pembelajaran " }
    ],
    "jawaban": 4
  },
  {
    "id": 5641,
    "bagian_id": 317,
    "nomor": 162,
    "nama": "Sekolah/Madrasah menentukan kelulusan siswa sesuai kriteria kelulusan. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Menentukan kelulusan siswa sesuai kriteria kelulusan melalui rapat dewan guru " },
      { "id": 2, "nilai" : 3, "nama" : "Menentukan kelulusan siswa sesuai kriteria kelulusan melalui rapat dengan perwakilan guru-guru mata pelajaran" },
      { "id": 3, "nilai" : 2, "nama" : "Menentukan kelulusan siswa sesuai kriteria kelulusan melalui rapat dengan wali kelas saja " },
      { "id": 4, "nilai" : 1, "nama" : "Menentukan kelulusan siswa sesuai kriteria kelulusan melalui rapat pimpinan sekolah/madrasah " },
      { "id": 5, "nilai" : 0, "nama" : "Hanya ditetapkan oleh kepala sekolah/madrasah " }
    ],
    "jawaban": 4
  },
  {
    "id": 5633,
    "bagian_id": 317,
    "nomor": 154,
    "nama": "Guru melaporkan hasil penilaian mata pelajaran pada setiap akhir semester kepada kepala sekolah/madrasah dalam bentuk laporan prestasi belajar siswa. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "96%-100% guru melaporkan hasil penilaian prestasi belajar siswa kepada kepala sekolah/madrasah " },
      { "id": 2, "nilai" : 3, "nama" : "91%-95% guru melaporkan hasil penilaian prestasi belajar siswa kepada kepala sekolah/madrasah" },
      { "id": 3, "nilai" : 2, "nama" : "86%-90% guru melaporkan hasil peniaian prestasi belajar siswa kepada kepala sekolah/madrasah" },
      { "id": 4, "nilai" : 1, "nama" : "81%-85% guru melaporkan hasil penilaian prestasi belajar siswa kepada kepala sekolah/madrasah " },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 81% guru melaporkan hasil penilaian prestasi belajar siswa " }
    ],
    "jawaban": 4
  },
  {
    "id": 5642,
    "bagian_id": 317,
    "nomor": 163,
    "nama": "Sekolah/Madrasah menyerahkan surat keterangan hasil ujian nasional (SKHUN) setiap siswa yang mengikuti ujian nasional (UN). ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Menyerahkan SKHUN kepada siswa kurang dari 7 hari setelah blangko ijazah diterima dari Dinas Pendidikan/Kantor Kemenag " },
      { "id": 2, "nilai" : 3, "nama" : "Menyerahkan SKHUN kepada siswa antara 8-14 hari setelah blangko ijazah diterima dari Dinas Pendidikan/KantorKemenag" },
      { "id": 3, "nilai" : 2, "nama" : "Menyerahkan SKHUN kepada siswa antara 15-21 hari setelah blangko ijazah diterima dari Dinas Pendidikan/Kantor Kemenag" },
      { "id": 4, "nilai" : 1, "nama" : "Menyerahkan SKHUN kepada siswa antara 22-28 hari setelah blangko ijazah diterima dari Dinas Pendidikan/Kantor Kemenag" },
      { "id": 5, "nilai" : 0, "nama" : "Menyerahkan SKHUN kepada siswa lebih dari 28 hari setelah blangko ijazah diterima dari Dinas Pendidikan/Kantor Kemenag " }
    ],
    "jawaban": 4
  },
  {
    "id": 5644,
    "bagian_id": 317,
    "nomor": 165,
    "nama": "Sekolah/Madrasah menggunakan hasil ujian nasional (UN) SMP/MTs/ Paket B sebagai salah satu penentu penerimaan siswa baru. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Menggunakan hasil UN SMP/MTs/Paket B secara transparan sebagai penentu penerimaan siswa baru" },
      { "id": 2, "nilai" : 3, "nama" : "Menggunakan hasil UN SMP/MTs/Paket B dan seleksi masuk secara transparan sebagai penentu penerimaan siswa baru" },
      { "id": 3, "nilai" : 2, "nama" : "Menggunakan hasil UN SMP/MTs/Paket B dan seleksi masuk secara tidak transparan sebagai penentu penerimaan siswa baru " },
      { "id": 4, "nilai" : 1, "nama" : "Menggunakan hasil UN SMP/MTs/Paket B secara tidak transparan sebagai penentu penerimaan siswa baru " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak menggunakan UN SMP/MTs/Paket B sebagai penentu penerimaan siswa baru " }
    ],
    "jawaban": 4
  },
  {
    "id": 5634,
    "bagian_id": 317,
    "nomor": 155,
    "nama": "Guru menilai sikap dan kepribadian siswa sebagai informasi untuk menentukan nilai akhir semester. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "96% - 100% guru menilai sikap dan kepribadian siswa " },
      { "id": 2, "nilai" : 3, "nama" : "91% - 95% guru menilai sikap dan kepribadian siswa " },
      { "id": 3, "nilai" : 2, "nama" : "86% - 90% guru menilai sikap dan kepribadian siswa " },
      { "id": 4, "nilai" : 1, "nama" : "81% - 85% guru menilai sikap dan kepribadian siswa " },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 81% guru menilai sikap dan kepribadian siswa " }
    ],
    "jawaban": 4
  },
  {
    "id": 5635,
    "bagian_id": 317,
    "nomor": 156,
    "nama": "Sekolah/Madrasah mengkoordinasikan ulangan tengah semester dan ulangan akhir semester. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "mengkoordinasikan ulangan tengah dan akhir semester " },
      { "id": 2, "nilai" : 3, "nama" : "mengkoordinasikan ulangan akhir semester saja " },
      { "id": 3, "nilai" : 2, "nama" : "mengkoordinasikan ulangan tengah semester saja " },
      { "id": 4, "nilai" : 1, "nama" : "Tidak tentu " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak pernah " }
    ],
    "jawaban": 4
  },
  {
    "id": 5636,
    "bagian_id": 317,
    "nomor": 157,
    "nama": "Sekolah/Madrasah menentukan kriteria kenaikan kelas melalui rapat. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Menentukan kriteria melalui rapat dewan guru " },
      { "id": 2, "nilai" : 3, "nama" : "Menentukan kriteria melalui rapat dengan perwakilan guru- guru mata pelajaran " },
      { "id": 3, "nilai" : 2, "nama" : "Menentukan kriteria melalui rapat dengan wali kelas saja " },
      { "id": 4, "nilai" : 1, "nama" : "Menentukan kriteria melalui rapat pimpinan sekolah " },
      { "id": 5, "nilai" : 0, "nama" : "Hanya ditetapkan oleh kepala sekolah/madrasah " }
    ],
    "jawaban": 4
  },
  {
    "id": 5637,
    "bagian_id": 317,
    "nomor": 158,
    "nama": "Sekolah/Madrasah menentukan nilai akhir kelompok mata pelajaran agama dan akhlak mulia, kewarganegaraan dan kepribadian, iptek, estetika, serta jasmani, olahraga, dan kesehatan. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Menentukan nilai akhir melalui rapat dewan guru dengan mempertimbangkan hasil penilaian oleh guru " },
      { "id": 2, "nilai" : 3, "nama" : "Menentukan nilai akhir melalui rapat dewan guru tanpa mempertimbangkan hasil penilaian oleh guru " },
      { "id": 3, "nilai" : 2, "nama" : "Menentukan nilai akhir tanpa melalui rapat dewan guru tetapi mempertimbangkan hasil penilaian oleh guru " },
      { "id": 4, "nilai" : 1, "nama" : "Menentukan nilai akhir bersama wali kelas saja " },
      { "id": 5, "nilai" : 0, "nama" : "Hanya ditetapkan oleh kepala sekolah/madrasah " }
    ],
    "jawaban": 4
  },
  {
    "id": 5638,
    "bagian_id": 317,
    "nomor": 159,
    "nama": "Sekolah/Madrasah menyelenggarakan ujian sekolah/madrasah dan menentukan kelulusan siswa sesuai dengan kriteria yang berlaku. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Menentukan kelulusan lebih tinggi dari 1,1 atau lebih di atas kriteria yang berlaku " },
      { "id": 2, "nilai" : 3, "nama" : "Menentukan kelulusan 0,6-1,0 di atas kriteria yang berlaku " },
      { "id": 3, "nilai" : 2, "nama" : "Menentukan kelulusan 0,1-0,5 di atas kriteria yang berlaku " },
      { "id": 4, "nilai" : 1, "nama" : "Menentukan kelulusan sama dengan kriteria yang berlaku " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak menyelenggarakan ujian sekolah/madrasah " }
    ],
    "jawaban": 4
  },
  {
    "id": 5639,
    "bagian_id": 317,
    "nomor": 160,
    "nama": "Sekolah/Madrasah melaporkan hasil penilaian setiap akhir semester kepada orang tua/wali siswa dalam bentuk buku laporan hasil belajar siswa. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Diawali dengan penjelasan umum kepala sekolah/madrasah dilanjutkan penjelasan wali kelas dengan masing-masing orang tua/wali siswa dan siswa yang bersangkutan " },
      { "id": 2, "nilai" : 3, "nama" : "Diawali dengan penjelasan umum kepala sekolah/madrasah dilanjutkan penjelasan wali kelas dengan masing-masing orang tua/wali siswa tanpa siswa yang bersangkutan" },
      { "id": 3, "nilai" : 2, "nama" : "Diawali dengan penjelasan umum kepala sekolah/madrasah tetapi langsung dari wali kelas ke masing-masing orang tua/wali siswa dengan siswa yang bersangkutan " },
      { "id": 4, "nilai" : 1, "nama" : "Tanpa diawali dengan penjelasan umum kepala sekolah/ madrasah tetapi langsung dari wali kelas ke masing-masing orang tua/wali siswa tanpa siswa yang bersangkutan " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melaporkan hasil penilaian langsung kepada siswa " }
    ],
    "jawaban": 4
  },
  {
    "id": 5640,
    "bagian_id": 317,
    "nomor": 161,
    "nama": "Sekolah/Madrasah melaporkan pencapaian hasil belajar tingkat satuan pendidikan kepada Dinas Pendidikan Kabupaten/Kota atau Kantor Kemenag. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melaporkan pencapaian hasil belajar kurang dari 1 bulan setelah akhir semester " },
      { "id": 2, "nilai" : 3, "nama" : "Melaporkan pencapaian hasil belajar 1-2 bulan setelah akhir semester " },
      { "id": 3, "nilai" : 2, "nama" : "Melaporkan pencapaian hasil belajar 2-3 bulan setelah akhir semester " },
      { "id": 4, "nilai" : 1, "nama" : "Melaporkan pencapaian hasil belajar 3-4 bulan setelah akhir semester " },
      { "id": 5, "nilai" : 0, "nama" : "Melaporkan pencapaian hasil belajar lebih dari 4 bulan setelah akhir semester " }
    ],
    "jawaban": 4
  },
  {
    "id": 5627,
    "bagian_id": 317,
    "nomor": 148,
    "nama": "Sekolah/Madrasah melaksanakan ujian melalui mekanisme dan prosedur penilaian yang ditetapkan. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "96%-100% mata pelajaran yang diujikan dilakukan melalui mekanisme yang ditetapkan " },
      { "id": 2, "nilai" : 3, "nama" : "91%-95% mata pelajaran yang diujikan dilakukan melalui mekanisme yang ditetapkan " },
      { "id": 3, "nilai" : 2, "nama" : "86%-90% mata pelajaran yang diujikan dilakukan melalui mekanisme yang ditetapkan " },
      { "id": 4, "nilai" : 1, "nama" : "81%-85% mata pelajaran yang diujikan dilakukan melalui mekanisme yang ditetapkan " },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 81% mata pelajaran yang diujikan dilakukan melalui mekanisme yang ditetapkan " }
    ],
    "jawaban": 4
  },
  {
    "id": 5626,
    "bagian_id": 317,
    "nomor": 147,
    "nama": "Guru memberikan penjelasan kriteria mengenai mekanisme, prosedur serta instrumen penilaian hasil belajar peserta didik. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "96%-100% guru menginformasikan kriteria penilaian hasil belajar peserta didik. " },
      { "id": 2, "nilai" : 3, "nama" : "91%-95% guru menginformasikan kriteria penilaian hasil belajar peserta didik. " },
      { "id": 3, "nilai" : 2, "nama" : "86%-90% guru menginformasikan kriteria penilaian hasil belajar peserta didik. " },
      { "id": 4, "nilai" : 1, "nama" : "81%-85% guru menginformasikan kriteria penilaian hasil belajar peserta didik. " },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 81% guru menginformasikan kriteria penilaian hasil belajar peserta didik. " }
    ],
    "jawaban": 4
  },
  {
    "id": 5625,
    "bagian_id": 316,
    "nomor": 146,
    "nama": "Sekolah/Madrasah membuat laporan pertanggungjawaban pengelolaan keuangan dan menyampaikannya kepada pemerintah atau yayasan. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Membuat laporan pertanggungjawaban pengelolaan keuangan dan menyampaikannya kepada pemerintah atau yayasan selama 4 tahun terakhir " },
      { "id": 2, "nilai" : 3, "nama" : "Membuat laporan pertanggungjawaban pengelolaan keuangan dan menyampaikannya kepada pemerintah atau yayasan selama 3 tahun terakhir " },
      { "id": 3, "nilai" : 2, "nama" : "Membuat laporan pertanggungjawaban pengelolaan keuangan dan menyampaikannya kepada pemerintah atau yayasan selama 2 tahun terakhir " },
      { "id": 4, "nilai" : 1, "nama" : "Membuat laporan pertanggungjawaban pengelolaan keuangan dan menyampaikannya kepada pemerintah atau yayasan selama 1 tahun terakhir " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak membuat laporan pertanggungjawaban pengelolaan keuangan " }
    ],
    "jawaban": 4
  },
  {
    "id": 5602,
    "bagian_id": 316,
    "nomor": 123,
    "nama": "Sekolah/Madrasah memiliki catatan tahunan berupa dokumen investasi sarana dan prasarana secara menyeluruh. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki catatan tahunan berupa dokumen investasi sarana dan prasarana secara menyeluruh selama 3 tahun terakhir " },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki catatan tahunan berupa dokumen investasi sarana dan prasarana secara menyeluruh hanya selama 2 tahun terakhir " },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki catatan tahunan berupa dokumen investasi sarana dan prasarana secara menyeluruh hanya selama 1 tahun terakhir " },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki catatan tahunan berupa dokumen investasi sarana dan prasarana secara tidak menyeluruh hanya selama 1 tahun terakhir " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki catatan tahunan berupa dokumen investasi sarana dan prasarana " }
    ],
    "jawaban": 4
  },
  {
    "id": 5643,
    "bagian_id": 317,
    "nomor": 164,
    "nama": "Sekolah/Madrasah menyerahkan ijazah kepada setiap siswa yang telah lulus. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Menyerahkan ijazah kurang dari 1 minggu setelah blangko ijazah diterima dari Dinas Pendidikan/Kantor Kemenag " },
      { "id": 2, "nilai" : 3, "nama" : "Menyerahkan ijazah 1-2 minggu setelah blangko ijazah diterima dari Dinas Pendidikan/Kantor Kemenag " },
      { "id": 3, "nilai" : 2, "nama" : "Menyerahkan ijazah 2-3 minggu setelah blangko ijazah diterima dari Dinas Pendidikan/Kantor Kemenag " },
      { "id": 4, "nilai" : 1, "nama" : "Menyerahkan ijazah 3-4 minggu setelah blangko ijazah diterima dari Dinas Pendidikan/Kantor Kemenag " },
      { "id": 5, "nilai" : 0, "nama" : "Menyerahkan ijazah lebih dari 4 minggu setelah blangko ijazah diterima dari Dinas Pendidikan/Kantor Kemenag " }
    ],
    "jawaban": 4
  },
  {
    "id": 5603,
    "bagian_id": 316,
    "nomor": 124,
    "nama": "Sekolah/Madrasah membelanjakan biaya untuk pengembangan pendidik dan tenaga kependidikan berdasarkan Rencana Kerja dan Anggaran Sekolah/Madrasah (RKA-S/M). ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Membelanjakan biaya sebanyak 96%-100% dari anggaran pengembangan pendidik dan tenaga kependidikan dalam RKA- S/M " },
      { "id": 2, "nilai" : 3, "nama" : "Membelanjakan biaya sebanyak 91%-95% dari anggaran pengembangan pendidik dan tenaga kependidikan dalam RKA- S/M " },
      { "id": 3, "nilai" : 2, "nama" : "Membelanjakan biaya sebanyak 86%-90% dari anggaran pengembangan pendidik dan tenaga kependidikan dalam RKA- S/M " },
      { "id": 4, "nilai" : 1, "nama" : "Membelanjakan biaya sebanyak 81%-85% dari anggaran pengembangan pendidik dan tenaga kependidikan dalam RKA- S/M " },
      { "id": 5, "nilai" : 0, "nama" : "Membelanjakan biaya sebanyak kurang dari 81% dari anggaran pengembangan pendidik dan tenaga kependidikan dalam RKA-S/M " }
    ],
    "jawaban": 4
  },
  {
    "id": 5604,
    "bagian_id": 316,
    "nomor": 125,
    "nama": "Sekolah/Madrasah memiliki modal kerja sebesar yang tertuang dalam RKA-S/M membiayai seluruh kebutuhan pendidikan. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sekolah/Madrasah dapat merealisasikan 96%-100% modal kerja " },
      { "id": 2, "nilai" : 3, "nama" : "Sekolah/Madrasah dapat merealisasikan 91%-95% modal kerja " },
      { "id": 3, "nilai" : 2, "nama" : "Sekolah/Madrasah dapat merealisasikan 86%-90% modal kerja " },
      { "id": 4, "nilai" : 1, "nama" : "Sekolah/Madrasah dapat merealisasikan 81%-85% modal kerja " },
      { "id": 5, "nilai" : 0, "nama" : "Sekolah/Madrasah dapat merealisasikan kurang dari 81% modal kerja " }
    ],
    "jawaban": 4
  },
  {
    "id": 5605,
    "bagian_id": 316,
    "nomor": 126,
    "nama": "Sekolah/Madrasah membayar gaji, insentif, transportasi, dan tunjangan lain bagi guru. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Membelanjakan dana serta tunjangan guru sebanyak 96%-100% dari anggaran gaji serta tunjangan guru" },
      { "id": 2, "nilai" : 3, "nama" : "Membelanjakan dana serta tunjangan guru sebanyak 91%-95% dari anggaran gaji serta tunjangan guru" },
      { "id": 3, "nilai" : 2, "nama" : "Membelanjakan dana serta tunjangan guru sebanyak 86%-90% dari anggaran gaji serta tunjangan guru" },
      { "id": 4, "nilai" : 1, "nama" : "Membelanjakan dana serta tunjangan guru sebanyak 81%-85% dari anggaran gaji serta tunjangan guru" },
      { "id": 5, "nilai" : 0, "nama" : "Membelanjakan dana sebanyak kurang 81% dari anggaran gaji serta tunjangan guru" }
    ],
    "jawaban": 4
  },
  {
    "id": 5606,
    "bagian_id": 316,
    "nomor": 127,
    "nama": "Sekolah/Madrasah membayar gaji, insentif, transportasi, dan tunjangan lain tenaga kependidikan. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Membelanjakan dana sebanyak 96%-100% dari anggaran gaji serta tunjangan tenaga kependidikan " },
      { "id": 2, "nilai" : 3, "nama" : "Membelanjakan dana sebanyak 91%-95% dari anggaran gaji serta tunjangan tenaga kependidikan " },
      { "id": 3, "nilai" : 2, "nama" : "Membelanjakan dana sebanyak 86%-90% dari anggaran gaji serta tunjangan tenaga kependidikan " },
      { "id": 4, "nilai" : 1, "nama" : "Membelanjakan dana sebanyak 81%-85% dari anggaran gaji serta tunjangan tenaga kependidikan " },
      { "id": 5, "nilai" : 0, "nama" : "Membelanjakan dana sebanyak kurang 81% dari anggaran gaji serta tunjangan tenaga kependidikan " }
    ],
    "jawaban": 4
  },
  {
    "id": 5607,
    "bagian_id": 316,
    "nomor": 128,
    "nama": "Sekolah/Madrasah membelanjakan biaya untuk menunjang pelaksanaan kegiatan pembelajaran selama tiga tahun terakhir. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Membelanjakan biaya sebanyak 96%-100% dari anggaran penunjang pelaksanaan kegiatan pembelajaran " },
      { "id": 2, "nilai" : 3, "nama" : "Membelanjakan biaya sebanyak 91%-95% dari anggaran penunjang pelaksanaan kegiatan pembelajaran " },
      { "id": 3, "nilai" : 2, "nama" : "Membelanjakan biaya sebanyak 86%-90% dari anggaran penunjang pelaksanaan kegiatan pembelajaran " },
      { "id": 4, "nilai" : 1, "nama" : "Membelanjakan biaya sebanyak 81%-85% dari anggaran penunjang pelaksanaan kegiatan pembelajaran " },
      { "id": 5, "nilai" : 0, "nama" : "Membelanjakan biaya sebanyak kurang dari 81% dari anggaran penunjang pelaksanaan kegiatan pembelajaran " }
    ],
    "jawaban": 4
  },
  {
    "id": 5608,
    "bagian_id": 316,
    "nomor": 129,
    "nama": "Sekolah/Madrasah membelanjakan dana untuk kegiatan kesiswaan selama satu tahun terakhir. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Membelanjakan dana sebanyak 96%-100% dari anggaran kegiatan kesiswaan " },
      { "id": 2, "nilai" : 3, "nama" : "Membelanjakan dana sebanyak 91%-95% dari anggaran kegiatan kesiswaan " },
      { "id": 3, "nilai" : 2, "nama" : "Membelanjakan dana sebanyak 86%-90% dari anggaran kegiatan kesiswaan " },
      { "id": 4, "nilai" : 1, "nama" : "Membelanjakan dana sebanyak 81%-85% dari anggaran kegiatan kesiswaan " },
      { "id": 5, "nilai" : 0, "nama" : "Membelanjakan dana sebanyak kurang dari 81% dari anggaran kegiatan kesiswaan " }
    ],
    "jawaban": 4
  },
  {
    "id": 5609,
    "bagian_id": 316,
    "nomor": 130,
    "nama": "Sekolah/Madrasah membelanjakan biaya pengadaan alat tulis untuk kegiatan pembelajaran selama satu tahun terakhir. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Membelanjakan biaya sebanyak 96%-100% dari anggaran pengadaan alat tulis " },
      { "id": 2, "nilai" : 3, "nama" : "Membelanjakan biaya sebanyak 91%-95% dari anggaran pengadaan alat tulis " },
      { "id": 3, "nilai" : 2, "nama" : "Membelanjakan biaya sebanyak 86%-90% dari anggaran pengadaan alat tulis " },
      { "id": 4, "nilai" : 1, "nama" : "Membelanjakan biaya sebanyak 81%-85% dari anggaran pengadaan alat tulis " },
      { "id": 5, "nilai" : 0, "nama" : "membelanjakan biaya sebanyak kurang dari 81% dari anggaran pengadaan alat tulis " }
    ],
    "jawaban": 4
  },
  {
    "id": 5610,
    "bagian_id": 316,
    "nomor": 131,
    "nama": "Sekolah/Madrasah membelanjakan biaya pengadaan bahan dan alat habis pakai untuk kegiatan pembelajaran selama satu tahun terakhir. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Membelanjakan biaya sebanyak 96%-100% dari anggaran pengadaan bahan dan alat habis pakai " },
      { "id": 2, "nilai" : 3, "nama" : "Membelanjakan biaya sebanyak 91%-95% dari anggaran pengadaan bahan dan alat habis pakai " },
      { "id": 3, "nilai" : 2, "nama" : "Membelanjakan biaya sebanyak 86%-90% dari anggaran pengadaan bahan dan alat habis pakai " },
      { "id": 4, "nilai" : 1, "nama" : "Membelanjakan biaya sebanyak 81%-85% dari anggaran pengadaan bahan dan alat habis pakai " },
      { "id": 5, "nilai" : 0, "nama" : "Membelanjakan biaya sebanyak kurang dari 81% dari anggaran pengadaan bahan dan alat habis pakai " }
    ],
    "jawaban": 4
  },
  {
    "id": 5611,
    "bagian_id": 316,
    "nomor": 132,
    "nama": "Sekolah/Madrasah mengalokasikan biaya kegiatan rapat selama satu tahun terakhir. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Membelanjakan biaya sebanyak 96%-100% dari anggaran pengadaan kegiatan rapat " },
      { "id": 2, "nilai" : 3, "nama" : "Membelanjakan biaya sebanyak 91%-95% dari anggaran pengadaan kegiatan rapat " },
      { "id": 3, "nilai" : 2, "nama" : "Membelanjakan biaya sebanyak 86%-90% dari anggaran pengadaan kegiatan rapat " },
      { "id": 4, "nilai" : 1, "nama" : "Membelanjakan biaya sebanyak 81%-85% dari anggaran pengadaan kegiatan rapat " },
      { "id": 5, "nilai" : 0, "nama" : "Membelanjakan biaya sebanyak kurang 81% dari anggaran pengadaan kegiatan rapat " }
    ],
    "jawaban": 4
  },
  {
    "id": 5612,
    "bagian_id": 316,
    "nomor": 133,
    "nama": "Sekolah/Madrasah membelanjakan biaya transportasi dan perjalanan dinas selama satu tahun terakhir. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Membelanjakan biaya 96%-100% dari anggaran pengadaan transportasi dan perjalanan dinas " },
      { "id": 2, "nilai" : 3, "nama" : "Membelanjakan biaya 91%-95% dari anggaran pengadaan transportasi dan perjalanan dinas " },
      { "id": 3, "nilai" : 2, "nama" : "Membelanjakan biaya 86%-90% dari anggaran pengadaan transportasi dan perjalanan dinas " },
      { "id": 4, "nilai" : 1, "nama" : "Membelanjakan biaya 81%-85% dari anggaran pengadaan transportasi dan perjalanan dinas " },
      { "id": 5, "nilai" : 0, "nama" : "Membelanjakan biaya di bawah 81% dari anggaran pengadaan transportasi dan perjalanan dinas " }
    ],
    "jawaban": 4
  },
  {
    "id": 5613,
    "bagian_id": 316,
    "nomor": 134,
    "nama": "Sekolah/Madrasah membelanjakan biaya penggandaan soal-soal ulangan/ujian selama satu tahun terakhir. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Membelanjakan biaya sebanyak 96%-100% dari anggaran penggandaan soal-soal ulangan/ujian " },
      { "id": 2, "nilai" : 3, "nama" : "Membelanjakan biaya sebanyak 91%-95% dari anggaran penggandaan soal-soal ulangan/ujian " },
      { "id": 3, "nilai" : 2, "nama" : "Membelanjakan biaya sebanyak 86%-90% dari anggaran penggandaan soal-soal ulangan/ujian " },
      { "id": 4, "nilai" : 1, "nama" : "Membelanjakan biaya sebanyak 81%-85% dari anggaran penggandaan soal-soal ulangan/ujian " },
      { "id": 5, "nilai" : 0, "nama" : "Membelanjakan biaya sebanyak kurang 81% dari anggaran penggandaan soal-soal ulangan/ujian " }
    ],
    "jawaban": 4
  },
  {
    "id": 5614,
    "bagian_id": 316,
    "nomor": 135,
    "nama": "Sekolah/Madrasah membelanjakan biaya pengadaan daya dan jasa selama satu tahun terakhir. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Membelanjakan biaya 96%-100% dari anggaran pengadaan daya dan jasa " },
      { "id": 2, "nilai" : 3, "nama" : "Membelanjakan biaya 91%-95% dari anggaran pengadaan daya dan jasa " },
      { "id": 3, "nilai" : 2, "nama" : "Membelanjakan biaya 86%-90% dari anggaran pengadaan daya dan jasa " },
      { "id": 4, "nilai" : 1, "nama" : "Membelanjakan biaya 81%-85% dari anggaran pengadaan daya dan jasa " },
      { "id": 5, "nilai" : 0, "nama" : "Membelanjakan biaya kurang 81% dari anggaran pengadaan daya dan jasa " }
    ],
    "jawaban": 4
  },
  {
    "id": 5615,
    "bagian_id": 316,
    "nomor": 136,
    "nama": "Sekolah/Madrasah membelanjakan anggaran untuk mendukung kegiatan operasional tidak langsung selama tiga tahun terakhir. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Membelanjakan biaya sebanyak 96%-100% untuk mendukung kegiatan operasional tidak langsung " },
      { "id": 2, "nilai" : 3, "nama" : "Membelanjakan biaya sebanyak 91%-95% untuk mendukung kegiatan operasional tidak langsung " },
      { "id": 3, "nilai" : 2, "nama" : "Membelanjakan biaya sebanyak 86%-90% untuk mendukung kegiatan operasional tidak langsung " },
      { "id": 4, "nilai" : 1, "nama" : "Membelanjakan biaya sebanyak 81%-85% untuk mendukung kegiatan operasional tidak langsung " },
      { "id": 5, "nilai" : 0, "nama" : "Membelanjakan biaya sebanyak kurang 81% untuk mendukung kegiatan operasional tidak langsung " }
    ],
    "jawaban": 4
  },
  {
    "id": 5616,
    "bagian_id": 316,
    "nomor": 137,
    "nama": "Sumbangan pendidikan atau dana dari masyarakat/pemerintah dikelola secara sistematis, transparan, efisien, akuntabel, dan dilaporkan kepada komite sekolah/madrasah atau yayasan. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Dikelola secara sistematis, transparan, efisien, dan akuntabel serta dilaporkan kepada komite sekolah/madrasah atau yayasan " },
      { "id": 2, "nilai" : 3, "nama" : "Dikelola secara sistematis, transparan, efisien, akuntabel, tetapi tidak dilaporkan kepada komite sekolah/madrasah atau yayasan " },
      { "id": 3, "nilai" : 2, "nama" : "Dikelola secara sistematis, transparan, dan efisien tetapi tidak akuntabel dan tidak dilaporkan kepada komite sekolah/madrasah atau yayasan " },
      { "id": 4, "nilai" : 1, "nama" : "Dikelola secara sistematis dan transparan, tetapi tidak efisien, tidak akuntabel, dan tidak dilaporkan kepada komite sekolah/madrasah atau yayasan " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak dikelola secara sistematis, transparan, efisien, dan akuntabel serta dilaporkan kepada komite sekolah/madrasah atau yayasan " }
    ],
    "jawaban": 4
  },
  {
    "id": 5617,
    "bagian_id": 316,
    "nomor": 138,
    "nama": "Penetapan besarnya uang sekolah/madrasah mempertimbangkan kemampuan ekonomi orangtua siswa. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "91%-100% siswa dari keluarga tidak mampu mendapatkan keringanan uang sekolah/madrasah " },
      { "id": 2, "nilai" : 3, "nama" : "81%-90% siswa dari keluarga tidak mampu mendapatkan keringanan uang sekolah/madrasah " },
      { "id": 3, "nilai" : 2, "nama" : "71%-80% siswa dari keluarga tidak mampu mendapatkan keringanan uang sekolah/madrasah " },
      { "id": 4, "nilai" : 1, "nama" : "61%-70% siswa dari keluarga tidak mampu mendapatkan keringanan " },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 61% siswa dari keluarga tidak mampu mendapatkan keringanan uang sekolah/madrasah " }
    ],
    "jawaban": 4
  },
  {
    "id": 5618,
    "bagian_id": 316,
    "nomor": 139,
    "nama": "Siswa dikenakan biaya pendaftaran ulang pada setiap awal tahun pelajaran. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Tidak ada siswa dikenakan biaya pendaftaran ulang " },
      { "id": 2, "nilai" : 3, "nama" : "1%-25% siswa dikenakan biaya pendaftaran ulang " },
      { "id": 3, "nilai" : 2, "nama" : "26%-50% siswa dikenakan biaya pendaftaran ulang " },
      { "id": 4, "nilai" : 1, "nama" : "51%-75% siswa dikenakan biaya pendaftaran ulang " },
      { "id": 5, "nilai" : 0, "nama" : "76%-100% siswa dikenakan biaya pendaftaran ulang " }
    ],
    "jawaban": 4
  },
  {
    "id": 5619,
    "bagian_id": 316,
    "nomor": 140,
    "nama": "Sekolah/Madrasah memberikan bantuan untuk siswa yang kurang mampu secara ekonomi. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memberikan bantuan pada 91%-100% siswa kurang mampu " },
      { "id": 2, "nilai" : 3, "nama" : "Memberikan bantuan pada 81%-90% siswa kurang mampu " },
      { "id": 3, "nilai" : 2, "nama" : "Memberikan bantuan pada 71%-80% siswa kurang mampu " },
      { "id": 4, "nilai" : 1, "nama" : "Memberikan bantuan pada 61%-70% siswa kurang mampu " },
      { "id": 5, "nilai" : 0, "nama" : "Memberikan bantuan pada kurang dari 61% siswa kurang mampu " }
    ],
    "jawaban": 4
  },
  {
    "id": 5620,
    "bagian_id": 316,
    "nomor": 141,
    "nama": "Sekolah/Madrasah melakukan pungutan biaya personal lain di samping uang sekolah/madrasah. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Tidak melakukan pungutan biaya personal lain di samping uang sekolah/madrasah " },
      { "id": 2, "nilai" : 3, "nama" : "Melakukan 1 jenis pungutan biaya personal lain di samping uang sekolah/madrasah " },
      { "id": 3, "nilai" : 2, "nama" : "Melakukan 2 jenis pungutan biaya personal lain di samping uang sekolah/madrasah " },
      { "id": 4, "nilai" : 1, "nama" : "Melakukan 3 jenis pungutan biaya personal lain di samping uang sekolah/madrasah " },
      { "id": 5, "nilai" : 0, "nama" : "Melakukan 4 jenis atau lebih pungutan biaya personal lain di samping uang sekolah/madrasah " }
    ],
    "jawaban": 4
  },
  {
    "id": 5621,
    "bagian_id": 316,
    "nomor": 142,
    "nama": "Pengambilan keputusan dalam penetapan dana dari masyarakat sebagai biaya personal dilakukan dengan melibatkan berbagai pihak terkait. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melibatkan penyelenggara pendidikan/yayasan, kepala sekolah/madrasah, komite sekolah/madrasah, perwakilan guru, dan perwakilan tenaga kependidikan " },
      { "id": 2, "nilai" : 3, "nama" : "Melibatkan penyelenggara pendidikan/yayasan, kepala sekolah/madrasah, komite sekolah/madrasah, dan perwakilan guru " },
      { "id": 3, "nilai" : 2, "nama" : "Melibatkan penyelenggara pendidikan/yayasan, kepala sekolah/madrasah, dan komite sekolah/madrasah " },
      { "id": 4, "nilai" : 1, "nama" : "Melibatkan penyelenggara pendidikan/yayasan dan kepala sekolah/madrasah " },
      { "id": 5, "nilai" : 0, "nama" : "Hanya melibatkan kepala sekolah/madrasah " }
    ],
    "jawaban": 4
  },
  {
    "id": 5622,
    "bagian_id": 316,
    "nomor": 143,
    "nama": "Pengelolaan dana dari masyarakat sebagai biaya personal dilakukan secara transparan, efisien, dan akuntabel sesuai RKA-S/M. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "96%-100% dana dari masyarakat sesuai RKA-S/M " },
      { "id": 2, "nilai" : 3, "nama" : "91%-95% dana dari masyarakat sesuai RKA-S/M " },
      { "id": 3, "nilai" : 2, "nama" : "86%-90% dana dari masyarakat sesuai RKA-S/M " },
      { "id": 4, "nilai" : 1, "nama" : "81%-85% dana dari masyarakat sesuai RKA-S/M " },
      { "id": 5, "nilai" : 0, "nama" : "Kurang 81% dana dari masyarakat sesuai RKA-S/M " }
    ],
    "jawaban": 4
  },
  {
    "id": 5623,
    "bagian_id": 316,
    "nomor": 144,
    "nama": "Sekolah/Madrasah memiliki pedoman pengelolaan keuangan sebagai dasar dalam penyusunan RKA-S/M. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki pedoman pengelolaan keuangan selama 4 tahun terakhir " },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki pedoman pengelolaan keuangan selama 3 tahun terakhir " },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki pedoman pengelolaan keuangan selama 2 tahun terakhir " },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki pedoman pengelolaan keuangan selama 1 tahun terakhir " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki pedoman pengelolaan keuangan " }
    ],
    "jawaban": 4
  },
  {
    "id": 5480,
    "bagian_id": 310,
    "nomor": 1,
    "nama": "Sekolah/Madrasah melaksanakan kurikulum berdasarkan muatan Kurikulum Tingkat Satuan Pendidikan (KTSP). ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melaksanakan kurikulum berdasarkan 9 muatan KTSP " },
      { "id": 2, "nilai" : 3, "nama" : "Melaksanakan kurikulum berdasarkan 8 muatan KTSP " },
      { "id": 3, "nilai" : 2, "nama" : "Melaksanakan kurikulum berdasarkan 7 muatan KTSP " },
      { "id": 4, "nilai" : 1, "nama" : "Melaksanakan kurikulum berdasarkan 6 atau kurang muatan KTSP " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melaksanakan KTSP " }
    ],
    "jawaban": 4
  },
  {
    "id": 5481,
    "bagian_id": 310,
    "nomor": 2,
    "nama": "Sekolah/Madrasah mengembangkan kurikulum dengan melibatkan Tim Pengembang Kurikulum berpedoman pada panduan penyusunan kurikulum yang disusun oleh BSNP. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Bersama seluruh guru mata pelajaran, guru BK, kepala sekolah/madrasah, pengawas sekolah/madrasah, narasumber, komite sekolah/madrasah, dan/atau penyelenggara lembaga pendidikan " },
      { "id": 2, "nilai" : 3, "nama" : "Bersama guru mata pelajaran, guru BK, kepala sekolah/madrasah, pengawas sekolah/madrasah, dan narasumber " },
      { "id": 3, "nilai" : 2, "nama" : "Bersama guru mata pelajaran, guru BK, kepala sekolah/madrasah, dan pengawas sekolah/madrasah " },
      { "id": 4, "nilai" : 1, "nama" : "Bersama guru mata pelajaran, guru BK, dan kepala sekolah/madrasah " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melakukan pengembangan kurikulum " }
    ],
    "jawaban": 4
  },
  {
    "id": 5482,
    "bagian_id": 310,
    "nomor": 3,
    "nama": "Sekolah/Madrasah mengembangkan kurikulum dengan menggunakan 7 (tujuah) prinsip pengelolaan KTSP. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Menggunakan 7 prinsip pengelolaan KTSP " },
      { "id": 2, "nilai" : 3, "nama" : "Menggunakan 5 _ 6 prinsip pengelolaan KTSP " },
      { "id": 3, "nilai" : 2, "nama" : "Menggunakan 3-4 prinsip pengelolaan KTSP " },
      { "id": 4, "nilai" : 1, "nama" : "Menggunakan 1-2 prinsip pengelolaan KTSP " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak menggunakan prinsip pengelolaan kurikulum " }
    ],
    "jawaban": 4
  },
  {
    "id": 5483,
    "bagian_id": 310,
    "nomor": 4,
    "nama": "Sekolah/Madrasah melaksanakan pengembangan kurikulum melalui mekanisme penyusunan KTSP. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Mekanisme penyusunan kurikulum dilakukan melalui 7 kegiatan pokok " },
      { "id": 2, "nilai" : 3, "nama" : "Mekanisme penyusunan kurikulum dilakukan melalui 5-6 kegiatan pokok " },
      { "id": 3, "nilai" : 2, "nama" : "Mekanisme penyusunan kurikulum dilakukan melalui 3-4 kegiatan pokok " },
      { "id": 4, "nilai" : 1, "nama" : "Mekanisme penyusunan kurikulum dilakukan melalui 1-2 kegiatan pokok " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak penyusunan kurikulum " }
    ],
    "jawaban": 4
  },
  {
    "id": 5484,
    "bagian_id": 310,
    "nomor": 5,
    "nama": "Sekolah/Madrasah menyusun silabus mata pelajaran muatan lokal dengan melibatkan berbagai pihak. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melibatkan kepala sekolah/madrasah, guru, komite sekolah/ madrasah atau penyelenggara lembaga pendidikan, dinas pendidikan, dan instansi terkait di daerah " },
      { "id": 2, "nilai" : 3, "nama" : "Melibatkan kepala sekolah/madrasah, guru, komite sekolah/ madrasah atau penyelenggara lembaga pendidikan, dan dinas pendidikan" },
      { "id": 3, "nilai" : 2, "nama" : "Melibatkan kepala sekolah/madrasah, guru dan komite sekolah/ madrasah atau penyelenggara lembaga pendidikan " },
      { "id": 4, "nilai" : 1, "nama" : "Melibatkan kepala sekolah/madrasah dan guru " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak menyusun silabus mata pelajaran muatan lokal " }
    ],
    "jawaban": 4
  },
  {
    "id": 5485,
    "bagian_id": 310,
    "nomor": 6,
    "nama": "Sekolah/Madrasah melaksanakan program pengembangan diri dalam bentuk kegiatan ekstrakurikuler. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melaksanakan 7 atau lebih jenis kegiatan ekstrakurikuler " },
      { "id": 2, "nilai" : 3, "nama" : "Melaksanakan 5-6 kegiatan ekstrakurikuler " },
      { "id": 3, "nilai" : 2, "nama" : "Melaksanakan 3-4 kegiatan ekstrakurikuler " },
      { "id": 4, "nilai" : 1, "nama" : "Melaksanakan 1-2 kegiatan ekstrakurikuler " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melaksanakan kegiatan ekstrakurikuler " }
    ],
    "jawaban": 4
  },
  {
    "id": 5486,
    "bagian_id": 310,
    "nomor": 7,
    "nama": "Sekolah/Madrasah melaksanakan program pengembangan diri dalam bentuk kegiatan layanan konseling. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melaksanakan 4 atau lebih kegiatan layanan konseling " },
      { "id": 2, "nilai" : 3, "nama" : "Melaksanakan 3 kegiatan layanan konseling " },
      { "id": 3, "nilai" : 2, "nama" : "Melaksanakan 2 kegiatan layanan konseling " },
      { "id": 4, "nilai" : 1, "nama" : "Melaksanakan 1 kegiatan layanan konseling " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melaksanakan kegiatan layanan konseling " }
    ],
    "jawaban": 4
  },
  {
    "id": 5487,
    "bagian_id": 310,
    "nomor": 8,
    "nama": "Sekolah/Madrasah menjabarkan Standar Kompetensi (SK) dan Kompetensi Dasar (KD) ke dalam indikator-indikator untuk setiap mata pelajaran. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "13 atau lebih mata pelajaran telah sesuai antara SK, KD, dan indikator-indikatornya " },
      { "id": 2, "nilai" : 3, "nama" : "9-12 mata pelajaran telah sesuai antara SK, KD, dan indikator- indikatornya " },
      { "id": 3, "nilai" : 2, "nama" : "5-8 mata pelajaran telah sesuai antara SK, KD, dan indikator- indikatornya " },
      { "id": 4, "nilai" : 1, "nama" : "1-4 mata pelajaran telah sesuai antara SK, KD, dan indikator- indikatornya " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak ada mata pelajaran yang sesuai antara SK, KD, dan indikator-indikatornya " }
    ],
    "jawaban": 4
  },
  {
    "id": 5488,
    "bagian_id": 310,
    "nomor": 9,
    "nama": "Sekolah/Madrasah menerapkan kegiatan pembelajaran sesuai dengan ketentuan beban belajar yang tertuang pada lampiran Permendiknas Nomor 22 Tahun 2006. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Satu jam pembelajaran tatap muka selama 45 menit, jumlah jam pembelajaran per minggu minimal 38 jam, dan jumlah minggu efektif per tahun minimal 34 minggu " },
      { "id": 2, "nilai" : 3, "nama" : "Satu jam pembelajaran tatap muka selama 45 menit, jumlah jam pembelajaran per minggu minimal 38 jam, dan jumlah minggu efektif per tahun kurang dari 34 minggu " },
      { "id": 3, "nilai" : 2, "nama" : "Satu jam pembelajaran tatap muka selama 45 menit, jumlah jam pembelajaran per minggu kurang dari 38 jam, dan jumlah minggu efektif per tahun kurang dari 34 minggu " },
      { "id": 4, "nilai" : 1, "nama" : "Satu jam pembelajaran tatap muka kurang dari 45 menit, jumlah jam pembelajaran per minggu kurang dari 38 jam, dan jumlah minggu efektif per tahun kurang dari 34 minggu " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak menerapkan ketentuan beban belajar sesuai dengan Permendiknas " }
    ],
    "jawaban": 4
  },
  {
    "id": 5489,
    "bagian_id": 310,
    "nomor": 10,
    "nama": "Guru mata pelajaran memberikan penugasan terstruktur kepada siswa maksimal 60% dari alokasi waktu tiap mata pelajaran. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "91%-100% guru mata pelajaran memberikan penugasan terstruktur kepada siswa " },
      { "id": 2, "nilai" : 3, "nama" : "81%-90% guru mata pelajaran memberikan penugasan terstruktur kepada siswa " },
      { "id": 3, "nilai" : 2, "nama" : "71%-80% guru mata pelajaran memberikan penugasan terstruktur kepada siswa " },
      { "id": 4, "nilai" : 1, "nama" : "61%-70% guru mata pelajaran memberikan penugasan terstruktur kepada siswa " },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 61% guru mata pelajaran memberikan penugasan terstruktur kepada siswa " }
    ],
    "jawaban": 4
  },
  {
    "id": 5504,
    "bagian_id": 311,
    "nomor": 25,
    "nama": "Kepala sekolah/madrasah melakukan evaluasi terhadap guru dalam proses pembelajaran dengan memperhatikan 4 aspek, yaitu: (1) persiapan, (2) pelaksanaan, (3) evaluasi pembelajaran, dan (4) rencana tidak lanjut. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Evaluasi dilakukan dengan memperhatikan 4 aspek " },
      { "id": 2, "nilai" : 3, "nama" : "Evaluasi dilakukan dengan memperhatikan 3 aspek " },
      { "id": 3, "nilai" : 2, "nama" : "Evaluasi dilakukan dengan memperhatikan 2 aspek " },
      { "id": 4, "nilai" : 1, "nama" : "Evaluasi dilakukan dengan memperhatikan 1 aspek " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melakukan evaluasi " }
    ],
    "jawaban": 4
  },
  {
    "id": 5490,
    "bagian_id": 310,
    "nomor": 11,
    "nama": "Guru mata pelajaran merancang tugas mandiri tidak terstruktur untuk mencapai kompetensi tertentu maksimal 60% dari alokasi waktu tiap mata pelajaran. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "91%-100% guru mata pelajaran merancang tugas mandiri tidak terstruktur " },
      { "id": 2, "nilai" : 3, "nama" : "81%-90% guru mata pelajaran merancang tugas mandiri tidak terstruktur " },
      { "id": 3, "nilai" : 2, "nama" : "71%-80% guru mata pelajaran merancang tugas mandiri tidak terstruktur " },
      { "id": 4, "nilai" : 1, "nama" : "61%-70% guru mata pelajaran merancang tugas mandiri tidak terstruktur " },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 61% guru mata pelajaran merancang tugas mandiri tidak terstruktur " }
    ],
    "jawaban": 4
  },
  {
    "id": 5491,
    "bagian_id": 310,
    "nomor": 12,
    "nama": "Dokumen lengkap KTSP disahkan oleh Kepala Sekolah/Madrasah dengan memperhatikan pertimbangan Komite Sekolah/Madrasah atau penyelenggara pendidikan yang disetujui oleh Dinas Pendidikan Provinsi atau Kanwil Kemenag/Kantor Kemenag yang bersangkutan. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "KTSP disahkan oleh Kepala Sekolah/Madrasah dengan memperhatikan pertimbangan Komite Sekolah/Madrasah atau penyelenggara pendidikan, dan disetujui oleh Dinas Pendidikan Provinsi atau Kanwil Kemenag/Kantor Kemenag yang bersangkutan " },
      { "id": 2, "nilai" : 3, "nama" : "KTSP disahkan oleh Kepala Sekolah/Madrasah dan disetujui oleh Dinas Pendidikan Provinsi atau Kanwil Kemenag/ Kantor Kemenag yang bersangkutan " },
      { "id": 3, "nilai" : 2, "nama" : "KTSP disahkan oleh Kepala Sekolah/Madrasah dengan memperhatikan pertimbangan Komite Sekolah/Madrasah atau penyelenggara pendidikan " },
      { "id": 4, "nilai" : 1, "nama" : "KTSP disahkan oleh Kepala Sekolah/Madrasah " },
      { "id": 5, "nilai" : 0, "nama" : "KTSP tidak disahkan " }
    ],
    "jawaban": 4
  },
  {
    "id": 5492,
    "bagian_id": 310,
    "nomor": 13,
    "nama": "Sekolah/Madrasah mengembangkan silabus melalui kelompok guru mata pelajaran atau cara lainnya berdasarkan standar isi, standar kompetensi lulusan, dan panduan penyusunan KTSP. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Mengembangkan silabus melalui kelompok guru mata pelajaran di sekolah/madrasah " },
      { "id": 2, "nilai" : 3, "nama" : "Mengembangkan silabus oleh masing-masing guru mata pelajaran di sekolah/madrasah " },
      { "id": 3, "nilai" : 2, "nama" : "Mengembangkan silabus melalui kelompok guru dari beberapa sekolah/madrasah " },
      { "id": 4, "nilai" : 1, "nama" : "Mengembangkan silabus dengan mengadopsi contoh yang sudah ada " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak mengembangkan silabus " }
    ],
    "jawaban": 4
  },
  {
    "id": 5493,
    "bagian_id": 310,
    "nomor": 14,
    "nama": "Sekolah/Madrasah memiliki silabus untuk setiap mata pelajaran sesuai dengan panduan penyusunan KTSP. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "13 atau lebih mata pelajaran memiliki silabus " },
      { "id": 2, "nilai" : 3, "nama" : "9-12 mata pelajaran memiliki silabus" },
      { "id": 3, "nilai" : 2, "nama" : "5-8 mata pelajaran memiliki silabus" },
      { "id": 4, "nilai" : 1, "nama" : "1-4 mata pelajaran memiliki silabus " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak ada mata pelajaran memiliki silabus " }
    ],
    "jawaban": 4
  },
  {
    "id": 5494,
    "bagian_id": 310,
    "nomor": 15,
    "nama": "Sekolah/Madrasah mengembangkan silabus mata pelajaran yang mengintegrasikan pendidikan karakter dengan menggunakan 7 langkah pengembangan silabus. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "13 atau lebih silabus mata pelajaran yang mengintegrasikan pendidikan karakter dikembangkan dengan menggunakan 7 langkah pengembangan silabus " },
      { "id": 2, "nilai" : 3, "nama" : "9-12 silabus mata pelajaran yang mengintegrasikan pendidikan karakter dikembangkan dengan menggunakan 7 langkah pengembangan silabus " },
      { "id": 3, "nilai" : 2, "nama" : "5-8 silabus mata pelajaran yang mengintegrasikan pendidikan karakter dikembangkan dengan menggunakan 7 langkah pengembangan silabus " },
      { "id": 4, "nilai" : 1, "nama" : "1-4 silabus mata pelajaran yang mengintegrasikan pendidikan karakter dikembangkan dengan menggunakan 7 langkah pengembangan silabus " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak ada silabus mata pelajaran yang mengintegrasikan pendidikan karakter dikembangkan dengan menggunakan 7 langkah pengembangan silabus " }
    ],
    "jawaban": 4
  },
  {
    "id": 5495,
    "bagian_id": 310,
    "nomor": 16,
    "nama": "Sekolah/Madrasah menetapkan Kriteria Ketuntasan Minimal (KKM) 75% untuk setiap mata pelajaran melalui rapat dewan guru. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "6 atau lebih mata pelajaran dengan KKM 75% atau lebih " },
      { "id": 2, "nilai" : 3, "nama" : "5 mata pelajaran dengan KKM 75% atau lebih " },
      { "id": 3, "nilai" : 2, "nama" : "4 mata pelajaran dengan KKM 75% atau lebih " },
      { "id": 4, "nilai" : 1, "nama" : "3 mata pelajaran dengan KKM 75% atau lebih " },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 3 mata pelajaran dengan KKM 75% atau lebih " }
    ],
    "jawaban": 4
  },
  {
    "id": 5496,
    "bagian_id": 310,
    "nomor": 17,
    "nama": "Sekolah/Madrasah menentukan KKM setiap mata pelajaran melalui rapat dewan guru dengan memperhatikan unsur: (1) karakteristik, (2) kompleksitas mata pelajaran, dan (3) daya dukung sekolah/madrasah ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Menentukan KKM dengan memperhatikan 3 unsur melalui rapat dewan guru " },
      { "id": 2, "nilai" : 3, "nama" : "Menentukan KKM dengan memperhatikan 2 unsur melalui rapat dewan guru " },
      { "id": 3, "nilai" : 2, "nama" : "Menentukan KKM dengan memperhatikan 1 unsur melalui rapat dewan guru " },
      { "id": 4, "nilai" : 1, "nama" : "Menentukan KKM tanpa memperhatikan 3 unsur melalui rapat dewan guru " },
      { "id": 5, "nilai" : 0, "nama" : "Menentukan KKM tanpa memperhatikan 3 unsur dan tidak melalui rapat dewan guru " }
    ],
    "jawaban": 4
  },
  {
    "id": 5497,
    "bagian_id": 310,
    "nomor": 18,
    "nama": "Sekolah/Madrasah menjadwalkan awal tahun pelajaran, minggu efektif, pembelajaran efektif, dan hari libur pada kalender pendidikan yang dimiliki. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Menyusun kalender pendidikan sekolah/madrasah secara rinci dan jelas " },
      { "id": 2, "nilai" : 3, "nama" : "Menyusun kalender pendidikan sekolah/madrasah secara rinci " },
      { "id": 3, "nilai" : 2, "nama" : "Menyusun kalender pendidikan sekolah/madrasah secara kurang rinci " },
      { "id": 4, "nilai" : 1, "nama" : "Menyusun kalender pendidikan sekolah/madrasah secara tidak rinci " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak menyusun kalender pendidikan sekolah/madrasah " }
    ],
    "jawaban": 4
  },
  {
    "id": 5498,
    "bagian_id": 311,
    "nomor": 19,
    "nama": "Setiap mata pelajaran memiliki Rencana Pelaksanaan Pembelajaran (RPP) dengan mengintegrasikan pendidikan karakter yang dijabarkan dari silabus. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "13 atau lebih mata pelajaran memiliki RPP dengan mengintegrasikan pendidikan karakter yang dijabarkan dari silabus " },
      { "id": 2, "nilai" : 3, "nama" : "9-12 mata pelajaran memiliki RPP dengan mengintegrasikan pendidikan karakter yang dijabarkan dari silabus " },
      { "id": 3, "nilai" : 2, "nama" : "5-8 mata pelajaran memiliki RPP dengan mengintegrasikan pendidikan karakter yang dijabarkan dari silabus " },
      { "id": 4, "nilai" : 1, "nama" : "1-4 mata pelajaran memiliki RPP dengan mengintegrasikan pendidikan karakter yang dijabarkan dari silabus " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak ada mata pelajaran memiliki RPP dengan mengintegrasikan pendidikan karakter yang dijabarkan dari silabus " }
    ],
    "jawaban": 4
  },
  {
    "id": 5499,
    "bagian_id": 311,
    "nomor": 20,
    "nama": "RPP disusun dengan memperhatikan 6 prinsip penyusunan. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "13 atau lebih mata pelajaran memiliki RPP yang sudah memperhatikan 6 prinsip penyusunan " },
      { "id": 2, "nilai" : 3, "nama" : "9-12 mata pelajaran memiliki RPP yang sudah memperhatikan 6 prinsip penyusunan " },
      { "id": 3, "nilai" : 2, "nama" : "5-8 mata pelajaran memiliki RPP yang sudah memperhatikan 6 prinsip penyusunan " },
      { "id": 4, "nilai" : 1, "nama" : "1-4 mata pelajaran memiliki RPP yang sudah memperhatikan 6 prinsip penyusunan " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak ada mata pelajaran memiliki RPP yang sudah memperhatikan 6 prinsip penyusunan " }
    ],
    "jawaban": 4
  },
  {
    "id": 5500,
    "bagian_id": 311,
    "nomor": 21,
    "nama": "Sekolah/Madrasah melaksanakan proses pembelajaran dengan memenuhi persyaratan yang ditentukan. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memenuhi 4 persyaratan pelaksanaan proses pembelajaran " },
      { "id": 2, "nilai" : 3, "nama" : "Memenuhi 3 persyaratan pelaksanaan proses pembelajaran " },
      { "id": 3, "nilai" : 2, "nama" : "Memenuhi 2 persyaratan pelaksanaan proses pembelajaran " },
      { "id": 4, "nilai" : 1, "nama" : "Memenuhi 1 persyaratan pelaksanaan proses pembelajaran " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memenuhi persyaratan pelaksanaan proses pembelajaran " }
    ],
    "jawaban": 4
  },
  {
    "id": 5501,
    "bagian_id": 311,
    "nomor": 22,
    "nama": "Sekolah/Madrasah melaksanakan proses pembelajaran sesuai dengan langkah-langkah pembelajaran yang tertuang dalam RPP. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "91%-100% guru melaksanakan proses pembelajaran sesuai dengan langkah-langkah pembelajaran " },
      { "id": 2, "nilai" : 3, "nama" : "81%-90% guru melaksanakan proses pembelajaran sesuai dengan langkah-langkah pembelajaran " },
      { "id": 3, "nilai" : 2, "nama" : "71%-80% guru melaksanakan proses pembelajaran sesuai dengan langkah-langkah pembelajaran " },
      { "id": 4, "nilai" : 1, "nama" : "61%-70% guru melaksanakan proses pembelajaran sesuai dengan langkah-langkah pembelajaran " },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 61% guru melaksanakan proses pembelajaran sesuai dengan langkah-langkah pembelajaran " }
    ],
    "jawaban": 4
  },
  {
    "id": 5502,
    "bagian_id": 311,
    "nomor": 23,
    "nama": "Kepala sekolah/madrasah melakukan pemantauan proses pembelajaran mencakup tiga tahapan yaitu: (1) perencanaan, (2) pelaksanaan, dan (3) penilaian hasil pembelajaran. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Mencakup 3 tahap pemantauan serta dilakukan diskusi hasil pemantauan " },
      { "id": 2, "nilai" : 3, "nama" : "Mencakup 3 tahap pemantauan tanpa dilakukan diskusi hasil pemantauan " },
      { "id": 3, "nilai" : 2, "nama" : "Mencakup 2 tahap pemantauan " },
      { "id": 4, "nilai" : 1, "nama" : "Mencakup 1 tahap pemantauan " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak pernah melakukan pemantauan " }
    ],
    "jawaban": 4
  },
  {
    "id": 5505,
    "bagian_id": 311,
    "nomor": 26,
    "nama": "Kepala sekolah/madrasah menyampaikan hasil pengawasan proses pembelajaran kepada pemangku kepentingan. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Menyampaikan kepada guru yang bersangkutan, dewan guru, pengawas sekolah/madrasah, dan komite sekolah/madrasah " },
      { "id": 2, "nilai" : 3, "nama" : "Menyampaikan kepada yang bersangkutan, dewan guru, dan pengawas sekolah/madrasah " },
      { "id": 3, "nilai" : 2, "nama" : "Menyampaikan kepada yang bersangkutan dan dewan guru " },
      { "id": 4, "nilai" : 1, "nama" : "Menyampaikan kepada yang bersangkutan saja " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak menyampaikan hasil pengawasan " }
    ],
    "jawaban": 4
  },
  {
    "id": 5506,
    "bagian_id": 311,
    "nomor": 27,
    "nama": "Kepala sekolah/madrasah menindaklanjuti hasil pengawasan proses pembelajaran selama satu tahun terakhir. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "91%-100% hasil pengawasan ditindaklanjuti " },
      { "id": 2, "nilai" : 3, "nama" : "81%-90% hasil pengawasan ditindaklanjuti " },
      { "id": 3, "nilai" : 2, "nama" : "71%-80% hasil pengawasan ditindaklanjuti " },
      { "id": 4, "nilai" : 1, "nama" : "61%-70% hasil pengawasan ditindaklanjuti " },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 61% hasil pengawasan ditindaklanjuti " }
    ],
    "jawaban": 4
  },
  {
    "id": 5507,
    "bagian_id": 312,
    "nomor": 28,
    "nama": "Siswa memperoleh pengalaman belajar melalui kelompok mata pelajaran Iptek untuk dapat berpikir logis, kritis, kreatif, dan inovatif dalam pengambilan keputusan dan pemecahan masalah. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "91%-100% mata pelajaran kelompok Iptek memuat tugas terstruktur " },
      { "id": 2, "nilai" : 3, "nama" : "81%-90% mata pelajaran kelompok Iptek memuat tugas terstruktur " },
      { "id": 3, "nilai" : 2, "nama" : "71%-80% mata pelajaran kelompok Iptek memuat tugas terstruktur " },
      { "id": 4, "nilai" : 1, "nama" : "61%-70% mata pelajaran kelompok Iptek memuat tugas terstruktur " },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 61% mata pelajaran kelompok Iptek memuat tugas terstruktur " }
    ],
    "jawaban": 4
  },
  {
    "id": 5508,
    "bagian_id": 312,
    "nomor": 29,
    "nama": "Siswa terlibat dalam kegiatan belajar kelompok mata pelajaran Iptek yang berkaitan dengan analisis dan pemecahan masalah kompleks. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "4 atau lebih mata pelajaran kelompok Iptek dapat menunjukkan kegiatan pembelajaran yang berkaitan dengan pemecahan masalah kompleks. " },
      { "id": 2, "nilai" : 3, "nama" : "3 mata pelajaran kelompok Iptek dapat menunjukkan kegiatan pembelajaran yang berkaitan dengan pemecahan masalah kompleks. " },
      { "id": 3, "nilai" : 2, "nama" : "2 mata pelajaran kelompok Iptek dapat menunjukkan kegiatan pembelajaran yang berkaitan dengan pemecahan masalah kompleks. " },
      { "id": 4, "nilai" : 1, "nama" : "1 mata pelajaran kelompok Iptek dapat menunjukkan kegiatan pembelajaran yang berkaitan dengan pemecahan masalah kompleks. " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak ada mata pelajaran kelompok Iptek dapat menunjukkan kegiatan pembelajaran yang berkaitan dengan pemecahan masalah kompleks. " }
    ],
    "jawaban": 4
  },
  {
    "id": 5509,
    "bagian_id": 312,
    "nomor": 30,
    "nama": "Siswa memperoleh pengalaman belajar pada kelompok mata pelajaran Iptek agar memiliki kemampuan untuk menganalisis gejala alam dan sosial. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "91%-100% silabus mata pelajaran memuat pengalaman belajar siswa dalam menganalisis gejala alam dan sosial " },
      { "id": 2, "nilai" : 3, "nama" : "81%-90% silabus mata pelajaran memuat pengalaman belajar siswa dalam menganalisis gejala alam dan sosial " },
      { "id": 3, "nilai" : 2, "nama" : "71%-80% silabus mata pelajaran memuat pengalaman belajar siswa dalam menganalisis gejala alam dan sosial " },
      { "id": 4, "nilai" : 1, "nama" : "61%-70% silabus mata pelajaran memuat pengalaman belajar siswa dalam menganalisis gejala alam dan sosial " },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 61% silabus mata pelajaran memuat pengalaman belajar siswa dalam menganalisis gejala alam dan sosial " }
    ],
    "jawaban": 4
  },
  {
    "id": 5510,
    "bagian_id": 312,
    "nomor": 31,
    "nama": "Siswa memperoleh pengalaman belajar dengan dukungan berbagai sumber belajar yang dimiliki sekolah secara efektif dan efesien. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sekolah/Madrasah memfasilitasi kegiatan siswa dengan memanfaatkan dan memfungsikan sumber belajar meliputi bahan ajar, buku teks, perpustakaan, laboratorium, dan internet " },
      { "id": 2, "nilai" : 3, "nama" : "Sekolah/Madrasah memfasilitasi kegiatan siswa dengan memanfaatkan dan memfungsikan sumber belajar meliputi bahan ajar, buku teks, perpustakaan, dan laboratorium " },
      { "id": 3, "nilai" : 2, "nama" : "Sekolah/Madrasah memfasilitasi kegiatan siswa dengan memanfaatkan dan memfungsikan sumber belajar meliputi bahan ajar, buku teks, dan perpustakaan " },
      { "id": 4, "nilai" : 1, "nama" : "Sekolah/Madrasah memfasilitasi kegiatan siswa dengan memanfaatkan dan memfungsikan sumber belajar meliputi bahan ajar dan buku teks " },
      { "id": 5, "nilai" : 0, "nama" : "Sekolah/Madrasah tidak pernah memfasilitasi kegiatan siswa dengan sumber belajar " }
    ],
    "jawaban": 4
  },
  {
    "id": 5511,
    "bagian_id": 312,
    "nomor": 32,
    "nama": "Siswa memperoleh pengalaman belajar melalui program pembiasaan untuk mencari informasi/pengetahuan lebih lanjut dari berbagai sumber belajar selama satu tahun pelajaran terakhir. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sekolah/Madrasah menjalankan 10 atau lebih kegiatan pembiasaan untuk mencari informasi/pengetahuan lebih lanjut dari berbagai sumber belajar " },
      { "id": 2, "nilai" : 3, "nama" : "Sekolah/Madrasah menjalankan 7 _ 9 kegiatan pembiasaan untuk mencari informasi/pengetahuan lebih lanjut dari berbagai sumber belajar " },
      { "id": 3, "nilai" : 2, "nama" : "Sekolah/Madrasah menjalankan 4 _ 6 kegiatan pembiasaan untuk mencari informasi/pengetahuan lebih lanjut dari berbagai sumber belajar " },
      { "id": 4, "nilai" : 1, "nama" : "Sekolah/Madrasah menjalankan 1 _ 3 kegiatan pembiasaan untuk mencari informasi/pengetahuan lebih lanjut dari berbagai sumber belajar " },
      { "id": 5, "nilai" : 0, "nama" : "Sekolah/Madrasah tidak menjalankan kegiatan pembiasaan untuk mencari informasi/pengetahuan lebih lanjut dari berbagai sumber belajar " }
    ],
    "jawaban": 4
  },
  {
    "id": 5512,
    "bagian_id": 312,
    "nomor": 33,
    "nama": "Siswa memperoleh pengalaman belajar yang mampu memanfaatkan lingkungan secara produktif dan bertanggung jawab. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sekolah/Madrasah menjalankan kegiatan pembelajaran yang mampu memanfaatkan lingkungan secara produktif dan bertanggung jawab sebanyak 4 jenis atau lebih dalam tiga tahun terakhir " },
      { "id": 2, "nilai" : 3, "nama" : "Sekolah/Madrasah menjalankan kegiatan pembelajaran yang mampu memanfaatkan lingkungan secara produktif dan bertanggung jawab sebanyak 3 jenis dalam tiga tahun terakhir " },
      { "id": 3, "nilai" : 2, "nama" : "Sekolah/Madrasah menjalankan kegiatan pembelajaran yang mampu memanfaatkan lingkungan secara produktif dan bertanggung jawab sebanyak 2 jenis dalam tiga tahun terakhir " },
      { "id": 4, "nilai" : 1, "nama" : "Sekolah/Madrasah menjalankan kegiatan pembelajaran yang mampu memanfaatkan lingkungan secara produktif dan bertanggung jawab sebanyak 1 jenis dalam tiga tahun terakhir " },
      { "id": 5, "nilai" : 0, "nama" : "Sekolah/Madrasah tidak pernah menjalankan kegiatan pembelajaran yang mampu memanfaatkan lingkungan secara produktif dan bertanggung jawab " }
    ],
    "jawaban": 4
  },
  {
    "id": 5629,
    "bagian_id": 317,
    "nomor": 150,
    "nama": "Guru menggunakan teknik penilaian berupa tes, pengamatan, penugasan, dan/atau bentuk lain dalam menilai siswa. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "96%-100% guru menggunakan teknik penilaian berupa tes, pengamatan, penugasan terstuktur, penugasan mandiri, dan/atau bentuk lain " },
      { "id": 2, "nilai" : 3, "nama" : "91%-95% guru menggunakan teknik penilaian berupa tes, pengamatan, penugasan terstuktur, penugasan mandiri, dan/atau bentuk lain " },
      { "id": 3, "nilai" : 2, "nama" : "86%-90% guru menggunakan teknik penilaian berupa tes, pengamatan, penugasan terstuktur, penugasan mandiri, dan/atau bentuk lain " },
      { "id": 4, "nilai" : 1, "nama" : "81%-85% guru menggunakan teknik penilaian berupa tes, pengamatan, penugasan terstuktur, penugasan mandiri, dan/atau bentuk lain " },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 81% guru melaksanakan penilaian " }
    ],
    "jawaban": 4
  },
  {
    "id": 5513,
    "bagian_id": 312,
    "nomor": 34,
    "nama": "Siswa memperoleh pengalaman mengekspresikan diri melalui kegiatan seni dan budaya. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sekolah/Madrasah memfasilitasi siswa untuk mengekspresikan diri melalui kegiatan seni dan budaya sebanyak 4 jenis atau lebih dalam tiga tahun terakhir " },
      { "id": 2, "nilai" : 3, "nama" : "Sekolah/Madrasah memfasilitasi siswa untuk mengekspresikan diri melalui kegiatan seni dan budaya sebanyak 3 jenis dalam tiga tahun terakhir " },
      { "id": 3, "nilai" : 2, "nama" : "Sekolah/Madrasah memfasilitasi siswa untuk mengekspresikan diri melalui kegiatan seni dan budaya sebanyak 2 jenis dalam tiga tahun terakhir " },
      { "id": 4, "nilai" : 1, "nama" : "Sekolah/Madrasah memfasilitasi siswa untuk mengekspresikan diri melalui kegiatan seni dan budaya sebanyak 1 jenis dalam tiga tahun terakhir " },
      { "id": 5, "nilai" : 0, "nama" : "Sekolah/Madrasah tidak pernah memfasilitasi siswa untuk mengekspresikan diri melalui kegiatan seni dan budaya " }
    ],
    "jawaban": 4
  },
  {
    "id": 5514,
    "bagian_id": 312,
    "nomor": 35,
    "nama": "Siswa memperoleh pengalaman mengapresiasikan karya seni dan budaya. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sekolah/Madrasah memfasilitasi kegiatan siswa untuk mengapresiasikan karya seni dan budaya sebanyak 4 jenis atau lebih dalam tiga tahun terakhir " },
      { "id": 2, "nilai" : 3, "nama" : "Sekolah/Madrasah memfasilitasi kegiatan siswa untuk mengapresiasikan karya seni dan budaya sebanyak 3 jenis dalam tiga tahun terakhir " },
      { "id": 3, "nilai" : 2, "nama" : "Sekolah/Madrasah memfasilitasi kegiatan siswa untuk mengapresiasikan karya seni dan budaya sebanyak 2 jenis dalam tiga tahun terakhir " },
      { "id": 4, "nilai" : 1, "nama" : "Sekolah/Madrasah memfasilitasi kegiatan siswa untuk mengapresiasikan karya seni dan budaya sebanyak 1 jenis dalam tiga tahun terakhir " },
      { "id": 5, "nilai" : 0, "nama" : "Sekolah/Madrasah tidak pernah memfasilitasi kegiatan siswa untuk mengapresiasikan karya seni dan budaya " }
    ],
    "jawaban": 4
  },
  {
    "id": 5524,
    "bagian_id": 312,
    "nomor": 45,
    "nama": "Sekolah/Madrasah melaksanakan kegiatan pembentukan akhlak mulia melalui program pengembangan diri berupa pembiasaan dan pengamalan. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melaksanakan 4 jenis kegiatan atau lebih setiap minggu " },
      { "id": 2, "nilai" : 3, "nama" : "Melaksanakan 3 jenis kegiatan setiap minggu " },
      { "id": 3, "nilai" : 2, "nama" : "Melaksanakan 2 jenis kegiatan setiap minggu " },
      { "id": 4, "nilai" : 1, "nama" : "Melaksanakan 1 jenis kegiatan setiap minggu " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melaksanakan kegiatan " }
    ],
    "jawaban": 4
  },
  {
    "id": 5515,
    "bagian_id": 312,
    "nomor": 36,
    "nama": "Siswa memperoleh pengalaman belajar untuk menumbuhkan dan mengembangkan sikap percaya diri dan bertanggung jawab. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sekolah/Madrasah menjalankan kegiatan kesiswaan guna menumbuhkan dan mengembangkan sikap percaya diri dan bertanggung jawab sebanyak 4 jenis atau lebih dalam tiga tahun terakhir " },
      { "id": 2, "nilai" : 3, "nama" : "Sekolah/Madrasah menjalankan kegiatan kesiswaan guna menumbuhkan dan mengembangkan sikap percaya diri dan bertanggung jawab sebanyak 3 jenis dalam tiga tahun terakhir " },
      { "id": 3, "nilai" : 2, "nama" : "Sekolah/Madrasah menjalankan kegiatan kesiswaan guna menumbuhkan dan mengembangkan sikap percaya diri dan bertanggung jawab sebanyak 2 jenis dalam tiga tahun terakhir " },
      { "id": 4, "nilai" : 1, "nama" : "Sekolah/Madrasah menjalankan kegiatan kesiswaan guna menumbuhkan dan mengembangkan sikap percaya diri dan bertanggung jawab sebanyak 1 jenis dalam tiga tahun terakhir " },
      { "id": 5, "nilai" : 0, "nama" : "Sekolah/Madrasah tidak pernah menjalankan kegiatan kesiswaan guna menumbuhkan dan mengembangkan sikap percaya diri dan bertanggung jawab " }
    ],
    "jawaban": 4
  },
  {
    "id": 5516,
    "bagian_id": 312,
    "nomor": 37,
    "nama": "Siswa memperoleh pengalaman belajar untuk berpartisipasi dalam penegakan aturan-aturan sosial. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sekolah/Madrasah menjalankan kegiatan penegakan aturan- aturan sosial sebanyak 4 jenis atau lebih dalam tiga tahun terakhir " },
      { "id": 2, "nilai" : 3, "nama" : "Sekolah/Madrasah menjalankan kegiatan penegakan aturan- aturan sosial sebanyak 3 jenis dalam tiga tahun terakhir " },
      { "id": 3, "nilai" : 2, "nama" : "Sekolah/Madrasah menjalankan kegiatan penegakan aturan- aturan sosial sebanyak 2 jenis dalam tiga tahun terakhir " },
      { "id": 4, "nilai" : 1, "nama" : "Sekolah/Madrasah menjalankan kegiatan penegakan aturan- aturan sosial sebanyak 1 jenis dalam tiga tahun terakhir " },
      { "id": 5, "nilai" : 0, "nama" : "Sekolah/Madrasah tidak pernah menjalankan kegiatan penegakan aturan-aturan sosial " }
    ],
    "jawaban": 4
  },
  {
    "id": 5517,
    "bagian_id": 312,
    "nomor": 38,
    "nama": "Siswa memperoleh pengalaman belajar yang mampu menumbuhkan sikap kompetitif untuk mendapatkan hasil terbaik. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sekolah/Madrasah memberikan penghargaan bagi juara sekolah/madrasah, juara jurusan, juara kelas, dan juara mata pelajaran " },
      { "id": 2, "nilai" : 3, "nama" : "Sekolah/Madrasah memberikan penghargaan bagi juara sekolah/madrasah, juara jurusan, dan juara kelas " },
      { "id": 3, "nilai" : 2, "nama" : "Sekolah/Madrasah memberikan penghargaan bagi juara sekolah/madrasah dan juara kelas " },
      { "id": 4, "nilai" : 1, "nama" : "Sekolah/Madrasah memberikan penghargaan bagi juara sekolah/madrasah " },
      { "id": 5, "nilai" : 0, "nama" : "Sekolah/Madrasah tidak memberikan penghargaan bagi juara " }
    ],
    "jawaban": 4
  },
  {
    "id": 5518,
    "bagian_id": 312,
    "nomor": 39,
    "nama": "Siswa memperoleh pengalaman belajar yang mampu menumbuhkan sikap sportif untuk mendapatkan hasil terbaik. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sekolah/Madrasah memberikan layanan pembelajaran yang mampu menumbuhkan sikap sportif untuk mendapatkan hasil terbaik sebanyak 4 jenis atau lebih dalam tiga tahun terakhir " },
      { "id": 2, "nilai" : 3, "nama" : "Sekolah/Madrasah memberikan layanan pembelajaran yang mampu menumbuhkan sikap sportif untuk mendapatkan hasil terbaik sebanyak 3 jenis dalam tiga tahun terakhir " },
      { "id": 3, "nilai" : 2, "nama" : "Sekolah/Madrasah memberikan layanan pembelajaran yang mampu menumbuhkan sikap sportif untuk mendapatkan hasil terbaik sebanyak 2 jenis dalam tiga tahun terakhir " },
      { "id": 4, "nilai" : 1, "nama" : "Sekolah/Madrasah memberikan layanan pembelajaran yang mampu menumbuhkan sikap sportif untuk mendapatkan hasil terbaik sebanyak 1 jenis dalam tiga tahun terak " },
      { "id": 5, "nilai" : 0, "nama" : "Sekolah/Madrasah tidak pernah memberikan layanan pembelajaran yang mampu menumbuhkan sikap sportif untuk mendapatkan hasil terbaik " }
    ],
    "jawaban": 4
  },
  {
    "id": 5519,
    "bagian_id": 312,
    "nomor": 40,
    "nama": "Siswa memperoleh pengalaman belajar yang dapat melibatkan partisipasi siswa dalam kehidupan bermasyarakat, berbangsa, dan bernegara secara demokratis dalam wadah NKRI. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sekolah/Madrasah menjalankan kegiatan pembelajaran yang melibatkan partisipasi siswa dalam kehidupan bermasyarakat, berbangsa, dan bernegara secara demokratis sebanyak 4 jenis atau lebih dalam tiga tahun terakhir " },
      { "id": 2, "nilai" : 3, "nama" : "Sekolah/Madrasah menjalankan kegiatan pembelajaran yang melibatkan partisipasi siswa dalam kehidupan bermasyarakat, berbangsa, dan bernegara secara demokratis sebanyak 3 jenis dalam tiga tahun terakhir " },
      { "id": 3, "nilai" : 2, "nama" : "Sekolah/Madrasah menjalankan kegiatan pembelajaran yang melibatkan partisipasi siswa dalam kehidupan bermasyarakat, berbangsa, dan bernegara secara demokratis sebanyak 2 jenis dalam tiga tahun terakhir " },
      { "id": 4, "nilai" : 1, "nama" : "Sekolah/Madrasah menjalankan kegiatan pembelajaran yang melibatkan partisipasi siswa dalam kehidupan bermasyarakat, berbangsa, dan bernegara secara demokratis sebanyak 1 jenis dalam tiga tahun terakhir " },
      { "id": 5, "nilai" : 0, "nama" : "Sekolah/Madrasah tidak pernah menjalankan kegiatan pembelajaran yang melibatkan partisipasi siswa dalam kehidupan bermasyarakat, berbangsa, dan bernegara secara demokratis " }
    ],
    "jawaban": 4
  },
  {
    "id": 5520,
    "bagian_id": 312,
    "nomor": 41,
    "nama": "Siswa memperoleh pengalaman belajar untuk membentuk karakter siswa, menumbuhkan rasa sportivitas, dan peduli terhadap kebersihan lingkungan. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sekolah/Madrasah melaksanakan program bagi siswa untuk membentuk karakter, menumbuhkan rasa sportivitas, dan kebersihan lingkungan sebanyak 4 jenis atau lebih dalam tiga tahun terakhir " },
      { "id": 2, "nilai" : 3, "nama" : "Sekolah/Madrasah melaksanakan program bagi siswa untuk membentuk karakter, menumbuhkan rasa sportivitas, dan kebersihan lingkungan sebanyak 3 jenis dalam tiga tahun terakhir " },
      { "id": 3, "nilai" : 2, "nama" : "Sekolah/Madrasah melaksanakan program bagi siswa untuk membentuk karakter, menumbuhkan rasa sportivitas, dan kebersihan lingkungan sebanyak 2 jenis dalam tiga tahun terakhir " },
      { "id": 4, "nilai" : 1, "nama" : "Sekolah/Madrasah melaksanakan program bagi siswa untuk membentuk karakter, menumbuhkan rasa sportivitas, dan kebersihan lingkungan sebanyak 1 jenis dalam tiga tahun terakhir " },
      { "id": 5, "nilai" : 0, "nama" : "Sekolah/Madrasah tidak melaksanakan program bagi siswa untuk membentuk karakter, menumbuhkan rasa sportivitas, dan kebersihan lingkungan " }
    ],
    "jawaban": 4
  },
  {
    "id": 5521,
    "bagian_id": 312,
    "nomor": 42,
    "nama": "Siswa memperoleh pengalaman belajar melalui pembiasaan untuk memahami hak dan kewajiban orang lain dalam pergaulan di masyarakat. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "91%-100% silabus mata pelajaran memuat kegiatan pembelajaran dalam kemampuan memahami hak dan kewajiban orang lain dalam pergaulan di masyarakat " },
      { "id": 2, "nilai" : 3, "nama" : "81%-90% silabus mata pelajaran memuat kegiatan pembelajaran dalam kemampuan memahami hak dan kewajiban orang lain dalam pergaulan di masyarakat " },
      { "id": 3, "nilai" : 2, "nama" : "71%-80% silabus mata pelajaran memuat kegiatan pembelajaran dalam kemampuan memahami hak dan kewajiban orang lain dalam pergaulan di masyarakat " },
      { "id": 4, "nilai" : 1, "nama" : "61%-70% silabus mata pelajaran memuat kegiatan pembelajaran dalam kemampuan memahami hak dan kewajiban orang lain dalam pergaulan di masyarakat " },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 61% silabus mata pelajaran memuat kegiatan pembelajaran dalam kemampuan memahami hak dan kewajiban orang lain dalam pergaulan di masyarakat " }
    ],
    "jawaban": 4
  },
  {
    "id": 5522,
    "bagian_id": 312,
    "nomor": 43,
    "nama": "Siswa memperoleh pengalaman belajar melalui kelompok mata pelajaran agama dan akhlak mulia yang bersifat afektif. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sekolah/Madrasah memfasilitasi 4 jenis atau lebih kegiatan pembiasaan dan pengamalan ajaran agama dalam tiga tahun terakhir " },
      { "id": 2, "nilai" : 3, "nama" : "Sekolah/Madrasah memfasilitasi 3 jenis kegiatan pembiasaan dan pengamalan ajaran agama dalam tiga tahun terakhir " },
      { "id": 3, "nilai" : 2, "nama" : "Sekolah/Madrasah memfasilitasi 2 jenis kegiatan pembiasaan dan pengamalan ajaran agama dalam tiga tahun terakhir " },
      { "id": 4, "nilai" : 1, "nama" : "Sekolah/Madrasah memfasilitasi 1 jenis kegiatan pembiasaan dan pengamalan ajaran agama dalam tiga tahun terakhir " },
      { "id": 5, "nilai" : 0, "nama" : "Sekolah/Madrasah tidak melaksanakan kegiatan pembiasaan dan pengamalan ajaran agama " }
    ],
    "jawaban": 4
  },
  {
    "id": 5523,
    "bagian_id": 312,
    "nomor": 44,
    "nama": "Sekolah/Madrasah melaksanakan kegiatan pembelajaran untuk menghargai keberagaman agama, bangsa, suku, ras, dan golongan sosial ekonomi dalam lingkup global dalam tiga tahun terakhir. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melaksanakan 4 jenis atau lebih kegiatan " },
      { "id": 2, "nilai" : 3, "nama" : "Melaksanakan 3 jenis kegiatan " },
      { "id": 3, "nilai" : 2, "nama" : "Melaksanakan 2 jenis kegiatan " },
      { "id": 4, "nilai" : 1, "nama" : "Melaksanakan 1 jenis kegiatan " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melaksanakan kegiatan " }
    ],
    "jawaban": 4
  },
  {
    "id": 5503,
    "bagian_id": 311,
    "nomor": 24,
    "nama": "Kepala sekolah/madrasah menindaklanjuti hasil supervisi proses pembelajaran melalui: 1). pemberian contoh; 2). diskusi; 3). pelatihan, dan 4). konsultasi. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Menindaklanjuti hasil supervisi melalui 4 cara " },
      { "id": 2, "nilai" : 3, "nama" : "Menindaklanjuti hasil supervisi melalui 3 cara " },
      { "id": 3, "nilai" : 2, "nama" : "Menindaklanjuti hasil supervisi melalui 2 cara " },
      { "id": 4, "nilai" : 1, "nama" : "Menindaklanjuti hasil supervisi melalui 1 cara " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak menindaklanjuti hasil supervisi " }
    ],
    "jawaban": 4
  },
  {
    "id": 5525,
    "bagian_id": 312,
    "nomor": 46,
    "nama": "Siswa memperoleh pengalaman belajar melalui program pembiasaan untuk menghargai perbedaan pendapat dan berempati terhadap orang lain. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "91%-100% kegiatan pembelajaran menggunakan pendekatan diskusi, kerja kelompok, dan persaingan sehat " },
      { "id": 2, "nilai" : 3, "nama" : "81%-90% kegiatan pembelajaran menggunakan pendekatan diskusi, kerja kelompok, dan persaingan sehat " },
      { "id": 3, "nilai" : 2, "nama" : "71%-80% kegiatan pembelajaran menggunakan pendekatan diskusi, kerja kelompok, dan persa " },
      { "id": 4, "nilai" : 1, "nama" : "61%-70% kegiatan pembelajaran menggunakan pendekatan diskusi, kerja kelompok, dan persaingan " },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 61% kegiatan pembelajaran menggunakan pendekatan diskusi, kerja kelompok, dan persaingan sehat " }
    ],
    "jawaban": 4
  },
  {
    "id": 5526,
    "bagian_id": 312,
    "nomor": 47,
    "nama": "Siswa memperoleh pengalaman dalam menghasilkan karya kreatif baik individual maupun kelompok. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sekolah/Madrasah memfasilitasi kegiatan siswa untuk menghasilkan karya kreatif baik individual maupun kelompok sebanyak 4 jenis atau lebih dalam tiga tahun terakhir " },
      { "id": 2, "nilai" : 3, "nama" : "Sekolah/Madrasah memfasilitasi kegiatan siswa untuk menghasilkan karya kreatif baik individual maupun kelompok sebanyak 3 jenis dalam tiga tahun terakhir " },
      { "id": 3, "nilai" : 2, "nama" : "Sekolah/Madrasah memfasilitasi kegiatan siswa untuk menghasilkan karya kreatif baik individual maupun kelompok sebanyak 2 jenis dalam tiga tahun terakhir " },
      { "id": 4, "nilai" : 1, "nama" : "Sekolah/Madrasah memfasilitasi kegiatan siswa untuk menghasilkan karya kreatif baik individual maupun kelompok sebanyak 1 jenis dalam tiga tahun terakhir " },
      { "id": 5, "nilai" : 0, "nama" : "Sekolah/Madrasah tidak pernah memfasilitasi kegiatan siswa untuk menghasilkan karya kreatif baik individual maupun kelompok " }
    ],
    "jawaban": 4
  },
  {
    "id": 5527,
    "bagian_id": 312,
    "nomor": 48,
    "nama": "Siswa memperoleh pengalaman dalam berkomunikasi baik lisan maupun tulisan secara efektif dan santun. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sekolah/Madrasah memfasilitasi kegiatan siswa untuk berkomunikasi baik lisan maupun tulisan secara efektif dan santun sebanyak 4 jenis atau lebih dalam tiga tahun terakhir " },
      { "id": 2, "nilai" : 3, "nama" : "Sekolah/Madrasah memfasilitasi kegiatan siswa untuk berkomunikasi baik lisan maupun tulisan secara efektif dan santun sebanyak 3 jenis dalam tiga tahun terakhir " },
      { "id": 3, "nilai" : 2, "nama" : "Sekolah/Madrasah memfasilitasi kegiatan siswa untuk berkomunikasi baik lisan maupun tulisan secara efektif dan santun sebanyak 2 jenis dalam tiga tahun terakhir " },
      { "id": 4, "nilai" : 1, "nama" : "Sekolah/Madrasah memfasilitasi kegiatan siswa untuk berkomunikasi baik lisan maupun tulisan secara efektif dan santun sebanyak 1 jenis dalam tiga tahun terakhir " },
      { "id": 5, "nilai" : 0, "nama" : "Sekolah/Madrasah tidak memfasilitasi kegiatan siswa untuk berkomunikasi baik lisan maupun tulisan secara efektif dan santun " }
    ],
    "jawaban": 4
  },
  {
    "id": 5528,
    "bagian_id": 312,
    "nomor": 49,
    "nama": "Siswa memperoleh keterampilan membaca dan menulis naskah secara sistematis dan estetis. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sekolah/Madrasah memiliki kumpulan karya tulis siswa baik dari penugasan maupun lomba, laporan hasil kunjungan karya wisata/studi lapangan, majalah dinding, dan buletin siswa internal sekolah/madrasah " },
      { "id": 2, "nilai" : 3, "nama" : "Sekolah/Madrasah memiliki kumpulan karya tulis siswa baik dari penugasan maupun lomba, laporan hasil kunjungan karya wisata/studi lapangan, dan majalah dinding " },
      { "id": 3, "nilai" : 2, "nama" : "Sekolah/Madrasah memiliki kumpulan karya tulis siswa baik dari penugasan maupun lomba, dan laporan hasil kunjungan karya wisata/studi lapangan " },
      { "id": 4, "nilai" : 1, "nama" : "Sekolah/Madrasah memiliki kumpulan karya tulis siswa baik dari penugasan maupun lomba " },
      { "id": 5, "nilai" : 0, "nama" : "Sekolah/Madrasah tidak memiliki kumpulan karya tulis siswa " }
    ],
    "jawaban": 4
  },
  {
    "id": 5529,
    "bagian_id": 312,
    "nomor": 50,
    "nama": "Siswa memperoleh keterampilan menyimak, membaca, menulis, dan berbicara baik dalam Bahasa Indonesia maupun Bahasa Inggris. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Rata-rata nilai ketuntasan belajar mata pelajaran Bahasa Indonesia dan Bahasa Inggris ditetapkan 75,0 atau lebih " },
      { "id": 2, "nilai" : 3, "nama" : "Rata-rata nilai ketuntasan belajar mata pelajaran Bahasa Indonesia dan Bahasa Inggris ditetapkan 70,0-74,9 " },
      { "id": 3, "nilai" : 2, "nama" : "Rata-rata nilai ketuntasan belajar mata pelajaran Bahasa Indonesia dan Bahasa Inggris ditetapkan 65,0-69,9 " },
      { "id": 4, "nilai" : 1, "nama" : "Rata-rata nilai ketuntasan belajar mata pelajaran Bahasa Indonesia dan Bahasa Inggris ditetapkan 60,0-64,9 " },
      { "id": 5, "nilai" : 0, "nama" : "Rata-rata nilai ketuntasan belajar mata pelajaran Bahasa Indonesia dan Bahasa Inggris ditetapkan kurang dari 60 " }
    ],
    "jawaban": 4
  },
  {
    "id": 5530,
    "bagian_id": 312,
    "nomor": 51,
    "nama": "Siswa memperoleh pengalaman belajar dalam mengembangkan iptek seiring dengan perkembangannya. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sekolah/Madrasah memberikan layanan dalam pengembangan iptek sebanyak 4 jenis atau lebih dalam satu tahun terakhir " },
      { "id": 2, "nilai" : 3, "nama" : "Sekolah/Madrasah memberikan layanan dalam pengembangan iptek sebanyak 3 jenis dalam satu tahun terakhir " },
      { "id": 3, "nilai" : 2, "nama" : "Sekolah/Madrasah memberikan layanan dalam pengembangan iptek sebanyak 2 jenis dalam satu tahun terakhir " },
      { "id": 4, "nilai" : 1, "nama" : "Sekolah/Madrasah memberikan layanan dalam pengembangan iptek sebanyak 1 jenis dalam satu tahun terakhir " },
      { "id": 5, "nilai" : 0, "nama" : "Sekolah/Madrasah tidak pernah memberikan layanan dalam pengembangan iptek " }
    ],
    "jawaban": 4
  },
  {
    "id": 5531,
    "bagian_id": 312,
    "nomor": 52,
    "nama": "Siswa memperoleh pengalaman belajar agar menguasai pengetahuan untuk melanjutkan ke jenjang pendidikan tinggi. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sekolah/Madrasah melakukan kegiatan untuk menghadapi ujian akhir dan seleksi masuk perguruan tinggi sebanyak 4 jenis atau lebih dalam satu semester " },
      { "id": 2, "nilai" : 3, "nama" : "Sekolah/Madrasah melakukan kegiatan untuk menghadapi ujian akhir dan seleksi masuk perguruan tinggi sebanyak 3 jenis dalam satu semester " },
      { "id": 3, "nilai" : 2, "nama" : "Sekolah/Madrasah melakukan kegiatan untuk menghadapi ujian akhir dan seleksi masuk perguruan tinggi sebanyak 2 jenis dalam satu semester" },
      { "id": 4, "nilai" : 1, "nama" : "Sekolah/Madrasah melakukan kegiatan untuk menghadapi ujian akhir dan seleksi masuk perguruan tinggi sebanyak 1 jenis dalam satu semester " },
      { "id": 5, "nilai" : 0, "nama" : "Sekolah/Madrasah tidak melakukan kegiatan untuk menghadapi ujian akhir dan seleksi masuk perguruan tinggi " }
    ],
    "jawaban": 4
  },
  {
    "id": 5532,
    "bagian_id": 313,
    "nomor": 53,
    "nama": "Guru memiliki kualifikasi akademik minimum sarjana (S1) atau diploma empat (D-IV). ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "91%-100% guru berpendidikan minimum S1 atau D-IV " },
      { "id": 2, "nilai" : 3, "nama" : "81%-90% guru berpendidikan minimum S1 atau D-IV " },
      { "id": 3, "nilai" : 2, "nama" : "71%-80% guru berpendidikan minimum S1 atau D-IV " },
      { "id": 4, "nilai" : 1, "nama" : "61%-70% guru berpendidikan minimum S1 atau D-IV " },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 61% guru berpendidikan minimum S1 atau D-IV " }
    ],
    "jawaban": 4
  },
  {
    "id": 5533,
    "bagian_id": 313,
    "nomor": 54,
    "nama": "Guru mata pelajaran mengajar sesuai dengan latar belakang pendidikannya. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "91%-100% guru mata pelajaran memiliki kesesuaian antara mata pelajaran yang diampu dengan latar belakang pendidikannya " },
      { "id": 2, "nilai" : 3, "nama" : "81%-90% guru mata pelajaran memiliki kesesuaian antara mata pelajaran yang diampu dengan latar belakang pendidikannya " },
      { "id": 3, "nilai" : 2, "nama" : "71%-80% guru mata pelajaran memiliki kesesuaian antara mata pelajaran yang diampu dengan latar belakang pendidikannya" },
      { "id": 4, "nilai" : 1, "nama" : "61%-70% guru mata pelajaran memiliki kesesuaian antara mata pelajaran yang diampu dengan latar belakang pendidikannya " },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 61% guru mata pelajaran memiliki kesesuaian antara mata pelajaran yang diampu dengan latar belakang pendidikannya " }
    ],
    "jawaban": 4
  },
  {
    "id": 5534,
    "bagian_id": 313,
    "nomor": 55,
    "nama": "Guru memiliki kesehatan jasmani dan rohani untuk menjalankan tugas utamanya. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Rata-rata kehadiran guru 96%-100% untuk menjalankan tugas utamanya " },
      { "id": 2, "nilai" : 3, "nama" : "Rata-rata kehadiran guru 91%-95% untuk menjalankan tugas utamanya " },
      { "id": 3, "nilai" : 2, "nama" : "Rata-rata kehadiran guru 86%-90% untuk menjalankan tugas utamanya " },
      { "id": 4, "nilai" : 1, "nama" : "Rata-rata kehadiran guru 81%-85% untuk menjalankan tugas utamanya " },
      { "id": 5, "nilai" : 0, "nama" : "Rata-rata kehadiran guru kurang dari 81% untuk menjalankan tugas utamanya " }
    ],
    "jawaban": 4
  },
  {
    "id": 5535,
    "bagian_id": 313,
    "nomor": 56,
    "nama": "Guru merencanakan, melaksanakan, dan mengevaluasi pembelajaran sesuai dengan prinsip-prinsip pembelajaran. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "96% - 100% guru merencanakan, melaksanakan, dan mengevaluasi pembelajaran sesuai dengan prinsip-prinsip pembelajaran " },
      { "id": 2, "nilai" : 3, "nama" : "91% - 95% guru merencanakan, melaksanakan, dan mengevaluasi pembelajaran sesuai dengan prinsip-prinsip pembelajaran " },
      { "id": 3, "nilai" : 2, "nama" : "86% - 90% guru merencanakan, melaksanakan, dan mengevaluasi pembelajaran sesuai dengan prinsip-prinsip pembelajaran " },
      { "id": 4, "nilai" : 1, "nama" : "81% - 85% guru merencanakan, melaksanakan, dan mengevaluasi pembelajaran sesuai dengan prinsip-prinsip pembelajaran " },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 81% guru merencanakan, melaksanakan, dan mengevaluasi pembelajaran sesuai dengan prinsip-prinsip pembelajaran " }
    ],
    "jawaban": 4
  },
  {
    "id": 5536,
    "bagian_id": 313,
    "nomor": 57,
    "nama": "Guru memiliki integritas kepribadian dan bertindak sesuai dengan norma agama, hukum, sosial, serta peraturan dan ketentuan yang berlaku. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Semua guru berperilaku sesuai dengan norma-norma agama, hukum, sosial, dan peraturan yang berlaku " },
      { "id": 2, "nilai" : 3, "nama" : "Terdapat guru yang berperilaku kurang sesuai dengan norma- norma agama, hukum, dan sosial serta telah dilakukan pembinaan " },
      { "id": 3, "nilai" : 2, "nama" : "Terdapat guru yang berperilaku tidak sesuai dengan norma- norma agama, hukum, dan sosial serta telah diberikan pembinaan dan sanksi " },
      { "id": 4, "nilai" : 1, "nama" : "Terdapat guru yang berperilaku bertentangan dengan norma- norma agama, hukum, dan sosial serta telah diberikan sanksi " },
      { "id": 5, "nilai" : 0, "nama" : "Terdapat guru yang melanggar norma-norma agama, hukum, dan sosial tetapi tidak diberikan tindakan " }
    ],
    "jawaban": 4
  },
  {
    "id": 5537,
    "bagian_id": 313,
    "nomor": 58,
    "nama": "Guru berkomunikasi secara efektif dan santun dengan sesama guru, tenaga kependidikan, siswa, dan orangtua siswa. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Guru berkomunikasi efektif dan santun dengan siswa, sesama guru, kepala sekolah/madrasah, orang tua siswa, dan komite sekolah/madrasah " },
      { "id": 2, "nilai" : 3, "nama" : "Guru berkomunikasi efektif dan santun dengan siswa, sesama guru, kepala sekolah/madrasah, dan orang tua siswa " },
      { "id": 3, "nilai" : 2, "nama" : "Guru berkomunikasi efektif dan santun dengan siswa, sesama guru, dan kepala sekolah/madrasah" },
      { "id": 4, "nilai" : 1, "nama" : "Guru berkomunikasi efektif dan santun dengan siswa dan sesama guru " },
      { "id": 5, "nilai" : 0, "nama" : "Guru tidak mampu berkomunikasi efektif dan santun " }
    ],
    "jawaban": 4
  },
  {
    "id": 5538,
    "bagian_id": 313,
    "nomor": 59,
    "nama": "Guru menguasai materi pelajaran yang diampu serta mengembangkannya secara ilmiah. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "96%-100% guru memiliki kesesuaian sertifikat pendidik dengan mata pelajaran yang diampu, menghasilkan karya tulis, dan mengikuti berbagai pertemuan ilmiah " },
      { "id": 2, "nilai" : 3, "nama" : "91%-95% guru memiliki kesesuaian sertifikat pendidik dengan mata pelajaran yang diampu, menghasilkan karya tulis, dan mengikuti berbagai pertemuan ilmiah " },
      { "id": 3, "nilai" : 2, "nama" : "86%-90% guru memiliki sertifikat pendidik dengan mata pelajaran yang diampu, menghasilkan karya tulis, dan mengikuti berbagai pertemuan ilmiah " },
      { "id": 4, "nilai" : 1, "nama" : "81%-85% guru memiliki sertifikat pendidik dengan mata pelajaran yang diampu, menghasilkan karya tulis, dan mengikuti berbagai pertemuan ilmiah " },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 81% guru memiliki sertifikat pendidik dengan mata pelajaran yang diampu, menghasilkan karya tulis, dan mengikuti berbagai pertemuan ilmiah " }
    ],
    "jawaban": 4
  },
  {
    "id": 5539,
    "bagian_id": 313,
    "nomor": 60,
    "nama": "Kepala sekolah/madrasah memiliki persyaratan sesuai dengan ketentuan yang berlaku. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Berstatus sebagai guru, memiliki SK sebagai kepala sekolah/madrasah, mempunyai pengalaman minimal 5 tahun sebagai guru, dan memiliki sertifikat pendidik " },
      { "id": 2, "nilai" : 3, "nama" : "Berstatus sebagai guru, memiliki SK sebagai kepala sekolah/madrasah, mempunyai pengalaman minimal 5 tahun sebagai guru, tetapi tidak memiliki sertifikat pendidik " },
      { "id": 3, "nilai" : 2, "nama" : "Berstatus sebagai guru, memiliki SK sebagai kepala sekolah/madrasah, mempunyai pengalaman antara 3_ 4 tahun sebagai guru " },
      { "id": 4, "nilai" : 1, "nama" : "Berstatus sebagai guru, memiliki SK sebagai kepala sekolah/madrasah, mempunyai pengalaman antara 1_ 2 tahun sebagai guru " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak berstatus sebagai guru tetap tetapi memiliki SK sebagai kepala sekolah/madrasah " }
    ],
    "jawaban": 4
  },
  {
    "id": 5540,
    "bagian_id": 313,
    "nomor": 61,
    "nama": "Kepala sekolah/madrasah memiliki kualifikasi akademik minimum sarjana (S1) atau diploma empat (D-IV). ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki kualifikasi akademik minimum berpendidikan S1 atau D-IV kependidikan dikeluarkan oleh perguruan tinggi terakreditasi " },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki kualifikasi akademik minimum berpendidikan S1 atau D-IV kependidikan dikeluarkan oleh perguruan tinggi tidak terakreditasi " },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki kualifikasi akademik minimum berpendidikan S1 atau D-IV nonkependidikan dikeluarkan oleh perguruan tinggi terakreditasi " },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki kualifikasi akademik minimum berpendidikan S1 atau D-IV nonkependidikan dikeluarkan oleh perguruan tinggi tidak terakreditasi " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki kualifikasi akademik minimum yang dipersyaratkan " }
    ],
    "jawaban": 4
  },
  {
    "id": 5541,
    "bagian_id": 313,
    "nomor": 62,
    "nama": "Kepala sekolah/madrasah memiliki pengalaman mengajar sekurang- kurangnya 5 tahun pada waktu diangkat sebagai kepala sekolah/ madrasah. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki pengalaman mengajar 5 tahun atau lebih " },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki pengalaman mengajar 3-4 tahun " },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki pengalaman mengajar 2-3 tahun " },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki pengalaman mengajar 1-2 tahun " },
      { "id": 5, "nilai" : 0, "nama" : "Memiliki pengalaman mengajar kurang dari 1 tahun " }
    ],
    "jawaban": 4
  },
  {
    "id": 5542,
    "bagian_id": 313,
    "nomor": 63,
    "nama": "Kepala sekolah/madrasah memiliki kemampuan manajerial yang ditunjukkan dengan kemajuan/keberhasian dalam mengelola: (1) kesiswaan, (2) guru dan tenaga kependidikan, (3) pengembangan kurikulum, (4) sarana dan prasarana, (5) pembiayaan, dan (6) hubungan dengan masyarakat. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Menunjukkan pencapaian kemajuan pada 6 aspek atau lebih " },
      { "id": 2, "nilai" : 3, "nama" : "Menunjukkan pencapaian kemajuan pada 4-5 aspek " },
      { "id": 3, "nilai" : 2, "nama" : "Menunjukkan pencapaian kemajuan pada 2-3 aspek " },
      { "id": 4, "nilai" : 1, "nama" : "Menunjukkan pencapaian kemajuan pada 1 aspek " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak menunjukkan pencapaian kemajuan " }
    ],
    "jawaban": 4
  },
  {
    "id": 5543,
    "bagian_id": 313,
    "nomor": 64,
    "nama": "Kepala sekolah/madrasah memiliki kemampuan kewirausahaan yang ditunjukkan antara lain dengan adanya naluri kewirausahaan dalam mengelola kegiatan produksi/jasa sebagai sumber belajar siswa. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki kemampuan dalam menciptakan inovasi pengembangan sekolah/madrasah, bekerja keras, bermotivasi tinggi, mandiri, dan kreatif dalam mencari solusi " },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki kemampuan dalam menciptakan inovasi pengembangan sekolah/madrasah, bekerja keras, bermotivasi tinggi, dan mandiri " },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki kemampuan dalam menciptakan inovasi pengembangan sekolah/madrasah, bekerja keras, dan bermotivasi tinggi " },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki kemampuan dalam menciptakan inovasi pengembangan sekolah/madrasah, dan bekerja keras" },
      { "id": 5, "nilai" : 0, "nama" : "Memiliki kemampuan dalam menciptakan inovasi pengembangan sekolah/madrasah " }
    ],
    "jawaban": 4
  },
  {
    "id": 5544,
    "bagian_id": 313,
    "nomor": 65,
    "nama": "Kepala sekolah/madrasah melakukan supervisi setiap tahun. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "91%-100% guru telah disupervisi " },
      { "id": 2, "nilai" : 3, "nama" : "81%-90% guru telah disupervisi " },
      { "id": 3, "nilai" : 2, "nama" : "71%-80% guru telah disupervisi " },
      { "id": 4, "nilai" : 1, "nama" : "61%-70% guru telah disupervisi " },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 61% guru telah disupervisi " }
    ],
    "jawaban": 4
  },
  {
    "id": 5545,
    "bagian_id": 313,
    "nomor": 66,
    "nama": "Tenaga administrasi memiliki kualifikasi akademik pendidikan menengah atau yang sederajat. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki 5 orang atau lebih tenaga administrasi berkualifikasi pendidikan menengah atau sederajat " },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki 4 orang tenaga administrasi berkualifikasi pendidikan menengah atau sederajat " },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki 3 orang tenaga administrasi berkualifikasi pendidikan menengah atau sederajat " },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki 2 atau 1 orang tenaga administrasi berkualifikasi pendidikan menengah atau sederajat " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki tenaga administrasi berkualifikasi pendidikan menengah atau sederajat " }
    ],
    "jawaban": 4
  },
  {
    "id": 5546,
    "bagian_id": 313,
    "nomor": 67,
    "nama": "Tenaga administrasi memiliki latar belakang pendidikan yang sesuai dengan bidang tugasnya. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "5 orang atau lebih tenaga administrasi yang memiliki kesesuaian " },
      { "id": 2, "nilai" : 3, "nama" : "4 orang tenaga administrasi yang memiliki kesesuaian " },
      { "id": 3, "nilai" : 2, "nama" : "3 orang tenaga administrasi yang memiliki kesesuaian " },
      { "id": 4, "nilai" : 1, "nama" : "2 atau 1 orang tenaga administrasi yang memiliki kesesuaian " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki tenaga administrasi yang memiliki kesesuaian " }
    ],
    "jawaban": 4
  },
  {
    "id": 5547,
    "bagian_id": 313,
    "nomor": 68,
    "nama": "Sekolah/Madrasah memiliki kepala perpustakaan dengan kualifikasi minimal D2 ilmu perpustakaan dan memiliki sertifikat kompetensi pengelolaan perpustakaan sekolah/madrasah. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Kepala perpustakaan memiliki kualifikasi minimal D2 ilmu perpustakaan dan memiliki sertifikat kompetensi pengelolaan perpustakaan sekolah/madrasah " },
      { "id": 2, "nilai" : 3, "nama" : "Kepala perpustakaan memiliki kualifikasi minimal D2 ilmu perpustakaan dan tidak memiliki sertifikat kompetensi pengelolaan perpustakaan sekolah/madrasah " },
      { "id": 3, "nilai" : 2, "nama" : "Kepala perpustakaan memiliki kualifikasi minimal D2 bukan ilmu perpustakaan dan memiliki sertifikat kompetensi pengelolaan perpustakaan sekolah/madrasah " },
      { "id": 4, "nilai" : 1, "nama" : "Kepala perpustakaan memiliki kualifikasi minimal D2 bukan ilmu perpustakaan dan tidak memiliki sertifikat kompetensi pengelolaan perpustakaan sekolah/madrasah " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki kepala perpustakaan " }
    ],
    "jawaban": 4
  },
  {
    "id": 5548,
    "bagian_id": 313,
    "nomor": 69,
    "nama": "Sekolah/Madrasah memiliki tenaga perpustakaan dengan kualifikasi minimal SMA atau yang sederajat dan memiliki sertifikat kompetensi pengelolaan perpustakaan sekolah/madrasah. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki kualifikasi minimal SMA atau yang sederajat dan memiliki sertifikat. " },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki kualifikasi minimal SMA atau yang sederajat dan tidak memiliki sertifikat " },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki kualifikasi di bawah SMA dan memiliki sertifikat " },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki kualifikasi di bawah SMA dan tidak memiliki sertifikat " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki tenaga perpustakaan " }
    ],
    "jawaban": 4
  },
  {
    "id": 5549,
    "bagian_id": 313,
    "nomor": 70,
    "nama": "Tenaga laboratorium memiliki kualifikasi pendidikan yang dipersyaratkan. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki tenaga laboratorium minimal 2 orang, keduanya memenuhi kualifikasi Diploma satu (D-1) " },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki tenaga laboratorium minimal 2 orang, salah satu di antaranya memenuhi kualifikasi D-1 " },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki tenaga laboratorium minimal 1 orang dan memenuhi kualifikasi D-1 " },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki tenaga laboratorium minimal 1 orang dan tidak memenuhi kualifikasi D-1 " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki tenaga laboratorium " }
    ],
    "jawaban": 4
  },
  {
    "id": 5550,
    "bagian_id": 313,
    "nomor": 71,
    "nama": "Tenaga laboratorium memiliki latar belakang pendidikan sesuai dengan tugasnya. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki tenaga laboratorium minimal 2 orang, keduanya sesuai dengan tugasnya " },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki tenaga laboratorium minimal 2 orang, salah satu di antaranya sesuai dengan tugasnya " },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki tenaga laboratorium minimal 1 orang dan sesuai dengan tugasnya " },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki tenaga laboratorium minimal 1 orang dan tidak sesuai dengan tugasnya " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki tenaga laboratorium " }
    ],
    "jawaban": 4
  },
  {
    "id": 5551,
    "bagian_id": 313,
    "nomor": 72,
    "nama": "Sekolah/Madrasah memiliki petugas layanan khusus. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki 4 jenis atau lebih petugas layanan khusus " },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki 3 jenis petugas layanan khusus" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki 2 jenis petugas layanan khusus" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki 1 jenis petugas layanan khusus" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki satupun petugas layanan khusus " }
    ],
    "jawaban": 4
  },
  {
    "id": 5552,
    "bagian_id": 314,
    "nomor": 73,
    "nama": "Sekolah/Madrasah memiliki luas lahan sesuai ketentuan luas minimal. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki luas lahan sesuai ketentuan" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki lahan seluas 90%-99% dari ketentuan " },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki lahan seluas 80%-89% dari ketentuan " },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki lahan seluas 70%-79% dari ketentuan " },
      { "id": 5, "nilai" : 0, "nama" : "Memiliki lahan seluas kurang dari 70% dari ketentuan " }
    ],
    "jawaban": 4
  },
  {
    "id": 5553,
    "bagian_id": 314,
    "nomor": 74,
    "nama": "Sekolah/Madrasah berada di lokasi yang aman, terhindar dari potensi bahaya yang mengancam kesehatan dan keselamatan jiwa, serta memiliki akses untuk penyelamatan dalam keadaan darurat. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Berada di lokasi aman, terhindar dari potensi bahaya yang mengancam kesehatan dan keselamatan jiwa, serta memiliki akses untuk penyelamatan dalam keadaan darurat " },
      { "id": 2, "nilai" : 3, "nama" : "Berada di lokasi aman, terhindar dari potensi bahaya yang mengancam kesehatan dan keselamatan jiwa, tetapi tidak memiliki akses untuk penyelamatan dalam keadaan darurat " },
      { "id": 3, "nilai" : 2, "nama" : "Berada di lokasi aman, terhindar dari potensi bahaya yang mengancam keselamatan jiwa, tetapi tidak terhindar dari potensi bahaya yang mengancam kesehatan jiwa, serta tidak memiliki akses untuk penyelamatan dalam keadaan darurat " },
      { "id": 4, "nilai" : 1, "nama" : "Berada di lokasi aman, terhindar dari potensi bahaya yang mengancam kesehatan jiwa, tetapi tidak terhindar dari potensi bahaya yang mengancam keselamatan jiwa, serta tidak memiliki akses untuk penyelamatan dalam keadaan darurat " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak berada di lokasi aman " }
    ],
    "jawaban": 4
  },
  {
    "id": 5554,
    "bagian_id": 314,
    "nomor": 75,
    "nama": "Sekolah/Madrasah berada di lokasi yang nyaman, terhindar dari gangguan pencemaran air, kebisingan, dan pencemaran udara serta memiliki sarana untuk meningkatkan kenyamanan. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Berada di lokasi yang nyaman, terhindar dari gangguan pencemaran air, kebisingan, dan pencemaran udara serta memiliki sarana untuk meningkatkan kenyamanan " },
      { "id": 2, "nilai" : 3, "nama" : "Berada di lokasi yang nyaman, terhindar dari gangguan pencemaran air, kebisingan, dan pencemaran udara, tetapi tidak memiliki sarana untuk meningkatkan kenyamanan " },
      { "id": 3, "nilai" : 2, "nama" : "Berada di lokasi yang nyaman, terhindar dari gangguan pencemaran air dan kebisingan, tetapi tidak terhindar dari gangguan pencemaran udara, serta tidak memiliki sarana untuk meningkatkan kenyamanan " },
      { "id": 4, "nilai" : 1, "nama" : "Berada di lokasi yang nyaman, terhindar dari gangguan pencemaran air, tidak terhindar dari gangguan kebisingan dan pencemaran udara, serta tidak memiliki sarana untuk meningkatkan kenyamanan " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak berada di lokasi yang nyaman " }
    ],
    "jawaban": 4
  },
  {
    "id": 5555,
    "bagian_id": 314,
    "nomor": 76,
    "nama": "Sekolah/Madrasah berada di lokasi yang sesuai dengan peruntukannya, memiliki status hak atas tanah dan izin pemanfaatan dari pemegang hak atas tanah. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Berada di lokasi yang sesuai dengan peruntukannya, memiliki status hak atas tanah dan izin pemanfaatan dari pemegang hak atas tanah " },
      { "id": 2, "nilai" : 3, "nama" : "Berada di lokasi yang sesuai dengan peruntukannya dan memiliki status hak atas tanah, tetapi tidak memiliki izin pemanfaatan dari pemegang hak atas tanah" },
      { "id": 3, "nilai" : 2, "nama" : "Berada di lokasi yang sesuai dengan peruntukannya, tidak memiliki status hak atas tanah, tetapi memiliki izin pemanfaatan dari pemegang hak atas tanah " },
      { "id": 4, "nilai" : 1, "nama" : "Berada di lokasi yang sesuai dengan peruntukannya, tidak memiliki status hak atas tanah dan tidak memiliki izin pemanfaatan dari pemegang hak atas tanah " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak berada di lokasi sesuai dengan peruntukannya " }
    ],
    "jawaban": 4
  },
  {
    "id": 5556,
    "bagian_id": 314,
    "nomor": 77,
    "nama": "Sekolah/Madrasah memiliki lantai bangunan sesuai dengan ketentuan luas minimal. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "memiliki luas lantai bangunan sesuai dengan ketentuan " },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki lantai bangunan seluas 90%-99% dari ketentuan " },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki lantai bangunan seluas 80%-89% dari ketentuan " },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki lantai bangunan seluas 70%-79% dari ketentuan " },
      { "id": 5, "nilai" : 0, "nama" : "Memiliki lantai bangunan seluas kurang dari 70% dari ketentuan " }
    ],
    "jawaban": 4
  },
  {
    "id": 5557,
    "bagian_id": 314,
    "nomor": 78,
    "nama": "Bangunan sekolah/madrasah memiliki struktur yang stabil dan kokoh serta dilengkapi dengan sistem pencegahan bahaya kebakaran dan petir. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki struktur yang stabil dan kokoh serta dilengkapi dengan sistem pencegahan bahaya kebakaran dan petir " },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki struktur yang stabil dan kokoh tetapi tidak dilengkapi dengan sistem pencegahan bahaya kebakaran" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki struktur yang stabil tetapi kurang kokoh dan tidak dilengkapi dengan sistem pencegahan bahaya kebakaran" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki struktur yang tidak stabil dan kurang kokoh tetapi dilengkapi dengan sistem pencegahan bahaya kebakaran " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki struktur yang stabil dan kokoh serta tidak dilengkapi dengan sistem pencegahan bahaya kebakaran dan petir " }
    ],
    "jawaban": 4
  },
  {
    "id": 5558,
    "bagian_id": 314,
    "nomor": 79,
    "nama": "Bangunan sekolah/madrasah memiliki sanitasi sebagai persyaratan kesehatan. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki 4 jenis atau lebih sanitasi sebagai persyaratan kesehatan " },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki 3 jenis sanitasi sebagai persyaratan kesehatan " },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki 2 jenis sanitasi sebagai persyaratan kesehatan " },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki 1 jenis sanitasi sebagai persyaratan kesehatan " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki sanitasi memenuhi persyaratan kesehatan " }
    ],
    "jawaban": 4
  },
  {
    "id": 5559,
    "bagian_id": 314,
    "nomor": 80,
    "nama": "Bangunan sekolah/madrasah memiliki ventilasi udara dan pencahayaan yang memadai. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki ventilasi udara memadai dan pencahayaan memadai " },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki ventilasi udara yang kurang memadai tetapi pencahayaan memadai" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki ventilasi udara kurang memadai dan pencahayaan kurang memadai" },
      { "id": 4, "nilai" : 1, "nama" : "Tidak memilki ventilasi udara tetapi memiliki pencahayaan yang kurang memadai" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki ventilasi udara dan pencahayaan" }
    ],
    "jawaban": 4
  },
  {
    "id": 5560,
    "bagian_id": 314,
    "nomor": 81,
    "nama": "Bangunan sekolah/madrasah memiliki instalasi listrik atau sumber daya lainnya. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki instalasi listrik dengan daya di atas 1300 watt " },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki instalasi listrik dengan daya 1300 watt " },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki instalasi listrik dengan daya 900 watt " },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki instalasi listrik dengan daya 450 Watt " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki instalasi listrik " }
    ],
    "jawaban": 4
  },
  {
    "id": 5561,
    "bagian_id": 314,
    "nomor": 82,
    "nama": "Sekolah/Madrasah memiliki izin mendirikan bangunan dan izin penggunaan bangunan sesuai dengan peruntukannya. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki izin mendirikan bangunan dan izin penggunaan bangunan sesuai dengan peruntukannya sebelum bangunan berdiri " },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki izin mendirikan bangunan, dan memiliki izin penggunaan bangunan sesuai dengan peruntukannya setelah bangunan berdiri " },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki izin mendirikan dan memiliki izin penggunaan bangunan sementara " },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki izin mendirikan tetapi tidak memiliki izin penggunaan bangu " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki izin mendirikan bangunan dan izin penggunaan bangunan " }
    ],
    "jawaban": 4
  },
  {
    "id": 5562,
    "bagian_id": 314,
    "nomor": 83,
    "nama": "Sekolah/Madrasah melakukan pemeliharaan terhadap bangunan secara berkala. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melakukan pemeliharaan ringan dan berat terhadap bangunan secara berkala sesuai ketentuan " },
      { "id": 2, "nilai" : 3, "nama" : "Melakukan pemeliharaan ringan dan berat terhadap bangunan, tetapi melebihi waktu dalam ketentuan " },
      { "id": 3, "nilai" : 2, "nama" : "Melakukan pemeliharaan ringan tetapi melebihi waktu yang sesuai ketentuan, dan tidak pernah melakukan pemeliharaan berat " },
      { "id": 4, "nilai" : 1, "nama" : "Melakukan pemeliharaan terhadap bangunan, jika sudah ada bagian bangunan yang rusak berat " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak pernah melakukan pemeliharaan " }
    ],
    "jawaban": 4
  },
  {
    "id": 5563,
    "bagian_id": 314,
    "nomor": 84,
    "nama": "Sekolah/Madrasah memiliki prasarana yang lengkap sesuai ketentuan. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki 15 atau lebih jenis prasarana yang dipersyaratkan " },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki 11-14 jenis prasarana yang dipersyaratkan " },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki 6-10 jenis prasarana yang dipersyaratkan " },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki 1-5 jenis prasarana yang dipersyaratkan " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki prasarana sendiri " }
    ],
    "jawaban": 4
  },
  {
    "id": 5564,
    "bagian_id": 314,
    "nomor": 85,
    "nama": "Sekolah/Madrasah memiliki ruang kelas dengan jumlah, ukuran, dan sarana sesuai ketentuan. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki ruang kelas dengan jumlah, ukuran, dan sarana sesuai ketentuan " },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki ruang kelas dengan jumlah dan ukuran tidak sesuai ketentuan tetapi memiliki sarana sesuai ketentuan " },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki ruang kelas dengan jumlah dan ukuran sesuai ketentuan tetapi memiliki sarana tidak sesuai ketentuan " },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki ruang kelas dengan ukuran, jumlah, dan sarana tidak sesuai ketentuan " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki ruang kelas atau gedung sendiri " }
    ],
    "jawaban": 4
  },
  {
    "id": 5565,
    "bagian_id": 314,
    "nomor": 86,
    "nama": "Sekolah/Madrasah memiliki ruang perpustakaan dengan luas dan sarana sesuai ketentuan. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki ruang perpustakaan dengan luas dan sarana sesuai dengan ketentuan " },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki ruang perpustakaan dengan luas tidak sesuai ketentuan tetapi memiliki sarana sesuai ketentuan " },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki ruang perpustakaan dengan luas sesuai ketentuan tetapi memiliki sarana tidak sesuai ketentuan " },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki ruang perpustakaan dengan luas dan sarana tidak sesuai ketentuan " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki ruang perpustakaan " }
    ],
    "jawaban": 4
  },
  {
    "id": 5566,
    "bagian_id": 314,
    "nomor": 87,
    "nama": "Sekolah/Madrasah memiliki ruang laboratorium biologi yang dapat menampung minimum satu rombongan belajar dengan luas dan sarana sesuai ketentuan. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki ruang laboratorium biologi, yang dapat menampung minimum satu rombongan belajar, dengan luas dan sarana sesuai ketentuan " },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki ruang laboratorium biologi, yang dapat menampung minimum satu rombongan belajar, dengan luas tidak sesuai ketentuan tetapi memiliki sarana sesuai ketentuan " },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki ruang laboratorium biologi, yang dapat menampung minimum satu rombongan belajar, dengan luas sesuai ketentuan tetapi memiliki sarana tidak sesuai ketentuan " },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki ruang laboratorium biologi, yang tidak dapat menampung minimum satu rombongan belajar, dengan luas dan sarana tidak sesuai ketentuan " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki ruang laboratorium biologi " }
    ],
    "jawaban": 4
  },
  {
    "id": 5567,
    "bagian_id": 314,
    "nomor": 88,
    "nama": "Sekolah/Madrasah memiliki ruang laboratorium fisika yang dapat menampung minimum satu rombongan belajar dengan luas dan sarana sesuai ketentuan. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki ruang laboratorium fisika, yang dapat menampung minimum satu rombongan belajar, dengan luas dan sarana sesuai ketentuan " },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki ruang laboratorium fisika, yang dapat menampung minimum satu rombongan belajar, dengan luas tidak sesuai ketentuan tetapi memiliki sarana sesuai ketentuan " },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki ruang laboratorium fisika, yang dapat menampung minimum satu rombongan belajar, dengan luas sesuai ketentuan tetapi memiliki sarana tidak sesuai ketentuan " },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki ruang laboratorium fisika, yang tidak dapat menampung minimum satu rombongan belajar, dengan luas dan sarana tidak sesuai ketentuan " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki ruang laboratorium fisika " }
    ],
    "jawaban": 4
  },
  {
    "id": 5568,
    "bagian_id": 314,
    "nomor": 89,
    "nama": "Sekolah/Madrasah memiliki ruang laboratorium kimia yang dapat menampung minimum satu rombongan belajar dengan luas dan sarana sesuai ketentuan. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki ruang laboratorium kimia, yang dapat menampung minimum satu rombongan belajar, dengan luas dan sarana sesuai ketentuan " },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki ruang laboratorium kimia, yang dapat menampung minimum satu rombongan belajar, dengan luas tidak sesuai ketentuan tetapi memiliki sarana sesuai ketentuan " },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki ruang laboratorium kimia, yang dapat menampung minimum satu rombongan belajar, dengan luas sesuai ketentuan tetapi memiliki sarana tidak sesuai ketentuan " },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki ruang laboratorium kimia, yang tidak dapat menampung minimum satu rombongan belajar, dengan luas dan sarana tidak sesuai ketentuan " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki ruang laboratorium kimia " }
    ],
    "jawaban": 4
  },
  {
    "id": 5569,
    "bagian_id": 314,
    "nomor": 90,
    "nama": "Sekolah/Madrasah memiliki ruang laboratorium komputer yang dapat menampung minimum satu rombongan belajar dengan luas dan sarana sesuai ketentuan. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki ruang laboratorium komputer, yang dapat menampung minimum satu rombongan belajar, dengan luas dan sarana sesuai ketentuan " },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki ruang laboratorium komputer, yang dapat menampung minimum satu rombongan belajar, dengan luas tidak sesuai ketentuan tetapi memiliki sarana sesuai ketentuan " },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki ruang laboratorium komputer, yang dapat menampung minimum satu rombongan belajar, dengan luas sesuai ketentuan tetapi memiliki sarana tidak sesuai ketentuan " },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki ruang laboratorium komputer, yang tidak dapat menampung minimum satu rombongan belajar, dengan luas dan sarana tidak sesuai ketentuan " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki ruang laboratorium komputer " }
    ],
    "jawaban": 4
  },
  {
    "id": 5570,
    "bagian_id": 314,
    "nomor": 91,
    "nama": "Sekolah/Madrasah memiliki ruang laboratorium bahasa yang dapat menampung minimum satu rombongan belajar dengan luas dan sarana sesuai ketentuan. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki ruang laboratorium bahasa, yang dapat menampung minimum satu rombongan belajar, dengan luas dan sarana sesuai ketentuan " },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki ruang laboratorium bahasa, yang dapat menampung minimum satu rombongan belajar, dengan luas tidak sesuai ketentuan tetapi memiliki sarana sesuai ketentuan " },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki ruang laboratorium bahasa, yang dapat menampung minimum satu rombongan belajar, dengan luas sesuai ketentuan tetapi memiliki sarana tidak sesuai ketentuan " },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki ruang laboratorium bahasa, yang tidak dapat menampung minimum satu rombongan belajar, dengan luas dan sarana tidak sesuai ketentuan " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki ruang laboratorium bahasa " }
    ],
    "jawaban": 4
  },
  {
    "id": 5571,
    "bagian_id": 314,
    "nomor": 92,
    "nama": "Sekolah/Madrasah memiliki ruang pimpinan dengan luas dan sarana sesuai ketentuan. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki ruang pimpinan dengan luas dan sarana sesuai ketentuan " },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki ruang pimpinan dengan luas tidak sesuai ketentuan tetapi memiliki sarana sesuai ketentuan " },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki ruang pimpinan dengan luas sesuai ketentuan tetapi memiliki sarana tidak sesuai ketentuan " },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki ruang pimpinan dengan luas dan sarana tidak sesuai ketentuan " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki ruang pimpinan " }
    ],
    "jawaban": 4
  },
  {
    "id": 5628,
    "bagian_id": 317,
    "nomor": 149,
    "nama": "Guru mengembangkan instrumen dan pedoman penilaian sesuai dengan bentuk dan teknik penilaian. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "96%-100% guru mengembangkan instrumen dan pedoman penilaian sesuai dengan bentuk dan teknik penilaian " },
      { "id": 2, "nilai" : 3, "nama" : "91%-95% guru mengembangkan instrumen dan pedoman penilaian sesuai dengan bentuk dan teknik penilaian " },
      { "id": 3, "nilai" : 2, "nama" : "86%-90% guru mengembangkan instrumen dan pedoman penilaian sesuai dengan bentuk dan teknik penilaian " },
      { "id": 4, "nilai" : 1, "nama" : "81%-85% guru mengembangkan instrumen dan pedoman penilaian sesuai dengan bentuk dan teknik penilaian " },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 81% guru mengembangkan instrumen dan pedoman penilaian " }
    ],
    "jawaban": 4
  },
  {
    "id": 5572,
    "bagian_id": 314,
    "nomor": 93,
    "nama": "Sekolah/Madrasah memiliki ruang guru dengan luas dan sarana sesuai ketentuan. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki ruang guru dengan luas dan sarana sesuai ketentuan " },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki ruang guru dengan luas tidak sesuai ketentuan tetapi memiliki sarana sesuai ketentuan " },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki ruang guru dengan luas sesuai ketentuan tetapi memiliki sarana tidak sesuai ketentuan " },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki ruang guru dengan luas dan sarana tidak sesuai ketentuan " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki ruang guru " }
    ],
    "jawaban": 4
  },
  {
    "id": 5573,
    "bagian_id": 314,
    "nomor": 94,
    "nama": "Sekolah/Madrasah memiliki ruang tata usaha dengan luas dan sarana sesuai ketentuan. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki ruang tata usaha dengan luas dan sarana sesuai ketentuan " },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki ruang tata usaha dengan luas tidak sesuai ketentuan tetapi memiliki sarana sesuai ketentuan " },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki ruang tata usaha dengan luas sesuai ketentuan tetapi memiliki sarana tidak sesuai ketentuan" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki ruang tata usaha dengan luas dan sarana tidak sesuai ketentuan " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki ruang tata usaha " }
    ],
    "jawaban": 4
  },
  {
    "id": 5574,
    "bagian_id": 314,
    "nomor": 95,
    "nama": "Sekolah/Madrasah memiliki tempat beribadah bagi warga sekolah/madrasah dengan luas dan perlengkapan sesuai ketentuan. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki tempat beribadah dengan luas dan perlengkapan sesuai ketentuan " },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki tempat beribadah dengan luas tidak sesuai ketentuan, tetapi memiliki perlengkapan sesuai ketentuan" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki tempat beribadah dengan luas sesuai ketentuan, tetapi memiliki perlengkapan tidak sesuai ketentuan " },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki tempat beribadah dengan luas dan perlengkapan tidak sesuai ketentuan " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki tempat beribadah " }
    ],
    "jawaban": 4
  },
  {
    "id": 5575,
    "bagian_id": 314,
    "nomor": 96,
    "nama": "Sekolah/Madrasah memiliki ruang konseling dengan luas dan sarana sesuai ketentuan. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki ruang konseling dengan luas dan sarana sesuai ketentuan " },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki ruang konseling dengan luas tidak sesuai ketentuan tetapi memiliki sarana sesuai ketentuan" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki ruang konseling dengan luas sesuai ketentuan tetapi memiliki sarana tidak sesuai ketentuan " },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki ruang konseling dengan luas dan sarana tidak sesuai ketentuan " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki ruang konseling " }
    ],
    "jawaban": 4
  },
  {
    "id": 5576,
    "bagian_id": 314,
    "nomor": 97,
    "nama": "Sekolah/Madrasah memiliki ruang UKS/M dengan dengan luas dan sarana sesuai ketentuan. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki ruang UKS/M dengan luas dan sarana sesuai ketentuan " },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki ruang UKS/M dengan luas tidak sesuai ketentuan tetapi memiliki sarana sesuai ketentuan " },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki ruang UKS/M dengan luas sesuai ketentuan tetapi memiliki sarana tidak sesuai ketentuan " },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki ruang UKS/M dengan luas dan sarana tidak sesuai ketentuan " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki ruang UKS/M " }
    ],
    "jawaban": 4
  },
  {
    "id": 5577,
    "bagian_id": 314,
    "nomor": 98,
    "nama": "Sekolah/Madrasah memiliki ruang organisasi kesiswaan dengan luas dan sarana sesuai ketentuan. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki ruang organisasi kesiswaan dengan luas dan sarana sesuai ketentuan " },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki ruang organisasi kesiswaan dengan luas tidak sesuai ketentuan tetapi memiliki sarana sesuai ketentuan " },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki ruang organisasi kesiswaan dengan luas sesuai ketentuan tetapi memiliki sarana tidak sesuai ketentuan " },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki ruang organisasi kesiswaan dengan luas dan sarana tidak sesuai ketentuan " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki ruang organisasi kesiswaan " }
    ],
    "jawaban": 4
  },
  {
    "id": 5578,
    "bagian_id": 314,
    "nomor": 99,
    "nama": "Sekolah/Madrasah memiliki jamban dengan jumlah, ukuran, dan sarana sesuai ketentuan. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki jamban dengan jumlah, ukuran, dan sarana sesuai ketentuan " },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki jamban dengan jumlah dan ukuran tidak sesuai ketentuan tetapi memiliki sarana sesuai dengan ketentuan " },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki jamban dengan jumlah dan ukuran sesuai ketentuan tetapi memiliki sarana tidak sesuai ketentuan " },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki jamban dengan jumlah, ukuran, dan sarana tidak sesuai ketentuan " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki jamban " }
    ],
    "jawaban": 4
  },
  {
    "id": 5579,
    "bagian_id": 314,
    "nomor": 100,
    "nama": "Sekolah/Madrasah memiliki gudang dengan luas dan sarana sesuai ketentuan. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki gudang dengan luas dan sarana sesuai ketentuan " },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki gudang dengan luas tidak sesuai ketentuan tetapi memiliki sarana sesuai ketentuan " },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki gudang dengan luas sesuai ketentuan tetapi memiliki sarana tidak sesuai ketentuan " },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki gudang dengan luas dan sarana tidak sesuai ketentuan " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki gudang " }
    ],
    "jawaban": 4
  },
  {
    "id": 5580,
    "bagian_id": 314,
    "nomor": 101,
    "nama": "Sekolah/Madrasah memiliki ruang sirkulasi dengan luas dan kualitas sesuai ketentuan. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki ruang sirkulasi dengan luas dan kualitas sesuai ketentuan " },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki ruang sirkulasi dengan luas tidak sesuai ketentuan tetapi memiliki kualitas sesuai ketentuan " },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki ruang sirkulasi dengan luas sesuai ketentuan tetapi memiliki kualitas tidak ketentuan " },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki ruang sirkulasi dengan luas dan kualitas tidak sesuai ketentuan " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki ruang sirkulasi " }
    ],
    "jawaban": 4
  },
  {
    "id": 5581,
    "bagian_id": 314,
    "nomor": 102,
    "nama": "Sekolah/Madrasah memiliki tempat bermain/berolahraga dengan luas dan sarana sesuai ketentuan. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki tempat bermain/berolahraga dengan luas dan sarana sesuai ketentuan " },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki tempat bermain/berolahraga dengan luas tidak sesuai ketentuan tetapi memiliki sarana sesuai ketentuan " },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki tempat bermain/berolahraga dengan luas sesuai ketentuan tetapi memiliki sarana tidak sesuai ketentuan " },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki tempat bermain/berolahraga dengan luas dan sarana tidak sesuai ketentuan " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki tempat bermain/berolahraga " }
    ],
    "jawaban": 4
  },
  {
    "id": 5582,
    "bagian_id": 315,
    "nomor": 103,
    "nama": "Sekolah/Madrasah telah merumuskan, menetapkan, dan mensosialisasikan visi lembaga. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Merumuskan dan menetapkan visi, mudah dipahami dan sering disosialisasikan " },
      { "id": 2, "nilai" : 3, "nama" : "Merumuskan dan menetapkan visi, mudah dipahami dan pernah disosialisasikan " },
      { "id": 3, "nilai" : 2, "nama" : "Merumuskan dan menetapkan visi, mudah dipahami tetapi tidak disosialisasikan " },
      { "id": 4, "nilai" : 1, "nama" : "Merumuskan dan menetapkan visi, sulit dipahami dan tidak disosialisasikan " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak merumuskan dan menetapkan visi " }
    ],
    "jawaban": 4
  },
  {
    "id": 5583,
    "bagian_id": 315,
    "nomor": 104,
    "nama": "Sekolah/Madrasah telah merumuskan, menetapkan, mensosialisasikan misi lembaga. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Merumuskan, menetapkan, dan mensosialisasikan secara terus menerus misi dalam berbagai kesempatan " },
      { "id": 2, "nilai" : 3, "nama" : "Merumuskan, menetapkan, dan sering mensosialisasikan misi dalam berbagai kesempatan " },
      { "id": 3, "nilai" : 2, "nama" : "Merumuskan, menetapkan, dan kadang-kadang mensosialisasikan misi dalam berbagai kesempatan " },
      { "id": 4, "nilai" : 1, "nama" : "Merumuskan, menetapkan, dan tidak pernah mensosialisasikan misi dalam berbagai kesempatan " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki misi " }
    ],
    "jawaban": 4
  },
  {
    "id": 5584,
    "bagian_id": 315,
    "nomor": 105,
    "nama": "Sekolah/Madrasah telah merumuskan, menetapkan, dan mensosialisasikan tujuan sekolah. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Merumuskan, menetapkan, dan mensosialisasikan secara terus menerus tujuan sekolah dalam berbagai kesempatan " },
      { "id": 2, "nilai" : 3, "nama" : "Merumuskan, menetapkan, dan sering mensosialisasikan tujuan dalam berbagai kesempatan " },
      { "id": 3, "nilai" : 2, "nama" : "Merumuskan, menetapkan, dan kadang-kadang mensosialisasikan tujuan dalam berbagai kesempatan " },
      { "id": 4, "nilai" : 1, "nama" : "Merumuskan, menetapkan, dan tidak pernah mensosialisasikan tujuan dalam berbagai kesempatan " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki tujuan " }
    ],
    "jawaban": 4
  },
  {
    "id": 5585,
    "bagian_id": 315,
    "nomor": 106,
    "nama": "Sekolah/Madrasah memiliki rencana kerja jangka menengah (empat tahunan) dan rencana kerja tahunan serta disosialisasikan. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki rencana kerja jangka menengah dan rencana kerja tahunan keduanya saling berkaitan serta keduanya sudah disosialisasikan " },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki rencana kerja jangka menengah dan rencana kerja tahunan keduanya saling berkaitan serta salah satunya sudah disosialisasikan " },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki rencana kerja jangka menengah dan rencana kerja tahunan keduanya tidak saling berkaitan serta sudah disosialisasikan " },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki rencana kerja jangka menengah atau rencana kerja tahunan, serta sudah disosialisasikan " },
      { "id": 5, "nilai" : 0, "nama" : "Memiliki rencana kerja tahunan tetapi tidak disosialisasikan. " }
    ],
    "jawaban": 4
  },
  {
    "id": 5624,
    "bagian_id": 316,
    "nomor": 145,
    "nama": "Sekolah/Madrasah memiliki pembukuan biaya operasional. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki pembukuan biaya operasional selama 4 tahun terakhir " },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki pembukuan biaya operasional selama 3 tahun terakhir " },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki pembukuan biaya operasional selama 2 tahun terakhir " },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki pembukuan biaya operasional selama 1 tahun terakhir " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki pembukuan biaya operasional " }
    ],
    "jawaban": 4
  },
  {
    "id": 5586,
    "bagian_id": 315,
    "nomor": 107,
    "nama": "Sekolah/Madrasah memiliki pedoman yang mengatur berbagai aspek pengelolaan secara tertulis yang mudah dipahami oleh pihak-pihak terkait. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki 7 atau lebih dokumen aspek pengelolaan secara tertulis " },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki 5-6 dokumen aspek pengelolaan secara tertulis " },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki 3-4 dokumen aspek pengelolaan secara tertulis " },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki 1-2 dokumen aspek pengelolaan secara tertulis " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki dokumen aspek pengelolaan secara tertulis " }
    ],
    "jawaban": 4
  },
  {
    "id": 5587,
    "bagian_id": 315,
    "nomor": 108,
    "nama": "Sekolah/Madrasah memiliki struktur organisasi dengan uraian tugas yang jelas. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki struktur organisasi yang dipajang di dinding dan disertai uraian tugas yang jelas " },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki struktur organisasi dan disertai uraian tugas yang jelas " },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki struktur organisasi dan disertai uraian tugas tetapi tidak jelas " },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki struktur organisasi tetapi tidak ada uraian tugas " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki struktur organisasi " }
    ],
    "jawaban": 4
  },
  {
    "id": 5588,
    "bagian_id": 315,
    "nomor": 109,
    "nama": "Sekolah/Madrasah melaksanakan kegiatan sesuai dengan rencana kerja tahunan. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "91%-100% kegiatan dilaksanakan sesuai rencana kerja tahunan " },
      { "id": 2, "nilai" : 3, "nama" : "81%-90% kegiatan dilaksanakan sesuai rencana kerja tahunan " },
      { "id": 3, "nilai" : 2, "nama" : "71%-80% kegiatan dilaksanakan sesuai rencana kerja tahunan " },
      { "id": 4, "nilai" : 1, "nama" : "61%-70% kegiatan dilaksanakan sesuai rencana kerja tahunan " },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 61% kegiatan dilaksanakan sesuai rencana kerja tahunan " }
    ],
    "jawaban": 4
  },
  {
    "id": 5589,
    "bagian_id": 315,
    "nomor": 110,
    "nama": "Sekolah/Madrasah melaksanakan kegiatan kesiswaan. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki 4 atau lebih dokumen kegiatan kesiswaan " },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki 3 dokumen kegiatan kesiswaan " },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki 2 dokumen kegiatan kesiswaan " },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki 1 dokumen kegiatan kesiswaan " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki dokumen kegiatan kesiswaan " }
    ],
    "jawaban": 4
  },
  {
    "id": 5590,
    "bagian_id": 315,
    "nomor": 111,
    "nama": "Sekolah/Madrasah melaksanakan kegiatan pengembangan kurikulum dan pembelajaran, meliputi: (1) KTSP, (2) Kalender pendidikan, (3) Program pembelajaran, (4) Penilaian hasil belajar siswa, dan (5) Peraturan akademik ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melaksanakan 4 atau lebih kegiatan " },
      { "id": 2, "nilai" : 3, "nama" : "Melaksanakan 3 kegiatan " },
      { "id": 3, "nilai" : 2, "nama" : "Melaksanakan 2 kegiatan " },
      { "id": 4, "nilai" : 1, "nama" : "Melaksanakan 1 kegiatan " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melaksanakan kegiatan " }
    ],
    "jawaban": 4
  },
  {
    "id": 5591,
    "bagian_id": 315,
    "nomor": 112,
    "nama": "Sekolah/Madrasah melaksanakan program pendayagunaan pendidik dan tenaga kependidikan. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melaksanakan 4 atau lebih program pendayagunaan pendidik dan tenaga kependidikan " },
      { "id": 2, "nilai" : 3, "nama" : "Melaksanakan 3 program pendayagunaan pendidik dan tenaga kependidikan " },
      { "id": 3, "nilai" : 2, "nama" : "Melaksanakan 2 program pendayagunaan pendidik dan tenaga kependidikan " },
      { "id": 4, "nilai" : 1, "nama" : "Melaksanakan 1 program pendayagunaan pendidik dan tenaga kependidik " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melaksanakan program pendayagunaan pendidik dan tenaga kependidikan " }
    ],
    "jawaban": 4
  },
  {
    "id": 5592,
    "bagian_id": 315,
    "nomor": 113,
    "nama": "Sekolah/Madrasah mengelola sarana dan prasarana pembelajaran. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Mengelola 4 atau lebih program sarana dan prasarana " },
      { "id": 2, "nilai" : 3, "nama" : "Mengelola 3 program sarana dan prasarana" },
      { "id": 3, "nilai" : 2, "nama" : "Mengelola 2 program sarana dan prasarana" },
      { "id": 4, "nilai" : 1, "nama" : "Mengelola 1 program sarana dan prasarana " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak mengelola program sarana dan prasarana " }
    ],
    "jawaban": 4
  },
  {
    "id": 5593,
    "bagian_id": 315,
    "nomor": 114,
    "nama": "Sekolah/Madrasah mengelola pembiayaan pendidikan. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki 4 program pengelolaan pembiayaan pendidikan " },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki 3 program pengelolaan pembiayaan pendidikan " },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki 2 program pengelolaan pembiayaan pendidikan " },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki 1 program pengelolaan pembiayaan pendidikan " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki program pengelolaan pembiayaan pendidikan " }
    ],
    "jawaban": 4
  },
  {
    "id": 5594,
    "bagian_id": 315,
    "nomor": 115,
    "nama": "Sekolah/Madrasah melaksanakan kegiatan untuk menciptakan suasana, iklim, dan lingkungan pembelajaran yang kondusif. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melaksanakan 4 atau lebih kegiatan " },
      { "id": 2, "nilai" : 3, "nama" : "Melaksanakan 3 kegiatan " },
      { "id": 3, "nilai" : 2, "nama" : "Melaksanakan 2 kegiatan " },
      { "id": 4, "nilai" : 1, "nama" : "Melaksanakan 1 kegiatan " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melaksanakan kegiatan " }
    ],
    "jawaban": 4
  },
  {
    "id": 5595,
    "bagian_id": 315,
    "nomor": 116,
    "nama": "Sekolah/Madrasah memiliki kegiatan yang melibatkan masyarakat dan membangun kemitraan dengan lembaga lain yang relevan dalam pengelolaan pendidikan satu tahun terakhir. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki 4 atau lebih kegiatan " },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki 3 kegiatan" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki 2 kegiatan" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki 1 kegiatan " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki kegiatan " }
    ],
    "jawaban": 4
  },
  {
    "id": 5596,
    "bagian_id": 315,
    "nomor": 117,
    "nama": "Sekolah/Madrasah memiliki program pengawasan akademik dan manajerial yang disosialisasikan kepada pendidik dan tenaga kependidikan. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki 4 atau lebih dokumen program pengawasan " },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki 3 dokumen program pengawasan " },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki 2 dokumen program pengawasan " },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki 1 dokumen program pengawasan " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki dokumen program pengawasan " }
    ],
    "jawaban": 4
  },
  {
    "id": 5597,
    "bagian_id": 315,
    "nomor": 118,
    "nama": "Sekolah/Madrasah melaksanakan kegiatan evaluasi diri. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melaksanakan evaluasi diri sekali dalam 1 tahun " },
      { "id": 2, "nilai" : 3, "nama" : "Melaksanakan evaluasi diri sekali dalam 2 tahun " },
      { "id": 3, "nilai" : 2, "nama" : "Melaksanakan evaluasi diri sekali dalam 3 tahun " },
      { "id": 4, "nilai" : 1, "nama" : "Melaksanakan evaluasi diri sekali dalam 4 tahun " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melaksanakan evaluasi diri " }
    ],
    "jawaban": 4
  },
  {
    "id": 5598,
    "bagian_id": 315,
    "nomor": 119,
    "nama": "Sekolah/Madrasah melaksanakan evaluasi kinerja pendidik dan tenaga kependidikan. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melaksanakan 4 atau lebih program evaluasi kinerja pendidik dan tenaga kependidikan " },
      { "id": 2, "nilai" : 3, "nama" : "Melaksanakan 3 program evaluasi kinerja pendidik dan tenaga kependidikan " },
      { "id": 3, "nilai" : 2, "nama" : "Melaksanakan 2 program evaluasi kinerja pendidik dan tenaga kependidikan " },
      { "id": 4, "nilai" : 1, "nama" : "Melaksanakan 1 program evaluasi kinerja pendidik dan tenaga kependidikan " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melakukan program evaluasi kinerja pendidik dan tenaga kependidikan " }
    ],
    "jawaban": 4
  },
  {
    "id": 5599,
    "bagian_id": 315,
    "nomor": 120,
    "nama": "Sekolah/Madrasah mempersiapkan bahan-bahan yang diperlukan untuk akreditasi. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki 4 bahan persiapan akreditasi " },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki 3 bahan persiapan akreditasi " },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki 2 bahan persiapan akreditasi " },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki 1 bahan persiapan akreditasi " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki persiapan bahan akreditasi " }
    ],
    "jawaban": 4
  },
  {
    "id": 5600,
    "bagian_id": 315,
    "nomor": 121,
    "nama": "Sekolah/Madrasah memiliki struktur kepemimpinan sesuai standar pendidik dan tenaga kependidikan. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki kepala sekolah/madrasah dan 3 atau lebih wakil kepala sekolah/madrasah " },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki kepala sekolah/madrasah dan 2 wakil kepala sekolah/madrasah " },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki kepala sekolah/madrasah dan 1 wakil kepala sekolah/madrasah " },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki kepala sekolah/madrasah tetapi tidak memiliki wakil kepala sekolah/madrasah " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki kepala sekolah/madrasah dan wakil kepala sekolah/madrasah " }
    ],
    "jawaban": 4
  },
  {
    "id": 5601,
    "bagian_id": 315,
    "nomor": 122,
    "nama": "Sekolah/Madrasah memiliki 4 komponen sistem informasi manajemen. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "memenuhi 4 komponen sistem informasi manajemen " },
      { "id": 2, "nilai" : 3, "nama" : "memenuhi 3 komponen sistem informasi manajemen " },
      { "id": 3, "nilai" : 2, "nama" : "memenuhi 2 komponen sistem informasi manajemen " },
      { "id": 4, "nilai" : 1, "nama" : "memenuhi 1 komponen sistem informasi manajemen " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki sistem informasi manajemen " }
    ],
    "jawaban": 4
  },
  {
    "id": 5718,
    "bagian_id": 321,
    "nomor": 74,
    "nama": "Ketua program keahlian memiliki kualifikasi akademik minimum sarjana (S1) atau diploma empat (D-IV), atau sertifikat keahlian yang setara ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki kualifikasi akademik minimum S1 atau D-IV kependidikan dari perguruan tinggi terakreditasi " },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki kualifikasi akademik minimum S1 atau D-IV nonkependidikan dari perguruan tinggi terakreditasi " },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki kualifikasi akademik minimum S1 atau D-IV kependidikan dari perguruan tinggi tidak terakreditasi " },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki kualifikasi akademik minimum S1 atau D-IV nonkepen- didikan dari perguruan tinggi tidak terakreditasi " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki kualifikasi akademik minimum yang dipersyaratkan " }
    ],
    "jawaban": 4
  },
  {
    "id": 5686,
    "bagian_id": 320,
    "nomor": 42,
    "nama": "Siswa memperoleh pengalaman belajar yang mampu menumbuhkan sikap kompetitif dan sportif untuk mendapatkan hasil yang terbaik 3 tahun terakhir. ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sekolah/Madrasah melaksanakan 4 atau lebih kegiatan " },
      { "id": 2, "nilai" : 3, "nama" : "Sekolah/Madrasah melaksanakan 3 kegiatan " },
      { "id": 3, "nilai" : 2, "nama" : "Sekolah/Madrasah melaksanakan 2 kegiatan " },
      { "id": 4, "nilai" : 1, "nama" : "Sekolah/Madrasah melaksanakan 1 kegiatan " },
      { "id": 5, "nilai" : 0, "nama" : "Sekolah/Madrasah tidak melaksanakan kegiatan " }
    ],
    "jawaban": 4
  },
  {
    "id": 5798,
    "bagian_id": 324,
    "nomor": 154,
    "nama": "Sekolah/madrasah membelanjakan biaya untuk menunjang kegiatan (1) prakerin, (2) uji kompetensi, (3) bimbingan karir, dan (4) program kewirausahaan. ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Membelanjakan biaya untuk 4 kegiatan " },
      { "id": 2, "nilai" : 3, "nama" : "Membelanjakan biaya untuk 3 kegiatan " },
      { "id": 3, "nilai" : 2, "nama" : "Membelanjakan biaya untuk 2 kegiatan " },
      { "id": 4, "nilai" : 1, "nama" : "Membelanjakan biaya untuk 1 kegiatan " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak membelanjakan " }
    ],
    "jawaban": 4
  },
  {
    "id": 5799,
    "bagian_id": 324,
    "nomor": 155,
    "nama": "Sumbangan pendidikan dari masyarakat dikelola secara baik dan dilaporkan kepada pihak: (1) orangtua siswa, (2) masyarakat, dan (3) dinas atau yayasan. ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Dikelola secara baik dan dilaporkan kepada 3 pihak. " },
      { "id": 2, "nilai" : 3, "nama" : "Dikelola secara baik dan dilaporkan kepada 2 pihak. " },
      { "id": 3, "nilai" : 2, "nama" : "Dikelola secara baik dan dilaporkan kepada 1 pihak. " },
      { "id": 4, "nilai" : 1, "nama" : "Dikelola secara baik tetapi tidak dilaporkan. " },
      { "id": 5, "nilai" : 0, "nama" : "Dikelola dengan tidak baik dan tidak dilaporkan. " }
    ],
    "jawaban": 4
  },
  {
    "id": 5671,
    "bagian_id": 319,
    "nomor": 27,
    "nama": "27. Kepala sekolah/madrasah dan program keahlian melakukan pemantauan proses pembelajaran mencakup tiga tahapan yaitu: (1) perencanaan, (2) pelaksanaan, dan (3) penilaian hasil pembelajaran. ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Mencakup 3 tahap pemantauan serta dilakukan diskusi hasil pemantauan " },
      { "id": 2, "nilai" : 3, "nama" : "Mencakup 3 tahap pemantauan tanpa dilakukan diskusi hasil pemantauan " },
      { "id": 3, "nilai" : 2, "nama" : "Mencakup 2 tahap pemantauan " },
      { "id": 4, "nilai" : 1, "nama" : "Mencakup 1 tahap pemantauan" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak pernah melakukan pemantauan " }
    ],
    "jawaban": 4
  },
  {
    "id": 5645,
    "bagian_id": 318,
    "nomor": 1,
    "nama": "Program keahlian melaksanakan kurikulum berdasarkan muatan Kurikulum Tingkat Satuan Pendidikan (KTSP) ",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melaksanakan kurikulum berdasarkan 9 muatan KTSP " },
      { "id": 2, "nilai" : 3, "nama" : "Melaksanakan kurikulum berdasarkan 8 muatan KTSP " },
      { "id": 3, "nilai" : 2, "nama" : "Melaksanakan kurikulum berdasarkan 7 muatan KTSP " },
      { "id": 4, "nilai" : 1, "nama" : "Melaksanakan kurikulum berdasarkan 6 atau kurang muatan KTSP " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melaksanakan KTSP " }
    ],
    "jawaban": 4
  },
  {
    "id": 5646,
    "bagian_id": 318,
    "nomor": 2,
    "nama": "Program keahlian mengembangkan kurikulum bersama-sama Tim Pengembang Kurikulum berpedoman pada panduan penyusunan kurikulum yang dibuat oleh BSNP. ",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Bersama seluruh guru mata pelajaran dalam Program keahlian, Ketua program keahlian, Kepala Sekolah/Madrasah, Nara sumber dari Dunia Usaha atau Dunia Industri (DU/DI), konselor, komite sekolah/madrasah, dan penyelenggara lembaga pendidikan " },
      { "id": 2, "nilai" : 3, "nama" : "Bersama seluruh guru mata pelajaran dalam program keahlian, Ketua program keahlian, Kepala Sekolah/Madrasah, Nara sumber dari Dunia Usaha atau Dunia Industri (DU/DI), dan konselor " },
      { "id": 3, "nilai" : 2, "nama" : "Bersama seluruh guru mata pelajaran dalam program keahlian, Ketua program keahlian, Kepala Sekolah/Madrasah, dan Nara sumber dari Dunia Usaha atau Dunia Industri (DU/DI) " },
      { "id": 4, "nilai" : 1, "nama" : "Bersama seluruh guru mata pelajaran dalam program keahlian, Ketua program keahlian, dan Kepala Sekolah/Madrasah " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak mengembangkan kurikulum " }
    ],
    "jawaban": 4
  },
  {
    "id": 5647,
    "bagian_id": 318,
    "nomor": 3,
    "nama": "Program keahlian mengembangkan kurikulum melalui mekanisme penyusunan KTSP. ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Mekanisme pengembangan kurikulum dilakukan melalui 7 kegiatan pokok " },
      { "id": 2, "nilai" : 3, "nama" : "Mekanisme pengembangan kurikulum dilakukan melalui 5 atau 6 kegiatan pokok " },
      { "id": 3, "nilai" : 2, "nama" : "Mekanisme pengembangan kurikulum dilakukan melalui 3 atau 4 kegiatan pokok " },
      { "id": 4, "nilai" : 1, "nama" : "Mekanisme pengembangan kurikulum dilakukan melalui 1 atau 2 kegiatan pokok " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak mengembangkan kurikulum " }
    ],
    "jawaban": 4
  },
  {
    "id": 5648,
    "bagian_id": 318,
    "nomor": 4,
    "nama": "Program keahlian mengembangkan kurikulum dengan menggunakan prinsip pengembangan KTSP ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melaksanakan 7 prinsip pengembangan KTSP " },
      { "id": 2, "nilai" : 3, "nama" : "Melaksanakan 5-6 prinsip pengembangan KTSP " },
      { "id": 3, "nilai" : 2, "nama" : "Melaksanakan 3-4 prinsip pengembangan KTSP " },
      { "id": 4, "nilai" : 1, "nama" : "Melaksanakan 1-2 prinsip pengembangan KTSP " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak mengembangkan kurikulum " }
    ],
    "jawaban": 4
  },
  {
    "id": 5649,
    "bagian_id": 318,
    "nomor": 5,
    "nama": "Program keahlian menyusun kurikulum muatan lokal dan kurikulum berbasis pendidikan karakter dengan melibatkan berbagai pihak. ",
    "bobot": 2,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Menyusun dengan melibatkan 7 pihak atau lebih " },
      { "id": 2, "nilai" : 3, "nama" : "Menyusun dengan melibatkan 5-6 pihak" },
      { "id": 3, "nilai" : 2, "nama" : "Menyusun dengan melibatkan 3-4 pihak" },
      { "id": 4, "nilai" : 1, "nama" : "Menyusun dengan melibatkan 1-2 pihak " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak menyusun kurikulum muatan lokal " }
    ],
    "jawaban": 4
  },
  {
    "id": 5650,
    "bagian_id": 318,
    "nomor": 6,
    "nama": "Program keahlian melaksanakan program pengembangan diri dalam bentuk kegiatan ekstrakurikuler. ",
    "bobot": 2,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melaksanakan 7 jenis atau lebih kegiatan ekstrakurikuler " },
      { "id": 2, "nilai" : 3, "nama" : "Melaksanakan 5-6 kegiatan ekstrakurikuler" },
      { "id": 3, "nilai" : 2, "nama" : "Melaksanakan 3-4 kegiatan ekstrakurikuler" },
      { "id": 4, "nilai" : 1, "nama" : "Melaksanakan 1-2 kegiatan ekstrakurikuler " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melaksanakan kegiatan ekstrakurikuler " }
    ],
    "jawaban": 4
  },
  {
    "id": 5651,
    "bagian_id": 318,
    "nomor": 7,
    "nama": "Program keahlian melaksanakan program pengembangan diri dalam bentuk kegiatan konseling. ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melaksanakan 4 atau lebih jenis kegiatan konseling " },
      { "id": 2, "nilai" : 3, "nama" : "Melaksanakan 3 jenis kegiatan konseling " },
      { "id": 3, "nilai" : 2, "nama" : "Melaksanakan 2 jenis kegiatan konseling " },
      { "id": 4, "nilai" : 1, "nama" : "Melaksanakan 1 jenis kegiatan konseling " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melaksanakan kegiatan konseling " }
    ],
    "jawaban": 4
  },
  {
    "id": 5652,
    "bagian_id": 318,
    "nomor": 8,
    "nama": "Program keahlian melaksanakan program Praktik Kerja di Dunia Usaha / Industri (Prakerin) sesuai dengan ketentuan yang berlaku ",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Program dilaksanakan selama 3 bulan atau lebih dan mengikuti jam kerja karyawan/pegawai " },
      { "id": 2, "nilai" : 3, "nama" : "Program dilaksanakan selama 3 bulan atau lebih, tetapi tidak mengikuti jam kerja karyawan/pegawai " },
      { "id": 3, "nilai" : 2, "nama" : "Program dilaksanakan kurang dari 3 bulan, tetapi mengikuti jam kerja karyawan/pegawai " },
      { "id": 4, "nilai" : 1, "nama" : "Program dilaksanakan kurang dari 3 bulan, dan tidak mengikuti jam kerja karyawan/pegawai " },
      { "id": 5, "nilai" : 0, "nama" : "Program Praktik Kerja tidak dilaksanakan " }
    ],
    "jawaban": 4
  },
  {
    "id": 5653,
    "bagian_id": 318,
    "nomor": 9,
    "nama": "Program keahlian menerapkan kegiatan pembelajaran sesuai dengan ketentuan beban belajar yang tertuang pada Permendiknas Nomor 22 Tahun 2006. ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Satu jam pembelajaran tatap muka selama 45 menit, jumlah jam pembelajaran per minggu minimal 36 jam, dan jumlah minggu efektif per tahun minimal 38 minggu " },
      { "id": 2, "nilai" : 3, "nama" : "Satu jam pembelajaran tatap muka selama 45 menit, jumlah jam pembelajaran per minggu minimal 36 jam, dan jumlah minggu efektif per tahun kurang dari 38 minggu " },
      { "id": 3, "nilai" : 2, "nama" : "Satu jam pembelajaran tatap muka selama 45 menit, jumlah jam pembelajaran per minggu kurang dari 36 jam, dan jumlah minggu efektif per tahun kurang dari 38 minggu " },
      { "id": 4, "nilai" : 1, "nama" : "Satu jam pembelajaran tatap muka kurang dari 45 menit, jumlah jam pembelajaran per minggu kurang dari 36 jam, dan jumlah minggu efektif per tahun kurang dari 38 minggu " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak menerapkan ketentuan beban belajar yang ditetapkan Kemdikbud " }
    ],
    "jawaban": 4
  },
  {
    "id": 5654,
    "bagian_id": 318,
    "nomor": 10,
    "nama": "Guru mata pelajaran memberikan penugasan terstruktur dan kegiatan mandiri tidak terstruktur untuk mencapai kompetensi yang diberikan kepada siswa maksimal 60% dari alokasi waktu tiap mata pelajaran.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "91% - 100% guru mata pelajaran memberikan penugasan terstruktur dan kegiatan mandiri tidak terstruktur " },
      { "id": 2, "nilai" : 3, "nama" : "81% - 90% guru mata pelajaran memberikan penugasan terstruktur dan kegiatan mandiri tidak terstruktur " },
      { "id": 3, "nilai" : 2, "nama" : "71% - 80% guru mata pelajaran memberikan penugasan terstruktur dan kegiatan mandiri tidak terstruktur " },
      { "id": 4, "nilai" : 1, "nama" : "61% - 70% guru mata pelajaran memberikan penugasan terstruktur dan kegiatan mandiri tidak terstruktur " },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 61% guru mata pelajaran memberikan penugasan terstruktur dan kegiatan mandiri tidak terstruktur " }
    ],
    "jawaban": 4
  },
  {
    "id": 5655,
    "bagian_id": 318,
    "nomor": 11,
    "nama": "Program keahlian melaksanakan proses pembelajaran mata pelajaran kewirausahaan berdasarkan ketentuan dalam struktur kurikulum. ",
    "bobot": 2,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Berdasarkan pada silabus, RPP, dan alokasi waktu 192 jam pelajaran " },
      { "id": 2, "nilai" : 3, "nama" : "Berdasarkan pada silabus, tidak menggunakan RPP, dan alokasi waktu 192 jam pelajaran " },
      { "id": 3, "nilai" : 2, "nama" : "Berdasarkan pada silabus, RPP, dan alokasi waktu kurang dari 192 jam pelajaran " },
      { "id": 4, "nilai" : 1, "nama" : "Berdasarkan pada silabus, tidak ada RPP, dan alokasi waktu kurang dari 192 jam pelajaran " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak berdasarkan pada silabus, tidak ada RPP, dan alokasi waktu kurang dari 192 jam pelajaran " }
    ],
    "jawaban": 4
  },
  {
    "id": 5656,
    "bagian_id": 318,
    "nomor": 12,
    "nama": "Program keahlian memanfaatkan Teknologi Informasi dan Komunikasi (TIK) dalam pembelajaran seluruh mata pelajaran ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Lebih dari 90% mata pelajaran memanfaatkan TIK. " },
      { "id": 2, "nilai" : 3, "nama" : "81% - 90% mata pelajaran memanfaatkan TIK. " },
      { "id": 3, "nilai" : 2, "nama" : "71% - 80% mata pelajaran memanfaatkan TIK. " },
      { "id": 4, "nilai" : 1, "nama" : "61% - 70% mata pelajaran memanfaatkan TIK. " },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 61% mata pelajaran memanfaatkan TIK. " }
    ],
    "jawaban": 4
  },
  {
    "id": 5672,
    "bagian_id": 319,
    "nomor": 28,
    "nama": "Supervisi proses pembelajaran dilakukan oleh kepala sekolah/madrasah dan ketua program keahlian dengan cara pemberian contoh, diskusi, pelatihan, dan konsultasi. ",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melakukan supervisi proses pembelajaran melalui 4 cara " },
      { "id": 2, "nilai" : 3, "nama" : "Melakukan supervisi proses pembelajaran melalui 3 cara " },
      { "id": 3, "nilai" : 2, "nama" : "Melakukan supervisi proses pembelajaran melalui 2 cara " },
      { "id": 4, "nilai" : 1, "nama" : "Melakukan supervisi proses pembelajaran melalui 1 cara " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melakukan supervisi proses pembelajaran " }
    ],
    "jawaban": 4
  },
  {
    "id": 5657,
    "bagian_id": 318,
    "nomor": 13,
    "nama": "KTSP disahkan oleh Kepala Sekolah/Madrasah dengan memperhatikan pertimbangan Komite Sekolah/Madrasah atau penyelenggara pendidikan yang disetujui oleh Dinas Pendidikan Provinsi atau Kanwil Kemenag.",
    "bobot": 2,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "KTSP disahkan oleh Kepala Sekolah/Madrasah dengan memperhatikan pertimbangan Komite Sekolah/Madrasah atau penyelenggara pendidikan, dan disetujui oleh Dinas Pendidikan Provinsi atau Kanwil Kemenag " },
      { "id": 2, "nilai" : 3, "nama" : "KTSP disahkan oleh Kepala Sekolah/Madrasah dan disetujui oleh Dinas Pendidikan Provinsi atau Kanwil Kemenag " },
      { "id": 3, "nilai" : 2, "nama" : "KTSP disahkan oleh Kepala Sekolah/Madrasah dengan memperhatikan pertimbangan Komite Sekolah/Madrasah atau penyelenggara pendidikan " },
      { "id": 4, "nilai" : 1, "nama" : "KTSP disahkan oleh Kepala Sekolah/Madrasah " },
      { "id": 5, "nilai" : 0, "nama" : "KTSP tidak disahkan " }
    ],
    "jawaban": 4
  },
  {
    "id": 5658,
    "bagian_id": 318,
    "nomor": 14,
    "nama": "Program keahlian mengembangkan silabus secara mandiri atau cara lainnya berdasarkan standar isi, standar kompetensi lulusan, dan panduan penyusunan KTSP. ",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Mengembangkan silabus melalui kelompok guru mata pelajaran dalam sebuah sekolah/madrasah " },
      { "id": 2, "nilai" : 3, "nama" : "Mengembangkan silabus oleh masing-masing guru mata pelajaran " },
      { "id": 3, "nilai" : 2, "nama" : "Mengembangkan silabus melalui kelompok guru dari beberapa sekolah/madrasah " },
      { "id": 4, "nilai" : 1, "nama" : "Mengembangkan silabus dengan mengadopsi contoh yang sudah ada " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak mengembangkan silabus " }
    ],
    "jawaban": 4
  },
  {
    "id": 5659,
    "bagian_id": 318,
    "nomor": 15,
    "nama": "Guru mengembangkan silabus sesuai dengan langkah-langkah pengembangan ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Guru melaksanakan 7 langkah " },
      { "id": 2, "nilai" : 3, "nama" : "Guru melaksanakan 5-6 langkah " },
      { "id": 3, "nilai" : 2, "nama" : "Guru melaksanakan 3-4 langkah " },
      { "id": 4, "nilai" : 1, "nama" : "Guru melaksanakan 1-2 langkah " },
      { "id": 5, "nilai" : 0, "nama" : "Guru tidak mengembangkan silabus " }
    ],
    "jawaban": 4
  },
  {
    "id": 5660,
    "bagian_id": 318,
    "nomor": 16,
    "nama": "Program keahlian menjabarkan Standar Kompetensi (SK) dan Kompetensi Dasar (KD) ke dalam indikator-indikator untuk setiap mata pelajaran. ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "13 mata pelajaran atau lebih telah sesuai antara SK, KD, dan indikator-indikatornya " },
      { "id": 2, "nilai" : 3, "nama" : "9 _ 12 mata pelajaran telah sesuai antara SK, KD, dan indikator- indikatornya " },
      { "id": 3, "nilai" : 2, "nama" : "5 _ 8 mata pelajaran telah sesuai antara SK, KD, dan indikator- indikatornya " },
      { "id": 4, "nilai" : 1, "nama" : "1 _ 4 mata pelajaran telah sesuai antara SK, KD, dan indikator- indikatornya " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak ada mata pelajaran yang sesuai antara SK, KD, dan indikator- indikatornya " }
    ],
    "jawaban": 4
  },
  {
    "id": 5661,
    "bagian_id": 318,
    "nomor": 17,
    "nama": "Program keahlian menetapkan Kriteria Ketuntasan Minimal (KKM) 75% untuk setiap mata pelajaran. ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "6 atau lebih mata pelajaran dengan KKM 75% atau lebih " },
      { "id": 2, "nilai" : 3, "nama" : "5 mata pelajaran dengan KKM 75% atau lebih " },
      { "id": 3, "nilai" : 2, "nama" : "4 atau lebih mata pelajaran dengan KKM 75% atau lebih " },
      { "id": 4, "nilai" : 1, "nama" : "3 atau lebih mata pelajaran dengan KKM 75% atau lebih " },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 3 mata pelajaran dengan KKM 75% atau lebih " }
    ],
    "jawaban": 4
  },
  {
    "id": 5662,
    "bagian_id": 318,
    "nomor": 18,
    "nama": "Program keahlian atau sekolah/madrasah memiliki kalender pendidikan yang memuat pengaturan waktu untuk kegiatan pembelajaran peserta didik selama satu tahun ajaran: (1) awal tahun pelajaran, (2) minggu efektif, (3) pembelajaran efektif, dan (4) hari libur. ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memuat 4 macam pengaturan waktu " },
      { "id": 2, "nilai" : 3, "nama" : "Memuat 3 macam pengaturan waktu " },
      { "id": 3, "nilai" : 2, "nama" : "Memuat 2 macam pengaturan waktu " },
      { "id": 4, "nilai" : 1, "nama" : "Memuat 1 macam pengaturan waktu " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki kalender pendidikan " }
    ],
    "jawaban": 4
  },
  {
    "id": 5663,
    "bagian_id": 319,
    "nomor": 19,
    "nama": "Setiap mata pelajaran memiliki Rencana Pelaksanaan Pembelajaran (RPP) dengan mengintegrasikan pendidikan karakter yang dijabarkan dari silabus.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "13 mata pelajaran atau lebih memiliki RPP dengan mengintegrasikan pendidikan karakter yang dijabarkan dari silabus " },
      { "id": 2, "nilai" : 3, "nama" : "9 - 12 mata pelajaran memiliki RPP dengan mengintegrasikan pendidikan karakter yang dijabarkan dari silabus " },
      { "id": 3, "nilai" : 2, "nama" : "5 - 8 mata pelajaran memiliki RPP dengan mengintegrasikan pendidikan karakter yang dijabarkan dari silabus " },
      { "id": 4, "nilai" : 1, "nama" : "1 - 4 mata pelajaran memiliki RPP dengan mengintegrasikan pendidikan karakter yang dijabarkan dari silabus " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak ada mata pelajaran memiliki RPP dengan mengintegrasikan pendidikan karakter yang dijabarkan dari silabus " }
    ],
    "jawaban": 4
  },
  {
    "id": 5664,
    "bagian_id": 319,
    "nomor": 20,
    "nama": "RPP disusun dengan memperhatikan 6 prinsip penyusunan. ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "91% - 100% RPP sudah 6 prinsip penyusunan. " },
      { "id": 2, "nilai" : 3, "nama" : "81% - 90% RPP sudah 6 prinsip penyusunan." },
      { "id": 3, "nilai" : 2, "nama" : "71% - 80% RPP sudah 6 prinsip penyusunan." },
      { "id": 4, "nilai" : 1, "nama" : "61% - 70% RPP sudah 6 prinsip penyusunan. " },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 60% RPP sudah 6 prinsip penyusunan. " }
    ],
    "jawaban": 4
  },
  {
    "id": 5665,
    "bagian_id": 319,
    "nomor": 21,
    "nama": "Program keahlian melaksanakan proses pembelajaran sesuai dengan persyaratan yang ditentukan. ",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memenuhi 4 persyaratan pelaksanaan proses pembelajaran " },
      { "id": 2, "nilai" : 3, "nama" : "Memenuhi 3 persyaratan pelaksanaan proses pembelajaran " },
      { "id": 3, "nilai" : 2, "nama" : "Memenuhi 2 persyaratan pelaksanaan proses pembelajaran " },
      { "id": 4, "nilai" : 1, "nama" : "Memenuhi 1 persyaratan pelaksanaan proses pembelajaran " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memenuhi persyaratan pelaksanaan proses pembelajaran " }
    ],
    "jawaban": 4
  },
  {
    "id": 5666,
    "bagian_id": 319,
    "nomor": 22,
    "nama": "Guru melaksanakan proses pembelajaran sesuai dengan langkah-langkah pembelajaran yang tertuang dalam RPP. ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "91% - 100% guru melaksanakan proses pembelajaran sesuai dengan langkah-langkah pembelajaran" },
      { "id": 2, "nilai" : 3, "nama" : "81% - 90% guru melaksanakan proses pembelajaran sesuai dengan langkah-langkah pembelajaran" },
      { "id": 3, "nilai" : 2, "nama" : "71% - 80% guru melaksanakan proses pembelajaran sesuai dengan langkah-langkah pembelajaran " },
      { "id": 4, "nilai" : 1, "nama" : "61% - 70% guru melaksanakan proses pembelajaran sesuai dengan langkah-langkah pembelajaran " },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 61% guru melaksanakan proses pembelajaran sesuai dengan langkah-langkah pembelajaran " }
    ],
    "jawaban": 4
  },
  {
    "id": 5667,
    "bagian_id": 319,
    "nomor": 23,
    "nama": "Program keahlian melaksanakan proses pembelajaran berbasis Teknologi Informasi dan Komunikasi (sesuai dengan tingkat kebutuhan Program keahliannya) dengan SDM yang memiliki kesesuaian kompetensi. ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Pelaksanaan pembelajaran berbasis TIK dilakukan sendiri oleh pihak program keahlian dengan SDM sendiri yang memiliki kesesuaian kompetensi dan bersertifikat " },
      { "id": 2, "nilai" : 3, "nama" : "Pelaksanaan pembelajaran berbasis TIK dilakukan sendiri oleh pihak program keahlian dengan mendatangkan SDM dari sekolah/madrasah lain " },
      { "id": 3, "nilai" : 2, "nama" : "Pelaksanaan pembelajaran berbasis TIK dilakukan oleh pihak lain dengan sebagian SDM dari pihak program keahlian " },
      { "id": 4, "nilai" : 1, "nama" : "Pelaksanaan pembelajaran berbasis TIK dilakukan oleh pihak lain (outsource) " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melaksanakan pembelajaran berbasis TIK " }
    ],
    "jawaban": 4
  },
  {
    "id": 5668,
    "bagian_id": 319,
    "nomor": 24,
    "nama": "Kegiatan wirausaha pada unit produksi atau business center dilakukan sebagai wahana untuk meningkatkan kompetensi siswa sesuai dengan keahliannya. ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Kegiatan wirausaha pada unit produksi atau business center dilakukan sesuai dengan proses pembelajaran, materi program keahlian, dan aturan pengelolaan yang transparan " },
      { "id": 2, "nilai" : 3, "nama" : "Kegiatan wirausaha pada unit produksi atau business center dilakukan sesuai dengan proses pembelajaran, dan materi program keahlian " },
      { "id": 3, "nilai" : 2, "nama" : "Kegiatan wirausaha pada unit produksi atau business center dilakukan sesuai dengan proses pembelajaran dan aturan pengelolaan yang transparan " },
      { "id": 4, "nilai" : 1, "nama" : "Kegiatan wirausaha pada unit produksi atau business center dilakukan hanya sesuai dengan proses pembelajaran. " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak sesuai dengan proses pembelajaran " }
    ],
    "jawaban": 4
  },
  {
    "id": 5669,
    "bagian_id": 319,
    "nomor": 25,
    "nama": "Program keahlian menindaklanjuti Memorandum of Understanding (MoU) kerjasama dengan DU/DI. ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "91% - 100% tindaklanjut MoU melalui pelaksanaan pembelajaran " },
      { "id": 2, "nilai" : 3, "nama" : "81% - 90% tindaklanjut MoU melalui pelaksanaan pembelajaran " },
      { "id": 3, "nilai" : 2, "nama" : "71% - 80% tindaklanjut MoU melalui pelaksanaan pembelajaran " },
      { "id": 4, "nilai" : 1, "nama" : "61% - 70% tindaklanjut MoU melalui pelaksanaan pembelajaran " },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 61% tindaklanjut MoU melalui pelaksanaan pembelajaran " }
    ],
    "jawaban": 4
  },
  {
    "id": 5670,
    "bagian_id": 319,
    "nomor": 26,
    "nama": "Siswa melakukan praktik kerja pada DU/DI untuk memperoleh kompetensi keahliannya. ",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "96% - 100% siswa melakukan prakerin pada DU/DI yang relevan " },
      { "id": 2, "nilai" : 3, "nama" : "91% - 95% siswa melakukan prakerin pada DU/DI yang relevan" },
      { "id": 3, "nilai" : 2, "nama" : "86% - 90% siswa melakukan prakerin pada DU/DI yang relevan" },
      { "id": 4, "nilai" : 1, "nama" : "81% - 85% siswa melakukan prakerin pada DU/DI yang relevan " },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 81% siswa melakukan prakerin pada DU/DI yang relevan " }
    ],
    "jawaban": 4
  },
  {
    "id": 5673,
    "bagian_id": 319,
    "nomor": 29,
    "nama": "Evaluasi terhadap guru dalam proses pembelajaran dilakukan oleh kepala sekolah/madrasah dan ketua program keahlian dengan memperhatikan 4 aspek, yaitu 1) persiapan, 2) pelaksanaan, 3) evaluasi pembelajaran, dan 4) rencana tindak lanjut. ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Evaluasi dilakukan dengan memperhatikan 4 aspek " },
      { "id": 2, "nilai" : 3, "nama" : "Evaluasi dilakukan dengan memperhatikan 3 aspek " },
      { "id": 3, "nilai" : 2, "nama" : "Evaluasi dilakukan dengan memperhatikan 2 aspek " },
      { "id": 4, "nilai" : 1, "nama" : "Evaluasi dilakukan dengan memperhatikan 1 aspek " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melakukan evaluasi " }
    ],
    "jawaban": 4
  },
  {
    "id": 5674,
    "bagian_id": 319,
    "nomor": 30,
    "nama": "Kepala sekolah/madrasah dan ketua program keahlian menyampaikan hasil pengawasan (pemantauan, supervisi, dan evaluasi) proses pembelajaran kepada pemangku kepentingan. ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Hasil pengawasan disampaikan kepada guru yang bersangkutan, dewan guru, dan pengawas sekolah/madrasah " },
      { "id": 2, "nilai" : 3, "nama" : "Hasil pengawasan disampaikan kepada guru yang bersangkutan dan dewan guru " },
      { "id": 3, "nilai" : 2, "nama" : "Hasil pengawasan disampaikan kepada yang bersangkutan saja " },
      { "id": 4, "nilai" : 1, "nama" : "Tidak disampaikan" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melakukan pengawasan " }
    ],
    "jawaban": 4
  },
  {
    "id": 5675,
    "bagian_id": 319,
    "nomor": 31,
    "nama": "Kepala sekolah/madrasah dan ketua program keahlian melakukan tindak lanjut terhadap hasil pengawasan proses pembelajaran. ",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "91% - 100% hasil pengawasan selama 1 tahun terakhir dilakukan tindak lanjut " },
      { "id": 2, "nilai" : 3, "nama" : "81% - 90% hasil pengawasan selama 1 tahun terakhir dilakukan tindak lanjut " },
      { "id": 3, "nilai" : 2, "nama" : "71% - 80% hasil pengawasan selama 1 tahun terakhir dilakukan tindak lanjut " },
      { "id": 4, "nilai" : 1, "nama" : "61% - 70% hasil pengawasan selama 1 tahun terakhir dilakukan tindak lanjut" },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 61% hasil pengawasan selama 1 tahun terakhir dilakukan tindak lanjut " }
    ],
    "jawaban": 4
  },
  {
    "id": 5676,
    "bagian_id": 320,
    "nomor": 32,
    "nama": "Siswa memperoleh pengalaman belajar melalui kelompok mata pelajaran Iptek untuk dapat berpikir logis, kritis, kreatif, dan inovatif dalam pengambilan keputusan dan pemecahan masalah. ",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "91%-100% mata pelajaran kelompok Iptek memuat tugas terstruktur " },
      { "id": 2, "nilai" : 3, "nama" : "81%-90% mata pelajaran kelompok Iptek memuat tugas terstruktur " },
      { "id": 3, "nilai" : 2, "nama" : "71%-80% mata pelajaran kelompok Iptek memuat tugas terstruktur " },
      { "id": 4, "nilai" : 1, "nama" : "61%-70% mata pelajaran kelompok Iptek memuat tugas terstruktur " },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 61% mata pelajaran kelompok Iptek memuat tugas terstruktur " }
    ],
    "jawaban": 4
  },
  {
    "id": 5677,
    "bagian_id": 320,
    "nomor": 33,
    "nama": "Siswa terlibat dalam kegiatan belajar kelompok mata pelajaran Iptek yang berkaitan dengan analisis dan pemecahan masalah kompleks. ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "4 atau lebih mata pelajaran kelompok Iptek dapat menunjukkan kegiatan pembelajaran yang berkaitan dengan pemecahan masalah kompleks. " },
      { "id": 2, "nilai" : 3, "nama" : "3 mata pelajaran kelompok Iptek dapat menunjukkan kegiatan pembelajaran yang berkaitan dengan pemecahan masalah kompleks. " },
      { "id": 3, "nilai" : 2, "nama" : "2 mata pelajaran kelompok Iptek dapat menunjukkan kegiatan pembelajaran yang berkaitan dengan pemecahan masalah kompleks. " },
      { "id": 4, "nilai" : 1, "nama" : "1 mata pelajaran kelompok Iptek dapat menunjukkan kegiatan pembelajaran yang berkaitan dengan pemecahan masalah kompleks. " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak ada mata pelajaran kelompok Iptek dapat menunjukkan kegiatan pembelajaran yang berkaitan dengan pemecahan masalah kompleks. " }
    ],
    "jawaban": 4
  },
  {
    "id": 5678,
    "bagian_id": 320,
    "nomor": 34,
    "nama": "Siswa terlibat dalam kegiatan belajar kelompok mata pelajaran Iptek yang memiliki kemampuan untuk menganalisis gejala alam dan sosial. ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "4 atau lebih mata pelajaran kelompok Iptek dapat menunjukkan kegiatan pembelajaran untuk menganalisis gejala alam dan sosial. " },
      { "id": 2, "nilai" : 3, "nama" : "3 mata pelajaran kelompok Iptek dapat menunjukkan kegiatan pembelajaran untuk menganalisis gejala alam dan sosial. " },
      { "id": 3, "nilai" : 2, "nama" : "2 mata pelajaran kelompok Iptek dapat menunjukkan kegiatan pembelajaran untuk menganalisis gejala alam dan sosial. " },
      { "id": 4, "nilai" : 1, "nama" : "1 mata pelajaran kelompok Iptek dapat menunjukkan kegiatan pembelajaran untuk menganalisis gejala alam dan sosial. " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak ada mata pelajaran kelompok Iptek dapat menunjukkan kegiatan pembelajaran untuk menganalisis gejala alam dan sosial. " }
    ],
    "jawaban": 4
  },
  {
    "id": 5679,
    "bagian_id": 320,
    "nomor": 35,
    "nama": "Siswa memperoleh pengalaman belajar dalam kelompok mata pelajaran Produktif dan Adaptif secara efektif. ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Program keahlian memfasilitasi kegiatan siswa dengan memanfaatkan dan memfungsikan sumber belajar meliputi bahan ajar, buku teks, perpustakaan, laboratorium, dan internet " },
      { "id": 2, "nilai" : 3, "nama" : "Program keahlian memfasilitasi kegiatan siswa dengan memanfaatkan dan memfungsikan sumber belajar meliputi bahan ajar, buku teks, perpustakaan, dan laboratorium " },
      { "id": 3, "nilai" : 2, "nama" : "Program keahlian memfasilitasi kegiatan siswa dengan memanfaatkan dan memfungsikan sumber belajar meliputi bahan ajar, buku teks, dan perpustakaan " },
      { "id": 4, "nilai" : 1, "nama" : "Program keahlian memfasilitasi kegiatan siswa dengan memanfaatkan dan memfungsikan sumber belajar meliputi bahan ajar dan buku teks " },
      { "id": 5, "nilai" : 0, "nama" : "Program keahlian tidak pernah memfasilitasi kegiatan siswa dengan sumber belajar " }
    ],
    "jawaban": 4
  },
  {
    "id": 5680,
    "bagian_id": 320,
    "nomor": 36,
    "nama": "Siswa memperoleh pengalaman belajar melalui program pembiasaan untuk mencari informasi/pengetahuan lebih lanjut dari berbagai sumber belajar dalam satu tahun terakhir. ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Siswa menjalankan 10 kali atau lebih kegiatan pembiasaan untuk mencari informasi/pengetahuan lebih lanjut dari berbagai sumber belajar " },
      { "id": 2, "nilai" : 3, "nama" : "Siswa menjalankan 7 - 9 kali kegiatan pembiasaan untuk mencari informasi/pengetahuan lebih lanjut dari berbagai sumber belajar " },
      { "id": 3, "nilai" : 2, "nama" : "Siswa menjalankan 4 - 6 kali kegiatan pembiasaan untuk mencari informasi/pengetahuan lebih lanjut dari berbagai sumber belajar" },
      { "id": 4, "nilai" : 1, "nama" : "Siswa menjalankan 1 - 3 kali kegiatan pembiasaan untuk mencari informasi/pengetahuan lebih lanjut dari berbagai sumber belajar " },
      { "id": 5, "nilai" : 0, "nama" : "Siswa tidak menjalankan kegiatan pembiasaan untuk mencari informasi/pengetahuan lebih lanjut dari berbagai sumber belajar " }
    ],
    "jawaban": 4
  },
  {
    "id": 5681,
    "bagian_id": 320,
    "nomor": 37,
    "nama": "Siswa mengikuti kegiatan pembelajaran yang memanfaatkan lingkungan secara produktif dan bertanggung jawab dalam 1 tahun terakhir. ",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Program keahlian menjalankan 4 atau lebih kegiatan " },
      { "id": 2, "nilai" : 3, "nama" : "Program keahlian menjalankan 3 kegiatan" },
      { "id": 3, "nilai" : 2, "nama" : "Program keahlian menjalankan 2 kegiatan" },
      { "id": 4, "nilai" : 1, "nama" : "Program keahlian menjalankan 1 kegiatan " },
      { "id": 5, "nilai" : 0, "nama" : "Program keahlian tidak menjalankan kegiatan " }
    ],
    "jawaban": 4
  },
  {
    "id": 5682,
    "bagian_id": 320,
    "nomor": 38,
    "nama": "Siswa memperoleh pengalaman mengekspresikan diri melalui kegiatan seni dan budaya dalam 1 tahun terakhir. ",
    "bobot": 2,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Siswa mengekspresikan diri melalui 4 atau lebih kegiatan " },
      { "id": 2, "nilai" : 3, "nama" : "Siswa mengekspresikan diri melalui 3 kegiatan" },
      { "id": 3, "nilai" : 2, "nama" : "Siswa mengekspresikan diri melalui 2 kegiatan" },
      { "id": 4, "nilai" : 1, "nama" : "Siswa mengekspresikan diri melalui 1 kegiatan " },
      { "id": 5, "nilai" : 0, "nama" : "Siswa tidak pernah mengekspresikan diri melalui kegiatan " }
    ],
    "jawaban": 4
  },
  {
    "id": 5683,
    "bagian_id": 320,
    "nomor": 39,
    "nama": "Siswa memperoleh pengalaman mengapresiasikan karya seni dan budaya dalam 1 tahun terakhir. ",
    "bobot": 2,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Program keahlian memfasilitasi 4 atau lebih kegiatan " },
      { "id": 2, "nilai" : 3, "nama" : "Program keahlian memfasilitasi 3 kegiatan" },
      { "id": 3, "nilai" : 2, "nama" : "Program keahlian memfasilitasi 2 kegiatan" },
      { "id": 4, "nilai" : 1, "nama" : "Program keahlian memfasilitasi 1 kegiatan " },
      { "id": 5, "nilai" : 0, "nama" : "Program keahlian tidak pernah memfasilitasi kegiatan " }
    ],
    "jawaban": 4
  },
  {
    "id": 5684,
    "bagian_id": 320,
    "nomor": 40,
    "nama": "Siswa memperoleh pengalaman belajar melalui kegiatan yang mengembangkan sikap percaya diri dan tanggung jawab dalam 1 tahun terakhir. ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Program keahlian menjalankan 4 atau lebih kegiatan " },
      { "id": 2, "nilai" : 3, "nama" : "Program keahlian menjalankan 3 kegiatan" },
      { "id": 3, "nilai" : 2, "nama" : "Program keahlian menjalankan 2 kegiatan" },
      { "id": 4, "nilai" : 1, "nama" : "Program keahlian menjalankan 1 kegiatan " },
      { "id": 5, "nilai" : 0, "nama" : "Program keahlian tidak pernah menjalankan kegiatan " }
    ],
    "jawaban": 4
  },
  {
    "id": 5685,
    "bagian_id": 320,
    "nomor": 41,
    "nama": "Siswa memperoleh pengalaman belajar untuk berpartisipasi dalam penegakan aturan-aturan sosial. ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Program keahlian menjalankan kegiatan penegakan aturan-aturan sosial sebanyak 4 jenis dan/atau 4 kali atau lebih dalam 1 tahun terakhir " },
      { "id": 2, "nilai" : 3, "nama" : "Program keahlian menjalankan kegiatan penegakan aturan-aturan sosial sebanyak 3 jenis dan/atau 3 kali dalam 1 tahun terakhir " },
      { "id": 3, "nilai" : 2, "nama" : "Program keahlian menjalankan kegiatan penegakan aturan-aturan sosial sebanyak 2 jenis dan/atau 2 kali dalam 1 tahun terakhir " },
      { "id": 4, "nilai" : 1, "nama" : "Program keahlian menjalankan kegiatan penegakan aturan-aturan sosial sebanyak 1 jenis dan/atau 1 kali dalam 1 tahun terakhir " },
      { "id": 5, "nilai" : 0, "nama" : "Program keahlian tidak pernah menjalankan kegiatan penegakan aturan-aturan sosial " }
    ],
    "jawaban": 4
  },
  {
    "id": 5687,
    "bagian_id": 320,
    "nomor": 43,
    "nama": "Siswa memperoleh pengalaman belajar yang dapat melibatkan partisipasi siswa dalam kehidupan bermasyarakat, berbangsa, dan bernegara secara demokratis dalam 3 tahun terakhir. ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Program keahlian melaksanakan 4 kali atau lebih kegiatan " },
      { "id": 2, "nilai" : 3, "nama" : "Program keahlian melaksanakan 3 kali kegiatan " },
      { "id": 3, "nilai" : 2, "nama" : "Program keahlian melaksanakan 2 kali kegiatan " },
      { "id": 4, "nilai" : 1, "nama" : "Program keahlian melaksanakan 1 kali kegiatan " },
      { "id": 5, "nilai" : 0, "nama" : "Program keahlian tidak melaksanakan kegiatan " }
    ],
    "jawaban": 4
  },
  {
    "id": 5688,
    "bagian_id": 320,
    "nomor": 44,
    "nama": "Siswa memperoleh pengalaman belajar untuk membentuk karakter siswa, menumbuhkan rasa sportivitas, dan kebersihan lingkungan dalam 3 tahun terakhir. ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Program keahlian melaksanakan 4 kali atau lebih kegiatan " },
      { "id": 2, "nilai" : 3, "nama" : "Program keahlian melaksanakan 3 kali kegiatan" },
      { "id": 3, "nilai" : 2, "nama" : "Program keahlian melaksanakan 2 kali kegiatan" },
      { "id": 4, "nilai" : 1, "nama" : "Program keahlian melaksanakan 1 kali kegiatan " },
      { "id": 5, "nilai" : 0, "nama" : "Program keahlian tidak melaksanakan kegiatan " }
    ],
    "jawaban": 4
  },
  {
    "id": 5689,
    "bagian_id": 320,
    "nomor": 45,
    "nama": "Siswa memperoleh pengalaman belajar melalui pembiasaan untuk memahami hak dan kewajiban orang lain dalam pergaulan di masyarakat. ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "91% - 100% silabus khususnya mata pelajaran Pendidikan Kewarganegaraan dan IPS memuat kegiatan pembelajaran dalam kemampuan memahami hak dan kewajiban orang lain dalam pergaulan di masyarakat " },
      { "id": 2, "nilai" : 3, "nama" : "81% - 90% silabus khususnya mata pelajaran Pendidikan Kewarganegaraan dan IPS memuat kegiatan pembelajaran dalam kemampuan memahami hak dan kewajiban orang lain dalam pergaulan di masyarakat " },
      { "id": 3, "nilai" : 2, "nama" : "71% - 80% silabus khususnya mata pelajaran Pendidikan Kewarganegaraan dan IPS memuat kegiatan pembelajaran dalam kemampuan memahami hak dan kewajiban orang lain dalam pergaulan di masyarakat " },
      { "id": 4, "nilai" : 1, "nama" : "61% - 70% silabus khususnya mata pelajaran Pendidikan Kewarganegaraan dan IPS memuat kegiatan pembelajaran dalam kemampuan memahami hak dan kewajiban orang lain dalam pergaulan di masyarakat " },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 61% silabus khususnya mata pelajaran Pendidikan Kewarganegaraan dan IPS memuat kegiatan pembelajaran dalam kemampuan memahami hak dan kewajiban orang lain dalam pergaulan di masyarakat " }
    ],
    "jawaban": 4
  },
  {
    "id": 5690,
    "bagian_id": 320,
    "nomor": 46,
    "nama": "Siswa memperoleh pengalaman belajar untuk dapat menjalankan ajaran agama melalui kelompok mata pelajaran agama dan akhlak mulia yang bersifat afektif dalam 3 tahun terakhir. ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Program keahlian memfasilitasi 4 jenis atau lebih kegiatan pembiasaan dan pengamalan ajaran agama " },
      { "id": 2, "nilai" : 3, "nama" : "Program keahlian memfasilitasi 3 jenis kegiatan pembiasaan dan pengamalan ajaran agama " },
      { "id": 3, "nilai" : 2, "nama" : "Program keahlian memfasilitasi 2 jenis kegiatan pembiasaan dan pengamalan ajaran agama " },
      { "id": 4, "nilai" : 1, "nama" : "Program keahlian memfasilitasi 1 jenis kegiatan pembiasaan dan pengamalan ajaran agama " },
      { "id": 5, "nilai" : 0, "nama" : "Program keahlian tidak melaksanakan kegiatan pembiasaan dan pengamalan ajaran agama " }
    ],
    "jawaban": 4
  },
  {
    "id": 5691,
    "bagian_id": 320,
    "nomor": 47,
    "nama": "Siswa mengikuti pembelajaran untuk memperoleh pengalaman menghargai keberagaman agama, bangsa, suku, ras, dan golongan sosial ekonomi dalam lingkup global dalam 3 tahun terakhir ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Program keahlian melaksanakan 4 atau lebih kegiatan pembelajaran " },
      { "id": 2, "nilai" : 3, "nama" : "Program keahlian melaksanakan 3 kegiatan pembelajaran " },
      { "id": 3, "nilai" : 2, "nama" : "Program keahlian melaksanakan 2 kegiatan pembelajaran " },
      { "id": 4, "nilai" : 1, "nama" : "Program keahlian melaksanakan 1 kegiatan pembelajaran " },
      { "id": 5, "nilai" : 0, "nama" : "Program keahlian tidak melaksanakan kegiatan pembelajaran " }
    ],
    "jawaban": 4
  },
  {
    "id": 5692,
    "bagian_id": 320,
    "nomor": 48,
    "nama": "Siswa memperoleh pengalaman belajar dalam pembentukan akhlak mulia melalui berbagai jenis kegiatan pengembangan diri setiap bulan. ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Program keahlian melaksanakan 4 atau lebih kegiatan pengembangan diri " },
      { "id": 2, "nilai" : 3, "nama" : "Program keahlian melaksanakan 3 kegiatan pengembangan diri " },
      { "id": 3, "nilai" : 2, "nama" : "Program keahlian melaksanakan 2 kegiatan pengembangan diri " },
      { "id": 4, "nilai" : 1, "nama" : "Program keahlian melaksanakan 1 kegiatan pengembangan diri " },
      { "id": 5, "nilai" : 0, "nama" : "Program keahlian tidak melaksanakan kegiatan pengembangan diri " }
    ],
    "jawaban": 4
  },
  {
    "id": 5693,
    "bagian_id": 320,
    "nomor": 49,
    "nama": "Siswa memperoleh pengalaman belajar untuk menghargai perbedaan pendapat dan berempati terhadap orang lain melalui mata pelajaran yang menggunakan pendekatan diskusi, kerja kelompok, dan persaingan sehat. ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "10 atau lebih mata pelajaran " },
      { "id": 2, "nilai" : 3, "nama" : "8-9 mata pelajaran" },
      { "id": 3, "nilai" : 2, "nama" : "6-7 mata pelajaran" },
      { "id": 4, "nilai" : 1, "nama" : "4-5 mata pelajaran " },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 4 mata pelajaran " }
    ],
    "jawaban": 4
  },
  {
    "id": 5694,
    "bagian_id": 320,
    "nomor": 50,
    "nama": "Siswa mengikuti kegiatan untuk memperoleh pengalaman belajar dalam menghasilkan karya kreatif baik individual maupun kelompok setiap tahun. ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Program keahlian memfasilitasi 4 atau lebih kegiatan " },
      { "id": 2, "nilai" : 3, "nama" : "Program keahlian memfasilitasi 3 kegiatan" },
      { "id": 3, "nilai" : 2, "nama" : "Program keahlian memfasilitasi 2 kegiatan" },
      { "id": 4, "nilai" : 1, "nama" : "Program keahlian memfasilitasi 1 kegiatan " },
      { "id": 5, "nilai" : 0, "nama" : "Program keahlian tidak pernah memfasilitasi kegiatan " }
    ],
    "jawaban": 4
  },
  {
    "id": 5695,
    "bagian_id": 320,
    "nomor": 51,
    "nama": "Siswa mengikuti kegiatan yang memfasilitasi siswa dalam berkomunikasi baik lisan maupun tulisan secara efektif dan santun dalam 1 tahun terakhir. ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Program keahlian memfasilitasi 4 atau lebih kegiatan " },
      { "id": 2, "nilai" : 3, "nama" : "Program keahlian memfasilitasi 3 kegiatan" },
      { "id": 3, "nilai" : 2, "nama" : "Program keahlian memfasilitasi 2 kegiatan" },
      { "id": 4, "nilai" : 1, "nama" : "Program keahlian memfasilitasi 1 kegiatan " },
      { "id": 5, "nilai" : 0, "nama" : "Program keahlian tidak memfasilitasi kegiatan " }
    ],
    "jawaban": 4
  },
  {
    "id": 5696,
    "bagian_id": 320,
    "nomor": 52,
    "nama": "Siswa memperoleh keterampilan membaca dan menulis naskah secara sistematis dan estetis, melalui: (1) karya tulis, (2) lomba, (3) kunjungan karya wisata/studi lapangan, (4) majalah dinding, (5) buletin siswa, dan kegiatan lain yang terkait. ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melalui 4 atau lebih kegiatan " },
      { "id": 2, "nilai" : 3, "nama" : "Melalui 3 kegiatan " },
      { "id": 3, "nilai" : 2, "nama" : "Melalui 2 kegiatan " },
      { "id": 4, "nilai" : 1, "nama" : "Melalui 1 kegiatan " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melakukan kegiatan " }
    ],
    "jawaban": 4
  },
  {
    "id": 5697,
    "bagian_id": 320,
    "nomor": 53,
    "nama": "Siswa mengikuti kegiatan untuk memperoleh keterampilan menyimak, membaca, menulis, dan berbicara, baik dalam Bahasa Indonesia maupun Bahasa Inggris setiap tahun. ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Program keahlian memfasilitasi 4 atau lebih kegiatan " },
      { "id": 2, "nilai" : 3, "nama" : "Program keahlian memfasilitasi 3 kegiatan " },
      { "id": 3, "nilai" : 2, "nama" : "Program keahlian memfasilitasi 2 kegiatan " },
      { "id": 4, "nilai" : 1, "nama" : "Program keahlian memfasilitasi 1 kegiatan " },
      { "id": 5, "nilai" : 0, "nama" : "Program keahlian tidak memfasilitasi kegiatan " }
    ],
    "jawaban": 4
  },
  {
    "id": 5698,
    "bagian_id": 320,
    "nomor": 54,
    "nama": "Siswa mengikuti kegiatan untuk memperoleh pengalaman belajar dalam mengembangkan ipteks (ilmu pengetahuan, teknologi, dan seni) seiring dengan perkembangannya setiap tahun. ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Program keahlian memfasilitasi 4 atau lebih kegiatan " },
      { "id": 2, "nilai" : 3, "nama" : "Program keahlian memfasilitasi 3 kegiatan" },
      { "id": 3, "nilai" : 2, "nama" : "Program keahlian memfasilitasi 2 kegiatan" },
      { "id": 4, "nilai" : 1, "nama" : "Program keahlian memfasilitasi 1 kegiatan " },
      { "id": 5, "nilai" : 0, "nama" : "Program keahlian tidak memfasilitasi kegiatan " }
    ],
    "jawaban": 4
  },
  {
    "id": 5699,
    "bagian_id": 320,
    "nomor": 55,
    "nama": "Siswa mengikuti kegiatan untuk memperoleh pengalaman belajar agar menguasai atau memiliki kompetensi keahlian dan jiwa kewirausahaan, melalui pembelajaran berbasis masalah dan/atau pembelajaran berbasis proyek. ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melalui 4 atau lebih mata pelajaran " },
      { "id": 2, "nilai" : 3, "nama" : "Melalui 3 mata pelajaran" },
      { "id": 3, "nilai" : 2, "nama" : "Melalui 2 mata pelajaran" },
      { "id": 4, "nilai" : 1, "nama" : "Melalui 1 mata pelajaran " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melakukan " }
    ],
    "jawaban": 4
  },
  {
    "id": 5700,
    "bagian_id": 320,
    "nomor": 56,
    "nama": "Program keahlian memiliki prestasi yang ditunjukkan dengan pencapaian nilai rata-rata UN teori kelompok mata pelajaran produktif pada tahun terakhir. ",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Mencapai nilai rata-rata 2,00 atau lebih di atas batas nilai kelulusan UN " },
      { "id": 2, "nilai" : 3, "nama" : "Mencapai nilai rata-rata 1,01 sampai 1,99 di atas batas nilai kelulusan UN " },
      { "id": 3, "nilai" : 2, "nama" : "Mencapai nilai rata-rata 0,01 sampai 1,00 di atas batas nilai kelulusan UN " },
      { "id": 4, "nilai" : 1, "nama" : "Mencapai nilai rata-rata sama dengan batas nilai kelulusan UN " },
      { "id": 5, "nilai" : 0, "nama" : "Lebih rendah dari batas nilai kelulusan UN " }
    ],
    "jawaban": 4
  },
  {
    "id": 5701,
    "bagian_id": 320,
    "nomor": 57,
    "nama": "Program keahlian memiliki prestasi yang ditunjukkan dengan pencapaian batas nilai kelulusan UN mata pelajaran Matematika pada tahun terakhir. ",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Mencapai nilai rata-rata 2,00 atau lebih di atas batas nilai kelulusan UN " },
      { "id": 2, "nilai" : 3, "nama" : "Mencapai nilai rata-rata 1,01 sampai 1,99 di atas batas nilai kelulusan UN " },
      { "id": 3, "nilai" : 2, "nama" : "Mencapai nilai rata-rata 0,01 sampai 1,00 di atas batas nilai kelulusan UN " },
      { "id": 4, "nilai" : 1, "nama" : "Mencapai nilai rata-rata sama dengan batas nilai kelulusan UN " },
      { "id": 5, "nilai" : 0, "nama" : "Lebih rendah dari batas nilai kelulusan UN " }
    ],
    "jawaban": 4
  },
  {
    "id": 5702,
    "bagian_id": 320,
    "nomor": 58,
    "nama": "Program keahlian memiliki prestasi yang ditunjukkan dengan pencapaian batas nilai kelulusan UN mata pelajaran Bahasa Inggris pada tahun terakhir. ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Mencapai nilai rata-rata 2,00 atau lebih di atas batas nilai kelulusan UN " },
      { "id": 2, "nilai" : 3, "nama" : "Mencapai nilai rata-rata 1,01 sampai 1,99 di atas batas nilai kelulusan UN " },
      { "id": 3, "nilai" : 2, "nama" : "Mencapai nilai rata-rata 0,01 sampai 1,00 di atas batas nilai kelulusan UN " },
      { "id": 4, "nilai" : 1, "nama" : "Mencapai nilai rata-rata sama dengan batas nilai kelulusan UN " },
      { "id": 5, "nilai" : 0, "nama" : "Lebih rendah dari batas nilai kelulusan UN " }
    ],
    "jawaban": 4
  },
  {
    "id": 5703,
    "bagian_id": 320,
    "nomor": 59,
    "nama": "Program keahlian memiliki prestasi yang ditunjukkan dengan pencapaian batas nilai kelulusan UN mata pelajaran Bahasa Indonesia pada tahun terakhir. ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Mencapai nilai rata-rata 2,00 atau lebih di atas batas nilai kelulusan UN " },
      { "id": 2, "nilai" : 3, "nama" : "Mencapai nilai rata-rata 1,01 sampai 1,99 di atas batas nilai kelulusan UN " },
      { "id": 3, "nilai" : 2, "nama" : "Mencapai nilai rata-rata 0,01 sampai 1,00 di atas batas nilai kelulusan UN " },
      { "id": 4, "nilai" : 1, "nama" : "Mencapai nilai rata-rata sama dengan batas nilai kelulusan UN " },
      { "id": 5, "nilai" : 0, "nama" : "Lebih rendah dari batas nilai kelulusan UN " }
    ],
    "jawaban": 4
  },
  {
    "id": 5704,
    "bagian_id": 320,
    "nomor": 60,
    "nama": "Program keahlian memiliki prestasi yang ditunjukkan dengan pencapaian nilai rata-rata uji kompetensi mata pelajaran produktif pada tahun terakhir. ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Nilai rata-rata 7,5 atau lebih " },
      { "id": 2, "nilai" : 3, "nama" : "Nilai rata-rata 7,0 _ 7,4 " },
      { "id": 3, "nilai" : 2, "nama" : "Nilai rata-rata 6,5 _ 6,9 " },
      { "id": 4, "nilai" : 1, "nama" : "Nilai rata-rata 6,0 _ 6,4 " },
      { "id": 5, "nilai" : 0, "nama" : "Nilai rata-rata lebih rendah dari 6,0 " }
    ],
    "jawaban": 4
  },
  {
    "id": 5705,
    "bagian_id": 320,
    "nomor": 61,
    "nama": "Program keahlian memiliki prestasi yang ditunjukkan dengan persentase tingkat kelulusan pada 3 tahun terakhir. ",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Kelulusan 100%" },
      { "id": 2, "nilai" : 3, "nama" : "Kelulusan 96%-99% " },
      { "id": 3, "nilai" : 2, "nama" : "Kelulusan 90%-95% " },
      { "id": 4, "nilai" : 1, "nama" : "Kelulusan 86%-89% " },
      { "id": 5, "nilai" : 0, "nama" : "Kelulusan kurang dari 86% " }
    ],
    "jawaban": 4
  },
  {
    "id": 5706,
    "bagian_id": 320,
    "nomor": 62,
    "nama": "Program keahlian memiliki lulusan yang bekerja di DU/DI yang sesuai dengan kompetensi keahliannya dalam 3 tahun terakhir ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "91% - 100% telah bekerja di DU/DI yang sesuai kompetensi keahliannya " },
      { "id": 2, "nilai" : 3, "nama" : "81% - 90% telah bekerja di DU/DI yang sesuai kompetensi keahliannya " },
      { "id": 3, "nilai" : 2, "nama" : "71% - 80% telah bekerja di DU/DI yang sesuai kompetensi keahliannya " },
      { "id": 4, "nilai" : 1, "nama" : "61% - 70% telah bekerja di DU/DI yang sesuai kompetensi keahliannya " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak ada Lulusan yang bekerja sesuai kompetensi keahliannya " }
    ],
    "jawaban": 4
  },
  {
    "id": 5707,
    "bagian_id": 321,
    "nomor": 63,
    "nama": "Guru memiliki kualifikasi akademik minimum sarjana (S1) atau diploma empat (D-IV). Untuk bidang tertentu, kualifikasi kepakaran ditunjukkan dengan pengakuan lain setingkat S1 atau D-IV. ",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "96%-100% guru berpendidikan minimum S1 atau D-IV " },
      { "id": 2, "nilai" : 3, "nama" : "91%-95% guru berpendidikan minimum S1 atau D-IV " },
      { "id": 3, "nilai" : 2, "nama" : "86%-90% guru berpendidikan minimum S1 atau D-IV " },
      { "id": 4, "nilai" : 1, "nama" : "81%-85% guru berpendidikan minimum S1 atau D-IV " },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 81% guru berpendidikan minimum S1 atau D-IV " }
    ],
    "jawaban": 4
  },
  {
    "id": 5708,
    "bagian_id": 321,
    "nomor": 64,
    "nama": "Guru mata pelajaran mengajar sesuai dengan latar belakang pendidikannya. ",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "96%-100% guru mata pelajaran memiliki kesesuaian " },
      { "id": 2, "nilai" : 3, "nama" : "91%-95% guru mata pelajaran memiliki kesesuaian " },
      { "id": 3, "nilai" : 2, "nama" : "86%-90% guru mata pelajaran memiliki kesesuaian " },
      { "id": 4, "nilai" : 1, "nama" : "81%-85% guru mata pelajaran memiliki kesesuaian " },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 81% guru mata pelajaran memiliki kesesuaian " }
    ],
    "jawaban": 4
  },
  {
    "id": 5709,
    "bagian_id": 321,
    "nomor": 65,
    "nama": "Program keahlian memiliki guru mata pelajaran produktif sesuai dengan program keahliannya. ",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "96% - 100% guru mata pelajaran produktif memiliki kesesuaian " },
      { "id": 2, "nilai" : 3, "nama" : "91% - 95% guru mata pelajaran produktif memiliki kesesuaian " },
      { "id": 3, "nilai" : 2, "nama" : "86% - 90% guru mata pelajaran produktif memiliki kesesuaian " },
      { "id": 4, "nilai" : 1, "nama" : "81% - 85% guru mata pelajaran produktif memiliki kesesuaian " },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 81% gurumata pelajaran produktif memiliki kesesuaian " }
    ],
    "jawaban": 4
  },
  {
    "id": 5710,
    "bagian_id": 321,
    "nomor": 66,
    "nama": "Guru memiliki kesehatan jasmani dan rohani untuk menjalankan tugas utamanya.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Rata-rata kehadiran guru 96%-100% untuk menjalankan tugas utamanya " },
      { "id": 2, "nilai" : 3, "nama" : "Rata-rata kehadiran guru 91%-95% untuk menjalankan tugas utamanya " },
      { "id": 3, "nilai" : 2, "nama" : "Rata-rata kehadiran guru 86%-90% untuk menjalankan tugas utamanya " },
      { "id": 4, "nilai" : 1, "nama" : "Rata-rata kehadiran guru 81%-85% untuk menjalankan tugas utamanya " },
      { "id": 5, "nilai" : 0, "nama" : "Rata-rata kehadiran guru kurang dari 81% untuk menjalankan tugas utamanya " }
    ],
    "jawaban": 4
  },
  {
    "id": 5711,
    "bagian_id": 321,
    "nomor": 67,
    "nama": "Guru merencanakan, melaksanakan, dan mengevaluasi pembelajaran sesuai dengan prinsip-prinsip pembelajaran. ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "96% - 100% guru merencanakan, melaksanakan, dan mengevaluasi pembelajaran sesuai dengan prinsip-prinsip pembelajaran " },
      { "id": 2, "nilai" : 3, "nama" : "91% - 95% guru merencanakan, melaksanakan, dan mengevaluasi pembelajaran sesuai dengan prinsip-prinsip pembelajaran " },
      { "id": 3, "nilai" : 2, "nama" : "86% - 90% guru merencanakan, melaksanakan, dan mengevaluasi pembelajaran sesuai dengan prinsip-prinsip pembelajaran " },
      { "id": 4, "nilai" : 1, "nama" : "81% - 85% guru merencanakan, melaksanakan, dan mengevaluasi pembelajaran sesuai dengan prinsip-prinsip pembelajaran " },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 81% guru merencanakan, melaksanakan, dan mengevaluasi pembelajaran sesuai dengan prinsip-prinsip pembelajaran " }
    ],
    "jawaban": 4
  },
  {
    "id": 5712,
    "bagian_id": 321,
    "nomor": 68,
    "nama": "Guru memiliki integritas kepribadian dan bertindak sesuai dengan norma agama, hukum, sosial, serta peraturan dan ketentuan yang berlaku. ",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Semua guru bertindak sesuai dengan norma agama, hukum, sosial, serta peraturan dan ketentuan yang berlaku " },
      { "id": 2, "nilai" : 3, "nama" : "Terdapat guru yang diberi kesempatan memperbaiki diri dan dilakukan pembinaan " },
      { "id": 3, "nilai" : 2, "nama" : "Adanya guru yang diberikan peringatan lisan " },
      { "id": 4, "nilai" : 1, "nama" : "Adanya guru yang diberikan peringatan tertulis " },
      { "id": 5, "nilai" : 0, "nama" : "Adanya guru yang dibebastugaskan dari mengajar atau dikeluarkan " }
    ],
    "jawaban": 4
  },
  {
    "id": 5713,
    "bagian_id": 321,
    "nomor": 69,
    "nama": "Guru berkomunikasi secara efektif dan santun dengan sesama guru, tenaga kependidikan, siswa, dan orangtua siswa. ",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Guru berkomunikasi efektif dan santun dengan siswa, sesama guru, kepala sekolah/madrasah, orang tua siswa, dan komite sekolah/madrasah " },
      { "id": 2, "nilai" : 3, "nama" : "Guru berkomunikasi efektif dan santun dengan siswa, sesama guru, kepala sekolah/madrasah, dan orang tua siswa " },
      { "id": 3, "nilai" : 2, "nama" : "Guru berkomunikasi efektif dan santun dengan siswa, sesama guru, dan kepala sekolah/madrasah " },
      { "id": 4, "nilai" : 1, "nama" : "Guru berkomunikasi efektif dan santun dengan siswa dan sesama guru " },
      { "id": 5, "nilai" : 0, "nama" : "Guru tidak mampu berkomunikasi efektif dan santun " }
    ],
    "jawaban": 4
  },
  {
    "id": 5714,
    "bagian_id": 321,
    "nomor": 70,
    "nama": "Guru menguasai materi pelajaran yang diampu serta mengembangkannya secara ilmiah. ",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "96%-100% guru memiliki kesesuaian sertifikat pendidik dengan mata pelajaran yang diampu, menghasilkan karya tulis, dan mengikuti berbagai pertemuan ilmiah " },
      { "id": 2, "nilai" : 3, "nama" : "91%-95% guru memiliki kesesuaian sertifikat pendidik dengan mata pelajaran yang diampu, menghasilkan karya tulis, dan mengikuti berbagai pertemuan ilmiah " },
      { "id": 3, "nilai" : 2, "nama" : "86%-90% guru memiliki sertifikat pendidik dengan mata pelajaran yang diampu, menghasilkan karya tulis, dan mengikuti berbagai pertemuan ilmiah " },
      { "id": 4, "nilai" : 1, "nama" : "81%-85% guru memiliki sertifikat pendidik dengan mata pelajaran yang diampu, menghasilkan karya tulis, dan mengikuti berbagai pertemuan ilmiah " },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 81% guru memiliki sertifikat pendidik dengan mata pelajaran yang diampu, menghasilkan karya tulis, dan mengikuti berbagai pertemuan ilmiah " }
    ],
    "jawaban": 4
  },
  {
    "id": 5715,
    "bagian_id": 321,
    "nomor": 71,
    "nama": "Guru mata pelajaran produktif memiliki sertifikat keahlian sesuai dengan mata pelajaran yang diampunya. ",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "76% - 100% guru mata pelajaran produktif memiliki sertifikat uji kompetensi dari Lembaga Sertifikasi Profesi (LSP) sesuai keahliannya " },
      { "id": 2, "nilai" : 3, "nama" : "51% - 75% guru mata pelajaran produktif memiliki sertifikat uji kompetensi dari Lembaga Sertifikasi Profesi (LSP) sesuai keahliannya " },
      { "id": 3, "nilai" : 2, "nama" : "26% - 50% guru mata pelajaran produktif memiliki sertifikat uji kompetensi dari Lembaga Sertifikasi Profesi (LSP) sesuai keahliannya " },
      { "id": 4, "nilai" : 1, "nama" : "1% - 25% guru mata pelajaran produktif memiliki sertifikat uji kompetensi dari Lembaga Sertifikasi Profesi (LSP) sesuai keahliannya " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak ada guru mata pelajaran produktif memiliki sertifikat uji kompetensi dari Lembaga Sertifikasi Profesi (LSP) " }
    ],
    "jawaban": 4
  },
  {
    "id": 5716,
    "bagian_id": 321,
    "nomor": 72,
    "nama": "Guru mata pelajaran produktif memiliki satu kompetensi utama dan dua kompetensi tambahan. ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "96% - 100% atau lebih guru mata pelajaran produktif memiliki satu kompetensi utama dan dua kompetensi tambahan " },
      { "id": 2, "nilai" : 3, "nama" : "91% - 96% guru mata pelajaran produktif memiliki satu kompetensi utama dan dua kompetensi tambahan " },
      { "id": 3, "nilai" : 2, "nama" : "86% - 90% guru mata pelajaran produktif memiliki satu kompetensi utama dan dua kompetensi tambahan " },
      { "id": 4, "nilai" : 1, "nama" : "81% - 85% guru mata pelajaran produktif memiliki satu kompetensi utama dan dua kompetensi tambahan " },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 81% guru mata pelajaran produktif yang memiliki satu kompetensi utama dan dua kompetensi tambahan " }
    ],
    "jawaban": 4
  },
  {
    "id": 5717,
    "bagian_id": 321,
    "nomor": 73,
    "nama": "Ketua program keahlian berstatus sebagai guru, memiliki sertifikat pendidik, dan Surat Keputusan (SK) sebagai ketua program keahlian. ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Berstatus sebagai guru, memiliki sertifikat pendidik, dan memiliki SK sebagai ketua program keahlian " },
      { "id": 2, "nilai" : 3, "nama" : "Berstatus sebagai guru, tidak memiliki sertifikat pendidik, tetapi memiliki SK sebagai ketua program keahlian " },
      { "id": 3, "nilai" : 2, "nama" : "Berstatus sebagai guru, memiliki sertifikat pendidik, tetapi tidak memiliki SK sebagai ketua program keahlian " },
      { "id": 4, "nilai" : 1, "nama" : "Tidak berstatus sebagai guru, tidak memiliki sertifikat pendidik, tetapi memiliki SK sebagai ketua program keahlian " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak berstatus sebagai guru, tidak memiliki sertifikat pendidik, dan tidak memiliki SK sebagai ketua program keahlian " }
    ],
    "jawaban": 4
  },
  {
    "id": 5719,
    "bagian_id": 321,
    "nomor": 75,
    "nama": "Ketua program keahlian memiliki pengalaman mengajar ",
    "bobot": 2,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki pengalaman mengajar 4 tahun atau lebih " },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki pengalaman mengajar 3 tahun" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki pengalaman mengajar 2 tahun" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki pengalaman mengajar 1 tahun " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki pengalaman mengajar " }
    ],
    "jawaban": 4
  },
  {
    "id": 5720,
    "bagian_id": 321,
    "nomor": 76,
    "nama": "Ketua program keahlian memiliki kemampuan manajerial yang ditunjukkan dengan keberhasilan mengelola program keahlian. ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "91% - 100% lulusan yang sudah bekerja tetap dan diterima di  perguruan tinggi terakreditasi pada dua tahun terakhir " },
      { "id": 2, "nilai" : 3, "nama" : "81% - 90% lulusan yang sudah bekerja tetap dan diterima di  perguruan tinggi terakreditasi pada dua tahun terakhir " },
      { "id": 3, "nilai" : 2, "nama" : "71% - 80% lulusan yang sudah bekerja tetap dan diterima di perguruan tinggi terakreditasi pada dua tahun terakhir " },
      { "id": 4, "nilai" : 1, "nama" : "61% - 70% lulusan yang sudah bekerja tetap dan diterima di perguruan tinggi terakreditasi pada dua tahun terakhir " },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 61% lulusan yang sudah bekerja tetap dan diterima di perguruan tinggi terakreditasi pada dua tahun terakhir " }
    ],
    "jawaban": 4
  },
  {
    "id": 5721,
    "bagian_id": 321,
    "nomor": 77,
    "nama": "Kepala sekolah/madrasah memiliki minat kewirausahaan yang ditunjukkan kemampuan mengelola kegiatan produksi/jasa sebagai sumber belajar siswa. ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Mampu mengelola kegiatan unit usaha yang cukup untuk membiayai 76%-100% biaya kegiatan ekstrakurikuler secara mandiri " },
      { "id": 2, "nilai" : 3, "nama" : "Mampu mengelola kegiatan unit usaha yang cukup untuk membiayai 51%-75% biaya kegiatan ekstrakurikuler secara mandiri " },
      { "id": 3, "nilai" : 2, "nama" : "Mampu mengelola kegiatan unit usaha yang cukup untuk membiayai 26%-50% biaya kegiatan ekstrakurikuler secara mandiri " },
      { "id": 4, "nilai" : 1, "nama" : "Mampu mengelola kegiatan unit usaha yang cukup untuk membiayai 1%-25% biaya kegiatan ekstrakurikuler secara mandiri " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak mampu mengelola unit usaha " }
    ],
    "jawaban": 4
  },
  {
    "id": 5722,
    "bagian_id": 321,
    "nomor": 78,
    "nama": "Kepala sekolah/madrasah melakukan supervisi setiap tahun. ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "91%-100% guru telah disupervisi " },
      { "id": 2, "nilai" : 3, "nama" : "81%-90% guru telah disupervisi " },
      { "id": 3, "nilai" : 2, "nama" : "71%-80% guru telah disupervisi " },
      { "id": 4, "nilai" : 1, "nama" : "61%-70% guru telah disupervisi " },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 61% guru telah disupervisi " }
    ],
    "jawaban": 4
  },
  {
    "id": 5723,
    "bagian_id": 321,
    "nomor": 79,
    "nama": "Sekolah/Madrasah memiliki tenaga administrasi yang berpendidikan menengah atau yang sederajat. ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "5 orang atau lebih " },
      { "id": 2, "nilai" : 3, "nama" : "4 orang" },
      { "id": 3, "nilai" : 2, "nama" : "3 orang" },
      { "id": 4, "nilai" : 1, "nama" : "2 orang " },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 2 orang " }
    ],
    "jawaban": 4
  },
  {
    "id": 5724,
    "bagian_id": 321,
    "nomor": 80,
    "nama": "Tenaga administrasi memiliki latar belakang pendidikan yang sesuai dengan bidang tugasnya. ",
    "bobot": 2,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "5 orang atau lebih tenaga administrasi yang memiliki kesesuaian " },
      { "id": 2, "nilai" : 3, "nama" : "4 orang tenaga administrasi yang memiliki kesesuaian " },
      { "id": 3, "nilai" : 2, "nama" : "3 orang tenaga administrasi yang memiliki kesesuaian " },
      { "id": 4, "nilai" : 1, "nama" : "2 atau 1 orang tenaga administrasi yang memiliki kesesuaian " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki tenaga administrasi yang memiliki kesesuaian " }
    ],
    "jawaban": 4
  },
  {
    "id": 5725,
    "bagian_id": 321,
    "nomor": 81,
    "nama": "Sekolah/Madrasah memiliki kepala perpustakaan dengan kualifikasi minimal D2 ilmu perpustakaan dan memiliki sertifikat kompetensi pengelolaan perpustakaan sekolah/madrasah. ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki kualifikasi minimal D2 ilmu perpustakaan dan memiliki sertifikat " },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki kualifikasi minimal D2 ilmu perpustakaan dan tidak memiliki sertifikat " },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki kualifikasi minimal D2 bukan ilmu perpustakaan dan memiliki sertifikat " },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki kualifikasi minimal D2 bukan ilmu perpustakaan dan tidak memiliki sertifikat " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki kepala perpustakaan " }
    ],
    "jawaban": 4
  },
  {
    "id": 5726,
    "bagian_id": 321,
    "nomor": 82,
    "nama": "Sekolah/Madrasah memiliki tenaga perpustakaan dengan kualifikasi minimal SMA atau yang sederajat dan memiliki sertifikat kompetensi pengelolaan perpustakaan sekolah/madrasah. ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki kualifikasi minimal SMA atau yang sederajat dan memiliki sertifikat. " },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki kualifikasi minimal SMA atau yang sederajat dan tidak memiliki sertifikat " },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki kualifikasi di bawah SMA dan memiliki sertifikat " },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki kualifikasi di bawah SMA dan tidak memiliki sertifikat " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki tenaga perpustakaan " }
    ],
    "jawaban": 4
  },
  {
    "id": 5727,
    "bagian_id": 321,
    "nomor": 83,
    "nama": "Program keahlian memiliki kepala laboratorium/bengkel dengan kualifikasi minimal D3 dan memiliki sertifikat kepala laboratorium sekolah/madrasah ",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki kualifikasi minimal D3 dan memiliki sertifikat. " },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki kualifikasi minimal D3 dan tidak memiliki sertifikat. " },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki kualifikasi di bawah D3 dan memiliki sertifikat. " },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki kualifikasi di bawah D3 dan tidak memiliki sertifikat. " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki kepala laboratorium/bengkel " }
    ],
    "jawaban": 4
  },
  {
    "id": 5728,
    "bagian_id": 321,
    "nomor": 84,
    "nama": "Program keahlian memiliki teknisi laboratorium/bengkel dengan kualifikasi minimal D2 dan memiliki sertifikat teknisi. ",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki kualifikasi minimal D2 yang relevan dan memiliki sertifikat. " },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki kualifikasi minimal D2 yang relevan dan tidak memiliki sertifikat " },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki kualifikasi minimal D2 yang tidak relevan dan memiliki sertifikat " },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki kualifikasi minimal D2 yang tidak relevan dan tidak memiliki sertifikat " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki teknisi laboratorium/bengkel " }
    ],
    "jawaban": 4
  },
  {
    "id": 5729,
    "bagian_id": 321,
    "nomor": 85,
    "nama": "Program keahlian memiliki laboran dengan kualifikasi akademik minimum sesuai standar tenaga laboratorium sesuai dengan ketentuan yang berlaku ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki kualifikasi minimal D1 yang relevan dan memiliki sertifikat. " },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki kualifikasi minimal D1 yang relevan dan tidak memiliki sertifikat " },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki kualifikasi minimal D1 yang tidak relevan dan memiliki sertifikat " },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki kualifikasi minimal D1 yang tidak relevan dan tidak memiliki sertifikat " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki laboran " }
    ],
    "jawaban": 4
  },
  {
    "id": 5730,
    "bagian_id": 321,
    "nomor": 86,
    "nama": "Program keahlian memiliki petugas layanan khusus. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki 4 jenis atau lebih petugas layanan khusus " },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki 3 jenis petugas layanan khusus " },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki 2 jenis petugas layanan khusus " },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki 1 jenis petugas layanan khusus " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki petugas layanan khusus " }
    ],
    "jawaban": 4
  },
  {
    "id": 5731,
    "bagian_id": 321,
    "nomor": 87,
    "nama": "Program keahlian memiliki tenaga teknisi perawatan (maintenance) peralatan dan gedung. ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Program keahlian memiliki 1 tenaga teknisi untuk maintenance peralatan dan 1 tenaga teknisi untuk maintenance gedung " },
      { "id": 2, "nilai" : 3, "nama" : "program keahlian memiliki 1 tenaga teknisi untuk maintenance peralatan dan gedung" },
      { "id": 3, "nilai" : 2, "nama" : "Sekolah/Madrasah memiliki 1 tenaga teknisi maintenance peralatan dan 1 tenaga teknisi maintenance gedung" },
      { "id": 4, "nilai" : 1, "nama" : "Sekolah/Madrasah memiliki 1 tenaga teknisi maintenance peralatan dan gedung" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki tenaga teknisi maintenance peralatan dan gedung " }
    ],
    "jawaban": 4
  },
  {
    "id": 5732,
    "bagian_id": 322,
    "nomor": 88,
    "nama": "Sekolah/madrasah memiliki luas lahan sesuai ketentuan. ",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki minimal luas lahan 91%-100% atau lebih dari ketentuan luas lahan " },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki luas lahan 81%-90% dari ketentuan luas lahan minimal" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki luas lahan 71%-80% dari ketentuan luas lahan minimal" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki luas lahan 61%-70% dari ketentuan luas lahan minimal" },
      { "id": 5, "nilai" : 0, "nama" : "Memiliki luas lahan kurang dari 61% dari ketentuan luas lahan minimal" }
    ],
    "jawaban": 4
  },
  {
    "id": 5733,
    "bagian_id": 322,
    "nomor": 89,
    "nama": "Sekolah/madrasah berada di lokasi yang (1) aman, (2) terhindar dari potensi bahaya yang mengancam kesehatan, (3) keselamatan jiwa, serta (4) memiliki akses untuk penyelamatan dalam keadaan darurat. ",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memenuhi 4 syarat keamanan " },
      { "id": 2, "nilai" : 3, "nama" : "Memenuhi 3 syarat keamanan " },
      { "id": 3, "nilai" : 2, "nama" : "Memenuhi 2 syarat keamanan " },
      { "id": 4, "nilai" : 1, "nama" : "Memenuhi 1 syarat keamanan " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memenuhi syarat keamanan " }
    ],
    "jawaban": 4
  },
  {
    "id": 5734,
    "bagian_id": 322,
    "nomor": 90,
    "nama": "Sekolah/madrasah berada di lokasi yang nyaman, (1) terhindar dari gangguan pencemaran air, (2) kebisingan, (3) pencemaran udara, dan (4) memiliki sarana untuk meningkatkan kenyamanan. ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memenuhi 4 syarat kenyamanan " },
      { "id": 2, "nilai" : 3, "nama" : "Memenuhi 3 syarat keamanan " },
      { "id": 3, "nilai" : 2, "nama" : "Memenuhi 2 syarat keamanan " },
      { "id": 4, "nilai" : 1, "nama" : "Memenuhi 1 syarat keamanan " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memenuhi syarat keamanan " }
    ],
    "jawaban": 4
  },
  {
    "id": 5735,
    "bagian_id": 322,
    "nomor": 91,
    "nama": "Fasilitas pembelajaran berada di lokasi yang sesuai dengan peruntukannya, memiliki status hak atas tanah, dan ijin pemanfaatan dari pemegang hak atas tanah. ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Berada di lokasi yang sesuai dengan peruntukannya, memiliki status hak atas tanah dan ijin pemanfaatan dari pemegang hak atas tanah " },
      { "id": 2, "nilai" : 3, "nama" : "Berada di lokasi yang sesuai dengan peruntukannya dan memiliki status hak atas tanah, tetapi tidak memiliki ijin pemanfaatan dari pemegang hak atas tanah " },
      { "id": 3, "nilai" : 2, "nama" : "Berada di lokasi yang sesuai dengan peruntukannya, tetapi tidak memiliki status hak atas tanah dan tidak memiliki ijin pemanfaatan dari pemegang hak atas tanah " },
      { "id": 4, "nilai" : 1, "nama" : "Tidak berada di lokasi yang sesuai dengan peruntukannya, tetapi memiliki status hak atas tanah dan memiliki ijin pemanfaatan dari pemegang hak atas tana " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak berada di lokasi sesuai dengan peruntukannya " }
    ],
    "jawaban": 4
  },
  {
    "id": 5736,
    "bagian_id": 322,
    "nomor": 92,
    "nama": "Program keahlian memiliki lantai bangunan sesuai dengan ketentuan luas minimal ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki luas lantai 91%-100% atau lebih dari ketentuan luas minimal" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki luas lantai 81%-90% dari ketentuan luas minimal" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki luas lantai 71%-80% dari ketentuan luas minimal" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki luas lantai 61%-70% dari ketentuan luas minimal" },
      { "id": 5, "nilai" : 0, "nama" : "Memiliki luas lantai kurang dari 61% dari ketentuan luas minimal" }
    ],
    "jawaban": 4
  },
  {
    "id": 5737,
    "bagian_id": 322,
    "nomor": 93,
    "nama": "Bangunan sekolah/madrasah memiliki (1) struktur yang stabil dan kokoh serta dilengkapi dengan (2) sistem pencegahan bahaya kebakaran dan (3) penangkal petir. ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Bangunan memiliki (1), (2), dan (3) " },
      { "id": 2, "nilai" : 3, "nama" : "Bangunan memiliki (1) dan (2) " },
      { "id": 3, "nilai" : 2, "nama" : "Bangunan memiliki (1) dan (3) " },
      { "id": 4, "nilai" : 1, "nama" : "Bangunan memiliki (1) " },
      { "id": 5, "nilai" : 0, "nama" : "Bangunan tidak memiliki (1), (2), dan (3) " }
    ],
    "jawaban": 4
  },
  {
    "id": 5738,
    "bagian_id": 322,
    "nomor": 94,
    "nama": "Sekolah/madrasah memiliki sanitasi di dalam dan di luar bangunan yang dapat memenuhi kebutuhan: (1) air bersih, (2) saluran air kotor dan/atau air limbah, (3) tempat sampah, dan (4) saluran air hujan. ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki sanitasi di dalam dan di luar bangunan yang memenuhi (1), (2), (3), dan (4). " },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki sanitasi di dalam dan di luar bangunan yang memenuhi 3 dari 4 kebutuhan " },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki sanitasi di dalam dan di luar bangunan yang memenuhi 2 dari 4 kebutuhan " },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki sanitasi di dalam dan di luar bangunan yang memenuhi 1 dari 4 kebutuhan " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki sanitasi di dalam dan di luar yang memenuhi keempat kebutuhan di atas " }
    ],
    "jawaban": 4
  },
  {
    "id": 5739,
    "bagian_id": 322,
    "nomor": 95,
    "nama": "Sekolah/madrasah memiliki buku teks pelajaran dengan perbandingan (rasio). ",
    "bobot": 2,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "1 buku teks/mata pelajaran/siswa " },
      { "id": 2, "nilai" : 3, "nama" : "1 buku teks/mata pelajaran untuk 2 -5 siswa" },
      { "id": 3, "nilai" : 2, "nama" : "1 buku teks/mata pelajaran untuk 6 -10 siswa" },
      { "id": 4, "nilai" : 1, "nama" : "1 buku teks/mata pelajaran untuk 11 siswa atau lebih" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki buku teks" }
    ],
    "jawaban": 4
  },
  {
    "id": 5740,
    "bagian_id": 322,
    "nomor": 96,
    "nama": "Program keahlian memiliki mata pelajaran yang memanfaatkan buku teks sesuai dengan ketentuan yang berlaku ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "10 atau lebih mata pelajaran " },
      { "id": 2, "nilai" : 3, "nama" : "8-9 mata pelajaran" },
      { "id": 3, "nilai" : 2, "nama" : "6-7 mata pelajaran" },
      { "id": 4, "nilai" : 1, "nama" : "4-5 mata pelajaran " },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 4 mata pelajaran " }
    ],
    "jawaban": 4
  },
  {
    "id": 5741,
    "bagian_id": 322,
    "nomor": 97,
    "nama": "Bangunan sekolah/madrasah memiliki ventilasi udara dan pencahayaan yang memadai. ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki ventilasi udara dan pencahayaan memadai " },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki ventilasi udara memadai tetapi pencahayaan yang kurang memadai " },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki ventilasi udara kurang memadai tetapi pencahayaan memadai " },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki ventilasi udara dan pencahayaan kurang memadai " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki ventilasi udara dan pencahayaan " }
    ],
    "jawaban": 4
  },
  {
    "id": 5742,
    "bagian_id": 322,
    "nomor": 98,
    "nama": "Bangunan sekolah/madrasah memiliki instalasi listrik dengan daya minimum 2200 Watt untuk administrasi sekolah dan ruang teori, serta daya tambahan untuk laboratorium dan bengkel sesuai kebutuhan. ",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki instalasi listrik dengan keterkecukupan daya sesuai kebutuhan " },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki instalasi listrik dengan keterkecukupan daya 90% - 99% dari kebutuhan " },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki instalasi listrik dengan keterkecukupan daya 80% - 89% dari kebutuhan " },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki instalasi listrik dengan keterkecukupan daya 70% - 79% dari kebutuhan " },
      { "id": 5, "nilai" : 0, "nama" : "Memiliki instalasi listrik dengan keterkecukupan daya kurang dari 70% kebutuhan " }
    ],
    "jawaban": 4
  },
  {
    "id": 5743,
    "bagian_id": 322,
    "nomor": 99,
    "nama": "Sekolah/Madrasah memiliki izin mendirikan bangunan dan izin penggunaan bangunan sesuai dengan peruntukannya. ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki izin mendirikan bangunan dan izin penggunaan bangunan sesuai dengan peruntukannya sebelum bangunan berdiri " },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki izin mendirikan bangunan dan izin penggunaan bangunan sesuai dengan peruntukannya setelah bangunan berdiri " },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki izin mendirikan dan memiliki izin penggunaan bangunan sementara" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki izin mendirikan tetapi tidak memiliki izin penggunaan bangunan" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki izin mendirikan dan izin penggunaan bangunan" }
    ],
    "jawaban": 4
  },
  {
    "id": 5744,
    "bagian_id": 322,
    "nomor": 100,
    "nama": "Sekolah/Madrasah melakukan pemeliharaan terhadap bangunan secara berkala. ",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melakukan pemeliharaan ringan dan berat terhadap bangunan secara berkala sesuai ketentuan" },
      { "id": 2, "nilai" : 3, "nama" : "Melakukan pemeliharaan ringan dan berat terhadap bangunan, tetapi melebihi waktu yang sesuai ketentuan" },
      { "id": 3, "nilai" : 2, "nama" : "Melakukan pemeliharaan ringan tetapi melebihi waktu yang sesuai ketentuan, dan tidak pernah melakukan pemeliharaan berat" },
      { "id": 4, "nilai" : 1, "nama" : "Melakukan pemeliharaan terhadap bangunan, jika sudah ada bagian bangunan yang rusak berat" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak pernah  melakukan pemeliharaan" }
    ],
    "jawaban": 4
  },
  {
    "id": 5745,
    "bagian_id": 322,
    "nomor": 101,
    "nama": "Program keahlian memiliki ruang  pembelajaran umum (RPU)  sesuai dengan Standar Sarana dan Prasarana SMK/MAK.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki seluruh jenis RPU yang dipersyaratkan oleh setiap program keahlian" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki ruang kelas, perpustakaan, lab bahasa, lab komputer, dan satu RPU yang lain" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki ruang kelas, perpustakaan, lab komputer, dan lab bahasa" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki ruang kelas, perpustakaan, dan lab komputer" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki RPU" }
    ],
    "jawaban": 4
  },
  {
    "id": 5746,
    "bagian_id": 322,
    "nomor": 102,
    "nama": "Program keahlian memiliki Ruang Pembelajaran Umum (RPU)  dengan ukuran minimum sesuai dengan yang disyaratkan pada Standar Sarana  dan Prasarana SMK/MAK.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki 91% - 100% RPU sesuai dengan yang disyaratkan pada Standar Sarana dan Prasarana SMK/MAK" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki 81% - 90%  RPU dari yang disyaratkan pada Standar Sarana dan Prasarana SMK/MAK." },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki 71% - 80%  RPU dari yang disyaratkan pada Standar Sarana dan Prasarana SMK/MAK." },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki 61% - 70%  RPU dari yang disyaratkan pada Standar Sarana dan Prasarana SMK/MAK." },
      { "id": 5, "nilai" : 0, "nama" : "Memiliki RPU kurang dari 60% dari yang disyaratkan pada Standar Sarana dan Prasarana SMK/MAK." }
    ],
    "jawaban": 4
  },
  {
    "id": 5747,
    "bagian_id": 322,
    "nomor": 103,
    "nama": "Program keahlian memiliki Ruang Pembelajaran Umum (RPU) dengan sarana sebagaimana tercantum pada Standar Sarana dan Prasarana SMK/MAK. ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "91% - 100% RPU mempunyai kelengkapan sarana sesuai dengan persyaratan dalam standar Sarana dan Prasarana SMK/MAK " },
      { "id": 2, "nilai" : 3, "nama" : "81% - 90% RPU mempunyai kelengkapan sarana sesuai dengan persyaratan dalam standar Sarana dan Prasarana SMK/MAK " },
      { "id": 3, "nilai" : 2, "nama" : "71% - 80% RPU mempunyai kelengkapan sarana sesuai dengan persyaratan dalam standar Sarana dan Prasarana SMK/MAK " },
      { "id": 4, "nilai" : 1, "nama" : "61% - 70% RPU mempunyai kelengkapan sarana sesuai dengan persyaratan dalam standar Sarana dan Prasarana SMK/MAK " },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 60% RPU sesuai dengan persyaratan dalam standar Sarana dan Prasarana SMK/MAK " }
    ],
    "jawaban": 4
  },
  {
    "id": 5748,
    "bagian_id": 322,
    "nomor": 104,
    "nama": "Sekolah/Madrasah memiliki ruang penunjang (RP) sesuai dengan Standar Sarana dan Prasarana SMK/MAK. ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki 91% - 100% RP sesuai dengan persyaratan dalam standar " },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki 81% - 90% RP sesuai dengan persyaratan dalam standar " },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki 71% - 80% RP sesuai dengan persyaratan dalam standar " },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki 61% - 70% RP sesuai dengan persyaratan dalam standar " },
      { "id": 5, "nilai" : 0, "nama" : "Memiliki kurang dari 60% RP sesuai dengan persyaratan dalam standar " }
    ],
    "jawaban": 4
  },
  {
    "id": 5749,
    "bagian_id": 322,
    "nomor": 105,
    "nama": "Sekolah/Madrasah memiliki RP dengan ukuran minimum sesuai dengan yang disyaratkan pada Standar Sarana dan Prasarana SMK/MAK. ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "91% - 100% RP memenuhi ukuran minimum sesuai dengan persyaratan dalam standar " },
      { "id": 2, "nilai" : 3, "nama" : "81% - 90% RP memenuhi ukuran minimum sesuai dengan persyaratan dalam standar " },
      { "id": 3, "nilai" : 2, "nama" : "71% - 80% RP memenuhi ukuran minimum sesuai dengan persyaratan dalam standar " },
      { "id": 4, "nilai" : 1, "nama" : "61% - 70% RP memenuhi ukuran minimum sesuai dengan persyaratan dalam standar " },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 60% RP sesuai dengan persyaratan dalam standar" }
    ],
    "jawaban": 4
  },
  {
    "id": 5750,
    "bagian_id": 322,
    "nomor": 106,
    "nama": "Sekolah/Madrasah memiliki RP dengan sarana sebagaimana tercantum pada Standar Sarana dan Prasarana SMK/MAK. ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "91% - 100% RP mempunyai kelengkapan sarana sesuai dengan persyaratan " },
      { "id": 2, "nilai" : 3, "nama" : "81% - 90% RP mempunyai kelengkapan sarana sesuai dengan persyaratan " },
      { "id": 3, "nilai" : 2, "nama" : "71% - 80% RP mempunyai kelengkapan sarana sesuai dengan persyaratan " },
      { "id": 4, "nilai" : 1, "nama" : "Kurang dari 70% RP mempunyai kelengkapan sarana sesuai dengan persyaratan " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak ada satu pun RP mempunyai kelengkapan sarana sesuai dengan persyaratan " }
    ],
    "jawaban": 4
  },
  {
    "id": 5751,
    "bagian_id": 322,
    "nomor": 107,
    "nama": "Program keahlian memiliki ruang pembelajaran khusus (RPK) sesuai dengan Standar Sarana dan Prasarana SMK/MAK. ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki 91% - 100% RPK sesuai dengan persyaratan dalam standar " },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki 81% - 90% RPK sesuai dengan persyaratan dalam standar " },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki 71% - 80% RPK sesuai dengan persyaratan dalam standar " },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki 61% - 70% RPK sesuai dengan persyaratan dalam standar " },
      { "id": 5, "nilai" : 0, "nama" : "Memiliki kurang dari 61% RPK sesuai dengan persyaratan dalam standar " }
    ],
    "jawaban": 4
  },
  {
    "id": 5752,
    "bagian_id": 322,
    "nomor": 108,
    "nama": "Program keahlian memiliki RPK dengan ukuran minimum sesuai dengan yang disyaratkan pada Standar Sarana dan Prasarana SMK/MAK. ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "91% - 100% RPK memenuhi ukuran minimum " },
      { "id": 2, "nilai" : 3, "nama" : "81% - 90% RPK memenuhi ukuran minimum" },
      { "id": 3, "nilai" : 2, "nama" : "71% - 80% RPK memenuhi ukuran minimum" },
      { "id": 4, "nilai" : 1, "nama" : "61% - 70% RPK memenuhi ukuran minimum " },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 61% RPK memenuhi ukuran minimum " }
    ],
    "jawaban": 4
  },
  {
    "id": 5753,
    "bagian_id": 322,
    "nomor": 109,
    "nama": "Program keahlian memiliki RPK dengan sarana sebagaimana tercantum pada Standar Sarana dan Prasarana SMK/MAK. ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "91% - 100% RPK sesuai dengan persyaratan dalam standar " },
      { "id": 2, "nilai" : 3, "nama" : "81% - 90% RPK sesuai dengan persyaratan dalam standar" },
      { "id": 3, "nilai" : 2, "nama" : "71% - 80% RPK sesuai dengan persyaratan dalam standar" },
      { "id": 4, "nilai" : 1, "nama" : "61% - 70% RPK sesuai dengan persyaratan dalam standar " },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 61% RPK sesuai dengan persyaratan dalam standar " }
    ],
    "jawaban": 4
  },
  {
    "id": 5754,
    "bagian_id": 322,
    "nomor": 110,
    "nama": "Sekolah/Madrasah memiliki unit produksi/business center sebagai wahana kewirausahaan, yang memiliki: (1) fasilitas usaha sendiri, (2) sistem usaha sendiri, (3) SDM yang melayani, dan (4) menghasilkan profit ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memenuhi 4 unsur" },
      { "id": 2, "nilai" : 3, "nama" : "Memenuhi 3 unsur" },
      { "id": 3, "nilai" : 2, "nama" : "Memenuhi 2 unsur" },
      { "id": 4, "nilai" : 1, "nama" : "Memenuhi 1 unsur" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki unit produksi/business center " }
    ],
    "jawaban": 4
  },
  {
    "id": 5755,
    "bagian_id": 322,
    "nomor": 111,
    "nama": "Sekolah/Madrasah memiliki unit produksi/business center yang pasar usahanya tersebar luas. ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Tersebar secara nasional." },
      { "id": 2, "nilai" : 3, "nama" : "Tersebar di beberapa kabupaten/kota atau provinsi " },
      { "id": 3, "nilai" : 2, "nama" : "Tersebar di kabupaten/kota" },
      { "id": 4, "nilai" : 1, "nama" : "Tersebar dalam lingkungan sekolah/madrasah " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki unit produksi/business center " }
    ],
    "jawaban": 4
  },
  {
    "id": 5756,
    "bagian_id": 322,
    "nomor": 112,
    "nama": "Sekolah/Madrasah memiliki Bursa Kerja Khusus (BKK) dengan berbagai kegiatan: (1) kerjasama dengan DU/DI, (2) memasarkan lulusan, (3) melakukan seleksi, dan (4) penyaluran lulusannya ke dunia kerja yang relevan ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "memiliki 4 kegiatan " },
      { "id": 2, "nilai" : 3, "nama" : "memiliki 3 kegiatan " },
      { "id": 3, "nilai" : 2, "nama" : "memiliki 2 kegiatan " },
      { "id": 4, "nilai" : 1, "nama" : "memiliki 1 kegiatan " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki kegiatan " }
    ],
    "jawaban": 4
  },
  {
    "id": 5757,
    "bagian_id": 323,
    "nomor": 113,
    "nama": "Sekolah/Madrasah telah merumuskan, menetapkan, dan mensosialisasikan visi lembaga. ",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Merumuskan dan menetapkan visi, mudah dipahami dan sering disosialisasikan " },
      { "id": 2, "nilai" : 3, "nama" : "Merumuskan dan menetapkan visi, mudah dipahami dan pernah disosialisasikan " },
      { "id": 3, "nilai" : 2, "nama" : "Merumuskan dan menetapkan visi, mudah dipahami tetapi tidak disosialisasikan " },
      { "id": 4, "nilai" : 1, "nama" : "Merumuskan dan menetapkan visi, sulit dipahami dan tidak disosialisasikan " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak merumuskan dan menetapkan visi " }
    ],
    "jawaban": 4
  },
  {
    "id": 5758,
    "bagian_id": 323,
    "nomor": 114,
    "nama": "Sekolah/Madrasah telah merumuskan dan menetapkan misi lembaga. ",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Merumuskan dan menetapkan misi, mudah dipahami dan sering disosialisasikan " },
      { "id": 2, "nilai" : 3, "nama" : "Merumuskan dan menetapkan misi, mudah dipahami dan pernah disosialisasikan " },
      { "id": 3, "nilai" : 2, "nama" : "Merumuskan dan menetapkan misi, mudah dipahami tetapi tidak disosialisasikan " },
      { "id": 4, "nilai" : 1, "nama" : "Merumuskan dan menetapkan misi, sulit dipahami dan tidak disosialisasikan " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak merumuskan dan menetapkan misi " }
    ],
    "jawaban": 4
  },
  {
    "id": 5759,
    "bagian_id": 323,
    "nomor": 115,
    "nama": "Program keahlian telah merumuskan dan menetapkan tujuan. ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Merumuskan dan menetapkan tujuan, mudah dipahami dan sering disosialisasikan " },
      { "id": 2, "nilai" : 3, "nama" : "Merumuskan dan menetapkan tujuan, mudah dipahami dan pernah disosialisasikan " },
      { "id": 3, "nilai" : 2, "nama" : "Merumuskan dan menetapkan tujuan, mudah dipahami tetapi tidak disosialisasikan " },
      { "id": 4, "nilai" : 1, "nama" : "Merumuskan dan menetapkan tujuan, sulit dipahami dan tidak disosialisasikan " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak merumuskan dan menetapkan tujuan " }
    ],
    "jawaban": 4
  },
  {
    "id": 5760,
    "bagian_id": 323,
    "nomor": 116,
    "nama": "Program keahlian memiliki rencana kerja jangka menengah (empat tahunan) dan rencana kerja tahunan. ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki rencana kerja jangka menengah dan rencana kerja tahunan dan sudah disosialisasikan " },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki rencana kerja jangka menengah dan rencana kerja tahunan serta salah satu yang sudah disosialisasikan " },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki rencana  kerja jangka menengah dan rencana  kerja tahunan serta belum disosialisasikan" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki rencana  kerja jangka menengah atau rencana kerja tahunan baik sudah maupun belum disosialisasikan" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki rencana  kerja jangka menengah dan rencana kerja tahunan" }
    ],
    "jawaban": 4
  },
  {
    "id": 5761,
    "bagian_id": 323,
    "nomor": 117,
    "nama": "Program keahlian memiliki pedoman yang mengatur berbagai aspek pengelolaan secara tertulis yang mudah dipahami oleh pihak-pihak terkait.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki 7 atau lebih dokumen  aspek pengelolaan secara tertulis" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki 5 - 6 dokumen aspek pengelolaan secara tertulis" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki 3 - 4 dokumen aspek pengelolaan secara tertulis" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki 1 - 2 dokumen aspek pengelolaan secara tertulis" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki dokumen  aspek pengelolaan secara tertulis" }
    ],
    "jawaban": 4
  },
  {
    "id": 5762,
    "bagian_id": 323,
    "nomor": 118,
    "nama": "Program keahlian memiliki struktur organisasi dengan kejelasan uraian tugas dan mekanisme kerja.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki struktur organisasi yang dipajang di dinding dan disertai uraian tugas yang jelas" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki struktur organisasi dan disertai uraian tugas yang jelas" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki struktur organisasi dan disertai uraian tugas  tetapi tidak jelas" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki struktur organisasi tetapi tidak ada uraian tugas." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki struktur organisasi" }
    ],
    "jawaban": 4
  },
  {
    "id": 5763,
    "bagian_id": 323,
    "nomor": 119,
    "nama": "Program keahlian melaksanakan kegiatan sesuai dengan  rencana kerja tahunan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "91% - 100% kegiatan dilaksanakan sesuai rencana kerja tahunan" },
      { "id": 2, "nilai" : 3, "nama" : "81% - 90% kegiatan dilaksanakan sesuai rencana kerja tahunan" },
      { "id": 3, "nilai" : 2, "nama" : "71% - 80% kegiatan dilaksanakan sesuai rencana kerja tahunan" },
      { "id": 4, "nilai" : 1, "nama" : "61% - 70% kegiatan dilaksanakan sesuai rencana kerja tahunan" },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 61% kegiatan dilaksanakan sesuai rencana kerja tahunan" }
    ],
    "jawaban": 4
  },
  {
    "id": 5764,
    "bagian_id": 323,
    "nomor": 120,
    "nama": "Program keahlian melaksanakan kegiatan kesiswaan.",
    "bobot": 2,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki 4 atau lebih jenis kegiatan kesiswaan" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki 3 jenis kegiatan kesiswaan" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki 2 jenis kegiatan kesiswaan" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki 1 jenis kegiatan kesiswaan" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melaksanakan kegiatan kesiswaan" }
    ],
    "jawaban": 4
  },
  {
    "id": 5765,
    "bagian_id": 323,
    "nomor": 121,
    "nama": "Program keahlian melaksanakan kegiatan pengembangan kurikulum dan pembelajaran, meliputi: (1) KTSP, (2) Kalender pendidikan, (3) Program pembelajaran, (4) Penilaian hasil belajar siswa, dan (5) Peraturan akademik ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melaksanakan 4 atau lebih kegiatan " },
      { "id": 2, "nilai" : 3, "nama" : "Melaksanakan 3 kegiatan " },
      { "id": 3, "nilai" : 2, "nama" : "Melaksanakan 2 kegiatan " },
      { "id": 4, "nilai" : 1, "nama" : "Melaksanakan 1 kegiatan " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melaksanakan kegiatan " }
    ],
    "jawaban": 4
  },
  {
    "id": 5766,
    "bagian_id": 323,
    "nomor": 122,
    "nama": "Sekolah/madrasah melaksanakan program pendayagunaan pendidik dan tenaga kependidikan, meliputi: (1) Pembagian tugas, (2) Penentuan sistem penghargaan, (3) Pengembangan profesi, (4) Promosi dan penempatan, dan (5) Mutasi ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melaksanakan 4 atau lebih program pendayagunaan pendidik dan tenaga kependidikan " },
      { "id": 2, "nilai" : 3, "nama" : "Melaksanakan 3 program pendayagunaan pendidik dan tenaga kependidikan " },
      { "id": 3, "nilai" : 2, "nama" : "Melaksanakan 2 program pendayagunaan pendidik dan tenaga kependidikan " },
      { "id": 4, "nilai" : 1, "nama" : "Melaksanakan 1 program pendayagunaan pendidik dan tenaga kependidikan " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melaksanakan program pendayagunaan pendidik dan tenaga kependidikan " }
    ],
    "jawaban": 4
  },
  {
    "id": 5767,
    "bagian_id": 323,
    "nomor": 123,
    "nama": "Program keahlian mengelola sarana dan prasarana pembelajaran. ",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Mengelola 4 atau lebih program sarana dan prasarana " },
      { "id": 2, "nilai" : 3, "nama" : "Mengelola 3 program sarana dan prasarana " },
      { "id": 3, "nilai" : 2, "nama" : "Mengelola 2 program sarana dan prasarana " },
      { "id": 4, "nilai" : 1, "nama" : "Mengelola 1 program sarana dan prasarana " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak mengelola program sarana dan prasarana " }
    ],
    "jawaban": 4
  },
  {
    "id": 5768,
    "bagian_id": 323,
    "nomor": 124,
    "nama": "Sekolah/Madrasah mengelola pembiayaan pendidikan. ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki 4 program pengelolaan pembiayaan pendidikan " },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki 3 program pengelolaan pembiayaan pendidikan " },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki 2 program pengelolaan pembiayaan pendidikan " },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki 1 program pengelolaan pembiayaan pendidikan " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki program pengelolaan pembiayaan pendidikan " }
    ],
    "jawaban": 4
  },
  {
    "id": 5769,
    "bagian_id": 323,
    "nomor": 125,
    "nama": "Sekolah/Madrasah melaksanakan kegiatan untuk menciptakan suasana, iklim, dan lingkungan pembelajaran yang kondusif. ",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melaksanakan 4 atau lebih kegiatan " },
      { "id": 2, "nilai" : 3, "nama" : "Melaksanakan 3 kegiatan " },
      { "id": 3, "nilai" : 2, "nama" : "Melaksanakan 2 kegiatan " },
      { "id": 4, "nilai" : 1, "nama" : "Melaksanakan 1 kegiatan " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melaksanakan kegiatan " }
    ],
    "jawaban": 4
  },
  {
    "id": 5770,
    "bagian_id": 323,
    "nomor": 126,
    "nama": "Sekolah/Madrasah memiliki kegiatan yang melibatkan masyarakat dan membangun kemitraan dengan lembaga lain yang relevan dalam pengelolaan pendidikan satu tahun terakhir. ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki 4 atau lebih kegiatan " },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki 3 kegiatan" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki 2 kegiatan " },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki 1 kegiatan" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki kegiatan " }
    ],
    "jawaban": 4
  },
  {
    "id": 5771,
    "bagian_id": 323,
    "nomor": 127,
    "nama": "Program keahlian melakukan kegiatan pelatihan kejuruan bagi teknisi atau laboran dalam rangka pemutakhiran keahlian kejuruan. ",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "76% - 100% teknisi atau laboran mengikuti pelatihan kejuruan " },
      { "id": 2, "nilai" : 3, "nama" : "51% - 75% teknisi atau laboran mengikuti pelatihan kejuruan " },
      { "id": 3, "nilai" : 2, "nama" : "26% - 50% teknisi atau laboran mengikuti pelatihan kejuruan " },
      { "id": 4, "nilai" : 1, "nama" : "1% - 25% teknisi atau laboran mengikuti pelatihan kejuruan " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak satu pun teknisi atau laboran mengikuti pelatihan kejuruan " }
    ],
    "jawaban": 4
  },
  {
    "id": 5772,
    "bagian_id": 323,
    "nomor": 128,
    "nama": "Sekolah/madrasah menjalin kerjasama dengan DU/DI dalam melaksanakan magang guru. ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki 7 atau lebih kerjasama dengan DU/DI" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki 5 - 6 kerjasama dengan DU/DI" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki 3 - 4 kerjasama dengan DU/DI" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki 1 - 2 kerjasama dengan DU/DI" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki kerjasama dengan DU/DI" }
    ],
    "jawaban": 4
  },
  {
    "id": 5773,
    "bagian_id": 323,
    "nomor": 129,
    "nama": "Program keahlian menerapkan sistem manajemen mutu.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Program keahlian telah menerapkan dan memperoleh pengakuan sistem manajemen mutu pada pelayanan manajemen dan pembelajaran" },
      { "id": 2, "nilai" : 3, "nama" : "Program keahlian telah menerapkan dan memperoleh pengakuan sistem manajemen mutu salah satu dari pelayanan manajemen atau pembelajaran " },
      { "id": 3, "nilai" : 2, "nama" : "Program keahlian telah menerapkan sistem manajemen mutu, tetapi belum memperoleh pengakuan dari lembaga yang berwenang " },
      { "id": 4, "nilai" : 1, "nama" : "Program keahlian sedang dalam tahap persiapan menuju sistem manajemen mutu pada kurun waktu 3 tahun mendatang " },
      { "id": 5, "nilai" : 0, "nama" : "Program keahlian tidak memiliki program sistem manajemen mutu" }
    ],
    "jawaban": 4
  },
  {
    "id": 5774,
    "bagian_id": 323,
    "nomor": 130,
    "nama": "Program keahlian memiliki unit produksi/busines center yang bidang usahanya sesuai dengan kompetensi keahlian yang dimiliki. ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki 4 jenis atau lebih barang atau jasa sesuai dengan kompetensi keahlian " },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki 3 jenis barang atau jasa sesuai dengan kompetensi keahlian " },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki 2 jenis barang atau jasa sesuai dengan kompetensi keahlian " },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki 1 jenis barang atau jasa sesuai dengan kompetensi keahlian " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki barang atau jasa sesuai dengan kompetensi keahlian " }
    ],
    "jawaban": 4
  },
  {
    "id": 5775,
    "bagian_id": 323,
    "nomor": 131,
    "nama": "Pengelolaan unit produksi/busines center melibatkan seluruh warga sekolah/madrasah. ",
    "bobot": 2,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melibatkan guru, siswa, dan karyawan" },
      { "id": 2, "nilai" : 3, "nama" : "Melibatkan guru dan siswa" },
      { "id": 3, "nilai" : 2, "nama" : "Melibatkan siswa dan karyawan" },
      { "id": 4, "nilai" : 1, "nama" : "Hanya melibatkan guru atau siswa atau karyawan saja " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melibatkan semuanya " }
    ],
    "jawaban": 4
  },
  {
    "id": 5776,
    "bagian_id": 323,
    "nomor": 132,
    "nama": "Bursa Kerja Khusus (BKK) yang dimiliki sekolah/madrasah mampu menyalurkan penempataan kerja bagi lulusan di DU/DI dalam 3 tahun terakhir. ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Lebih dari 60% lulusan yang bekerja tercatat oleh BKK " },
      { "id": 2, "nilai" : 3, "nama" : "46% - 60% lulusan yang bekerja tercatat oleh BKK " },
      { "id": 3, "nilai" : 2, "nama" : "31% - 45% lulusan yang bekerja tercatat oleh BKK " },
      { "id": 4, "nilai" : 1, "nama" : "16% - 30% lulusan yang bekerja tercatat oleh BKK " },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 16% lulusan yang bekerja tercatat oleh BKK " }
    ],
    "jawaban": 4
  },
  {
    "id": 5777,
    "bagian_id": 323,
    "nomor": 133,
    "nama": "Sekolah/madrasah memiliki program pengawasan yang meliputi: (1) pemantauan, (2) supervisi, (3) evaluasi, (4) pelaporan, dan (5) tindak lanjut. ",
    "bobot": 2,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki 4 atau lebih program pengawasan " },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki 3 program pengawasan " },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki 2 program pengawasan " },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki 1 program pengawasan " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki program pengawasan " }
    ],
    "jawaban": 4
  },
  {
    "id": 5778,
    "bagian_id": 323,
    "nomor": 134,
    "nama": "Sekolah/madrasah melaksanakan kegiatan evaluasi diri. ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melaksanakan setiap tahun " },
      { "id": 2, "nilai" : 3, "nama" : "Melaksanakan setiap 2 tahun " },
      { "id": 3, "nilai" : 2, "nama" : "Melaksanakan setiap 3 tahun " },
      { "id": 4, "nilai" : 1, "nama" : "Melaksanakan setiap 4 tahun " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melaksanakan sama sekali " }
    ],
    "jawaban": 4
  },
  {
    "id": 5779,
    "bagian_id": 323,
    "nomor": 135,
    "nama": "Sekolah/madrasah melaksanakan evaluasi kinerja pendidik dan tenaga kependidikan, meliputi: (1) kesesuaian penugasan dengan keahlian; (2) keseimbangan beban kerja; (3) kinerja pendidik dan tenaga kependidikan dalam pelaksanaan tugas; dan (4) pencapaian prestasi pendidik dan tenaga kependidikan. ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melaksanakan 4 atau lebih program " },
      { "id": 2, "nilai" : 3, "nama" : "Melaksanakan 3 program " },
      { "id": 3, "nilai" : 2, "nama" : "Melaksanakan 2 program " },
      { "id": 4, "nilai" : 1, "nama" : "Melaksanakan 1 program " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melakukan program " }
    ],
    "jawaban": 4
  },
  {
    "id": 5780,
    "bagian_id": 323,
    "nomor": 136,
    "nama": "Program keahlian mempersiapkan unsur-unsur pelaksanaan akreditasi yang meliputi: (1) dokumen yang diperlukan untuk mendukung akreditasi; (2) petugas yang akan mendampingi asesor; (3) bukti fisik nondokumen; dan (4) sarana dan prasarana pendukung pelaksanaan akreditasi. ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Mempersiapkan 4 unsur pelaksanaan akreditasi " },
      { "id": 2, "nilai" : 3, "nama" : "Mempersiapkan 3 unsur pelaksanaan akreditasi " },
      { "id": 3, "nilai" : 2, "nama" : "Mempersiapkan 2 unsur pelaksanaan akreditasi " },
      { "id": 4, "nilai" : 1, "nama" : "Mempersiapkan 1 unsur pelaksanaan akreditasi " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak mempersiapkan unsur pelaksanaan akreditasi. " }
    ],
    "jawaban": 4
  },
  {
    "id": 5781,
    "bagian_id": 323,
    "nomor": 137,
    "nama": "Sekolah/madrasah memiliki struktur kepemimpinan sesuai standar pendidik dan tenaga kependidikan. ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki kepala sekolah/madrasah dan 4 atau lebih wakil kepala sekolah/madrasah " },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki kepala sekolah/madrasah dan 3 wakil kepala sekolah/madrasah " },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki kepala sekolah/madrasah dan 2 wakil kepala sekolah/madrasah " },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki kepala sekolah/madrasah dan 1 wakil kepala sekolah/madrasah " },
      { "id": 5, "nilai" : 0, "nama" : "Memiliki kepala sekolah/madrasah dan tidak memiliki wakil kepala sekolah/madrasah " }
    ],
    "jawaban": 4
  },
  {
    "id": 5782,
    "bagian_id": 323,
    "nomor": 138,
    "nama": "Sekolah/madrasah memiliki 4 komponen sistem informasi manajemen, yang meliputi: (1) Fasilitas sistem informasi yang efesien, efektif dan mudah diakses, (2) Sistem informasi untuk mendukung administrasi pendidikan, (3) Sistem kegiatan untuk melayani informasi/pengaduan dari luar, (4) Media komunikasi antarwarga sekolah/madrasah ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "memiliki 4 komponen " },
      { "id": 2, "nilai" : 3, "nama" : "memiliki 3 komponen " },
      { "id": 3, "nilai" : 2, "nama" : "memiliki 2 komponen " },
      { "id": 4, "nilai" : 1, "nama" : "memiliki 1 komponen " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki komponen " }
    ],
    "jawaban": 4
  },
  {
    "id": 5783,
    "bagian_id": 324,
    "nomor": 139,
    "nama": "Sekolah/madrasah memiliki dokumen investasi sarana dan prasarana. ",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki dokumen investasi sarana dan prasarana yang lengkap lebih dari 3 tahun terakhir " },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki dokumen investasi sarana dan prasarana yang lengkap selama 3 tahun terakhir " },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki dokumen investasi sarana dan prasarana yang lengkap selama 2 tahun terakhir " },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki dokumen investasi sarana dan prasarana yang lengkap selama 1 tahun terakhir " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki dokumen investasi sarana dan prasarana " }
    ],
    "jawaban": 4
  },
  {
    "id": 5784,
    "bagian_id": 324,
    "nomor": 140,
    "nama": "Sekolah/madrasah membelanjakan biaya untuk pengembangan pendidik dan tenaga kependidikan berdasarkan Rencana Kerja dan Anggaran Sekolah/Madrasah (RKA-S/M). ",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "96% - 100% dari anggaran pengembangan pendidik dan tenaga kependidikan dalam RKA-S/M " },
      { "id": 2, "nilai" : 3, "nama" : "91% - 95% dari anggaran pengembangan pendidik dan tenaga kependidikan dalam RKA-S/M " },
      { "id": 3, "nilai" : 2, "nama" : "86% - 90% dari anggaran pengembangan pendidik dan tenaga kependidikan dalam RKA-S/M " },
      { "id": 4, "nilai" : 1, "nama" : "81% - 85% dari anggaran pengembangan pendidik dan tenaga kependidikan dalam RKA-S/M " },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 81% dari anggaran pengembangan pendidik dan tenaga kependidikan dalam RKA-S/M " }
    ],
    "jawaban": 4
  },
  {
    "id": 5785,
    "bagian_id": 324,
    "nomor": 141,
    "nama": "Sekolah/madrasah merealisasikan modal kerja sesuai dengan RKA-S/M. ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "96% - 100% modal kerja " },
      { "id": 2, "nilai" : 3, "nama" : "91% - 95% modal kerja" },
      { "id": 3, "nilai" : 2, "nama" : "86% - 90% modal kerja" },
      { "id": 4, "nilai" : 1, "nama" : "81% - 85% modal kerja " },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 81% modal kerja " }
    ],
    "jawaban": 4
  },
  {
    "id": 5786,
    "bagian_id": 324,
    "nomor": 142,
    "nama": "Sekolah/madrasah membayar: (1) gaji, (2) honor kegiatan, (3) insentif, dan (4) tunjangan lain bagi guru.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Mengeluarkan dana untuk 4 jenis pengeluaran. " },
      { "id": 2, "nilai" : 3, "nama" : "Mengeluarkan dana untuk 3 jenis pengeluaran. " },
      { "id": 3, "nilai" : 2, "nama" : "Mengeluarkan dana untuk 2 jenis pengeluaran. " },
      { "id": 4, "nilai" : 1, "nama" : "Mengeluarkan dana untuk 1 jenis pengeluaran." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak mengeluarkan dana untuk 4 jenis pengeluaran. " }
    ],
    "jawaban": 4
  },
  {
    "id": 5787,
    "bagian_id": 324,
    "nomor": 143,
    "nama": "Sekolah/Madrasah membayar: (1) gaji, (2) honor kegiatan sekolah/madrasah, (3) insentif, dan (4) tunjangan lain bagi tenaga kependidikan pada tahun berjalan. ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Mengeluarkan dana untuk 4 jenis pengeluaran. " },
      { "id": 2, "nilai" : 3, "nama" : "Mengeluarkan dana untuk 3 jenis pengeluaran. " },
      { "id": 3, "nilai" : 2, "nama" : "Mengeluarkan dana untuk 2 jenis pengeluaran. " },
      { "id": 4, "nilai" : 1, "nama" : "Mengeluarkan dana untuk 1 jenis pengeluaran." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak mengeluarkan dana untuk 4 jenis pengeluaran. " }
    ],
    "jawaban": 4
  },
  {
    "id": 5788,
    "bagian_id": 324,
    "nomor": 144,
    "nama": "Program keahlian membelanjakan biaya penunjang pelaksanaan kegiatan pembelajaran selama tiga tahun terakhir. ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Membelanjakan 96% - 100% biaya penunjang " },
      { "id": 2, "nilai" : 3, "nama" : "Membelanjakan 91% - 95% biaya penunjang " },
      { "id": 3, "nilai" : 2, "nama" : "Membelanjakan 86% - 90% biaya penunjang " },
      { "id": 4, "nilai" : 1, "nama" : "Membelanjakan 81% - 85% biaya penunjang " },
      { "id": 5, "nilai" : 0, "nama" : "Membelanjakan kurang dari 81% biaya penunjang " }
    ],
    "jawaban": 4
  },
  {
    "id": 5789,
    "bagian_id": 324,
    "nomor": 145,
    "nama": "Sekolah/madrasah membelanjakan dana untuk kegiatan kesiswaan selama 1 tahun terakhir. ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Membelanjakan 96% - 100% anggaran " },
      { "id": 2, "nilai" : 3, "nama" : "Membelanjakan 91% - 95% anggaran " },
      { "id": 3, "nilai" : 2, "nama" : "Membelanjakan 86% - 90% anggaran " },
      { "id": 4, "nilai" : 1, "nama" : "Membelanjakan 81% - 85% anggaran " },
      { "id": 5, "nilai" : 0, "nama" : "Membelanjakan kurang dari 81% anggaran " }
    ],
    "jawaban": 4
  },
  {
    "id": 5790,
    "bagian_id": 324,
    "nomor": 146,
    "nama": "Program keahlian membelanjakan biaya pengadaan alat tulis untuk kegiatan pembelajaran selama 1 tahun terakhir. ",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Membelanjakan 96% - 100% dari anggaran " },
      { "id": 2, "nilai" : 3, "nama" : "Membelanjakan 91% - 95% dari anggaran " },
      { "id": 3, "nilai" : 2, "nama" : "Membelanjakan 86% - 90% dari anggaran " },
      { "id": 4, "nilai" : 1, "nama" : "Membelanjakan 81% - 85% dari anggaran " },
      { "id": 5, "nilai" : 0, "nama" : "Membelanjakan kurang dari 81% dari anggaran " }
    ],
    "jawaban": 4
  },
  {
    "id": 5791,
    "bagian_id": 324,
    "nomor": 147,
    "nama": "Sekolah/madrasah membelanjakan biaya pengadaan bahan habis pakai untuk kegiatan pembelajaran selama 1 tahun terakhir. ",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Membelanjakan 96% - 100% anggaran " },
      { "id": 2, "nilai" : 3, "nama" : "Membelanjakan 91% - 95% anggaran " },
      { "id": 3, "nilai" : 2, "nama" : "Membelanjakan 86% - 90% anggaran " },
      { "id": 4, "nilai" : 1, "nama" : "Membelanjakan 81% - 85% anggaran " },
      { "id": 5, "nilai" : 0, "nama" : "Membelanjakan kurang dari 81% anggaran " }
    ],
    "jawaban": 4
  },
  {
    "id": 5792,
    "bagian_id": 324,
    "nomor": 148,
    "nama": "Sekolah/madrasah membelanjakan biaya pengadaan alat habis pakai untuk kegiatan pembelajaran selama 1 tahun terakhir. ",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Membelanjakan 96% - 100% anggaran " },
      { "id": 2, "nilai" : 3, "nama" : "Membelanjakan 91% - 95% anggaran " },
      { "id": 3, "nilai" : 2, "nama" : "Membelanjakan 86% - 90% anggaran " },
      { "id": 4, "nilai" : 1, "nama" : "Membelanjakan 81% - 85% anggaran " },
      { "id": 5, "nilai" : 0, "nama" : "Membelanjakan kurang dari 81% anggaran " }
    ],
    "jawaban": 4
  },
  {
    "id": 5793,
    "bagian_id": 324,
    "nomor": 149,
    "nama": "Sekolah/madrasah membelanjakan biaya untuk kegiatan rapat selama 1 tahun terakhir. ",
    "bobot": 2,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Membelanjakan 96% - 100% anggaran " },
      { "id": 2, "nilai" : 3, "nama" : "Membelanjakan 91% - 95% anggaran " },
      { "id": 3, "nilai" : 2, "nama" : "Membelanjakan 86% - 90% anggaran " },
      { "id": 4, "nilai" : 1, "nama" : "Membelanjakan 81% - 85% anggaran " },
      { "id": 5, "nilai" : 0, "nama" : "Membelanjakan kurang dari 81% anggaran " }
    ],
    "jawaban": 4
  },
  {
    "id": 5794,
    "bagian_id": 324,
    "nomor": 150,
    "nama": "Sekolah/madrasah membelanjakan biaya transportasi dan perjalanan dinas selama 1 tahun terakhir. ",
    "bobot": 2,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Membelanjakan 96% - 100% anggaran " },
      { "id": 2, "nilai" : 3, "nama" : "Membelanjakan 91% - 95% anggaran " },
      { "id": 3, "nilai" : 2, "nama" : "Membelanjakan 86% - 90% anggaran " },
      { "id": 4, "nilai" : 1, "nama" : "Membelanjakan 81% - 85% anggaran " },
      { "id": 5, "nilai" : 0, "nama" : "Membelanjakan kurang dari 81% anggaran " }
    ],
    "jawaban": 4
  },
  {
    "id": 5795,
    "bagian_id": 324,
    "nomor": 151,
    "nama": "Sekolah/madrasah membelanjakan biaya penggandaan soal-soal ulangan/ujian selama 1 tahun terakhir. ",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Membelanjakan 96% - 100% anggaran " },
      { "id": 2, "nilai" : 3, "nama" : "Membelanjakan 91% - 95% anggaran " },
      { "id": 3, "nilai" : 2, "nama" : "Membelanjakan 86% - 90% anggaran " },
      { "id": 4, "nilai" : 1, "nama" : "Membelanjakan 81% - 85% anggaran " },
      { "id": 5, "nilai" : 0, "nama" : "Membelanjakan kurang dari 81% anggaran " }
    ],
    "jawaban": 4
  },
  {
    "id": 5796,
    "bagian_id": 324,
    "nomor": 152,
    "nama": "Sekolah/madrasah membelanjakan biaya daya dan jasa selama 1 tahun terakhir. ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Membelanjakan 96% - 100% anggaran " },
      { "id": 2, "nilai" : 3, "nama" : "Membelanjakan 91% - 95% anggaran " },
      { "id": 3, "nilai" : 2, "nama" : "Membelanjakan 86% - 90% anggaran " },
      { "id": 4, "nilai" : 1, "nama" : "Membelanjakan 81% - 85% anggaran " },
      { "id": 5, "nilai" : 0, "nama" : "Membelanjakan kurang dari 81% anggaran " }
    ],
    "jawaban": 4
  },
  {
    "id": 5797,
    "bagian_id": 324,
    "nomor": 153,
    "nama": "Sekolah/madrasah membelanjakan anggaran untuk mendukung kegiatan operasional tidak langsung selama 3 tahun terakhir. ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Membelanjakan 96% - 100% anggaran " },
      { "id": 2, "nilai" : 3, "nama" : "Membelanjakan 91% - 95% anggaran " },
      { "id": 3, "nilai" : 2, "nama" : "Membelanjakan 86% - 90% anggaran " },
      { "id": 4, "nilai" : 1, "nama" : "Membelanjakan 81% - 85% anggaran " },
      { "id": 5, "nilai" : 0, "nama" : "Membelanjakan kurang dari 81% anggaran " }
    ],
    "jawaban": 4
  },
  {
    "id": 5800,
    "bagian_id": 324,
    "nomor": 156,
    "nama": "Penetapan besarnya uang sekolah/madrasah atau program keahlian mempertimbangkan kemampuan ekonomi orangtua siswa. ",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "91% - 100% siswa dari keluarga tidak mampu mendapatkan keringanan " },
      { "id": 2, "nilai" : 3, "nama" : "81% - 90% siswa dari keluarga tidak mampu mendapatkan keringanan " },
      { "id": 3, "nilai" : 2, "nama" : "71% - 80% siswa dari keluarga tidak mampu mendapatkan keringanan " },
      { "id": 4, "nilai" : 1, "nama" : "61% - 70% siswa dari keluarga tidak mampu mendapatkan keringanan " },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 61% siswa dari keluarga tidak mampu mendapatkan keringanan " }
    ],
    "jawaban": 4
  },
  {
    "id": 5801,
    "bagian_id": 324,
    "nomor": 157,
    "nama": "Siswa dikenakan biaya pendaftaran ulang pada setiap awal tahun pelajaran. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Tidak ada siswa yang dikenakan biaya pendaftaran ulang" },
      { "id": 2, "nilai" : 3, "nama" : "1% - 25% siswa dikenakan biaya pendaftaran ulang" },
      { "id": 3, "nilai" : 2, "nama" : "26% - 50% siswa dikenakan biaya pendaftaran ulang" },
      { "id": 4, "nilai" : 1, "nama" : "51% -  75% siswa dikenakan biaya pendaftaran ulang" },
      { "id": 5, "nilai" : 0, "nama" : "76% - 100% siswa dikenakan biaya pendaftaran ulang" }
    ],
    "jawaban": 4
  },
  {
    "id": 5802,
    "bagian_id": 324,
    "nomor": 158,
    "nama": "Sekolah/madrasah dan/atau program keahlian memberikan bantuan untuk siswa yang kurang mampu secara ekonomi. ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Membantu 91% -100% siswa kurang mampu secara ekonomi " },
      { "id": 2, "nilai" : 3, "nama" : "Membantu 81% -90% siswa kurang mampu secara ekonomi " },
      { "id": 3, "nilai" : 2, "nama" : "Membantu 71% -80% siswa kurang mampu secara ekonomi " },
      { "id": 4, "nilai" : 1, "nama" : "Membantu 61% -70% siswa kurang mampu secara ekonomi " },
      { "id": 5, "nilai" : 0, "nama" : "Membantu kurang dari 61% siswa kurang mampu secara ekonomi " }
    ],
    "jawaban": 4
  },
  {
    "id": 5803,
    "bagian_id": 324,
    "nomor": 159,
    "nama": "Sekolah/madrasah dan/atau program keahlian melakukan pungutan biaya personal selain uang sekolah/madrasah. ",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Tidak melakukan pungutan" },
      { "id": 2, "nilai" : 3, "nama" : "Melakukan 1 jenis pungutan " },
      { "id": 3, "nilai" : 2, "nama" : "Melakukan 2 jenis pungutan " },
      { "id": 4, "nilai" : 1, "nama" : "Melakukan 3 jenis pungutan " },
      { "id": 5, "nilai" : 0, "nama" : "Melakukan 4 jenis atau lebih pungutan " }
    ],
    "jawaban": 4
  },
  {
    "id": 5804,
    "bagian_id": 324,
    "nomor": 160,
    "nama": "Pengambilan keputusan dalam penetapan dana dari masyarakat sebagai biaya personal dilakukan dengan melibatkan berbagai pihak terkait. ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melibatkan penyelenggara pendidikan/yayasan, kepala sekolah/ madrasah, komite sekolah/madrasah, perwakilan guru, perwakilan tenaga kependidikan " },
      { "id": 2, "nilai" : 3, "nama" : "Melibatkan penyelenggara pendidikan/yayasan, kepala sekolah/ madrasah, komite sekolah/madrasah, dan perwakilan guru " },
      { "id": 3, "nilai" : 2, "nama" : "Melibatkan penyelenggara pendidikan/yayasan, kepala sekolah/ madrasah dan komite sekolah/madrasah " },
      { "id": 4, "nilai" : 1, "nama" : "Melibatkan penyelenggara pendidikan/yayasan dan kepala sekolah/madrasah " },
      { "id": 5, "nilai" : 0, "nama" : "Hanya melibatkan kepala sekolah/madrasah " }
    ],
    "jawaban": 4
  },
  {
    "id": 5805,
    "bagian_id": 324,
    "nomor": 161,
    "nama": "Pengelolaan dana dari masyarakat sebagai biaya personal dilakukan secara transparan, efisien, dan akuntabel sesuai RKA-S/M. ",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "91% - 100% dana dari masyarakat tercantum dalam RKA-S/M " },
      { "id": 2, "nilai" : 3, "nama" : "81% - 90% dana dari masyarakat tercantum dalam RKA-S/M" },
      { "id": 3, "nilai" : 2, "nama" : "71% - 80% dana dari masyarakat tercantum dalam RKA-S/M" },
      { "id": 4, "nilai" : 1, "nama" : "61% - 70% dana dari masyarakat tercantum dalam RKA-S/M " },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 61% dana dari masyarakat tercantum dalam RKA-S/M " }
    ],
    "jawaban": 4
  },
  {
    "id": 5806,
    "bagian_id": 324,
    "nomor": 162,
    "nama": "Sekolah/Madrasah dan/atau program keahlian memiliki pedoman pengelolaan keuangan sebagai dasar dalam penyusunan RKA-S/M. ",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki pedoman pengelolaan keuangan selama 4 tahun terakhir secara berturut-turut " },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki pedoman pengelolaan keuangan selama 3 tahun terakhir secara berturut-turut " },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki pedoman pengelolaan keuangan selama 2 tahun terakhir secara berturut-turut " },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki pedoman pengelolaan keuangan selama 1 tahun terakhir secara berturut-turut " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki pedoman pengelolaan keuangan " }
    ],
    "jawaban": 4
  },
  {
    "id": 5807,
    "bagian_id": 324,
    "nomor": 163,
    "nama": "Sekolah/Madrasah dan/atau program keahlian memiliki Buku Kas Umum (BKU). ",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki BKU yang diisi dengan benar selama 4 tahun terakhir " },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki BKU yang diisi dengan benar selama 3 tahun terakhir " },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki BKU yang diisi dengan benar selama 2 tahun terakhir " },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki BKU yang diisi dengan benar selama 1 tahun terakhir " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki BKU " }
    ],
    "jawaban": 4
  },
  {
    "id": 5808,
    "bagian_id": 324,
    "nomor": 164,
    "nama": "Sekolah/Madrasah dan/atau program keahlian membuat laporan pertanggungjawaban pengelolaan keuangan dan menyampaikannya kepada pemerintah atau yayasan. ",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Membuat laporan pertanggungjawaban pengelolaan keuangan dan menyampaikannya kepada pemerintah atau yayasan selama 4 tahun terakhir " },
      { "id": 2, "nilai" : 3, "nama" : "Membuat laporan pertanggungjawaban pengelolaan keuangan dan menyampaikannya kepada pemerintah atau yayasan selama 3 tahun terakhir " },
      { "id": 3, "nilai" : 2, "nama" : "Membuat laporan pertanggungjawaban pengelolaan keuangan dan menyampaikannya kepada pemerintah atau yayasan selama 2 tahun terakhir " },
      { "id": 4, "nilai" : 1, "nama" : "Membuat laporan pertanggungjawaban pengelolaan keuangan dan menyampaikannya kepada pemerintah atau yayasan selama 1 tahun terakhir " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak membuat laporan pertanggungjawaban pengelolaan keuangan " }
    ],
    "jawaban": 4
  },
  {
    "id": 5809,
    "bagian_id": 325,
    "nomor": 165,
    "nama": "Guru menginformasikan rancangan dan kriteria penilaian yang ada dalam silabus mata pelajaran kepada siswa pada semester yang berjalan. ",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "96% - 100% guru menginformasikan rancangan dan kriteria penilaian kepada siswa " },
      { "id": 2, "nilai" : 3, "nama" : "91% - 95% guru menginformasikan rancangan dan kriteria penilaian kepada siswa " },
      { "id": 3, "nilai" : 2, "nama" : "86% - 90% guru menginformasikan rancangan dan kriteria penilaian kepada siswa " },
      { "id": 4, "nilai" : 1, "nama" : "81% - 85% guru menginformasikan rancangan dan kriteria penilaian kepada siswa " },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 81% guru menginformasikan rancangan dan kriteria penilaian kepada siswa " }
    ],
    "jawaban": 4
  },
  {
    "id": 5810,
    "bagian_id": 325,
    "nomor": 166,
    "nama": "Teknik penilaian dalam silabus mata pelajaran produktif sesuai dengan indikator pencapaian kompetensi dasar (KD). ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "96% - 100% silabus mata pelajaran produktif menggunakan teknik penilaian sesuai dengan indikator pencapaian KD " },
      { "id": 2, "nilai" : 3, "nama" : "91% - 95% silabus mata pelajaran produktif menggunakan teknik penilaian sesuai dengan indikator pencapaian KD " },
      { "id": 3, "nilai" : 2, "nama" : "86% - 90% silabus mata pelajaran produktif menggunakan teknik penilaian sesuai dengan indikator pencapaian KD " },
      { "id": 4, "nilai" : 1, "nama" : "81% - 85% silabus mata pelajaran produktif menggunakan teknik penilaian sesuai dengan indikator pencapaian KD " },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 81% silabus mata pelajaran produktif menggunakan teknik penilaian sesuai dengan indikator pencapaian KD " }
    ],
    "jawaban": 4
  },
  {
    "id": 5811,
    "bagian_id": 325,
    "nomor": 167,
    "nama": "Guru mengembangkan instrumen dan pedoman penilaian sesuai dengan bentuk dan teknik penilaian. ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "96% - 100% guru mengembangkan instrumen dan pedoman penilaian sesuai dengan bentuk dan teknik penilaian " },
      { "id": 2, "nilai" : 3, "nama" : "91% - 95% guru mengembangkan instrumen dan pedoman penilaian sesuai dengan bentuk dan teknik penilaian " },
      { "id": 3, "nilai" : 2, "nama" : "86% - 90% guru mengembangkan instrumen dan pedoman penilaian sesuai dengan bentuk dan teknik penilaian " },
      { "id": 4, "nilai" : 1, "nama" : "81% - 85% guru mengembangkan instrumen dan pedoman penilaian sesuai dengan bentuk dan teknik penilaian " },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 81% guru mengembangkan instrumen dan pedoman penilaian sesuai dengan bentuk dan teknik penilaian " }
    ],
    "jawaban": 4
  },
  {
    "id": 5812,
    "bagian_id": 325,
    "nomor": 168,
    "nama": "Guru menggunakan teknik penilaian sesuai dengan karakteristik mata pelajaran. ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "96% - 100% guru menggunakan teknik penilaian sesuai dengan karakteristik mata pelajaran " },
      { "id": 2, "nilai" : 3, "nama" : "91% - 95% guru menggunakan teknik penilaian sesuai dengan karakteristik mata pelajaran " },
      { "id": 3, "nilai" : 2, "nama" : "76% - 80% guru menggunakan teknik penilaian sesuai dengan karakteristik mata pelajaran " },
      { "id": 4, "nilai" : 1, "nama" : "61% - 75% guru menggunakan teknik penilaian sesuai dengan karakteristik mata pelajaran " },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 61% guru menggunakan teknik penilaian sesuai dengan karakteristik mata pelajaran " }
    ],
    "jawaban": 4
  },
  {
    "id": 5813,
    "bagian_id": 325,
    "nomor": 169,
    "nama": "Guru mengolah hasil penilaian untuk mengetahui kemajuan hasil belajar dan kesulitan belajar siswa. ",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "91% - 100% guru mengolah hasil penilaian " },
      { "id": 2, "nilai" : 3, "nama" : "81% - 90% guru mengolah hasil penilaian " },
      { "id": 3, "nilai" : 2, "nama" : "71% - 80% guru mengolah hasil penilaian " },
      { "id": 4, "nilai" : 1, "nama" : "61% - 70% guru mengolah hasil penilaian " },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 61% guru mengolah hasil penilaian " }
    ],
    "jawaban": 4
  },
  {
    "id": 5814,
    "bagian_id": 325,
    "nomor": 170,
    "nama": "Guru mengembalikan hasil pemeriksaan pekerjaan siswa disertai balikan/komentar yang mendidik. ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "96% - 100% guru mengembalikan hasil pemeriksaan pekerjaan siswa disertai balikan/komentar " },
      { "id": 2, "nilai" : 3, "nama" : "91% - 95% guru mengembalikan hasil pemeriksaan pekerjaan siswa disertai balikan/komentar " },
      { "id": 3, "nilai" : 2, "nama" : "86% - 90% guru mengembalikan hasil pemeriksaan pekerjaan siswa disertai balikan/komentar " },
      { "id": 4, "nilai" : 1, "nama" : "81% - 85% guru mengembalikan hasil pemeriksaan pekerjaan siswa disertai balikan/komentar " },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 81% guru mengembalikan hasil pemeriksaan pekerjaan siswa disertai balikan/komentar " }
    ],
    "jawaban": 4
  },
  {
    "id": 5815,
    "bagian_id": 325,
    "nomor": 171,
    "nama": "Guru memanfaatkan hasil penilaian untuk perbaikan pembelajaran. ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "96% - 100% guru memanfaatkan hasil penilaian " },
      { "id": 2, "nilai" : 3, "nama" : "91% - 95% guru memanfaatkan hasil penilaian " },
      { "id": 3, "nilai" : 2, "nama" : "86% - 90% guru memanfaatkan hasil penilaian " },
      { "id": 4, "nilai" : 1, "nama" : "81% - 85% guru memanfaatkan hasil penilaian " },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 81% guru memanfaatkan hasil penilaian " }
    ],
    "jawaban": 4
  },
  {
    "id": 5816,
    "bagian_id": 325,
    "nomor": 172,
    "nama": "Guru melaporkan hasil penilaian mata pelajaran pada setiap akhir semester kepada ketua program keahlian dalam bentuk laporan prestasi belajar siswa. ",
    "bobot": 2,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Seluruh guru melaporkan hasil penilaian prestasi belajar siswa " },
      { "id": 2, "nilai" : 3, "nama" : "95% - 99% guru melaporkan hasil penilaian prestasi belajar siswa " },
      { "id": 3, "nilai" : 2, "nama" : "90% - 94% guru melaporkan hasil penilaian prestasi belajar siswa " },
      { "id": 4, "nilai" : 1, "nama" : "85% - 89% guru melaporkan hasil penilaian prestasi belajar siswa " },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 85% guru melaporkan hasil penilaian prestasi belajar siswa " }
    ],
    "jawaban": 4
  },
  {
    "id": 5817,
    "bagian_id": 325,
    "nomor": 173,
    "nama": "Guru menilai sikap dan kepribadian siswa sebagai informasi untuk menentukan nilai akhir semester. ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "96% - 100% guru menilai sikap dan kepribadian siswa " },
      { "id": 2, "nilai" : 3, "nama" : "91% - 95% guru menilai sikap dan kepribadian siswa " },
      { "id": 3, "nilai" : 2, "nama" : "86% - 90% guru menilai sikap dan kepribadian siswa " },
      { "id": 4, "nilai" : 1, "nama" : "81% - 85% guru menilai sikap dan kepribadian siswa " },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 81% guru menilai sikap dan kepribadian siswa " }
    ],
    "jawaban": 4
  },
  {
    "id": 5818,
    "bagian_id": 325,
    "nomor": 174,
    "nama": "Guru mengkomunikasikan hasil penilaian kepribadian siswa kepada guru pendidikan kewarganegaraan sebagai informasi untuk menentukan nilai akhir semester. ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "96% - 100% guru mengkomunikasikan hasil penilaian kepribadian siswa kepada guru pendidikan kewarganegaraan " },
      { "id": 2, "nilai" : 3, "nama" : "91% - 95% guru mengkomunikasikan hasil penilaian kepribadian siswa kepada guru pendidikan kewarganegaraan " },
      { "id": 3, "nilai" : 2, "nama" : "86% - 90% guru mengkomunikasikan hasil penilaian kepribadian siswa kepada guru pendidikan kewarganegaraan " },
      { "id": 4, "nilai" : 1, "nama" : "81% - 85% guru mengkomunikasikan hasil penilaian kepribadian siswa kepada guru pendidikan kewarganegaraan " },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 81% guru mengkomunikasikan hasil penilaian kepribadian siswa kepada guru pendidikan kewarganegaraan " }
    ],
    "jawaban": 4
  },
  {
    "id": 5819,
    "bagian_id": 325,
    "nomor": 175,
    "nama": "Ketua program keahlian mengkoordinasikan pelaksanaan: (1) ulangan tengah semester, (2) ulangan akhir semester, dan (3) ulangan kenaikan kelas. ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Ketua program keahlian mengkoordinasikan pelaksanaan ulangan (1), (2), dan (3) " },
      { "id": 2, "nilai" : 3, "nama" : "Ketua program keahlian mengkoordinasikan pelaksanaan (2) dan (3) " },
      { "id": 3, "nilai" : 2, "nama" : "Ketua program keahlian mengkoordinasikan pelaksanaan ulangan (1) dan (3) " },
      { "id": 4, "nilai" : 1, "nama" : "Ketua program keahlian hanya mengkoordinasikan pelaksanaan ulangan (3) " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak pernah mengkoordinasikan pelaksanaan ulangan " }
    ],
    "jawaban": 4
  },
  {
    "id": 5820,
    "bagian_id": 325,
    "nomor": 176,
    "nama": "Sekolah/madrasah dan program keahlian menentukan kriteria kenaikan kelas melalui rapat. ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Menentukan kriteria melalui rapat dewan guru " },
      { "id": 2, "nilai" : 3, "nama" : "Menentukan kriteria melalui rapat dengan perwakilan guru-guru mata pelajaran" },
      { "id": 3, "nilai" : 2, "nama" : "Menentukan kriteria melalui rapat dengan wali kelas saja " },
      { "id": 4, "nilai" : 1, "nama" : "Menentukan kriteria melalui rapat pimpinan sekolah " },
      { "id": 5, "nilai" : 0, "nama" : "Hanya ditetapkan oleh kepala sekolah/madrasah " }
    ],
    "jawaban": 4
  },
  {
    "id": 5821,
    "bagian_id": 325,
    "nomor": 177,
    "nama": "Sekolah/Madrasah menentukan nilai akhir kelompok mata pelajaran agama dan akhlak; kewarganegaraan dan kepribadian; estetika; serta jasmani, olahraga, dan kesehatan. ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Menentukan nilai akhir melalui rapat dewan guru dengan mempertimbangkan hasil penilaian oleh guru " },
      { "id": 2, "nilai" : 3, "nama" : "Menentukan nilai akhir melalui rapat dewan guru tanpa mempertimbangkan hasil penilaian oleh guru " },
      { "id": 3, "nilai" : 2, "nama" : "Menentukan nilai akhir tanpa melalui rapat dewan guru tetapi mempertimbangkan hasil penilaian oleh guru " },
      { "id": 4, "nilai" : 1, "nama" : "Menentukan nilai akhir oleh wali kelas " },
      { "id": 5, "nilai" : 0, "nama" : "Hanya ditetapkan oleh kepala sekolah/madrasah " }
    ],
    "jawaban": 4
  },
  {
    "id": 5822,
    "bagian_id": 325,
    "nomor": 178,
    "nama": "Sekolah/madrasah menyelenggarakan ujian semester sesuai Prosedur Opersional Standar (POS). ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki POS dan dilaksanakan sesuai POS " },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki POS tetapi tidak dilaksanakan sesuai POS " },
      { "id": 3, "nilai" : 2, "nama" : "Menyelenggarakan ujian tetapi tidak memiliki POS " },
      { "id": 4, "nilai" : 1, "nama" : "Menyelenggarakan ujian hanya oleh masing-masing guru " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak menyelenggarakan ujian " }
    ],
    "jawaban": 4
  },
  {
    "id": 5823,
    "bagian_id": 325,
    "nomor": 179,
    "nama": "Program keahlian menyampaikan hasil penilaian dan penjelasan setiap akhir semester kepada orang tua/wali siswa. ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Menyampaikan hasil penilaian dan penjelasan kepada orangtua/wali siswa, dan siswa yang bersangkutan " },
      { "id": 2, "nilai" : 3, "nama" : "Menyampaikan hasil penilaian dan penjelasan kepada orangtua/wali siswa tanpa siswa yang bersangkutan " },
      { "id": 3, "nilai" : 2, "nama" : "Menyampaikan hasil penilaian dan penjelasan kepada siswa yang bersangkutan " },
      { "id": 4, "nilai" : 1, "nama" : "Menyampaikan hasil penilaian tanpa penjelasan kepada orangtua/wali siswa " },
      { "id": 5, "nilai" : 0, "nama" : "Menyampaikan hasil penilaian tanpa penjelasan kepada siswa bersangkutan " }
    ],
    "jawaban": 4
  },
  {
    "id": 5824,
    "bagian_id": 325,
    "nomor": 180,
    "nama": "Sekolah/madrasah melaporkan pencapaian hasil belajar siswa kepada Dinas Pendidikan Provinsi atau Kanwil Kemenag. ",
    "bobot": 2,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melaporkan pencapaian hasil belajar siswa kurang dari 20 hari setelah akhir semester " },
      { "id": 2, "nilai" : 3, "nama" : "Melaporkan pencapaian hasil belajar siswa antara 21 _ 40 hari setelah akhir semester " },
      { "id": 3, "nilai" : 2, "nama" : "Melaporkan pencapaian hasil belajar siswa antara 41 _ 60 hari setelah akhir semester " },
      { "id": 4, "nilai" : 1, "nama" : "Melaporkan pencapaian hasil belajar siswa antara 61 _ 80 hari setelah akhir semester " },
      { "id": 5, "nilai" : 0, "nama" : "Melaporkan pencapaian hasil belajar siswa lebih dari 80 hari " }
    ],
    "jawaban": 4
  },
  {
    "id": 5825,
    "bagian_id": 325,
    "nomor": 181,
    "nama": "Sekolah/madrasah dan program keahlian menentukan kelulusan sesuai pedoman ketentuan kelulusan siswa dari satuan pendidikan ",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Menentukan kelulusan siswa melalui rapat dewan guru " },
      { "id": 2, "nilai" : 3, "nama" : "Menentukan kelulusan siswa melalui rapat dengan perwakilan guru- guru mata pelajaran" },
      { "id": 3, "nilai" : 2, "nama" : "Menentukan kelulusan siswa melalui rapat dengan wali kelas saja " },
      { "id": 4, "nilai" : 1, "nama" : "Menentukan kelulusan siswa melalui rapat pimpinan sekolah/madrasah " },
      { "id": 5, "nilai" : 0, "nama" : "Hanya ditetapkan oleh kepala sekolah/madrasah " }
    ],
    "jawaban": 4
  },
  {
    "id": 5826,
    "bagian_id": 325,
    "nomor": 182,
    "nama": "Sekolah/madrasah menyerahkan Surat Keterangan Hasil Ujian Nasional (SKHUN) setiap siswa yang mengikuti Ujian Nasional (UN). ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Menyerahkan SKHUN kurang dari 7 hari setelah diterima dari Dinas Pendidikan/Kanwil Kemenag Provinsi " },
      { "id": 2, "nilai" : 3, "nama" : "Menyerahkan SKHUN antara 8 - 14 hari setelah diterima dari Dinas Pendidikan/Kanwil Kemenag Provinsi " },
      { "id": 3, "nilai" : 2, "nama" : "Menyerahkan SKHUN antara 15 - 21 hari setelah diterima dari Dinas Pendidikan/Kanwil Kemenag Provinsi " },
      { "id": 4, "nilai" : 1, "nama" : "Menyerahkan SKHUN antara 22 - 35 hari setelah diterima dari Dinas Pendidikan/Kanwil Kemenag Provinsi " },
      { "id": 5, "nilai" : 0, "nama" : "Menyerahkan SKHUN lebih dari 35 hari setelah diterima dari Dinas Pendidikan/Kanwil Kemenag Provinsi " }
    ],
    "jawaban": 4
  },
  {
    "id": 5827,
    "bagian_id": 325,
    "nomor": 183,
    "nama": "Sekolah/madrasah menerbitkan dan menyerahkan ijazah kepada setiap siswa yang telah lulus. ",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Kurang dari 7 hari setelah blangko ijazah diterima dari Dinas Pendidikan/Kandepag " },
      { "id": 2, "nilai" : 3, "nama" : "Antara 8 _ 14 hari setelah blangko ijazah diterima dari Dinas Pendidikan/Kandepag " },
      { "id": 3, "nilai" : 2, "nama" : "Antara 15 _ 21 hari setelah blangko ijazah diterima dari Dinas Pendidikan/Kandepag. " },
      { "id": 4, "nilai" : 1, "nama" : "Antara 22 _ 28 hari setelah blangko ijazah diterima dari Dinas Pendidikan/Kandepag " },
      { "id": 5, "nilai" : 0, "nama" : "Lebih dari 28 hari setelah blangko ijazah diterima dari Dinas Pendidikan/Kandepag " }
    ],
    "jawaban": 4
  },
  {
    "id": 5828,
    "bagian_id": 325,
    "nomor": 184,
    "nama": "Sekolah/madrasah dan/atau program keahlian menggunakan hasil Ujian Nasional (UN) SMP/MTs/ Ujian Nasional Pendidikan Kesetaraan (UNPK) Program Paket B sebagai bahan pertimbangan penerimaan siswa baru. ",
    "bobot": 2,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Menggunakan hasil UN SMP/MTs/Paket B dan seleksi masuk secara transparan sebagai bahan pertimbangan penerimaan siswa baru " },
      { "id": 2, "nilai" : 3, "nama" : "Menggunakan hasil UN SMP/MTs/Paket B secara transparan sebagai bahan pertimbangan penerimaan siswa baru " },
      { "id": 3, "nilai" : 2, "nama" : "Menggunakan hasil UN SMP/MTs/Paket B dan seleksi masuk secara tidak transparan sebagai bahan pertimbangan penerimaan siswa baru " },
      { "id": 4, "nilai" : 1, "nama" : "Menggunakan hasil UN SMP/MTs/Paket B secara tidak transparan sebagai bahan pertimbangan penerimaan siswa baru " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak menggunakan UN SMP/MTs/Paket B sebagai bahan pertimbangan penerimaan siswa baru " }
    ],
    "jawaban": 4
  },
  {
    "id": 5829,
    "bagian_id": 325,
    "nomor": 185,
    "nama": "Program keahlian melaksanakan uji kompetensi siswa sesuai kompetensi keahliannya melibatkan pihak lain yang terkait. ",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melibatkan pihak Lembaga Sertifikasi Profesi (LSP) atau asosiasi profesi yang sesuai dengan kompetensi keahlian " },
      { "id": 2, "nilai" : 3, "nama" : "Melibatkan pihak perusahaan atau industri yang sesuai dengan kompetensi keahlian " },
      { "id": 3, "nilai" : 2, "nama" : "Melibatkan guru produktif dari satuan pendidikan lain yang sesuai dengan kompetensi keahlian " },
      { "id": 4, "nilai" : 1, "nama" : "Melibatkan guru produktif dalam satuan pendidikan sendiri " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melaksanakan uji kompetensi " }
    ],
    "jawaban": 4
  },
  {
    "id": 5971,
    "bagian_id": 333,
    "nomor": 142,
    "nama": "Guru mengembalikan hasil pemeriksaan pekerjaan siswa disertai balikan/komentar yang mendidik.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "76% - 100% guru mengembalikan hasil pekerjaan siswa." },
      { "id": 2, "nilai" : 3, "nama" : "51% - 75% guru mengembalikan hasil pekerjaan siswa." },
      { "id": 3, "nilai" : 2, "nama" : "26% - 50% guru mengembalikan hasil pekerjaan siswa." },
      { "id": 4, "nilai" : 1, "nama" : "1% - 25% guru mengembalikan hasil pekerjaan siswa." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak ada guru yang mengembalikan hasil pekerjaan siswa" }
    ],
    "jawaban": 4
  },
  {
    "id": 5921,
    "bagian_id": 331,
    "nomor": 92,
    "nama": "Sekolah telah merumuskan, menetapkan, dan mensosialisasikan visi lembaga.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Merumuskan, menetapkan, dan mensosialisasikan secara terus menerus visi dalam berbagai kesempatan." },
      { "id": 2, "nilai" : 3, "nama" : "Merumuskan, menetapkan, dan sering mensosialisasikan visi lembaga." },
      { "id": 3, "nilai" : 2, "nama" : "Merumuskan, menetapkan, dan kadang-kadang mensosialisasikan visi lembaga." },
      { "id": 4, "nilai" : 1, "nama" : "Merumuskan, menetapkan, dan tidak pernah mensosialisasikan visi lembaga." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki visi lembaga." }
    ],
    "jawaban": 4
  },
  {
    "id": 5941,
    "bagian_id": 332,
    "nomor": 112,
    "nama": "Sekolah memiliki laporan tahunan yang berisi catatan tentang nilai aset sarana dan prasarana secara menyeluruh.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki laporan tahunan 4 tahun terakhir." },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki laporan tahunan 3 tahun terakhir." },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki laporan tahunan 2 tahun terakhir." },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki laporan tahunan 1 tahun terakhir." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki laporan tahunan." }
    ],
    "jawaban": 4
  },
  {
    "id": 5977,
    "bagian_id": 333,
    "nomor": 148,
    "nama": "Sekolah menetapkan kriteria ketuntasan minimal (KKM) setiap mata pelajaran.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "4 atau lebih mata pelajaran dengan KKM 75,00 atau lebih." },
      { "id": 2, "nilai" : 3, "nama" : "3 mata pelajaran dengan KKM 75,00 atau lebih." },
      { "id": 3, "nilai" : 2, "nama" : "2 mata pelajaran dengan KKM 75,00 atau lebih." },
      { "id": 4, "nilai" : 1, "nama" : "1 mata pelajaran dengan KKM 75,00 atau lebih." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak ada mata pelajaran dengan KKM 75,00 atau lebih." }
    ],
    "jawaban": 4
  },
  {
    "id": 5987,
    "bagian_id": 333,
    "nomor": 158,
    "nama": "Sekolah menentukan kelulusan siswa melalui rapat dewan guru sesuai dengan kriteria yang berlaku.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Menggunakan 3 kriteria melalui rapat dewan guru" },
      { "id": 2, "nilai" : 3, "nama" : "Menggunakan 2 kriteria melalui rapat dewan guru" },
      { "id": 3, "nilai" : 2, "nama" : "Menggunakan 1 kriteria melalui rapat dewan guru" },
      { "id": 4, "nilai" : 1, "nama" : "Menggunakan kriteria lain melalui rapat dewan guru" },
      { "id": 5, "nilai" : 0, "nama" : "Tanpa melalui rapat dewan guru" }
    ],
    "jawaban": 4
  },
  {
    "id": 5986,
    "bagian_id": 333,
    "nomor": 157,
    "nama": "Sekolah memiliki prestasi hasil ujian akhir yang ditunjukkan dengan persentase tingkat kelulusan tahun terakhir.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Tingkat kelulusan pada tahun terakhir 91% - 100%." },
      { "id": 2, "nilai" : 3, "nama" : "Tingkat kelulusan pada tahun terakhir 81% - 90%" },
      { "id": 3, "nilai" : 2, "nama" : "Tingkat kelulusan pada tahun terakhir 71% - 80%." },
      { "id": 4, "nilai" : 1, "nama" : "Tingkat kelulusan pada tahun terakhir 61% - 70% ." },
      { "id": 5, "nilai" : 0, "nama" : "Tingkat kelulusan pada tahun terakhir kurang dari 61%." }
    ],
    "jawaban": 4
  },
  {
    "id": 5985,
    "bagian_id": 333,
    "nomor": 156,
    "nama": "Sekolah menyerahkan ijazah kepada setiap siswa yang telah lulus.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Diserahkan 1 minggu setelah blangko ijazah diterima sekolah." },
      { "id": 2, "nilai" : 3, "nama" : "Diserahkan 2 minggu setelah blangko ijazah diterima sekolah." },
      { "id": 3, "nilai" : 2, "nama" : "Diserahkan 3 minggu setelah blangko ijazah diterima sekolah." },
      { "id": 4, "nilai" : 1, "nama" : "Diserahkan 4 minggu setelah blangko ijazah diterima sekolah." },
      { "id": 5, "nilai" : 0, "nama" : "Diserahkan lebih dari 4 minggu setelah blangko ijazah diterima sekolah." }
    ],
    "jawaban": 4
  },
  {
    "id": 5984,
    "bagian_id": 333,
    "nomor": 155,
    "nama": "Sekolah menyerahkan surat keterangan hasil ujian akhir setiap siswa yang mengikuti ujian nasional.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Diserahkan 1 minggu setelah pengumuman hasil ujian." },
      { "id": 2, "nilai" : 3, "nama" : "Diserahkan 2 minggu setelah pengumuman hasil ujian." },
      { "id": 3, "nilai" : 2, "nama" : "Diserahkan 3 minggu setelah pengumuman hasil ujian." },
      { "id": 4, "nilai" : 1, "nama" : "Diserahkan 4 minggu setelah pengumuman hasil ujian." },
      { "id": 5, "nilai" : 0, "nama" : "Diserahkan lebih dari 4 minggu setelah pengumuman hasil ujian." }
    ],
    "jawaban": 4
  },
  {
    "id": 5983,
    "bagian_id": 333,
    "nomor": 154,
    "nama": "Sekolah menentukan kelulusan siswa sesuai kriteria kelulusan.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melalui rapat dewan guru." },
      { "id": 2, "nilai" : 3, "nama" : "Melalui rapat dengan perwakilan guru-guru mata pelajaran." },
      { "id": 3, "nilai" : 2, "nama" : "Melalui rapat dengan wali kelas saja." },
      { "id": 4, "nilai" : 1, "nama" : "Melalui rapat kepala sekolah dan wakil kepala sekolah." },
      { "id": 5, "nilai" : 0, "nama" : "Hanya ditetapkan oleh kepala sekolah." }
    ],
    "jawaban": 4
  },
  {
    "id": 5982,
    "bagian_id": 333,
    "nomor": 153,
    "nama": "Sekolah melaporkan pencapaian hasil belajar tingkat satuan pendidikan kepada Dinas Pendidikan atau instansi yang berwenang.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Dilaporkan 1 bulan setelah akhir semester." },
      { "id": 2, "nilai" : 3, "nama" : "Dilaporkan 2 bulan setelah akhir semester." },
      { "id": 3, "nilai" : 2, "nama" : "Dilaporkan 3 bulan setelah akhir semester." },
      { "id": 4, "nilai" : 1, "nama" : "Dilaporkan 4 bulan setelah akhir semester." },
      { "id": 5, "nilai" : 0, "nama" : "Dilaporkan lebih dari 4 bulan setelah akhir semester." }
    ],
    "jawaban": 4
  },
  {
    "id": 5981,
    "bagian_id": 333,
    "nomor": 152,
    "nama": "Sekolah menyampaikan hasil penilaian setiap akhir semester kepada orangtua/wali siswa dalam bentuk buku laporan hasil belajar siswa.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Diawali dengan penjelasan umum kepala sekolah dilanjutkan penjelasan wali kelas dengan masing-masing orangtua/wali siswa dan siswa yang bersangkutan." },
      { "id": 2, "nilai" : 3, "nama" : "Diawali dengan penjelasan umum kepala sekolah dilanjutkan penjelasan wali kelas dengan masing-masing orang tua/wali siswa tanpa siswa yang bersangkutan." },
      { "id": 3, "nilai" : 2, "nama" : "Diawali dengan penjelasan umum kepala sekolah tetapi langsung dari wali kelas ke masing-masing orangtua/wali siswa dengan siswa yang bersangkutan." },
      { "id": 4, "nilai" : 1, "nama" : "Tanpa diawali dengan penjelasan umum kepala sekolah tetapi langsung dari wali kelas ke masing-masing orangtua/wali siswa tanpa siswa yang bersangkutan." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melaporkan hasil penilaian langsung kepada siswa." }
    ],
    "jawaban": 4
  },
  {
    "id": 5980,
    "bagian_id": 333,
    "nomor": 151,
    "nama": "Sekolah menentukan nilai akhir kelompok mata pelajaran agama dan akhlak mulia, kewarganegaraan dan kepribadian, estetika, serta pendidikan jasmani, olahraga dan kesehatan.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melalui rapat dewan guru dengan mempertimbangkan hasil penilaian guru." },
      { "id": 2, "nilai" : 3, "nama" : "Melalui rapat dewan guru tanpa mempertimbangkan hasil penilaian guru." },
      { "id": 3, "nilai" : 2, "nama" : "Tanpa melalui rapat dewan guru tetapi mempertimbangkan hasil penilaian guru." },
      { "id": 4, "nilai" : 1, "nama" : "Ditentukan bersama wali kelas saja." },
      { "id": 5, "nilai" : 0, "nama" : "Hanya ditetapkan oleh kepala sekolah." }
    ],
    "jawaban": 4
  },
  {
    "id": 5979,
    "bagian_id": 333,
    "nomor": 150,
    "nama": "Sekolah menentukan kriteria kenaikan kelas melalui rapat.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melalui rapat dewan guru." },
      { "id": 2, "nilai" : 3, "nama" : "Melalui rapat dengan perwakilan guru-guru mata pelajaran." },
      { "id": 3, "nilai" : 2, "nama" : "Melalui rapat dengan wali kelas saja." },
      { "id": 4, "nilai" : 1, "nama" : "Melalui rapat kepala sekolah dan wakil kepala sekolah." },
      { "id": 5, "nilai" : 0, "nama" : "Hanya ditetapkan oleh kepala sekolah." }
    ],
    "jawaban": 4
  },
  {
    "id": 5978,
    "bagian_id": 333,
    "nomor": 149,
    "nama": "Sekolah mengkoordinasikan ulangan tengah semester, ulangan akhir semester, dan ulangan kenaikan kelas.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Mengkoordinasikan ulangan tengah semester, ulangan akhir semester, dan ulangan kenaikan kelas." },
      { "id": 2, "nilai" : 3, "nama" : "Mengkoordinasikan ulangan akhir semester dan ulangan kenaikan kelas." },
      { "id": 3, "nilai" : 2, "nama" : "Mengkoordinasikan ulangan tengah semester dan ulangan kenaikan kelas." },
      { "id": 4, "nilai" : 1, "nama" : "Hanya mengkoordinasikan ulangan kenaikan kelas." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak pernah mengkoordinasikan ulangan-ulangan." }
    ],
    "jawaban": 4
  },
  {
    "id": 5976,
    "bagian_id": 333,
    "nomor": 147,
    "nama": "Sekolah menentukan KKM setiap mata pelajaran melalui rapat dewan guru dengan memperhatikan unsur: (1) karakteristik dan kemampuan siswa, (2) karakteristik mata pelajaran, dan (3) kondisi sekolah.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memperhatikan unsur karakteristik dan kemampuan siswa, karakteristik mata pelajaran, serta kondisi sekolah melalui rapat dewan guru." },
      { "id": 2, "nilai" : 3, "nama" : "Memperhatikan unsur karakteristik dan kemampuan siswa serta karakteristik mata pelajaran melalui rapat dewan guru." },
      { "id": 3, "nilai" : 2, "nama" : "Memperhatikan unsur karakteristik dan kemampuan siswa serta karakteristik mata pelajaran tidak melalui rapat dewan guru." },
      { "id": 4, "nilai" : 1, "nama" : "Memperhatikan unsur karakteristik dan kemampuan siswa tidak melalui rapat dewan guru." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak ada mata pelajaran yang ditentukan KKM-nya melalui rapat dewan guru." }
    ],
    "jawaban": 4
  },
  {
    "id": 5975,
    "bagian_id": 333,
    "nomor": 146,
    "nama": "Guru melaporkan hasil penilaian kepribadian siswa kepada guru pendidikan kewarganegaraan atau wali kelas sebagai informasi untuk menentukan nilai akhir semester.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "86% - 100% guru melaporkan hasil penilaian kepribadian siswa." },
      { "id": 2, "nilai" : 3, "nama" : "71% - 85% guru melaporkan hasil penilaian kepribadian siswa." },
      { "id": 3, "nilai" : 2, "nama" : "56% - 70% guru melaporkan hasil penilaian kepribadian siswa." },
      { "id": 4, "nilai" : 1, "nama" : "41% - 55% guru melaporkan hasil penilaian kepribadian siswa." },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 41% guru melaporkan hasil penilaian kepribadian siswa." }
    ],
    "jawaban": 4
  },
  {
    "id": 5974,
    "bagian_id": 333,
    "nomor": 145,
    "nama": "Guru melaporkan hasil penilaian akhlak siswa kepada guru pendidikan agama atau wali kelas sebagai informasi untuk menentukan nilai akhir semester.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "86% - 100% guru melaporkan hasil penilaian akhlak siswa." },
      { "id": 2, "nilai" : 3, "nama" : "71% - 85% guru melaporkan hasil penilaian akhlak siswa." },
      { "id": 3, "nilai" : 2, "nama" : "56% - 70% guru melaporkan hasil penilaian akhlak siswa." },
      { "id": 4, "nilai" : 1, "nama" : "41% - 55% guru melaporkan hasil penilaian akhlak siswa." },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 41% guru melaporkan hasil penilaian akhlak siswa." }
    ],
    "jawaban": 4
  },
  {
    "id": 5959,
    "bagian_id": 332,
    "nomor": 130,
    "nama": "Sekolah memberi bantuan untuk siswa kurang mampu secara ekonomi.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Membantu 91% - 100% siswa kurang mampu." },
      { "id": 2, "nilai" : 3, "nama" : "Membantu 81% - 90% siswa kurang mampu." },
      { "id": 3, "nilai" : 2, "nama" : "Membantu 71% - 80% siswa kurang mampu." },
      { "id": 4, "nilai" : 1, "nama" : "Membantu 61% - 70% siswa kurang mampu." },
      { "id": 5, "nilai" : 0, "nama" : "Membantu kurang dari 61% siswa kurang mampu." }
    ],
    "jawaban": 4
  },
  {
    "id": 5973,
    "bagian_id": 333,
    "nomor": 144,
    "nama": "Guru melaporkan hasil penilaian mata pelajaran pada setiap akhir semester kepada kepala sekolah dalam bentuk laporan prestasi belajar siswa.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "76% - 100% guru melaporkan hasil penilaian." },
      { "id": 2, "nilai" : 3, "nama" : "51% - 75% guru melaporkan hasil penilaian." },
      { "id": 3, "nilai" : 2, "nama" : "26% - 50% guru melaporkan hasil penilaian." },
      { "id": 4, "nilai" : 1, "nama" : "1% - 25% guru melaporkan hasil penilaian." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak ada guru yang melaporkan hasil penilaian." }
    ],
    "jawaban": 4
  },
  {
    "id": 5972,
    "bagian_id": 333,
    "nomor": 143,
    "nama": "Guru memanfaatkan hasil penilaian untuk perbaikan pembelajaran.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "76% - 100% guru memanfaatkan hasil penilaian." },
      { "id": 2, "nilai" : 3, "nama" : "51% - 75% guru memanfaatkan hasil penilaian." },
      { "id": 3, "nilai" : 2, "nama" : "26% - 50% guru memanfaatkan hasil penilaian." },
      { "id": 4, "nilai" : 1, "nama" : "1% - 25% guru memanfaatkan hasil penilaian." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak ada guru yang memanfaatkan hasil penilaian." }
    ],
    "jawaban": 4
  },
  {
    "id": 5830,
    "bagian_id": 326,
    "nomor": 1,
    "nama": "Sekolah melaksanakan Kurikulum Tingkat Satuan Pendidikan (KTSP). ",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melaksanakan kurikulum berdasarkan 9 muatan KTSP." },
      { "id": 2, "nilai" : 3, "nama" : "Melaksanakan kurikulum berdasarkan 8 muatan KTSP." },
      { "id": 3, "nilai" : 2, "nama" : "Melaksanakan kurikulum berdasarkan 7 muatan KTSP." },
      { "id": 4, "nilai" : 1, "nama" : "Melaksanakan kurikulum berdasarkan 6 muatan KTSP." },
      { "id": 5, "nilai" : 0, "nama" : "Melaksanakan kurikulum berdasarkan 5 atau kurang muatan KTSP. " }
    ],
    "jawaban": 4
  },
  {
    "id": 5831,
    "bagian_id": 326,
    "nomor": 2,
    "nama": "Sekolah mengembangkan kurikulum bersama-sama Tim Pengembang Kurikulum berpedoman pada panduan penyusunan kurikulum yang disusun oleh BSNP. ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Bersama seluruh guru, konselor, kepala sekolah, narasumber, komite sekolah atau penyelenggara pendidikan. " },
      { "id": 2, "nilai" : 3, "nama" : "Bersama guru, konselor, kepala sekolah, dan narasumber. " },
      { "id": 3, "nilai" : 2, "nama" : "Bersama guru, konselor, dan kepala sekolah." },
      { "id": 4, "nilai" : 1, "nama" : "Bersama guru dan konselor." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melakukan pengembangan kurikulum. " }
    ],
    "jawaban": 4
  },
  {
    "id": 5832,
    "bagian_id": 326,
    "nomor": 3,
    "nama": "Sekolah mengembangkan kurikulum sesuai prinsip pengembangan KTSP. ",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memenuhi 7 prinsip pengembangan KTSP." },
      { "id": 2, "nilai" : 3, "nama" : "Memenuhi 5 - 6 prinsip pengembangan KTSP. " },
      { "id": 3, "nilai" : 2, "nama" : "Memenuhi 3 - 4 prinsip pengembangan KTSP. " },
      { "id": 4, "nilai" : 1, "nama" : "Memenuhi 1 - 2 prinsip pengembangan KTSP. " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak mengembangkan KTSP. " }
    ],
    "jawaban": 4
  },
  {
    "id": 5833,
    "bagian_id": 326,
    "nomor": 4,
    "nama": "Sekolah melaksanakan kurikulum berdasarkan prinsip perbaikan layanan pembelajaran, pengayaan layanan pembelajaran, pendayagunaan kondisi alam, serta pendayagunaan kondisi sosial dan budaya. ",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Berdasarkan prinsip perbaikan layanan pembelajaran, pengayaan layanan pembelajaran, pendayagunaan kondisi alam, serta pendayagunaan kondisi sosial dan budaya. " },
      { "id": 2, "nilai" : 3, "nama" : "Berdasarkan prinsip perbaikan layanan pembelajaran, pengayaan layanan pembelajaran, dan pendayagunaan kondisi alam. " },
      { "id": 3, "nilai" : 2, "nama" : "Berdasarkan prinsip perbaikan layanan pembelajaran dan pengayaan layanan pembelajaran. " },
      { "id": 4, "nilai" : 1, "nama" : "Berdasarkan prinsip perbaikan layanan pembelajaran. " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak berdasarkan prinsip pelaksanaan kurikulum. " }
    ],
    "jawaban": 4
  },
  {
    "id": 5834,
    "bagian_id": 326,
    "nomor": 5,
    "nama": "Sekolah melaksanakan kurikulum pendidikan khusus sesuai ketentuan. ",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melaksanakan 8 atau lebih mata pelajaran. " },
      { "id": 2, "nilai" : 3, "nama" : "Melaksanakan 7 mata pelajaran." },
      { "id": 3, "nilai" : 2, "nama" : "Melaksanakan 6 mata pelajaran." },
      { "id": 4, "nilai" : 1, "nama" : "Melaksanakan 5 mata pelajaran. " },
      { "id": 5, "nilai" : 0, "nama" : "Melaksanakan 4 atau kurang mata pelajaran. " }
    ],
    "jawaban": 4
  },
  {
    "id": 5835,
    "bagian_id": 326,
    "nomor": 6,
    "nama": "Sekolah menyusun kurikulum muatan lokal dengan melibatkan beberapa pihak. ",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melibatkan kepala sekolah, guru, komite sekolah atau penyelenggara pendidikan, dinas pendidikan, dan instansi terkait di daerah. " },
      { "id": 2, "nilai" : 3, "nama" : "Melibatkan kepala sekolah, guru, komite sekolah atau penyelenggara pendidikan, dan dinas pendidikan. " },
      { "id": 3, "nilai" : 2, "nama" : "Melibatkan kepala sekolah, guru dan komite sekolah atau penyelenggara pendidikan. " },
      { "id": 4, "nilai" : 1, "nama" : "Hanya melibatkan kepala sekolah dan guru. " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak menyusun kurikulum muatan lokal. " }
    ],
    "jawaban": 4
  },
  {
    "id": 5836,
    "bagian_id": 326,
    "nomor": 7,
    "nama": "Sekolah melaksanakan program khusus sesuai kebutuhan siswa. ",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melaksanakan program khusus sesuai kebutuhan siswa, minimal 2 jam/minggu. " },
      { "id": 2, "nilai" : 3, "nama" : "Melaksanakan program khusus sesuai kebutuhan siswa, kurang dari 2 jam/minggu. " },
      { "id": 3, "nilai" : 2, "nama" : "Melaksanakan program khusus yang kurang sesuai kebutuhan siswa dengan alokasi waktu 2 jam/minggu. " },
      { "id": 4, "nilai" : 1, "nama" : "Melaksanakan program khusus yang kurang sesuai kebutuhan siswa dengan alokasi waktu kurang dari 2 jam/minggu. " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melaksanakan program khusus. " }
    ],
    "jawaban": 4
  },
  {
    "id": 5837,
    "bagian_id": 326,
    "nomor": 8,
    "nama": "Sekolah melaksanakan program pengembangan diri dalam bentuk kegiatan ekstrakurikuler. ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melaksanakan 4 jenis atau lebih kegiatan ekstrakurikuler. " },
      { "id": 2, "nilai" : 3, "nama" : "Melaksanakan 3 jenis kegiatan ekstrakurikuler." },
      { "id": 3, "nilai" : 2, "nama" : "Melaksanakan 2 jenis kegiatan ekstrakurikuler." },
      { "id": 4, "nilai" : 1, "nama" : "Melaksanakan 1 jenis kegiatan ekstrakurikuler. " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melaksanakan kegiatan ekstrakurikuler. " }
    ],
    "jawaban": 4
  },
  {
    "id": 5838,
    "bagian_id": 326,
    "nomor": 9,
    "nama": "Sekolah melaksanakan program pengembangan diri dalam bentuk kegiatan layanan konseling. ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melaksanakan 4 jenis kegiatan layanan konseling. " },
      { "id": 2, "nilai" : 3, "nama" : "Melaksanakan 3 jenis kegiatan layanan konseling. " },
      { "id": 3, "nilai" : 2, "nama" : "Melaksanakan 2 jenis kegiatan layanan konseling. " },
      { "id": 4, "nilai" : 1, "nama" : "Melaksanakan 1 jenis kegiatan layanan konseling. " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melaksanakan kegiatan layanan konseling. " }
    ],
    "jawaban": 4
  },
  {
    "id": 5839,
    "bagian_id": 326,
    "nomor": 10,
    "nama": "Sekolah menjabarkan standar kompetensi (SK) dan kompetensi dasar (KD) ke dalam indikator-indokator untuk setiap mata pelajaran pada setiap kelas. ",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "8 atau lebih mata pelajaran telah sesuai antara SK, KD, dan indikator-indikatornya. " },
      { "id": 2, "nilai" : 3, "nama" : "6 - 7 mata pelajaran telah sesuai antara SK, KD, dan indikator- indikatornya. " },
      { "id": 3, "nilai" : 2, "nama" : "4 - 5 mata pelajaran telah sesuai antara SK, KD, dan indikator- indikatornya. " },
      { "id": 4, "nilai" : 1, "nama" : "2 - 3 mata pelajaran telah sesuai antara SK, KD, dan indikator- indikatornya. " },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 2 mata pelajaran yang sesuai antara SK, KD, dan indikator-indikatornya. " }
    ],
    "jawaban": 4
  },
  {
    "id": 5840,
    "bagian_id": 326,
    "nomor": 11,
    "nama": "Sekolah menerapkan kegiatan pembelajaran sesuai ketentuan beban belajar yang tertuang pada standar isi. ",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Satu jam pembelajaran tatap muka selama 30 menit, jumlah jam pembelajaran per minggu minimal 26 jam (kelas I - III) dan minimal 32 jam (kelas IV - VI), dan jumlah minggu efektif per tahun minimal 34 minggu. " },
      { "id": 2, "nilai" : 3, "nama" : "Satu jam pembelajaran tatap muka selama 30 menit, jumlah jam pembelajaran per minggu minimal 26 jam (kelas I - III) dan minimal 32 jam (kelas IV - VI), dan jumlah minggu efektif per tahun kurang dari 34 minggu. " },
      { "id": 3, "nilai" : 2, "nama" : "Satu jam pembelajaran tatap muka selama 30 menit, jumlah jam pembelajaran per minggu kurang dari 26 jam (kelas I - III) dan kurang dari 32 jam (kelas IV - VI), dan jumlah minggu efektif per tahun kurang dari 34 minggu. " },
      { "id": 4, "nilai" : 1, "nama" : "Satu jam pembelajaran tatap muka kurang dari 30 menit, jumlah jam pembelajaran per minggu kurang dari 26 jam (kelas I - III) dan kurang dari 32 jam (kelas IV - VI), dan jumlah minggu efektif per tahun kurang dari 34 minggu. " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak menerapkan ketentuan beban belajar yang berlaku. " }
    ],
    "jawaban": 4
  },
  {
    "id": 5841,
    "bagian_id": 326,
    "nomor": 12,
    "nama": "Guru memberikan penugasan terstruktur dan kegiatan mandiri tidak terstruktur untuk mencapai kompetensi tertentu, maksimum 40% dari jumlah waktu kegiatan tatap muka mata pelajaran yang bersangkutan. ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "76% - 100% guru memberikan penugasan terstruktur dan kegiatan mandiri tidak terstruktur. " },
      { "id": 2, "nilai" : 3, "nama" : "51% - 75% guru memberikan penugasan terstruktur dan kegiatan mandiri tidak terstruktur. " },
      { "id": 3, "nilai" : 2, "nama" : "26% - 50% guru memberikan penugasan terstruktur dan kegiatan mandiri tidak terstruktur. " },
      { "id": 4, "nilai" : 1, "nama" : "1% - 25% guru memberikan penugasan terstruktur dan kegiatan mandiri tidak terstruktur. " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak ada guru yang memberikan penugasan terstruktur dan kegiatan mandiri tidak terstruktur. " }
    ],
    "jawaban": 4
  },
  {
    "id": 5842,
    "bagian_id": 326,
    "nomor": 13,
    "nama": "Dokumen lengkap KTSP disahkan oleh kepala sekolah dengan memperhatikan pertimbangan komite sekolah atau penyelenggara pendidikan yang disetujui oleh Dinas Pendidikan yang bersangkutan. ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "KTSP disahkan oleh Kepala Sekolah dengan memperhatikan pertimbangan Komite Sekolah atau penyelenggara pendidikan, dan disetujui oleh Dinas Pendidikan yang bersangkutan. " },
      { "id": 2, "nilai" : 3, "nama" : "KTSP disahkan oleh Kepala Sekolah dan disetujui oleh Dinas Pendidikan yang bersangkutan. " },
      { "id": 3, "nilai" : 2, "nama" : "KTSP disahkan oleh Kepala Sekolah dengan memperhatikan pertimbangan Komite Sekolah atau penyelenggara pendidikan. " },
      { "id": 4, "nilai" : 1, "nama" : "KTSP disahkan oleh Kepala Sekolah. " },
      { "id": 5, "nilai" : 0, "nama" : "KTSP tidak disahkan. " }
    ],
    "jawaban": 4
  },
  {
    "id": 5843,
    "bagian_id": 326,
    "nomor": 14,
    "nama": "Sekolah memiliki kalender pendidikan yang memuat pengaturan waktu untuk kegiatan pembelajaran selama satu tahun ajaran: (1) awal tahun pelajaran, (2) minggu efektif, (3) pembelajaran efektif, dan (4) hari libur. ",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memuat 4 macam pengaturan waktu. " },
      { "id": 2, "nilai" : 3, "nama" : "Memuat 3 macam pengaturan waktu. " },
      { "id": 3, "nilai" : 2, "nama" : "Memuat 2 macam pengaturan waktu. " },
      { "id": 4, "nilai" : 1, "nama" : "Memuat 2 macam pengaturan waktu. " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki kalender akademik. " }
    ],
    "jawaban": 4
  },
  {
    "id": 5844,
    "bagian_id": 327,
    "nomor": 15,
    "nama": "Sekolah mengembangkan silabus secara mandiri atau cara lainnya berdasarkan standar isi, standar kompetensi lulusan, dan panduan penyusunan KTSP. ",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Mengembangkan silabus melalui kelompok guru mata pelajaran dalam sebuah sekolah. " },
      { "id": 2, "nilai" : 3, "nama" : "Mengembangkan silabus oleh masing-masing guru mata pelajaran. " },
      { "id": 3, "nilai" : 2, "nama" : "Mengembangkan silabus melalui kelompok guru dari beberapa sekolah. " },
      { "id": 4, "nilai" : 1, "nama" : "Mengembangkan silabus dengan mengadopsi contoh yang ada. " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak mengembangkan silabus. " }
    ],
    "jawaban": 4
  },
  {
    "id": 5845,
    "bagian_id": 327,
    "nomor": 16,
    "nama": "Setiap mata pelajaran memiliki RPP yang dijabarkan dari silabus dengan mengintegrasikan pendidikan karakter. ",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "7 atau lebih mata pelajaran memiliki RPP yang dijabarkan dari silabus. " },
      { "id": 2, "nilai" : 3, "nama" : "5 - 6 mata pelajaran memiliki RPP yang dijabarkan dari silabus. " },
      { "id": 3, "nilai" : 2, "nama" : "3 - 4 mata pelajaran memiliki RPP yang dijabarkan dari silabus. " },
      { "id": 4, "nilai" : 1, "nama" : "1 - 2 mata pelajaran memiliki RPP yang dijabarkan dari silabus. " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak ada mata pelajaran yang memiliki RPP. " }
    ],
    "jawaban": 4
  },
  {
    "id": 5846,
    "bagian_id": 327,
    "nomor": 17,
    "nama": "RPP disusun dengan memperhatikan 6 prinsip penyusunan. ",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memperhatikan 6 prinsip penyusunan" },
      { "id": 2, "nilai" : 3, "nama" : "Memperhatikan 5 prinsip penyusunan" },
      { "id": 3, "nilai" : 2, "nama" : "Memperhatikan 4 prinsip penyusunan" },
      { "id": 4, "nilai" : 1, "nama" : "Memperhatikan 3 prinsip penyusunan" },
      { "id": 5, "nilai" : 0, "nama" : "Memperhatikan 2 atau kurang prinsip penyusunan " }
    ],
    "jawaban": 4
  },
  {
    "id": 5847,
    "bagian_id": 327,
    "nomor": 18,
    "nama": "Sekolah memenuhi 4 persyaratan pelaksanaan pembelajaran. ",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memenuhi 4 persyaratan." },
      { "id": 2, "nilai" : 3, "nama" : "Memenuhi 3 persyaratan." },
      { "id": 3, "nilai" : 2, "nama" : "Memenuhi 2 persyaratan." },
      { "id": 4, "nilai" : 1, "nama" : "Memenuhi 1 persyaratan." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memenuhi persyaratan. " }
    ],
    "jawaban": 4
  },
  {
    "id": 5848,
    "bagian_id": 327,
    "nomor": 19,
    "nama": "Sekolah melaksanakan pembelajaran dengan memenuhi persyaratan beban kerja minimal guru, yakni 24 jam tatap muka per minggu. ",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "76% -100% guru memiliki beban kerja minimal. " },
      { "id": 2, "nilai" : 3, "nama" : "51% - 75% guru memiliki beban kerja minimal. " },
      { "id": 3, "nilai" : 2, "nama" : "26% - 50% guru memiliki beban kerja minimal. " },
      { "id": 4, "nilai" : 1, "nama" : "1% - 25% guru memiliki beban kerja minimal. " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak ada guru yang memenuhi persyaratan. " }
    ],
    "jawaban": 4
  },
  {
    "id": 5849,
    "bagian_id": 327,
    "nomor": 20,
    "nama": "Pembelajaran dilaksanakan sesuai dengan langkah-langkah pembelajaran. ",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "76% - 100% guru melaksanakan pembelajaran sesuai dengan langkah-langkah pembelajaran. " },
      { "id": 2, "nilai" : 3, "nama" : "51% - 75% guru melaksanakan pembelajaran sesuai dengan langkah-langkah pembelajaran. " },
      { "id": 3, "nilai" : 2, "nama" : "26% - 50% guru melaksanakan pembelajaran sesuai dengan langkah-langkah pembelajaran. " },
      { "id": 4, "nilai" : 1, "nama" : "1% - 25% guru melaksanakan pembelajaran sesuai dengan langkah-langkah pembelajaran. " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak ada guru yang melaksanakan pembelajaran sesuai dengan langkah-langkah pembelajaran. " }
    ],
    "jawaban": 4
  },
  {
    "id": 5850,
    "bagian_id": 327,
    "nomor": 21,
    "nama": "Kepala sekolah melakukan pemantauan pembelajaran yang mencakup 4 tahap yakni (1) perencanaan, (2) pelaksanaan, (3) penilaian hasil pembelajaran, dan (4) diskusi hasil pemantauan. ",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Mencakup 4 tahap pemantauan." },
      { "id": 2, "nilai" : 3, "nama" : "Mencakup 3 tahap pemantauan." },
      { "id": 3, "nilai" : 2, "nama" : "Mencakup 2 tahap pemantauan." },
      { "id": 4, "nilai" : 1, "nama" : "Mencakup 1 tahap pemantauan." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak pernah melakukan pemantauan. " }
    ],
    "jawaban": 4
  },
  {
    "id": 5851,
    "bagian_id": 327,
    "nomor": 22,
    "nama": "Kepala sekolah melakukan supervisi proses pembelajaran dan menindaklanjuti dengan 4 cara yaitu: (1) pemberian contoh, (2) diskusi, (3) pelatihan, dan (4) konsultasi.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Menindaklanjuti dengan 4 cara." },
      { "id": 2, "nilai" : 3, "nama" : "Menindaklanjuti dengan 3 cara." },
      { "id": 3, "nilai" : 2, "nama" : "Menindaklanjuti dengan 2 cara." },
      { "id": 4, "nilai" : 1, "nama" : "Menindaklanjuti dengan 1 cara." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak menindaklanjuti." }
    ],
    "jawaban": 4
  },
  {
    "id": 5852,
    "bagian_id": 327,
    "nomor": 23,
    "nama": "Kepala sekolah melakukan evaluasi pembelajaran dan kinerja guru dengan memperhatikan 4 aspek, yaitu: (1) persiapan, (2) pelaksanaan, (3) evaluasi pembelajaran, dan (4) rencana tindak lanjut.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memperhatikan 4 aspek." },
      { "id": 2, "nilai" : 3, "nama" : "Memperhatikan 3 aspek." },
      { "id": 3, "nilai" : 2, "nama" : "Memperhatikan 2 aspek." },
      { "id": 4, "nilai" : 1, "nama" : "Memperhatikan 1 aspek." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melakukan evaluasi." }
    ],
    "jawaban": 4
  },
  {
    "id": 5853,
    "bagian_id": 327,
    "nomor": 24,
    "nama": "Kepala sekolah menyampaikan hasil pengawasan pembelajaran kepada pemangku kepentingan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Disampaikan kepada guru yang bersangkutan, dewan guru, dan pengawas sekolah." },
      { "id": 2, "nilai" : 3, "nama" : "Disampaikan kepada guru yang bersangkutan dan dewan guru." },
      { "id": 3, "nilai" : 2, "nama" : "Disampaikan kepada guru yang bersangkutan saja." },
      { "id": 4, "nilai" : 1, "nama" : "Tidak disampaikan kepada siapapun." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melakukan pengawasan." }
    ],
    "jawaban": 4
  },
  {
    "id": 5854,
    "bagian_id": 327,
    "nomor": 25,
    "nama": "Kepala sekolah melakukan tindak lanjut terhadap hasil pengawasan pembelajaran selama satu tahun terakhir.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "76% - 100% hasil pengawasan ditindaklanjuti." },
      { "id": 2, "nilai" : 3, "nama" : "51% - 75% hasil pengawasan ditindaklanjuti." },
      { "id": 3, "nilai" : 2, "nama" : "26% - 50% hasil pengawasan ditindaklanjuti." },
      { "id": 4, "nilai" : 1, "nama" : "1% - 25% hasil pengawasan ditindaklanjuti." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak ada hasil pengawasan yang ditindaklanjuti." }
    ],
    "jawaban": 4
  },
  {
    "id": 5855,
    "bagian_id": 328,
    "nomor": 26,
    "nama": "Siswa memperoleh pengalaman belajar untuk memiliki kemampuan sederhana untuk berpikir logis dengan bimbingan guru.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "76% - 100% mata pelajaran memuat tugas yang memberikan kesempatan berpikir logis dengan bimbingan guru." },
      { "id": 2, "nilai" : 3, "nama" : "51% - 75% mata pelajaran memuat tugas yang memberikan kesempatan berpikir logis dengan bimbingan guru." },
      { "id": 3, "nilai" : 2, "nama" : "26% - 50% mata pelajaran memuat tugas yang memberikan kesempatan berpikir logis dengan bimbingan guru." },
      { "id": 4, "nilai" : 1, "nama" : "1% - 25% mata pelajaran memuat tugas yang memberikan kesempatan berpikir logis dengan bimbingan guru." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak ada mata pelajaran yang memuat tugas yang memberikan kesempatan berpikir logis dengan bimbingan guru." }
    ],
    "jawaban": 4
  },
  {
    "id": 5856,
    "bagian_id": 328,
    "nomor": 27,
    "nama": "Siswa terlibat dalam kegiatan belajar yang dapat memecahkan masalah- masalah sederhana dalam kehidupan sehari-hari sesuai ketunaan siswa.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "76% - 100% mata pelajaran memuat kegiatan siswa yang dapat memecahkan masalah sederhana." },
      { "id": 2, "nilai" : 3, "nama" : "51% - 75% mata pelajaran memuat kegiatan siswa yang dapat memecahkan masalah sederhana." },
      { "id": 3, "nilai" : 2, "nama" : "26% - 50% mata pelajaran memuat kegiatan siswa yang dapat memecahkan masalah sederhana." },
      { "id": 4, "nilai" : 1, "nama" : "1% - 25% mata pelajaran memuat kegiatan siswa yang dapat memecahkan masalah sederhana." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak ada mata pelajaran memuat kegiatan siswa yang dapat memecahkan masalah sederhana." }
    ],
    "jawaban": 4
  },
  {
    "id": 5857,
    "bagian_id": 328,
    "nomor": 28,
    "nama": "Siswa memperoleh pengalaman belajar yang dapat menganalisis dan/atau mengenal gejala alam dan sosial secara sederhana di lingkungan sekitar.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "76% - 100% RPP mata pelajaran memuat pengalaman belajar siswa dalam mengenal gejala alam dan sosial." },
      { "id": 2, "nilai" : 3, "nama" : "51% - 75% RPP mata pelajaran memuat pengalaman belajar siswa dalam mengenal gejala alam dan sosial." },
      { "id": 3, "nilai" : 2, "nama" : "26% - 50% RPP mata pelajaran memuat pengalaman belajar siswa dalam mengenal gejala alam dan sosial." },
      { "id": 4, "nilai" : 1, "nama" : "1% - 25% RPP mata pelajaran memuat pengalaman belajar siswa dalam mengenal gejala alam dan sosial." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak ada RPP mata pelajaran memuat pengalaman belajar siswa dalam mengenal gejala alam dan sosial." }
    ],
    "jawaban": 4
  },
  {
    "id": 5858,
    "bagian_id": 328,
    "nomor": 29,
    "nama": "Siswa memperoleh pengalaman belajar melalui program pembiasaan untuk mencari informasi dari lingkungan sekitar yang dihadapinya secara sederhana dalam satu tahun terakhir.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sekolah melaksanakan 4 atau lebih kegiatan pembiasaan untuk mencari informasi dari lingkungan sekitar." },
      { "id": 2, "nilai" : 3, "nama" : "Sekolah melaksanakan 3 kegiatan pembiasaan untuk mencari informasi dari lingkungan sekitar." },
      { "id": 3, "nilai" : 2, "nama" : "Sekolah melaksanakan 2 kegiatan pembiasaan untuk mencari informasi dari lingkungan sekitar." },
      { "id": 4, "nilai" : 1, "nama" : "Sekolah melaksanakan 1 kegiatan pembiasaan untuk mencari informasi dari lingkungan sekitar." },
      { "id": 5, "nilai" : 0, "nama" : "Sekolah tidak pernah melaksanakan kegiatan pembiasaan untuk mencari informasi dari lingkungan sekitar." }
    ],
    "jawaban": 4
  },
  {
    "id": 5859,
    "bagian_id": 328,
    "nomor": 30,
    "nama": "Siswa memperoleh pengalaman belajar untuk menunjukkan kecintaan dan kepedulian terhadap lingkungan sekitar sesuai dengan kemampuan yang dimiliki, dalam satu tahun terakhir.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sekolah melaksanakan 4 atau lebih kegiatan belajar untuk menunjukkan kecintaan dan kepedulian terhadap lingkungan sekitar." },
      { "id": 2, "nilai" : 3, "nama" : "Sekolah melaksanakan 3 kegiatan belajar untuk menunjukkan kecintaan dan kepedulian terhadap lingkungan sekitar." },
      { "id": 3, "nilai" : 2, "nama" : "Sekolah melaksanakan 2 kegiatan belajar untuk menunjukkan kecintaan dan kepedulian terhadap lingkungan sekitar." },
      { "id": 4, "nilai" : 1, "nama" : "Sekolah melaksanakan 1 kegiatan belajar untuk menunjukkan kecintaan dan kepedulian terhadap lingkungan sekitar." },
      { "id": 5, "nilai" : 0, "nama" : "Sekolah tidak melaksanakan kegiatan belajar untuk menun-jukkan kecintaan dan kepedulian terhadap lingkungan sekitar." }
    ],
    "jawaban": 4
  },
  {
    "id": 5860,
    "bagian_id": 328,
    "nomor": 31,
    "nama": "Siswa memperoleh pengalaman belajar untuk menunjukkan kemampuan melakukan kegiatan seni dan budaya secara sederhana sesuai dengan potensi yang dimiliki, dalam satu tahun terakhir.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sekolah memfasilitasi 4 atau lebih kegiatan seni dan budaya." },
      { "id": 2, "nilai" : 3, "nama" : "Sekolah memfasilitasi 3 kegiatan seni dan budaya." },
      { "id": 3, "nilai" : 2, "nama" : "Sekolah memfasilitasi 2 kegiatan seni dan budaya." },
      { "id": 4, "nilai" : 1, "nama" : "Sekolah memfasilitasi 1 kegiatan seni dan budaya." },
      { "id": 5, "nilai" : 0, "nama" : "Sekolah tidak memfasilitasi kegiatan seni dan budaya." }
    ],
    "jawaban": 4
  },
  {
    "id": 5861,
    "bagian_id": 328,
    "nomor": 32,
    "nama": "Siswa memperoleh pengalaman belajar untuk mengenal kekurangan dan kelebihan diri sendiri, dalam satu tahun terakhir.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sekolah melaksanakan 4 atau lebih kegiatan kesiswaan untuk mengenal kekurangan dan kelebihan diri sendiri." },
      { "id": 2, "nilai" : 3, "nama" : "Sekolah melaksanakan 3 kegiatan kesiswaan untuk mengenal kekurangan dan kelebihan diri sendiri." },
      { "id": 3, "nilai" : 2, "nama" : "Sekolah melaksanakan 2 kegiatan kesiswaan untuk mengenal kekurangan dan kelebihan diri sendiri." },
      { "id": 4, "nilai" : 1, "nama" : "Sekolah melaksanakan 1 kegiatan kesiswaan untuk mengenal kekurangan dan kelebihan diri sendiri." },
      { "id": 5, "nilai" : 0, "nama" : "Sekolah tidak melaksanakan kegiatan kesiswaan untuk mengenal kekurangan dan kelebihan diri sendiri." }
    ],
    "jawaban": 4
  },
  {
    "id": 5862,
    "bagian_id": 328,
    "nomor": 33,
    "nama": "Siswa memperoleh pengalaman belajar untuk mematuhi aturan-aturan sosial yang berlaku dalam lingkungannya, dalam satu tahun terakhir.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sekolah melaksanakan 4 atau lebih kegiatan belajar untuk mematuhi aturan-aturan sosial." },
      { "id": 2, "nilai" : 3, "nama" : "Sekolah melaksanakan 3 kegiatan belajar untuk mematuhi aturan- aturan sosial." },
      { "id": 3, "nilai" : 2, "nama" : "Sekolah melaksanakan 2 kegiatan belajar untuk mematuhi aturan- aturan sosial." },
      { "id": 4, "nilai" : 1, "nama" : "Sekolah melaksanakan 1 kegiatan belajar untuk mematuhi aturan- aturan sosial." },
      { "id": 5, "nilai" : 0, "nama" : "Sekolah tidak melaksanakan kegiatan belajar untuk mematuhi aturan-aturan sosial." }
    ],
    "jawaban": 4
  },
  {
    "id": 5863,
    "bagian_id": 328,
    "nomor": 34,
    "nama": "Siswa memperoleh pengalaman belajar untuk menunjukkan kebiasaan hidup bersih, sehat, dan bugar, dalam satu tahun terakhir.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sekolah melaksanakan 4 kegiatan pembiasaan untuk hidup bersih, sehat, dan bugar." },
      { "id": 2, "nilai" : 3, "nama" : "Sekolah melaksanakan 3 kegiatan pembiasaan untuk hidup bersih, sehat, dan bugar." },
      { "id": 3, "nilai" : 2, "nama" : "Sekolah melaksanakan 2 kegiatan pembiasaan untuk hidup bersih, sehat, dan bugar." },
      { "id": 4, "nilai" : 1, "nama" : "Sekolah melaksanakan 1 kegiatan pembiasaan untuk hidup bersih, sehat, dan bugar." },
      { "id": 5, "nilai" : 0, "nama" : "Sekolah tidak melaksanakan kegiatan pembiasaan untuk hidup bersih, sehat, dan bugar." }
    ],
    "jawaban": 4
  },
  {
    "id": 5864,
    "bagian_id": 328,
    "nomor": 35,
    "nama": "Siswa memperoleh pengalaman belajar dalam berkomunikasi secara jelas dan sederhana sesuai jenis ketunaan siswa, dalam satu tahun terakhir.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sekolah memfasilitasi 4 atau lebih kegiatan siswa untuk berkomunikasi secara jelas dan sederhana." },
      { "id": 2, "nilai" : 3, "nama" : "Sekolah memfasilitasi 3 kegiatan siswa untuk berkomunikasi secara jelas dan sederhana." },
      { "id": 3, "nilai" : 2, "nama" : "Sekolah memfasilitasi 2 kegiatan siswa untuk berkomunikasi secara jelas dan sederhana." },
      { "id": 4, "nilai" : 1, "nama" : "Sekolah memfasilitasi 1 kegiatan siswa untuk berkomunikasi secara jelas dan sederhana." },
      { "id": 5, "nilai" : 0, "nama" : "Sekolah tidak memfasilitasi kegiatan siswa untuk berkomunikasi secara jelas dan sederhana." }
    ],
    "jawaban": 4
  },
  {
    "id": 5865,
    "bagian_id": 328,
    "nomor": 36,
    "nama": "Siswa memperoleh pengalaman belajar untuk bekerjasama dalam kelompok, tolong-menolong, menjaga diri sendiri dalam lingkungan keluarga dan teman sebaya.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "76% - 100% RPP mata pelajaran menggunakan metode pembelajaran secara berkelompok." },
      { "id": 2, "nilai" : 3, "nama" : "51% - 75% RPP mata pelajaran menggunakan metode pembelajaran secara berkelompok." },
      { "id": 3, "nilai" : 2, "nama" : "26% - 50% RPP mata pelajaran menggunakan metode pembelajaran secara berkelompok." },
      { "id": 4, "nilai" : 1, "nama" : "1% - 25% RPP mata pelajaran menggunakan metode pembelajaran secara berkelompok." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak ada RPP mata pelajaran yang menggunakan metode pembelajaran secara berkelompok." }
    ],
    "jawaban": 4
  },
  {
    "id": 5866,
    "bagian_id": 328,
    "nomor": 37,
    "nama": "Siswa memperoleh pengalaman belajar untuk melaksanakan ajaran agama yang dianut sesuai dengan tahap perkembangannya.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sekolah memfasilitasi 4 atau lebih kegiatan pembiasaan untuk melaksanakan ajaran agama yang dianut." },
      { "id": 2, "nilai" : 3, "nama" : "Sekolah memfasilitasi 3 kegiatan pembiasaan untuk melaksanakan ajaran agama yang dianut." },
      { "id": 3, "nilai" : 2, "nama" : "Sekolah memfasilitasi 2 kegiatan pembiasaan untuk melaksanakan ajaran agama yang dianut." },
      { "id": 4, "nilai" : 1, "nama" : "Sekolah memfasilitasi 1 kegiatan pembiasaan untuk melaksanakan ajaran agama yang dianut." },
      { "id": 5, "nilai" : 0, "nama" : "Sekolah tidak melaksanakan kegiatan pembiasaan untuk melaksanakan ajaran agama yang dianut." }
    ],
    "jawaban": 4
  },
  {
    "id": 5867,
    "bagian_id": 328,
    "nomor": 38,
    "nama": "Siswa memperoleh pengalaman belajar untuk menghargai keberagaman agama, budaya, suku, ras, dan golongan sosial ekonomi di lingkungan sekitarnya, dalam satu tahun terakhir.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sekolah melaksanakan 4 atau lebih kegiatan pembelajaran menghargai keberagaman agama, budaya, suku, ras, dan golongan sosial ekonomi." },
      { "id": 2, "nilai" : 3, "nama" : "Sekolah melaksanakan 3 kegiatan pembelajaran menghargai keberagaman agama, budaya, suku, ras, dan golongan sosial ekonomi." },
      { "id": 3, "nilai" : 2, "nama" : "Sekolah melaksanakan 2 kegiatan pembelajaran menghargai keberagaman agama, budaya, suku, ras, dan golongan sosial ekonomi." },
      { "id": 4, "nilai" : 1, "nama" : "Sekolah melaksanakan 1 kegiatan pembelajaran menghargai keberagaman agama, budaya, suku, ras, dan golongan sosial ekonomi." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak ada kegiatan pembelajaran menghargai keberagaman agama, budaya, suku, ras, dan golongan sosial ekonomi." }
    ],
    "jawaban": 4
  },
  {
    "id": 5868,
    "bagian_id": 328,
    "nomor": 39,
    "nama": "Siswa memperoleh pengalaman belajar untuk menunjukkan kecintaan dan kebanggaan terhadap bangsa, negara, dan tanah air Indonesia, dalam satu tahun terakhir.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sekolah melaksanakan 4 atau lebih kegiatan pembelajaran untuk menunjukkan kecintaan dan kebanggaan terhadap bangsa, negara, dan tanah air Indonesia." },
      { "id": 2, "nilai" : 3, "nama" : "Sekolah melaksanakan 3 kegiatan pembelajaran untuk menunjukkan kecintaan dan kebanggaan terhadap bangsa, negara, dan tanah air Indonesia." },
      { "id": 3, "nilai" : 2, "nama" : "Sekolah melaksanakan 2 kegiatan pembelajaran untuk menunjukkan kecintaan dan kebanggaan terhadap bangsa, negara, dan tanah air Indonesia." },
      { "id": 4, "nilai" : 1, "nama" : "Sekolah melaksanakan 1 kegiatan pembelajaran untuk menunjukkan kecintaan dan kebanggaan terhadap bangsa, negara, dan tanah air Indonesia." },
      { "id": 5, "nilai" : 0, "nama" : "Sekolah tidak melaksanakan kegiatan pembelajaran untuk menunjukkan kecintaan dan kebanggaan terhadap bangsa, negara, dan tanah air Indonesia." }
    ],
    "jawaban": 4
  },
  {
    "id": 5960,
    "bagian_id": 332,
    "nomor": 131,
    "nama": "Di samping uang sekolah, SDLB tidak melakukan pungutan biaya personal lain.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Tidak melakukan pungutan biaya personal lain." },
      { "id": 2, "nilai" : 3, "nama" : "Melakukan 1 jenis pungutan biaya personal lain." },
      { "id": 3, "nilai" : 2, "nama" : "Melakukan 2 jenis pungutan biaya personal lain." },
      { "id": 4, "nilai" : 1, "nama" : "Melakukan 3 jenis pungutan biaya personal lain." },
      { "id": 5, "nilai" : 0, "nama" : "Melakukan 4 jenis atau lebih pungutan biaya personal lain." }
    ],
    "jawaban": 4
  },
  {
    "id": 5869,
    "bagian_id": 328,
    "nomor": 40,
    "nama": "Siswa memperoleh pengalaman belajar untuk menunjukkan rasa keingintahuan dan menyadari potensi yang dimiliki.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sekolah memfasilitasi kegiatan pembelajaran dengan memanfaatkan bahan ajar, buku teks, perpustakaan, sumber belajar lapangan, dan internet." },
      { "id": 2, "nilai" : 3, "nama" : "Sekolah memfasilitasi kegiatan pembelajaran dengan memanfaatkan bahan ajar, buku teks, perpustakaan, dan sumber belajar lapangan." },
      { "id": 3, "nilai" : 2, "nama" : "Sekolah memfasilitasi kegiatan pembelajaran dengan memanfaatkan bahan ajar, buku teks, dan perpustakaan." },
      { "id": 4, "nilai" : 1, "nama" : "Sekolah memfasilitasi kegiatan pembelajaran dengan memanfaatkan bahan ajar dan buku teks." },
      { "id": 5, "nilai" : 0, "nama" : "Sekolah tidak pernah memfasilitasi kegiatan pembelajaran dengan memanfaatkan sumber belajar." }
    ],
    "jawaban": 4
  },
  {
    "id": 5870,
    "bagian_id": 328,
    "nomor": 41,
    "nama": "Siswa memperoleh pengalaman belajar untuk menunjukkan kegemaran membaca dan menulis naskah pendek sederhana, sesuai dengan ketunaannya.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Rata-rata nilai ketuntasan belajar mata pelajaran Bahasa Indonesia dan Matematika ditetapkan 75,00 atau lebih" },
      { "id": 2, "nilai" : 3, "nama" : "Rata-rata nilai ketuntasan belajar mata pelajaran Bahasa Indonesia dan Matematika ditetapkan 70,00 - 74,90" },
      { "id": 3, "nilai" : 2, "nama" : "Rata-rata nilai ketuntasan belajar mata pelajaran Bahasa Indonesia dan Matematika ditetapkan 65,00 - 69,90" },
      { "id": 4, "nilai" : 1, "nama" : "Rata-rata nilai ketuntasan belajar mata pelajaran Bahasa Indonesia dan Matematika ditetapkan 60,00 - 64,90" },
      { "id": 5, "nilai" : 0, "nama" : "Rata-rata nilai ketuntasan belajar mata pelajaran Bahasa Indonesia dan Matematika ditetapkan kurang dari 60,00" }
    ],
    "jawaban": 4
  },
  {
    "id": 5871,
    "bagian_id": 328,
    "nomor": 42,
    "nama": "Siswa memperoleh pengalaman belajar untuk menunjukkan keterampilan menyimak, berbicara, membaca, menulis, dan berhitung sesuai dengan potensi yang dimiliki, yang ditunjukkan dengan rata-rata nilai ketuntasan belajar mata pelajaran Bahasa Indonesia dan Matematika.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Rata-rata nilai ketuntasan belajar mata pelajaran Bahasa Indonesia dan Matematika ditetapkan 75,00 atau lebih" },
      { "id": 2, "nilai" : 3, "nama" : "Rata-rata nilai ketuntasan belajar mata pelajaran Bahasa Indonesia dan Matematika ditetapkan 70,00 - 74,90" },
      { "id": 3, "nilai" : 2, "nama" : "Rata-rata nilai ketuntasan belajar mata pelajaran Bahasa Indonesia dan Matematika ditetapkan 65,00 - 69,90" },
      { "id": 4, "nilai" : 1, "nama" : "Rata-rata nilai ketuntasan belajar mata pelajaran Bahasa Indonesia dan Matematika ditetapkan 60,00 - 64,90" },
      { "id": 5, "nilai" : 0, "nama" : "Rata-rata nilai ketuntasan belajar mata pelajaran Bahasa Indonesia dan Matematika ditetapkan kurang dari 60,00" }
    ],
    "jawaban": 4
  },
  {
    "id": 5872,
    "bagian_id": 328,
    "nomor": 43,
    "nama": "Siswa memperoleh pengalaman belajar dalam kegiatan seni, keterampilan, dan pengembangan diri seiring dengan perkembangannya, dalam satu tahun terakhir.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sekolah melaksanakan 4 atau lebih kegiatan seni, keterampilan, dan pengembangan diri." },
      { "id": 2, "nilai" : 3, "nama" : "Sekolah melakukan 3 kegiatan seni, keterampilan, dan pengembangan diri." },
      { "id": 3, "nilai" : 2, "nama" : "Sekolah melakukan 2 kegiatan seni, keterampilan, dan pengembangan diri." },
      { "id": 4, "nilai" : 1, "nama" : "Sekolah melakukan 1 kegiatan seni, keterampilan, dan pengembangan diri." },
      { "id": 5, "nilai" : 0, "nama" : "Sekolah tidak melakukan kegiatan seni, keterampilan, dan pengembangan diri." }
    ],
    "jawaban": 4
  },
  {
    "id": 5873,
    "bagian_id": 329,
    "nomor": 44,
    "nama": "Guru memiliki kualifikasi akademik minimum sarjana (S1) atau diploma empat (D-IV).",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "76% - 100% guru berpendidikan minimum S1 atau D-IV." },
      { "id": 2, "nilai" : 3, "nama" : "51% - 75% guru berpendidikan minimum S1 atau D-IV." },
      { "id": 3, "nilai" : 2, "nama" : "26% - 50% guru berpendidikan minimum S1 atau D-IV." },
      { "id": 4, "nilai" : 1, "nama" : "1% - 25% guru berpendidikan minimum S1 atau D-IV." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak ada guru yang berpendidikan minimum S1 atau D-IV." }
    ],
    "jawaban": 4
  },
  {
    "id": 5874,
    "bagian_id": 329,
    "nomor": 45,
    "nama": "Guru mengajar sesuai dengan latar belakang pendidikannya.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "76% - 100% guru memiliki latar belakang pendidikan yang sesuai dengan mata pelajaran yang diajarkan." },
      { "id": 2, "nilai" : 3, "nama" : "51% - 75% guru memiliki latar belakang pendidikan yang sesuai dengan mata pelajaran yang diajarkan." },
      { "id": 3, "nilai" : 2, "nama" : "26% - 50% guru memiliki latar belakang pendidikan yang sesuai dengan mata pelajaran yang diajarkan." },
      { "id": 4, "nilai" : 1, "nama" : "1% - 25% guru memiliki latar belakang pendidikan yang sesuai dengan mata pelajaran yang diajarkan." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak ada guru memiliki latar belakang pendidikan yang sesuai dengan mata pelajaran yang diajarkan." }
    ],
    "jawaban": 4
  },
  {
    "id": 5875,
    "bagian_id": 329,
    "nomor": 46,
    "nama": "Guru memiliki kesehatan jasmani dan rohani untuk menjalankan tugas utama guru, yang ditunjukkan melalui kehadiran guru di sekolah, dalam satu semester terakhir.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Rata-rata kehadiran guru 96% - 100% untuk menjalankan tugas utama guru." },
      { "id": 2, "nilai" : 3, "nama" : "Rata-rata kehadiran guru 91% - 95% untuk menjalankan tugas utama guru." },
      { "id": 3, "nilai" : 2, "nama" : "Rata-rata kehadiran guru 86% - 90% untuk menjalankan tugas utama guru." },
      { "id": 4, "nilai" : 1, "nama" : "Rata-rata kehadiran guru 81% - 85% untuk menjalankan tugas utama guru." },
      { "id": 5, "nilai" : 0, "nama" : "Rata-rata kehadiran guru kurang dari 81% untuk menjalankan tugas utama guru." }
    ],
    "jawaban": 4
  },
  {
    "id": 5876,
    "bagian_id": 329,
    "nomor": 47,
    "nama": "Guru memiliki kompetensi pedagogik sebagai agen pembelajaran yang ditunjukkan melalui kegiatan merencanakan, melaksanakan, dan mengevaluasi pembelajaran sesuai dengan prinsip-prinsip pembelajaran.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "76% - 100%  guru merencanakan, melaksanakan, dan mengevaluasi pembelajaran sesuai dengan prinsip-prinsip pembelajaran." },
      { "id": 2, "nilai" : 3, "nama" : "51% - 75%  guru merencanakan, melaksanakan, dan mengevaluasi pembelajaran sesuai dengan prinsip-prinsip pembelajaran." },
      { "id": 3, "nilai" : 2, "nama" : "26% - 50% guru merencanakan, melaksanakan, dan mengevaluasi pembelajaran sesuai dengan prinsip-prinsip pembelajaran." },
      { "id": 4, "nilai" : 1, "nama" : "1% - 25% guru merencanakan, melaksanakan, dan mengevaluasi pembelajaran sesuai dengan prinsip-prinsip pembelajaran." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak ada guru yang merencanakan, melaksanakan, dan mengevaluasi pembelajaran sesuai dengan prinsip-prinsip pembelajaran." }
    ],
    "jawaban": 4
  },
  {
    "id": 5877,
    "bagian_id": 329,
    "nomor": 48,
    "nama": "Guru memiliki kompetensi kepribadian sebagai agen pembelajaran yang ditunjukkan melalui tindakan guru sesuai dengan norma agama, hukum, sosial, serta peraturan dan ketentuan yang berlaku.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Semua guru bertindak sesuai dengan norma agama, hukum, sosial, serta peraturan dan ketentuan yang berlaku." },
      { "id": 2, "nilai" : 3, "nama" : "Ada guru yang melanggar norma agama, hukum, sosial, serta peraturan dan ketentuan yang berlaku; dan telah dikenai sanksi yang sepadan seperti dibebastugaskan dari mengajar atau dikeluarkan." },
      { "id": 3, "nilai" : 2, "nama" : "Ada guru yang melanggar norma agama, hukum, sosial, serta peraturan dan ketentuan yang berlaku namun diberi kesempatan memperbaiki diri dan dilakukan pembinaan." },
      { "id": 4, "nilai" : 1, "nama" : "Ada guru yang melanggar norma agama, hukum, sosial, serta peraturan dan ketentuan yang berlaku namun hanya diberikan peringatan tertulis." },
      { "id": 5, "nilai" : 0, "nama" : "Ada guru yang melanggar norma agama, hukum, sosial, serta peraturan dan ketentuan yang berlaku namun tidak diberikan sanksi apa pun." }
    ],
    "jawaban": 4
  },
  {
    "id": 5878,
    "bagian_id": 329,
    "nomor": 49,
    "nama": "Guru berkomunikasi secara efektif dan santun dengan siswa, sesama guru, tenaga kependidikan, dan orangtua siswa.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Guru berkomunikasi efektif dan santun dengan siswa, sesama guru, kepala sekolah, dan orang tua." },
      { "id": 2, "nilai" : 3, "nama" : "Guru berkomunikasi efektif dan santun dengan siswa, sesama guru, dan kepala sekolah." },
      { "id": 3, "nilai" : 2, "nama" : "Guru berkomunikasi efektif dan santun dengan siswa, dan sesama guru." },
      { "id": 4, "nilai" : 1, "nama" : "Guru berkomunikasi efektif dan santun dengan siswa." },
      { "id": 5, "nilai" : 0, "nama" : "Guru tidak berkomunikasi efektif dan santun." }
    ],
    "jawaban": 4
  },
  {
    "id": 5893,
    "bagian_id": 330,
    "nomor": 64,
    "nama": "Lahan sekolah berada di lokasi yang nyaman, terhindar dari gangguan pencemaran air, kebisingan, dan pencemaran udara serta memiliki sarana untuk meningkatkan kenyamanan.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Berada di lokasi yang nyaman, terhindar dari gangguan pencemaran air, kebisingan, dan pencemaran udara serta memiliki sarana untuk meningkatkan kenyamanan." },
      { "id": 2, "nilai" : 3, "nama" : "Berada di lokasi yang nyaman, terhindar dari gangguan pencemaran air, kebisingan, dan pencemaran udara, tetapi tidak memiliki sarana untuk meningkatkan kenyamanan." },
      { "id": 3, "nilai" : 2, "nama" : "Berada di lokasi yang nyaman, terhindar dari gangguan pencemaran air dan kebisingan, tetapi tidak terhindar dari gangguan pencemaran udara, serta tidak memiliki sarana untuk meningkatkan kenyamanan." },
      { "id": 4, "nilai" : 1, "nama" : "Berada di lokasi yang nyaman, terhindar dari gangguan pencemaran air, tidak terhindar dari gangguan kebisingan dan pencemaran udara, serta tidak memiliki sarana untuk meningkatkan kenyamanan." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak berada di lokasi yang nyaman." }
    ],
    "jawaban": 4
  },
  {
    "id": 5879,
    "bagian_id": 329,
    "nomor": 50,
    "nama": "Guru memiliki kompetensi profesional sebagai agen pembelajaran, yang ditunjukkan dengan penguasaan materi pelajaran yang diampu serta mengembangkannya dengan metode ilmiah.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "96% - 100% guru memiliki kesesuaian latar belakang pendidikan dengan mata pelajaran yang diampu, mempunyai sertifikat pendidik, menghasilkan karya tulis, mengikuti berbagai pertemuan ilmiah." },
      { "id": 2, "nilai" : 3, "nama" : "91% - 95% guru memiliki kesesuaian latar belakang pendidikan dengan mata pelajaran yang diampu, mempunyai sertifikat pendidik, menghasilkan karya tulis, mengikuti berbagai pertemuan ilmiah." },
      { "id": 3, "nilai" : 2, "nama" : "86% - 90% guru memiliki kesesuaian latar belakang pendidikan dengan mata pelajaran yang diampu, mempunyai sertifikat pendidik, menghasilkan karya tulis, mengikuti berbagai pertemuan ilmiah." },
      { "id": 4, "nilai" : 1, "nama" : "81% - 85% guru memiliki kesesuaian latar belakang pendidikan dengan mata pelajaran yang diampu, mempunyai sertifikat pendidik, menghasilkan karya tulis, mengikuti berbagai pertemuan ilmiah." },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 81% guru memiliki kesesuaian latar belakang pendidikan dengan mata pelajaran yang diampu, mempunyai sertifikat pendidik, menghasilkan karya tulis, mengikuti berbagai pertemuan ilmiah." }
    ],
    "jawaban": 4
  },
  {
    "id": 5880,
    "bagian_id": 329,
    "nomor": 51,
    "nama": "Kepala sekolah memenuhi persyaratan sesuai dengan ketentuan yang berlaku.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Berstatus sebagai guru, memiliki SK sebagai kepala sekolah, mempunyai pengalaman minimal 5 tahun sebagai guru, dan memiliki sertifikat pendidik" },
      { "id": 2, "nilai" : 3, "nama" : "Berstatus sebagai guru, memiliki SK sebagai kepala sekolah, mempunyai pengalaman minimal 5 tahun sebagai guru, tetapi tidak memiliki sertifikat pendidik" },
      { "id": 3, "nilai" : 2, "nama" : "Berstatus sebagai guru, memiliki SK kepala sekolah, dan mempunyai pengalaman antara 3−4 tahun sebagai guru" },
      { "id": 4, "nilai" : 1, "nama" : "Berstatus sebagai guru, memiliki SK kepala sekolah, dan mempunyai pengalaman antara 1−2 tahun sebagai guru" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak berstatus sebagai guru tetapi memiliki SK kepala sekolah" }
    ],
    "jawaban": 4
  },
  {
    "id": 5881,
    "bagian_id": 329,
    "nomor": 52,
    "nama": "Kepala sekolah memiliki kualifikasi akademik minimum sarjana (S1) atau diploma empat (D-IV) kependidikan.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki kualifikasi akademik S1 atau D-IV kependidikan dari perguruan tinggi terakreditasi." },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki kualifikasi akademik S1 atau D-IV kependidikan dari perguruan tinggi tidak terakreditasi." },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki kualifikasi akademik S1 atau D-IV nonkependidikan dari perguruan tinggi terakreditasi." },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki kualifikasi akademik S1 atau D-IV nonkependidikan dari perguruan tinggi tidak terakreditasi." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki kualifikasi akademik S1 atau D-IV." }
    ],
    "jawaban": 4
  },
  {
    "id": 5882,
    "bagian_id": 329,
    "nomor": 53,
    "nama": "Kepala sekolah memiliki pengalaman mengajar minimum 5 tahun.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki pengalaman mengajar 5 tahun atau lebih." },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki pengalaman mengajar 4 tahun." },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki pengalaman mengajar 3 tahun." },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki pengalaman mengajar 2 tahun." },
      { "id": 5, "nilai" : 0, "nama" : "Memiliki pengalaman mengajar 1 tahun atau kurang." }
    ],
    "jawaban": 4
  },
  {
    "id": 5883,
    "bagian_id": 329,
    "nomor": 54,
    "nama": "Kepala sekolah memiliki kemampuan manajerial yang ditunjukkan dengan pengembangan berbagai aspek pengelolaan sekolah, yakni mengelola: (1) kesiswaan, (2) guru dan tenaga kependidikan, (3) pengembangan kurikulum, (4) sarana dan prasarana, (5) pembiayaan, dan (6) hubungan dengan masyarakat.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Berhasil mengembangkan 6 aspek pengelolaan sekolah." },
      { "id": 2, "nilai" : 3, "nama" : "Berhasil mengembangkan 5 aspek pengelolaan sekolah." },
      { "id": 3, "nilai" : 2, "nama" : "Berhasil mengembangkan 4 aspek pengelolaan sekolah." },
      { "id": 4, "nilai" : 1, "nama" : "Berhasil mengembangkan 3 aspek pengelolaan sekolah." },
      { "id": 5, "nilai" : 0, "nama" : "Berhasil mengembangkan kurang dari 3 aspek pengelolaan sekolah." }
    ],
    "jawaban": 4
  },
  {
    "id": 5884,
    "bagian_id": 329,
    "nomor": 55,
    "nama": "Kepala sekolah memiliki kemampuan kewirausahaan yang ditunjukkan antara lain dengan adanya kegiatan yang menumbuhkan jiwa kewirausahaan siswa.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Mengelola 4 atau lebih jenis kegiatan yang menumbuhkan jiwa kewirausahaan." },
      { "id": 2, "nilai" : 3, "nama" : "Mengelola 3 jenis kegiatan yang menumbuhkan jiwa kewirausahaan." },
      { "id": 3, "nilai" : 2, "nama" : "Mengelola 2 jenis kegiatan yang menumbuhkan jiwa kewirausahaan." },
      { "id": 4, "nilai" : 1, "nama" : "Mengelola 1 jenis kegiatan yang menumbuhkan jiwa kewirausahaan." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak mengelola kegiatan yang menumbuhkan jiwa kewirausahaan." }
    ],
    "jawaban": 4
  },
  {
    "id": 5885,
    "bagian_id": 329,
    "nomor": 56,
    "nama": "Kepala sekolah melakukan supervisi dan monitoring setiap tahun.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "91% - 100% guru disupervisi dan dimonitor oleh kepala sekolah." },
      { "id": 2, "nilai" : 3, "nama" : "81% - 90% guru disupervisi dan dimonitor oleh kepala sekolah." },
      { "id": 3, "nilai" : 2, "nama" : "71% - 80% guru disupervisi dan dimonitor oleh kepala sekolah." },
      { "id": 4, "nilai" : 1, "nama" : "61% - 70% guru disupervisi dan dimonitor oleh kepala sekolah." },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 61% guru yang disupervisi dan dimonitor oleh kepala sekolah." }
    ],
    "jawaban": 4
  },
  {
    "id": 5886,
    "bagian_id": 329,
    "nomor": 57,
    "nama": "Kepala tenaga administrasi memiliki kualifikasi akademik minimum SMK atau yang sederajat, diutamakan dari jurusan Administrasi.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki kualifikasi akademik SMK dari jurusan Administrasi." },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki kualifikasi akademik SMK bukan dari jurusan Administrasi." },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki kualifikasi akademik SMP atau yang sederajat." },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki kualifikasi akademik SD atau yang sederajat." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki kepala tenaga administrasi." }
    ],
    "jawaban": 4
  },
  {
    "id": 5887,
    "bagian_id": 329,
    "nomor": 58,
    "nama": "Kepala tenaga administrasi memiliki pengalaman kerja sebagai tenaga administasi sekolah minimal 4 tahun.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki pengalaman 4 tahun atau lebih." },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki pengalaman 3 tahun." },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki pengalaman 2 tahun." },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki pengalaman 1 tahun." },
      { "id": 5, "nilai" : 0, "nama" : "Memiliki pengalaman kurang dari 1 tahun." }
    ],
    "jawaban": 4
  },
  {
    "id": 5888,
    "bagian_id": 329,
    "nomor": 59,
    "nama": "Tenaga perpustakaan minimum memiliki kualifikasi akademik pendidikan menengah atau yang sederajat.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki kualifikasi akademik Diploma atau sarjana." },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki kualifikasi akademik SMA atau yang sederajat." },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki kualifikasi akademik SMP atau yang sederajat." },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki kualifikasi akademik SD atau yang sederajat." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki tenaga administrasi." }
    ],
    "jawaban": 4
  },
  {
    "id": 5889,
    "bagian_id": 329,
    "nomor": 60,
    "nama": "Tenaga perpustakaan minimum memiliki latar belakang pendidikan sesuai dengan tugasnya.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Berpendidikan menengah dan bersertifikat perpustakaan." },
      { "id": 2, "nilai" : 3, "nama" : "Berpendidikan menengah dan tidak memiliki sertifikat perpustakaan." },
      { "id": 3, "nilai" : 2, "nama" : "Berpendidikan di bawah pendidikan menengah dan bersertifikat perpustakaan." },
      { "id": 4, "nilai" : 1, "nama" : "Berpendidikan di bawah pendidikan menengah dan tidak memiliki sertifikat perpustakaan." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki tenaga perpustakaan." }
    ],
    "jawaban": 4
  },
  {
    "id": 5890,
    "bagian_id": 329,
    "nomor": 61,
    "nama": "Sekolah memiliki petugas layanan khusus.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki 4 jenis atau lebih petugas layanan khusus." },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki 3 jenis petugas layanan khusus." },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki 2 jenis petugas layanan khusus." },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki 1 jenis petugas layanan khusus." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki petugas layanan khusus." }
    ],
    "jawaban": 4
  },
  {
    "id": 5891,
    "bagian_id": 330,
    "nomor": 62,
    "nama": "Sekolah memiliki lahan sesuai dengan ketentuan luas minimal.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki luas lahan sesuai ketentuan." },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki luas lahan 90% - 99% dari ketentuan." },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki luas lahan 80% - 89% dari ketentuan." },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki luas lahan 70% - 79% dari ketentuan." },
      { "id": 5, "nilai" : 0, "nama" : "Memiliki luas lahan di bawah 70% dari ketentuan." }
    ],
    "jawaban": 4
  },
  {
    "id": 5892,
    "bagian_id": 330,
    "nomor": 63,
    "nama": "Lahan sekolah berada di lokasi aman, terhindar dari potensi bahaya yang mengancam kesehatan dan keselamatan jiwa, serta memiliki akses untuk penyelamatan dalam keadaan darurat.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Berada di lokasi aman, terhindar dari potensi bahaya yang mengancam kesehatan dan keselamatan jiwa, serta memiliki akses untuk penyelamatan dalam keadaan darurat." },
      { "id": 2, "nilai" : 3, "nama" : "Berada di lokasi aman, terhindar dari potensi bahaya yang mengancam kesehatan dan keselamatan jiwa, tetapi tidak memiliki akses untuk penyelamatan dalam keadaan darurat." },
      { "id": 3, "nilai" : 2, "nama" : "Berada di lokasi aman, terhindar dari potensi bahaya yang mengancam keselamatan jiwa, tetapi tidak terhindar dari potensi bahaya yang mengancam kesehatan jiwa, serta tidak memiliki akses untuk penyelamatan dalam keadaan darurat." },
      { "id": 4, "nilai" : 1, "nama" : "Berada di lokasi aman, terhindar dari potensi bahaya yang mengancam kesehatan jiwa, tetapi tidak terhindar dari potensi bahaya yang mengancam keselamatan jiwa, serta tidak memiliki akses untuk penyelamatan dalam keadaan darurat." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak berada di lokasi aman." }
    ],
    "jawaban": 4
  },
  {
    "id": 5894,
    "bagian_id": 330,
    "nomor": 65,
    "nama": "Sekolah berada di lokasi yang sesuai dengan peruntukannya, memiliki status hak atas tanah dan ijin pemanfaatan dari pemegang hak atas tanah.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Berada di lokasi yang sesuai dengan peruntukannya, memiliki status hak atas tanah dan ijin pemanfaatan dari pemegang hak atas tanah." },
      { "id": 2, "nilai" : 3, "nama" : "Berada di lokasi yang sesuai dengan peruntukannya dan memiliki status hak atas tanah." },
      { "id": 3, "nilai" : 2, "nama" : "Berada di lokasi yang sesuai dengan peruntukannya dan memiliki ijin pemanfaatan dari pemegang hak atas tanah." },
      { "id": 4, "nilai" : 1, "nama" : "Berada di lokasi yang sesuai dengan peruntukannya." },
      { "id": 5, "nilai" : 0, "nama" : "Berada di lokasi yang tidak sesuai dengan peruntukannya." }
    ],
    "jawaban": 4
  },
  {
    "id": 5895,
    "bagian_id": 330,
    "nomor": 66,
    "nama": "Sekolah memiliki lantai bangunan sesuai dengan ketentuan luas minimal.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Luas lantai bangunan sesuai dengan ketentuan." },
      { "id": 2, "nilai" : 3, "nama" : "Luas lantai bangunan 90% - 99% dari ketentuan." },
      { "id": 3, "nilai" : 2, "nama" : "Luas lantai bangunan 80% - 89% dari ketentuan." },
      { "id": 4, "nilai" : 1, "nama" : "Luas lantai bangunan 70% - 79% dari ketentuan." },
      { "id": 5, "nilai" : 0, "nama" : "Luas lantai bangunan di bawah 70% dari ketentuan." }
    ],
    "jawaban": 4
  },
  {
    "id": 5896,
    "bagian_id": 330,
    "nomor": 67,
    "nama": "Bangunan sekolah memiliki struktur yang stabil dan kukuh serta dilengkapi dengan sistem pencegahan bahaya kebakaran dan petir.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki struktur yang stabil dan kukuh serta dilengkapi dengan sistem pencegahan bahaya kebakaran dan petir." },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki struktur yang stabil dan kukuh tetapi tidak dilengkapi dengan sistem pencegahan bahaya kebakaran." },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki struktur yang stabil tetapi kurang kukuh dan tidak dilengkapi dengan sistem pencegahan bahaya kebakaran." },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki struktur yang tidak stabil dan kurang kukuh tetapi dilengkapi dengan sistem pencegahan bahaya kebakaran." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki struktur yang stabil dan kukuh serta tidak dilengkapi dengan sistem pencegahan bahaya kebakaran dan petir." }
    ],
    "jawaban": 4
  },
  {
    "id": 5897,
    "bagian_id": 330,
    "nomor": 68,
    "nama": "Bangunan sekolah memiliki ventilasi udara dan pencahayaan yang memadai.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki ventilasi udara dan pencahayaan yang memadai." },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki ventilasi udara yang kurang memadai tetapi pencahayaan memadai." },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki ventilasi udara dan pencahayaan kurang memadai." },
      { "id": 4, "nilai" : 1, "nama" : "Tidak memiliki ventilasi udara tetapi memiliki pencahayaan yang kurang memadai." },
      { "id": 5, "nilai" : 0, "nama" : "  Tidak memiliki ventilasi udara dan pencahayaan." }
    ],
    "jawaban": 4
  },
  {
    "id": 5898,
    "bagian_id": 330,
    "nomor": 69,
    "nama": "Bangunan sekolah memiliki sanitasi sebagai persyaratan kesehatan dan kebersihan.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki 4 jenis atau lebih sanitasi." },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki 3 jenis sanitasi." },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki 2 jenis sanitasi." },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki 1 jenis sanitasi." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki sanitasi." }
    ],
    "jawaban": 4
  },
  {
    "id": 5899,
    "bagian_id": 330,
    "nomor": 70,
    "nama": "Bangunan sekolah memiliki akses yang mudah, aman, dan nyaman serta dilengkapi pengarah jalan (akses jalan) bagi siswa berkebutuhan khusus.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki akses yang mudah, aman, dan nyaman serta dilengkapi pengarah jalan." },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki akses yang mudah, aman, dan nyaman tetapi tidak dilengkapi pengarah jalan." },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki akses yang mudah, nyaman dan dilengkapi pengarah jalan tetapi tidak aman." },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki akses yang mudah dan dilengkapi pengarah jalan tetapi tidak aman dan nyaman." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki akses." }
    ],
    "jawaban": 4
  },
  {
    "id": 5900,
    "bagian_id": 330,
    "nomor": 71,
    "nama": "Bangunan sekolah terhindar dari gangguan kebisingan dan getaran serta memiliki penghawaan dan pencahayaan yang baik.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Bangunan terhindar dari gangguan kebisingan dan getaran serta memiliki penghawaan dan pencahayaan yang baik." },
      { "id": 2, "nilai" : 3, "nama" : "Bangunan terhindar dari gangguan kebisingan dan getaran serta memiliki penghawaan yang baik, tetapi tidak memiliki pencahayaan yang baik." },
      { "id": 3, "nilai" : 2, "nama" : "Bangunan terhindar dari gangguan kebisingan dan getaran tetapi tidak memiliki penghawaan dan pencahayaan yang baik." },
      { "id": 4, "nilai" : 1, "nama" : "Bangunan terhindar dari gangguan kebisingan, tetapi ada gangguan getaran serta tidak memiliki penghawaan dan pencahayaan yang baik." },
      { "id": 5, "nilai" : 0, "nama" : "Bangunan tidak dapat terhindar dari gangguan kebisingan dan getaran serta tidak memiliki penghawaan dan pencahayaan yang baik." }
    ],
    "jawaban": 4
  },
  {
    "id": 5901,
    "bagian_id": 330,
    "nomor": 72,
    "nama": "Bangunan sekolah memiliki tanda peringatan bahaya, pintu keluar darurat, dan jalur evakuasi yang dilengkapi penunjuk arah jika terjadi bencana kebakaran dan/atau bencana lainnya.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki tanda peringatan bahaya, pintu keluar darurat, dan jalur evakuasi yang dilengkapi penunjuk arah yang jelas." },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki tanda peringatan bahaya, pintu keluar darurat, dan jalur evakuasi tetapi tidak dilengkapi penunjuk arah yang jelas." },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki tanda peringatan bahaya dan pintu keluar darurat tetapi tidak memiliki jalur evakuasi." },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki tanda peringatan bahaya tetapi tidak memiliki pintu keluar darurat dan jalur evakuasi." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki tanda peringatan bahaya, pintu keluar darurat, dan jalur evakuasi." }
    ],
    "jawaban": 4
  },
  {
    "id": 5902,
    "bagian_id": 330,
    "nomor": 73,
    "nama": "Bangunan sekolah memiliki instalasi listrik dengan daya minimum 900 watt.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki instalasi listrik dengan daya lebih dari 900 watt." },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki instalasi listrik dengan daya 900 watt." },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki instalasi listrik dengan daya 450 watt." },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki instalasi listrik dengan memanfaatkan sumber daya lain yang digunakan secara bersama." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki instalasi listrik." }
    ],
    "jawaban": 4
  },
  {
    "id": 5903,
    "bagian_id": 330,
    "nomor": 74,
    "nama": "Sekolah melakukan pemeliharaan terhadap bangunan secara berkala.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melakukan pemeliharaan ringan dan berat terhadap bangunan secara berkala sesuai ketentuan." },
      { "id": 2, "nilai" : 3, "nama" : "Melakukan pemeliharaan ringan dan berat terhadap bangunan, tetapi waktunya tidak sesuai ketentuan." },
      { "id": 3, "nilai" : 2, "nama" : "Melakukan pemeliharaan ringan tetapi waktunya tidak sesuai ketentuan, dan tidak pernah melakukan pemeliharaan berat." },
      { "id": 4, "nilai" : 1, "nama" : "Melakukan pemeliharaan terhadap bangunan, jika sudah ada bagian bangunan yang rusak berat." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak pernah melakukan pemeliharaan." }
    ],
    "jawaban": 4
  },
  {
    "id": 5904,
    "bagian_id": 330,
    "nomor": 75,
    "nama": "Sekolah memiliki izin mendirikan bangunan dan izin penggunaan bangunan sesuai dengan peruntukannya.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki izin mendirikan bangunan dan izin penggunaan bangunan sesuai dengan peruntukannya sebelum bangunan berdiri." },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki izin mendirikan bangunan, dan memiliki izin penggunaan bangunan sesuai dengan peruntukannya setelah bangunan berdiri." },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki izin mendirikan dan memiliki izin penggunaan bangunan sementara." },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki izin mendirikan tetapi tidak memiliki izin penggunaan bangunan." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki izin mendirikan bangunan dan izin penggunaan bangunan." }
    ],
    "jawaban": 4
  },
  {
    "id": 5905,
    "bagian_id": 330,
    "nomor": 76,
    "nama": "Sekolah memiliki prasarana yang lengkap sesuai ketentuan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki 13 atau lebih jenis prasarana yang dipersyaratkan." },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki 10 - 12 jenis prasarana yang dipersyaratkan." },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki 7 - 9 jenis prasarana yang dipersyaratkan." },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki 4 - 6 jenis prasarana yang dipersyaratkan." },
      { "id": 5, "nilai" : 0, "nama" : "Memiliki 1 - 3 jenis prasarana yang dipersyaratkan." }
    ],
    "jawaban": 4
  },
  {
    "id": 5906,
    "bagian_id": 330,
    "nomor": 77,
    "nama": "Sekolah memiliki ruang kelas dengan jumlah, ukuran, dan sarana sesuai ketentuan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki ruang kelas dengan jumlah, ukuran, dan sarana sesuai ketentuan." },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki ruang kelas dengan jumlah dan ukuran tidak sesuai ketentuan tetapi memiliki sarana sesuai ketentuan." },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki ruang kelas dengan jumlah dan ukuran sesuai ketentuan tetapi memiliki sarana tidak sesuai ketentuan." },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki ruang kelas dengan ukuran, jumlah, dan sarana tidak sesuai ketentuan." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki ruang kelas atau gedung sendiri." }
    ],
    "jawaban": 4
  },
  {
    "id": 5907,
    "bagian_id": 330,
    "nomor": 78,
    "nama": "Sekolah memiliki ruang perpustakaan dengan luas dan sarana sesuai ketentuan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki ruang perpustakaan dengan luas dan sarana sesuai ketentuan." },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki ruang perpustakaan dengan luas tidak sesuai ketentuan tetapi dengan sarana sesuai ketentuan." },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki ruang perpustakaan dengan luas sesuai ketentuan tetapi dengan sarana tidak sesuai ketentuan." },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki ruang perpustakaan dengan luas dan sarana tidak sesuai ketentuan." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki ruang perpustakaan." }
    ],
    "jawaban": 4
  },
  {
    "id": 5908,
    "bagian_id": 330,
    "nomor": 79,
    "nama": "Perpustakaan sekolah memiliki berbagai koleksi buku dengan jenis dan rasio sesuai ketentuan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki koleksi berbagai buku dengan jenis dan rasio sesuai ketentuan." },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki koleksi dengan jenis buku sesuai ketentuan tetapi memiliki rasio buku tidak sesuai ketentuan." },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki koleksi dengan jenis buku tidak sesuai ketentuan tetapi memiliki rasio buku sesuai ketentuan." },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki koleksi berbagai buku dengan jenis dan rasio tidak sesuai ketentuan." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki koleksi berbagai buku." }
    ],
    "jawaban": 4
  },
  {
    "id": 5909,
    "bagian_id": 330,
    "nomor": 80,
    "nama": "<strong>Khusus untuk jenis ketunaan A, B, D, dan E:</strong> <br >Sekolah memiliki buku teks pembelajaran dengan jumlah yang memadai. <br ><br> <strong>Khusus untuk jenis ketunaan C, C1, D1, dan G: </strong> <br > Sekolah memiliki buku pendukung pembelajaran.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "<strong>Khusus untuk jenis ketunaan A, B, D, dan E:</strong> <br > Memiliki buku teks pembelajaran dengan rasio 1 buku teks/ mata pelajaran/siswa. <br ><br>  <strong>Khusus untuk jenis ketunaan C, C1, D1, dan G: </strong> <br > Memiliki buku pendukung pembelajaran yang disusun oleh guru yang bersangkutan" },
      { "id": 2, "nilai" : 3, "nama" : "<strong>Khusus untuk jenis ketunaan A, B, D, dan E:</strong> <br > Memiliki buku teks pembelajaran dengan rasio 1 buku teks/ mata pelajaran untuk 2 siswa. <br ><br> <strong>Khusus untuk jenis ketunaan C, C1, D1, dan G: </strong><br> Memiliki buku pendukung pembelajaran yang disusun oleh tim guru sekolah." },
      { "id": 3, "nilai" : 2, "nama" : "<strong>Khusus untuk jenis ketunaan A, B, D, dan E:</strong> <br >  Memiliki buku teks pembelajaran dengan rasio 1 buku teks/ mata pelajaran untuk 3 siswa. <br ><br> <strong>Khusus untuk jenis ketunaan C, C1, D1, dan G: </strong> <br>Memiliki buku pendukung pembelajaran yang dimodifikasi dari sekolah lain" },
      { "id": 4, "nilai" : 1, "nama" : "<strong>Khusus untuk jenis ketunaan A, B, D, dan E:</strong> <br > Memiliki buku teks pembelajaran dengan rasio 1 buku teks/ mata pelajaran untuk 4 siswa atau lebih. <br ><br> <strong>Khusus untuk jenis ketunaan C, C1, D1, dan G: </strong> <br>Memiliki buku pendukung pembelajaran yang diperoleh dari sekolah lain" },
      { "id": 5, "nilai" : 0, "nama" : "<strong>Khusus untuk jenis ketunaan A, B, D, dan E:</strong> <br > Tidak memiliki buku teks pembelajaran. <br ><br> <strong>Khusus untuk jenis ketunaan C, C1, D1, dan G: </strong> <br>Tidak memiliki buku pendukung pembelajaran" }
    ],
    "jawaban": 4
  },
  {
    "id": 5910,
    "bagian_id": 330,
    "nomor": 81,
    "nama": "Sekolah memiliki ruang pembelajaran khusus sesuai jenis ketunaan yang dikelola, dengan luas dan sarana sesuai ketentuan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki ruang pembelajaran khusus dengan luas dan sarana sesuai ketentuan." },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki ruang pembelajaran khusus dengan luas tidak sesuai ketentuan tetapi dengan sarana sesuai ketentuan." },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki ruang pembelajaran khusus dengan luas sesuai ketentuan tetapi dengan sarana tidak sesuai ketentuan." },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki ruang pembelajaran khusus dengan luas dan sarana tidak sesuai ketentuan." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki ruang pembelajaran khusus." }
    ],
    "jawaban": 4
  },
  {
    "id": 5911,
    "bagian_id": 330,
    "nomor": 82,
    "nama": "Sekolah memiliki ruang pimpinan dengan luas dan sarana sesuai ketentuan.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki ruang pimpinan dengan luas dan sarana sesuai ketentuan." },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki ruang pimpinan dengan luas tidak sesuai ketentuan tetapi dengan sarana sesuai ketentuan." },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki ruang pimpinan dengan luas sesuai ketentuan tetapi dengan sarana tidak sesuai ketentuan." },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki ruang pimpinan dengan luas dan sarana tidak sesuai ketentuan." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki ruang pimpinan." }
    ],
    "jawaban": 4
  },
  {
    "id": 5912,
    "bagian_id": 330,
    "nomor": 83,
    "nama": "Sekolah memiliki ruang guru dengan luas dan sarana sesuai ketentuan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki ruang guru dengan luas dan sarana sesuai ketentuan." },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki ruang guru dengan luas tidak sesuai ketentuan tetapi dengan sarana sesuai ketentuan." },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki ruang guru dengan luas sesuai ketentuan tetapi dengan sarana tidak sesuai ketentuan." },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki ruang guru dengan luas dan sarana tidak sesuai ketentuan." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki ruang guru." }
    ],
    "jawaban": 4
  },
  {
    "id": 5913,
    "bagian_id": 330,
    "nomor": 84,
    "nama": "Sekolah memiliki ruang tata usaha dengan luas dan sarana sesuai ketentuan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki ruang tata usaha dengan luas dan sarana sesuai ketentuan." },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki ruang tata usaha dengan luas tidak sesuai ketentuan tetapi dengan sarana sesuai ketentuan." },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki ruang tata usaha dengan luas sesuai ketentuan tetapi dengan sarana tidak sesuai ketentuan." },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki ruang tata usaha dengan luas dan sarana tidak sesuai ketentuan." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki ruang tata usaha." }
    ],
    "jawaban": 4
  },
  {
    "id": 5914,
    "bagian_id": 330,
    "nomor": 85,
    "nama": "Sekolah memiliki tempat beribadah bagi warga sekolah dengan luas dan sarana sesuai ketentuan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki tempat beribadah dengan luas dan sarana sesuai ketentuan." },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki tempat beribadah dengan luas sesuai ketentuan tetapi dengan sarana tidak sesuai ketentuan." },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki tempat beribadah dengan luas tidak sesuai ketentuan tetapi dengan sarana sesuai ketentuan." },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki tempat beribadah dengan luas dan sarana tidak sesuai ketentuan." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki tempat beribadah." }
    ],
    "jawaban": 4
  },
  {
    "id": 5915,
    "bagian_id": 330,
    "nomor": 86,
    "nama": "Sekolah memiliki ruang UKS dengan luas dan sarana sesuai ketentuan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki ruang UKS dengan luas dan sarana sesuai ketentuan." },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki ruang UKS dengan luas tidak sesuai ketentuan tetapi dengan sarana sesuai ketentuan." },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki ruang UKS dengan luas sesuai ketentuan tetapi dengan sarana tidak sesuai ketentuan." },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki ruang UKS dengan luas dan sarana tidak sesuai ketentuan." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki ruang UKS." }
    ],
    "jawaban": 4
  },
  {
    "id": 5916,
    "bagian_id": 330,
    "nomor": 87,
    "nama": "Sekolah memiliki ruang konseling/asesmen dengan luas dan sarana sesuai ketentuan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki ruang konseling/asesmen dengan luas dan sarana sesuai ketentuan." },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki ruang konseling/asesmen dengan luas tidak sesuai ketentuan tetapi dengan sarana sesuai ketentuan." },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki ruang konseling/asesmen dengan luas sesuai ketentuan tetapi dengan sarana tidak sesuai ketentuan." },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki ruang konseling/asesmen dengan luas dan sarana tidak sesuai ketentuan." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki ruang konseling/asesmen." }
    ],
    "jawaban": 4
  },
  {
    "id": 5917,
    "bagian_id": 330,
    "nomor": 88,
    "nama": "Sekolah memiliki jamban dengan jumlah, ukuran, dan sarana sesuai ketentuan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki jamban dengan jumlah, ukuran, dan sarana sesuai ketentuan." },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki jamban dengan jumlah dan ukuran tidak sesuai ketentuan tetapi dengan sarana sesuai ketentuan." },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki jamban dengan jumlah dan ukuran sesuai ketentuan tetapi dengan sarana tidak sesuai ketentuan." },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki jamban dengan jumlah, ukuran, dan sarana tidak sesuai ketentuan." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki jamban." }
    ],
    "jawaban": 4
  },
  {
    "id": 5918,
    "bagian_id": 330,
    "nomor": 89,
    "nama": "Sekolah memiliki gudang dengan luas dan sarana sesuai ketentuan.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki gudang dengan luas dan sarana sesuai ketentuan." },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki gudang dengan luas sesuai ketentuan tetapi dengan sarana tidak sesuai ketentuan." },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki gudang dengan luas tidak sesuai ketentuan tetapi dengan sarana sesuai ketentuan." },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki gudang dengan luas dan sarana tidak sesuai ketentuan." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki gudang." }
    ],
    "jawaban": 4
  },
  {
    "id": 5919,
    "bagian_id": 330,
    "nomor": 90,
    "nama": "Sekolah memiliki ruang sirkulasi dengan luas dan kualitas sesuai ketentuan.",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki ruang sirkulasi dengan luas dan kualitas sesuai ketentuan." },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki ruang sirkulasi dengan luas tidak sesuai ketentuan tetapi dengan kualitas sesuai ketentuan." },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki ruang sirkulasi dengan luas sesuai ketentuan tetapi dengan kualitas tidak ketentuan." },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki ruang sirkulasi dengan luas dan kualitas tidak sesuai ketentuan." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki ruang sirkulasi." }
    ],
    "jawaban": 4
  },
  {
    "id": 5920,
    "bagian_id": 330,
    "nomor": 91,
    "nama": "Sekolah memiliki tempat bermain/berolahraga dengan ukuran dan sarana sesuai ketentuan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki tempat bermain/berolahraga dengan ukuran dan sarana sesuai ketentuan." },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki tempat bermain/berolahraga dengan ukuran tidak sesuai ketentuan tetapi memiliki sarana sesuai ketentuan." },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki tempat bermain/berolahraga dengan ukuran sesuai ketentuan tetapi memiliki sarana tidak sesuai ketentuan." },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki tempat bermain/berolahraga dengan ukuran dan sarana tidak sesuai ketentuan." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki tempat bermain/berolahraga." }
    ],
    "jawaban": 4
  },
  {
    "id": 5922,
    "bagian_id": 331,
    "nomor": 93,
    "nama": "Sekolah telah merumuskan, menetapkan, dan mensosialisasikan misi lembaga.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Merumuskan, menetapkan, dan mensosialisasikan secara terus menerus misi dalam berbagai kesempatan." },
      { "id": 2, "nilai" : 3, "nama" : "Merumuskan, menetapkan, dan sering mensosialisasikan misi lembaga." },
      { "id": 3, "nilai" : 2, "nama" : "Merumuskan, menetapkan, dan kadang-kadang mensosialisasikan misi lembaga." },
      { "id": 4, "nilai" : 1, "nama" : "Merumuskan, menetapkan, dan tidak pernah mensosialisasikan misi lembaga." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki misi lembaga." }
    ],
    "jawaban": 4
  },
  {
    "id": 5923,
    "bagian_id": 331,
    "nomor": 94,
    "nama": "Sekolah telah merumuskan, menetapkan, dan mensosialisasikan tujuan lembaga.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Merumuskan dan menetapkan tujuan, mudah dipahami, sering disosialisasikan, dan dan dipasang pada tempat yang mudah dibaca" },
      { "id": 2, "nilai" : 3, "nama" : "Merumuskan dan menetapkan tujuan, mudah dipahami dan sering disosialisasikan" },
      { "id": 3, "nilai" : 2, "nama" : "Merumuskan dan menetapkan tujuan, mudah dipahami tetapi tidak disosialisasikan" },
      { "id": 4, "nilai" : 1, "nama" : "Merumuskan dan menetapkan tujuan, sulit dipahami dan tidak disosialisasikan" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak merumuskan dan menetapkan tujuan" }
    ],
    "jawaban": 4
  },
  {
    "id": 5924,
    "bagian_id": 331,
    "nomor": 95,
    "nama": "Sekolah memiliki rencana kerja jangka menengah (RKJM) dan rencana kerja tahunan (RKT) serta disosialisasikan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki RKJM dan RKT serta keduanya sudah disosialisasikan." },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki RKJM dan RKT serta salah satunya sudah disosialisasikan." },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki RKJM atau RKT dan sudah disosialisasikan." },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki RKJM atau RKT tetapi belum disosialisasikan." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki RKJM dan RKT." }
    ],
    "jawaban": 4
  },
  {
    "id": 5925,
    "bagian_id": 331,
    "nomor": 96,
    "nama": "Sekolah memiliki pedoman yang mengatur berbagai aspek pengelolaan secara tertulis yang mudah dipahami oleh pihak-pihak terkait.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki 7 - 8 dokumen tertulis tentang aspek pengelolaan." },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki 5 - 6 dokumen tertulis tentang aspek pengelolaan." },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki 3 - 4 dokumen tertulis tentang aspek pengelolaan." },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki 1 - 2 dokumen tertulis tentang aspek pengelolaan." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki dokumen tertulis tentang aspek pengelolaan." }
    ],
    "jawaban": 4
  },
  {
    "id": 5926,
    "bagian_id": 331,
    "nomor": 97,
    "nama": "Sekolah memiliki struktur organisasi dengan uraian tugas yang jelas.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki struktur organisasi dengan uraian tugas yang jelas, yang dipajang di dinding." },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki struktur organisasi dengan uraian tugas yang jelas." },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki struktur organisasi dengan uraian tugas, tetapi tidak jelas." },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki struktur organisasi tetapi tidak ada uraian tugas." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki struktur organisasi." }
    ],
    "jawaban": 4
  },
  {
    "id": 5927,
    "bagian_id": 331,
    "nomor": 98,
    "nama": "Sekolah melaksanakan kegiatan sesuai rencana kerja tahunan (RKT).",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "76% - 100% kegiatan dilaksanakan sesuai RKT." },
      { "id": 2, "nilai" : 3, "nama" : "51% - 75% kegiatan dilaksanakan sesuai RKT." },
      { "id": 3, "nilai" : 2, "nama" : "26% - 50% kegiatan dilaksanakan sesuai RKT." },
      { "id": 4, "nilai" : 1, "nama" : "1% - 25% kegiatan dilaksanakan sesuai RKT." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melaksanakan kegiatan sesuai RKT." }
    ],
    "jawaban": 4
  },
  {
    "id": 5928,
    "bagian_id": 331,
    "nomor": 99,
    "nama": "Sekolah melaksanakan kegiatan kesiswaan.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melaksanakan 4 atau lebih kegiatan kesiswaan." },
      { "id": 2, "nilai" : 3, "nama" : "Melaksanakan 3 kegiatan kesiswaan." },
      { "id": 3, "nilai" : 2, "nama" : "Melaksanakan 2 kegiatan kesiswaan." },
      { "id": 4, "nilai" : 1, "nama" : "Melaksanakan 1 kegiatan kesiswaan." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melaksanakan kegiatan kesiswaan." }
    ],
    "jawaban": 4
  },
  {
    "id": 5929,
    "bagian_id": 331,
    "nomor": 100,
    "nama": "Sekolah melaksanakan kegiatan pengembangan kurikulum dan pembelajaran.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melaksanakan 4 atau lebih kegiatan pengembangan kurikulum dan pembelajaran" },
      { "id": 2, "nilai" : 3, "nama" : "Melaksanakan 3 kegiatan pengembangan kurikulum dan pembelajaran" },
      { "id": 3, "nilai" : 2, "nama" : "Melaksanakan 2 kegiatan pengembangan kurikulum dan pembelajaran" },
      { "id": 4, "nilai" : 1, "nama" : "Melaksanakan 1 kegiatan pengembangan kurikulum dan pembelajaran" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melaksanakan kegiatan pengembangan kurikulum dan pembelajaran" }
    ],
    "jawaban": 4
  },
  {
    "id": 5930,
    "bagian_id": 331,
    "nomor": 101,
    "nama": "Sekolah melaksanakan program pendayagunaan pendidik dan tenaga kependidikan.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melaksanakan 4 atau lebih program pendayagunaan." },
      { "id": 2, "nilai" : 3, "nama" : "Melaksanakan 3 program pendayagunaan." },
      { "id": 3, "nilai" : 2, "nama" : "Melaksanakan 2 program pendayagunaan." },
      { "id": 4, "nilai" : 1, "nama" : "Melaksanakan 1 program pendayagunaan." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melaksanakan program pendayagunaan." }
    ],
    "jawaban": 4
  },
  {
    "id": 5931,
    "bagian_id": 331,
    "nomor": 102,
    "nama": "Sekolah mengelola program sarana dan prasarana pembelajaran.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Mengelola 4 atau lebih program sarana dan prasarana." },
      { "id": 2, "nilai" : 3, "nama" : "Mengelola 3 program sarana dan prasarana." },
      { "id": 3, "nilai" : 2, "nama" : "Mengelola 2 program sarana dan prasarana." },
      { "id": 4, "nilai" : 1, "nama" : "Mengelola 1 program sarana dan prasarana." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak mengelola program sarana dan prasarana." }
    ],
    "jawaban": 4
  },
  {
    "id": 5932,
    "bagian_id": 331,
    "nomor": 103,
    "nama": "Sekolah mengelola program pembiayaan pendidikan.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki 4 program pengelolaan pembiayaan." },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki 3 program pengelolaan pembiayaan." },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki 2 program pengelolaan pembiayaan." },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki 1 program pengelolaan pembiayaan." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki program pengelolaan pembiayaan." }
    ],
    "jawaban": 4
  },
  {
    "id": 5933,
    "bagian_id": 331,
    "nomor": 104,
    "nama": "Sekolah melaksanakan kegiatan yang dapat menciptakan suasana, iklim, dan lingkungan pembelajaran yang kondusif.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melaksanakan 4 atau lebih kegiatan." },
      { "id": 2, "nilai" : 3, "nama" : "Melaksanakan 3 kegiatan." },
      { "id": 3, "nilai" : 2, "nama" : "Melaksanakan 2 kegiatan." },
      { "id": 4, "nilai" : 1, "nama" : "Melaksanakan 1 kegiatan." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melaksanakan kegiatan." }
    ],
    "jawaban": 4
  },
  {
    "id": 5934,
    "bagian_id": 331,
    "nomor": 105,
    "nama": "Sekolah melaksanakan berbagai kegiatan yang melibatkan masyarakat dan membangun kemitraan dengan lembaga lain yang relevan dalam pengelolaan pendidikan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melaksanakan 4 atau lebih kegiatan yang melibatkan masyarakat." },
      { "id": 2, "nilai" : 3, "nama" : "Melaksanakan 3 kegiatan yang melibatkan masyarakat." },
      { "id": 3, "nilai" : 2, "nama" : "Melaksanakan 2 kegiatan yang melibatkan masyarakat." },
      { "id": 4, "nilai" : 1, "nama" : "Melaksanakan 1 kegiatan yang melibatkan masyarakat." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melaksanakan kegiatan yang melibatkan masyarakat." }
    ],
    "jawaban": 4
  },
  {
    "id": 5935,
    "bagian_id": 331,
    "nomor": 106,
    "nama": "Sekolah melaksanakan program pengawasan yang disosialisasikan kepada pendidik dan tenaga kependidikan.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melaksanakan 4 atau lebih program pengawasan." },
      { "id": 2, "nilai" : 3, "nama" : "Melaksanakan 3 program pengawasan." },
      { "id": 3, "nilai" : 2, "nama" : "Melaksanakan 2 program pengawasan." },
      { "id": 4, "nilai" : 1, "nama" : "Melaksanakan 1 program pengawasan." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melaksanakan program pengawasan." }
    ],
    "jawaban": 4
  },
  {
    "id": 5936,
    "bagian_id": 331,
    "nomor": 107,
    "nama": "Sekolah melaksanakan kegiatan evaluasi diri.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melaksanakan evaluasi diri minimum sekali dalam 1 semester." },
      { "id": 2, "nilai" : 3, "nama" : "Melaksanakan evaluasi diri sekali dalam 2 semester." },
      { "id": 3, "nilai" : 2, "nama" : "Melaksanakan evaluasi diri sekali dalam 3 semester." },
      { "id": 4, "nilai" : 1, "nama" : "Melaksanakan evaluasi diri sekali dalam 4 semester." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melaksanakan evaluasi diri." }
    ],
    "jawaban": 4
  },
  {
    "id": 5937,
    "bagian_id": 331,
    "nomor": 108,
    "nama": "Sekolah melaksanakan program evaluasi kinerja pendidik dan tenaga kependidikan.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melaksanakan 4 atau lebih program evaluasi kinerja pendidik dan tenaga kependidikan." },
      { "id": 2, "nilai" : 3, "nama" : "Melaksanakan 3 program evaluasi kinerja pendidik dan tenaga kependidikan." },
      { "id": 3, "nilai" : 2, "nama" : "Melaksanakan 2 program evaluasi kinerja pendidik dan tenaga kependidikan." },
      { "id": 4, "nilai" : 1, "nama" : "Melaksanakan 1 program evaluasi kinerja pendidik dan tenaga kependidikan." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melakukan program evaluasi kinerja pendidik dan tenaga kependidikan." }
    ],
    "jawaban": 4
  },
  {
    "id": 5938,
    "bagian_id": 331,
    "nomor": 109,
    "nama": "Sekolah mempersiapkan diri untuk akreditasi.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Mempersiapkan 4 komponen persiapan akreditasi." },
      { "id": 2, "nilai" : 3, "nama" : "Mempersiapkan 3 komponen persiapan akreditasi." },
      { "id": 3, "nilai" : 2, "nama" : "Mempersiapkan 2 komponen persiapan akreditasi." },
      { "id": 4, "nilai" : 1, "nama" : "Mempersiapkan 1 komponen persiapan akreditasi." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak mempersiapkan persiapan komponen akreditasi." }
    ],
    "jawaban": 4
  },
  {
    "id": 5939,
    "bagian_id": 331,
    "nomor": 110,
    "nama": "Sekolah memiliki struktur kepemimpinan sesuai standar pendidik dan tenaga kependidikan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki kepala sekolah dan lebih dari 1 guru yang ditugaskan untuk melakukan fungsi sebagai wakil kepala sekolah." },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki kepala sekolah dan 1 guru yang ditugaskan untuk melakukan fungsi sebagai wakil kepala sekolah." },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki kepala sekolah tetapi tidak memiliki wakil kepala sekolah." },
      { "id": 4, "nilai" : 1, "nama" : "Tidak memiliki kepala sekolah tetapi hanya memiliki koordinator." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki kepala sekolah maupun koordinator." }
    ],
    "jawaban": 4
  },
  {
    "id": 5940,
    "bagian_id": 331,
    "nomor": 111,
    "nama": "Sekolah memiliki sistem informasi manajemen untuk mendukung administrasi pendidikan.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki sistem informasi, fasilitas, dan petugas khusus." },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki sistem informasi dan fasilitas, tetapi tidak memiliki petugas khusus." },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki sistem informasi dan petugas khusus, tetapi tidak memiliki fasilitas." },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki sistem informasi tetapi tidak memiliki fasilitas dan/ atau petugas khusus." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki sistem informasi." }
    ],
    "jawaban": 4
  },
  {
    "id": 5942,
    "bagian_id": 332,
    "nomor": 113,
    "nama": "Sekolah membelanjakan alokasi biaya untuk pengembangan pendidik dan tenaga kependidikan (PTK) berdasarkan Rencana Kegiatan dan Anggaran Sekolah (RKAS).",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Membelanjakan biaya 91% - 100% dari mata anggaran pengembangan PTK dalam RKAS." },
      { "id": 2, "nilai" : 3, "nama" : "Membelanjakan biaya 81% - 90% dari mata anggaran pengembangan PTK dalam RKAS." },
      { "id": 3, "nilai" : 2, "nama" : "Membelanjakan biaya 71% - 80% dari mata anggaran pengembangan PTK dalam RKAS." },
      { "id": 4, "nilai" : 1, "nama" : "Membelanjakan biaya 61% - 70% dari mata anggaran pengembangan PTK dalam RKAS." },
      { "id": 5, "nilai" : 0, "nama" : "Membelanjakan biaya di bawah 61% dari mata anggaran pengembangan PTK dalam RKAS." }
    ],
    "jawaban": 4
  },
  {
    "id": 5943,
    "bagian_id": 332,
    "nomor": 114,
    "nama": "Sekolah memiliki modal kerja untuk membiayai seluruh kebutuhan pendidikan selama satu tahun terakhir.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki 91% - 100% modal kerja." },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki 81% - 90% modal kerja." },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki 71% - 80% modal kerja." },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki 61% - 70% modal kerja." },
      { "id": 5, "nilai" : 0, "nama" : "Memiliki kurang dari 61% modal kerja." }
    ],
    "jawaban": 4
  },
  {
    "id": 5944,
    "bagian_id": 332,
    "nomor": 115,
    "nama": "Sekolah membayar gaji, insentif, transport, dan tunjangan lain bagi guru pada tahun berjalan.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Membayar gaji, insentif, transport, dan tunjangan lain." },
      { "id": 2, "nilai" : 3, "nama" : "Hanya membayar gaji, insentif, dan transport." },
      { "id": 3, "nilai" : 2, "nama" : "Hanya membayar gaji dan insentif." },
      { "id": 4, "nilai" : 1, "nama" : "Hanya membayar gaji." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak membayar gaji guru" }
    ],
    "jawaban": 4
  },
  {
    "id": 5945,
    "bagian_id": 332,
    "nomor": 116,
    "nama": "Sekolah membayar gaji, insentif, transport, dan tunjangan lain bagi tenaga kependidikan pada tahun berjalan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Membayar gaji, insentif, transport, dan tunjangan lain." },
      { "id": 2, "nilai" : 3, "nama" : "Hanya membayar gaji, insentif, dan transport." },
      { "id": 3, "nilai" : 2, "nama" : "Hanya membayar gaji dan insentif." },
      { "id": 4, "nilai" : 1, "nama" : "Hanya membayar gaji." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak membayar gaji tenaga kependidikan." }
    ],
    "jawaban": 4
  },
  {
    "id": 5946,
    "bagian_id": 332,
    "nomor": 117,
    "nama": "Sekolah membelanjakan dana untuk menunjang pelaksanaan kegiatan pembelajaran selama tiga tahun terakhir.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Membelanjakan dana 91% - 100% dari alokasi anggaran." },
      { "id": 2, "nilai" : 3, "nama" : "Membelanjakan dana 81% - 90% dari alokasi anggaran." },
      { "id": 3, "nilai" : 2, "nama" : "Membelanjakan dana 71% - 80% dari alokasi anggaran." },
      { "id": 4, "nilai" : 1, "nama" : "Membelanjakan dana 61% - 70% dari alokasi anggaran." },
      { "id": 5, "nilai" : 0, "nama" : "Membelanjakan dana di bawah 61% dari alokasi anggaran." }
    ],
    "jawaban": 4
  },
  {
    "id": 5947,
    "bagian_id": 332,
    "nomor": 118,
    "nama": "Sekolah mengalokasikan dana untuk kegiatan kesiswaan selama satu tahun terakhir.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Membelanjakan dana 91% - 100% dari alokasi anggaran." },
      { "id": 2, "nilai" : 3, "nama" : "Membelanjakan dana 81% - 90% dari alokasi anggaran." },
      { "id": 3, "nilai" : 2, "nama" : "Membelanjakan dana 71% - 80% dari alokasi anggaran." },
      { "id": 4, "nilai" : 1, "nama" : "Membelanjakan dana 61% - 70% dari alokasi anggaran." },
      { "id": 5, "nilai" : 0, "nama" : "Membelanjakan dana di bawah 61% dari alokasi anggaran." }
    ],
    "jawaban": 4
  },
  {
    "id": 5948,
    "bagian_id": 332,
    "nomor": 119,
    "nama": "Sekolah menyediakan biaya pengadaan alat tulis untuk kegiatan pembelajaran selama satu tahun terakhir.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Membelanjakan biaya 91% - 100% dari alokasi anggaran." },
      { "id": 2, "nilai" : 3, "nama" : "Membelanjakan biaya 81% - 90% dari alokasi anggaran." },
      { "id": 3, "nilai" : 2, "nama" : "Membelanjakan biaya 71% - 80% dari alokasi anggaran." },
      { "id": 4, "nilai" : 1, "nama" : "Membelanjakan biaya 61% - 70% dari alokasi anggaran." },
      { "id": 5, "nilai" : 0, "nama" : "Membelanjakan biaya di bawah 61% dari alokasi anggaran." }
    ],
    "jawaban": 4
  },
  {
    "id": 5949,
    "bagian_id": 332,
    "nomor": 120,
    "nama": "Sekolah menyediakan biaya pengadaan bahan habis pakai untuk kegiatan pembelajaran selama satu tahun terakhir.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Membelanjakan biaya 91% - 100% dari alokasi anggaran." },
      { "id": 2, "nilai" : 3, "nama" : "Membelanjakan biaya 81% - 90% dari alokasi anggaran." },
      { "id": 3, "nilai" : 2, "nama" : "Membelanjakan biaya 71% - 80% dari alokasi anggaran." },
      { "id": 4, "nilai" : 1, "nama" : "Membelanjakan biaya 61% - 70% dari alokasi anggaran." },
      { "id": 5, "nilai" : 0, "nama" : "Membelanjakan biaya di bawah 61% dari alokasi anggaran." }
    ],
    "jawaban": 4
  },
  {
    "id": 5950,
    "bagian_id": 332,
    "nomor": 121,
    "nama": "Sekolah menyediakan biaya pengadaan alat habis pakai untuk kegiatan pembelajaran selama satu tahun terakhir.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Membelanjakan biaya 91% - 100% dari alokasi anggaran." },
      { "id": 2, "nilai" : 3, "nama" : "Membelanjakan biaya 81% - 90% dari alokasi anggaran." },
      { "id": 3, "nilai" : 2, "nama" : "Membelanjakan biaya 71% - 80% dari alokasi anggaran." },
      { "id": 4, "nilai" : 1, "nama" : "Membelanjakan biaya 61% - 70% dari alokasi anggaran." },
      { "id": 5, "nilai" : 0, "nama" : "Membelanjakan biaya di bawah 61% dari alokasi anggaran." }
    ],
    "jawaban": 4
  },
  {
    "id": 5951,
    "bagian_id": 332,
    "nomor": 122,
    "nama": "Sekolah menyediakan biaya pengadaan kegiatan rapat selama satu tahun terakhir.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Membelanjakan biaya 91% - 100% dari alokasi anggaran." },
      { "id": 2, "nilai" : 3, "nama" : "Membelanjakan biaya 81% - 90% dari alokasi anggaran." },
      { "id": 3, "nilai" : 2, "nama" : "Membelanjakan biaya 71% - 80% dari alokasi anggaran." },
      { "id": 4, "nilai" : 1, "nama" : "Membelanjakan biaya 61% - 70% dari alokasi anggaran." },
      { "id": 5, "nilai" : 0, "nama" : "Membelanjakan biaya di bawah 61% dari alokasi anggaran." }
    ],
    "jawaban": 4
  },
  {
    "id": 5952,
    "bagian_id": 332,
    "nomor": 123,
    "nama": "Sekolah menyediakan biaya pengadaan transport dan perjalanan dinas selama satu tahun terakhir.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Membelanjakan biaya 91% - 100% dari alokasi anggaran." },
      { "id": 2, "nilai" : 3, "nama" : "Membelanjakan biaya 81% - 90% dari alokasi anggaran." },
      { "id": 3, "nilai" : 2, "nama" : "Membelanjakan biaya 71% - 80% dari alokasi anggaran." },
      { "id": 4, "nilai" : 1, "nama" : "Membelanjakan biaya 61% - 70% dari alokasi anggaran." },
      { "id": 5, "nilai" : 0, "nama" : "Membelanjakan biaya di bawah 61% dari alokasi anggaran." }
    ],
    "jawaban": 4
  },
  {
    "id": 5953,
    "bagian_id": 332,
    "nomor": 124,
    "nama": "Sekolah menyediakan biaya penggandaan soal-soal ulangan/ujian selama satu tahun terakhir.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Membelanjakan biaya 91% - 100% dari alokasi anggaran." },
      { "id": 2, "nilai" : 3, "nama" : "Membelanjakan biaya 81% - 90% dari alokasi anggaran." },
      { "id": 3, "nilai" : 2, "nama" : "Membelanjakan biaya 71% - 80% dari alokasi anggaran." },
      { "id": 4, "nilai" : 1, "nama" : "Membelanjakan biaya 61% - 70% dari alokasi anggaran." },
      { "id": 5, "nilai" : 0, "nama" : "Membelanjakan biaya di bawah 61% dari alokasi anggaran." }
    ],
    "jawaban": 4
  },
  {
    "id": 5954,
    "bagian_id": 332,
    "nomor": 125,
    "nama": "Sekolah menyediakan biaya pengadaan daya dan jasa selama satu tahun terakhir.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Membelanjakan biaya 91% - 100% dari alokasi anggaran." },
      { "id": 2, "nilai" : 3, "nama" : "Membelanjakan biaya 81% - 90% dari alokasi anggaran." },
      { "id": 3, "nilai" : 2, "nama" : "Membelanjakan biaya 71% - 80% dari alokasi anggaran." },
      { "id": 4, "nilai" : 1, "nama" : "Membelanjakan biaya 61% - 70% dari alokasi anggaran." },
      { "id": 5, "nilai" : 0, "nama" : "Membelanjakan biaya di bawah 61% dari alokasi anggaran." }
    ],
    "jawaban": 4
  },
  {
    "id": 5955,
    "bagian_id": 332,
    "nomor": 126,
    "nama": "Sekolah menyediakan biaya untuk mendukung kegiatan operasional tidak langsung selama tiga tahun terakhir.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Membelanjakan biaya 91% - 100% dari alokasi anggaran." },
      { "id": 2, "nilai" : 3, "nama" : "Membelanjakan biaya 81% - 90% dari alokasi anggaran." },
      { "id": 3, "nilai" : 2, "nama" : "Membelanjakan biaya 71% - 80% dari alokasi anggaran." },
      { "id": 4, "nilai" : 1, "nama" : "Membelanjakan biaya 61% - 70% dari alokasi anggaran." },
      { "id": 5, "nilai" : 0, "nama" : "Membelanjakan biaya di bawah 61% dari alokasi anggaran." }
    ],
    "jawaban": 4
  },
  {
    "id": 5956,
    "bagian_id": 332,
    "nomor": 127,
    "nama": "Sumbangan pendidikan atau dana dari masyarakat digunakan untuk kesejahteraan dan peningkatan mutu pendidikan sekolah.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Digunakan untuk kesejahteraan warga sekolah, pengembangan guru dan tenaga kependidikan, sarana prasarana, pengembangan kurikulum dan kegiatan pembelajaran, serta kegiatan ketatausahaan" },
      { "id": 2, "nilai" : 3, "nama" : "Digunakan untuk kesejahteraan warga sekolah, pengembangan guru dan tenaga kependidikan, sarana prasarana, dan pengembangan kurikulum dan kegiatan pembelajaran, tetapi tidak untuk kegiatan ketatausahaan" },
      { "id": 3, "nilai" : 2, "nama" : "Digunakan untuk kesejahteraan warga sekolah, pengembangan guru dan tenaga kependidikan, dan sarana prasarana, tetapi tidak untuk pengembangan serta kegiatan ketatausahaan kurikulum dan kegiatan pembelajaran" },
      { "id": 4, "nilai" : 1, "nama" : "Digunakan untuk kesejahteraan warga sekolah serta pengembangan guru dan tenaga kependidikan, tetapi tidak untuk sarana dan prasarana, pengembangan kurikulum dan pembelajaran, serta kegiatan ketatausahaan" },
      { "id": 5, "nilai" : 0, "nama" : "Hanya digunakan untuk kesejahteraan warga sekolah" }
    ],
    "jawaban": 4
  },
  {
    "id": 5957,
    "bagian_id": 332,
    "nomor": 128,
    "nama": "Penetapan uang sekolah (iuran bulanan) mempertimbangkan kemampuan ekonomi orangtua siswa.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "91% - 100% siswa dari keluarga tidak mampu mendapatkan keringanan" },
      { "id": 2, "nilai" : 3, "nama" : "81% - 90% siswa dari keluarga tidak mampu mendapatkan keringanan" },
      { "id": 3, "nilai" : 2, "nama" : "71% - 80% siswa dari keluarga tidak mampu mendapatkan keringanan" },
      { "id": 4, "nilai" : 1, "nama" : "61% - 70% siswa dari keluarga tidak mampu mendapatkan keringanan" },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 61% siswa dari keluarga tidak mampu mendapatkan keringanan" }
    ],
    "jawaban": 4
  },
  {
    "id": 5958,
    "bagian_id": 332,
    "nomor": 129,
    "nama": "Siswa tidak dikenakan biaya pendaftaran ulang pada setiap awal tahun pelajaran.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Tidak ada siswa yang dikenakan biaya pendaftaran ulang." },
      { "id": 2, "nilai" : 3, "nama" : "1% - 25% siswa dikenakan biaya pendaftaran ulang." },
      { "id": 3, "nilai" : 2, "nama" : "26% - 50% siswa dikenakan biaya pendaftaran ulang." },
      { "id": 4, "nilai" : 1, "nama" : "51% - 75% siswa dikenakan biaya pendaftaran ulang." },
      { "id": 5, "nilai" : 0, "nama" : "76% - 100% siswa dikenakan biaya pendaftaran ulang." }
    ],
    "jawaban": 4
  },
  {
    "id": 5961,
    "bagian_id": 332,
    "nomor": 132,
    "nama": "Pengambilan keputusan dalam penetapan dana dari masyarakat sebagai biaya personal dilakukan dengan melibatkan berbagai pihak terkait.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melibatkan penyelenggara pendidikan/yayasan, kepala sekolah, komite sekolah, perwakilan guru, dan perwakilan tenaga kependidikan." },
      { "id": 2, "nilai" : 3, "nama" : "Melibatkan penyelenggara pendidikan/yayasan, kepala sekolah, komite sekolah, dan perwakilan guru." },
      { "id": 3, "nilai" : 2, "nama" : "Melibatkan penyelenggara pendidikan/yayasan, kepala sekolah, dan komite sekolah." },
      { "id": 4, "nilai" : 1, "nama" : "Melibatkan penyelenggara pendidikan/yayasan dan kepala sekolah." },
      { "id": 5, "nilai" : 0, "nama" : "Ditetapkan hanya oleh kepala sekolah." }
    ],
    "jawaban": 4
  },
  {
    "id": 5962,
    "bagian_id": 332,
    "nomor": 133,
    "nama": "Pengelolaan dana dari masyarakat sebagai biaya personal dilakukan secara sistematis, transparan, efisien, dan akuntabel, serta dilaporkan kepada komite sekolah.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Dikelola secara sistematis, transparan, efisien, dan akuntabel, serta dilaporkan." },
      { "id": 2, "nilai" : 3, "nama" : "Dikelola secara sistematis, transparan, efisien, dan akuntabel, tetapi tidak dilaporkan." },
      { "id": 3, "nilai" : 2, "nama" : "Dikelola secara sistematis, transparan, dan efisien tetapi tidak akuntabel dan tidak dilaporkan." },
      { "id": 4, "nilai" : 1, "nama" : "Dikelola secara sistematis dan transparan, tetapi tidak efisien dan akuntabel, tetapi tidak dilaporkan." },
      { "id": 5, "nilai" : 0, "nama" : "Dikelola dengan tidak sistematis, transparan, efisien, dan akuntabel." }
    ],
    "jawaban": 4
  },
  {
    "id": 5963,
    "bagian_id": 332,
    "nomor": 134,
    "nama": "Sekolah memiliki pedoman pengelolaan keuangan sebagai dasar dalam penyusunan RKAS.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki pedoman pengelolaan keuangan 4 tahun terakhir." },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki pedoman pengelolaan keuangan 3 tahun terakhir." },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki pedoman pengelolaan keuangan 2 tahun terakhir." },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki pedoman pengelolaan keuangan 1 tahun terakhir." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki pedoman pengelolaan keuangan." }
    ],
    "jawaban": 4
  },
  {
    "id": 5964,
    "bagian_id": 332,
    "nomor": 135,
    "nama": "Sekolah memiliki pembukuan biaya operasional.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki pembukuan biaya operasional 4 tahun terakhir." },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki pembukuan biaya operasional 3 tahun terakhir." },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki pembukuan biaya operasional 2 tahun terakhir." },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki pembukuan biaya operasional 1 tahun terakhir." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki pembukuan biaya operasional." }
    ],
    "jawaban": 4
  },
  {
    "id": 5965,
    "bagian_id": 332,
    "nomor": 136,
    "nama": "Sekolah membuat laporan pertanggungjawaban pengelolaan keuangan dan menyampaikannya kepada pemerintah atau yayasan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Membuat dan menyampaikan laporan selama 4 tahun terakhir." },
      { "id": 2, "nilai" : 3, "nama" : "Membuat dan menyampaikan laporan selama 3 tahun terakhir." },
      { "id": 3, "nilai" : 2, "nama" : "Membuat dan menyampaikan laporan 2 tahun terakhir." },
      { "id": 4, "nilai" : 1, "nama" : "Membuat dan menyampaikan laporan 1 tahun terakhir." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak membuat laporan pertanggungjawaban keuangan." }
    ],
    "jawaban": 4
  },
  {
    "id": 5966,
    "bagian_id": 333,
    "nomor": 137,
    "nama": "Guru menginformasikan rancangan dan kriteria penilaian yang ada dalam silabus mata pelajaran kepada orang tua siswa pada semester berjalan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "76% - 100% guru merancang penilaian dan menyampaikan kepada orang tua siswa." },
      { "id": 2, "nilai" : 3, "nama" : "51% - 75% guru merancang penilaian dan menyampaikan kepada orang tua siswa." },
      { "id": 3, "nilai" : 2, "nama" : "26% - 50% guru merancang penilaian dan menyampaikan kepada orang tua siswa." },
      { "id": 4, "nilai" : 1, "nama" : "1% - 25% guru merancang penilaian dan menyampaikan kepada orang tua siswa." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak ada guru yang merancang penilaian." }
    ],
    "jawaban": 4
  },
  {
    "id": 5967,
    "bagian_id": 333,
    "nomor": 138,
    "nama": "Silabus mata pelajaran dilengkapi dengan indikator pencapaian kompetensi dasar (KD) dan teknik penilaian.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "76% - 100% silabus mata pelajaran dilengkapi indikator pencapaian KD dan teknik penilaian." },
      { "id": 2, "nilai" : 3, "nama" : "51% - 75% silabus mata pelajaran dilengkapi indikator pencapaian KD dan teknik penilaian." },
      { "id": 3, "nilai" : 2, "nama" : "26% - 50% silabus mata pelajaran dilengkapi indikator pencapaian KD dan teknik penilaian." },
      { "id": 4, "nilai" : 1, "nama" : "1% - 25% silabus mata pelajaran dilengkapi indikator pencapaian KD dan teknik penilaian." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak ada silabus yang dilengkapi indikator pencapaian KD dan teknik penilaian." }
    ],
    "jawaban": 4
  },
  {
    "id": 5968,
    "bagian_id": 333,
    "nomor": 139,
    "nama": "Guru mengembangkan instrumen dan pedoman penilaian sesuai dengan bentuk dan teknik penilaian.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "76% - 100% guru mengembangkan instrumen dan pedoman penilaian." },
      { "id": 2, "nilai" : 3, "nama" : "51% - 75% guru mengembangkan instrumen dan pedoman penilaian." },
      { "id": 3, "nilai" : 2, "nama" : "26% - 50% guru mengembangkan instrumen dan pedoman penilaian." },
      { "id": 4, "nilai" : 1, "nama" : "1% - 25% guru mengembangkan instrumen dan pedoman penilaian." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak ada guru yang mengembangkan instrumen dan pedoman penilaian." }
    ],
    "jawaban": 4
  },
  {
    "id": 5969,
    "bagian_id": 333,
    "nomor": 140,
    "nama": "Guru menggunakan teknik penilaian berupa tes, pengamatan, penugasan, dan/atau bentuk lain dalam menilai siswa.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "76% - 100% guru menggunakan berbagai teknik penilaian." },
      { "id": 2, "nilai" : 3, "nama" : "51% - 75% guru menggunakan berbagai teknik penilaian." },
      { "id": 3, "nilai" : 2, "nama" : "26% - 50% guru menggunakan berbagai teknik penilaian." },
      { "id": 4, "nilai" : 1, "nama" : "1% - 25% guru menggunakan berbagai teknik penilaian." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak ada guru yang melaksanakan penilaian." }
    ],
    "jawaban": 4
  },
  {
    "id": 5970,
    "bagian_id": 333,
    "nomor": 141,
    "nama": "Guru mengolah hasil penilaian untuk mengetahui kemajuan hasil belajar dan kesulitan belajar siswa.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "76% - 100% guru mengolah hasil penilaian." },
      { "id": 2, "nilai" : 3, "nama" : "51% - 75% guru mengolah hasil penilaian." },
      { "id": 3, "nilai" : 2, "nama" : "26% - 50% guru mengolah hasil penilaian." },
      { "id": 4, "nilai" : 1, "nama" : "1% - 25% guru mengolah hasil penilaian." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak ada guru yang mengolah hasil penilaian." }
    ],
    "jawaban": 4
  },
  {
    "id": 6132,
    "bagian_id": 340,
    "nomor": 145,
    "nama": "Sekolah membuat laporan pertanggungjawaban pengelolaan keuangan dan menyampaikannya kepada pemerintah atau yayasan.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Membuat dan menyampaikan laporan selama 4 tahun terakhir" },
      { "id": 2, "nilai" : 3, "nama" : "Membuat dan menyampaikan laporan selama 3 tahun terakhir" },
      { "id": 3, "nilai" : 2, "nama" : "Membuat dan menyampaikan laporan selama 2 tahun terakhir" },
      { "id": 4, "nilai" : 1, "nama" : "Membuat dan menyampaikan laporan selama 1 tahun terakhir" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak membuat laporan pertanggungjawaban pengelolaan keuangan" }
    ],
    "jawaban": 4
  },
  {
    "id": 5988,
    "bagian_id": 334,
    "nomor": 1,
    "nama": "Sekolah melaksanakan Kurikulum Tingkat Satuan Pendidikan (KTSP).",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melaksanakan kurikulum berdasarkan 8 muatan KTSP. " },
      { "id": 2, "nilai" : 3, "nama" : "Melaksanakan kurikulum berdasarkan 7 muatan KTSP. " },
      { "id": 3, "nilai" : 2, "nama" : "Melaksanakan kurikulum berdasarkan 6 muatan KTSP. " },
      { "id": 4, "nilai" : 1, "nama" : "Melaksanakan kurikulum berdasarkan 5 muatan KTSP. " },
      { "id": 5, "nilai" : 0, "nama" : "Melaksanakan kurikulum berdasarkan 4 atau kurang muatan KTSP. " }
    ],
    "jawaban": 4
  },
  {
    "id": 5989,
    "bagian_id": 334,
    "nomor": 2,
    "nama": "Sekolah mengembangkan kurikulum bersama-sama tim pengembang kurikulum berpedoman pada panduan penyusunan kurikulum yang dibuat oleh BSNP yang relevan dengan jenis ketunaan. ",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Bersama seluruh guru, konselor, kepala sekolah, narasumber, komite sekolah atau penyelenggara lembaga pendidikan. " },
      { "id": 2, "nilai" : 3, "nama" : "Bersamaguru,konselor,kepalasekolah,dannarasumber. " },
      { "id": 3, "nilai" : 2, "nama" : "Bersamaguru,konselor,dankepalasekolah." },
      { "id": 4, "nilai" : 1, "nama" : "Bersama guru dan konselor . " },
      { "id": 5, "nilai" : 0, "nama" : "Tidakmelakukanpengembangankurikulum. " }
    ],
    "jawaban": 4
  },
  {
    "id": 5990,
    "bagian_id": 334,
    "nomor": 3,
    "nama": "Sekolah mengembangkan kurikulum sesuai prinsip pengembangan KTSP. ",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Menggunakan 7 prinsip pengembangan KTSP." },
      { "id": 2, "nilai" : 3, "nama" : "Menggunakan 5 - 6 prinsip pengembangan KTSP. " },
      { "id": 3, "nilai" : 2, "nama" : "Menggunakan 3 - 4 prinsip pengembangan KTSP. " },
      { "id": 4, "nilai" : 1, "nama" : "Menggunakan 1 - 2 prinsip pengembangan KTSP. " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak mengembangkan KTSP. " }
    ],
    "jawaban": 4
  },
  {
    "id": 5991,
    "bagian_id": 334,
    "nomor": 4,
    "nama": "Sekolah melaksanakan kurikulum berdasarkan prinsip perbaikan dan pengayaan layanan pembelajaran, pendayagunaan kondisi alam, serta pendayagunaan kondisi sosial dan budaya sesuai karakteristik ketunaan. ",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Berdasarkan prinsip perbaikan layanan pembelajaran,pengayaan layanan pembelajaran, pendayagunaan kondisi alam, serta pendayagunaan kondisi sosial dan budaya " },
      { "id": 2, "nilai" : 3, "nama" : "Berdasarkanprinsipperbaikandanpengayaanlayanan pembelajaran, dan pendayagunaan kondisi alam. " },
      { "id": 3, "nilai" : 2, "nama" : "Berdasarkanprinsipperbaikandanpengayaanlayanan pembelajaran. " },
      { "id": 4, "nilai" : 1, "nama" : "Berdasarkan prinsip perbaikan layanan pembelajaran. " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak berdasarkan prinsip pelaksanaan kurikulum. " }
    ],
    "jawaban": 4
  },
  {
    "id": 5992,
    "bagian_id": 334,
    "nomor": 5,
    "nama": "Sekolah melaksanakan kurikulum pendidikan khusus yang terdiri dari 8 sampai 10 mata pelajaran. ",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melaksanakan 8 atau lebih mata pelajaran. " },
      { "id": 2, "nilai" : 3, "nama" : "Melaksanakan 7 mata pelajaran." },
      { "id": 3, "nilai" : 2, "nama" : "Melaksanakan 6 mata pelajaran." },
      { "id": 4, "nilai" : 1, "nama" : "Melaksanakan 5 mata pelajaran. " },
      { "id": 5, "nilai" : 0, "nama" : "Melaksanakan kurang dari 5 mata pelajaran. " }
    ],
    "jawaban": 4
  },
  {
    "id": 5993,
    "bagian_id": 334,
    "nomor": 6,
    "nama": "Sekolah menyusun kurikulum muatan lokal dan kurikulum berbasis pendidikan karakter dengan melibatkan berbagai pihak. ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melibatkan kepala sekolah, guru, komite sekolah atau penyelenggara lembaga pendidikan, dinas pendidkan provinsi, dan instansi terkait di daerah. " },
      { "id": 2, "nilai" : 3, "nama" : "Melibatkan kepala sekolah, guru, komite sekolah atau penyelenggara lembaga pendidikan, dan dinas pendidikan provinsi. " },
      { "id": 3, "nilai" : 2, "nama" : "Melibatkan kepala sekolah, guru, dan komite sekolah atau penyelenggara lembaga pendidikan. " },
      { "id": 4, "nilai" : 1, "nama" : "Melibatkan kepala sekolah dan guru. " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak menyusun kurikulum muatan lokal. " }
    ],
    "jawaban": 4
  },
  {
    "id": 5994,
    "bagian_id": 334,
    "nomor": 7,
    "nama": "Sekolah melaksanakan mata pelajaran program khusus yang sesuai dengan jenis ketunaannya. ",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melaksanakan program khusus sesuai kebutuhan siswa dengan alokasi waktu minimal 2 jam/minggu " },
      { "id": 2, "nilai" : 3, "nama" : "Melaksanakan program khusus sesuai kebutuhan siswa dengan alokasi waktu kurang dari 2 jam/minggu " },
      { "id": 3, "nilai" : 2, "nama" : "Melaksanakan program khusus yang tidak sesuai kebutuhan siswa dengan alokasi waktu 2 jam/minggu " },
      { "id": 4, "nilai" : 1, "nama" : "Melaksanakan program khusus yang tidak sesuai kebutuhan siswa dengan alokasi waktu kurang dari 2 jam/minggu " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melaksanakan program khusus " }
    ],
    "jawaban": 4
  },
  {
    "id": 5995,
    "bagian_id": 334,
    "nomor": 8,
    "nama": "Sekolah melaksanakan program pengembangan diri dalam bentuk kegiatan ekstrakurikuler. ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melaksanakan 4 jenis atau lebih kegiatan ekstrakurikuler" },
      { "id": 2, "nilai" : 3, "nama" : "Melaksanakan 3 jenis kegiatan ekstrakurikuler" },
      { "id": 3, "nilai" : 2, "nama" : "Melaksanakan 2 jenis kegiatan ekstrakurikuler" },
      { "id": 4, "nilai" : 1, "nama" : "Melaksanakan 1 jenis kegiatan ekstrakurikuler" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melaksanakan kegiatan ekstrakurikuler" }
    ],
    "jawaban": 4
  },
  {
    "id": 5996,
    "bagian_id": 334,
    "nomor": 9,
    "nama": "Sekolah melaksanakan program pengembangan diri dalam bentuk kegiatan layanan konseling.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melaksanakan 4 jenis atau lebih kegiatan layanan konseling" },
      { "id": 2, "nilai" : 3, "nama" : "Melaksanakan 3 jenis kegiatan layanan konseling" },
      { "id": 3, "nilai" : 2, "nama" : "Melaksanakan 2 jenis kegiatan layanan konseling" },
      { "id": 4, "nilai" : 1, "nama" : "Melaksanakan 1 jenis kegiatan layanan konseling" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melaksanakan kegiatan layanan konseling" }
    ],
    "jawaban": 4
  },
  {
    "id": 5997,
    "bagian_id": 334,
    "nomor": 10,
    "nama": "Sekolah melaksanakan muatan isi kurikulum yang terdiri dari aspek akademis dan aspek keterampilan vokasional.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "46% atau lebih aspek keterampilan, sisanya aspek akademis." },
      { "id": 2, "nilai" : 3, "nama" : "31% - 45% aspek keterampilan, sisanya aspek akademis." },
      { "id": 3, "nilai" : 2, "nama" : "16% - 30% aspek keterampilan, sisanya aspek akademis." },
      { "id": 4, "nilai" : 1, "nama" : "1%- 15% aspek keterampilan, sisanya aspek akademis." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki kurikulum aspek keterampilan." }
    ],
    "jawaban": 4
  },
  {
    "id": 5998,
    "bagian_id": 334,
    "nomor": 11,
    "nama": "Sekolah menjabarkan standar kompetensi (SK) dan kompetensi dasar (KD) ke dalam indikator-indikator untuk setiap mata pelajaran. ",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "10 atau lebih mata pelajaran telah sesuai antara SK,KD ,dan indikator. " },
      { "id": 2, "nilai" : 3, "nama" : "7 - 9 mata pelajaran telah sesuai antara SK, KD, dan indikator." },
      { "id": 3, "nilai" : 2, "nama" : "4 - 6 mata pelajaran telah sesuai antara SK, KD, dan indikator." },
      { "id": 4, "nilai" : 1, "nama" : "1 - 3 mata pelajaran telah sesuai antara SK, KD, dan indikator." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak ada mata pelajaran yang sesuai antara SK, KD, dan indikator." }
    ],
    "jawaban": 4
  },
  {
    "id": 5999,
    "bagian_id": 334,
    "nomor": 12,
    "nama": "Sekolah menerapkan kegiatan pembelajaran sesuai dengan ketentuan beban belajar yang tertuang pada Standar Isi.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Satu jam pembelajaran tatap muka selama 35 menit, jumlah jam pembelajaran per minggu minimal 32 jam, dan jumlah minggu efektif per tahun minimal 34 minggu." },
      { "id": 2, "nilai" : 3, "nama" : "Satu jam pembelajaran tatap muka selama 35 menit, jumlah jam pembelajaran per minggu minimal 32 jam, dan jumlah minggu efektif per tahun kurang dari 34 minggu." },
      { "id": 3, "nilai" : 2, "nama" : "Satu jam pembelajaran tatap muka selama 35 menit, jumlah jam pembelajaran per minggu kurang dari 32 jam, dan jumlah minggu efektif per tahun kurang dari 34 minggu." },
      { "id": 4, "nilai" : 1, "nama" : "Satu jam pembelajaran tatap muka kurang dari 35 menit, jumlah jam pembelajaran per minggu kurang dari 32 jam, dan jumlah minggu efektif per tahun kurang dari 34 minggu." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak menerapkan ketentuan beban belajar yang berlaku." }
    ],
    "jawaban": 4
  },
  {
    "id": 6000,
    "bagian_id": 334,
    "nomor": 13,
    "nama": "Guru memberikan penugasan terstruktur dan kegiatan mandiri tidak terstruktur untuk mencapai kompetensi tertentu, maksimum 50% dari jumlah waktu kegiatan tatap muka mata pelajaran yang bersangkutan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "76% - 100% guru memberikan penugasan terstruktur dan kegiatan mandiri tidak terstruktur." },
      { "id": 2, "nilai" : 3, "nama" : "51% - 75% guru memberikan penugasan terstruktur dan kegiatan mandiri tidak terstruktur." },
      { "id": 3, "nilai" : 2, "nama" : "26% - 50% guru memberikan penugasan terstruktur dan kegiatan mandiri tidak terstruktur." },
      { "id": 4, "nilai" : 1, "nama" : "1% - 25% guru memberikan penugasan terstruktur dan kegiatan mandiri tidak terstruktur." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak ada guru yang memberikan penugasan terstruktur dan kegiatan mandiri tidak terstruktur." }
    ],
    "jawaban": 4
  },
  {
    "id": 6001,
    "bagian_id": 334,
    "nomor": 14,
    "nama": "Dokumen lengkap KTSP disahkan oleh kepala sekolah dengan memperhatikan pertimbangan komite sekolah atau penyelenggara pendidikan dan disetujui oleh Dinas Pendidikan yang bersangkutan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "KTSP disahkan oleh kepala sekolah dengan memperhatikan pertimbangan komite sekolah atau penyelenggara pendidikan dan diketahui oleh Dinas Pendidikan." },
      { "id": 2, "nilai" : 3, "nama" : "KTSP disahkan oleh kepala sekolah dan disetujui oleh Dinas Pendidikan" },
      { "id": 3, "nilai" : 2, "nama" : "KTSP disahkan oleh kepala sekolah dengan memperhatikan pertimbangan komite sekolah atau penyelenggara pendidikan." },
      { "id": 4, "nilai" : 1, "nama" : "KTSP disahkan oleh kepala sekolah." },
      { "id": 5, "nilai" : 0, "nama" : "KTSP tidak disahkan." }
    ],
    "jawaban": 4
  },
  {
    "id": 6002,
    "bagian_id": 334,
    "nomor": 15,
    "nama": "Sekolah memiliki kalender pendidikan yang memuat pengaturan waktu untuk kegiatan pembelajaran peserta didik selama satu tahun ajaran: (1) awal tahun pelajaran, (2) minggu efektif, (3) pembelajaran efektif, dan (4) hari libur.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memuat 4 macam pengaturan waktu." },
      { "id": 2, "nilai" : 3, "nama" : "Memuat 3 macam pengaturan waktu." },
      { "id": 3, "nilai" : 2, "nama" : "Memuat 2 macam pengaturan waktu." },
      { "id": 4, "nilai" : 1, "nama" : "Memuat 1 macam pengaturan waktu." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki kalender pendidikan." }
    ],
    "jawaban": 4
  },
  {
    "id": 6003,
    "bagian_id": 335,
    "nomor": 16,
    "nama": "Sekolah mengembangkan silabus secara mandiri atau cara lainnya berdasarkan standar isi, standar kompetensi lulusan, dan panduan penyusunan KTSP.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Mengembangkan silabus melalui kelompok guru dalam sebuah sekolah." },
      { "id": 2, "nilai" : 3, "nama" : "Mengembangkan silabus oleh masing-masing guru mata pelajaran." },
      { "id": 3, "nilai" : 2, "nama" : "Mengembangkan silabus melalui kelompok guru dari beberapa sekolah." },
      { "id": 4, "nilai" : 1, "nama" : "Mengembangkan silabus dengan mengadopsi contoh yang ada." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak mengembangkan silabus." }
    ],
    "jawaban": 4
  },
  {
    "id": 6004,
    "bagian_id": 335,
    "nomor": 17,
    "nama": "Setiap mata pelajaran memiliki RPP dengan mengintegrasikan pendidikan karakter yang dijabarkan dari silabus.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "9 atau lebih mata pelajaran memiliki RPP dengan mengintegrasikan pendidikan karakter yang dijabarkan dari silabus" },
      { "id": 2, "nilai" : 3, "nama" : "7 -  8 mata pelajaran memiliki RPP dengan mengintegrasikan pendidikan karakter yang dijabarkan dari silabus" },
      { "id": 3, "nilai" : 2, "nama" : "5 - 6 mata pelajaran memiliki RPP dengan mengintegrasikan pendidikan karakter yang dijabarkan dari silabus" },
      { "id": 4, "nilai" : 1, "nama" : "3 - 4 mata pelajaran atau kurang memiliki RPP dengan mengintegrasikan pendidikan karakter yang dijabarkan dari silabus" },
      { "id": 5, "nilai" : 0, "nama" : "2 atau kurang mata pelajaran memiliki RPP dengan mengintegrasikan pendidikan karakter yang dijabarkan dari silabus" }
    ],
    "jawaban": 4
  },
  {
    "id": 6005,
    "bagian_id": 335,
    "nomor": 18,
    "nama": "RPP disusun dengan memperhatikan 6 prinsip penyusunan",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memperhatikan 6 prinsip penyusunan" },
      { "id": 2, "nilai" : 3, "nama" : "Memperhatikan 5 prinsip penyusunan" },
      { "id": 3, "nilai" : 2, "nama" : "Memperhatikan 4 prinsip penyusunan" },
      { "id": 4, "nilai" : 1, "nama" : "Memperhatikan 3 prinsip penyusunan" },
      { "id": 5, "nilai" : 0, "nama" : "Memperhatikan 2 atau kurang prinsip penyusunan" }
    ],
    "jawaban": 4
  },
  {
    "id": 6006,
    "bagian_id": 335,
    "nomor": 19,
    "nama": "Sekolah melaksanakan proses pembelajaran dengan memenuhi persyaratan yang ditentukan.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memenuhi 4 persyaratan pelaksanaan proses pembelajaran" },
      { "id": 2, "nilai" : 3, "nama" : "Memenuhi 3 persyaratan pelaksanaan proses pembelajaran" },
      { "id": 3, "nilai" : 2, "nama" : "Memenuhi 2 persyaratan pelaksanaan proses pembelajaran" },
      { "id": 4, "nilai" : 1, "nama" : "Memenuhi 1 persyaratan pelaksanaan proses pembelajaran" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memenuhi persyaratan pelaksanaan proses pembelajaran" }
    ],
    "jawaban": 4
  },
  {
    "id": 6007,
    "bagian_id": 335,
    "nomor": 20,
    "nama": "Sekolah melaksanakan pembelajaran dengan memenuhi persyaratan beban kerja minimal guru 24 jam tatap muka per minggu.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "76% - 100% guru memiliki beban kerja minimal." },
      { "id": 2, "nilai" : 3, "nama" : "51% - 75% guru memiliki beban kerja minimal." },
      { "id": 3, "nilai" : 2, "nama" : "26% - 50% guru memiliki beban kerja minimal." },
      { "id": 4, "nilai" : 1, "nama" : "1% - 25% guru memiliki beban kerja minimal." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memenuhi persyaratan beban kerja minimal." }
    ],
    "jawaban": 4
  },
  {
    "id": 6008,
    "bagian_id": 335,
    "nomor": 21,
    "nama": "Pembelajaran di sekolah dilaksanakan sesuai dengan langkah-langkah pembelajaran.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "76% - 100% guru melaksanakan pembelajaran sesuai dengan langkah-langkah pembelajaran" },
      { "id": 2, "nilai" : 3, "nama" : "51% - 75% guru melaksanakan pembelajaran sesuai dengan langkah-langkah pembelajaran" },
      { "id": 3, "nilai" : 2, "nama" : "26% - 50% guru melaksanakan pembelajaran sesuai dengan langkah-langkah pembelajaran" },
      { "id": 4, "nilai" : 1, "nama" : "1% - 25% guru melaksanakan pembelajaran sesuai dengan langkah-langkah pembelajaran" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak ada guru yang melaksanakan pembelajaran sesuai dengan langkah-langkah pembelajaran" }
    ],
    "jawaban": 4
  },
  {
    "id": 6014,
    "bagian_id": 336,
    "nomor": 27,
    "nama": "Siswa memperoleh pengalaman belajar untuk memiliki kemampuan berpikir logis, kritis, kreatif, dan inovatif di bawah bimbingan guru.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "76% - 100% mata pelajaran memuat tugas yang memberikan kesempatan berpikir logis, kritis, kreatif, dan inovatif di bawah bimbingan guru. " },
      { "id": 2, "nilai" : 3, "nama" : "51% - 75% mata pelajaran memuat tugas yang memberikan kesempatan berpikir logis, kritis, kreatif, dan inovatif di bawah bimbingan guru. " },
      { "id": 3, "nilai" : 2, "nama" : "26% - 50% mata pelajaran memuat tugas yang memberikan kesempatan berpikir logis, kritis, kreatif, dan inovatif di bawah bimbingan guru. " },
      { "id": 4, "nilai" : 1, "nama" : "1%  25% mata pelajaran memuat tugas yang memberikan kesempatan berpikir logis, kritis, kreatif, dan inovatif di bawah bimbingan guru " },
      { "id": 5, "nilai" : 0, "nama" : "Tidaka da mata pelajaran memuat tugas yang memberikan kesempatan berpikir logis, kritis, kreatif, dan inovatif di bawah bimbingan guru " }
    ],
    "jawaban": 4
  },
  {
    "id": 6015,
    "bagian_id": 336,
    "nomor": 28,
    "nama": "Siswa terlibat dalam kegiatan belajar yang dapat memecahkan masalah- masalah dalam kehidupan sehari-hari. ",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "76% - 100% mata pelajaran memuat kegiatan belajar siswa dalam memecahkan masalah. " },
      { "id": 2, "nilai" : 3, "nama" : "51% - 75% mata pelajaran memuat kegiatan belajar siswa dalam memecahkan masalah. " },
      { "id": 3, "nilai" : 2, "nama" : "26% - 50% mata pelajaran memuat kegiatan belajar siswa dalam memecahkan masalah. " },
      { "id": 4, "nilai" : 1, "nama" : "1% - 25% mata pelajaran memuat kegiatan belajar siswa dalam memecahkan masalah. " },
      { "id": 5, "nilai" : 0, "nama" : "Tidak ada mata pelajaran memuat kegiatan belajar siswa dalam memecahkan masalah. " }
    ],
    "jawaban": 4
  },
  {
    "id": 6016,
    "bagian_id": 336,
    "nomor": 29,
    "nama": "Siswa memperoleh pengalaman belajar yang dapat menganalisis dan/atau mengenal gejala alam dan sosial di lingkungan sekitar. ",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "76%- 00% RPP mata pelajaran memuat kegiatan pembelajaran yang menunjukkan kemampuan mengenali gejala alam dan sosial. " },
      { "id": 2, "nilai" : 3, "nama" : "51% - 75% RPP mata pelajaran memuat kegiatan pembelajaran yang menunjukkan kemampuan mengenali gejala alam dan sosial." },
      { "id": 3, "nilai" : 2, "nama" : "26% - 50% RPP mata pelajaran memuat kegiatan pembelajaran yang menunjukkan kemampuan mengenali gejala alam dan sosial." },
      { "id": 4, "nilai" : 1, "nama" : "1% - 25% RPP mata pelajaran memuat kegiatan pembelajaran yang menunjukkan kemampuan mengenali gejala alam dan sosial." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak ada RPP mata pelajaran yang memuat kegiatan pembelajaran yang menunjukkan kemampuan mengenali gejala alam dan sosial." }
    ],
    "jawaban": 4
  },
  {
    "id": 6017,
    "bagian_id": 336,
    "nomor": 30,
    "nama": "Siswa memperoleh pengalaman belajar melalui program pembiasaan untuk mencari informasi dari lingkungan sekitar yang dihadapinya secara sederhana dalam satu tahun terakhir.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sekolah melaksanakan 4 atau lebih kegiatan pembiasaan untuk mencari informasi dari lingkungan sekitar." },
      { "id": 2, "nilai" : 3, "nama" : "Sekolah melaksanakan 3 kegiatan pembiasaan untuk mencari informasi dari lingkungan sekitar." },
      { "id": 3, "nilai" : 2, "nama" : "Sekolah melaksanakan 2 kegiatan pembiasaan untuk mencari informasi dari lingkungan sekitar." },
      { "id": 4, "nilai" : 1, "nama" : "Sekolah melaksanakan 1 kegiatan pembiasaan untuk mencari informasi dari lingkungan sekitar." },
      { "id": 5, "nilai" : 0, "nama" : "Sekolah tidak pernah melaksanakan kegiatan pembiasaan untuk mencari informasi dari lingkungan sekitar." }
    ],
    "jawaban": 4
  },
  {
    "id": 6018,
    "bagian_id": 336,
    "nomor": 31,
    "nama": "Siswa memperoleh pengalaman belajar untuk menunjukkan kecintaan dan kepedulian terhadap lingkungan sekitarnya dalam satu tahun terakhir.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sekolah menjalankan 4 atau lebih kegiatan belajar untuk menunjukkan kecintaan dan kepedulian terhadap lingkungan sekitar" },
      { "id": 2, "nilai" : 3, "nama" : "Sekolah menjalankan 3 kegiatan belajar untuk menunjukkan kecintaan dan kepedulian terhadap lingkungan sekitar" },
      { "id": 3, "nilai" : 2, "nama" : "Sekolah menjalankan 2 kegiatan belajar untuk menunjukkan kecintaan dan kepedulian terhadap lingkungan sekitar" },
      { "id": 4, "nilai" : 1, "nama" : "Sekolah menjalankan 1 kegiatan belajar untuk menunjukkan kecintaan dan kepedulian terhadap lingkungan sekitar" },
      { "id": 5, "nilai" : 0, "nama" : "Sekolah tidak pernah menjalankan kegiatan belajar untuk menunjukkan kecintaan dan kepedulian terhadap lingkungan sekitar" }
    ],
    "jawaban": 4
  },
  {
    "id": 6019,
    "bagian_id": 336,
    "nomor": 32,
    "nama": "Siswa memperoleh pengalaman belajar untuk menunjukkan kemampuan mengekspresikan kegiatan seni dan budaya sesuai dengan potensi yang dimiliki dalam satu tahun terakhir.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sekolah memfasilitasi 4 atau lebih kegiatan seni dan budaya." },
      { "id": 2, "nilai" : 3, "nama" : "Sekolah memfasilitasi 3 kegiatan seni dan budaya." },
      { "id": 3, "nilai" : 2, "nama" : "Sekolah memfasilitasi 2 kegiatan seni dan budaya." },
      { "id": 4, "nilai" : 1, "nama" : "Sekolah memfasilitasi 1 kegiatan seni dan budaya." },
      { "id": 5, "nilai" : 0, "nama" : "Sekolah tidak pernah memfasilitasi kegiatan seni dan budaya." }
    ],
    "jawaban": 4
  },
  {
    "id": 6020,
    "bagian_id": 336,
    "nomor": 33,
    "nama": "Siswa memperoleh pengalaman belajar untuk mengenal kekurangan dan kelebihan diri sendiri, dalam satu tahun terakhir.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sekolah menjalankan 4 atau lebih kegiatan kesiswaan untuk mengenal kekurangan dan kelebihan diri sendiri" },
      { "id": 2, "nilai" : 3, "nama" : "Sekolah menjalankan 3 kegiatan kesiswaan untuk mengenal kekurangan dan kelebihan diri sendiri" },
      { "id": 3, "nilai" : 2, "nama" : "Sekolah menjalankan 2 kegiatan kesiswaan untuk mengenal kekurangan dan kelebihan diri sendiri" },
      { "id": 4, "nilai" : 1, "nama" : "Sekolah menjalankan 1 kegiatan kesiswaan untuk mengenal kekurangan dan kelebihan diri sendiri" },
      { "id": 5, "nilai" : 0, "nama" : "Sekolah tidak pernah menjalankan kegiatan kesiswaan untuk mengenal kekurangan dan kelebihan diri sendiri" }
    ],
    "jawaban": 4
  },
  {
    "id": 6021,
    "bagian_id": 336,
    "nomor": 34,
    "nama": "Siswa memperoleh pengalaman belajar untuk menunjukkan sikap percaya diri dan bertanggung jawab seiring perkembangan siswa, dalam satu tahun terakhir.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sekolah menjalankan 4 atau lebih kegiatan kesiswaan untuk menunjukkan sikap percaya diri dan bertanggung jawab" },
      { "id": 2, "nilai" : 3, "nama" : "Sekolah menjalankan 3 kegiatan kesiswaan untuk menunjukkan sikap percaya diri dan bertanggung jawab" },
      { "id": 3, "nilai" : 2, "nama" : "Sekolah menjalankan 2 kegiatan kesiswaan untuk menunjukkan sikap percaya diri dan bertanggung jawab" },
      { "id": 4, "nilai" : 1, "nama" : "Sekolah menjalankan 1 kegiatan kesiswaan untuk menunjukkan sikap percaya diri dan bertanggung jawab" },
      { "id": 5, "nilai" : 0, "nama" : "Sekolah tidak pernah menjalankan kegiatan kesiswaan untuk menunjukkan sikap percaya diri dan bertanggung jawab" }
    ],
    "jawaban": 4
  },
  {
    "id": 6022,
    "bagian_id": 336,
    "nomor": 35,
    "nama": "Siswa memperoleh pengalaman belajar untuk mematuhi aturan-aturan sosial yang berlaku dalam lingkungannya, dalam satu tahun terakhir.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sekolah menjalankan 4 atau lebih kegiatan belajar untuk mematuhi aturan-aturan sosial." },
      { "id": 2, "nilai" : 3, "nama" : "Sekolah menjalankan 3 kegiatan belajar untuk mematuhi aturan- aturan sosial." },
      { "id": 3, "nilai" : 2, "nama" : "Sekolah menjalankan 2 kegiatan belajar untuk mematuhi aturan- aturan sosial." },
      { "id": 4, "nilai" : 1, "nama" : "Sekolah menjalankan 1 kegiatan belajar untuk mematuhi aturan- aturan sosial." },
      { "id": 5, "nilai" : 0, "nama" : "Sekolah tidak pernah menjalankan kegiatan belajar untuk mematuhi aturan-aturan sosial." }
    ],
    "jawaban": 4
  },
  {
    "id": 6023,
    "bagian_id": 336,
    "nomor": 36,
    "nama": "Siswa memperoleh pengalaman belajar untuk menunjukkan kebiasaan hidup bersih, sehat, dan bugar, dalam satu tahun terakhir.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sekolah melaksanakan 4 atau lebih kegiatan pembiasaan untuk hidup bersih, sehat, dan bugar." },
      { "id": 2, "nilai" : 3, "nama" : "Sekolah melaksanakan 3 kegiatan pembiasaan untuk hidup bersih, sehat, dan bugar." },
      { "id": 3, "nilai" : 2, "nama" : "Sekolah melaksanakan 2 kegiatan pembiasaan untuk hidup bersih, sehat, dan bugar." },
      { "id": 4, "nilai" : 1, "nama" : "Sekolah melaksanakan 1 kegiatan pembiasaan untuk hidup bersih, sehat, dan bugar." },
      { "id": 5, "nilai" : 0, "nama" : "Sekolah tidak pernah melaksanakan kegiatan pembiasaan untuk hidup bersih, sehat, dan bugar." }
    ],
    "jawaban": 4
  },
  {
    "id": 6024,
    "bagian_id": 336,
    "nomor": 37,
    "nama": "Siswa memperoleh pengalaman belajar dalam berkomunikasi secara jelas dan sederhana, dalam satu tahun terakhir.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sekolah memfasilitasi 4 atau lebih kegiatan siswa untuk berkomunikasi secara jelas dan sederhana." },
      { "id": 2, "nilai" : 3, "nama" : "Sekolah memfasilitasi 3 kegiatan siswa untuk berkomunikasi secara jelas dan sederhana." },
      { "id": 3, "nilai" : 2, "nama" : "Sekolah memfasilitasi 2 kegiatan siswa untuk berkomunikasi secara jelas dan sederhana." },
      { "id": 4, "nilai" : 1, "nama" : "Sekolah memfasilitasi 1 kegiatan siswa untuk berkomunikasi secara jelas dan sederhana." },
      { "id": 5, "nilai" : 0, "nama" : "Sekolah tidak pernah memfasilitasi kegiatan siswa untuk berkomunikasi secara jelas dan sederhana." }
    ],
    "jawaban": 4
  },
  {
    "id": 6090,
    "bagian_id": 339,
    "nomor": 103,
    "nama": "Sekolah telah merumuskan, menetapkan, dan mensosialisasikan tujuan lembaga.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Merumuskan dan menetapkan tujuan, mudah dipahami, sering disosialisasikan, dan dan dipasang pada tempat yang mudah dibaca" },
      { "id": 2, "nilai" : 3, "nama" : "Merumuskan dan menetapkan tujuan, mudah dipahami dan sering disosialisasikan" },
      { "id": 3, "nilai" : 2, "nama" : "Merumuskan dan menetapkan tujuan, mudah dipahami tetapi tidak disosialisasikan" },
      { "id": 4, "nilai" : 1, "nama" : "Merumuskan dan menetapkan tujuan, sulit dipahami dan tidak disosialisasikan" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak merumuskan dan menetapkan tujuan" }
    ],
    "jawaban": 4
  },
  {
    "id": 6025,
    "bagian_id": 336,
    "nomor": 38,
    "nama": "Siswa memperoleh pengalaman belajar melalui pembiasaan untuk memahami hak dan kewajiban orang lain dalam pergaulan di masyarakat sesuai dengan jenis ketunaannya.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "76% - 100% silabus PKn dan IPS memuat kegiatan pembelajaran untuk memahami hak dan kewajiban orang lain." },
      { "id": 2, "nilai" : 3, "nama" : "51% - 75% silabus PKn dan IPS memuat kegiatan pembelajaran untuk memahami hak dan kewajiban orang lain." },
      { "id": 3, "nilai" : 2, "nama" : "26% - 50% silabus PKn dan IPS memuat kegiatan pembelajaran untuk memahami hak dan kewajiban orang lain." },
      { "id": 4, "nilai" : 1, "nama" : "1% - 25% silabus PKn dan IPS memuat kegiatan pembelajaran untuk memahami hak dan kewajiban orang lain." },
      { "id": 5, "nilai" : 0, "nama" : "Silabus PKn dan IPS tidak memuat kegiatan pembelajaran untuk memahami hak dan kewajiban orang lain." }
    ],
    "jawaban": 4
  },
  {
    "id": 6026,
    "bagian_id": 336,
    "nomor": 39,
    "nama": "Siswa memperoleh pengalaman belajar untuk melaksanakan ajaran agama yang dianut sesuai dengan tahap perkembangannya.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sekolah memfasilitasi 4 jenis atau lebih kegiatan pembiasaan untuk menjalankan ajaran agama yang dianut." },
      { "id": 2, "nilai" : 3, "nama" : "Sekolah memfasilitasi 3 jenis kegiatan pembiasaan untuk menjalankan ajaran agama yang dianut." },
      { "id": 3, "nilai" : 2, "nama" : "Sekolah memfasilitasi 2 jenis kegiatan pembiasaan untuk menjalankan ajaran agama yang dianut." },
      { "id": 4, "nilai" : 1, "nama" : "Sekolah memfasilitasi 1 jenis kegiatan pembiasaan untuk menjalankan ajaran agama yang dianut." },
      { "id": 5, "nilai" : 0, "nama" : "Sekolah tidak pernah melaksanakan kegiatan pembiasaan untuk menjalankan ajaran agama yang dianut." }
    ],
    "jawaban": 4
  },
  {
    "id": 6027,
    "bagian_id": 336,
    "nomor": 40,
    "nama": "Siswa memperoleh pengalaman belajar untuk menghargai keberagaman agama, budaya, suku, ras, dan golongan sosial ekonomi di lingkungan sekitarnya.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sekolah melaksanakan 4 atau lebih kegiatan pembelajaran untuk menghargai keberagaman agama, budaya, suku, ras, dan golongan sosial ekonomi." },
      { "id": 2, "nilai" : 3, "nama" : "Sekolah melaksanakan 3 kegiatan pembelajaran untuk menghargai keberagaman agama, budaya, suku, ras, dan golongan sosial ekonomi." },
      { "id": 3, "nilai" : 2, "nama" : "Sekolah melaksanakan 2 kegiatan pembelajaran untuk menghargai keberagaman agama, budaya, suku, ras, dan golongan sosial ekonomi." },
      { "id": 4, "nilai" : 1, "nama" : "Sekolah melaksanakan 1 kegiatan pembelajaran untuk menghargai keberagaman agama, budaya, suku, ras, dan golongan sosial ekonomi." },
      { "id": 5, "nilai" : 0, "nama" : "Sekolah tidak melaksanakan kegiatan pembelajaran untuk menghargai keberagaman agama, budaya, suku, ras, dan golongan sosial ekonomi." }
    ],
    "jawaban": 4
  },
  {
    "id": 6028,
    "bagian_id": 336,
    "nomor": 41,
    "nama": "Siswa memperoleh pengalaman belajar untuk menunjukkan kecintaan dan kebanggaan terhadap bangsa, negara, dan tanah air Indonesia, dalam satu tahun terakhir.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sekolah melaksanakan 4 atau lebih kegiatan pembelajaran untuk menunjukkan kecintaan dan kebanggaan terhadap bangsa, negara, dan tanah air Indonesia." },
      { "id": 2, "nilai" : 3, "nama" : "Sekolah melaksanakan 3 kegiatan pembelajaran untuk menunjukkan kecintaan dan kebanggaan terhadap bangsa, negara, dan tanah air Indonesia." },
      { "id": 3, "nilai" : 2, "nama" : "Sekolah melaksanakan 2 kegiatan pembelajaran untuk menunjukkan kecintaan dan kebanggaan terhadap bangsa, negara, dan tanah air Indonesia." },
      { "id": 4, "nilai" : 1, "nama" : "Sekolah melaksanakan 1 kegiatan pembelajaran untuk menunjukkan kecintaan dan kebanggaan terhadap bangsa, negara, dan tanah air Indonesia." },
      { "id": 5, "nilai" : 0, "nama" : "Sekolah tidak melaksanakan kegiatan pembelajaran untuk menunjukkan kecintaan dan kebanggaan terhadap bangsa, negara, dan tanah air Indonesia." }
    ],
    "jawaban": 4
  },
  {
    "id": 6029,
    "bagian_id": 336,
    "nomor": 42,
    "nama": "Siswa memperoleh pengalaman belajar melalui program pembiasaan untuk menghargai perbedaan pendapat.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "76% - 100% kegiatan pembelajaran menggunakan pendekatan diskusi dan/atau pembelajaran berkelompok" },
      { "id": 2, "nilai" : 3, "nama" : "51% - 75% kegiatan pembelajaran menggunakan pendekatan diskusi dan/atau pembelajaran berkelompok" },
      { "id": 3, "nilai" : 2, "nama" : "26% - 50% kegiatan pembelajaran menggunakan pendekatan diskusi dan/atau pembelajaran berkelompok" },
      { "id": 4, "nilai" : 1, "nama" : "1% - 25% kegiatan pembelajaran menggunakan pendekatan diskusi dan/atau pembelajaran berkelompok" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak ada kegiatan pembelajaran menggunakan pendekatan diskusi dan/atau pembelajaran berkelompok" }
    ],
    "jawaban": 4
  },
  {
    "id": 6030,
    "bagian_id": 336,
    "nomor": 43,
    "nama": "Siswa memperoleh pengalaman belajar untuk menunjukkan kemampuan belajar secara mandiri.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sekolah memfasilitasi kegiatan pembelajaran mandiri dengan memanfaatkan sumber belajar: bahan ajar, buku teks, perpustakaan, sumber belajar lainnya, dan internet/komputer edukasi" },
      { "id": 2, "nilai" : 3, "nama" : "Sekolah memfasilitasi kegiatan pembelajaran mandiri dengan memanfaatkan sumber belajar: bahan ajar, buku teks, perpustakaan, dan sumber belajar lainnya." },
      { "id": 3, "nilai" : 2, "nama" : "Sekolah memfasilitasi kegiatan pembelajaran mandiri dengan memanfaatkan sumber belajar: bahan ajar, buku teks, dan perpustakaan." },
      { "id": 4, "nilai" : 1, "nama" : "Sekolah memfasilitasi kegiatan pembelajaran mandiri dengan memanfaatkan sumber belajar: bahan ajar dan buku teks." },
      { "id": 5, "nilai" : 0, "nama" : "Sekolah tidak pernah memfasilitasi kegiatan pembelajaran mandiri dengan memanfaatkan sumber belajar." }
    ],
    "jawaban": 4
  },
  {
    "id": 6031,
    "bagian_id": 336,
    "nomor": 44,
    "nama": "Siswa memperoleh pengalaman belajar untuk menunjukkan kegemaran membaca dan menulis naskah pendek sederhana.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sekolah memfasilitasi 4 atau lebih kegiatan pembiasaan untuk menunjukkan kegemaran membaca dan menulis naskah pendek sederhana." },
      { "id": 2, "nilai" : 3, "nama" : "Sekolah memfasilitasi 3 kegiatan pembiasaan untuk menunjukkan kegemaran membaca dan menulis naskah pendek sederhana." },
      { "id": 3, "nilai" : 2, "nama" : "Sekolah memfasilitasi 2 kegiatan pembiasaan untuk menunjukkan kegemaran membaca dan menulis naskah pendek sederhana" },
      { "id": 4, "nilai" : 1, "nama" : "Sekolah memfasilitasi 1 kegiatan pembiasaan untuk menunjukkan kegemaran membaca dan menulis naskah pendek sederhana." },
      { "id": 5, "nilai" : 0, "nama" : "Sekolah tidak pernah memfasilitasi kegiatan pembiasaan untuk menunjukkan kegemaran membaca dan menulis naskah pendek sederhana." }
    ],
    "jawaban": 4
  },
  {
    "id": 6032,
    "bagian_id": 336,
    "nomor": 45,
    "nama": "Siswa memperoleh pengalaman belajar untuk menunjukkan keterampilan menyimak, berbicara, membaca, dan menulis dalam Bahasa Indonesia dan pengenalan Bahasa Inggris.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Rata-rata nilai ketuntasan belajar mata pelajaran Bahasa Indonesia dan Bahasa Inggris ditetapkan 75,00 atau lebih" },
      { "id": 2, "nilai" : 3, "nama" : "Rata-rata nilai ketuntasan belajar mata pelajaran Bahasa Indonesia dan Bahasa Inggris ditetapkan 70,00 - 74,90" },
      { "id": 3, "nilai" : 2, "nama" : "Rata-rata nilai ketuntasan belajar mata pelajaran Bahasa Indonesia dan Bahasa Inggris ditetapkan 65,00 - 69,90 " },
      { "id": 4, "nilai" : 1, "nama" : "Rata-rata nilai ketuntasan belajar mata pelajaran Bahasa Indonesia dan Bahasa Inggris ditetapkan 60,00 - 64,90 " },
      { "id": 5, "nilai" : 0, "nama" : "Rata-rata nilai ketuntasan belajar mata pelajaran Bahasa Indonesia dan Bahasa Inggris ditetapkan kurang dari 60,00 " }
    ],
    "jawaban": 4
  },
  {
    "id": 6033,
    "bagian_id": 336,
    "nomor": 46,
    "nama": "Siswa memperoleh pengalaman belajar dalam kegiatan seni, keterampilan, dan pengembangan diri dalam satu tahun terakhir. ",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sekolah melakukan 4 atau lebih kegiatan seni, keterampilan, dan pengembangan diri." },
      { "id": 2, "nilai" : 3, "nama" : "Sekolah melakukan 3 kegiatan seni, keterampilan, dan pengembangan diri." },
      { "id": 3, "nilai" : 2, "nama" : "Sekolah melakukan 2 kegiatan seni, keterampilan, dan pengembangan diri." },
      { "id": 4, "nilai" : 1, "nama" : "Sekolah melakukan 1 kegiatan seni, keterampilan, dan pengembangan diri." },
      { "id": 5, "nilai" : 0, "nama" : "Sekolah tidak pernah melakukan kegiatan seni, keterampilan, dan pengembangan diri." }
    ],
    "jawaban": 4
  },
  {
    "id": 6034,
    "bagian_id": 336,
    "nomor": 47,
    "nama": "Siswa memperoleh pengetahuan dan keterampilan untuk bekal hidup mandiri di tengah-tengah masyarakat dalam satu tahun terakhir.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sekolah melakukan 4 atau lebih kegiatan praktek kerja lapangan (PKL) sederhana atau kegiatan keterampilan sederhana untuk menolong diri sendiri pada kelas terakhir" },
      { "id": 2, "nilai" : 3, "nama" : "Sekolah melakukan 3 kegiatan PKL atau kegiatan keterampilan sederhana untuk menolong diri sendiri pada kelas terakhir" },
      { "id": 3, "nilai" : 2, "nama" : "Sekolah melakukan 2 kegiatan PKL atau kegiatan keterampilan sederhana untuk menolong diri sendiri pada kelas terakhir" },
      { "id": 4, "nilai" : 1, "nama" : "Sekolah melakukan 1 kegiatan PKL atau kegiatan keterampilan sederhana untuk menolong diri sendiri pada kelas terakhir" },
      { "id": 5, "nilai" : 0, "nama" : "Sekolah tidak pernah melakukan kegiatan PKL sederhana" }
    ],
    "jawaban": 4
  },
  {
    "id": 6035,
    "bagian_id": 337,
    "nomor": 48,
    "nama": "Guru memiliki kualifikasi akademik minimum sarjana (S1) atau diploma empat (D-IV).",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "76% - 100% guru berpendidikan minimum S1 atau D-IV" },
      { "id": 2, "nilai" : 3, "nama" : "51% - 75% guru berpendidikan minimum S1 atau D-IV" },
      { "id": 3, "nilai" : 2, "nama" : "26% - 50% guru berpendidikan minimum S1 atau D-IV" },
      { "id": 4, "nilai" : 1, "nama" : "1% - 25% guru berpendidikan minimum S1 atau D-IV" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak ada guru yang berpendidikan minimum S1 atau D-IV" }
    ],
    "jawaban": 4
  },
  {
    "id": 6036,
    "bagian_id": 337,
    "nomor": 49,
    "nama": "Guru mata pelajaran mengajar sesuai dengan latar belakang pendidikannya.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "76% - 100% guru memiliki latar belakang pendidikan khusus yang sesuai dengan mata pelajaran yang diajarkan" },
      { "id": 2, "nilai" : 3, "nama" : "51% - 75% guru memiliki latar belakang pendidikan khusus yang sesuai dengan mata pelajaran yang diajarkan" },
      { "id": 3, "nilai" : 2, "nama" : "26% - 50% guru memiliki latar belakang pendidikan khusus yang sesuai dengan mata pelajaran yang diajarkan" },
      { "id": 4, "nilai" : 1, "nama" : "1% - 25% guru memiliki latar belakang pendidikan khusus yang sesuai dengan mata pelajaran yang diajarkan" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak ada guru yang memiliki latar belakang pendidikan khusus yang sesuai dengan mata pelajaran yang diajarkan" }
    ],
    "jawaban": 4
  },
  {
    "id": 6037,
    "bagian_id": 337,
    "nomor": 50,
    "nama": "Guru memiliki kesehatan jasmani dan rohani untuk menjalankan tugas utama guru, yang ditunjukkan melalui kehadiran untuk menjalankan tugas utama guru di sekolah dalam satu semester terakhir.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Rata-rata kehadiran guru 96% - 100%." },
      { "id": 2, "nilai" : 3, "nama" : "Rata-rata kehadiran guru 91% - 95%." },
      { "id": 3, "nilai" : 2, "nama" : "Rata-rata kehadiran guru 86% - 90%." },
      { "id": 4, "nilai" : 1, "nama" : "Rata-rata kehadiran guru 81% - 85%." },
      { "id": 5, "nilai" : 0, "nama" : "Rata-rata kehadiran guru kurang dari 81%." }
    ],
    "jawaban": 4
  },
  {
    "id": 6038,
    "bagian_id": 337,
    "nomor": 51,
    "nama": "Guru memiliki kompetensi pedagogik sebagai agen pembelajaran, yang ditunjukkan melalui kegiatan merencanakan, melaksanakan, dan mengevaluasi, sesuai prinsip-prinsip pembelajaran.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "76% - 100% guru merencanakan, melaksanakan, dan mengevaluasi pembelajaran sesuai prinsip pembelajaran" },
      { "id": 2, "nilai" : 3, "nama" : "51% - 75% guru merencanakan, melaksanakan, dan mengevaluasi pembelajaran sesuai prinsip pembelajaran" },
      { "id": 3, "nilai" : 2, "nama" : "26% - 50% guru merencanakan, melaksanakan, dan mengevaluasi pembelajaran sesuai prinsip pembelajaran" },
      { "id": 4, "nilai" : 1, "nama" : "1% - 25% guru merencanakan, melaksanakan, dan mengevaluasi pembelajaran sesuai prinsip pembelajaran" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak ada guru merencanakan, melaksanakan, dan mengevaluasi pembelajaran sesuai prinsip pembelajaran" }
    ],
    "jawaban": 4
  },
  {
    "id": 6039,
    "bagian_id": 337,
    "nomor": 52,
    "nama": "Guru memiliki kompetensi kepribadian sebagai agen pembelajaran yang ditunjukkan dengan melalui tindakan guru sesuai dengan norma agama, hukum, sosial, serta peraturan dan ketentuan yang berlaku.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Semua guru bertindak sesuai dengan norma agama, hukum, sosial, serta peraturan dan ketentuan yang berlaku." },
      { "id": 2, "nilai" : 3, "nama" : "Ada guru yang melanggar norma agama, hukum, sosial, serta peraturan dan ketentuan yang berlaku; dan telah dikenai sanksi yang sepadan seperti dibebastugaskan dari mengajar atau dikeluarkan." },
      { "id": 3, "nilai" : 2, "nama" : "Ada guru yang melanggar norma agama, hukum, sosial, serta peraturan dan ketentuan yang berlaku namun diberi kesempatan memperbaiki diri dan dilakukan pembinaan." },
      { "id": 4, "nilai" : 1, "nama" : "Ada guru yang melanggar norma agama, hukum, sosial, serta peraturan dan ketentuan yang berlaku namun hanya diberikan peringatan tertulis." },
      { "id": 5, "nilai" : 0, "nama" : "Ada guru yang melanggar norma agama, hukum, sosial, serta peraturan dan ketentuan yang berlaku namun tidak diberikan sanksi." }
    ],
    "jawaban": 4
  },
  {
    "id": 6040,
    "bagian_id": 337,
    "nomor": 53,
    "nama": "Guru berkomunikasi secara efektif dan santun dengan sesama guru, tenaga kependidikan, siswa, dan orangtua siswa.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Guru berkomunikasi efektif dan santun dengan siswa, sesama guru, kepala sekolah, dan orang tua" },
      { "id": 2, "nilai" : 3, "nama" : "Guru berkomunikasi efektif dan santun dengan siswa, sesama guru, dan kepala sekolah" },
      { "id": 3, "nilai" : 2, "nama" : "Guru berkomunikasi efektif dan santun dengan siswa, dan sesama guru" },
      { "id": 4, "nilai" : 1, "nama" : "Guru berkomunikasi efektif dan santun dengan siswa" },
      { "id": 5, "nilai" : 0, "nama" : "Guru tidak mampu berkomunikasi efektif dan santun" }
    ],
    "jawaban": 4
  },
  {
    "id": 6041,
    "bagian_id": 337,
    "nomor": 54,
    "nama": "Guru memiliki kompetensi professional sebagai agen pembelajaran, yang ditunjukkan dengan penguasaan materi pelajaran yang diampu serta mengembangkannya secara ilmiah.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "96% - 100% guru memiliki kesesuaian latar belakang pendidikan dengan mata pelajaran yang diampu, mempunyai sertifikat pendidik, menghasilkan karya tulis, mengikuti berbagai pertemuan ilmiah." },
      { "id": 2, "nilai" : 3, "nama" : "91% - 95% guru memiliki kesesuaian latar belakang pendidikan dengan mata pelajaran yang diampu, mempunyai sertifikat pendidik, menghasilkan karya tulis, mengikuti berbagai pertemuan ilmiah." },
      { "id": 3, "nilai" : 2, "nama" : "86% - 90% guru memiliki kesesuaian latar belakang pendidikan dengan mata pelajaran yang diampu, mempunyai sertifikat pendidik, menghasilkan karya tulis, mengikuti berbagai pertemuan ilmiah." },
      { "id": 4, "nilai" : 1, "nama" : "81% - 85% guru memiliki kesesuaian latar belakang pendidikan dengan mata pelajaran yang diampu, mempunyai sertifikat pendidik, menghasilkan karya tulis, mengikuti berbagai pertemuan ilmiah." },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 81% guru memiliki kesesuaian latar belakang pendidikan dengan mata pelajaran yang diampu, mempunyai sertifikat pendidik, menghasilkan karya tulis, mengikuti berbagai pertemuan ilmiah." }
    ],
    "jawaban": 4
  },
  {
    "id": 6042,
    "bagian_id": 337,
    "nomor": 55,
    "nama": "Kepala sekolah memenuhi persyaratan sesuai dengan ketentuan yang berlaku.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Berstatus sebagai guru, memiliki SK sebagai kepala sekolah, mempunyai pengalaman minimal 5 tahun sebagai guru, dan memiliki sertifikat pendidik" },
      { "id": 2, "nilai" : 3, "nama" : "Berstatus sebagai guru, memiliki SK sebagai kepala sekolah, mempunyai pengalaman minimal 5 tahun sebagai guru, tetapi tidak memiliki sertifikat pendidik" },
      { "id": 3, "nilai" : 2, "nama" : "Berstatus sebagai guru, memiliki SK kepala sekolah, dan mempunyai pengalaman antara 3−4 tahun sebagai guru" },
      { "id": 4, "nilai" : 1, "nama" : "Berstatus sebagai guru, memiliki SK kepala sekolah, dan mempunyai pengalaman antara 1−2 tahun sebagai guru" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak berstatus sebagai guru tetapi memiliki SK kepala sekolah" }
    ],
    "jawaban": 4
  },
  {
    "id": 6043,
    "bagian_id": 337,
    "nomor": 56,
    "nama": "Kepala sekolah memiliki kualifikasi akademik minimum sarjana (S1) atau diploma empat (D-IV).",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki kualifikasi akademik minimum S1 atau D-IV kependidikan dari perguruan tinggi terakreditasi" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki kualifikasi akademik minimum S1 atau D-IV kependidikan dari perguruan tinggi tidak terakreditasi" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki kualifikasi akademik minimum S1 atau D-IV nonkependidikan dari perguruan tinggi terakreditasi" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki kualifikasi akademik minimum S1 atau D-IV nonkependidikan dari perguruan tinggi tidak terakreditasi" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki kualifikasi akademik minimum yang dipersyaratkan." }
    ],
    "jawaban": 4
  },
  {
    "id": 6044,
    "bagian_id": 337,
    "nomor": 57,
    "nama": "Kepala sekolah memiliki pengalaman mengajar sekurang-kurangnya 5 tahun.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Pengalaman mengajar 5 tahun atau lebih." },
      { "id": 2, "nilai" : 3, "nama" : "Pengalaman mengajar 4 tahun." },
      { "id": 3, "nilai" : 2, "nama" : "Pengalaman mengajar 3 tahun." },
      { "id": 4, "nilai" : 1, "nama" : "Pengalaman mengajar 2 tahun." },
      { "id": 5, "nilai" : 0, "nama" : "Pengalaman mengajar kurang dari 2 tahun." }
    ],
    "jawaban": 4
  },
  {
    "id": 6045,
    "bagian_id": 337,
    "nomor": 58,
    "nama": "Kepala sekolah memiliki kemampuan manajerial yang ditunjukkan dengan keberhasilan/kemajuan dalam mengelola: (1) siswa, (2) guru dan tenaga kependidikan, (3) pengembangan kurikulum, (4) sarana dan prasaana, (5) pembiayaan, dan (6) hubungan masyarakat.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Mengembangkan 6 aspek" },
      { "id": 2, "nilai" : 3, "nama" : "Mengembangkan 5 aspek" },
      { "id": 3, "nilai" : 2, "nama" : "Mengembangkan 4 aspek" },
      { "id": 4, "nilai" : 1, "nama" : "Mengembangkan 3 aspek" },
      { "id": 5, "nilai" : 0, "nama" : "Mengembangkan kurang dari 3 aspek" }
    ],
    "jawaban": 4
  },
  {
    "id": 6046,
    "bagian_id": 337,
    "nomor": 59,
    "nama": "Kepala sekolah memiliki kemampuan kewirausahaan yang ditunjukkan antara lain dengan adanya naluri kewirausahaan dalam mengelola kegiatan produksi/jasa sebagai sumber belajar siswa.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Mengelola 4 atau lebih jenis kegiatan produksi/jasa/karya siswa" },
      { "id": 2, "nilai" : 3, "nama" : "Mengelola 3 jenis kegiatan produksi/jasa/karya siswa" },
      { "id": 3, "nilai" : 2, "nama" : "Mengelola 2 jenis kegiatan produksi/jasa/karya siswa" },
      { "id": 4, "nilai" : 1, "nama" : "Mengelola 1 jenis kegiatan produksi/jasa/karya siswa" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak mengelola kegiatan produksi/jasa/karya siswa" }
    ],
    "jawaban": 4
  },
  {
    "id": 6047,
    "bagian_id": 337,
    "nomor": 60,
    "nama": "Kepala sekolah melakukan supervisi dan monitoring guru setiap tahun",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "91% - 100% guru disupervisi dan dimonitor." },
      { "id": 2, "nilai" : 3, "nama" : "81% - 90% guru disupervisi dan dimonitor" },
      { "id": 3, "nilai" : 2, "nama" : "71% - 80% guru disupervisi dan dimonitor." },
      { "id": 4, "nilai" : 1, "nama" : "61% - 70% guru disupervisi dan dimonitor" },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 61% guru disupervisi dan dimonitor" }
    ],
    "jawaban": 4
  },
  {
    "id": 6091,
    "bagian_id": 339,
    "nomor": 104,
    "nama": "Sekolah memiliki rencana kerja jangka menengah (RKJM) dan rencana kerja tahunan (RKT) serta disosialisasikan.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki RKJM dan RKT serta keduanya sudah disosialisasikan" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki RKJM dan RKT serta salah satunya sudah disosialisasikan." },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki RKJM atau RKT dan sudah disosialisasikan" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki RKJM atau RKT tetapi belum disosialisasikan." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki RKJM dan RKT" }
    ],
    "jawaban": 4
  },
  {
    "id": 6048,
    "bagian_id": 337,
    "nomor": 61,
    "nama": "Kepala tenaga administrasi memiliki kualifikasi akademik minimum pendidikan diploma tiga (D-III).",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : " Memiliki kualifikasi akademik pendidikan minimal D-III dari lembaga pendidikan yang terakreditasi." },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki kualifikasi akademik pendidikan D-II dari lembaga pendidikan yang terakreditasi." },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki kualifikasi akademik pendidikan D-I dari lembaga pendidikan yang terakreditasi." },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki kualifikasi akademik pendidikan menengah." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki kualifikasi akademik atau memiliki kualifikasi akademik di bawah pendidikan menengah atau tidak memiliki kepala tenaga administrasi." }
    ],
    "jawaban": 4
  },
  {
    "id": 6049,
    "bagian_id": 337,
    "nomor": 62,
    "nama": "Kepala tenaga administrasi memiliki pengalaman kerja minimal empat tahun sebagai tenaga administrasi.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Pengalaman kerja 4 tahun atau lebih." },
      { "id": 2, "nilai" : 3, "nama" : "Pengalaman kerja 3 tahun." },
      { "id": 3, "nilai" : 2, "nama" : "Pengalaman kerja 2 tahun" },
      { "id": 4, "nilai" : 1, "nama" : "Pengalaman kerja 1 tahun" },
      { "id": 5, "nilai" : 0, "nama" : "Pengalaman kerja kurang dari 1 tahun" }
    ],
    "jawaban": 4
  },
  {
    "id": 6050,
    "bagian_id": 337,
    "nomor": 63,
    "nama": "Tenaga perpustakaan minimum memiliki kualifikasi akademik pendidikan menengah atau yang sederajat.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki lebih dari 1 orang tenaga perpustakaan yang semuanya memiliki kualifikasi pendidikan menengah." },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki lebih dari 1 orang tenaga perpustakaan tetapi tidak semua memiliki kualifikasi pendidikan menengah." },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki 1 orang tenaga perpustakaan yang kualifikasinya pendidikan menengah." },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki 1 orang tenaga perpustakaan tetapi tidak memiliki kualifikasi pendidikan menengah." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki tenaga perpustakaan." }
    ],
    "jawaban": 4
  },
  {
    "id": 6051,
    "bagian_id": 337,
    "nomor": 64,
    "nama": "Tenaga perpustakaan minimum memiliki latar belakang pendidikan sesuai dengan tugasnya.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki latar belakang pendidikan menengah dan bersertifikat kompetensi pengelolaan perpustakaan." },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki latar belakang pendidikan menengah dan tidak memiliki sertifikat kompetensi pengelolaan perpustakaan." },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki latar belakang pendidikan di bawah pendidikan menengah dan bersertifikat kompetensi pengelolaan perpustakaan." },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki latar belakang pendidikan di bawah pendidikan menengah dan tidak memiliki sertifikat kompetensi pengelolaan perpustakaan." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki tenaga perpustakaan." }
    ],
    "jawaban": 4
  },
  {
    "id": 6052,
    "bagian_id": 337,
    "nomor": 65,
    "nama": "Tenaga khusus bidang keterampilan memiliki latar belakang kualifikasi akademik (memiliki ijazah atau sertifikat keterampilan tingkat terampil, tingkat mahir, dan/atau Tim Pelaksana Penguji Praktek), sesuai dengan bidang keterampilan yang diampunya.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "76% - 100% memiliki ijazah atau sertifikat yang sesuai." },
      { "id": 2, "nilai" : 3, "nama" : "51% - 75% memiliki ijazah atau sertifikat yang sesuai." },
      { "id": 3, "nilai" : 2, "nama" : "26% - 50% memiliki ijazah atau sertifikat yang sesuai." },
      { "id": 4, "nilai" : 1, "nama" : "1% - 25% memiliki ijazah atau sertifikat yang sesuai." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak ada yang memiliki ijazah atau sertifikat yang sesuai." }
    ],
    "jawaban": 4
  },
  {
    "id": 6053,
    "bagian_id": 337,
    "nomor": 66,
    "nama": "Tenaga khusus bidang keterampilan minimum memiliki latar belakang pendidikan sesuai dengan tugasnya.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "76% - 100% memiliki latar belakang pendidikan sesuai dengan tugasnya." },
      { "id": 2, "nilai" : 3, "nama" : "51% - 75% memiliki latar belakang pendidikan sesuai dengan tugasnya." },
      { "id": 3, "nilai" : 2, "nama" : "26% - 50% memiliki latar belakang pendidikan sesuai dengan tugasnya." },
      { "id": 4, "nilai" : 1, "nama" : "1% - 25% memiliki latar belakang pendidikan sesuai dengan tugasnya." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak ada yang memiliki latar belakang pendidikan sesuai dengan tugasnya." }
    ],
    "jawaban": 4
  },
  {
    "id": 6054,
    "bagian_id": 337,
    "nomor": 67,
    "nama": "Sekolah memiliki petugas layanan khusus: (1) penjaga sekolah; (2) tukang kebun; (3) tenaga kebersihan; (4) pengemudi; dan (5) pesuruh.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki 4 jenis atau lebih petugas layanan khusus." },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki 3 jenis petugas layanan khusus" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki 2 jenis petugas layanan khusus." },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki 1 jenis petugas layanan khusus." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki petugas layanan khusus." }
    ],
    "jawaban": 4
  },
  {
    "id": 6055,
    "bagian_id": 338,
    "nomor": 68,
    "nama": "Sekolah memiliki lahan sesuai ketentuan luas minimal.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sesuai ketentuan luas minimal." },
      { "id": 2, "nilai" : 3, "nama" : "90% - 99% dari ketentuan luas minimal." },
      { "id": 3, "nilai" : 2, "nama" : "80% - 89% dari ketentuan luas minimal." },
      { "id": 4, "nilai" : 1, "nama" : "70% - 79% dari ketentuan luas minimal." },
      { "id": 5, "nilai" : 0, "nama" : "Di bawah 70% dari ketentuan luas minimal." }
    ],
    "jawaban": 4
  },
  {
    "id": 6056,
    "bagian_id": 338,
    "nomor": 69,
    "nama": "Sekolah berada di lokasi aman, terhindar dari potensi bahaya yang mengancam kesehatan dan keselamatan jiwa, serta memiliki akses untuk penyelamatan dalam keadaan darurat.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Berada di lokasi aman, terhindar dari potensi bahaya yang mengancam kesehatan dan keselamatan jiwa, serta memiliki akses untuk penyelamatan dalam keadaan darurat." },
      { "id": 2, "nilai" : 3, "nama" : "Berada di lokasi aman, terhindar dari potensi bahaya yang mengancam kesehatan dan keselamatan jiwa." },
      { "id": 3, "nilai" : 2, "nama" : "Berada di lokasi aman, terhindar dari potensi bahaya yang mengancam keselamatan jiwa." },
      { "id": 4, "nilai" : 1, "nama" : "Berada di lokasi aman." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak berada di lokasi aman" }
    ],
    "jawaban": 4
  },
  {
    "id": 6057,
    "bagian_id": 338,
    "nomor": 70,
    "nama": "Sekolah berada di lokasi yang nyaman, terhindar dari gangguan pencemaran air, kebisingan, dan pencemaran udara serta memiliki sarana untuk meningkatkan kenyamanan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Berada di lokasi yang nyaman, terhindar dari gangguan pencemaran air, kebisingan, dan pencemaran udara serta memiliki sarana untuk meningkatkan kenyamanan." },
      { "id": 2, "nilai" : 3, "nama" : "Berada di lokasi yang nyaman, terhindar dari gangguan pencemaran air, kebisingan, dan pencemaran udara." },
      { "id": 3, "nilai" : 2, "nama" : "Berada di lokasi yang nyaman, terhindar dari gangguan pencemaran air dan kebisingan." },
      { "id": 4, "nilai" : 1, "nama" : "Berada di lokasi yang nyaman, terhindar dari gangguan pencemaran air." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak berada di lokasi yang nyaman" }
    ],
    "jawaban": 4
  },
  {
    "id": 6058,
    "bagian_id": 338,
    "nomor": 71,
    "nama": "Sekolah berada di lokasi yang sesuai dengan peruntukannya, memiliki status hak atas tanah dan ijin pemanfaatan dari pemegang hak atas tanah.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Berada di lokasi yang sesuai dengan peruntukannya, memiliki status hak atas tanah dan ijin pemanfaatan dari pemegang hak atas tanah." },
      { "id": 2, "nilai" : 3, "nama" : "Berada di lokasi yang sesuai dengan peruntukannya dan memiliki status hak atas tanah." },
      { "id": 3, "nilai" : 2, "nama" : "Berada di lokasi yang sesuai dengan peruntukannya dan memiliki ijin pemanfaatan dari pemegang hak atas tanah." },
      { "id": 4, "nilai" : 1, "nama" : "Berada di lokasi yang sesuai dengan peruntukannya." },
      { "id": 5, "nilai" : 0, "nama" : "Berada di lokasi yang tidak sesuai dengan peruntukannya." }
    ],
    "jawaban": 4
  },
  {
    "id": 6059,
    "bagian_id": 338,
    "nomor": 72,
    "nama": "Sekolah memiliki lantai bangunan sesuai dengan ketentuan luas minimal.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sesuai dengan ketentuan luas minimal." },
      { "id": 2, "nilai" : 3, "nama" : "90% - 99% dari ketentuan luas minimal." },
      { "id": 3, "nilai" : 2, "nama" : "80% - 89% dari ketentuan luas minimal." },
      { "id": 4, "nilai" : 1, "nama" : "70% - 79% dari ketentuan luas minimal." },
      { "id": 5, "nilai" : 0, "nama" : "Di bawah 70% dari ketentuan luas minimal." }
    ],
    "jawaban": 4
  },
  {
    "id": 6060,
    "bagian_id": 338,
    "nomor": 73,
    "nama": "Bangunan sekolah memiliki struktur yang stabil dan kukuh serta dilengkapi dengan sistem pencegahan bahaya kebakaran dan petir.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki struktur yang stabil dan kukuh serta dilengkapi dengan sistem pencegahan bahaya kebakaran dan petir" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki struktur yang stabil dan kukuh tetapi tidak dilengkapi dengan sistem pencegahan bahaya kebakaran" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki struktur yang stabil tetapi kurang kukuh dan tidak dilengkapi dengan sistem pencegahan bahaya kebakaran" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki struktur yang tidak stabil dan kurang kukuh tetapi dilengkapi dengan sistem pencegahan bahaya kebakaran" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki struktur yang stabil dan kukuh serta tidak dilengkapi dengan sistem pencegahan bahaya kebakaran." }
    ],
    "jawaban": 4
  },
  {
    "id": 6061,
    "bagian_id": 338,
    "nomor": 74,
    "nama": "Bangunan sekolah memiliki ventilasi udara dan pencahayaan yang memadai.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki ventilasi udara memadai dan pencahayaan memadai" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki ventilasi udara yang kurang memadai tetapi pencahayaan memadai" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki ventilasi udara kurang memadai dan pencahayaan kurang memadai" },
      { "id": 4, "nilai" : 1, "nama" : "Tidak memiliki ventilasi udara tetapi memiliki pencahayaan yang kurang memadai" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki ventilasi udara dan pencahayaan" }
    ],
    "jawaban": 4
  },
  {
    "id": 6062,
    "bagian_id": 338,
    "nomor": 75,
    "nama": "Bangunan sekolah memiliki sanitasi sebagai persyaratan kesehatan dan kebersihan.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki 4 jenis atau lebih sanitasi." },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki 3 jenis sanitasi." },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki 2 jenis sanitasi." },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki 1 jenis sanitasi." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki sanitasi." }
    ],
    "jawaban": 4
  },
  {
    "id": 6063,
    "bagian_id": 338,
    "nomor": 76,
    "nama": "Bangunan sekolah memiliki akses yang mudah, aman, dan nyaman serta dilengkapi pengarah jalan (akses jalan) bagi siswa berkebutuhan khusus.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki akses yang mudah, aman, dan nyaman serta dilengkapi pengarah jalan(akses jalan)." },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki akses yang mudah, aman, dan nyaman tetapi tidak dilengkapi pengarah jalan(akses jalan)." },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki akses yang mudah, nyaman dan dilengkapi pengarah jalan (akses jalan) tetapi tidak aman." },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki akses yang mudah dan dilengkapi pengarah jalan (akses jalan) tetapi tidak aman dan nyaman." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki akses." }
    ],
    "jawaban": 4
  },
  {
    "id": 6064,
    "bagian_id": 338,
    "nomor": 77,
    "nama": "Bangunan sekolah terhindar dari gangguan kebisingan dan getaran, serta memiliki penghawaan dan pencahayaan yang baik.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Bangunan terhindar dari gangguan kebisingan dan getaran, serta memiliki penghawaan dan pencahayaan yang baik" },
      { "id": 2, "nilai" : 3, "nama" : "Bangunan terhindar dari gangguan kebisingan dan getaran, memiliki penghawaan yang baik tetapi tidak memiliki pencahayaan yang baik" },
      { "id": 3, "nilai" : 2, "nama" : "Bangunan terhindar dari gangguan kebisingan dan getaran, tetapi tidak memiliki penghawaan dan pencahayaan yang baik" },
      { "id": 4, "nilai" : 1, "nama" : "Bangunan terhindar dari gangguan kebisingan tetapi ada gangguan getaran, serta tidak memiliki penghawaan dan pencahayaan yang baik" },
      { "id": 5, "nilai" : 0, "nama" : "Bangunan tidak dapat terhindar dari gangguan kebisingan dan getaran, serta tidak memiliki penghawaan dan pencahayaan yang baik." }
    ],
    "jawaban": 4
  },
  {
    "id": 6065,
    "bagian_id": 338,
    "nomor": 78,
    "nama": "Bangunan sekolah memiliki tanda peringatan bahaya, pintu keluar darurat, dan jalur evakuasi yang dilengkapi penunjuk arah jika terjadi bencana kebakaran dan/atau bencana lainnya.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki tanda peringatan bahaya, pintu keluar darurat, dan jalur evakuasi yang dilengkapi penunjuk arah yang jelas" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki tanda peringatan bahaya, pintu keluar darurat, dan jalur evakuasi tetapi tidak dilengkapi penunjuk arah yang jelas" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki tanda peringatan bahaya dan pintu keluar darurat tetapi tidak memiliki jalur evakuasi" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki tanda peringatan bahaya tetapi tidak memiliki pintu keluar darurat dan jalur evakuasi" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki tanda peringatan bahaya, pintu keluar darurat, dan jalur evakuasi" }
    ],
    "jawaban": 4
  },
  {
    "id": 6066,
    "bagian_id": 338,
    "nomor": 79,
    "nama": "Bangunan sekolah memiliki instalasi listrik atau sumber daya lain, minimum 1300 watt.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki instalasi listrik dengan daya 1300 watt atau lebih" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki instalasi listrik dengan daya 900 watt" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki instalasi listrik dengan daya 450 watt" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki instalasi listrik dengan memanfaatkan sumber daya lain yang digunakan secara bersama" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki instalasi listrik" }
    ],
    "jawaban": 4
  },
  {
    "id": 6067,
    "bagian_id": 338,
    "nomor": 80,
    "nama": "Sekolah melakukan pemeliharaan terhadap bangunan secara berkala.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melakukan pemeliharaan ringan dan berat terhadap bangunan secara berkala sesuai ketentuan" },
      { "id": 2, "nilai" : 3, "nama" : "Melakukan pemeliharaan ringan dan berat terhadap bangunan, tetapi melebihi waktu dalam ketentuan" },
      { "id": 3, "nilai" : 2, "nama" : "Melakukan pemeliharaan ringan tetapi melebihi waktu yang sesuai ketentuan, dan tidak pernah melakukan pemeliharaan berat" },
      { "id": 4, "nilai" : 1, "nama" : "Melakukan pemeliharaan terhadap bangunan, jika sudah ada bagian bangunan yang rusak berat" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak pernah melakukan pemeliharaan" }
    ],
    "jawaban": 4
  },
  {
    "id": 6068,
    "bagian_id": 338,
    "nomor": 81,
    "nama": "Tidak pernah melakukan pemeliharaan",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki izin mendirikan bangunan dan izin penggunaan bangunan sesuai dengan peruntukannya sebelum bangunan berdiri" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki izin mendirikan bangunan, dan memiliki izin penggunaan bangunan sesuai dengan peruntukannya setelah bangunan berdiri" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki izin mendirikan dan memiliki izin penggunaan bangunan sementara" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki izin mendirikan tetapi tidak memiliki izin penggunaan bangunan" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki izin mendirikan bangunan dan izin penggunaan bangunan" }
    ],
    "jawaban": 4
  },
  {
    "id": 6069,
    "bagian_id": 338,
    "nomor": 82,
    "nama": "Sekolah memiliki prasarana yang lengkap sesuai ketentuan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki 13 atau lebih jenis prasarana yang dipersyaratkan" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki 10 - 12 jenis prasarana yang dipersyaratkan" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki 7 - 9 jenis prasarana yang dipersyaratkan" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki 4 - 6 jenis prasarana yang dipersyaratkan" },
      { "id": 5, "nilai" : 0, "nama" : "Memiliki 1 - 3 jenis prasarana yang dipersyaratkan" }
    ],
    "jawaban": 4
  },
  {
    "id": 6070,
    "bagian_id": 338,
    "nomor": 83,
    "nama": "Sekolah memiliki ruang kelas dengan jumlah, ukuran, dan sarana sesuai ketentuan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki ruang kelas dengan jumlah, ukuran, dan sarana sesuai ketentuan" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki ruang kelas dengan jumlah dan ukuran tidak sesuai ketentuan tetapi memiliki sarana sesuai ketentuan" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki ruang kelas dengan jumlah dan ukuran sesuai ketentuan tetapi memiliki sarana tidak sesuai ketentuan" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki ruang kelas dengan ukuran, jumlah, dan sarana tidak sesuai ketentuan" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki ruang kelas atau gedung sendiri" }
    ],
    "jawaban": 4
  },
  {
    "id": 6071,
    "bagian_id": 338,
    "nomor": 84,
    "nama": "Sekolah memiliki ruang perpustakaan dengan luas dan sarana sesuai ketentuan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki ruang perpustakaan dengan luas dan sarana sesuai dengan ketentuan" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki ruang perpustakaan dengan luas tidak sesuai ketentuan tetapi memiliki sarana sesuai ketentuan" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki ruang perpustakaan dengan luas sesuai ketentuan tetapi memiliki sarana tidak sesuai ketentuan" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki ruang perpustakaan dengan luas dan sarana tidak sesuai ketentuan" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki ruang perpustakaan" }
    ],
    "jawaban": 4
  },
  {
    "id": 6072,
    "bagian_id": 338,
    "nomor": 85,
    "nama": "Perpustakaan sekolah memiliki berbagai koleksi buku dengan jenis dan rasio sesuai ketentuan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki berbagai buku dengan jenis dan rasio sesuai ketentuan" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki koleksi dengan jenis buku sesuai ketentuan tetapi memiliki rasio buku tidak sesuai ketentuan" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki koleksi dengan jenis buku tidak sesuai ketentuan tetapi memiliki rasio buku sesuai ketentuan" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki koleksi berbagai buku dengan jenis dan rasio tidak sesuai ketentuan" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki koleksi berbagai buku" }
    ],
    "jawaban": 4
  },
  {
    "id": 6073,
    "bagian_id": 338,
    "nomor": 86,
    "nama": "<strong>Khusus untuk jenis ketunaan A, B, D, dan E:</strong> <br >Sekolah memiliki buku teks pelajaran dengan jumlah yang memadai. <br ><br > <strong>Khusus untuk jenis ketunaan C, C1, D1, dan G: </strong> <br> Sekolah memiliki buku pendukung pembelajaran.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "<strong>Khusus untuk jenis ketunaan A, B, D, dan E:</strong> <br > Ratio: 1 buku teks/mata pelajaran/siswa. <br> <br> <strong>Khusus untuk jenis ketunaan C, C1, D1, dan G: </strong> <br> Buku pendukung disusun oleh guru yang bersangkutan" },
      { "id": 2, "nilai" : 3, "nama" : "<strong>Khusus untuk jenis ketunaan A, B, D, dan E:</strong> <br > Ratio: 1 buku teks/mata pelajaran untuk 2 - 3 siswa.<br> <br> <strong>Khusus untuk jenis ketunaan C, C1, D1, dan G: </strong> <br> Buku pendukung disusun oleh tim guru sekolah" },
      { "id": 3, "nilai" : 2, "nama" : "<strong>Khusus untuk jenis ketunaan A, B, D, dan E:</strong> <br > Ratio: 1 buku teks/mata pelajaran untuk 4 - 5 siswa. <br> <br> <strong>Khusus untuk jenis ketunaan C, C1, D1, dan G: </strong> <br> Buku pendukung dimodifikasi dari sekolah lain" },
      { "id": 4, "nilai" : 1, "nama" : "<strong>Khusus untuk jenis ketunaan A, B, D, dan E:</strong> <br > Ratio: 1 buku teks/mata pelajaran untuk 6 siswa atau lebih <br> <br> <strong>Khusus untuk jenis ketunaan C, C1, D1, dan G: </strong> <br> Buku pendukung diperoleh dari sekolah lain" },
      { "id": 5, "nilai" : 0, "nama" : "<strong>Khusus untuk jenis ketunaan A, B, D, dan E:</strong> <br > Tidak memiliki buku teks <br> <br> <strong>Khusus untuk jenis ketunaan C, C1, D1, dan G: </strong> <br> Tidak memiliki buku pendukung pembelajaran" }
    ],
    "jawaban": 4
  },
  {
    "id": 6074,
    "bagian_id": 338,
    "nomor": 87,
    "nama": "Sekolah memanfaatkan buku teks pelajaran atau buku pendukung pembelajaran.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Lebih dari 9 mata pelajaran atau lebih menggunakan buku teks atau buku pendukung" },
      { "id": 2, "nilai" : 3, "nama" : "7 - 9 mata pelajaran menggunakan buku teks atau buku pendukung" },
      { "id": 3, "nilai" : 2, "nama" : "4 - 6 mata pelajaran menggunakan buku teks atau buku pendukung" },
      { "id": 4, "nilai" : 1, "nama" : "1 - 3 mata pelajaran menggunakan buku teks atau buku pendukung" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak satu pun mata pelajaran menggunakan buku teks atau buku pendukung" }
    ],
    "jawaban": 4
  },
  {
    "id": 6075,
    "bagian_id": 338,
    "nomor": 88,
    "nama": "Sekolah memiliki ruang pembelajaran khusus dengan luas dan sarana sesuai ketentuan masing-masing jenis ketunaan.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki ruang pembelajaran khusus dengan luas dan sarana sesuai dengan ketentuan" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki ruang pembelajaran khusus dengan luas tidak sesuai ketentuan tetapi memiliki sarana sesuai ketentuan" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki ruang pembelajaran khusus dengan luas sesuai ketentuan tetapi memiliki sarana tidak sesuai ketentuan" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki ruang pembelajaran khusus dengan luas dan sarana tidak sesuai ketentuan" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki ruang pembelajaran khusus" }
    ],
    "jawaban": 4
  },
  {
    "id": 6076,
    "bagian_id": 338,
    "nomor": 89,
    "nama": "Sekolah memiliki ruang keterampilan dengan jumlah dan luas sesuai ketentuan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki ruang keterampilan dengan jumlah dan luas sesuai ketentuan" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki ruang keterampilan dengan jumlah sesuai ketentuan tetapi memiliki luas tidak sesuai ketentuan" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki ruang keterampilan dengan jumlah tidak sesuai ketentuan tetapi memiliki luas sesuai ketentuan" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki ruang keterampilan dengan jumlah dan luas tidak sesuai ketentuan" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki ruang keterampilan" }
    ],
    "jawaban": 4
  },
  {
    "id": 6077,
    "bagian_id": 338,
    "nomor": 90,
    "nama": "Sekolah memiliki ruang pimpinan dengan luas dan sarana sesuai ketentuan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki ruang pimpinan dengan luas dan sarana sesuai ketentuan" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki ruang pimpinan dengan luas tidak sesuai ketentuan tetapi memiliki sarana sesuai ketentuan" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki ruang pimpinan dengan luas sesuai ketentuan tetapi memiliki sarana tidak sesuai ketentuan" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki ruang pimpinan dengan luas dan sarana tidak sesuai ketentuan" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki ruang pimpinan" }
    ],
    "jawaban": 4
  },
  {
    "id": 6078,
    "bagian_id": 338,
    "nomor": 91,
    "nama": "Sekolah memiliki ruang guru dengan luas dan sarana sesuai ketentuan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki ruang guru dengan luas dan sarana sesuai ketentuan" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki ruang guru dengan luas tidak sesuai ketentuan tetapi memiliki sarana sesuai ketentuan" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki ruang guru dengan luas sesuai ketentuan tetapi memiliki sarana tidak sesuai ketentuan" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki ruang guru dengan luas dan sarana tidak sesuai ketentuan" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki ruang guru" }
    ],
    "jawaban": 4
  },
  {
    "id": 6079,
    "bagian_id": 338,
    "nomor": 92,
    "nama": "Sekolah memiliki ruang tata usaha dengan luas dan sarana sesuai ketentuan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki ruang tata usaha dengan luas dan sarana sesuai ketentuan" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki ruang tata usaha dengan luas tidak sesuai ketentuan tetapi memiliki sarana sesuai ketentuan" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki ruang tata usaha dengan luas sesuai ketentuan tetapi memiliki sarana tidak sesuai ketentuan" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki ruang tata usaha dengan luas dan sarana tidak sesuai ketentuan" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki ruang tata usaha" }
    ],
    "jawaban": 4
  },
  {
    "id": 6080,
    "bagian_id": 338,
    "nomor": 93,
    "nama": "Sekolah memiliki tempat beribadah bagi warga sekolah dengan luas dan sarana sesuai ketentuan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki tempat beribadah dengan luas dan sarana sesuai ketentuan" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki tempat beribadah dengan luas sesuai ketentuan tetapi memiliki sarana tidak sesuai ketentuan" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki tempat beribadah dengan luas tidak sesuai ketentuan tetapi memiliki sarana sesuai ketentuan" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki tempat beribadah dengan luas dan sarana tidak sesuai ketentuan" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki tempat beribadah" }
    ],
    "jawaban": 4
  },
  {
    "id": 6081,
    "bagian_id": 338,
    "nomor": 94,
    "nama": "Sekolah memiliki ruang UKS dengan dengan luas dan sarana sesuai ketentuan.",
    "bobot": 2,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki ruang UKS dengan luas dan sarana sesuai ketentuan" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki ruang UKS dengan luas tidak sesuai ketentuan tetapi memiliki sarana sesuai ketentuan" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki ruang UKS dengan luas sesuai ketentuan tetapi memiliki sarana tidak sesuai ketentuan" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki ruang UKS dengan luas dan sarana tidak sesuai ketentuan" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki ruang UKS" }
    ],
    "jawaban": 4
  },
  {
    "id": 6082,
    "bagian_id": 338,
    "nomor": 95,
    "nama": "Sekolah memiliki ruang konseling/asesmen dengan luas dan sarana sesuai ketentuan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki ruang konseling/asesmen dengan luas dan sarana sesuai ketentuan" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki ruang konseling/asesmen dengan luas tidak sesuai ketentuan tetapi memiliki sarana sesuai ketentuan" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki ruang konseling/asesmen dengan luas sesuai ketentuan tetapi memiliki sarana tidak sesuai ketentuan" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki ruang konseling/asesmen dengan luas dan sarana tidak sesuai ketentuan" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki ruang konseling/asesmen" }
    ],
    "jawaban": 4
  },
  {
    "id": 6083,
    "bagian_id": 338,
    "nomor": 96,
    "nama": "Sekolah memiliki ruang organisasi kesiswaan dengan luas dan sarana sesuai ketentuan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki ruang organisasi kesiswaan dengan luas dan sarana sesuai ketentuan" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki ruang organisasi kesiswaan dengan luas sesuai ketentuan tetapi memiliki sarana tidak sesuai ketentuan" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki ruang organisasi kesiswaan dengan luas tidak sesuai ketentuan tetapi memiliki sarana sesuai ketentuan" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki ruang organisasi kesiswaan dengan luas dan sarana tidak sesuai ketentuan" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki ruang organisasi kesiswaan" }
    ],
    "jawaban": 4
  },
  {
    "id": 6084,
    "bagian_id": 338,
    "nomor": 97,
    "nama": "Sekolah memiliki jamban dengan jumlah, ukuran, dan sarana sesuai ketentuan.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki jamban dengan jumlah, ukuran, dan sarana sesuai ketentuan" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki jamban dengan jumlah dan ukuran tidak sesuai ketentuan tetapi memiliki sarana sesuai dengan ketentuan" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki jamban dengan jumlah dan ukuran sesuai ketentuan tetapi memiliki sarana tidak sesuai ketentuan" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki jamban dengan jumlah, ukuran, dan sarana tidak sesuai ketentuan" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki jamban" }
    ],
    "jawaban": 4
  },
  {
    "id": 6085,
    "bagian_id": 338,
    "nomor": 98,
    "nama": "Sekolah memiliki gudang dengan luas dan sarana sesuai ketentuan.",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki gudang dengan luas dan sarana sesuai ketentuan" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki gudang dengan luas sesuai ketentuan tetapi memiliki sarana tidak sesuai ketentuan" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki gudang dengan luas tidak sesuai ketentuan tetapi memiliki sarana sesuai ketentuan" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki gudang dengan luas dan sarana tidak sesuai ketentuan" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki gudang" }
    ],
    "jawaban": 4
  },
  {
    "id": 6086,
    "bagian_id": 338,
    "nomor": 99,
    "nama": "Sekolah memiliki ruang sirkulasi dengan luas dan kualitas sesuai ketentuan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki ruang sirkulasi dengan luas dan kualitas sesuai ketentuan" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki ruang sirkulasi dengan luas tidak sesuai ketentuan tetapi memiliki kualitas sesuai ketentuan" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki ruang sirkulasi dengan luas sesuai ketentuan tetapi memiliki kualitas tidak ketentuan" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki ruang sirkulasi dengan luas dan kualitas tidak sesuai ketentuan" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki ruang sirkulasi" }
    ],
    "jawaban": 4
  },
  {
    "id": 6087,
    "bagian_id": 338,
    "nomor": 100,
    "nama": "Sekolah memiliki tempat bermain/berolahraga dengan ukuran dan sarana sesuai ketentuan",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki tempat bermain/berolahraga dengan ukuran dan sarana sesuai ketentuan" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki tempat bermain/berolahraga dengan ukuran tidak sesuai ketentuan tetapi memiliki sarana sesuai ketentuan" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki tempat bermain/berolahraga dengan ukuran sesuai ketentuan tetapi memiliki sarana tidak sesuai ketentuan" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki tempat bermain/berolahraga dengan ukuran dan sarana tidak sesuai ketentuan" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki tempat bermain/berolahraga" }
    ],
    "jawaban": 4
  },
  {
    "id": 6088,
    "bagian_id": 339,
    "nomor": 101,
    "nama": "Sekolah telah merumuskan, menetapkan, dan mensosialisasikan visi lembaga.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Merumuskan dan menetapkan visi, mudah dipahami, sering disosialisasikan, dan dipasang pada tempat yang mudah dibaca" },
      { "id": 2, "nilai" : 3, "nama" : "Merumuskan dan menetapkan visi, mudah dipahami dan sering disosialisasikan" },
      { "id": 3, "nilai" : 2, "nama" : "Merumuskan dan menetapkan visi, mudah dipahami tetapi tidak disosialisasikan" },
      { "id": 4, "nilai" : 1, "nama" : "Merumuskan dan menetapkan visi, sulit dipahami dan tidak disosialisasikan" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak merumuskan dan menetapkan visi" }
    ],
    "jawaban": 4
  },
  {
    "id": 6089,
    "bagian_id": 339,
    "nomor": 102,
    "nama": "Sekolah telah merumuskan, menetapkan, dan mensosialisasikan misi lembaga.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Merumuskan dan menetapkan misi, mudah dipahami, sering disosialisasikan, dan dan dipasang pada tempat yang mudah dibaca" },
      { "id": 2, "nilai" : 3, "nama" : "Merumuskan dan menetapkan misi, mudah dipahami dan sering disosialisasikan" },
      { "id": 3, "nilai" : 2, "nama" : "Merumuskan dan menetapkan misi, mudah dipahami tetapi tidak disosialisasikan" },
      { "id": 4, "nilai" : 1, "nama" : "Merumuskan dan menetapkan misi, sulit dipahami dan tidak disosialisasikan" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak merumuskan dan menetapkan misi" }
    ],
    "jawaban": 4
  },
  {
    "id": 6092,
    "bagian_id": 339,
    "nomor": 105,
    "nama": "Sekolah memiliki pedoman yang mengatur berbagai aspek pengelolaan secara tertulis yang mudah dipahami oleh pihak-pihak terkait",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki 7 - 8 dokumen tertulis tentang aspek pengelolaan" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki 5 - 6 dokumen tertulis tentang aspek pengelolaan" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki 3 - 4 dokumen tertulis tentang aspek pengelolaan." },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki 1 - 2 dokumen tertulis tentang aspek pengelolaan" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki dokumen tertulis tentang aspek pengelolaan." }
    ],
    "jawaban": 4
  },
  {
    "id": 6093,
    "bagian_id": 339,
    "nomor": 106,
    "nama": "Sekolah memiliki struktur organisasi dengan uraian tugas yang jelas",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki struktur organisasi dengan uraian tugas yang jelas yang dipajang di dinding." },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki struktur organisasi dengan uraian tugas yang jelas." },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki struktur organisasi dengan uraian tugas, tetapi tidak jelas." },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki struktur organisasi tetapi tidak ada uraian tugas." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki struktur organisasi." }
    ],
    "jawaban": 4
  },
  {
    "id": 6094,
    "bagian_id": 339,
    "nomor": 107,
    "nama": "Sekolah melaksanakan kegiatan sesuai dengan rencana kerja tahunan (RKT).",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "76% - 100% kegiatan dilaksanakan sesuai RKT." },
      { "id": 2, "nilai" : 3, "nama" : "51% - 75% kegiatan dilaksanakan sesuai RKT." },
      { "id": 3, "nilai" : 2, "nama" : "26% - 50% kegiatan dilaksanakan sesuai RKT." },
      { "id": 4, "nilai" : 1, "nama" : "1% - 25% kegiatan dilaksanakan sesuai RKT." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melaksanakan kegiatan sesuai RKT." }
    ],
    "jawaban": 4
  },
  {
    "id": 6095,
    "bagian_id": 339,
    "nomor": 108,
    "nama": "Sekolah melaksanakan kegiatan kesiswaan.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melaksanakan 4 atau lebih kegiatan kesiswaan" },
      { "id": 2, "nilai" : 3, "nama" : "Melaksanakan 3 kegiatan kesiswaan." },
      { "id": 3, "nilai" : 2, "nama" : "Melaksanakan 2 kegiatan kesiswaan" },
      { "id": 4, "nilai" : 1, "nama" : "Melaksanakan 1 kegiatan kesiswaan" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melaksanakan kegiatan kesiswaan" }
    ],
    "jawaban": 4
  },
  {
    "id": 6096,
    "bagian_id": 339,
    "nomor": 109,
    "nama": "Sekolah melaksanakan kegiatan pengembangan kurikulum dan pembelajaran.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melaksanakan 4 atau lebih kegiatan pengembangan kurikulum dan pembelajaran" },
      { "id": 2, "nilai" : 3, "nama" : "Melaksanakan 3 kegiatan pengembangan kurikulum dan pembelajaran" },
      { "id": 3, "nilai" : 2, "nama" : "Melaksanakan 2 kegiatan pengembangan kurikulum dan pembelajaran" },
      { "id": 4, "nilai" : 1, "nama" : "Melaksanakan 1 kegiatan pengembangan kurikulum dan pembelajaran" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melaksanakan kegiatan pengembangan kurikulum dan pembelajaran" }
    ],
    "jawaban": 4
  },
  {
    "id": 6097,
    "bagian_id": 339,
    "nomor": 110,
    "nama": "Sekolah melaksanakan program pendayagunaan pendidik dan tenaga kependidikan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melaksanakan 4 atau lebih program pendayagunaan" },
      { "id": 2, "nilai" : 3, "nama" : "Melaksanakan 3 program pendayagunaan" },
      { "id": 3, "nilai" : 2, "nama" : "Melaksanakan 2 program pendayagunaan" },
      { "id": 4, "nilai" : 1, "nama" : "Melaksanakan 1 program pendayagunaan" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melaksanakan program pendayagunaan" }
    ],
    "jawaban": 4
  },
  {
    "id": 6098,
    "bagian_id": 339,
    "nomor": 111,
    "nama": "Sekolah mengelola program sarana dan prasarana pembelajaran",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Mengelola 4 atau lebih program sarana dan prasarana" },
      { "id": 2, "nilai" : 3, "nama" : "Mengelola 3 program sarana dan prasarana" },
      { "id": 3, "nilai" : 2, "nama" : "Mengelola 2 program sarana dan prasarana" },
      { "id": 4, "nilai" : 1, "nama" : "Mengelola 1 program sarana dan prasarana" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak mengelola program sarana dan prasarana" }
    ],
    "jawaban": 4
  },
  {
    "id": 6099,
    "bagian_id": 339,
    "nomor": 112,
    "nama": "Sekolah mengelola program pembiayaan pendidikan.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Mengelola 4 program pengelolaan pembiayaan pendidikan" },
      { "id": 2, "nilai" : 3, "nama" : "Mengelola 3 program pengelolaan pembiayaan pendidikan" },
      { "id": 3, "nilai" : 2, "nama" : "Mengelola 2 program pengelolaan pembiayaan pendidikan" },
      { "id": 4, "nilai" : 1, "nama" : "Mengelola 1 program pengelolaan pembiayaan pendidikan" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak mengelola program pengelolaan pembiayaan pendidikan" }
    ],
    "jawaban": 4
  },
  {
    "id": 6100,
    "bagian_id": 339,
    "nomor": 113,
    "nama": "Sekolah melaksanakan kegiatan yang dapat menciptakan suasana, iklim, dan lingkungan pembelajaran yang kondusif",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melaksanakan 4 atau lebih kegiatan" },
      { "id": 2, "nilai" : 3, "nama" : "Melaksanakan 3 kegiatan" },
      { "id": 3, "nilai" : 2, "nama" : "Melaksanakan 2 kegiatan" },
      { "id": 4, "nilai" : 1, "nama" : "Melaksanakan 1 kegiatan" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melaksanakan kegiatan" }
    ],
    "jawaban": 4
  },
  {
    "id": 6101,
    "bagian_id": 339,
    "nomor": 114,
    "nama": "Sekolah melaksanakan berbagai kegiatan yang melibatkan masyarakat dan membangun kemitraan dengan lembaga lain yang relevan dalam pengelolaan pendidikan",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melaksanakan 4 atau lebih kegiatan yang melibatkan masyarakat" },
      { "id": 2, "nilai" : 3, "nama" : "Melaksanakan 3 kegiatan yang melibatkan masyarakat" },
      { "id": 3, "nilai" : 2, "nama" : "Melaksanakan 2 kegiatan yang melibatkan masyarakat" },
      { "id": 4, "nilai" : 1, "nama" : "Melaksanakan 1 kegiatan yang melibatkan masyarakat" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melaksanakan kegiatan yang melibatkan masyarakat" }
    ],
    "jawaban": 4
  },
  {
    "id": 6102,
    "bagian_id": 339,
    "nomor": 115,
    "nama": "Sekolah melaksanakan program pengawasan yang disosialisasikan kepada pendidik dan tenaga kependidikan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melaksanakan 4 atau lebih program pengawasan" },
      { "id": 2, "nilai" : 3, "nama" : "Melaksanakan 3 program pengawasan" },
      { "id": 3, "nilai" : 2, "nama" : "Melaksanakan 2 program pengawasan" },
      { "id": 4, "nilai" : 1, "nama" : "Melaksanakan 1 program pengawasan" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melaksanakan program pengawasan" }
    ],
    "jawaban": 4
  },
  {
    "id": 6103,
    "bagian_id": 339,
    "nomor": 116,
    "nama": "Sekolah melaksanakan kegiatan evaluasi diri.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melaksanakan evaluasi diri minimun sekali dalam 1 semester" },
      { "id": 2, "nilai" : 3, "nama" : "Melaksanakan evaluasi diri sekali dalam 2 semester" },
      { "id": 3, "nilai" : 2, "nama" : "Melaksanakan evaluasi diri sekali dalam 3 semester" },
      { "id": 4, "nilai" : 1, "nama" : "Melaksanakan evaluasi diri sekali dalam 4 semester" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melaksanakan evaluasi diri" }
    ],
    "jawaban": 4
  },
  {
    "id": 6104,
    "bagian_id": 339,
    "nomor": 117,
    "nama": "Sekolah melaksanakan program evaluasi kinerja pendidik dan tenaga kependidikan.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melaksanakan 4 atau lebih program evaluasi kinerja pendidik dan tenaga kependidikan" },
      { "id": 2, "nilai" : 3, "nama" : "Melaksanakan 3 program evaluasi kinerja pendidik dan tenaga kependidikan" },
      { "id": 3, "nilai" : 2, "nama" : "Melaksanakan 2 program evaluasi kinerja pendidik dan tenaga kependidikan" },
      { "id": 4, "nilai" : 1, "nama" : "Melaksanakan 1 program evaluasi kinerja pendidik dan tenaga kependidikan" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melakukan program evaluasi kinerja pendidik dan tenaga kependidikan" }
    ],
    "jawaban": 4
  },
  {
    "id": 6105,
    "bagian_id": 339,
    "nomor": 118,
    "nama": "Sekolah mempersiapkan diri untuk diakreditasi.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Mempersiapkan 4 komponen persiapan akreditasi" },
      { "id": 2, "nilai" : 3, "nama" : "Mempersiapkan 3 komponen persiapan akreditasi" },
      { "id": 3, "nilai" : 2, "nama" : "Mempersiapkan 2 komponen persiapan akreditasi" },
      { "id": 4, "nilai" : 1, "nama" : "Mempersiapkan 1 komponen persiapan akreditasi" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak mempersiapkan komponen persiapan akreditasi" }
    ],
    "jawaban": 4
  },
  {
    "id": 6106,
    "bagian_id": 339,
    "nomor": 119,
    "nama": "Sekolah memiliki struktur kepemimpinan sesuai standar pendidik dan tenaga kependidikan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki kepala sekolah dan 1 atau lebih wakil kepala sekolah yang dipilih oleh dewan guru" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki kepala sekolah dan 1 atau lebih wakil kepala sekolah yang tidak dipilih oleh dewan guru" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki kepala sekolah dan 1 atau lebih guru yang ditugaskan untuk melakukan fungsi sebagai wakil kepala wekolah" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki kepala sekolah tetapi tidak memiliki wakil kepala sekolah" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki kepala sekolah dan wakil kepala sekolah" }
    ],
    "jawaban": 4
  },
  {
    "id": 6107,
    "bagian_id": 339,
    "nomor": 120,
    "nama": "Sekolah memiliki sistem informasi manajemen untuk mendukung administrasi pendidikan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki sistem informasi, fasilitas, dan petugas khusus." },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki sistem informasi dan fasilitas, tetapi tidak memiliki petugas khusus." },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki sistem informasi dan petugas khusus, tetapi tidak memiliki fasilitas." },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki sistem informasi tetapi tidak memiliki fasilitas dan/atau petugas khusus." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki sistem informasi." }
    ],
    "jawaban": 4
  },
  {
    "id": 6108,
    "bagian_id": 340,
    "nomor": 121,
    "nama": "Sekolah memiliki laporan tahunan yang berisi catatan tentang nilai aset sarana dan prasarana secara menyeluruh.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki laporan tahunan 4 tahun terakhir." },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki laporan tahunan 3 tahun terakhir." },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki laporan tahunan 3 tahun terakhir" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki laporan tahunan 1 tahun terakhir" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki laporan tahunan" }
    ],
    "jawaban": 4
  },
  {
    "id": 6109,
    "bagian_id": 340,
    "nomor": 122,
    "nama": "Sekolah membelanjakan alokasi biaya untuk pengembangan pendidik dan tenaga kependidikan (PTK) berdasarkan Rencana Kerja dan Anggaran Sekolah (RKAS).",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Membelanjakan biaya 91% - 100% dari mata anggaran pengembangan PTK dalam RKAS." },
      { "id": 2, "nilai" : 3, "nama" : "Membelanjakan biaya 81% - 90% dari mata anggaran pengembangan PTK dalam RKAS." },
      { "id": 3, "nilai" : 2, "nama" : "Membelanjakan biaya 71% - 80% dari mata anggaran pengembangan PTK dalam RKAS." },
      { "id": 4, "nilai" : 1, "nama" : "Membelanjakan biaya 61% - 70% dari mata anggaran pengembangan PTK dalam RKAS." },
      { "id": 5, "nilai" : 0, "nama" : "Membelanjakan biaya di bawah 61% dari mata anggaran pengembangan PTK dalam RKAS." }
    ],
    "jawaban": 4
  },
  {
    "id": 6110,
    "bagian_id": 340,
    "nomor": 123,
    "nama": "Sekolah memiliki modal kerja untuk membiayai seluruh kebutuhan pendidikan selama satu tahun terakhir.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki 91% - 100% modal kerja." },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki 81% - 90% modal kerja." },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki 71% - 80% modal kerja" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki 61% - 70% modal kerja." },
      { "id": 5, "nilai" : 0, "nama" : "Memiliki kurang dari 61% modal kerja." }
    ],
    "jawaban": 4
  },
  {
    "id": 6119,
    "bagian_id": 340,
    "nomor": 132,
    "nama": "Sekolah menyediakan biaya pengadaan transport dan perjalanan dinas selama satu tahun terakhir.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Mengeluarkan biaya 91% - 100% dari alokasi anggaran." },
      { "id": 2, "nilai" : 3, "nama" : "Mengeluarkan biaya 81% - 90% dari alokasi anggaran." },
      { "id": 3, "nilai" : 2, "nama" : "Mengeluarkan biaya 71% - 80% dari alokasi anggaran." },
      { "id": 4, "nilai" : 1, "nama" : "Mengeluarkan biaya 61% - 70% dari alokasi anggaran." },
      { "id": 5, "nilai" : 0, "nama" : "Mengeluarkan biaya di bawah 61% dari alokasi anggaran." }
    ],
    "jawaban": 4
  },
  {
    "id": 6120,
    "bagian_id": 340,
    "nomor": 133,
    "nama": "Sekolah menyediakan biaya penggandaan soal-soal ulangan/ujian selama satu tahun terakhir.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Mengeluarkan biaya 91% - 100% dari alokasi anggaran." },
      { "id": 2, "nilai" : 3, "nama" : "Mengeluarkan biaya 81% - 90% dari alokasi anggaran." },
      { "id": 3, "nilai" : 2, "nama" : "Mengeluarkan biaya 71% - 80% dari alokasi anggaran." },
      { "id": 4, "nilai" : 1, "nama" : "Mengeluarkan biaya 61% - 70% dari alokasi anggaran." },
      { "id": 5, "nilai" : 0, "nama" : "Mengeluarkan biaya di bawah 61% dari alokasi anggaran" }
    ],
    "jawaban": 4
  },
  {
    "id": 6121,
    "bagian_id": 340,
    "nomor": 134,
    "nama": "Sekolah menyediakan biaya pengadaan daya dan jasa selama satu tahun terakhir.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Mengeluarkan biaya 91% - 100% dari alokasi anggaran." },
      { "id": 2, "nilai" : 3, "nama" : "Mengeluarkan biaya 81% - 90% dari alokasi anggaran." },
      { "id": 3, "nilai" : 2, "nama" : "Mengeluarkan biaya 71% - 80% dari alokasi anggaran." },
      { "id": 4, "nilai" : 1, "nama" : "Mengeluarkan biaya 61% - 70% dari alokasi anggaran." },
      { "id": 5, "nilai" : 0, "nama" : "Mengeluarkan biaya di bawah 61% dari alokasi anggaran" }
    ],
    "jawaban": 4
  },
  {
    "id": 6122,
    "bagian_id": 340,
    "nomor": 135,
    "nama": "Sekolah menyediakan anggaran untuk mendukung kegiatan operasional tidak langsung selama tiga tahun terakhir.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Mengeluarkan biaya 91% - 100% dari alokasi anggaran." },
      { "id": 2, "nilai" : 3, "nama" : "Mengeluarkan biaya 81% - 90% dari alokasi anggaran." },
      { "id": 3, "nilai" : 2, "nama" : "Mengeluarkan biaya 71% - 80% dari alokasi anggaran." },
      { "id": 4, "nilai" : 1, "nama" : "Mengeluarkan biaya 61% - 70% dari alokasi anggaran." },
      { "id": 5, "nilai" : 0, "nama" : "Mengeluarkan biaya di bawah 61% dari alokasi anggaran" }
    ],
    "jawaban": 4
  },
  {
    "id": 6123,
    "bagian_id": 340,
    "nomor": 136,
    "nama": "Sumbangan pendidikan atau dana dari masyarakat digunakan untuk kesejahteraan dan peningkatan mutu pendidikan di sekolah.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Digunakan untuk kesejahteraan warga sekolah, pengembangan guru dan tenaga kependidikan, sarana prasarana, pengembangan kurikulum dan kegiatan pembelajaran, serta kegiatan ketatausahaan" },
      { "id": 2, "nilai" : 3, "nama" : "Digunakan untuk kesejahteraan warga sekolah, pengembangan guru dan tenaga kependidikan, sarana prasarana, dan pengembangan kurikulum dan kegiatan pembelajaran, tetapi tidak untuk kegiatan ketatausahaan" },
      { "id": 3, "nilai" : 2, "nama" : "Digunakan untuk kesejahteraan warga sekolah, pengembangan guru dan tenaga kependidikan, dan sarana prasarana, tetapi tidak untuk pengembangan kurikulum dan kegiatan pembelajaran, serta kegiatan ketatausahaan" },
      { "id": 4, "nilai" : 1, "nama" : "Digunakan untuk kesejahteraan warga sekolah serta pengembangan guru dan tenaga kependidikan, tetapi tidak untuk sarana dan prasarana, pengembangan kurikulum dan pembelajaran, serta kegiatan ketatausahaan" },
      { "id": 5, "nilai" : 0, "nama" : "Hanya digunakan untuk kesejahteraan warga sekolah" }
    ],
    "jawaban": 4
  },
  {
    "id": 6124,
    "bagian_id": 340,
    "nomor": 137,
    "nama": "Penetapan uang sekolah (iuran bulanan) mempertimbangkan kemampuan ekonomi orangtua siswa.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "91% - 100% siswa dari keluarga tidak mampu mendapatkan keringanan" },
      { "id": 2, "nilai" : 3, "nama" : "81% - 90% siswa dari keluarga tidak mampu mendapatkan keringanan" },
      { "id": 3, "nilai" : 2, "nama" : "71% - 80% siswa dari keluarga tidak mampu mendapatkan keringanan" },
      { "id": 4, "nilai" : 1, "nama" : "61% - 70% siswa dari keluarga tidak mampu mendapatkan keringanan" },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 61% siswa dari keluarga tidak mampu mendapatkan keringanan" }
    ],
    "jawaban": 4
  },
  {
    "id": 6125,
    "bagian_id": 340,
    "nomor": 138,
    "nama": "Siswa tidak dikenakan biaya pendaftaran ulang pada setiap awal tahun pelajaran.",
    "bobot": 2,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Tidak ada siswa yang dikenakan biaya pendaftaran ulang." },
      { "id": 2, "nilai" : 3, "nama" : "1% - 25% siswa dikenakan biaya pendaftaran ulang." },
      { "id": 3, "nilai" : 2, "nama" : "26% - 50% siswa dikenakan biaya pendaftaran ulang." },
      { "id": 4, "nilai" : 1, "nama" : "51% - 75% siswa dikenakan biaya pendaftaran ulang." },
      { "id": 5, "nilai" : 0, "nama" : "76% - 100% siswa dikenakan biaya pendaftaran ulang." }
    ],
    "jawaban": 4
  },
  {
    "id": 6126,
    "bagian_id": 340,
    "nomor": 139,
    "nama": "Sekolah memberikan bantuan untuk siswa yang kurang mampu secara ekonomi.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Membantu 91% - 100% siswa kurang mampu." },
      { "id": 2, "nilai" : 3, "nama" : "Membantu 81% - 90% siswa kurang mampu." },
      { "id": 3, "nilai" : 2, "nama" : "Membantu 71% - 80% siswa kurang mampu." },
      { "id": 4, "nilai" : 1, "nama" : "Membantu 61% - 70% siswa kurang mampu." },
      { "id": 5, "nilai" : 0, "nama" : "Membantu kurang dari 61% siswa kurang mampu." }
    ],
    "jawaban": 4
  },
  {
    "id": 6127,
    "bagian_id": 340,
    "nomor": 140,
    "nama": "Di samping uang sekolah, SMPLB tidak melakukan pungutan biaya personal lain.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Tidak melakukan pungutan biaya personal lain." },
      { "id": 2, "nilai" : 3, "nama" : "Melakukan 1 jenis pungutan biaya personal lain." },
      { "id": 3, "nilai" : 2, "nama" : "Melakukan 2 jenis pungutan biaya personal lain." },
      { "id": 4, "nilai" : 1, "nama" : "Melakukan 3 jenis pungutan biaya personal lain." },
      { "id": 5, "nilai" : 0, "nama" : "Melakukan 4 jenis atau lebih pungutan biaya personal lain." }
    ],
    "jawaban": 4
  },
  {
    "id": 6128,
    "bagian_id": 340,
    "nomor": 141,
    "nama": "Pengambilan keputusan dalam penetapan dana dari masyarakat sebagai biaya personal dilakukan dengan melibatkan berbagai pihak terkait.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melibatkan penyelenggara pendidikan/yayasan, kepala sekolah, komite sekolah, perwakilan guru, dan perwakilan tenaga kependidikan" },
      { "id": 2, "nilai" : 3, "nama" : "Melibatkan penyelenggara pendidikan/yayasan, kepala sekolah, komite sekolah, dan perwakilan guru" },
      { "id": 3, "nilai" : 2, "nama" : "Melibatkan penyelenggara pendidikan/yayasan, kepala sekolah, dan komite sekolah" },
      { "id": 4, "nilai" : 1, "nama" : "Melibatkan penyelenggara pendidikan/yayasan dan kepala sekolah" },
      { "id": 5, "nilai" : 0, "nama" : "Hanya melibatkan kepala sekolah" }
    ],
    "jawaban": 4
  },
  {
    "id": 6129,
    "bagian_id": 340,
    "nomor": 142,
    "nama": "Pengelolaan dana dari masyarakat sebagai biaya personal dilakukan secara sistematis, transparan, efisien, dan akuntabel, serta dilaporkan kepada komite sekolah.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Dikelola secara sistematis, transparan, efisien, dan akuntabel, serta dilaporkan" },
      { "id": 2, "nilai" : 3, "nama" : "Dikelola secara sistematis, transparan, efisien, dan akuntabel, tetapi tidak dilaporkan" },
      { "id": 3, "nilai" : 2, "nama" : "Dikelola secara sistematis, transparan, dan efisien tetapi tidak akuntabel dan tidak dilaporkan" },
      { "id": 4, "nilai" : 1, "nama" : "Dikelola secara sistematis dan transparan, tetapi tidak efisien dan akuntabel, tetapi tidak dilaporkan" },
      { "id": 5, "nilai" : 0, "nama" : "Dikelola dengan tidak sistematis, transparan, efisien, dan akuntabel." }
    ],
    "jawaban": 4
  },
  {
    "id": 6130,
    "bagian_id": 340,
    "nomor": 143,
    "nama": "Sekolah memiliki pedoman pengelolaan keuangan sebagai dasar dalam penyusunan RKAS.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki pedoman pengelolaan keuangan 4 tahun terakhir." },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki pedoman pengelolaan keuangan 3 tahun terakhir." },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki pedoman pengelolaan keuangan 2 tahun terakhir." },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki pedoman pengelolaan keuangan 1 tahun terakhir." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki pedoman pengelolaan keuangan." }
    ],
    "jawaban": 4
  },
  {
    "id": 6131,
    "bagian_id": 340,
    "nomor": 144,
    "nama": "Sekolah memiliki pembukuan biaya operasional.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki pembukuan biaya operasional 4 tahun terakhir." },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki pembukuan biaya operasional 3 tahun terakhir." },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki pembukuan biaya operasional 2 tahun terakhir." },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki pembukuan biaya operasional 1 tahun terakhir." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki pembukuan biaya operasional." }
    ],
    "jawaban": 4
  },
  {
    "id": 6133,
    "bagian_id": 341,
    "nomor": 146,
    "nama": "Guru menginformasikan rancangan dan kriteria penilaian yang ada dalam silabus mata pelajaran kepada siswa pada semester yang berjalan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "76% - 100% guru menginformasikan rancangan dan kriteria penilaian" },
      { "id": 2, "nilai" : 3, "nama" : "51% - 75% guru menginformasikan rancangan dan kriteria penilaian" },
      { "id": 3, "nilai" : 2, "nama" : "26% - 50% guru menginformasikan rancangan dan kriteria penilaian" },
      { "id": 4, "nilai" : 1, "nama" : "1% - 25% guru menginformasikan rancangan dan kriteria penilaian" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak ada guru yang menginformasikan rancangan dan kriteria penilaian" }
    ],
    "jawaban": 4
  },
  {
    "id": 6134,
    "bagian_id": 341,
    "nomor": 147,
    "nama": "Silabus mata pelajaran dilengkapi dengan indikator pencapaian kompetensi dasar (KD) dan teknik penilaian.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "76% - 100% silabus mata pelajaran dilengkapi indikator pencapaian KD dan teknik penilaian" },
      { "id": 2, "nilai" : 3, "nama" : "51% - 75% silabus mata pelajaran dilengkapi indikator pencapaian KD dan teknik penilaian" },
      { "id": 3, "nilai" : 2, "nama" : "26% - 50% silabus mata pelajaran dilengkapi indikator pencapaian KD dan teknik penilaian" },
      { "id": 4, "nilai" : 1, "nama" : "1% - 25% silabus mata pelajaran dilengkapi indikator pencapaian KD dan teknik penilaian" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak ada silabus yang dilengkapi indikator pencapaian KD dan teknik penilaian" }
    ],
    "jawaban": 4
  },
  {
    "id": 6135,
    "bagian_id": 341,
    "nomor": 148,
    "nama": "Guru mengembangkan instrumen dan pedoman penilaian sesuai dengan bentuk dan teknik penilaian.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "76% - 100% guru mengembangkan instrumen dan pedoman penilaian" },
      { "id": 2, "nilai" : 3, "nama" : "51% - 75% guru mengembangkan instrumen dan pedoman penilaian" },
      { "id": 3, "nilai" : 2, "nama" : "26% - 50% guru mengembangkan instrumen dan pedoman penilaian" },
      { "id": 4, "nilai" : 1, "nama" : "1% - 25% guru mengembangkan instrumen dan pedoman penilaian" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak ada guru yang mengembangkan instrumen dan pedoman penilaian" }
    ],
    "jawaban": 4
  },
  {
    "id": 6118,
    "bagian_id": 340,
    "nomor": 131,
    "nama": "Sekolah menyediakan biaya pengadaan kegiatan rapat selama satu tahun terakhir.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Mengeluarkan biaya 91% - 100% dari alokasi anggaran." },
      { "id": 2, "nilai" : 3, "nama" : "Mengeluarkan biaya 81% - 90% dari alokasi anggaran" },
      { "id": 3, "nilai" : 2, "nama" : "Mengeluarkan biaya 71% - 80% dari alokasi anggaran" },
      { "id": 4, "nilai" : 1, "nama" : "Mengeluarkan biaya 61% - 70% dari alokasi anggaran" },
      { "id": 5, "nilai" : 0, "nama" : "Mengeluarkan biaya di bawah 61% dari alokasi anggaran" }
    ],
    "jawaban": 4
  },
  {
    "id": 6136,
    "bagian_id": 341,
    "nomor": 149,
    "nama": "Guru menggunakan teknik penilaian berupa tes, pengamatan, penugasan, dan/atau bentuk lain dalam menilai siswa",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "76% - 100% guru menggunakan berbagai teknik penilaian" },
      { "id": 2, "nilai" : 3, "nama" : "51% - 75% guru menggunakan berbagai teknik penilaian" },
      { "id": 3, "nilai" : 2, "nama" : "26% - 50% guru menggunakan berbagai teknik penilaian" },
      { "id": 4, "nilai" : 1, "nama" : "1% - 25% guru menggunakan berbagai teknik penilaian" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak ada guru yang melaksanakan penilaian" }
    ],
    "jawaban": 4
  },
  {
    "id": 6117,
    "bagian_id": 340,
    "nomor": 130,
    "nama": "Sekolah menyediakan biaya pengadaan alat habis pakai untuk kegiatan pembelajaran selama satu tahun terakhir.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Mengeluarkan biaya 91% - 100% dari alokasi anggaran." },
      { "id": 2, "nilai" : 3, "nama" : "Mengeluarkan biaya 81% - 90% dari alokasi anggaran" },
      { "id": 3, "nilai" : 2, "nama" : "Mengeluarkan biaya 71% - 80% dari alokasi anggaran" },
      { "id": 4, "nilai" : 1, "nama" : "Mengeluarkan biaya 61% - 70% dari alokasi anggaran." },
      { "id": 5, "nilai" : 0, "nama" : "Mengeluarkan biaya di bawah 61% dari alokasi anggaran" }
    ],
    "jawaban": 4
  },
  {
    "id": 6116,
    "bagian_id": 340,
    "nomor": 129,
    "nama": "Sekolah menyediakan biaya pengadaan bahan habis pakai untuk kegiatan pembelajaran selama satu tahun terakhir.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Mengeluarkan biaya 91% - 100% dari alokasi anggaran" },
      { "id": 2, "nilai" : 3, "nama" : "Mengeluarkan biaya 81% - 90% dari alokasi anggaran" },
      { "id": 3, "nilai" : 2, "nama" : "Mengeluarkan biaya 71% - 80% dari alokasi anggaran" },
      { "id": 4, "nilai" : 1, "nama" : "Mengeluarkan biaya 61% - 70% dari alokasi anggaran" },
      { "id": 5, "nilai" : 0, "nama" : "Mengeluarkan biaya di bawah 61% dari alokasi anggaran" }
    ],
    "jawaban": 4
  },
  {
    "id": 6115,
    "bagian_id": 340,
    "nomor": 128,
    "nama": "Sekolah menyediakan biaya pengadaan alat tulis untuk kegiatan pembelajaran selama satu tahun terakhir.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Mengeluarkan biaya 91% - 100% dari alokasi anggaran" },
      { "id": 2, "nilai" : 3, "nama" : "Mengeluarkan biaya 81% - 90% dari alokasi anggaran" },
      { "id": 3, "nilai" : 2, "nama" : "Mengeluarkan biaya 71% - 80% dari alokasi anggaran" },
      { "id": 4, "nilai" : 1, "nama" : "Mengeluarkan biaya 61% - 70% dari alokasi anggaran" },
      { "id": 5, "nilai" : 0, "nama" : "Mengeluarkan biaya di bawah 61% dari alokasi anggaran" }
    ],
    "jawaban": 4
  },
  {
    "id": 6114,
    "bagian_id": 340,
    "nomor": 127,
    "nama": "Sekolah mengalokasikan biaya untuk kegiatan kesiswaan selama satu tahun terakhir.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Mengeluarkan biaya 91% - 100% dari anggaran" },
      { "id": 2, "nilai" : 3, "nama" : "Mengeluarkan biaya 81% - 90% dari anggaran" },
      { "id": 3, "nilai" : 2, "nama" : "Mengeluarkan biaya 71% - 80% dari anggaran" },
      { "id": 4, "nilai" : 1, "nama" : "Mengeluarkan biaya 61% - 70% dari anggaran" },
      { "id": 5, "nilai" : 0, "nama" : "Mengeluarkan biaya di bawah 61% dari anggaran" }
    ],
    "jawaban": 4
  },
  {
    "id": 6113,
    "bagian_id": 340,
    "nomor": 126,
    "nama": "Sekolah membelanjakan biaya untuk menunjang pelaksanaan kegiatan pembelajaran selama tiga tahun terakhir.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Membelanjakan biaya 91% - 100% dari alokasi anggaran." },
      { "id": 2, "nilai" : 3, "nama" : "Membelanjakan biaya 81% - 90% dari alokasi anggaran" },
      { "id": 3, "nilai" : 2, "nama" : "Membelanjakan biaya 71% - 80% dari alokasi anggaran" },
      { "id": 4, "nilai" : 1, "nama" : "Membelanjakan biaya 61% - 70% dari alokasi anggaran" },
      { "id": 5, "nilai" : 0, "nama" : "Membelanjakan biaya di bawah 61% dari alokasi anggaran" }
    ],
    "jawaban": 4
  },
  {
    "id": 6013,
    "bagian_id": 335,
    "nomor": 26,
    "nama": "Kepala sekolah melakukan tindak lanjut terhadap hasil pengawasan proses pembelajaran, selama satu tahun terakhir.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "76% - 100% hasil pengawasan ditindaklanjuti." },
      { "id": 2, "nilai" : 3, "nama" : "51% - 75% hasil pengawasan ditindaklanjuti." },
      { "id": 3, "nilai" : 2, "nama" : "26% - 50% hasil pengawasan ditindaklanjuti." },
      { "id": 4, "nilai" : 1, "nama" : "1% - 25% hasil pengawasan ditindaklanjuti." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak ada hasil pengawasan yang ditindaklanjuti" }
    ],
    "jawaban": 4
  },
  {
    "id": 6012,
    "bagian_id": 335,
    "nomor": 25,
    "nama": "Kepala sekolah menyampaikan hasil pengawasan proses pembelajaran kepada pemangku kepentingan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Kepada guru yang bersangkutan, dewan guru, dan pengawas sekolah" },
      { "id": 2, "nilai" : 3, "nama" : "Kepada guru yang bersangkutan dan dewan guru" },
      { "id": 3, "nilai" : 2, "nama" : "Kepada guru yang bersangkutan saja" },
      { "id": 4, "nilai" : 1, "nama" : "Tidak disampaikan" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melakukan pengawasan" }
    ],
    "jawaban": 4
  },
  {
    "id": 6011,
    "bagian_id": 335,
    "nomor": 24,
    "nama": "Kepala sekolah melakukan evaluasi terhadap proses pembelajaran dan kinerja guru dengan memperhatikan 4 aspek, yaitu: (1) persiapan, (2) pelaksanaan, (3) evaluasi pembelajaran, dan (4) rencana tidak lanjut.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memperhatikan 4 aspek" },
      { "id": 2, "nilai" : 3, "nama" : "Memperhatikan 3 aspek" },
      { "id": 3, "nilai" : 2, "nama" : "Memperhatikan 2 aspek" },
      { "id": 4, "nilai" : 1, "nama" : "Memperhatikan 1 aspek" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melakukan evaluasi" }
    ],
    "jawaban": 4
  },
  {
    "id": 6010,
    "bagian_id": 335,
    "nomor": 23,
    "nama": "Kepala sekolah melakukan supervisi proses pembelajaran dan menindaklanjuti dengan 4 cara yaitu: (1) pemberian contoh, (2) diskusi, (3) pelatihan, dan (4) konsultasi",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Menindaklanjuti dengan 4 cara" },
      { "id": 2, "nilai" : 3, "nama" : "Menindaklanjuti dengan 3 cara" },
      { "id": 3, "nilai" : 2, "nama" : "Menindaklanjuti dengan 2 cara" },
      { "id": 4, "nilai" : 1, "nama" : "Menindaklanjuti dengan 1 cara" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melakukan supervisi" }
    ],
    "jawaban": 4
  },
  {
    "id": 6009,
    "bagian_id": 335,
    "nomor": 22,
    "nama": "Kepala sekolah melakukan pemantauan pembelajaran yang mencakup 4 tahap yaitu: (1) perencanaan, (2) pelaksanaan, dan (3) penilaian hasil pembelajaran, dan (4) diskusi hasil pemantauan.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Mencakup 4 tahap pemantauan" },
      { "id": 2, "nilai" : 3, "nama" : "Mencakup 3 tahap pemantauan" },
      { "id": 3, "nilai" : 2, "nama" : "Mencakup 2 tahap pemantauan" },
      { "id": 4, "nilai" : 1, "nama" : "Mencakup 1 tahap pemantauan" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak pernah melakukan pemantauan" }
    ],
    "jawaban": 4
  },
  {
    "id": 6112,
    "bagian_id": 340,
    "nomor": 125,
    "nama": "Sekolah membayar gaji, insentif, transport, dan tunjangan lain bagi tenaga kependidikan pada tahun berjalan.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Membayar gaji, insentif, transport, dan tunjangan lain." },
      { "id": 2, "nilai" : 3, "nama" : "Hanya membayar gaji, insentif, dan transport" },
      { "id": 3, "nilai" : 2, "nama" : "Hanya membayar gaji dan insentif" },
      { "id": 4, "nilai" : 1, "nama" : "Hanya membayar gaji" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak membayar gaji tenaga kependidikan" }
    ],
    "jawaban": 4
  },
  {
    "id": 6137,
    "bagian_id": 341,
    "nomor": 150,
    "nama": "Guru mengolah hasil penilaian untuk mengetahui kemajuan hasil belajar dan kesulitan belajar siswa.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "76% - 100% guru mengolah hasil penilaian." },
      { "id": 2, "nilai" : 3, "nama" : "51% - 75% guru mengolah hasil penilaian." },
      { "id": 3, "nilai" : 2, "nama" : "26% - 50% guru mengolah hasil penilaian." },
      { "id": 4, "nilai" : 1, "nama" : "1% - 25% guru mengolah hasil penilaian." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak ada guru yang mengolah hasil penilaian." }
    ],
    "jawaban": 4
  },
  {
    "id": 6138,
    "bagian_id": 341,
    "nomor": 151,
    "nama": "Guru mengembalikan hasil pemeriksaan pekerjaan siswa disertai balikan/komentar yang mendidik.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "76% - 100% guru mengembalikan hasil pekerjaan siswa." },
      { "id": 2, "nilai" : 3, "nama" : "51% - 75% guru mengembalikan hasil pekerjaan siswa." },
      { "id": 3, "nilai" : 2, "nama" : "26% - 50% guru mengembalikan hasil pekerjaan siswa." },
      { "id": 4, "nilai" : 1, "nama" : "1% - 25% guru mengembalikan hasil pekerjaan siswa." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak ada guru yang mengembalikan hasil pekerjaan siswa." }
    ],
    "jawaban": 4
  },
  {
    "id": 6139,
    "bagian_id": 341,
    "nomor": 152,
    "nama": "Guru memanfaatkan hasil penilaian untuk perbaikan pembelajaran.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "76% - 100% guru memanfaatkan hasil penilaian" },
      { "id": 2, "nilai" : 3, "nama" : "51% - 75% guru memanfaatkan hasil penilaian" },
      { "id": 3, "nilai" : 2, "nama" : "26% - 50% guru memanfaatkan hasil penilaian" },
      { "id": 4, "nilai" : 1, "nama" : "1% - 25% guru memanfaatkan hasil penilaian" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak ada guru yang memanfaatkan hasil penilaian" }
    ],
    "jawaban": 4
  },
  {
    "id": 6140,
    "bagian_id": 341,
    "nomor": 153,
    "nama": "Guru melaporkan hasil penilaian mata pelajaran pada setiap akhir semester kepada kepala sekolah dalam bentuk laporan prestasi belajar siswa.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "76% - 100% guru melaporkan hasil penilaian" },
      { "id": 2, "nilai" : 3, "nama" : "51% - 75% guru melaporkan hasil penilaian" },
      { "id": 3, "nilai" : 2, "nama" : "26% - 50% guru melaporkan hasil penilaian" },
      { "id": 4, "nilai" : 1, "nama" : "1% - 25% guru melaporkan hasil penilaian" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak ada guru yang melaporkan hasil penilaian" }
    ],
    "jawaban": 4
  },
  {
    "id": 6141,
    "bagian_id": 341,
    "nomor": 154,
    "nama": "Guru menyampaikan hasil penilaian akhlak mulia kepada guru pendidikan agama atau wali kelas sebagai informasi untuk menentukan nilai akhir semester.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "86% - 100% guru menyampaikan hasil penilaian akhlak mulia." },
      { "id": 2, "nilai" : 3, "nama" : "71% - 85% guru menyampaikan hasil penilaian akhlak mulia." },
      { "id": 3, "nilai" : 2, "nama" : "56% - 70% guru menyampaikan hasil penilaian akhlak mulia." },
      { "id": 4, "nilai" : 1, "nama" : "41% - 55% guru menyampaikan hasil penilaian akhlak mulia." },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 41% guru menyampaikan hasil penilaian akhlak mulia." }
    ],
    "jawaban": 4
  },
  {
    "id": 6142,
    "bagian_id": 341,
    "nomor": 155,
    "nama": "Guru menyampaikan hasil penilaian kepribadian siswa kepada guru pendidikan kewarganegaraan atau wali kelas sebagai informasi untuk menentukan nilai akhir semester.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "86% - 100% guru menyampaikan hasil penilaian kepribadian." },
      { "id": 2, "nilai" : 3, "nama" : "71% - 85% guru menyampaikan hasil penilaian kepribadian." },
      { "id": 3, "nilai" : 2, "nama" : "56% - 70% guru menyampaikan hasil penilaian kepribadian." },
      { "id": 4, "nilai" : 1, "nama" : "41% - 55% guru menyampaikan hasil penilaian kepribadian." },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 41% guru menyampaikan hasil penilaian kepribadian." }
    ],
    "jawaban": 4
  },
  {
    "id": 6143,
    "bagian_id": 341,
    "nomor": 156,
    "nama": "Sekolah menentukan KKM setiap mata pelajaran melalui rapat dewan guru dengan memperhatikan unsur: (1) karakteristik dan kemampuan siswa, (2) karakteristik mata pelajaran, dan (3) kondisi sekolah.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memperhatikan unsur karakteristik dan kemampuan siswa, karakteristik mata pelajaran, serta kondisi sekolah melalui rapat dewan guru." },
      { "id": 2, "nilai" : 3, "nama" : "Memperhatikan unsur karakteristik dan kemampuan siswa serta karakteristik mata pelajaran melalui rapat dewan guru." },
      { "id": 3, "nilai" : 2, "nama" : "Memperhatikan unsur karakteristik dan kemampuan siswa serta karakteristik mata pelajaran tidak melalui rapat dewan guru." },
      { "id": 4, "nilai" : 1, "nama" : "Memperhatikan unsur karakteristik dan kemampuan siswa tidak melalui rapat dewan guru." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak ada mata pelajaran yang ditentukan KKM-nya melalui rapat dewan guru." }
    ],
    "jawaban": 4
  },
  {
    "id": 6144,
    "bagian_id": 341,
    "nomor": 157,
    "nama": "Sekolah menetapkan kriteria ketuntasan minimal (KKM) untuk setiap mata pelajaran.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "4 atau lebih mata pelajaran dengan KKM 75,00 atau lebih" },
      { "id": 2, "nilai" : 3, "nama" : "3 mata pelajaran dengan KKM 75,00 atau lebih" },
      { "id": 3, "nilai" : 2, "nama" : "2 mata pelajaran dengan KKM 75,00 atau lebih" },
      { "id": 4, "nilai" : 1, "nama" : "1 mata pelajaran dengan KKM 75,00 atau lebih" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak ada mata pelajaran dengan KKM 75,00 atau lebih" }
    ],
    "jawaban": 4
  },
  {
    "id": 6145,
    "bagian_id": 341,
    "nomor": 158,
    "nama": "Sekolah mengkoordinasikan ulangan tengah semester, ulangan akhir semester, dan ulangan kenaikan kelas.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Mengkoordinasikan ulangan tengah semester, ulangan akhir semester, dan ulangan kenaikan kelas" },
      { "id": 2, "nilai" : 3, "nama" : "Mengkoordinasikan ulangan akhir semester dan ulangan kenaikan kelas" },
      { "id": 3, "nilai" : 2, "nama" : "Mengkoordinasikan ulangan tengah semester dan ulangan kenaikan kelas" },
      { "id": 4, "nilai" : 1, "nama" : "Hanya mengkoordinasikan ulangan kenaikan kelas" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak pernah mengkoordinasikan ulangan-ulangan" }
    ],
    "jawaban": 4
  },
  {
    "id": 6146,
    "bagian_id": 341,
    "nomor": 159,
    "nama": "Sekolah menentukan kriteria kenaikan kelas melalui rapat.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melalui rapat dewan guru" },
      { "id": 2, "nilai" : 3, "nama" : "Melalui rapat dengan perwakilan guru-guru mata pelajaran" },
      { "id": 3, "nilai" : 2, "nama" : "Melalui rapat dengan wali kelas saja" },
      { "id": 4, "nilai" : 1, "nama" : "Melalui rapat kepala sekolah dan wakil kepala sekolah" },
      { "id": 5, "nilai" : 0, "nama" : "Hanya ditetapkan oleh kepala sekolah" }
    ],
    "jawaban": 4
  },
  {
    "id": 6147,
    "bagian_id": 341,
    "nomor": 160,
    "nama": "Sekolah menentukan nilai akhir kelompok mata pelajaran agama dan akhlak mulia, kewarganegaraan dan kepribadian, estetika, serta pendidikan jasmani, olahraga dan kesehatan.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melalui rapat dewan guru dengan mempertimbangkan hasil penilaian oleh guru" },
      { "id": 2, "nilai" : 3, "nama" : "Melalui rapat dewan guru tanpa mempertimbangkan hasil penilaian oleh guru" },
      { "id": 3, "nilai" : 2, "nama" : "Tanpa melalui rapat dewan guru tetapi mempertimbangkan hasil penilaian oleh guru" },
      { "id": 4, "nilai" : 1, "nama" : "Ditentukan bersama wali kelas saja" },
      { "id": 5, "nilai" : 0, "nama" : "Hanya ditetapkan oleh kepala sekolah" }
    ],
    "jawaban": 4
  },
  {
    "id": 6148,
    "bagian_id": 341,
    "nomor": 161,
    "nama": "Sekolah menyampaikan hasil penilaian setiap akhir semester kepada orangtua/wali siswa dalam bentuk buku laporan hasil belajar siswa.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Diawali dengan penjelasan umum kepala sekolah dilanjutkan penjelasan wali kelas dengan masing-masing orangtua/wali siswa dan siswa yang bersangkutan" },
      { "id": 2, "nilai" : 3, "nama" : "Diawali dengan penjelasan umum kepala sekolah dilanjutkan penjelasan wali kelas dengan masing-masing orangtua/wali siswa tanpa siswa yang bersangkutan" },
      { "id": 3, "nilai" : 2, "nama" : "Diawali dengan penjelasan umum kepala sekolah tetapi langsung dari wali kelas ke masing-masing orangtua/wali siswa dengan siswa yang bersangkutan" },
      { "id": 4, "nilai" : 1, "nama" : "Tanpa diawali dengan penjelasan umum kepala sekolah tetapi langsung dari wali kelas ke masing-masing orangtua/wali siswa tanpa siswa yang bersangkutan" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melaporkan hasil penilaian langsung kepada siswa" }
    ],
    "jawaban": 4
  },
  {
    "id": 6149,
    "bagian_id": 341,
    "nomor": 162,
    "nama": "Sekolah melaporkan pencapaian hasil belajar tingkat satuan pendidikan kepada Dinas Pendidikan atau instansi yang berwenang.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Dilaporkan 1 bulan setelah akhir semester" },
      { "id": 2, "nilai" : 3, "nama" : "Dilaporkan 2 bulan setelah akhir semester" },
      { "id": 3, "nilai" : 2, "nama" : "Dilaporkan 3 bulan setelah akhir semester" },
      { "id": 4, "nilai" : 1, "nama" : "Dilaporkan 4 bulan setelah akhir semester" },
      { "id": 5, "nilai" : 0, "nama" : "Dilaporkan lebih dari 4 bulan setelah akhir semester" }
    ],
    "jawaban": 4
  },
  {
    "id": 6150,
    "bagian_id": 341,
    "nomor": 163,
    "nama": "Sekolah menentukan kelulusan siswa sesuai kriteria kelulusan.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melalui rapat dewan guru." },
      { "id": 2, "nilai" : 3, "nama" : "Melalui rapat dengan perwakilan guru-guru mata pelajaran." },
      { "id": 3, "nilai" : 2, "nama" : "Melalui rapat dengan wali kelas saja." },
      { "id": 4, "nilai" : 1, "nama" : "Melalui rapat kepala sekolah dan wakil kepala sekolah." },
      { "id": 5, "nilai" : 0, "nama" : "Hanya ditetapkan oleh kepala sekolah" }
    ],
    "jawaban": 4
  },
  {
    "id": 6151,
    "bagian_id": 341,
    "nomor": 164,
    "nama": "Sekolah menyerahkan surat keterangan hasil ujian nasional (SKHUN) atau surat keterangan hasil ujian akhir sekolah (SKHUAS) setiap siswa yang mengikuti ujian nasional/sekolah.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Diserahkan 1 minggu setelah pengumuman hasil ujian." },
      { "id": 2, "nilai" : 3, "nama" : "Diserahkan 2 minggu setelah pengumuman hasil ujian." },
      { "id": 3, "nilai" : 2, "nama" : "Diserahkan 3 minggu setelah pengumuman hasil ujian." },
      { "id": 4, "nilai" : 1, "nama" : "Diserahkan 4 minggu setelah pengumuman hasil ujian." },
      { "id": 5, "nilai" : 0, "nama" : "Diserahkan lebih dari 4 minggu setelah pengumuman hasil ujian." }
    ],
    "jawaban": 4
  },
  {
    "id": 6152,
    "bagian_id": 341,
    "nomor": 165,
    "nama": "Sekolah menyerahkan ijazah kepada setiap siswa yang telah lulus.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Diserahkan 1 minggu setelah blangko ijazah diterima sekolah" },
      { "id": 2, "nilai" : 3, "nama" : "Diserahkan 2 minggu setelah blangko ijazah diterima sekolah" },
      { "id": 3, "nilai" : 2, "nama" : "Diserahkan 3 minggu setelah blangko ijazah diterima sekolah" },
      { "id": 4, "nilai" : 1, "nama" : "Diserahkan 4 minggu setelah blangko ijazah diterima sekolah" },
      { "id": 5, "nilai" : 0, "nama" : "Diserahkan lebih dari 4 minggu setelah blangko ijazah diterima sekolah" }
    ],
    "jawaban": 4
  },
  {
    "id": 6153,
    "bagian_id": 341,
    "nomor": 166,
    "nama": "Sekolah memiliki prestasi hasil ujian nasional (UN) atau ujian sekolah (US) yang ditunjukkan dengan persentase tingkat kelulusan tahun terakhir.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Siswa lulus 91% - 100%" },
      { "id": 2, "nilai" : 3, "nama" : "Siswa lulus 81% - 90%" },
      { "id": 3, "nilai" : 2, "nama" : "Siswa lulus 71% - 80%" },
      { "id": 4, "nilai" : 1, "nama" : "Siswa lulus 61% - 70%" },
      { "id": 5, "nilai" : 0, "nama" : "Siswa lulus kurang dari 61%" }
    ],
    "jawaban": 4
  },
  {
    "id": 6154,
    "bagian_id": 341,
    "nomor": 167,
    "nama": "Sekolah menentukan kelulusan siswa melalui rapat dewan guru sesuai dengan kriteria yang berlaku.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Menggunakan tiga kriteria melalui rapat dewan guru" },
      { "id": 2, "nilai" : 3, "nama" : "Menggunakan dua kriteria melalui rapat dewan guru" },
      { "id": 3, "nilai" : 2, "nama" : "Menggunakan satu kriteria melalui rapat dewan guru" },
      { "id": 4, "nilai" : 1, "nama" : "Menggunakan kriteria lain melalui rapat dewan guru" },
      { "id": 5, "nilai" : 0, "nama" : "Tanpa melalui rapat dewan guru" }
    ],
    "jawaban": 4
  },
  {
    "id": 6111,
    "bagian_id": 340,
    "nomor": 124,
    "nama": "Sekolah membayar gaji, insentif, transport, dan tunjangan lain bagi guru pada tahun berjalan.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Membayar gaji, insentif, transport, dan tunjangan lain." },
      { "id": 2, "nilai" : 3, "nama" : "Hanya membayar gaji, insentif, dan transport" },
      { "id": 3, "nilai" : 2, "nama" : "Hanya membayar gaji dan insentif" },
      { "id": 4, "nilai" : 1, "nama" : "Hanya membayar gaji" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak membayar gaji guru" }
    ],
    "jawaban": 4
  },
  {
    "id": 6320,
    "bagian_id": 349,
    "nomor": 166,
    "nama": "Sekolah menentukan kelulusan siswa melalui rapat dewan guru sesuai dengan kriteria yang berlaku.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Menggunakan 3 kriteria melalui rapat dewan guru." },
      { "id": 2, "nilai" : 3, "nama" : "Menggunakan 2 kriteria melalui rapat dewan guru." },
      { "id": 3, "nilai" : 2, "nama" : "Menggunakan 1 kriteria melalui rapat dewan guru." },
      { "id": 4, "nilai" : 1, "nama" : "Menggunakan kriteria lain melalui rapat dewan guru." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melalui rapat dewan guru." }
    ],
    "jawaban": 4
  },
  {
    "id": 6319,
    "bagian_id": 349,
    "nomor": 165,
    "nama": "Sekolah menyerahkan surat keterangan hasil ujian nasional (SKHUN) atau surat keterangan hasil ujian sekolah (SKHUS) kepada setiap siswa yang mengikuti ujian nasional/sekolah.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Diserahkan 1 minggu setelah pengumuman kelulusan." },
      { "id": 2, "nilai" : 3, "nama" : "Diserahkan 2 minggu setelah pengumuman kelulusan." },
      { "id": 3, "nilai" : 2, "nama" : "Diserahkan 3 minggu setelah pengumuman kelulusan." },
      { "id": 4, "nilai" : 1, "nama" : "Diserahkan 4 minggu setelah pengumuman kelulusan." },
      { "id": 5, "nilai" : 0, "nama" : "Diserahkan lebih dari 4 minggu setelah pengumuman kelulusan." }
    ],
    "jawaban": 4
  },
  {
    "id": 6318,
    "bagian_id": 349,
    "nomor": 164,
    "nama": "Sekolah memiliki prestasi hasil ujian sekolah (US) dan/atau ujian nasional (UN) yang ditunjukkan dengan persentase tingkat kelulusan tahun terakhir.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Siswa lulus 91% - 100%." },
      { "id": 2, "nilai" : 3, "nama" : "Siswa lulus 81% - 90%." },
      { "id": 3, "nilai" : 2, "nama" : "Siswa lulus 71% - 80%." },
      { "id": 4, "nilai" : 1, "nama" : "Siswa lulus 61% - 70%." },
      { "id": 5, "nilai" : 0, "nama" : "Siswa lulus kurang dari 61%." }
    ],
    "jawaban": 4
  },
  {
    "id": 6317,
    "bagian_id": 349,
    "nomor": 163,
    "nama": "Sekolah melaporkan pencapaian hasil belajar tingkat satuan pendidikan kepada Dinas Pendidikan atau instansi yang berwenang.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Kurang dari 1 bulan setelah akhir semester." },
      { "id": 2, "nilai" : 3, "nama" : "Antara 1 - 2 bulan setelah akhir semester." },
      { "id": 3, "nilai" : 2, "nama" : "Antara 2 - 3 bulan setelah akhir semester." },
      { "id": 4, "nilai" : 1, "nama" : "Antara 3 - 4 bulan setelah akhir semester." },
      { "id": 5, "nilai" : 0, "nama" : "Lebih dari 1 semester." }
    ],
    "jawaban": 4
  },
  {
    "id": 6316,
    "bagian_id": 349,
    "nomor": 162,
    "nama": "Sekolah menyampaikan hasil penilaian setiap akhir semester kepada orang tua siswa dalam bentuk buku laporan hasil belajar siswa.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Diawali dengan penjelasan umum kepala sekolah dilanjutkan penjelasan wali kelas dengan masing-masing orang tua siswa dan siswa yang bersangkutan." },
      { "id": 2, "nilai" : 3, "nama" : "Diawali dengan penjelasan umum kepala sekolah dilanjutkan penjelasan wali kelas dengan masing-masing orang tua siswa tanpa siswa yang bersangkutan." },
      { "id": 3, "nilai" : 2, "nama" : "Disampaikan langsung oleh wali kelas ke masing-masing orang tua siswa dengan siswa yang bersangkutan." },
      { "id": 4, "nilai" : 1, "nama" : "Disampaikan langsung oleh wali kelas ke masing-masing orang tua siswa tanpa siswa yang bersangkutan." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melaporkan hasil penilaian langsung kepada siswa." }
    ],
    "jawaban": 4
  },
  {
    "id": 6313,
    "bagian_id": 349,
    "nomor": 159,
    "nama": "Sekolah mengkoordinasikan ulangan tengah semester, ulangan akhir semester, dan ulangan kenaikan kelas.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Mengkoordinasikan ulangan tengah semester, ulangan akhir semester, dan ulangan kenaikan kelas." },
      { "id": 2, "nilai" : 3, "nama" : "Mengkoordinasikan ulangan akhir semester dan ulangan kenaikan kelas." },
      { "id": 3, "nilai" : 2, "nama" : "Mengkoordinasikan ulangan tengah semester dan ulangan kenaikan kelas." },
      { "id": 4, "nilai" : 1, "nama" : "Hanya mengkoordinasikan ulangan kenaikan kelas." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak mengkoordinasikan ulangan-ulangan." }
    ],
    "jawaban": 4
  },
  {
    "id": 6312,
    "bagian_id": 349,
    "nomor": 158,
    "nama": "Sekolah menentukan KKM setiap mata pelajaran melalui rapat dewan guru dengan memperhatikan unsur: (1) karakteristik dan kemampuan siswa, (2) karakteristik mata pelajaran, dan (3) kondisi sekolah.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memperhatikan unsur karakteristik dan kemampuan siswa, karakteristik mata pelajaran, serta kondisi sekolah melalui rapat dewan guru." },
      { "id": 2, "nilai" : 3, "nama" : "Memperhatikan unsur karakteristik dan kemampuan siswa serta karakteristik mata pelajaran melalui rapat dewan guru." },
      { "id": 3, "nilai" : 2, "nama" : "Memperhatikan unsur karakteristik dan kemampuan siswa serta karakteristik mata pelajaran tidak melalui rapat dewan guru." },
      { "id": 4, "nilai" : 1, "nama" : "Memperhatikan unsur karakteristik dan kemampuan siswa tidak melalui rapat dewan guru." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak ada mata pelajaran yang ditentukan KKM-nya melalui rapat dewan guru." }
    ],
    "jawaban": 4
  },
  {
    "id": 6311,
    "bagian_id": 349,
    "nomor": 157,
    "nama": "Guru menyampaikan hasil penilaian kepribadian siswa kepada guru pendidikan kewarganegaraan atau wali kelas sebagai informasi untuk menentukan nilai akhir semester.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "86% - 100% guru menyampaikan hasil penilaian kepribadian." },
      { "id": 2, "nilai" : 3, "nama" : "71% - 85% guru menyampaikan hasil penilaian kepribadian." },
      { "id": 3, "nilai" : 2, "nama" : "56% - 70% guru menyampaikan hasil penilaian kepribadian." },
      { "id": 4, "nilai" : 1, "nama" : "41% - 55% guru menyampaikan hasil penilaian kepribadian." },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 41% guru menyampaikan hasil penilaian kepribadian." }
    ],
    "jawaban": 4
  },
  {
    "id": 6310,
    "bagian_id": 349,
    "nomor": 156,
    "nama": "Guru menyampaikan hasil penilaian akhlak mulia siswa kepada guru pendidikan agama atau wali kelas sebagai informasi untuk menentukan nilai akhir semester.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "86% - 100% guru menyampaikan hasil penilaian akhlak mulia." },
      { "id": 2, "nilai" : 3, "nama" : "71% - 85% guru menyampaikan hasil penilaian akhlak mulia." },
      { "id": 3, "nilai" : 2, "nama" : "56% - 70% guru menyampaikan hasil penilaian akhlak mulia." },
      { "id": 4, "nilai" : 1, "nama" : "41% - 55% guru menyampaikan hasil penilaian akhlak mulia." },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 41% guru menyampaikan hasil penilaian akhlak mulia." }
    ],
    "jawaban": 4
  },
  {
    "id": 6309,
    "bagian_id": 349,
    "nomor": 155,
    "nama": "Guru melaporkan hasil penilaian mata pelajaran pada setiap akhir semester kepada kepala sekolah dalam bentuk laporan prestasi belajar siswa.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "76% - 100% guru melaporkan hasil penilaian." },
      { "id": 2, "nilai" : 3, "nama" : "51% - 75% guru melaporkan hasil penilaian." },
      { "id": 3, "nilai" : 2, "nama" : "26% - 50% guru melaporkan hasil penilaian." },
      { "id": 4, "nilai" : 1, "nama" : "1% - 25% guru melaporkan hasil penilaian." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak ada guru yang melaporkan hasil penilaian." }
    ],
    "jawaban": 4
  },
  {
    "id": 6308,
    "bagian_id": 349,
    "nomor": 154,
    "nama": "Guru memanfaatkan hasil penilaian untuk perbaikan pembelajaran.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "76% - 100% guru memanfaatkan hasil penilaian." },
      { "id": 2, "nilai" : 3, "nama" : "51% - 75% guru memanfaatkan hasil penilaian." },
      { "id": 3, "nilai" : 2, "nama" : "26% - 50% guru memanfaatkan hasil penilaian." },
      { "id": 4, "nilai" : 1, "nama" : "1% - 25% guru memanfaatkan hasil penilaian." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak ada guru yang memanfaatkan hasil penilaian." }
    ],
    "jawaban": 4
  },
  {
    "id": 6307,
    "bagian_id": 349,
    "nomor": 153,
    "nama": "Guru mengembalikan hasil pemeriksaan pekerjaan siswa disertai balikan/komentar yang mendidik.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "76% - 100% guru mengembalikan hasil pekerjaan siswa." },
      { "id": 2, "nilai" : 3, "nama" : "51% - 75% guru mengembalikan hasil pekerjaan siswa." },
      { "id": 3, "nilai" : 2, "nama" : "26% - 50% guru mengembalikan hasil pekerjaan siswa." },
      { "id": 4, "nilai" : 1, "nama" : "1% - 25% guru mengembalikan hasil pekerjaan siswa." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak ada guru yang mengembalikan hasil pekerjaan siswa." }
    ],
    "jawaban": 4
  },
  {
    "id": 6306,
    "bagian_id": 349,
    "nomor": 152,
    "nama": "Guru mengolah hasil penilaian untuk mengetahui kemajuan hasil belajar dan kesulitan belajar siswa.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "76% - 100% guru mengolah hasil penilaian." },
      { "id": 2, "nilai" : 3, "nama" : "51% - 75% guru mengolah hasil penilaian." },
      { "id": 3, "nilai" : 2, "nama" : "26% - 50% guru mengolah hasil penilaian." },
      { "id": 4, "nilai" : 1, "nama" : "1% - 25% guru mengolah hasil penilaian." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak ada guru yang mengolah hasil penilaian." }
    ],
    "jawaban": 4
  },
  {
    "id": 6305,
    "bagian_id": 349,
    "nomor": 151,
    "nama": "Guru menggunakan berbagai teknik penilaian berupa tes, pengamatan, penugasan, dan/atau bentuk lain dalam menilai siswa.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "76% - 100% guru menggunakan berbagai teknik penilaian." },
      { "id": 2, "nilai" : 3, "nama" : "51% - 75% guru menggunakan berbagai teknik penilaian." },
      { "id": 3, "nilai" : 2, "nama" : "26% - 50% guru menggunakan berbagai teknik penilaian." },
      { "id": 4, "nilai" : 1, "nama" : "1% - 25% guru menggunakan berbagai teknik penilaian." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak ada guru yang melaksanakan penilaian." }
    ],
    "jawaban": 4
  },
  {
    "id": 6304,
    "bagian_id": 349,
    "nomor": 150,
    "nama": "Guru mengembangkan instrumen dan pedoman penilaian sesuai dengan bentuk dan teknik penilaian.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "76% - 100% guru mengembangkan instrumen dan pedoman penilaian." },
      { "id": 2, "nilai" : 3, "nama" : "51% - 75% guru mengembangkan instrumen dan pedoman penilaian." },
      { "id": 3, "nilai" : 2, "nama" : "26% - 50% guru mengembangkan instrumen dan pedoman penilaian." },
      { "id": 4, "nilai" : 1, "nama" : "1% - 25% guru mengembangkan instrumen dan pedoman penilaian." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak ada guru yang mengembangkan instrumen dan pedoman penilaian." }
    ],
    "jawaban": 4
  },
  {
    "id": 6282,
    "bagian_id": 348,
    "nomor": 128,
    "nama": "Sekolah membelanjakan biaya untuk menunjang pelaksanaan kegiatan pembelajaran selama tiga tahun terakhir.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Membelanjakan biaya 91% - 100% dari alokasi anggaran." },
      { "id": 2, "nilai" : 3, "nama" : "Membelanjakan biaya 81% - 90% dari alokasi anggaran." },
      { "id": 3, "nilai" : 2, "nama" : "Membelanjakan biaya 71% - 80% dari alokasi anggaran." },
      { "id": 4, "nilai" : 1, "nama" : "Membelanjakan biaya 61% - 70% dari alokasi anggaran." },
      { "id": 5, "nilai" : 0, "nama" : "Membelanjakan biaya di bawah 61% dari alokasi anggaran." }
    ],
    "jawaban": 4
  },
  {
    "id": 6280,
    "bagian_id": 348,
    "nomor": 126,
    "nama": "Sekolah membayar gaji, insentif, transport, dan tunjangan lain bagi guru pada tahun berjalan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Membayar gaji, insentif, transport, dan tunjangan lain." },
      { "id": 2, "nilai" : 3, "nama" : "Hanya membayar gaji, insentif, dan transport." },
      { "id": 3, "nilai" : 2, "nama" : "Hanya membayar gaji dan insentif." },
      { "id": 4, "nilai" : 1, "nama" : "Hanya membayar gaji." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak membayar gaji guru." }
    ],
    "jawaban": 4
  },
  {
    "id": 6283,
    "bagian_id": 348,
    "nomor": 129,
    "nama": "Sekolah mengalokasikan biaya untuk kegiatan kesiswaan, selama satu tahun terakhir.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Mengeluarkan biaya 91% - 100% dari anggaran." },
      { "id": 2, "nilai" : 3, "nama" : "Mengeluarkan biaya 81% - 90% dari anggaran." },
      { "id": 3, "nilai" : 2, "nama" : "Mengeluarkan biaya 71% - 80% dari anggaran." },
      { "id": 4, "nilai" : 1, "nama" : "Mengeluarkan biaya 61% - 70% dari anggaran." },
      { "id": 5, "nilai" : 0, "nama" : "Mengeluarkan biaya di bawah 61% dari anggaran." }
    ],
    "jawaban": 4
  },
  {
    "id": 6284,
    "bagian_id": 348,
    "nomor": 130,
    "nama": "Sekolah menyediakan biaya pengadaan alat tulis untuk kegiatan pembelajaran, selama satu tahun terakhir.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Mengeluarkan biaya 91% - 100% dari anggaran." },
      { "id": 2, "nilai" : 3, "nama" : "Mengeluarkan biaya 81% - 90% dari anggaran." },
      { "id": 3, "nilai" : 2, "nama" : "Mengeluarkan biaya 71% - 80% dari anggaran." },
      { "id": 4, "nilai" : 1, "nama" : "Mengeluarkan biaya 61% - 70% dari anggaran." },
      { "id": 5, "nilai" : 0, "nama" : "Mengeluarkan biaya di bawah 61% dari anggaran." }
    ],
    "jawaban": 4
  },
  {
    "id": 6285,
    "bagian_id": 348,
    "nomor": 131,
    "nama": "Sekolah menyediakan biaya pengadaan bahan habis pakai untuk kegiatan pembelajaran, selama satu tahun terakhir.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Mengeluarkan biaya 91% - 100% dari alokasi anggaran." },
      { "id": 2, "nilai" : 3, "nama" : "Mengeluarkan biaya 81% - 90% dari alokasi anggaran." },
      { "id": 3, "nilai" : 2, "nama" : "Mengeluarkan biaya 71% - 80% dari alokasi anggaran." },
      { "id": 4, "nilai" : 1, "nama" : "Mengeluarkan biaya 61% - 70% dari alokasi anggaran." },
      { "id": 5, "nilai" : 0, "nama" : "Mengeluarkan biaya di bawah 61% dari alokasi anggaran." }
    ],
    "jawaban": 4
  },
  {
    "id": 6286,
    "bagian_id": 348,
    "nomor": 132,
    "nama": "Sekolah menyediakan biaya pengadaan alat habis pakai untuk kegiatan pembelajaran, selama satu tahun terakhir.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Mengeluarkan biaya 91% - 100% dari alokasi anggaran." },
      { "id": 2, "nilai" : 3, "nama" : "Mengeluarkan biaya 81% - 90% dari alokasi anggaran." },
      { "id": 3, "nilai" : 2, "nama" : "Mengeluarkan biaya 71% - 80% dari alokasi anggaran." },
      { "id": 4, "nilai" : 1, "nama" : "Mengeluarkan biaya 61% - 70% dari alokasi anggaran." },
      { "id": 5, "nilai" : 0, "nama" : "Mengeluarkan biaya di bawah 61% dari alokasi anggaran." }
    ],
    "jawaban": 4
  },
  {
    "id": 6205,
    "bagian_id": 345,
    "nomor": 51,
    "nama": "Guru memiliki kualifikasi akademik minimum sarjana (S1) atau diploma empat (D-IV).",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "76% - 100% guru berpendidikan minimum S1 atau D-IV." },
      { "id": 2, "nilai" : 3, "nama" : "51% - 75% guru berpendidikan minimum S1 atau D-IV." },
      { "id": 3, "nilai" : 2, "nama" : "26% - 50% guru berpendidikan minimum S1 atau D-IV." },
      { "id": 4, "nilai" : 1, "nama" : "1% - 25% guru berpendidikan minimum S1 atau D-IV" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak ada guru yang berpendidikan minimum S1 atau D-IV." }
    ],
    "jawaban": 4
  },
  {
    "id": 6287,
    "bagian_id": 348,
    "nomor": 133,
    "nama": "Sekolah menyediakan biaya pengadaan kegiatan rapat, selama satu tahun terakhir.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Mengeluarkan biaya 91% - 100% dari alokasi anggaran." },
      { "id": 2, "nilai" : 3, "nama" : "Mengeluarkan biaya 81% - 90% dari alokasi anggaran." },
      { "id": 3, "nilai" : 2, "nama" : "Mengeluarkan biaya 71% - 80% dari alokasi anggaran." },
      { "id": 4, "nilai" : 1, "nama" : "Mengeluarkan biaya 61% - 70% dari alokasi anggaran." },
      { "id": 5, "nilai" : 0, "nama" : "Mengeluarkan biaya di bawah 61% dari alokasi anggaran." }
    ],
    "jawaban": 4
  },
  {
    "id": 6288,
    "bagian_id": 348,
    "nomor": 134,
    "nama": "Sekolah menyediakan biaya pengadaan transpor dan perjalanan dinas, selama satu tahun terakhir.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Mengeluarkan biaya 91% - 100% dari alokasi anggaran." },
      { "id": 2, "nilai" : 3, "nama" : "Mengeluarkan biaya 81% - 90% dari alokasi anggaran." },
      { "id": 3, "nilai" : 2, "nama" : "Mengeluarkan biaya 71% - 80% dari alokasi anggaran." },
      { "id": 4, "nilai" : 1, "nama" : "Mengeluarkan biaya 61% - 70% dari alokasi anggaran." },
      { "id": 5, "nilai" : 0, "nama" : "Mengeluarkan biaya di bawah 61% dari alokasi anggaran." }
    ],
    "jawaban": 4
  },
  {
    "id": 6289,
    "bagian_id": 348,
    "nomor": 135,
    "nama": "Sekolah menyediakan biaya penggandaan soal-soal ulangan/ujian, selama satu tahun terakhir.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Mengeluarkan biaya 91% - 100% dari alokasi anggaran." },
      { "id": 2, "nilai" : 3, "nama" : "Mengeluarkan biaya 81% - 90% dari alokasi anggaran." },
      { "id": 3, "nilai" : 2, "nama" : "Mengeluarkan biaya 71% - 80% dari alokasi anggaran." },
      { "id": 4, "nilai" : 1, "nama" : "Mengeluarkan biaya 61% - 70% dari alokasi anggaran." },
      { "id": 5, "nilai" : 0, "nama" : "Mengeluarkan biaya di bawah 61% dari alokasi anggaran." }
    ],
    "jawaban": 4
  },
  {
    "id": 6290,
    "bagian_id": 348,
    "nomor": 136,
    "nama": "Sekolah menyediakan biaya pengadaan daya dan jasa, selama satu tahun terakhir.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Mengeluarkan biaya 91% - 100% dari alokasi anggaran." },
      { "id": 2, "nilai" : 3, "nama" : "Mengeluarkan biaya 81% - 90% dari alokasi anggaran." },
      { "id": 3, "nilai" : 2, "nama" : "Mengeluarkan biaya 71% - 80% dari alokasi anggaran." },
      { "id": 4, "nilai" : 1, "nama" : "Mengeluarkan biaya 61% - 70% dari alokasi anggaran." },
      { "id": 5, "nilai" : 0, "nama" : ". Mengeluarkan biaya di bawah 61% dari alokasi anggaran." }
    ],
    "jawaban": 4
  },
  {
    "id": 6291,
    "bagian_id": 348,
    "nomor": 137,
    "nama": "Sekolah menyediakan anggaran untuk mendukung kegiatan operasional tidak langsung selama tiga tahun terakhir.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Mengeluarkan biaya 91% - 100% dari alokasi anggaran." },
      { "id": 2, "nilai" : 3, "nama" : "Mengeluarkan biaya 81% - 90% dari alokasi anggaran." },
      { "id": 3, "nilai" : 2, "nama" : "Mengeluarkan biaya 71% - 80% dari alokasi anggaran." },
      { "id": 4, "nilai" : 1, "nama" : "Mengeluarkan biaya 61% - 70% dari alokasi anggaran." },
      { "id": 5, "nilai" : 0, "nama" : "Mengeluarkan biaya di bawah 61% dari alokasi anggaran." }
    ],
    "jawaban": 4
  },
  {
    "id": 6292,
    "bagian_id": 348,
    "nomor": 138,
    "nama": "Sumbangan pendidikan atau dana dari masyarakat digunakan untuk kesejahteraan dan peningkatan mutu pendidikan sekolah.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Digunakan untuk kesejahteraan warga sekolah, pengembangan guru dan tenaga kependidikan, sarana prasarana, pengembangan kurikulum dan kegiatan pembelajaran, serta kegiatan ketatausahaan" },
      { "id": 2, "nilai" : 3, "nama" : "Digunakan untuk kesejahteraan warga sekolah, pengembangan guru dan tenaga kependidikan, sarana prasarana, dan pengembangan kurikulum dan kegiatan pembelajaran, tetapi tidak untuk kegiatan ketatausahaan" },
      { "id": 3, "nilai" : 2, "nama" : "Digunakan untuk kesejahteraan warga sekolah, pengembangan guru dan tenaga kependidikan, dan sarana prasarana, tetapi tidak untuk pengembangan serta kegiatan ketatausahaan kurikulum dan kegiatan pembelajaran," },
      { "id": 4, "nilai" : 1, "nama" : "Digunakan untuk kesejahteraan warga sekolah serta pengembangan guru dan tenaga kependidikan, tetapi tidak untuk sarana dan prasarana, pengembangan kurikulum dan pembelajaran, serta kegiatan ketatausahaan" },
      { "id": 5, "nilai" : 0, "nama" : "Hanya digunakan untuk kesejahteraan warga sekolah" }
    ],
    "jawaban": 4
  },
  {
    "id": 6293,
    "bagian_id": 348,
    "nomor": 139,
    "nama": "Penetapan uang sekolah (iuran bulanan) mempertimbangkan kemampuan ekonomi orangtua siswa.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "91% - 100% siswa dari keluarga tidak mampu mendapatkan keringanan." },
      { "id": 2, "nilai" : 3, "nama" : "81% - 90% siswa dari keluarga tidak mampu mendapatkan keringanan." },
      { "id": 3, "nilai" : 2, "nama" : "71% - 80% siswa dari keluarga tidak mampu mendapatkan keringanan." },
      { "id": 4, "nilai" : 1, "nama" : "61% - 70% siswa dari keluarga tidak mampu mendapatkan keringanan." },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 61% siswa dari keluarga tidak mampu mendapatkan keringanan." }
    ],
    "jawaban": 4
  },
  {
    "id": 6294,
    "bagian_id": 348,
    "nomor": 140,
    "nama": "Siswa tidak dikenakan biaya pendaftaran ulang pada setiap awal tahun pelajaran.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Tidak ada siswa yang dikenakan biaya pendaftaran ulang." },
      { "id": 2, "nilai" : 3, "nama" : "1% - 25% siswa dikenakan biaya pendaftaran ulang." },
      { "id": 3, "nilai" : 2, "nama" : "26% - 50% siswa dikenakan biaya pendaftaran ulang." },
      { "id": 4, "nilai" : 1, "nama" : "51% - 75% siswa dikenakan biaya pendaftaran ulang." },
      { "id": 5, "nilai" : 0, "nama" : "76% - 100% siswa dikenakan biaya pendaftaran ulang." }
    ],
    "jawaban": 4
  },
  {
    "id": 6295,
    "bagian_id": 348,
    "nomor": 141,
    "nama": "Sekolah memberikan bantuan untuk siswa yang kurang mampu secara ekonomi.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Membantu 91% - 100% siswa kurang mampu." },
      { "id": 2, "nilai" : 3, "nama" : "Membantu 81% - 90% siswa kurang mampu." },
      { "id": 3, "nilai" : 2, "nama" : "Membantu 71% - 80% siswa kurang mampu." },
      { "id": 4, "nilai" : 1, "nama" : "Membantu 61% - 70% siswa kurang mampu." },
      { "id": 5, "nilai" : 0, "nama" : "Membantu kurang dari 61% siswa kurang mampu." }
    ],
    "jawaban": 4
  },
  {
    "id": 6296,
    "bagian_id": 348,
    "nomor": 142,
    "nama": "Di samping uang sekolah, SMALB tidak melakukan pungutan biaya personal lain.",
    "bobot": 2,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Tidak melakukan pungutan biaya personal lain." },
      { "id": 2, "nilai" : 3, "nama" : "Melakukan 1 jenis pungutan biaya personal lain." },
      { "id": 3, "nilai" : 2, "nama" : "Melakukan 2 jenis pungutan biaya personal lain." },
      { "id": 4, "nilai" : 1, "nama" : "Melakukan 3 jenis pungutan biaya personal lain." },
      { "id": 5, "nilai" : 0, "nama" : "Melakukan 4 jenis atau lebih pungutan biaya personal lain." }
    ],
    "jawaban": 4
  },
  {
    "id": 6297,
    "bagian_id": 348,
    "nomor": 143,
    "nama": "Pengambilan keputusan dalam penetapan dana dari masyarakat sebagai biaya personal dilakukan dengan melibatkan berbagai pihak terkait.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melibatkan penyelenggara pendidikan/yayasan, kepala sekolah, komite sekolah, perwakilan guru, dan perwakilan tenaga kependidikan." },
      { "id": 2, "nilai" : 3, "nama" : "Melibatkan penyelenggara pendidikan/yayasan, kepala sekolah, komite sekolah, dan perwakilan guru." },
      { "id": 3, "nilai" : 2, "nama" : "Melibatkan penyelenggara pendidikan/yayasan, kepala sekolah, dan komite sekolah." },
      { "id": 4, "nilai" : 1, "nama" : "Melibatkan penyelenggara pendidikan/yayasan dan kepala sekolah." },
      { "id": 5, "nilai" : 0, "nama" : "Hanya melibatkan kepala sekolah." }
    ],
    "jawaban": 4
  },
  {
    "id": 6315,
    "bagian_id": 349,
    "nomor": 161,
    "nama": "Sekolah menentukan nilai akhir kelompok mata pelajaran agama dan akhlak mulia, kewarganegaraan dan kepribadian, estetika, serta jasmani, olahraga, dan kesehatan.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melalui rapat dewan guru dengan mempertimbangkan hasil penilaian oleh guru." },
      { "id": 2, "nilai" : 3, "nama" : "Melalui rapat dewan guru tanpa mempertimbangkan hasil penilaian oleh guru." },
      { "id": 3, "nilai" : 2, "nama" : "Melalui rapat dewan guru tetapi mempertimbangkan hasil penilaian oleh guru." },
      { "id": 4, "nilai" : 1, "nama" : "Menentukan nilai akhir bersama wali kelas saja." },
      { "id": 5, "nilai" : 0, "nama" : "Hanya ditetapkan oleh kepala sekolah." }
    ],
    "jawaban": 4
  },
  {
    "id": 6298,
    "bagian_id": 348,
    "nomor": 144,
    "nama": "Pengelolaan dana dari masyarakat sebagai biaya personal dilakukan secara sistematis, transparan, efisien, dan akuntabel, serta dilaporkan kepada komite sekolah",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Dikelola secara sistematis, transparan, efisien, dan akuntabel, serta dilaporkan" },
      { "id": 2, "nilai" : 3, "nama" : "Dikelola secara sistematis, transparan, efisien, dan akuntabel, tetapi tidak dilaporkan" },
      { "id": 3, "nilai" : 2, "nama" : "Dikelola secara sistematis, transparan, dan efisien tetapi tidak akuntabel dan tidak dilaporkan" },
      { "id": 4, "nilai" : 1, "nama" : "Dikelola secara sistematis dan transparan, tetapi tidak efisien dan akuntabel, tetapi tidak dilaporkan" },
      { "id": 5, "nilai" : 0, "nama" : "Dikelola dengan tidak sistematis, transparan, efisien, dan akuntabel." }
    ],
    "jawaban": 4
  },
  {
    "id": 6299,
    "bagian_id": 348,
    "nomor": 145,
    "nama": "Sekolah memiliki pedoman pengelolaan keuangan sebagai dasar dalam penyusunan RKAS.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki pedoman pengelolaan keuangan 4 tahun terakhir." },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki pedoman pengelolaan keuangan 3 tahun terakhir." },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki pedoman pengelolaan keuangan 2 tahun terakhir." },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki pedoman pengelolaan keuangan 1 tahun terakhir." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki pedoman pengelolaan keuangan." }
    ],
    "jawaban": 4
  },
  {
    "id": 6155,
    "bagian_id": 342,
    "nomor": 1,
    "nama": "Sekolah melaksanakan Kurikulum Tingkat Satuan Pendidikan (KTSP).",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melaksanakan kurikulum berdasarkan 8 muatan KTSP." },
      { "id": 2, "nilai" : 3, "nama" : "Melaksanakan kurikulum berdasarkan 7 muatan KTSP." },
      { "id": 3, "nilai" : 2, "nama" : "Melaksanakan kurikulum berdasarkan 6 muatan KTSP." },
      { "id": 4, "nilai" : 1, "nama" : "Melaksanakan kurikulum berdasarkan 5 muatan KTSP." },
      { "id": 5, "nilai" : 0, "nama" : "Melaksanakan kurikulum berdasarkan 4 atau kurang muatan KTSP." }
    ],
    "jawaban": 4
  },
  {
    "id": 6156,
    "bagian_id": 342,
    "nomor": 2,
    "nama": "Sekolah mengembangkan kurikulum bersama-sama Tim Pengembang Kurikulum berpedoman pada panduan penyusunan kurikulum oleh BSNP yang relevan dengan jenis ketunaan.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Bersama guru, konselor, kepala sekolah, narasumber, komite sekolah atau penyelenggara lembaga pendidikan." },
      { "id": 2, "nilai" : 3, "nama" : "Bersama guru, konselor, kepala sekolah, dan narasumber." },
      { "id": 3, "nilai" : 2, "nama" : "Bersama guru, konselor, dan kepala sekolah." },
      { "id": 4, "nilai" : 1, "nama" : "Bersama guru dan konselor." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak mengembangkan kurikulum." }
    ],
    "jawaban": 4
  },
  {
    "id": 6157,
    "bagian_id": 342,
    "nomor": 3,
    "nama": "Sekolah mengembangkan kurikulum sesuai prinsip pengembangan KTSP.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memenuhi 7 prinsip pengembangan KTSP." },
      { "id": 2, "nilai" : 3, "nama" : "Memenuhi 5 - 6 prinsip pengembangan KTSP." },
      { "id": 3, "nilai" : 2, "nama" : "Memenuhi 3 - 4 prinsip pengembangan KTSP." },
      { "id": 4, "nilai" : 1, "nama" : "Memenuhi 1 - 2 prinsip pengembangan KTSP." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak mengembangkan KTSP." }
    ],
    "jawaban": 4
  },
  {
    "id": 6158,
    "bagian_id": 342,
    "nomor": 4,
    "nama": "Sekolah melaksanakan kurikulum berdasarkan prinsip perbaikan layanan pembelajaran, pengayaan layanan pembelajaran, pendayagunaan kondisi alam, serta pendayagunaan kondisi sosial dan budaya sesuai karakteristik ketunaan.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Berdasarkan prinsip perbaikan layanan pembelajaran, pengayaan layanan pembelajaran, pendayagunaan kondisi alam, serta pendayagunaan kondisi sosial dan budaya." },
      { "id": 2, "nilai" : 3, "nama" : "Berdasarkan prinsip perbaikan layanan pembelajaran, pengayaan layanan pembelajaran, dan pendayagunaan kondisi alam." },
      { "id": 3, "nilai" : 2, "nama" : "Berdasarkan prinsip perbaikan layanan pembelajaran dan pengayaan layanan pembelajaran." },
      { "id": 4, "nilai" : 1, "nama" : "Berdasarkan prinsip perbaikan layanan pembelajaran." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak berdasarkan prinsip pelaksanaan kurikulum." }
    ],
    "jawaban": 4
  },
  {
    "id": 6159,
    "bagian_id": 342,
    "nomor": 5,
    "nama": "Sekolah melaksanakan kurikulum pendidikan khusus yang terdiri dari 8 - 10 mata pelajaran.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melaksanakan 8 atau lebih mata pelajaran." },
      { "id": 2, "nilai" : 3, "nama" : "Melaksanakan 7 mata pelajaran." },
      { "id": 3, "nilai" : 2, "nama" : "Melaksanakan 6 mata pelajaran." },
      { "id": 4, "nilai" : 1, "nama" : "Melaksanakan 5 mata pelajaran." },
      { "id": 5, "nilai" : 0, "nama" : "Melaksanakan kurang dari 5 mata pelajaran." }
    ],
    "jawaban": 4
  },
  {
    "id": 6160,
    "bagian_id": 342,
    "nomor": 6,
    "nama": "Sekolah menyusun kurikulum muatan lokal dan kurikulum berbasis pendidikan karakter dengan melibatkan berbagai pihak.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melibatkan kepala sekolah, guru, komite sekolah atau penyelenggara lembaga pendidikan, dinas pendidikan, dan instansi terkait di daerah." },
      { "id": 2, "nilai" : 3, "nama" : "Melibatkan kepala sekolah, guru, komite sekolah atau penyelenggara lembaga pendidikan, dan dinas pendidikan." },
      { "id": 3, "nilai" : 2, "nama" : "Melibatkan kepala sekolah, guru, dan komite sekolah atau penyelenggara lembaga pendidikan." },
      { "id": 4, "nilai" : 1, "nama" : "Melibatkan kepala sekolah dan guru." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak menyusun kurikulum muatan lokal." }
    ],
    "jawaban": 4
  },
  {
    "id": 6161,
    "bagian_id": 342,
    "nomor": 7,
    "nama": "Sekolah melaksanakan program pengembangan diri dalam bentuk kegiatan ekstrakurikuler.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melaksanakan 4 jenis atau lebih kegiatan ekstrakurikuler." },
      { "id": 2, "nilai" : 3, "nama" : "Melaksanakan 3 jenis kegiatan ekstrakurikuler." },
      { "id": 3, "nilai" : 2, "nama" : "Melaksanakan 2 jenis kegiatan ekstrakurikuler." },
      { "id": 4, "nilai" : 1, "nama" : "Melaksanakan 1 jenis kegiatan ekstrakurikuler." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melaksanakan kegiatan ekstrakurikuler." }
    ],
    "jawaban": 4
  },
  {
    "id": 6162,
    "bagian_id": 342,
    "nomor": 8,
    "nama": "Sekolah melaksanakan program pengembangan diri dalam bentuk kegiatan layanan konseling.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melaksanakan 4 atau lebih jenis layanan konseling." },
      { "id": 2, "nilai" : 3, "nama" : "Melaksanakan 3 jenis layanan konseling." },
      { "id": 3, "nilai" : 2, "nama" : "Melaksanakan 2 jenis layanan konseling." },
      { "id": 4, "nilai" : 1, "nama" : "Melaksanakan 1 jenis layanan konseling." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melaksanakan layanan konseling." }
    ],
    "jawaban": 4
  },
  {
    "id": 6163,
    "bagian_id": 342,
    "nomor": 9,
    "nama": "Sekolah melaksanakan muatan isi kurikulum yang terdiri dari aspek akademis dan aspek keterampilan vokasional.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "46% atau lebih aspek keterampilan, sisanya aspek akademis." },
      { "id": 2, "nilai" : 3, "nama" : "31% - 45% aspek keterampilan, sisanya aspek akademis." },
      { "id": 3, "nilai" : 2, "nama" : "16% - 30% aspek keterampilan, sisanya aspek akademis." },
      { "id": 4, "nilai" : 1, "nama" : "1% - 15% aspek keterampilan, sisanya aspek akademis." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki kurikulum aspek keterampilan." }
    ],
    "jawaban": 4
  },
  {
    "id": 6164,
    "bagian_id": 342,
    "nomor": 10,
    "nama": "Sekolah memiliki mata pelajaran keterampilan vokasional (TIK) yang dilengkapi dokumen standar kompetensi (SK) dan kompetensi dasar (KD) untuk setiap mata pelajaran.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "4 atau lebih mata pelajaran TIK memiliki dokumen SK dan KD." },
      { "id": 2, "nilai" : 3, "nama" : "3 mata pelajaran TIK memiliki dokumen SK dan KD." },
      { "id": 3, "nilai" : 2, "nama" : "2 mata pelajaran TIK memiliki dokumen SK dan KD." },
      { "id": 4, "nilai" : 1, "nama" : "1 mata pelajaran TIK memiliki dokumen SK dan KD." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak ada mata pelajaran TIK memiliki dokumen SK dan KD." }
    ],
    "jawaban": 4
  },
  {
    "id": 6165,
    "bagian_id": 342,
    "nomor": 11,
    "nama": "Sekolah menerapkan kegiatan pembelajaran sesuai dengan ketentuan beban belajar yang tertuang pada standar isi.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Satu jam pembelajaran tatap muka selama 40 menit, jumlah jam pembelajaran per minggu minimal 38 jam, dan jumlah minggu efektif per tahun minimal 34 minggu." },
      { "id": 2, "nilai" : 3, "nama" : "Satu jam pembelajaran tatap muka selama 40 menit, jumlah jam pembelajaran per minggu minimal 38 jam, dan jumlah minggu efektif per tahun kurang dari 34 minggu." },
      { "id": 3, "nilai" : 2, "nama" : "Satu jam pembelajaran tatap muka selama 40 menit, jumlah jam pembelajaran per minggu kurang dari 38 jam, dan jumlah minggu efektif per tahun kurang dari 34 minggu." },
      { "id": 4, "nilai" : 1, "nama" : "Satu jam pembelajaran tatap muka kurang dari 40 menit, jumlah jam pembelajaran per minggu kurang dari 38 jam, dan jumlah minggu efektif per tahun kurang dari 34 minggu." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak menerapkan ketentuan beban belajar yang berlaku." }
    ],
    "jawaban": 4
  },
  {
    "id": 6166,
    "bagian_id": 342,
    "nomor": 12,
    "nama": "Guru memberikan penugasan terstruktur dan kegiatan mandiri tidak terstruktur untuk mencapai kompetensi tertentu, maksimum 60% dari jumlah waktu kegiatan tatap muka mata pelajaran yang bersangkutan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "76% - 100% guru memberikan penugasan terstruktur dan kegiatan mandiri tidak terstruktur." },
      { "id": 2, "nilai" : 3, "nama" : "51% - 75% guru memberikan penugasan terstruktur dan kegiatan mandiri tidak terstruktur." },
      { "id": 3, "nilai" : 2, "nama" : "26% - 50% guru memberikan penugasan terstruktur dan kegiatan mandiri tidak terstruktur." },
      { "id": 4, "nilai" : 1, "nama" : "1% - 25% guru memberikan penugasan terstruktur dan kegiatan mandiri tidak terstruktur." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak ada guru yang memberikan penugasan terstruktur dan kegiatan mandiri tidak terstruktur." }
    ],
    "jawaban": 4
  },
  {
    "id": 6167,
    "bagian_id": 342,
    "nomor": 13,
    "nama": "Dokumen lengkap KTSP disahkan oleh Kepala Sekolah dengan memperhatikan pertimbangan Komite Sekolah atau penyelenggara pendidikan yang disetujui oleh Dinas Pendidikan yang bersangkutan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "KTSP disahkan oleh Kepala Sekolah dengan memperhatikan pertimbangan Komite Sekolah atau penyelenggara pendidikan, dan disetujui oleh Dinas Pendidikan yang bersangkutan." },
      { "id": 2, "nilai" : 3, "nama" : "KTSP disahkan oleh Kepala Sekolah dan disetujui oleh Dinas Pendidikan yang bersangkutan." },
      { "id": 3, "nilai" : 2, "nama" : "KTSP disahkan oleh Kepala Sekolah dengan memperhatikan pertimbangan Komite Sekolah atau penyelenggara pendidikan." },
      { "id": 4, "nilai" : 1, "nama" : "KTSP disahkan oleh Kepala Sekolah." },
      { "id": 5, "nilai" : 0, "nama" : "KTSP tidak disahkan." }
    ],
    "jawaban": 4
  },
  {
    "id": 6168,
    "bagian_id": 342,
    "nomor": 14,
    "nama": "Sekolah memiliki kalender pendidikan yang memuat pengaturan waktu untuk kegiatan pembelajaran peserta didik selama satu tahun ajaran: (1) awal tahun pelajaran, (2) minggu efektif, (3) pembelajaran efektif, dan (4) hari libur.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memuat 4 macam pengaturan waktu." },
      { "id": 2, "nilai" : 3, "nama" : "Memuat 3 macam pengaturan waktu." },
      { "id": 3, "nilai" : 2, "nama" : "Memuat 2 macam pengaturan waktu." },
      { "id": 4, "nilai" : 1, "nama" : "Memuat 1 macam pengaturan waktu." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki kalender pendidikan." }
    ],
    "jawaban": 4
  },
  {
    "id": 6169,
    "bagian_id": 343,
    "nomor": 15,
    "nama": "Sekolah mengembangkan silabus secara mandiri atau cara lainnya berdasarkan standar isi, standar kompetensi lulusan, dan panduan penyusunan KTSP.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Mengembangkan silabus melalui kelompok guru mata pelajaran dalam sebuah sekolah." },
      { "id": 2, "nilai" : 3, "nama" : "Mengembangkan silabus oleh masing-masing guru mata pelajaran." },
      { "id": 3, "nilai" : 2, "nama" : "Mengembangkan silabus melalui kelompok guru dari beberapa sekolah." },
      { "id": 4, "nilai" : 1, "nama" : "Mengembangkan silabus dengan mengadopsi contoh yang ada." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak mengembangkan silabus." }
    ],
    "jawaban": 4
  },
  {
    "id": 6170,
    "bagian_id": 343,
    "nomor": 16,
    "nama": "Setiap mata pelajaran memiliki Rencana Pelaksanaan Pembelajaran (RPP) dengan mengintegrasikan pendidikan karakter yang dijabarkan dari silabus.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "9 atau lebih mata pelajaran memiliki RPP dengan mengintegrasikan pendidikan karakter yang dijabarkan dari silabus." },
      { "id": 2, "nilai" : 3, "nama" : "7 - 8 mata pelajaran memiliki RPP dengan mengintegrasikan pendidikan karakter yang dijabarkan dari silabus." },
      { "id": 3, "nilai" : 2, "nama" : "5 - 6 mata pelajaran memiliki RPP dengan mengintegrasikan pendidikan karakter yang dijabarkan dari silabus." },
      { "id": 4, "nilai" : 1, "nama" : "3 - 4 mata pelajaran memiliki RPP dengan mengintegrasikan pendidikan karakter yang dijabarkan dari silabus." },
      { "id": 5, "nilai" : 0, "nama" : "2 atau kurang mata pelajaran memiliki RPP dengan mengintegrasikan pendidikan karakter yang dijabarkan dari silabus." }
    ],
    "jawaban": 4
  },
  {
    "id": 6171,
    "bagian_id": 343,
    "nomor": 17,
    "nama": "RPP disusun dengan memperhatikan 6 prinsip penyusunan.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memperhatikan 6 prinsip penyusunan." },
      { "id": 2, "nilai" : 3, "nama" : "Memperhatikan 5 prinsip penyusunan." },
      { "id": 3, "nilai" : 2, "nama" : "Memperhatikan 4 prinsip penyusunan." },
      { "id": 4, "nilai" : 1, "nama" : "Memperhatikan 3 prinsip penyusunan." },
      { "id": 5, "nilai" : 0, "nama" : "Memperhatikan 2 atau kurang prinsip penyusunan." }
    ],
    "jawaban": 4
  },
  {
    "id": 6172,
    "bagian_id": 343,
    "nomor": 18,
    "nama": "Sekolah melaksanakan proses pembelajaran dengan memenuhi persyaratan yang ditentukan.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memenuhi 4 persyaratan pelaksanaan proses pembelajaran." },
      { "id": 2, "nilai" : 3, "nama" : "Memenuhi 3 persyaratan pelaksanaan proses pembelajaran." },
      { "id": 3, "nilai" : 2, "nama" : "Memenuhi 2 persyaratan pelaksanaan proses pembelajaran." },
      { "id": 4, "nilai" : 1, "nama" : "Memenuhi 1 persyaratan pelaksanaan proses pembelajaran." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memenuhi persyaratan pelaksanaan proses pembelajaran." }
    ],
    "jawaban": 4
  },
  {
    "id": 6173,
    "bagian_id": 343,
    "nomor": 19,
    "nama": "Sekolah melaksanakan proses pembelajaran dengan memenuhi persyaratan beban kerja, minimal guru 24 jam tatap muka per minggu.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "76% - 100% guru memenuhi persyaratan beban kerja minimal." },
      { "id": 2, "nilai" : 3, "nama" : "51% - 75% guru memenuhi persyaratan beban kerja minimal." },
      { "id": 3, "nilai" : 2, "nama" : "26% - 50% guru memenuhi persyaratan beban kerja minimal." },
      { "id": 4, "nilai" : 1, "nama" : "1% - 25% guru memenuhi persyaratan beban kerja minimal." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memenuhi persyaratan beban kerja minimal." }
    ],
    "jawaban": 4
  },
  {
    "id": 6174,
    "bagian_id": 343,
    "nomor": 20,
    "nama": "Proses pembelajaran di sekolah dilaksanakan sesuai dengan langkah- langkah pembelajaran.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "76% - 100% guru melaksanakan proses pembelajaran sesuai dengan langkah-langkah pembelajaran." },
      { "id": 2, "nilai" : 3, "nama" : "51% - 75% guru melaksanakan proses pembelajaran sesuai dengan langkah-langkah pembelajaran." },
      { "id": 3, "nilai" : 2, "nama" : "26% - 50% guru melaksanakan proses pembelajaran sesuai dengan langkah-langkah pembelajaran." },
      { "id": 4, "nilai" : 1, "nama" : "1% - 25% guru melaksanakan proses pembelajaran sesuai dengan langkah-langkah pembelajaran." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak ada guru yang melaksanakan proses pembelajaran sesuai dengan langkah-langkah pembelajaran." }
    ],
    "jawaban": 4
  },
  {
    "id": 6175,
    "bagian_id": 343,
    "nomor": 21,
    "nama": "Kepala sekolah melakukan pemantauan proses pembelajaran mencakup 4 tahap yakni (1) perencanaan, (2) pelaksanaan, (3) penilaian hasil pembelajaran, dan (4) diskusi hasil pemantauan.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Mencakup 4 tahap pemantauan." },
      { "id": 2, "nilai" : 3, "nama" : "Mencakup 3 tahap pemantauan." },
      { "id": 3, "nilai" : 2, "nama" : "Mencakup 2 tahap pemantauan." },
      { "id": 4, "nilai" : 1, "nama" : "Mencakup 1 tahap pemantauan." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak pernah melakukan pemantauan." }
    ],
    "jawaban": 4
  },
  {
    "id": 6176,
    "bagian_id": 343,
    "nomor": 22,
    "nama": "Kepala sekolah melakukan supervisi proses pembelajaran dan menindaklanjuti dengan 4 cara yaitu: (1) pemberian contoh, (2) diskusi, (3) pelatihan, (4) dan konsultasi.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Menindaklanjuti dengan 4 cara." },
      { "id": 2, "nilai" : 3, "nama" : "Menindaklanjuti dengan 3 cara." },
      { "id": 3, "nilai" : 2, "nama" : "Menindaklanjuti dengan 2 cara." },
      { "id": 4, "nilai" : 1, "nama" : "Menindaklanjuti dengan 1 cara." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melakukan supervisi." }
    ],
    "jawaban": 4
  },
  {
    "id": 6177,
    "bagian_id": 343,
    "nomor": 23,
    "nama": "Kepala sekolah melakukan evaluasi terhadap proses pembelajaran dan kinerja guru dengan memperhatikan 4 aspek, yaitu: (1) persiapan, (2) pelaksanaan, (3) evaluasi pembelajaran dan (4) rencana tindak lanjut.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memperhatikan 4 aspek." },
      { "id": 2, "nilai" : 3, "nama" : "Memperhatikan 3 aspek." },
      { "id": 3, "nilai" : 2, "nama" : "Memperhatikan 2 aspek." },
      { "id": 4, "nilai" : 1, "nama" : "Memperhatikan 1 aspek." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melakukan evaluasi." }
    ],
    "jawaban": 4
  },
  {
    "id": 6178,
    "bagian_id": 343,
    "nomor": 24,
    "nama": "Kepala sekolah menyampaikan hasil pengawasan proses pembelajaran kepada pemangku kepentingan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Kepada guru yang bersangkutan, dewan guru, dan pengawas sekolah." },
      { "id": 2, "nilai" : 3, "nama" : "Kepada guru yang bersangkutan dan dewan guru." },
      { "id": 3, "nilai" : 2, "nama" : "Kepada guru yang bersangkutan saja." },
      { "id": 4, "nilai" : 1, "nama" : "Tidak disampaikan." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melakukan pengawasan." }
    ],
    "jawaban": 4
  },
  {
    "id": 6179,
    "bagian_id": 343,
    "nomor": 25,
    "nama": "Kepala sekolah melakukan tindak lanjut terhadap hasil pengawasan proses pembelajaran, selama satu tahun terakhir.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "76% - 100% hasil pengawasan ditindaklanjuti." },
      { "id": 2, "nilai" : 3, "nama" : "51% - 75% hasil pengawasan ditindaklanjuti." },
      { "id": 3, "nilai" : 2, "nama" : "26% - 50% hasil pengawasan ditindaklanjuti." },
      { "id": 4, "nilai" : 1, "nama" : "1% - 25% hasil pengawasan ditindaklanjuti." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak ada hasil pengawasan yang ditindaklanjuti" }
    ],
    "jawaban": 4
  },
  {
    "id": 6180,
    "bagian_id": 344,
    "nomor": 26,
    "nama": "Siswa memperoleh pengalaman belajar untuk memiliki kemampuan berpikir logis, kritis, kreatif, dan inovatif di bawah bimbingan guru.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "76% - 100% mata pelajaran memuat tugas yang memberikan kesempatan berpikir logis, kritis, kreatif, dan inovatif di bawah bimbingan guru" },
      { "id": 2, "nilai" : 3, "nama" : "51% - 75% mata pelajaran memuat tugas yang memberikan kesempatan berpikir logis, kritis, kreatif, dan inovatif di bawah bimbingan guru." },
      { "id": 3, "nilai" : 2, "nama" : "26% - 50% mata pelajaran memuat tugas yang memberikan kesempatan berpikir logis, kritis, kreatif, dan inovatif di bawah bimbingan guru." },
      { "id": 4, "nilai" : 1, "nama" : "1% - 25% mata pelajaran memuat tugas yang memberikan kesempatan berpikir logis, kritis, kreatif, dan inovatif di bawah bimbingan guru" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak ada mata pelajaran memuat tugas yang memberikan kesempatan berpikir logis, kritis, kreatif, dan inovatif di bawah bimbingan guru" }
    ],
    "jawaban": 4
  },
  {
    "id": 6181,
    "bagian_id": 344,
    "nomor": 27,
    "nama": "Siswa terlibat dalam kegiatan belajar yang dapat memecahkan masalah dalam kehidupan sehari-hari sesuai ketunaan siswa.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "76% - 100% mata pelajaran memuat kegiatan belajar siswa dalam memecahkan masalah." },
      { "id": 2, "nilai" : 3, "nama" : "51% - 75% mata pelajaran memuat kegiatan belajar siswa dalam memecahkan masalah." },
      { "id": 3, "nilai" : 2, "nama" : "26% - 50% mata pelajaran memuat kegiatan belajar siswa dalam memecahkan masalah." },
      { "id": 4, "nilai" : 1, "nama" : "1% - 25% mata pelajaran memuat kegiatan belajar siswa dalam memecahkan masalah." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak ada mata pelajaran memuat kegiatan belajar siswa dalam memecahkan masalah." }
    ],
    "jawaban": 4
  },
  {
    "id": 6182,
    "bagian_id": 344,
    "nomor": 28,
    "nama": "Siswa memperoleh pengalaman belajar yang dapat menganalisis dan/atau mengenal gejala alam dan sosial di lingkungan sekitar.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "76% - 100% RPP mata pelajaran memuat kegiatan pembelajaran yang menunjukkan kemampuan mengenali gejala alam dan sosial." },
      { "id": 2, "nilai" : 3, "nama" : "51% - 75% RPP mata pelajaran memuat kegiatan pembelajaran yang menunjukkan kemampuan mengenali gejala alam dan sosial." },
      { "id": 3, "nilai" : 2, "nama" : "26% - 50% RPP mata pelajaran memuat kegiatan pembelajaran yang menunjukkan kemampuan mengenali gejala alam dan sosial." },
      { "id": 4, "nilai" : 1, "nama" : "1% - 25% RPP mata pelajaran memuat kegiatan pembelajaran yang menunjukkan kemampuan mengenali gejala alam dan sosial." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak ada RPP mata pelajaran yang memuat kegiatan pembelajaran yang menunjukkan kemampuan mengenali gejala alam dan sosial." }
    ],
    "jawaban": 4
  },
  {
    "id": 6183,
    "bagian_id": 344,
    "nomor": 29,
    "nama": "Siswa memperoleh pengalaman belajar untuk menunjukkan kemampuan belajar secara mandiri.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sekolah memfasilitasi kegiatan pembelajaran mandiri dengan me- manfaatkan sumber belajar: bahan ajar, buku teks, perpustakaan, sumber belajar lapangan/lainnya, dan internet/komputer edukasi." },
      { "id": 2, "nilai" : 3, "nama" : "Sekolah memfasilitasi kegiatan pembelajaran mandiri dengan memanfaatkan sumber belajar: bahan ajar, buku teks, perpustakaan, dan sumber belajar lapangan/lainnya." },
      { "id": 3, "nilai" : 2, "nama" : "Sekolah memfasilitasi kegiatan pembelajaran mandiri dengan memanfaatkan sumber belajar: bahan ajar, buku teks, dan perpustakaan." },
      { "id": 4, "nilai" : 1, "nama" : "Sekolah memfasilitasi kegiatan pembelajaran mandiri dengan memanfaatkan sumber belajar: bahan ajar dan buku teks." },
      { "id": 5, "nilai" : 0, "nama" : "Sekolah tidak pernah memfasilitasi kegiatan pembelajaran mandiri dengan memanfaatkan sumber belajar." }
    ],
    "jawaban": 4
  },
  {
    "id": 6184,
    "bagian_id": 344,
    "nomor": 30,
    "nama": "Siswa memperoleh pengalaman belajar melalui program pembiasaan untuk mencari informasi dari lingkungan sekitar yang dihadapinya secara sederhana dalam satu tahun terakhir.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sekolah melaksanakan 4 atau lebih kegiatan pembiasaan untuk mencari informasi dari lingkungan sekitar." },
      { "id": 2, "nilai" : 3, "nama" : "Sekolah melaksanakan 3 kegiatan pembiasaan untuk mencari informasi dari lingkungan sekitar." },
      { "id": 3, "nilai" : 2, "nama" : "Sekolah melaksanakan 2 kegiatan pembiasaan untuk mencari informasi dari lingkungan sekitar." },
      { "id": 4, "nilai" : 1, "nama" : "Sekolah melaksanakan 1 kegiatan pembiasaan untuk mencari informasi dari lingkungan sekitar." },
      { "id": 5, "nilai" : 0, "nama" : "Sekolah tidak pernah melaksanakan kegiatan pembiasaan untuk mencari informasi dari lingkungan sekitar." }
    ],
    "jawaban": 4
  },
  {
    "id": 6185,
    "bagian_id": 344,
    "nomor": 31,
    "nama": "Siswa memperoleh pengalaman belajar untuk menunjukkan kecintaan dan kepedulian terhadap lingkungan sekitarnya, dalam satu tahun terakhir.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sekolah melaksanakan 4 atau lebih kegiatan kecintaan dan kepedulian terhadap lingkungan sekitar." },
      { "id": 2, "nilai" : 3, "nama" : "Sekolah melaksanakan 3 kegiatan kecintaan dan kepedulian terhadap lingkungan sekitar." },
      { "id": 3, "nilai" : 2, "nama" : "Sekolah melaksanakan 2 kegiatan kecintaan dan kepedulian terhadap lingkungan sekitar." },
      { "id": 4, "nilai" : 1, "nama" : "Sekolah melaksanakan 1 kegiatan kecintaan dan kepedulian terhadap lingkungan sekitar." },
      { "id": 5, "nilai" : 0, "nama" : "Sekolah tidak pernah melaksanakan kegiatan kecintaan dan kepedulian terhadap lingkungan sekitar." }
    ],
    "jawaban": 4
  },
  {
    "id": 6186,
    "bagian_id": 344,
    "nomor": 32,
    "nama": "Siswa memperoleh pengalaman belajar untuk menunjukkan kemampuan mengekspresikan kegiatan seni dan budaya sesuai dengan potensi yang dimiliki, dalam satu tahun terakhir.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sekolah memfasilitasi 4 atau lebih kegiatan seni dan budaya." },
      { "id": 2, "nilai" : 3, "nama" : "Sekolah memfasilitasi 3 kegiatan seni dan budaya." },
      { "id": 3, "nilai" : 2, "nama" : "Sekolah memfasilitasi 2 kegiatan seni dan budaya." },
      { "id": 4, "nilai" : 1, "nama" : "Sekolah memfasilitasi 1 kegiatan seni dan budaya." },
      { "id": 5, "nilai" : 0, "nama" : "Sekolah tidak pernah memfasilitasi kegiatan seni dan budaya." }
    ],
    "jawaban": 4
  },
  {
    "id": 6187,
    "bagian_id": 344,
    "nomor": 33,
    "nama": "Siswa memperoleh pengalaman mengapresiasi karya seni dan budaya secara sederhana.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sekolah memfasilitasi 4 atau lebih kegiatan mengapresiasi karya seni dan budaya." },
      { "id": 2, "nilai" : 3, "nama" : "Sekolah memfasilitasi 3 kegiatan mengapresiasi karya seni dan budaya." },
      { "id": 3, "nilai" : 2, "nama" : "Sekolah memfasilitasi 2 kegiatan mengapresiasi karya seni dan budaya." },
      { "id": 4, "nilai" : 1, "nama" : "Sekolah memfasilitasi 1 kegiatan mengapresiasi karya seni dan budaya." },
      { "id": 5, "nilai" : 0, "nama" : "Sekolah tidak pernah memfasilitasi kegiatan mengapresiasi karya seni dan budaya." }
    ],
    "jawaban": 4
  },
  {
    "id": 6188,
    "bagian_id": 344,
    "nomor": 34,
    "nama": "Siswa memperoleh pengalaman belajar untuk menunjukkan sikap percaya diri dan bertanggung jawab seiring perkembangan siswa.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sekolah melaksanakan 4 atau lebih kegiatan kesiswaan untuk menunjukkan sikap percaya diri dan bertanggung jawab." },
      { "id": 2, "nilai" : 3, "nama" : "Sekolah melaksanakan 3 kegiatan kesiswaan untuk menunjukkan sikap percaya diri dan bertanggung jawab." },
      { "id": 3, "nilai" : 2, "nama" : "Sekolah melaksanakan 2 kegiatan kesiswaan untuk menunjukkan sikap percaya diri dan bertanggung jawab." },
      { "id": 4, "nilai" : 1, "nama" : "Sekolah melaksanakan 1 kegiatan kesiswaan untuk menunjukkan sikap percaya diri dan bertanggung jawab." },
      { "id": 5, "nilai" : 0, "nama" : "Sekolah tidak pernah melaksanakan kegiatan kesiswaan untuk menunjukkan sikap percaya diri dan bertanggung jawab." }
    ],
    "jawaban": 4
  },
  {
    "id": 6189,
    "bagian_id": 344,
    "nomor": 35,
    "nama": "Siswa memperoleh pengalaman belajar untuk mematuhi aturan-aturan sosial yang berlaku dalam lingkungannya dalam satu tahun terakhir.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sekolah menjalankan 4 atau lebih kegiatan belajar untuk mematuhi aturan-aturan sosial." },
      { "id": 2, "nilai" : 3, "nama" : "Sekolah menjalankan 3 kegiatan belajar untuk mematuhi aturan- aturan sosial." },
      { "id": 3, "nilai" : 2, "nama" : "Sekolah menjalankan 2 kegiatan belajar untuk mematuhi aturan- aturan sosial." },
      { "id": 4, "nilai" : 1, "nama" : "Sekolah menjalankan 1 kegiatan belajar untuk mematuhi aturan- aturan sosial." },
      { "id": 5, "nilai" : 0, "nama" : "Sekolah tidak pernah menjalankan kegiatan belajar untuk mematuhi aturan-aturan sosial." }
    ],
    "jawaban": 4
  },
  {
    "id": 6190,
    "bagian_id": 344,
    "nomor": 36,
    "nama": "Siswa memperoleh pengalaman belajar untuk menunjukkan kebiasaan hidup bersih, sehat, dan bugar, dalam satu tahun terakhir.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sekolah melaksanakan 4 atau lebih kegiatan pembiasaan untuk hidup bersih, sehat, dan bugar." },
      { "id": 2, "nilai" : 3, "nama" : "Sekolah melaksanakan 3 kegiatan pembiasaan untuk hidup bersih, sehat, dan bugar." },
      { "id": 3, "nilai" : 2, "nama" : "Sekolah melaksanakan 2 kegiatan pembiasaan untuk hidup bersih, sehat, dan bugar." },
      { "id": 4, "nilai" : 1, "nama" : "Sekolah melaksanakan 1 kegiatan pembiasaan untuk hidup bersih, sehat, dan bugar." },
      { "id": 5, "nilai" : 0, "nama" : "Sekolah tidak pernah melaksanakan kegiatan pembiasaan untuk hidup bersih, sehat, dan bugar." }
    ],
    "jawaban": 4
  },
  {
    "id": 6191,
    "bagian_id": 344,
    "nomor": 37,
    "nama": "Siswa memperoleh pengalaman belajar yang mampu menumbuhkan sikap sportif untuk mendapatkan hasil terbaik, dalam satu tahun terakhir.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sekolah melaksanakan 4 atau lebih kegiatan pembelajaran yang menumbuhkan sikap sportif." },
      { "id": 2, "nilai" : 3, "nama" : "Sekolah melaksanakan 3 kegiatan pembelajaran yang menumbuhkan sikap sportif." },
      { "id": 3, "nilai" : 2, "nama" : "Sekolah melaksanakan 2 kegiatan pembelajaran yang menumbuhkan sikap sportif." },
      { "id": 4, "nilai" : 1, "nama" : "Sekolah melaksanakan 1 kegiatan pembelajaran yang menumbuhkan sikap sportif." },
      { "id": 5, "nilai" : 0, "nama" : "Sekolah tidak pernah melaksanakan kegiatan pembelajaran yang menumbuhkan sikap sportif." }
    ],
    "jawaban": 4
  },
  {
    "id": 6192,
    "bagian_id": 344,
    "nomor": 38,
    "nama": "Siswa memperoleh pengalaman belajar yang dapat melibatkan partisipasi siswa dalam kehidupan bermasyarakat, berbangsa, dan bernegara secara demokratis dan bertanggungjawab dalam wadah NKRI.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melaksanakan 4 atau lebih kegiatan belajar yang melibatkan siswa." },
      { "id": 2, "nilai" : 3, "nama" : "Melaksanakan 3 kegiatan belajar yang melibatkan siswa." },
      { "id": 3, "nilai" : 2, "nama" : "Melaksanakan 2 kegiatan belajar yang melibatkan siswa." },
      { "id": 4, "nilai" : 1, "nama" : "Melaksanakan 1 kegiatan belajar yang melibatkan siswa." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melaksanakan kegiatan belajar yang melibatkan siswa." }
    ],
    "jawaban": 4
  },
  {
    "id": 6193,
    "bagian_id": 344,
    "nomor": 39,
    "nama": "Siswa memperoleh pengalaman belajar untuk membentuk karakter siswa, menumbuhkan rasa sportivitas, dan kebersihan lingkungan.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melaksanakan 4 jenis atau lebih program pembentukan karakter siswa." },
      { "id": 2, "nilai" : 3, "nama" : "Melaksanakan 3 jenis program pembentukan karakter siswa." },
      { "id": 3, "nilai" : 2, "nama" : "Melaksanakan 2 jenis program pembentukan karakter siswa." },
      { "id": 4, "nilai" : 1, "nama" : "Melaksanakan 1 jenis program pembentukan karakter siswa." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melaksanakan program pembentukan karakter siswa." }
    ],
    "jawaban": 4
  },
  {
    "id": 6194,
    "bagian_id": 344,
    "nomor": 40,
    "nama": "Siswa memperoleh pengalaman belajar melalui pembiasaan untuk memahami hak dan kewajiban orang lain dalam pergaulan masyarakat.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "91% - 100% silabus mata pelajaran PKn dan IPS memuat kegiatan untuk memahami hak dan kewajiban orang lain." },
      { "id": 2, "nilai" : 3, "nama" : "81% - 90% silabus mata pelajaran PKn dan IPS memuat kegiatan untuk memahami hak dan kewajiban orang lain." },
      { "id": 3, "nilai" : 2, "nama" : "71% - 80% silabus mata pelajaran PKn dan IPS memuat kegiatan untuk memahami hak dan kewajiban orang lain." },
      { "id": 4, "nilai" : 1, "nama" : "61% - 70% silabus mata pelajaran PKn dan IPS memuat kegiatan untuk memahami hak dan kewajiban orang lain." },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 61% silabus mata pelajaran PKn dan IPS memuat kegiatan untuk memahami hak dan kewajiban orang lain." }
    ],
    "jawaban": 4
  },
  {
    "id": 6195,
    "bagian_id": 344,
    "nomor": 41,
    "nama": "Siswa memperoleh pengalaman belajar untuk menjalankan ajaran agama yang dianut sesuai dengan tahap perkembangannya.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sekolah memfasilitasi 4 jenis atau lebih kegiatan pembiasaan untuk menjalankan ajaran agama yang dianut." },
      { "id": 2, "nilai" : 3, "nama" : "Sekolah memfasilitasi 3 jenis kegiatan pembiasaan untuk menjalankan ajaran agama yang dianut." },
      { "id": 3, "nilai" : 2, "nama" : "Sekolah memfasilitasi 2 jenis kegiatan pembiasaan untuk menjalankan ajaran agama yang dianut." },
      { "id": 4, "nilai" : 1, "nama" : "Sekolah memfasilitasi 1 jenis kegiatan pembiasaan untuk menjalankan ajaran agama yang dianut." },
      { "id": 5, "nilai" : 0, "nama" : "Sekolah tidak pernah melaksanakan kegiatan pembiasaan untuk menjalankan ajaran agama yang dianut." }
    ],
    "jawaban": 4
  },
  {
    "id": 6196,
    "bagian_id": 344,
    "nomor": 42,
    "nama": "Siswa memperoleh pengalaman belajar untuk menghargai keberagaman dan kebanggaan terhadap bangsa, negara, dan tanah air Indonesia.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sekolah melaksanakan 4 atau lebih kegiatan pembelajaran untuk menghargai keberagaman dan kebanggaan terhadap bangsa, negara, dan tanah air Indonesia." },
      { "id": 2, "nilai" : 3, "nama" : "Sekolah melaksanakan 3 kegiatan pembelajaran untuk menghargai keberagaman dan kebanggaan terhadap bangsa, negara, dan tanah air Indonesia." },
      { "id": 3, "nilai" : 2, "nama" : "Sekolah melaksanakan 2 kegiatan pembelajaran untuk menghargai keberagaman dan kebanggaan terhadap bangsa, negara, dan tanah air Indonesia." },
      { "id": 4, "nilai" : 1, "nama" : "Sekolah melaksanakan 1 kegiatan pembelajaran untuk menghargai keberagaman dan kebanggaan terhadap bangsa, negara, dan tanah air Indonesia." },
      { "id": 5, "nilai" : 0, "nama" : "Sekolah tidak pernah melaksanakan kegiatan pembelajaran untuk menghargai keberagaman dan kebanggaan terhadap bangsa, negara, dan tanah air Indonesia." }
    ],
    "jawaban": 4
  },
  {
    "id": 6197,
    "bagian_id": 344,
    "nomor": 43,
    "nama": "Siswa memperoleh pengalaman belajar dalam pembentukan akhlak mulia melalui pembiasaan dan pengamalan.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melaksanakan 4 atau lebih kegiatan pengembangan diri setiap minggu." },
      { "id": 2, "nilai" : 3, "nama" : "Melaksanakan 3 kegiatan pengembangan diri setiap minggu." },
      { "id": 3, "nilai" : 2, "nama" : "Melaksanakan 2 kegiatan pengembangan diri setiap minggu." },
      { "id": 4, "nilai" : 1, "nama" : "Melaksanakan 1 kegiatan pengembangan diri setiap minggu." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melaksanakan kegiatan pengembangan diri." }
    ],
    "jawaban": 4
  },
  {
    "id": 6198,
    "bagian_id": 344,
    "nomor": 44,
    "nama": "Siswa memperoleh pengalaman belajar melalui program pembiasaan untuk menghargai perbedaan pendapat.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "76% - 100% kegiatan pembelajaran menggunakan pendekatan diskusi dan/atau pembelajaran berkelompok." },
      { "id": 2, "nilai" : 3, "nama" : "51% - 75% kegiatan pembelajaran menggunakan pendekatan diskusi dan/atau pembelajaran berkelompok." },
      { "id": 3, "nilai" : 2, "nama" : "26% - 50% kegiatan pembelajaran menggunakan pendekatan diskusi dan/atau pembelajaran berkelompok." },
      { "id": 4, "nilai" : 1, "nama" : "1% - 25% kegiatan pembelajaran menggunakan pendekatan diskusi dan/atau pembelajaran berkelompok." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak ada kegiatan pembelajaran menggunakan pendekatan diskusi dan/atau pembelajaran berkelompok." }
    ],
    "jawaban": 4
  },
  {
    "id": 6199,
    "bagian_id": 344,
    "nomor": 45,
    "nama": "Siswa memperoleh pengalaman dalam menghasilkan karya kreatif baik individual maupun kelompok secara sederhana, dalam satu tahun terakhir.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sekolah memfasilitasi 4 atau lebih kegiatan siswa untuk menghasilkan karya kreatif." },
      { "id": 2, "nilai" : 3, "nama" : "Sekolah memfasilitasi 3 kegiatan siswa untuk menghasilkan karya kreatif." },
      { "id": 3, "nilai" : 2, "nama" : "Sekolah memfasilitasi 2 kegiatan siswa untuk menghasilkan karya kreatif." },
      { "id": 4, "nilai" : 1, "nama" : "Sekolah memfasilitasi 1 kegiatan siswa untuk menghasilkan karya kreatif." },
      { "id": 5, "nilai" : 0, "nama" : "Sekolah tidak memfasilitasi kegiatan siswa untuk menghasilkan karya kreatif." }
    ],
    "jawaban": 4
  },
  {
    "id": 6200,
    "bagian_id": 344,
    "nomor": 46,
    "nama": "Siswa memperoleh pengalaman belajar dalam berkomunikasi secara jelas dan sederhana, dalam satu tahun terakhir.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sekolah memfasilitasi 4 atau lebih kegiatan siswa untuk berkomunikasi secara jelas dan sederhana." },
      { "id": 2, "nilai" : 3, "nama" : "Sekolah memfasilitasi 3 kegiatan siswa untuk berkomunikasi secara jelas dan sederhana." },
      { "id": 3, "nilai" : 2, "nama" : "Sekolah memfasilitasi 2 kegiatan siswa untuk berkomunikasi secara jelas dan sederhana." },
      { "id": 4, "nilai" : 1, "nama" : "Sekolah memfasilitasi 1 kegiatan siswa untuk berkomunikasi secara jelas dan sederhana." },
      { "id": 5, "nilai" : 0, "nama" : "Sekolah tidak pernah memfasilitasi kegiatan siswa untuk berkomunikasi secara jelas dan sederhana." }
    ],
    "jawaban": 4
  },
  {
    "id": 6201,
    "bagian_id": 344,
    "nomor": 47,
    "nama": "Siswa memperoleh pengalaman belajar untuk menunjukkan kegemaran membaca dan menulis naskah pendek sederhana.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sekolah memfasilitasi 4 atau lebih kegiatan pembiasaan untuk menunjukkan kegemaran membaca dan menulis naskah pendek sederhana." },
      { "id": 2, "nilai" : 3, "nama" : "Sekolah memfasilitasi 3 kegiatan pembiasaan untuk menunjukkan kegemaran membaca dan menulis naskah pendek sederhana." },
      { "id": 3, "nilai" : 2, "nama" : "Sekolah memfasilitasi 2 kegiatan pembiasaan untuk menunjukkan kegemaran membaca dan menulis naskah pendek sederhana." },
      { "id": 4, "nilai" : 1, "nama" : "Sekolah memfasilitasi 1 kegiatan pembiasaan untuk menunjukkan kegemaran membaca dan menulis naskah pendek sederhana." },
      { "id": 5, "nilai" : 0, "nama" : "Sekolah tidak pernah memfasilitasi kegiatan pembiasaan untuk menunjukkan kegemaran membaca dan menulis naskah pendek sederhana." }
    ],
    "jawaban": 4
  },
  {
    "id": 6202,
    "bagian_id": 344,
    "nomor": 48,
    "nama": "Siswa memperoleh keterampilan menyimak, membaca, menulis, dan berbicara baik dalam Bahasa Indonesia maupun Bahasa Inggris.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Rata-rata nilai ketuntasan belajar mata pelajaran Bahasa Indonesia dan Bahasa Inggris ditetapkan 75,00 atau lebih." },
      { "id": 2, "nilai" : 3, "nama" : "Rata-rata nilai ketuntasan belajar mata pelajaran Bahasa Indonesia dan Bahasa Inggris ditetapkan 70,00 - 74,90." },
      { "id": 3, "nilai" : 2, "nama" : "Rata-rata nilai ketuntasan belajar mata pelajaran Bahasa Indonesia dan Bahasa Inggris ditetapkan 65,00 - 69,90." },
      { "id": 4, "nilai" : 1, "nama" : "Rata-rata nilai ketuntasan belajar mata pelajaran Bahasa Indonesia dan Bahasa Inggris ditetapkan 60,00 - 64,90." },
      { "id": 5, "nilai" : 0, "nama" : "Rata-rata nilai ketuntasan belajar mata pelajaran Bahasa Indonesia dan Bahasa Inggris ditetapkan kurang dari 60,00." }
    ],
    "jawaban": 4
  },
  {
    "id": 6203,
    "bagian_id": 344,
    "nomor": 49,
    "nama": "Siswa memperoleh pengalaman belajar dalam mengembangkan vokasional dan pengembangan diri seiring dengan perkembangannya.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sekolah memberikan 4 atau lebih layanan pengembangan vokasional dan pengembangan diri dalam satu tahun terakhir." },
      { "id": 2, "nilai" : 3, "nama" : "Sekolah memberikan 3 layanan pengembangan vokasional dan pengembangan diri dalam satu tahun terakhir." },
      { "id": 3, "nilai" : 2, "nama" : "Sekolah memberikan 2 layanan pengembangan vokasional dan pengembangan diri dalam satu tahun terakhir." },
      { "id": 4, "nilai" : 1, "nama" : "Sekolah memberikan 2 layanan pengembangan vokasional dan pengembangan diri dalam satu tahun terakhir." },
      { "id": 5, "nilai" : 0, "nama" : "Sekolah tidak memberikan layanan pengembangan vokasional dan pengembangan diri." }
    ],
    "jawaban": 4
  },
  {
    "id": 6204,
    "bagian_id": 344,
    "nomor": 50,
    "nama": "Siswa memperoleh pengetahuan dan keterampilan untuk bekal hidup mandiri di tengah-tengah masyarakat dalam satu tahun terakhir.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sekolah melakukan 4 atau lebih kegiatan praktek kerja lapangan (PKL) sederhana atau kegiatan keterampilan sederhana untuk menolong diri sendiri pada kelas terakhir." },
      { "id": 2, "nilai" : 3, "nama" : "Sekolah melakukan 3 kegiatan PKL sederhana atau kegiatan keterampilan sederhana untuk menolong diri sendiri pada kelas terakhir." },
      { "id": 3, "nilai" : 2, "nama" : "Sekolah melakukan 2 kegiatan PKL sederhana atau kegiatan keterampilan sederhana untuk menolong diri sendiri pada kelas terakhir." },
      { "id": 4, "nilai" : 1, "nama" : "Sekolah melakukan 1 kegiatan PKL sederhana atau kegiatan keterampilan sederhana untuk menolong diri sendiri pada kelas terakhir." },
      { "id": 5, "nilai" : 0, "nama" : "Sekolah tidak pernah melakukan kegiatan PKL sederhana." }
    ],
    "jawaban": 4
  },
  {
    "id": 6206,
    "bagian_id": 345,
    "nomor": 52,
    "nama": "Guru mata pelajaran mengajar sesuai dengan latar belakang pendidikannya.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "76% - 100% guru memiliki latar belakang pendidikan khusus yang sesuai dengan mata pelajaran yang diajarkan." },
      { "id": 2, "nilai" : 3, "nama" : "51% - 75% guru memiliki latar belakang pendidikan khusus yang sesuai dengan mata pelajaran yang diajarkan." },
      { "id": 3, "nilai" : 2, "nama" : "26% - 50% guru memiliki latar belakang pendidikan khusus yang sesuai dengan mata pelajaran yang diajarkan." },
      { "id": 4, "nilai" : 1, "nama" : "1% - 25% guru memiliki latar belakang pendidikan khusus yang sesuai dengan mata pelajaran yang diajarkan." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak ada guru memiliki latar belakang pendidikan khusus yang sesuai dengan mata pelajaran yang diajarkan." }
    ],
    "jawaban": 4
  },
  {
    "id": 6207,
    "bagian_id": 345,
    "nomor": 53,
    "nama": "Guru memiliki kesehatan jasmani dan rohani untuk menjalankan tugas utama guru, yang ditunjukkan melalui rata-rata kehadiran guru di sekolah dalam satu semester terakhir.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Kehadiran guru 96% - 100%." },
      { "id": 2, "nilai" : 3, "nama" : "Kehadiran guru 91% - 95%." },
      { "id": 3, "nilai" : 2, "nama" : "Kehadiran guru 86% - 90%." },
      { "id": 4, "nilai" : 1, "nama" : "Kehadiran guru 81% - 85%." },
      { "id": 5, "nilai" : 0, "nama" : "Kehadiran guru kurang dari 81%." }
    ],
    "jawaban": 4
  },
  {
    "id": 6208,
    "bagian_id": 345,
    "nomor": 54,
    "nama": "Guru memiliki kompetensi pedagogik sebagai agen pembelajaran yang ditunjukkan melalui merencanakan, melaksanakan, dan mengevaluasi pembelajaran sesuai prinsip-prinsip pembelajaran.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "76% - 100% guru merencanakan, melaksanakan, dan mengevaluasi pembelajaran sesuai prinsip pembelajaran." },
      { "id": 2, "nilai" : 3, "nama" : "51% - 75% guru merencanakan, melaksanakan, dan mengevaluasi pembelajaran sesuai prinsip pembelajaran." },
      { "id": 3, "nilai" : 2, "nama" : "26% - 50% guru merencanakan, melaksanakan, dan mengevaluasi pembelajaran sesuai prinsip pembelajaran." },
      { "id": 4, "nilai" : 1, "nama" : "1% - 25% guru merencanakan, melaksanakan, dan mengevaluasi pembelajaran sesuai prinsip pembelajaran." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak ada guru yang merencanakan, melaksanakan, dan mengevaluasi pembelajaran sesuai prinsip pembelajaran." }
    ],
    "jawaban": 4
  },
  {
    "id": 6300,
    "bagian_id": 348,
    "nomor": 146,
    "nama": "Sekolah memiliki pembukuan biaya operasional.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki pembukuan biaya operasional 4 tahun terakhir." },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki pembukuan biaya operasional 3 tahun terakhir." },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki pembukuan biaya operasional 2 tahun terakhir." },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki pembukuan biaya operasional 1 tahun terakhir." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki pembukuan biaya operasional." }
    ],
    "jawaban": 4
  },
  {
    "id": 6209,
    "bagian_id": 345,
    "nomor": 55,
    "nama": "Guru memiliki kompetensi kepribadian sebagai agen pembelajaran yang ditunjukkan dengan melalui tindakan guru sesuai dengan norma agama, hukum, sosial, serta peraturan dan ketentuan yang berlaku.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Semua guru bertindak sesuai dengan norma agama, hukum, sosial, serta peraturan dan ketentuan yang berlaku." },
      { "id": 2, "nilai" : 3, "nama" : "Ada guru yang melanggar norma agama, hukum, sosial, serta peraturan dan ketentuan yang berlaku; dan telah dikenai sanksi yang sepadan seperti dibebastugaskan dari mengajar atau dikeluarkan." },
      { "id": 3, "nilai" : 2, "nama" : "Ada guru yang melanggar norma agama, hukum, sosial, serta peraturan dan ketentuan yang berlaku namun diberi kesempatan memperbaiki diri dan dilakukan pembinaan." },
      { "id": 4, "nilai" : 1, "nama" : "Ada guru yang melanggar norma agama, hukum, sosial, serta peraturan dan ketentuan yang berlaku namun hanya diberikan peringatan tertulis." },
      { "id": 5, "nilai" : 0, "nama" : "Ada guru yang melanggar norma agama, hukum, sosial, serta peraturan dan ketentuan yang berlaku namun tidak diberikan sanksi apapun." }
    ],
    "jawaban": 4
  },
  {
    "id": 6210,
    "bagian_id": 345,
    "nomor": 56,
    "nama": "Guru berkomunikasi secara efektif dan santun dengan siswa, sesama guru, tenaga kependidikan, dan orangtua siswa.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Guru berkomunikasi efektif dan santun dengan siswa, sesama guru, kepala sekolah, dan orang tua." },
      { "id": 2, "nilai" : 3, "nama" : "Guru berkomunikasi efektif dan santun dengan siswa, sesama guru, dan kepala sekolah." },
      { "id": 3, "nilai" : 2, "nama" : "Guru berkomunikasi efektif dan santun dengan siswa, dan sesama guru." },
      { "id": 4, "nilai" : 1, "nama" : "Guru berkomunikasi efektif dan santun dengan siswa." },
      { "id": 5, "nilai" : 0, "nama" : "Guru tidak berkomunikasi efektif dan santun." }
    ],
    "jawaban": 4
  },
  {
    "id": 6211,
    "bagian_id": 345,
    "nomor": 57,
    "nama": "Guru memiliki kompetensi profesional sebagai agen pembelajaran, yang ditunjukkan dengan penguasaan materi pelajaran yang diampu serta mengembangkannya dengan metode ilmiah.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "96% - 100% guru memiliki kesesuaian latar belakang pendidikan dengan mata pelajaran yang diampu, mempunyai sertifikat pendidik, menghasilkan karya tulis, mengikuti berbagai pertemuan ilmiah." },
      { "id": 2, "nilai" : 3, "nama" : "91% - 95% guru memiliki kesesuaian latar belakang pendidikan dengan mata pelajaran yang diampu, mempunyai sertifikat pendidik, menghasilkan karya tulis, mengikuti berbagai pertemuan ilmiah." },
      { "id": 3, "nilai" : 2, "nama" : "86% - 90% guru memiliki kesesuaian latar belakang pendidikan dengan mata pelajaran yang diampu, mempunyai sertifikat pendidik, menghasilkan karya tulis, mengikuti berbagai pertemuan ilmiah." },
      { "id": 4, "nilai" : 1, "nama" : "81% - 85% guru memiliki kesesuaian latar belakang pendidikan dengan mata pelajaran yang diampu, mempunyai sertifikat pendidik, menghasilkan karya tulis, mengikuti berbagai pertemuan ilmiah." },
      { "id": 5, "nilai" : 0, "nama" : "Kurang 61% guru memiliki kesesuaian latar belakang pendidikan dengan mata pelajaran yang diampu, mempunyai sertifikat pendidik, menghasilkan karya tulis, mengikuti berbagai pertemuan ilmiah." }
    ],
    "jawaban": 4
  },
  {
    "id": 6212,
    "bagian_id": 345,
    "nomor": 58,
    "nama": "Kepala sekolah memenuhi persyaratan sesuai dengan ketentuan yang berlaku.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Berstatus sebagai guru SLB, memiliki sertifikat pendidik, dan memiliki dokumen keputusan sebagai kepala sekolah." },
      { "id": 2, "nilai" : 3, "nama" : "Berstatus sebagai guru SLB, memiliki dokumen keputusan sebagai kepala sekolah, tetapi tidak memiliki sertifikat pendidik." },
      { "id": 3, "nilai" : 2, "nama" : "Berstatus sebagai guru SLB, memiliki sertifikat pendidik, tetapi tidak memiliki dokumen keputusan sebagai kepala sekolah." },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki dokumen keputusan sebagai kepala sekolah, tetapi tidak berstatus sebagai guru SLB, dan tidak memiliki sertifikat pendidik." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak berstatus sebagai guru SLB, tidak memiliki sertifikat pendidik dan dokumen keputusan sebagai kepala sekolah." }
    ],
    "jawaban": 4
  },
  {
    "id": 6213,
    "bagian_id": 345,
    "nomor": 59,
    "nama": "Kepala sekolah memiliki kualifikasi akademik minimum sarjana (S1) atau diploma empat (D-IV) kependidikan.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki kualifikasi akademik S1 atau D-IV kependidikan dari perguruan tinggi yang terakreditasi." },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki kualifikasi akademik S1 atau D-IV kependidikan dari perguruan tinggi yang tidak terakreditasi." },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki kualifikasi akademik S1 atau D-IV nonkependidikan dari perguruan tinggi yang terakreditasi." },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki kualifikasi akademik S1 atau D-IV nonkependidikan dari perguruan tinggi yang tidak terakreditasi." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki kualifikasi akademik yang dipersyaratkan." }
    ],
    "jawaban": 4
  },
  {
    "id": 6214,
    "bagian_id": 345,
    "nomor": 60,
    "nama": "Kepala sekolah memiliki pengalaman mengajar sekurang-kurangnya 5 tahun.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Pengalaman mengajar 5 tahun atau lebih." },
      { "id": 2, "nilai" : 3, "nama" : "Pengalaman mengajar 4 tahun." },
      { "id": 3, "nilai" : 2, "nama" : "Pengalaman mengajar 3 tahun." },
      { "id": 4, "nilai" : 1, "nama" : "Pengalaman mengajar 2 tahun." },
      { "id": 5, "nilai" : 0, "nama" : "Pengalaman mengajar kurang dari 2 tahun." }
    ],
    "jawaban": 4
  },
  {
    "id": 6215,
    "bagian_id": 345,
    "nomor": 61,
    "nama": "Kepala sekolah memiliki kemampuan manajerial yang ditunjukkan dengan pengembangan berbagai aspek pengelolaan sekolah, yakni mengelola: (1) siswa, (2) guru dan tenaga kependidikan, (3) pengembangan kurikulum, (4) sarana dan prasarana, (5) pembiayaan, dan (6) hubungan dengan masyarakat.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Mengembangkan 6 aspek." },
      { "id": 2, "nilai" : 3, "nama" : "Mengembangkan 5 aspek." },
      { "id": 3, "nilai" : 2, "nama" : "Mengembangkan 4 aspek." },
      { "id": 4, "nilai" : 1, "nama" : "Mengembangkan 3 aspek." },
      { "id": 5, "nilai" : 0, "nama" : "Mengembangkan kurang dari 3 aspek." }
    ],
    "jawaban": 4
  },
  {
    "id": 6216,
    "bagian_id": 345,
    "nomor": 62,
    "nama": "Kepala sekolah memiliki kemampuan kewirausahaan yang ditunjukkan antara lain dengan adanya naluri kewirausahaan dalam mengelola kegiatan produksi/jasa/karya siswa sebagai sumber belajar siswa.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Mengelola 4 atau lebih kegiatan produksi/jasa/karya siswa." },
      { "id": 2, "nilai" : 3, "nama" : "Mengelola 3 jenis kegiatan produksi/jasa/karya siswa." },
      { "id": 3, "nilai" : 2, "nama" : "Mengelola 2 jenis kegiatan produksi/jasa/karya siswa." },
      { "id": 4, "nilai" : 1, "nama" : "Mengelola 1 jenis kegiatan produksi/jasa/karya siswa." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak mengelola kegiatan produksi/jasa/karya siswa." }
    ],
    "jawaban": 4
  },
  {
    "id": 6217,
    "bagian_id": 345,
    "nomor": 63,
    "nama": "Kepala sekolah melakukan supervisi dan monitoring guru setiap tahun.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "91% - 100% guru disupervisi dan dimonitor." },
      { "id": 2, "nilai" : 3, "nama" : "81% - 90% guru disupervisi dan dimonitor." },
      { "id": 3, "nilai" : 2, "nama" : "71% - 80% guru disupervisi dan dimonitor." },
      { "id": 4, "nilai" : 1, "nama" : "61% - 70% guru disupervisi dan dimonitor." },
      { "id": 5, "nilai" : 0, "nama" : "Kurang dari 61% guru disupervisi dan dimonitor." }
    ],
    "jawaban": 4
  },
  {
    "id": 6260,
    "bagian_id": 347,
    "nomor": 106,
    "nama": "Sekolah memiliki rencana kerja jangka menengah (RKJM) dan rencana kerja tahunan (RKT) serta disosialisasikan.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki RKJM dan RKT serta keduanya sudah disosialisasikan." },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki RKJM dan RKT serta salah satu sudah disosialisasikan." },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki RKJM atau RKT dan sudah disosialisasikan." },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki RKJM atau RKT tetapi belum disosialisasikan." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki RKJM dan RKT." }
    ],
    "jawaban": 4
  },
  {
    "id": 6218,
    "bagian_id": 345,
    "nomor": 64,
    "nama": "Kepala tenaga administrasi memiliki kualifikasi akademik minimum pendidikan diploma tiga (D-III).",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki kualifikasi akademik pendidikan minimal D-III dari lembaga pendidikan yang terakreditasi." },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki kualifikasi akademik pendidikan D-II dari lembaga pendidikan yang terakreditasi." },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki kualifikasi akademik pendidikan D-I dari lembaga pendidikan yang terakreditasi." },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki kualifikasi akademik pendidikan menengah." },
      { "id": 5, "nilai" : 0, "nama" : "Memiliki kualifikasi akademik di bawah pendidikan menengah atau tidak memiliki kepala tenaga administrasi." }
    ],
    "jawaban": 4
  },
  {
    "id": 6219,
    "bagian_id": 345,
    "nomor": 65,
    "nama": "Kepala tenaga administrasi memiliki pengalaman kerja minimal empat tahun sebagai tenaga administrasi sekolah.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Pengalaman kerja 4 tahun atau lebih." },
      { "id": 2, "nilai" : 3, "nama" : "Pengalaman kerja 3 - 4 tahun." },
      { "id": 3, "nilai" : 2, "nama" : "Pengalaman kerja 2 - 3 tahun." },
      { "id": 4, "nilai" : 1, "nama" : "Pengalaman kerja 1 - 2 tahun." },
      { "id": 5, "nilai" : 0, "nama" : "Pengalaman kerja kurang dari 1 tahun." }
    ],
    "jawaban": 4
  },
  {
    "id": 6220,
    "bagian_id": 345,
    "nomor": 66,
    "nama": "Tenaga perpustakaan memiliki kualifikasi akademik minimum pendidikan menengah atau yang sederajat.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki lebih dari 1 orang tenaga perpustakaan yang semuanya memiliki kualifikasi pendidikan menengah." },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki lebih dari 1 orang tenaga perpustakaan tetapi tidak semua memiliki kualifikasi pendidikan menengah." },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki 1 orang tenaga perpustakaan yang memiliki kualifikasi pendidikan menengah." },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki 1 orang tenaga perpustakaan tetapi tidak memiliki kualifikasi pendidikan menengah." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki tenaga perpustakaan." }
    ],
    "jawaban": 4
  },
  {
    "id": 6221,
    "bagian_id": 345,
    "nomor": 67,
    "nama": "Tenaga perpustakaan memiliki latar belakang pendidikan sesuai dengan tugasnya.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki latar belakang pendidikan menengah dan bersertifikat kompetensi pengelolaan perpustakaan." },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki latar belakang pendidikan menengah dan tidak memiliki sertifikat kompetensi pengelolaan perpustakaan." },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki latar belakang pendidikan di bawah pendidikan menengah dan bersertifikat kompetensi pengelolaan perpustakaan." },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki latar belakang pendidikan di bawah pendidikan menengah dan tidak memiliki sertifikat kompetensi pengelolaan perpustakaan." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki tenaga perpustakaan." }
    ],
    "jawaban": 4
  },
  {
    "id": 6222,
    "bagian_id": 345,
    "nomor": 68,
    "nama": "Tenaga khusus bidang keterampilan memiliki latar belakang kualifikasi akademik (memiliki ijazah atau sertifikat keterampilan tingkat terampil, tingkat mahir, dan/atau Tim Pelaksana Penguji Praktek), sesuai dengan bidang keterampilan yang diampunya.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "76% - 100% memiliki ijazah atau sertifikat yang sesuai." },
      { "id": 2, "nilai" : 3, "nama" : "51% - 75% memiliki ijazah atau sertifikat yang sesuai." },
      { "id": 3, "nilai" : 2, "nama" : "26% - 50% memiliki ijazah atau sertifikat yang sesuai." },
      { "id": 4, "nilai" : 1, "nama" : "1% - 25% memiliki ijazah atau sertifikat yang sesuai." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak ada yang memiliki ijazah atau sertifikat yang sesuai." }
    ],
    "jawaban": 4
  },
  {
    "id": 6223,
    "bagian_id": 345,
    "nomor": 69,
    "nama": "Tenaga khusus bidang keterampilan minimum memiliki latar belakang pendidikan sesuai dengan tugasnya.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "76% - 100% memiliki latar belakang pendidikan sesuai tugasnya." },
      { "id": 2, "nilai" : 3, "nama" : "51% - 75% memiliki latar belakang pendidikan sesuai tugasnya." },
      { "id": 3, "nilai" : 2, "nama" : "26% - 50% memiliki latar belakang pendidikan sesuai tugasnya." },
      { "id": 4, "nilai" : 1, "nama" : "1% - 25% memiliki latar belakang pendidikan sesuai tugasnya." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak ada yang memiliki latar belakang pendidikan sesuai tugasnya." }
    ],
    "jawaban": 4
  },
  {
    "id": 6224,
    "bagian_id": 345,
    "nomor": 70,
    "nama": "Sekolah memiliki petugas layanan khusus: (1) penjaga sekolah, (2) tukang kebun, (3) tenaga kebersihan, (4) pengemudi, dan (5) pesuruh.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki 4 jenis atau lebih petugas layanan khusus." },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki 3 jenis tenaga petugas khusus." },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki 2 jenis tenaga petugas khusus." },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki 1 jenis tenaga petugas khusus." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki tenaga petugas khusus." }
    ],
    "jawaban": 4
  },
  {
    "id": 6225,
    "bagian_id": 346,
    "nomor": 71,
    "nama": "Sekolah memiliki lahan sesuai ketentuan luas minimal.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sesuai ketentuan luas minimal." },
      { "id": 2, "nilai" : 3, "nama" : "90% - 99% dari ketentuan luas minimal." },
      { "id": 3, "nilai" : 2, "nama" : "80% - 89% dari ketentuan luas minimal." },
      { "id": 4, "nilai" : 1, "nama" : "70% - 79% dari ketentuan luas minimal." },
      { "id": 5, "nilai" : 0, "nama" : "Di bawah 70% dari ketentuan luas minimal." }
    ],
    "jawaban": 4
  },
  {
    "id": 6226,
    "bagian_id": 346,
    "nomor": 72,
    "nama": "Sekolah berada di lokasi aman, terhindar dari potensi bahaya yang mengancam kesehatan dan keselamatan jiwa, serta memiliki akses untuk penyelamatan dalam keadaan darurat.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Berada di lokasi aman, terhindar dari potensi bahaya yang mengancam kesehatan dan keselamatan jiwa, serta memiliki akses untuk penyelamatan dalam keadaan darurat." },
      { "id": 2, "nilai" : 3, "nama" : "Berada di lokasi aman, terhindar dari potensi bahaya yang mengancam kesehatan dan keselamatan jiwa." },
      { "id": 3, "nilai" : 2, "nama" : "Berada di lokasi aman, terhindar dari potensi bahaya yang mengancam keselamatan jiwa." },
      { "id": 4, "nilai" : 1, "nama" : "Berada di lokasi aman." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak berada di lokasi aman." }
    ],
    "jawaban": 4
  },
  {
    "id": 6227,
    "bagian_id": 346,
    "nomor": 73,
    "nama": "Sekolah berada di lokasi yang nyaman, terhindar dari gangguan pencemaran air, kebisingan, dan pencemaran udara serta memiliki sarana untuk meningkatkan kenyamanan.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Berada di lokasi yang nyaman, terhindar dari gangguan pencemaran air, kebisingan, dan pencemaran udara serta memiliki sarana untuk meningkatkan kenyamanan." },
      { "id": 2, "nilai" : 3, "nama" : "Berada di lokasi yang nyaman, terhindar dari gangguan pencemaran air, kebisingan, dan pencemaran udara." },
      { "id": 3, "nilai" : 2, "nama" : "Berada di lokasi yang nyaman, terhindar dari gangguan pencemaran air dan kebisingan." },
      { "id": 4, "nilai" : 1, "nama" : "Berada di lokasi yang nyaman, terhindar dari gangguan pencemaran air." },
      { "id": 5, "nilai" : 0, "nama" : "Berada di lokasi yang tidak nyaman." }
    ],
    "jawaban": 4
  },
  {
    "id": 6228,
    "bagian_id": 346,
    "nomor": 74,
    "nama": "Sekolah berada di lokasi yang sesuai dengan peruntukannya, memiliki status hak atas tanah dan ijin pemanfaatan dari pemegang hak atas tanah.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Berada di lokasi yang sesuai dengan peruntukannya, memiliki status hak atas tanah dan ijin pemanfaatan dari pemegang hak atas tanah." },
      { "id": 2, "nilai" : 3, "nama" : "Berada di lokasi yang sesuai dengan peruntukannya dan memiliki status hak atas tanah." },
      { "id": 3, "nilai" : 2, "nama" : "Berada di lokasi yang sesuai dengan peruntukannya dan memiliki ijin pemanfaatan dari pemegang hak atas tanah." },
      { "id": 4, "nilai" : 1, "nama" : "Berada di lokasi yang sesuai dengan peruntukannya." },
      { "id": 5, "nilai" : 0, "nama" : "Berada di lokasi yang tidak sesuai dengan peruntukannya." }
    ],
    "jawaban": 4
  },
  {
    "id": 6229,
    "bagian_id": 346,
    "nomor": 75,
    "nama": "Sekolah memiliki lantai bangunan sesuai dengan ketentuan luas minimal.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Sesuai dengan ketentuan luas minimal." },
      { "id": 2, "nilai" : 3, "nama" : "90% - 99% dari ketentuan luas minimal." },
      { "id": 3, "nilai" : 2, "nama" : "80% - 89% dari ketentuan luas minimal." },
      { "id": 4, "nilai" : 1, "nama" : "70% - 79% dari ketentuan luas minimal." },
      { "id": 5, "nilai" : 0, "nama" : "Di bawah 70% dari ketentuan luas minimal." }
    ],
    "jawaban": 4
  },
  {
    "id": 6230,
    "bagian_id": 346,
    "nomor": 76,
    "nama": "Bangunan sekolah memiliki struktur yang stabil dan kukuh serta dilengkapi dengan sistem pencegahan bahaya kebakaran dan petir.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki struktur yang stabil dan kukuh serta dilengkapi dengan sistem pencegahan bahaya kebakaran dan petir." },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki struktur yang stabil dan kukuh tetapi tidak dilengkapi dengan sistem pencegahan bahaya kebakaran." },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki struktur yang stabil tetapi kurang kukuh dan tidak dilengkapi dengan sistem pencegahan bahaya kebakaran." },
      { "id": 4, "nilai" : 1, "nama" : "Dilengkapi dengan sistem pencegahan bahaya kebakaran, tetapi struktur bangunan tidak stabil dan kurang kukuh." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki struktur yang stabil dan kukuh serta tidak dilengkapi dengan sistem pencegahan bahaya kebakaran." }
    ],
    "jawaban": 4
  },
  {
    "id": 6231,
    "bagian_id": 346,
    "nomor": 77,
    "nama": "Bangunan sekolah memiliki ventilasi udara dan pencahayaan yang memadai.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki ventilasi udara dan pencahayaan memadai." },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki pencahayaan memadai, tetapi dengan ventilasi udara yang kurang memadai." },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki ventilasi udara dan pencahayaan kurang memadai." },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki pencahayaan yang kurang memadai, dan tidak memiliki ventilasi udara." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki ventilasi udara dan pencahayaan." }
    ],
    "jawaban": 4
  },
  {
    "id": 6232,
    "bagian_id": 346,
    "nomor": 78,
    "nama": "Bangunan sekolah memiliki sanitasi sebagai persyaratan kesehatan dan kebersihan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki 4 jenis atau lebih sanitasi." },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki 3 jenis sanitasi." },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki 2 jenis sanitasi." },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki 1 jenis sanitasi." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki sanitasi." }
    ],
    "jawaban": 4
  },
  {
    "id": 6233,
    "bagian_id": 346,
    "nomor": 79,
    "nama": "Bangunan sekolah memiliki aksesibilitas yang mudah, aman, dan nyaman serta dilengkapi pengarah jalan (akses jalan) bagi siswa berkebutuhan khusus.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki aksesibilitas yang mudah, aman, dan nyaman serta dilengkapi pengarah jalan (akses jalan)." },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki aksesibilitas yang mudah, aman, dan nyaman tetapi tidak dilengkapi pengarah jalan (akses jalan)." },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki aksesibilitas yang mudah, nyaman dan dilengkapi pengarah jalan (akses jalan) tetapi tidak aman." },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki aksesibilitas yang mudah dan dilengkapi pengarah jalan (akses jalan) tetapi tidak aman dan nyaman." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki akses." }
    ],
    "jawaban": 4
  },
  {
    "id": 6234,
    "bagian_id": 346,
    "nomor": 80,
    "nama": "Bangunan sekolah terhindar dari gangguan kebisingan dan getaran, serta memiliki penghawaan dan pencahayaan yang baik.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Bangunan terhindar dari gangguan kebisingan dan getaran, serta memiliki penghawaan dan pencahayaan yang baik." },
      { "id": 2, "nilai" : 3, "nama" : "Bangunan terhindar dari gangguan kebisingan dan getaran, memiliki penghawaan yang baik tetapi tidak memiliki pencahayaan yang baik." },
      { "id": 3, "nilai" : 2, "nama" : "Bangunan terhindar dari gangguan kebisingan dan getaran, tetapi tidak memiliki penghawaan dan pencahayaan yang baik." },
      { "id": 4, "nilai" : 1, "nama" : "Bangunan terhindar dari gangguan kebisingan tetapi ada gangguan getaran, serta tidak memiliki penghawaan dan pencahayaan yang baik." },
      { "id": 5, "nilai" : 0, "nama" : "Bangunan tidak dapat terhindar dari gangguan kebisingan dan getaran, serta tidak memiliki penghawaan dan pencahayaan yang baik." }
    ],
    "jawaban": 4
  },
  {
    "id": 6235,
    "bagian_id": 346,
    "nomor": 81,
    "nama": "Bangunan sekolah memiliki tanda peringatan bahaya, pintu keluar darurat, dan jalur evakuasi yang dilengkapi penunjuk arah jika terjadi bencana kebakaran dan/atau bencana lainnya.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki tanda peringatan bahaya, pintu keluar darurat, dan jalur evakuasi yang dilengkapi penunjuk arah yang jelas." },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki tanda peringatan bahaya, pintu keluar darurat, dan jalur evakuasi tetapi tidak dilengkapi penunjuk arah yang jelas." },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki tanda peringatan bahaya dan pintu keluar darurat tetapi tidak memiliki jalur evakuasi." },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki tanda peringatan bahaya tetapi tidak memiliki pintu keluar darurat dan jalur evakuasi." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki tanda peringatan bahaya, pintu keluar darurat, dan jalur evakuasi." }
    ],
    "jawaban": 4
  },
  {
    "id": 6236,
    "bagian_id": 346,
    "nomor": 82,
    "nama": "Bangunan sekolah memiliki instalasi listrik dengan daya minimum 1300 watt.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki instalasi listrik dengan daya 1300 watt atau lebih." },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki instalasi listrik dengan daya 900 watt." },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki instalasi listrik dengan daya 450 watt." },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki instalasi listrik dengan memanfaatkan sumber daya lain yang digunakan secara bersama." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki instalasi listrik." }
    ],
    "jawaban": 4
  },
  {
    "id": 6237,
    "bagian_id": 346,
    "nomor": 83,
    "nama": "Sekolah melakukan pemeliharaan terhadap bangunan secara berkala.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melakukan pemeliharaan ringan dan berat terhadap bangunan secara berkala sesuai ketentuan." },
      { "id": 2, "nilai" : 3, "nama" : "Melakukan pemeliharaan ringan dan berat terhadap bangunan, tetapi tidak sesuai ketentuan." },
      { "id": 3, "nilai" : 2, "nama" : "Melakukan pemeliharaan ringan tetapi tidak sesuai ketentuan, dan tidak pernah melakukan pemeliharaan berat." },
      { "id": 4, "nilai" : 1, "nama" : "Melakukan pemeliharaan terhadap bangunan, jika sudah ada bagian bangunan yang rusak berat." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak pernah melakukan pemeliharaan terhadap bangunan." }
    ],
    "jawaban": 4
  },
  {
    "id": 6238,
    "bagian_id": 346,
    "nomor": 84,
    "nama": "Sekolah memiliki izin mendirikan bangunan (IMB) dan izin penggunaan bangunan sesuai dengan peruntukannya.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki IMB dan izin penggunaan bangunan sesuai dengan peruntukannya sebelum bangunan berdiri." },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki IMB dan izin penggunaan bangunan sesuai dengan peruntukannya setelah bangunan berdiri" },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki IMB dan memiliki izin penggunaan bangunan sementara" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki IMB tetapi tidak memiliki izin penggunaan bangunan." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki IMB dan izin penggunaan bangunan." }
    ],
    "jawaban": 4
  },
  {
    "id": 6239,
    "bagian_id": 346,
    "nomor": 85,
    "nama": "Sekolah memiliki prasarana yang lengkap sesuai ketentuan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki 13 atau lebih jenis prasarana yang dipersyaratkan." },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki 10 - 12 jenis prasarana yang dipersyaratkan." },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki 7 - 9 jenis prasarana yang dipersyaratkan." },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki 4 - 6 jenis prasarana yang dipersyaratkan." },
      { "id": 5, "nilai" : 0, "nama" : "Memiliki 1 - 3 jenis prasarana yang dipersyaratkan." }
    ],
    "jawaban": 4
  },
  {
    "id": 6240,
    "bagian_id": 346,
    "nomor": 86,
    "nama": "Sekolah memiliki ruang kelas dengan jumlah, ukuran, dan sarana sesuai ketentuan.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki ruang kelas dengan jumlah, ukuran, dan sarana sesuai ketentuan." },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki ruang kelas dengan sarana sesuai ketentuan, tetapi dengan jumlah dan ukuran tidak sesuai ketentuan." },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki ruang kelas dengan jumlah dan ukuran sesuai ketentuan tetapi dengan sarana tidak sesuai ketentuan." },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki ruang kelas dengan ukuran, jumlah, dan sarana tidak sesuai ketentuan." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki ruang kelas atau gedung sendiri." }
    ],
    "jawaban": 4
  },
  {
    "id": 6241,
    "bagian_id": 346,
    "nomor": 87,
    "nama": "Sekolah memiliki ruang perpustakaan dengan luas dan sarana sesuai ketentuan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki ruang perpustakaan dengan luas dan sarana sesuai dengan ketentuan." },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki ruang perpustakaan dengan luas tidak sesuai ketentuan tetapi dengan sarana sesuai ketentuan." },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki ruang perpustakaan dengan luas sesuai ketentuan tetapi dengan sarana tidak sesuai ketentuan." },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki ruang perpustakaan dengan luas dan sarana tidak sesuai ketentuan." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki ruang perpustakaan." }
    ],
    "jawaban": 4
  },
  {
    "id": 6242,
    "bagian_id": 346,
    "nomor": 88,
    "nama": "Perpustakaan sekolah memiliki berbagai koleksi buku dengan jenis dan rasio sesuai ketentuan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki berbagai buku dengan jenis dan rasio sesuai ketentuan" },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki koleksi dengan jenis buku sesuai ketentuan tetapi dengan rasio buku tidak sesuai ketentuan." },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki koleksi dengan jenis buku tidak sesuai ketentuan tetapi dengan rasio buku sesuai ketentuan." },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki koleksi berbagai buku dengan jenis dan rasio tidak sesuai ketentuan." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki koleksi berbagai buku." }
    ],
    "jawaban": 4
  },
  {
    "id": 6243,
    "bagian_id": 346,
    "nomor": 89,
    "nama": "<strong>Khusus untuk jenis ketunaan A, B, D, dan E:</strong> <br > Sekolah memiliki buku teks pelajaran dengan jumlah yang memadai. <br> <br> <strong>Khusus untuk jenis ketunaan C, C1, D1, dan G: </strong> <br> Sekolah memiliki buku pendukung pembelajaran.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "<strong>Khusus untuk jenis ketunaan A, B, D, dan E:</strong> <br > Rasio: 1 buku teks/mata pelajaran/siswa. <br> <br> <strong>Khusus untuk jenis ketunaan C, C1, D1, dan G: </strong> <br> Buku pendukung disusun oleh guru yang bersangkutan." },
      { "id": 2, "nilai" : 3, "nama" : "<strong>Khusus untuk jenis ketunaan A, B, D, dan E:</strong> <br > Rasio: 1 buku teks/mata pelajaran untuk 2 - 3 siswa. <br> <br> <strong>Khusus untuk jenis ketunaan C, C1, D1, dan G: </strong> <br>  Buku pendukung disusun oleh tim guru sekolah." },
      { "id": 3, "nilai" : 2, "nama" : "<strong>Khusus untuk jenis ketunaan A, B, D, dan E:</strong> <br >  Rasio: 1 buku teks/mata pelajaran untuk 4 - 5 siswa. <br> <br> <strong>Khusus untuk jenis ketunaan C, C1, D1, dan G: </strong> <br> Buku pendukung dimodifikasi dari sekolah lain." },
      { "id": 4, "nilai" : 1, "nama" : "<strong>Khusus untuk jenis ketunaan A, B, D, dan E:</strong> <br > Rasio: 1 buku teks/mata pelajaran untuk 6 siswa atau lebih. <br> <br> <strong>Khusus untuk jenis ketunaan C, C1, D1, dan G: </strong> <br>  Buku pendukung diperoleh dari sekolah lain." },
      { "id": 5, "nilai" : 0, "nama" : "<strong>Khusus untuk jenis ketunaan A, B, D, dan E:</strong> <br >  Tidak memiliki buku teks. <br> <br> <strong>Khusus untuk jenis ketunaan C, C1, D1, dan G: </strong> <br> Tidak memiliki buku pendukung pembelajaran." }
    ],
    "jawaban": 4
  },
  {
    "id": 6244,
    "bagian_id": 346,
    "nomor": 90,
    "nama": "Sekolah memanfaatkan buku teks pelajaran atau buku pendukung pembelajaran.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Lebih dari 9 mata pelajaran menggunakan buku teks atau buku pendukung." },
      { "id": 2, "nilai" : 3, "nama" : "7 - 9 mata pelajaran menggunakan buku teks atau buku pendukung." },
      { "id": 3, "nilai" : 2, "nama" : "4 - 6 mata pelajaran menggunakan buku teks atau buku pendukung." },
      { "id": 4, "nilai" : 1, "nama" : "1 - 3 mata pelajaran menggunakan buku teks atau buku pendukung." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak ada mata pelajaran yang menggunakan buku teks atau buku pendukung." }
    ],
    "jawaban": 4
  },
  {
    "id": 6245,
    "bagian_id": 346,
    "nomor": 91,
    "nama": "Sekolah memiliki ruang keterampilan dengan jumlah dan luas sesuai ketentuan.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki ruang keterampilan dengan jumlah dan luas sesuai ketentuan." },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki ruang keterampilan dengan jumlah sesuai ketentuan, tetapi dengan luas tidak sesuai ketentuan." },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki ruang keterampilan dengan jumlah tidak sesuai ketentuan, tetapi dengan luas sesuai ketentuan." },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki ruang keterampilan dengan jumlah dan luas tidak sesuai ketentuan." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki ruang keterampilan." }
    ],
    "jawaban": 4
  },
  {
    "id": 6246,
    "bagian_id": 346,
    "nomor": 92,
    "nama": "Sekolah memiliki ruang pimpinan dengan luas dan sarana sesuai ketentuan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki ruang pimpinan dengan luas dan sarana sesuai ketentuan." },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki ruang pimpinan dengan luas tidak sesuai ketentuan tetapi dengan sarana sesuai ketentuan." },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki ruang pimpinan dengan luas sesuai ketentuan tetapi dengan sarana tidak sesuai ketentuan." },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki ruang pimpinan dengan luas dan sarana tidak sesuai ketentuan." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki ruang pimpinan." }
    ],
    "jawaban": 4
  },
  {
    "id": 6247,
    "bagian_id": 346,
    "nomor": 93,
    "nama": "Sekolah memiliki ruang guru dengan luas dan sarana sesuai ketentuan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki ruang guru dengan luas dan sarana sesuai ketentuan." },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki ruang guru dengan luas tidak sesuai ketentuan tetapi dengan sarana sesuai ketentuan." },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki ruang guru dengan luas sesuai ketentuan tetapi dengan sarana tidak sesuai ketentuan." },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki ruang guru dengan luas dan sarana tidak sesuai ketentuan." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki ruang guru." }
    ],
    "jawaban": 4
  },
  {
    "id": 6248,
    "bagian_id": 346,
    "nomor": 94,
    "nama": "Sekolah memiliki ruang tata usaha dengan luas dan sarana sesuai ketentuan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki ruang tata usaha dengan luas dan sarana sesuai ketentuan." },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki ruang tata usaha dengan luas tidak sesuai ketentuan tetapi dengan sarana sesuai ketentuan." },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki ruang tata usaha dengan luas sesuai ketentuan tetapi dengan sarana tidak sesuai ketentuan." },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki ruang tata usaha dengan luas dan sarana tidak sesuai ketentuan." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki ruang tata usaha." }
    ],
    "jawaban": 4
  },
  {
    "id": 6249,
    "bagian_id": 346,
    "nomor": 95,
    "nama": "Sekolah memiliki tempat beribadah bagi warga sekolah dengan luas dan sarana sesuai ketentuan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki tempat beribadah dengan luas dan sarana sesuai ketentuan." },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki tempat beribadah dengan luas sesuai ketentuan tetapi dengan sarana tidak sesuai ketentuan." },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki tempat beribadah dengan luas tidak sesuai ketentuan tetapi dengan sarana sesuai ketentuan." },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki tempat beribadah dengan luas dan sarana tidak sesuai ketentuan." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki tempat beribadah." }
    ],
    "jawaban": 4
  },
  {
    "id": 6302,
    "bagian_id": 349,
    "nomor": 148,
    "nama": "Guru menginformasikan rancangan dan kriteria penilaian yang ada dalam silabus mata pelajaran kepada siswa pada semester yang berjalan.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "76% - 100% guru menginformasikan rancangan dan kriteria penilaian." },
      { "id": 2, "nilai" : 3, "nama" : "51% - 75% guru menginformasikan rancangan dan kriteria penilaian." },
      { "id": 3, "nilai" : 2, "nama" : "26% - 50% guru menginformasikan rancangan dan kriteria penilaian." },
      { "id": 4, "nilai" : 1, "nama" : "1% - 25% guru menginformasikan rancangan dan kriteria penilaian." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak ada guru yang menginformasikan rancangan dan kriteria penilaian." }
    ],
    "jawaban": 4
  },
  {
    "id": 6250,
    "bagian_id": 346,
    "nomor": 96,
    "nama": "Sekolah memiliki ruang UKS dengan dengan luas dan sarana sesuai ketentuan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki ruang UKS dengan luas dan sarana sesuai ketentuan." },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki ruang UKS dengan luas tidak sesuai ketentuan tetapi dengan sarana sesuai ketentuan." },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki ruang UKS dengan luas sesuai ketentuan tetapi dengan sarana tidak sesuai ketentuan." },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki ruang UKS dengan luas dan sarana tidak sesuai ketentuan." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki ruang UKS." }
    ],
    "jawaban": 4
  },
  {
    "id": 6251,
    "bagian_id": 346,
    "nomor": 97,
    "nama": "Sekolah memiliki ruang konseling/asesmen dengan luas dan sarana sesuai ketentuan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki ruang konseling/asesmen dengan luas dan sarana sesuai ketentuan." },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki ruang konseling/asesmen dengan luas tidak sesuai ketentuan tetapi dengan sarana sesuai ketentuan." },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki ruang konseling/asesmen dengan luas sesuai ketentuan tetapi dengan sarana tidak sesuai ketentuan." },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki ruang konseling/asesmen dengan luas dan sarana tidak sesuai ketentuan." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki ruang konseling/asesmen." }
    ],
    "jawaban": 4
  },
  {
    "id": 6252,
    "bagian_id": 346,
    "nomor": 98,
    "nama": "Sekolah memiliki ruang organisasi kesiswaan dengan luas dan sarana sesuai ketentuan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki ruang organisasi kesiswaan dengan luas dan sarana sesuai ketentuan." },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki ruang organisasi kesiswaan dengan luas tidak sesuai ketentuan tetapi dengan sarana sesuai ketentuan." },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki ruang organisasi kesiswaan dengan luas sesuai ketentuan tetapi dengan sarana tidak sesuai ketentuan." },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki ruang organisasi kesiswaan dengan luas dan sarana tidak sesuai ketentuan." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki ruang organisasi kesiswaan." }
    ],
    "jawaban": 4
  },
  {
    "id": 6253,
    "bagian_id": 346,
    "nomor": 99,
    "nama": "Sekolah memiliki jamban dengan jumlah, ukuran, dan sarana sesuai ketentuan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki jamban dengan jumlah, ukuran, dan sarana sesuai ketentuan." },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki jamban dengan jumlah dan ukuran tidak sesuai ketentuan tetapi dengan sarana sesuai dengan ketentuan." },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki jamban dengan jumlah dan ukuran sesuai ketentuan tetapi dengan sarana tidak sesuai ketentuan." },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki jamban dengan jumlah, ukuran, dan sarana tidak sesuai ketentuan." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki jamban." }
    ],
    "jawaban": 4
  },
  {
    "id": 6254,
    "bagian_id": 346,
    "nomor": 100,
    "nama": "Sekolah memiliki gudang dengan luas dan sarana sesuai ketentuan.",
    "bobot": 1,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki gudang dengan luas dan sarana sesuai ketentuan." },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki gudang dengan luas sesuai ketentuan tetapi dengan sarana tidak sesuai ketentuan." },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki gudang dengan luas tidak sesuai ketentuan tetapi dengan sarana sesuai ketentuan." },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki gudang dengan luas dan sarana tidak sesuai ketentuan." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki gudang." }
    ],
    "jawaban": 4
  },
  {
    "id": 6255,
    "bagian_id": 346,
    "nomor": 101,
    "nama": "Sekolah memiliki ruang sirkulasi dengan luas dan kualitas sesuai ketentuan.",
    "bobot": 2,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki ruang sirkulasi dengan luas dan kualitas sesuai ketentuan." },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki ruang sirkulasi dengan luas tidak sesuai ketentuan tetapi dengan kualitas sesuai ketentuan." },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki ruang sirkulasi dengan luas sesuai ketentuan tetapi dengan kualitas tidak ketentuan." },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki ruang sirkulasi dengan luas dan kualitas tidak sesuai ketentuan." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki ruang sirkulasi." }
    ],
    "jawaban": 4
  },
  {
    "id": 6256,
    "bagian_id": 346,
    "nomor": 102,
    "nama": "Sekolah memiliki tempat bermain/berolahraga dengan ukuran dan sarana sesuai ketentuan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki tempat bermain/berolahraga dengan ukuran dan sarana sesuai ketentuan." },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki tempat bermain/berolahraga dengan ukuran tidak sesuai ketentuan tetapi dengan sarana sesuai ketentuan." },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki tempat bermain/berolahraga dengan ukuran sesuai ketentuan tetapi dengan sarana tidak sesuai ketentuan." },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki tempat bermain/berolahraga dengan ukuran dan sarana tidak sesuai ketentuan." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki tempat bermain/berolahraga." }
    ],
    "jawaban": 4
  },
  {
    "id": 6257,
    "bagian_id": 347,
    "nomor": 103,
    "nama": "Sekolah telah merumuskan, menetapkan, dan mensosialisasikan visi lembaga.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Merumuskan dan menetapkan visi, mudah dipahami, sering disosialisasikan, dan dipasang pada tempat yang mudah dibaca." },
      { "id": 2, "nilai" : 3, "nama" : "Merumuskan dan menetapkan visi, mudah dipahami dan sering disosialisasikan." },
      { "id": 3, "nilai" : 2, "nama" : "Merumuskan dan menetapkan visi, mudah dipahami tetapi tidak disosialisasikan." },
      { "id": 4, "nilai" : 1, "nama" : "Merumuskan dan menetapkan visi, sulit dipahami dan tidak disosialisasikan." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak merumuskan dan menetapkan visi." }
    ],
    "jawaban": 4
  },
  {
    "id": 6258,
    "bagian_id": 347,
    "nomor": 104,
    "nama": "Sekolah telah merumuskan, menetapkan, dan mensosialisasikan misi lembaga.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Merumuskan dan menetapkan misi, mudah dipahami, sering disosialisasikan, dan dan dipasang pada tempat yang mudah dibaca." },
      { "id": 2, "nilai" : 3, "nama" : "Merumuskan dan menetapkan misi, mudah dipahami dan sering disosialisasikan." },
      { "id": 3, "nilai" : 2, "nama" : "Merumuskan dan menetapkan misi, mudah dipahami tetapi tidak disosialisasikan." },
      { "id": 4, "nilai" : 1, "nama" : "Merumuskan dan menetapkan misi, sulit dipahami dan tidak disosialisasikan." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak merumuskan dan menetapkan misi." }
    ],
    "jawaban": 4
  },
  {
    "id": 6259,
    "bagian_id": 347,
    "nomor": 105,
    "nama": "Sekolah telah merumuskan, menetapkan, dan mensosialisasikan tujuan lembaga.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Merumuskan dan menetapkan tujuan, mudah dipahami, sering disosialisasikan, dan dan dipasang pada tempat yang mudah dibaca." },
      { "id": 2, "nilai" : 3, "nama" : "Merumuskan dan menetapkan tujuan, mudah dipahami dan sering disosialisasikan." },
      { "id": 3, "nilai" : 2, "nama" : "Merumuskan dan menetapkan tujuan, mudah dipahami tetapi tidak disosialisasikan." },
      { "id": 4, "nilai" : 1, "nama" : "Merumuskan dan menetapkan tujuan, sulit dipahami dan tidak disosialisasikan." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak merumuskan dan menetapkan tujuan." }
    ],
    "jawaban": 4
  },
  {
    "id": 6261,
    "bagian_id": 347,
    "nomor": 107,
    "nama": "Sekolah memiliki pedoman yang mengatur berbagai aspek pengelolaan secara tertulis yang mudah dipahami oleh pihak-pihak terkait.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki 7 - 8 dokumen tentang aspek pengelolaan." },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki 5 - 6 dokumen tentang aspek pengelolaan." },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki 3 - 4 dokumen tentang aspek pengelolaan." },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki 1 - 2 dokumen tentang aspek pengelolaan." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki dokumen tentang aspek pengelolaan." }
    ],
    "jawaban": 4
  },
  {
    "id": 6262,
    "bagian_id": 347,
    "nomor": 108,
    "nama": "Sekolah memiliki struktur organisasi dengan uraian tugas yang jelas.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki struktur organisasi dengan uraian tugas yang jelas, dan dipajang di dinding." },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki struktur organisasi dengan uraian tugas yang jelas." },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki struktur organisasi dengan uraian tugas tetapi tidak jelas." },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki struktur organisasi tetapi tanpa uraian tugas." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki struktur organisasi." }
    ],
    "jawaban": 4
  },
  {
    "id": 6263,
    "bagian_id": 347,
    "nomor": 109,
    "nama": "Sekolah melaksanakan kegiatan sesuai rencana kerja tahunan (RKT).",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "76% - 100% kegiatan dilaksanakan sesuai RKT." },
      { "id": 2, "nilai" : 3, "nama" : "51% - 75% kegiatan dilaksanakan sesuai RKT." },
      { "id": 3, "nilai" : 2, "nama" : "26% - 50% kegiatan dilaksanakan sesuai RKT." },
      { "id": 4, "nilai" : 1, "nama" : "1% - 25% kegiatan dilaksanakan sesuai RKT." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melaksanakan kegiatan sesuai RKT." }
    ],
    "jawaban": 4
  },
  {
    "id": 6264,
    "bagian_id": 347,
    "nomor": 110,
    "nama": "Sekolah melaksanakan kegiatan kesiswaan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melaksanakan 5 atau lebih kegiatan kesiswaan." },
      { "id": 2, "nilai" : 3, "nama" : "Melaksanakan 4 kegiatan kesiswaan." },
      { "id": 3, "nilai" : 2, "nama" : "Melaksanakan 3 kegiatan kesiswaan." },
      { "id": 4, "nilai" : 1, "nama" : "Melaksanakan 2 kegiatan kesiswaan." },
      { "id": 5, "nilai" : 0, "nama" : "Melaksanakan 1 kegiatan kesiswaan." }
    ],
    "jawaban": 4
  },
  {
    "id": 6301,
    "bagian_id": 348,
    "nomor": 147,
    "nama": "Sekolah membuat laporan pertanggungjawaban pengelolaan keuangan dan menyampaikannya kepada pemerintah atau yayasan.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Membuat dan menyampaikan laporan selama 4 tahun terakhir." },
      { "id": 2, "nilai" : 3, "nama" : "Membuat dan menyampaikan laporan selama 3 tahun terakhir." },
      { "id": 3, "nilai" : 2, "nama" : "Membuat dan menyampaikan laporan selama 2 tahun terakhir." },
      { "id": 4, "nilai" : 1, "nama" : "Membuat dan menyampaikan laporan selama 1 tahun terakhir." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak membuat laporan pertanggungjawaban keuangan." }
    ],
    "jawaban": 4
  },
  {
    "id": 6265,
    "bagian_id": 347,
    "nomor": 111,
    "nama": "Sekolah melaksanakan kegiatan pengembangan kurikulum dan pembelajaran.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melaksanakan 4 atau lebih kegiatan pengembangan kurikulum dan pembelajaran." },
      { "id": 2, "nilai" : 3, "nama" : "Melaksanakan 3 kegiatan pengembangan kurikulum dan pembelajaran." },
      { "id": 3, "nilai" : 2, "nama" : "Melaksanakan 2 kegiatan pengembangan kurikulum dan pembelajaran." },
      { "id": 4, "nilai" : 1, "nama" : "Melaksanakan 1 kegiatan pengembangan kurikulum dan pembelajaran." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melaksanakan kegiatan pengembangan kurikulum dan pembelajaran." }
    ],
    "jawaban": 4
  },
  {
    "id": 6266,
    "bagian_id": 347,
    "nomor": 112,
    "nama": "Sekolah melaksanakan program pendayagunaan pendidik dan tenaga kependidikan.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melaksanakan 4 atau lebih program pendayagunaan." },
      { "id": 2, "nilai" : 3, "nama" : "Melaksanakan 3 program pendayagunaan." },
      { "id": 3, "nilai" : 2, "nama" : "Melaksanakan 2 program pendayagunaan." },
      { "id": 4, "nilai" : 1, "nama" : "Melaksanakan 1 program pendayagunaan." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melaksanakan program pendayagunaan." }
    ],
    "jawaban": 4
  },
  {
    "id": 6267,
    "bagian_id": 347,
    "nomor": 113,
    "nama": "Sekolah mengelola program sarana dan prasarana pembelajaran",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Mengelola 4 atau lebih program sarana dan prasarana." },
      { "id": 2, "nilai" : 3, "nama" : "Mengelola 3 program sarana dan prasarana." },
      { "id": 3, "nilai" : 2, "nama" : "Mengelola 2 program sarana dan prasarana." },
      { "id": 4, "nilai" : 1, "nama" : "Mengelola 1 program sarana dan prasarana." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak mengelola program sarana dan prasarana." }
    ],
    "jawaban": 4
  },
  {
    "id": 6268,
    "bagian_id": 347,
    "nomor": 114,
    "nama": "Sekolah mengelola program pembiayaan pendidikan.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Mengelola 4 program pembiayaan pendidikan." },
      { "id": 2, "nilai" : 3, "nama" : "Mengelola 3 program pembiayaan pendidikan." },
      { "id": 3, "nilai" : 2, "nama" : "Mengelola 2 program pembiayaan pendidikan." },
      { "id": 4, "nilai" : 1, "nama" : "Mengelola 1 program pembiayaan pendidikan." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak mengelola program pembiayaan pendidikan." }
    ],
    "jawaban": 4
  },
  {
    "id": 6269,
    "bagian_id": 347,
    "nomor": 115,
    "nama": "Sekolah melaksanakan kegiatan yang dapat menciptakan suasana, iklim, dan lingkungan pembelajaran yang kondusif.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melaksanakan 4 atau lebih kegiatan." },
      { "id": 2, "nilai" : 3, "nama" : "Melaksanakan 3 kegiatan." },
      { "id": 3, "nilai" : 2, "nama" : "Melaksanakan 2 kegiatan." },
      { "id": 4, "nilai" : 1, "nama" : "Melaksanakan 1 kegiatan." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melaksanakan kegiatan menciptakan suasana, iklim, dan lingkungan pembelajaran yang kondusif." }
    ],
    "jawaban": 4
  },
  {
    "id": 6270,
    "bagian_id": 347,
    "nomor": 116,
    "nama": "Sekolah melaksanakan berbagai kegiatan yang melibatkan masyarakat dan membangun kemitraan dengan lembaga lain yang relevan dalam pengelolaan pendidikan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melaksanakan 4 atau lebih kegiatan yang melibatkan masyarakat." },
      { "id": 2, "nilai" : 3, "nama" : "Melaksanakan 3 kegiatan yang melibatkan masyarakat." },
      { "id": 3, "nilai" : 2, "nama" : "Melaksanakan 2 kegiatan yang melibatkan masyarakat." },
      { "id": 4, "nilai" : 1, "nama" : "Melaksanakan 1 kegiatan yang melibatkan masyarakat." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melaksanakan kegiatan yang melibatkan masyarakat." }
    ],
    "jawaban": 4
  },
  {
    "id": 6271,
    "bagian_id": 347,
    "nomor": 117,
    "nama": "Sekolah melaksanakan program pengawasan yang disosialisasikan kepada pendidik dan tenaga kependidikan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melaksanakan 4 atau lebih program pengawasan." },
      { "id": 2, "nilai" : 3, "nama" : "Melaksanakan 3 program pengawasan." },
      { "id": 3, "nilai" : 2, "nama" : "Melaksanakan 2 program pengawasan." },
      { "id": 4, "nilai" : 1, "nama" : "Melaksanakan 1 program pengawasan." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melaksanakan program pengawasan." }
    ],
    "jawaban": 4
  },
  {
    "id": 6272,
    "bagian_id": 347,
    "nomor": 118,
    "nama": "Sekolah melaksanakan kegiatan evaluasi diri.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melaksanakan evaluasi diri minimum sekali dalam 1 semester." },
      { "id": 2, "nilai" : 3, "nama" : "Melaksanakan evaluasi diri sekali dalam 2 semester." },
      { "id": 3, "nilai" : 2, "nama" : "Melaksanakan evaluasi diri sekali dalam 3 semester." },
      { "id": 4, "nilai" : 1, "nama" : "Melaksanakan evaluasi diri sekali dalam 4 semester." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melaksanakan evaluasi diri." }
    ],
    "jawaban": 4
  },
  {
    "id": 6273,
    "bagian_id": 347,
    "nomor": 119,
    "nama": "Sekolah melaksanakan program evaluasi kinerja pendidik dan tenaga kependidikan.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melaksanakan 4 atau lebih program evaluasi kinerja pendidik dan tenaga kependidikan" },
      { "id": 2, "nilai" : 3, "nama" : "Melaksanakan 3 program evaluasi kinerja pendidik dan tenaga kependidikan" },
      { "id": 3, "nilai" : 2, "nama" : "Melaksanakan 2 program evaluasi kinerja pendidik dan tenaga kependidikan" },
      { "id": 4, "nilai" : 1, "nama" : "Melaksanakan 1 program evaluasi kinerja pendidik dan tenaga kependidikan" },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melakukan program evaluasi kinerja pendidik dan tenaga kependidikan" }
    ],
    "jawaban": 4
  },
  {
    "id": 6274,
    "bagian_id": 347,
    "nomor": 120,
    "nama": "Sekolah mempersiapkan diri untuk diakreditasi.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Mempersiapkan 4 komponen persiapan akreditasi." },
      { "id": 2, "nilai" : 3, "nama" : "Mempersiapkan 3 komponen persiapan akreditasi." },
      { "id": 3, "nilai" : 2, "nama" : "Mempersiapkan 2 komponen persiapan akreditasi." },
      { "id": 4, "nilai" : 1, "nama" : "Mempersiapkan 1 komponen persiapan akreditasi." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak melakukan persiapan akreditasi." }
    ],
    "jawaban": 4
  },
  {
    "id": 6275,
    "bagian_id": 347,
    "nomor": 121,
    "nama": "Sekolah memiliki struktur kepemimpinan sesuai standar pendidik dan tenaga kependidikan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki kepala sekolah dan 1 atau lebih wakil kepala sekolah yang dipilih oleh dewan guru." },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki kepala sekolah dan 1 atau lebih wakil kepala sekolah yang tidak dipilih oleh dewan guru." },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki kepala sekolah dan 1 atau lebih guru yang ditugaskan untuk melakukan fungsi sebagai wakil kepala sekolah" },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki kepala sekolah tetapi tidak memiliki wakil kepala sekolah." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki kepala sekolah dan wakil kepala sekolah." }
    ],
    "jawaban": 4
  },
  {
    "id": 6276,
    "bagian_id": 347,
    "nomor": 122,
    "nama": "Sekolah memiliki sistem informasi manajemen untuk mendukung administrasi pendidikan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki sistem informasi, fasilitas, dan petugas khusus." },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki sistem informasi dan fasilitas, tetapi tidak memiliki petugas khusus." },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki sistem informasi dan petugas khusus, tetapi tidak memiliki fasilitas." },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki sistem informasi tetapi tidak memiliki fasilitas dan petugas khusus." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki sistem informasi." }
    ],
    "jawaban": 4
  },
  {
    "id": 6277,
    "bagian_id": 348,
    "nomor": 123,
    "nama": "Sekolah memiliki laporan tahunan yang berisi catatan tentang nilai aset sarana dan prasarana secara menyeluruh.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki laporan 4 tahun terakhir." },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki laporan 3 tahun terakhir." },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki laporan 2 tahun terakhir." },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki laporan 1 tahun terakhir." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak memiliki laporan tahunan." }
    ],
    "jawaban": 4
  },
  {
    "id": 6278,
    "bagian_id": 348,
    "nomor": 124,
    "nama": "Sekolah membelanjakan alokasi biaya untuk pengembangan pendidik dan tenaga kependidikan (PTK) berdasarkan Rencana Kegiatan dan Anggaran Sekolah (RKAS).",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Membelanjakan biaya 91% - 100% dari mata anggaran pengembangan PTK dalam RKAS." },
      { "id": 2, "nilai" : 3, "nama" : "Membelanjakan biaya 81% - 90% dari mata anggaran pengembangan PTK dalam RKAS." },
      { "id": 3, "nilai" : 2, "nama" : "Membelanjakan biaya 71% - 80% dari mata anggaran pengembangan PTK dalam RKAS." },
      { "id": 4, "nilai" : 1, "nama" : "Membelanjakan biaya 61% - 70% dari mata anggaran pengembangan PTK dalam RKAS." },
      { "id": 5, "nilai" : 0, "nama" : "Membelanjakan biaya di bawah 61% dari mata anggaran pengembangan PTK dalam RKAS." }
    ],
    "jawaban": 4
  },
  {
    "id": 6279,
    "bagian_id": 348,
    "nomor": 125,
    "nama": "Sekolah memiliki modal kerja untuk membiayai seluruh kebutuhan pendidikan selama satu tahun terakhir.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Memiliki 91% - 100% modal kerja." },
      { "id": 2, "nilai" : 3, "nama" : "Memiliki 81% - 90% modal kerja." },
      { "id": 3, "nilai" : 2, "nama" : "Memiliki 71% - 80% modal kerja." },
      { "id": 4, "nilai" : 1, "nama" : "Memiliki 61% - 70% modal kerja." },
      { "id": 5, "nilai" : 0, "nama" : "Memiliki kurang dari 61% modal kerja." }
    ],
    "jawaban": 4
  },
  {
    "id": 6303,
    "bagian_id": 349,
    "nomor": 149,
    "nama": "Silabus mata pelajaran dilengkapi dengan indikator pencapaian kompetensi dasar (KD) dan teknik penilaian.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "76% - 100% silabus mata pelajaran dilengkapi indikator pencapaian KD dan teknik penilaian." },
      { "id": 2, "nilai" : 3, "nama" : "51% - 75% silabus mata pelajaran dilengkapi indikator pencapaian KD dan teknik penilaian." },
      { "id": 3, "nilai" : 2, "nama" : "26% - 50% silabus mata pelajaran dilengkapi indikator pencapaian KD dan teknik penilaian." },
      { "id": 4, "nilai" : 1, "nama" : "1% - 25% silabus mata pelajaran dilengkapi indikator pencapaian KD dan teknik penilaian." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak ada silabus yang dilengkapi indikator pencapaian KD dan teknik penilaian." }
    ],
    "jawaban": 4
  },
  {
    "id": 6314,
    "bagian_id": 349,
    "nomor": 160,
    "nama": "Sekolah menentukan kriteria kenaikan kelas melalui rapat dewan guru.",
    "bobot": 4,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Melalui rapat dewan guru." },
      { "id": 2, "nilai" : 3, "nama" : "Melalui rapat dengan perwakilan guru-guru mata pelajaran." },
      { "id": 3, "nilai" : 2, "nama" : "Melalui rapat dengan wali kelas saja." },
      { "id": 4, "nilai" : 1, "nama" : "Melalui rapat kepala sekolah dan wakil kepala sekolah." },
      { "id": 5, "nilai" : 0, "nama" : "Hanya ditetapkan oleh kepala sekolah." }
    ],
    "jawaban": 4
  },
  {
    "id": 6281,
    "bagian_id": 348,
    "nomor": 127,
    "nama": "Sekolah membayar gaji, insentif, transport, dan tunjangan lain bagi tenaga kependidikan pada tahun berjalan.",
    "bobot": 3,
    "pilihan": [
      { "id": 1, "nilai" : 4, "nama" : "Membayar gaji, insentif, transport, dan tunjangan lain." },
      { "id": 2, "nilai" : 3, "nama" : "Hanya membayar gaji, insentif, dan transport." },
      { "id": 3, "nilai" : 2, "nama" : "Hanya membayar gaji dan insentif." },
      { "id": 4, "nilai" : 1, "nama" : "Hanya membayar gaji." },
      { "id": 5, "nilai" : 0, "nama" : "Tidak membayar gaji tenaga kependidikan." }
    ],
    "jawaban": 4
  },
];