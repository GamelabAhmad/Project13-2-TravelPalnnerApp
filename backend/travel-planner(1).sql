-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 13, 2024 at 12:18 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `travel-planner`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_bookings`
--

CREATE TABLE `tbl_bookings` (
  `id_booking` int(11) NOT NULL,
  `id_destinations` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `address` varchar(225) NOT NULL,
  `booking_date` date NOT NULL,
  `status` tinyint(4) DEFAULT 0 COMMENT '0 = Processing, \r\n1 = Delivered, \r\n2 = Cancelled',
  `transfer_proof` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_bookings`
--

INSERT INTO `tbl_bookings` (`id_booking`, `id_destinations`, `id_user`, `name`, `phone`, `address`, `booking_date`, `status`, `transfer_proof`) VALUES
(9, 7, 12, 'john doe', '081234567890', 'Jl. Merdeka No.123, Jakarta', '2050-07-02', 0, 'transfer_proof\\transfer_proof_1718170809644.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_destination`
--

CREATE TABLE `tbl_destination` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `location` varchar(225) NOT NULL,
  `included_services` text DEFAULT NULL,
  `suggested_items` text DEFAULT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `contact_info` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_destination`
--

INSERT INTO `tbl_destination` (`id`, `name`, `description`, `price`, `location`, `included_services`, `suggested_items`, `image_url`, `contact_info`) VALUES
(1, 'Gunung Bromo', 'Gunung Bromo. Melihat keindahan sang surya terbit dari ufuk timur di Gunung Bromo secara perlahan mungkin menjadi satu anugrah yang tak terhingga indahnya. Paduan warna kuning, oranye, hitam dan biru yang dihasilkan oleh fenomena alam ini sungguh menjadi pemandangan menarik yang tersaji bagi mata kita yang melihatnya.\n\nKeindahan Gunung Bromo yang berada di dalam Kawasan Gunung Semeru memang sudah terkenal hingga ke mancanegara. Gunung ini dianggap suci oleh masyarakat Tengger, suku yang mendiami wilayah Gunung Bromo. Nama Bromo sendiri diambil dari nama dewa utama umat hindu yaitu Brahma.\n\nMelakukan perjalanan menuju Gunung Bromo, kaki kita akan disambut kawah pasir yang terbentang sepanjang kawasan salah satu gunung di Jawa Timur ini. Bila kita melakukan perjalanan menuju Bromo di pagi hari, kita akan disajikan warna-warna indah berasal dari pasir yang terkena pantulan sinar matahari. Pasir-pasir disini juga seolah berbisik saat tersapu oleh tiupan angin yang berhembus tenang saat pagi menyapa.   ', 500000, 'Jawa Timur, Indonesia', 'Kapan Saja\nOpen Trip\n1 Hari\nMin. 2 Orang', 'Obat Pribadi\nPakaian atau Jaket\nKebutuhan pribadi lainnya\nCemilan\nKamera pribadi\nFlaskdisk\nSandal atau Sepatu    ', 'destinations\\bromo.jpg', '0819-8765-4322'),
(2, 'Pulau Komodo', 'Pulau Komodo adalah sebuah pulau yang terletak di Kepulauan Nusa Tenggara, berada di sebelah timur Pulau Sumbawa, yang dipisahkan oleh Selat Sape. Pulau Komodo dikenal sebagai habitat asli hewan komodo. Pulau ini termasuk salah satu kawasan Taman Nasional Komodo yang dikelola oleh Pemerintah Pusat.\n\nSecara administratif, pulau ini termasuk wilayah Kabupaten Manggarai Barat, Kecamatan Komodo, Provinsi Nusa Tenggara Timur, Indonesia. Pulau Komodo merupakan ujung paling barat Provinsi Nusa Tenggara Timur, berbatasan dengan Provinsi Nusa Tenggara Barat.\n\nDi Pulau Komodo, hewan komodo hidup dan berkembang biak dengan baik. Hingga Agustus 2009, di pulau ini terdapat sekitar 1300 ekor komodo. Ditambah dengan pulau lain, seperti Pulau Rinca dan dan Gili Motang, jumlah mereka keseluruhan mencapai sekitar 2500 ekor. Ada pula sekitar 100 ekor komodo di Cagar Alam Wae Wuul di daratan Pulau Flores tapi tidak termasuk wilayah Taman Nasional Komodo.\n', 1500000, 'NTB, Indonesia', 'Kapan Saja\nOpen Trip\n1 Hari\nMin. 2 Orang', 'Obat Pribadi\nPakaian atau Jaket\nKebutuhan pribadi lainnya\nCemilan\nKamera pribadi\nFlaskdisk\nSandal atau Sepatu    ', 'destinations\\komodo.jpg', '0817-1234-5679'),
(3, 'Kawah Ijen', 'Kawah Ijen, juga dikenal sebagai Gunung Ijen, merupakan salah satu objek wisata yang sangat populer di Indonesia. Terletak di perbatasan antara Banyuwangi dan Bondowoso, Jawa Timur, Kawah Ijen menawarkan pengalaman mendaki yang menarik serta pemandangan alam yang memukau.\nKetinggian Kawah Ijen mencapai 2.386 mdpl dan berada Gunung Ijen yang juga dikenal sebagai salah satu gunung berapi aktif di Indonesia. Letusannya yang terakhir terjadi pada tahun 1999, menjadikannya destinasi yang menarik bagi para pecinta petualangan dan fotografi.\nDaya tarik wisata Kawah Ijen adalah fenomena \"api biru\" yang langka terjadi di malam hari, di mana gas belerang yang terbakar menghasilkan cahaya biru yang mempesona. Kawah Ijen malam hari memang menawarkan pemandangan yang luar biasa. Di dalam kawah ini juga terletak Danau Kawah Ijen dengan airnya yang berwarna hijau toska karena kandungan asam sulfate\n', 1500000, 'Jawa Timur, Indonesia', 'Kapan Saja\nOpen Trip\n1 Hari\nMin. 2 Orang', 'Obat Pribadi\nPakaian atau Jaket\nKebutuhan pribadi lainnya\nCemilan\nKamera pribadi\nFlaskdisk\nSandal atau Sepatu    ', 'destinations\\kawah-ijen.jpg', '0851-9876-5430'),
(4, 'Kelingking Beach', 'Kelingking Beach merupakan destinasi paling populer di Nusa Penida, sering muncul dalam iklan untuk Bali dan Indonesia. Formasi batu yang unik menyerupai tulang punggung dinosaurus dan bahkan diberi nama T-Rex Bay di Google Maps. Dari atas tebing, pengunjung dapat melihat ikan pari manta. Wisatawan membanjiri tepian pantai untuk menikmati pemandangan yang memukau dan fotografi drone. Popularitas Kelingking Beach telah sangat berkontribusi pada pertumbuhan pariwisata di pulau Nusa Penida, terutama melalui media sosial. Daya tarik utama Kelingking Beach adalah pemandangan yang menakjubkan dari atas tebing. Sementara garis pantainya memiliki tebing yang megah, tempat ini benar-benar luar biasa! Selfie dengan T-Rex adalah suatu keharusan, tetapi bersiaplah untuk berbagi sorotan dengan Instagrammers lainnya.', 1500000, 'Nusa Penida Bali, Indonesia', 'Kapan Saja\nOpen Trip\n1 Hari\nMin. 2 Orang', 'Obat Pribadi\nPakaian atau Jaket\nKebutuhan pribadi lainnya\nCemilan\nKamera pribadi\nFlaskdisk\nSandal atau Sepatu    ', 'destinations\\kelingking.jpg', '0831-2345-6780'),
(5, 'Candi Borobudur', 'Candi Borobudur adalah sebuah candi Buddha yang terletak di Borobudur, Magelang, Jawa Tengah, Indonesia. Candi ini terletak kurang lebih 100 km di sebelah barat daya Semarang, 86 km di sebelah barat Surakarta, dan 40 km di sebelah barat laut Yogyakarta. Candi dengan banyak stupa ini didirikan oleh para penganut agama Buddha Mahayana sekitar tahun 800-an Masehi pada masa pemerintahan wangsa Syailendra. Borobudur adalah candi atau kuil Buddha terbesar di dunia,sekaligus salah satu monumen Buddha terbesar di dunia.\n\nMonumen ini terdiri atas enam teras berbentuk bujur sangkar yang di atasnya terdapat tiga pelataran melingkar, pada dindingnya dihiasi dengan 2.672 panel relief dan aslinya terdapat 504 arca Buddha.Borobudur memiliki koleksi relief Buddha terlengkap dan terbanyak di dunia.Stupa utama terbesar terletak di tengah sekaligus memahkotai bangunan ini, dikelilingi oleh tiga barisan melingkar 72 stupa berlubang yang di dalamnya terdapat arca Buddha tengah duduk bersila dalam posisi teratai sempurna dengan mudra (sikap tangan) Dharmachakra mudra (memutar roda dharma).\n\nMonumen ini merupakan model alam semesta dan dibangun sebagai tempat suci untuk memuliakan Buddha sekaligus berfungsi sebagai tempat ziarah untuk menuntun umat manusia beralih dari alam nafsu duniawi menuju pencerahan dan kebijaksanaan sesuai ajaran Buddha.Para peziarah masuk melalui sisi timur dan memulai ritual di dasar candi dengan berjalan melingkari bangunan suci ini searah jarum jam, sambil terus naik ke undakan berikutnya melalui tiga tingkatan ranah dalam kosmologi Buddha. Ketiga tingkatan itu adalah Kāmadhātu (ranah hawa nafsu), Rupadhatu (ranah berwujud), dan Arupadhatu (ranah tak berwujud). Dalam perjalanannya para peziarah berjalan melalui serangkaian lorong dan tangga dengan menyaksikan tak kurang dari 1.460 panel relief indah yang terukir pada dinding dan pagar langkan.\n', 500000, 'Jawa Tengah, Indonesia', 'Kapan Saja\nOpen Trip\n1 Hari\nMin. 2 Orang', 'Obat Pribadi\nPakaian atau Jaket\nKebutuhan pribadi lainnya\nCemilan\nKamera pribadi\nFlaskdisk\nSandal atau Sepatu    ', 'destinations\\borobudur.jpg', '0822-3456-7891'),
(6, 'Kuta Beach', 'Kalau pergi ke Bali, Kuta pasti masuk salah satu daftar kunjungan yang pantang dilewatkan. Betul nggak, Sobat Pesona? Kuta memang layak dijadikan tempat Iiburan yang paling ideal karena memiliki deretan pantai indah yang aduhai. Mampir ke Kuta juga nggak lengkap rasanya tanpa menjelajahi aneka kuliner yang menggugah selera, nih. Baru membayangkan kombinasi pemandangan ciamik dan makanannya yang enak saja udah bikin senyum-senyum sendiri !\nSepanjang pesisir pantai di Kuta memiliki ombak yang tidak terlalu tinggi, sehingga cocok banget buat Sobat Pesona yang berniat atau sedang belajar berselancar. Hamparan pasir putih bersih dan indahnya gradasi warna laut di Pantai Kuta juga dijamin memanjakan matamu, Sobat Pesona! Nah, jika sudah puas bermain air Sobat Pesona bisa mengelilingi destinasi menarik lainnya di sekitar Kuta, seperti Tugu Peringatan Bom Bali, Taman Satrya Gatotkaca, Patung Dewa Ruci, atau berbelanja ke pusat oleh-oleh yang menawarkan aneka produk ekonomi kreatif unggulan, misalnya kaus santai, produk anyaman, lukisan, hingga kain tradisional khas Bali.\n', 800000, 'Nusa Penida Bali, Indonesia', 'Kapan Saja\nOpen Trip\n1 Hari\nMin. 2 Orang', 'Obat Pribadi\nPakaian atau Jaket\nKebutuhan pribadi lainnya\nCemilan\nKamera pribadi\nFlaskdisk\nSandal atau Sepatu    ', 'destinations\\Pantai-Kuta.jpg', '0813-8765-4321'),
(7, 'Dieng', '• Kawah Sikidang Dieng\nDataran Tinggi Dieng merupakan salah satu tempat paling indah di Profinsi Jawa Tengah. Dan Dataran Tinggi Dieng adalah tujuan yang cukup lengkap dengan banyak tempat wisata menarik. Salah satu tempat paling menarik di dataran tinggi ini adalah Kawah Sikidang.\n• Bukit Sikunir Dieng\nSalah objek wisatanya yaitu terletak di Desa Sembungan, yaitu Bukit Sikunir. Para wisatawan banyak mengunjungi Bukit Sikunir Dieng untuk menikmati matahari terbit yang sangat memukau. Mereka akan mendaki bukit dan mencapai puncaknya. Tujuan utamanya adalah untuk menikmati fenomena terkenal yang disebut Golden Sunrise of Sikunir. Bagi mereka yang suka jalan-jalan, tidak ada yang bisa mengalahkan keindahan Bukit Sikunir ini.\n• Telaga Warna Dieng\nObjek Wisata Telaga Warna Dieng merupakan salah satu destinasi wisata lokasinya berada di kawasan Dataran Tinggi Dieng, Kabupaten Wonosobo, Jawa Tengah. Dan Telaga Warna Dieng ini salah satu objek wisata andalah yang berada di Kabupaten Wonosobo. Pemberian nama Telaga Warna itu sendiri disebabkan memiliki Ciri khas serta keunikan pada fenomena alam yang terjadi di Telaga Warna ini, yaitu warna dari air di telaga ini sering berubah warna.\n', 300000, 'Jawa Tengah, Indonesia', 'Kapan Saja\nOpen Trip\n1 Hari\nMin. 2 Orang', 'Obat Pribadi\nPakaian atau Jaket\nKebutuhan pribadi lainnya\nCemilan\nKamera pribadi\nFlaskdisk\nSandal atau Sepatu    ', 'destinations\\dieng.jpg', '0852-1234-5678'),
(8, 'Danau Toba', 'Danau Toba adalah sebuah keajaiban alam yang sangat menakjubkan. Danau ini diperkirakan terbentuk dari letusan dahsyat sebuah gunung api, Gunung Toba, yang terjadi sekitar 74.000 tahun yang lalu. Dengan luas lebih dari 1.145 kilometer persegi dan kedalaman 450 meter, Danau Toba sebenarnya lebih mirip lautan daripada danau. \nDi tengah danau vulkanik terbesar di dunia ini juga terdapat sebuah pulau yang berukuran cukup besar, yaitu Pulau Samosir. Danau Toba menjadi tempat yang sempurna untuk bersantai, karena udaranya sangat sejuk dan suasananya pun amat tenang. Tentu saja, sebab letak Danau Toba berada di 900 meter di atas permukaan laut. Selain panorama danau yang memukau, Sobat Pesona juga akan disuguhkan keindahan pemandangan deretan pegunungan dan pepohonan hijau yang menyegarkan mata. Pokoknya, cocok jadi tempat untuk melepas penat, deh!\n', 100000, 'Sumatera Utara, Indonesia', 'Kapan Saja\nOpen Trip\n1 Hari\nMin. 2 Orang', 'Obat Pribadi\nPakaian atau Jaket\nKebutuhan pribadi lainnya\nCemilan\nKamera pribadi\nFlaskdisk\nSandal atau Sepatu    ', 'destinations\\danau-toba.jpg', '0838-9876-5432'),
(9, 'Raja Ampat', 'Jauh dari hiruk pikuk kota metropolitan, salah satu destinasi #DiIndonesiaAja istimewa ini menawarkan ketenangan dan kedamaian. Raja Ampat, sebuah Kabupaten dan merupakan bagian dari Provinsi Papua Barat. Suguhan alam yang ditawarkan begitu mengagumkan, hingga bisa membuat wisatawan enggan pulang.\nBagi Sobat Pesona yang gemar diving dan snorkeling, wilayah perairan Raja Ampat adalah salah satu destinasi diving terbaik di dunia. Menurut laporan sebuah organisasi sosial lingkungan internasional, The Nature Conservancy and Conservation International, sekitar 75% spesies karang di dunia hidup di kepulauan Raja Ampat. Destinasi ini memiliki kekayaan dan keunikan spesies yang tinggi dengan ditemukannya 1.318 jenis ikan, 699 jenis moluska (hewan lunak), dan 537 jenis terumbu karang. Rasakan sendiri sensasi menyelam dan bertemu dengan ragam jenis biota laut yang unik, seperti kuda laut kerdil (pygmy seahorse), ikan kelelawar, hingga dugong bisa kamu temukan di wilayah perairan Raja Ampat. Beberapa spot menyelam terbaik dan paling terkenal di Raja Ampat di antaranya adalah Kabui Passage, di sekitar Dermaga Pulau Arborek, Sauwandarek, Yenbuba, Dinding Friwen, dan banyak lagi!\n', 200000, 'Papua Barat, Indonesia', 'Kapan Saja\nOpen Trip\n1 Hari\nMin. 2 Orang', 'Obat Pribadi\nPakaian atau Jaket\nKebutuhan pribadi lainnya\nCemilan\nKamera pribadi\nFlaskdisk\nSandal atau Sepatu    ', 'destinations\\Raja-Ampat..jpg', '0821-2345-6789');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_trip`
--

CREATE TABLE `tbl_trip` (
  `id` int(11) NOT NULL,
  `nama_destinasi` varchar(255) DEFAULT NULL,
  `lokasi` varchar(255) DEFAULT NULL,
  `durasi` int(11) DEFAULT NULL,
  `harga` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_trip`
--

INSERT INTO `tbl_trip` (`id`, `nama_destinasi`, `lokasi`, `durasi`, `harga`) VALUES
(1, 'Kelingking Beach', 'Nusa Penida Bali, Indonesia', 2, '1200000.00'),
(2, 'Pulau Komodo', 'NTB, Indonesia', 2, '1500000.00'),
(3, 'Candi Borobudur', 'Magelang, Indonesia', 1, '400000.00'),
(4, 'Pantai Gunungkidul', 'Yogyakarta, Indonesia', 1, '300000.00'),
(5, 'Gunung Bromo', 'Bromo, Indonesia', 1, '350000.00'),
(6, 'Kawah Ijen', 'Banyuwangi, Indonesia', 2, '1200000.00'),
(7, 'Kuta Beach', 'Nusa Penida Bali, Indonesia', 2, '800000.00'),
(8, 'Wisata Dieng', 'Wonosobo, Indonesia', 1, '300000.00'),
(9, 'Raja Ampat', 'Papua Barat, Indonesia', 3, '2000000.00'),
(10, 'Danau Toba', 'Sumatera Utara, Indonesia', 2, '1000000.00');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_users`
--

CREATE TABLE `tbl_users` (
  `id_user` int(11) NOT NULL,
  `name` varchar(225) NOT NULL,
  `phone` varchar(225) NOT NULL,
  `address` varchar(225) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` tinyint(4) DEFAULT 0 COMMENT '0 = user , 1 = admin'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_users`
--

INSERT INTO `tbl_users` (`id_user`, `name`, `phone`, `address`, `email`, `password`, `role`) VALUES
(12, 'John Doe', '081234567890', 'Jl. Merdeka No.123, Jakarta', 'john.doe@example.com', '$2b$11$xectOWpn6BLv5/JFjOTtj.ueuKG/wE/4PoGrewGyX2xlaJ9Kyq3Cq', 0),
(13, 'Muichiro Tokito', '0813765389102', 'Jl. Saitama No.123, Jepang', 'tokito@gmail.com', '$2b$11$XbNTD7zqQRCiDUXXUBkLo.H0KkN2J64rEFCuBeqViqY7K3LX732E.', 1),
(15, 'Alvaro', '081234567890', 'Jl. Merdeka No.123, Jakarta', 'alvaro@example.com', '$2b$11$Tk9cUUCtKbiQ1yBk35s.0Ol0AHDU6db9RHeRFfMcgLn//RYXnoZvy', 0),
(16, 'RAVI AZZURA PUTRA', '', '', 'ravi.azzura74@gmail.com', '', 0),
(20, 'Abdul Aziz', '081356728469', 'soreang', 'abdul@gmail.com', '$2b$11$51uXOvfeKpIKNK9HiKHEa.9LC0AAq3Y2TB5n9iqE5mvews6uDgNKm', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_bookings`
--
ALTER TABLE `tbl_bookings`
  ADD PRIMARY KEY (`id_booking`),
  ADD KEY `id_user` (`id_user`),
  ADD KEY `id_destinations` (`id_destinations`);

--
-- Indexes for table `tbl_destination`
--
ALTER TABLE `tbl_destination`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_trip`
--
ALTER TABLE `tbl_trip`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_users`
--
ALTER TABLE `tbl_users`
  ADD PRIMARY KEY (`id_user`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_bookings`
--
ALTER TABLE `tbl_bookings`
  MODIFY `id_booking` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `tbl_destination`
--
ALTER TABLE `tbl_destination`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `tbl_trip`
--
ALTER TABLE `tbl_trip`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `tbl_users`
--
ALTER TABLE `tbl_users`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tbl_bookings`
--
ALTER TABLE `tbl_bookings`
  ADD CONSTRAINT `tbl_bookings_ibfk_2` FOREIGN KEY (`id_user`) REFERENCES `tbl_users` (`id_user`),
  ADD CONSTRAINT `tbl_bookings_ibfk_3` FOREIGN KEY (`id_destinations`) REFERENCES `tbl_destination` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
