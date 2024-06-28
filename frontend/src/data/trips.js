const trips = [
  {
    id: 1,
    image: '../img/kelingking.jpg',
    title: 'Kelingking Beach',
    duration: '2 Hari',
    location: 'Nusa Penida Bali, Indonesia',
    price: 'Rp 1.200.000',
    region: 'bali',
    description: 'Kelingking Beach merupakan destinasi paling populer di Nusa Penida, sering muncul dalam iklan untuk Bali dan Indonesia. Formasi batu yang unik menyerupai tulang punggung dinosaurus dan bahkan diberi nama T-Rex Bay di Google Maps. Dari atas tebing, pengunjung bahkan dapat melihat ikan pari manta. Wisatawan membanjiri tepian pantai untuk menikmati pemandangan yang memukau dan fotografi drone. Popularitas Kelingking Beach telah sangat berkontribusi pada pertumbuhan pariwisata di pulau Nusa Penida, terutama melalui media sosial. Daya tarik utama Kelingking Beach adalah pemandangan yang menakjubkan dari atas tebing. Sementara garis pantainya memiliki tebing yang megah, tempat ini benar-benar luar biasa! Selfie dengan T-Rex adalah suatu keharusan, tetapi bersiaplah untuk berbagi sorotan dengan Instagrammers lainnya.'
  },
  {
    id: 2,
    image: '../img/komodo.jpg',
    title: 'Pulau Komodo',
    duration: '2 Hari',
    location: 'NTB, Indonesia',
    price: 'Rp 1.500.000',
    region: 'ntb',
    description: 'Pulau Komodo adalah sebuah pulau yang terletak di Kepulauan Nusa Tenggara, berada di sebelah timur Pulau Sumbawa, yang dipisahkan oleh Selat Sape. Pulau Komodo dikenal sebagai habitat asli hewan komodo. Pulau ini termasuk salah satu kawasan Taman Nasional Komodo yang dikelola oleh Pemerintah Pusat. Secara administratif, pulau ini termasuk wilayah Kabupaten Manggarai Barat, Kecamatan Komodo, Provinsi Nusa Tenggara Timur, Indonesia. Pulau Komodo merupakan ujung paling barat Provinsi Nusa Tenggara Timur, berbatasan dengan Provinsi Nusa Tenggara Barat. Di Pulau Komodo, hewan komodo hidup dan berkembang biak dengan baik. Hingga Agustus 2009, di pulau ini terdapat sekitar 1300 ekor komodo. Ditambah dengan pulau lain, seperti Pulau Rinca dan dan Gili Motang, jumlah mereka keseluruhan mencapai sekitar 2500 ekor. Ada pula sekitar 100 ekor komodo diCagar Alam Wae Wuuldi daratan Pulau Flores tapi tidak termasuk wilayah Taman Nasional Komodo.'
  },
  {
    id: 3,
    image: '../img/borobudur.jpg',
    title: 'Candi Borobudur',
    duration: '1 Hari',
    location: 'Magelang, Indonesia',
    price: 'Rp 400.000',
    region: 'jawa_tengah',
    description: 'Candi Borobudur sebuah candi Buddha yang terletak di Borobudur, Magelang, Jawa Tengah, Indonesia. Candi ini terletak kurang lebih 100 km di sebelah barat daya Semarang, 86 km di sebelah barat Surakarta, dan 40 km di sebelah barat laut Yogyakarta. Candi dengan banyak stupa ini didirikan oleh para penganut agama Buddha Mahayana sekitar tahun 800-an Masehi pada masa pemerintahan wangsa Syailendra. Borobudur adalah candi atau kuil Buddha terbesar di dunia, sekaligus salah satu monumen Buddha terbesar di dunia. Monumen ini terdiri atas enam teras berbentuk bujur sangkar yang di atasnya terdapat tiga pelataran melingkar, pada dindingnya dihiasi dengan 2.672 panel relief dan aslinya terdapat 504 arca Buddha.[4] Borobudur memiliki koleksi relief Buddha terlengkap dan terbanyak di dunia.[3] Stupa utama terbesar terletak di tengah sekaligus memahkotai bangunan ini, dikelilingi oleh tiga barisan melingkar 72 stupa berlubang yang di dalamnya terdapat arca Buddha tengah duduk bersila dalam posisi teratai sempurna dengan mudra (sikap tangan) Dharmachakra mudra (memutar roda dharma).'
  },
  {
    id: 4,
    image: '../img/Gambar-Trip1.jpeg',
    title: 'Pantai Gunungkidul',
    duration: '1 Hari',
    location: 'Yogyakarta, Indonesia',
    price: 'Rp 300.000',
    region: 'yogyakarta',
    description: 'Pantai Gunungkidul terkenal dengan keindahan pantainya yang masih alami dan bersih. Cocok untuk berlibur bersama keluarga dan teman-teman.'
  },
  {
    id: 5,
    image: '../img/bromo.jpg',
    title: 'Gunung Bromo',
    duration: '1 Hari',
    location: 'Bromo, Indonesia',
    price: 'Rp 350.000',
    region: 'jawa_timur',
    description: 'Gunung Bromo. Melihat keindahan sang surya terbit dari ufuk timur di Gunung Bromo secara perlahan mungkin menjadi satu anugrah yang tak terhingga indahnya. Paduan warna kuning, oranye, hitam dan biru yang dihasilkan oleh fenomena alam ini sungguh menjadi pemandangan menarik yang tersaji bagi mata kita yang melihatnya. Keindahan Gunung Bromo yang berada di dalam Kawasan Gunung Semeru memang sudah terkenal hingga ke mancanegara. Gunung ini dianggap suci oleh masyarakat Tengger, suku yang mendiami wilayah Gunung Bromo. Nama Bromo sendiri diambil dari nama dewa utama umat hindu yaitu Brahma. Melakukan perjalanan menuju Gunung Bromo, kaki kita akan disambut kawah pasir yang terbentang sepanjang kawasan salah satu gunung di Jawa Timur ini. Bila kita melakukan perjalanan menuju Bromo di pagi hari, kita akan disajikan warna-warna indah berasal dari pasir yang terkena pantulan sinar matahari. Pasir-pasir disini juga seolah berbisik saat tersapu oleh tiupan angin yang berhembus tenang saat pagi menyapa.'
  },
  {
    id: 6,
    image: '../img/kawah-ijen.jpg',
    title: 'Kawah Ijen',
    duration: '2 Hari',
    location: 'Banyuwangi, Indonesia',
    price: 'Rp 1.200.000',
    region: 'jawa_timur',
    description: 'Kawah Ijen terkenal dengan api birunya yang fenomenal dan tambang belerang yang unik. Pengalaman hiking yang menantang akan terbayar dengan pemandangan yang luar biasa.'
  },
  {
    id: 7,
    image: '../img/Pantai-Kuta.jpg',
    title: 'Kuta Beach',
    duration: '2 Hari',
    location: 'Nusa Penida Bali, Indonesia',
    price: 'Rp 800.000',
    region: 'bali',
    description: 'Kuta Beach adalah salah satu pantai paling terkenal di Bali dengan ombak yang bagus untuk berselancar dan pasir putih yang halus. Banyak restoran dan tempat hiburan di sekitar pantai.'
  },
  {
    id: 8,
    image: '../img/dieng.jpg',
    title: 'Wisata Dieng',
    duration: '1 Hari',
    location: 'Wonosobo, Indonesia',
    price: 'Rp 300.000',
    region: 'jawa_tengah',
    description: 'Dieng adalah dataran tinggi yang menawarkan pemandangan alam yang indah dan udara yang sejuk. Anda bisa mengunjungi kawah, telaga, dan candi di sini.'
  },
  {
    id: 9,
    image: '../img/Gambar-Trip1.jpeg',
    title: 'Raja Ampat',
    duration: '3 Hari',
    location: 'Papua Barat, Indonesia',
    price: 'Rp 2.000.000',
    region: 'ntt',
    description: 'Raja Ampat terkenal dengan keindahan bawah lautnya yang luar biasa. Ini adalah surga bagi penyelam dengan berbagai jenis ikan dan terumbu karang yang indah.'
  },
  {
    id: 10,
    image: '../img/danau-toba.jpg',
    title: 'Danau Toba',
    duration: '2 Hari',
    location: 'Sumatera Utara, Indonesia',
    price: 'Rp 1.000.000',
    region: 'sumatera',
    description: 'Danau Toba adalah danau vulkanik terbesar di dunia dengan pulau Samosir di tengahnya. Anda bisa menikmati pemandangan danau yang luas dan indah serta budaya Batak yang unik.'
  },
];

export default trips;
