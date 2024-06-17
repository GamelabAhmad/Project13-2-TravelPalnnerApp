-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 17, 2024 at 08:21 AM
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
  `id_trip` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_prices` int(11) NOT NULL,
  `id_destinations` int(11) NOT NULL,
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

INSERT INTO `tbl_bookings` (`id_booking`, `id_trip`, `id_user`, `id_prices`, `id_destinations`, `name`, `phone`, `address`, `booking_date`, `status`, `transfer_proof`) VALUES
(11, 9, 12, 15, 6, 'John Doe', '081234567890', 'Jl. Merdeka No.123, Jakarta', '2050-07-02', 0, 'transfer_proof\\transfer_proof_1718601819859.png');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_destinations`
--

CREATE TABLE `tbl_destinations` (
  `id` int(11) NOT NULL,
  `location` varchar(225) NOT NULL,
  `image` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_destinations`
--

INSERT INTO `tbl_destinations` (`id`, `location`, `image`) VALUES
(1, 'Bali, Indonesia', 'destinations\\provinsi-bali.jpg'),
(2, 'NTB, Indonesia', 'destinations\\provinsi-NTB.jpg'),
(3, 'Jawa Tengah, Indonesia', 'destinations\\provinsi-JawaTengah.jpg'),
(4, 'Yogyakarta, Indonesia', 'destinations\\provinsi-yogyakarta.jpg'),
(5, 'Jawa Timur, Indonesia', 'destinations\\provinsi-JawaTimur.jpg'),
(6, 'Papua Barat, Indonesia', 'destinations\\provinsi-PapuaBarat.jpg'),
(7, 'Sumatera Utara, Indonesia', 'destinations\\provinsi-sumaterautara.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_prices`
--

CREATE TABLE `tbl_prices` (
  `id` int(11) NOT NULL,
  `id_trip` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `type` varchar(225) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_prices`
--

INSERT INTO `tbl_prices` (`id`, `id_trip`, `price`, `type`) VALUES
(1, 1, 400000, 'paket'),
(2, 1, 500000, 'reguler'),
(3, 2, 1300000, 'paket'),
(4, 2, 1500000, 'reguler'),
(5, 3, 1200000, 'paket'),
(6, 3, 1500000, 'reguler'),
(7, 4, 1200000, 'paket'),
(8, 4, 1500000, 'reguler'),
(9, 5, 400000, 'paket'),
(10, 5, 500000, 'reguler'),
(11, 4, 1500000, 'reguler'),
(12, 6, 800000, 'reguler'),
(13, 7, 300001, 'reguler'),
(14, 8, 1000000, 'reguler'),
(15, 9, 2000000, 'reguler');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_trips`
--

CREATE TABLE `tbl_trips` (
  `id` int(11) NOT NULL,
  `id_destination` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `included_services` text DEFAULT NULL,
  `suggested_items` text DEFAULT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `contact_info` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_trips`
--

INSERT INTO `tbl_trips` (`id`, `id_destination`, `name`, `description`, `included_services`, `suggested_items`, `image_url`, `contact_info`) VALUES
(1, 5, 'Gunung Bromo', 'Gunung Bromo. Melihat keindahan sang surya terbit dari ufuk timur di Gunung Bromo secara perlahan mungkin menjadi satu anugrah yang tak terhingga indahnya. Paduan warna kuning, oranye, hitam dan biru yang dihasilkan oleh fenomena alam ini sungguh menjadi pemandangan menarik yang tersaji bagi mata kita yang melihatnya.\n\nKeindahan Gunung Bromo yang berada di dalam Kawasan Gunung Semeru memang sudah terkenal hingga ke mancanegara. Gunung ini dianggap suci oleh masyarakat Tengger, suku yang mendiami wilayah Gunung Bromo. Nama Bromo sendiri diambil dari nama dewa utama umat hindu yaitu Brahma.\n\nMelakukan perjalanan menuju Gunung Bromo, kaki kita akan disambut kawah pasir yang terbentang sepanjang kawasan salah satu gunung di Jawa Timur ini. Bila kita melakukan perjalanan menuju Bromo di pagi hari, kita akan disajikan warna-warna indah berasal dari pasir yang terkena pantulan sinar matahari. Pasir-pasir disini juga seolah berbisik saat tersapu oleh tiupan angin yang berhembus tenang saat pagi menyapa.   ', 'Kapan Saja\nOpen Trip\n1 Hari\nMin. 2 Orang', 'Obat Pribadi\nPakaian atau Jaket\nKebutuhan pribadi lainnya\nCemilan\nKamera pribadi\nFlaskdisk\nSandal atau Sepatu    ', 'trips\\bromo.jpg', '0819-8765-4322'),
(2, 2, 'Pulau Komodo', 'Pulau Komodo adalah sebuah pulau yang terletak di Kepulauan Nusa Tenggara, berada di sebelah timur Pulau Sumbawa, yang dipisahkan oleh Selat Sape. Pulau Komodo dikenal sebagai habitat asli hewan komodo. Pulau ini termasuk salah satu kawasan Taman Nasional Komodo yang dikelola oleh Pemerintah Pusat.\n\nSecara administratif, pulau ini termasuk wilayah Kabupaten Manggarai Barat, Kecamatan Komodo, Provinsi Nusa Tenggara Timur, Indonesia. Pulau Komodo merupakan ujung paling barat Provinsi Nusa Tenggara Timur, berbatasan dengan Provinsi Nusa Tenggara Barat.\n\nDi Pulau Komodo, hewan komodo hidup dan berkembang biak dengan baik. Hingga Agustus 2009, di pulau ini terdapat sekitar 1300 ekor komodo. Ditambah dengan pulau lain, seperti Pulau Rinca dan dan Gili Motang, jumlah mereka keseluruhan mencapai sekitar 2500 ekor. Ada pula sekitar 100 ekor komodo di Cagar Alam Wae Wuul di daratan Pulau Flores tapi tidak termasuk wilayah Taman Nasional Komodo.\n', 'Kapan Saja\nOpen Trip\n1 Hari\nMin. 2 Orang', 'Obat Pribadi\nPakaian atau Jaket\nKebutuhan pribadi lainnya\nCemilan\nKamera pribadi\nFlaskdisk\nSandal atau Sepatu    ', 'trips\\komodo.jpg', '0817-1234-5679'),
(3, 5, 'Kawah Ijen', 'Kawah Ijen, juga dikenal sebagai Gunung Ijen, merupakan salah satu objek wisata yang sangat populer di Indonesia. Terletak di perbatasan antara Banyuwangi dan Bondowoso, Jawa Timur, Kawah Ijen menawarkan pengalaman mendaki yang menarik serta pemandangan alam yang memukau.\nKetinggian Kawah Ijen mencapai 2.386 mdpl dan berada Gunung Ijen yang juga dikenal sebagai salah satu gunung berapi aktif di Indonesia. Letusannya yang terakhir terjadi pada tahun 1999, menjadikannya destinasi yang menarik bagi para pecinta petualangan dan fotografi.\nDaya tarik wisata Kawah Ijen adalah fenomena \"api biru\" yang langka terjadi di malam hari, di mana gas belerang yang terbakar menghasilkan cahaya biru yang mempesona. Kawah Ijen malam hari memang menawarkan pemandangan yang luar biasa. Di dalam kawah ini juga terletak Danau Kawah Ijen dengan airnya yang berwarna hijau toska karena kandungan asam sulfate\n', 'Kapan Saja\nOpen Trip\n1 Hari\nMin. 2 Orang', 'Obat Pribadi\nPakaian atau Jaket\nKebutuhan pribadi lainnya\nCemilan\nKamera pribadi\nFlaskdisk\nSandal atau Sepatu    ', 'trips\\kawah-ijen.jpg', '0851-9876-5430'),
(4, 1, 'Kelingking Beach', 'Kelingking Beach merupakan destinasi paling populer di Nusa Penida, sering muncul dalam iklan untuk Bali dan Indonesia. Formasi batu yang unik menyerupai tulang punggung dinosaurus dan bahkan diberi nama T-Rex Bay di Google Maps. Dari atas tebing, pengunjung dapat melihat ikan pari manta. Wisatawan membanjiri tepian pantai untuk menikmati pemandangan yang memukau dan fotografi drone. Popularitas Kelingking Beach telah sangat berkontribusi pada pertumbuhan pariwisata di pulau Nusa Penida, terutama melalui media sosial. Daya tarik utama Kelingking Beach adalah pemandangan yang menakjubkan dari atas tebing. Sementara garis pantainya memiliki tebing yang megah, tempat ini benar-benar luar biasa! Selfie dengan T-Rex adalah suatu keharusan, tetapi bersiaplah untuk berbagi sorotan dengan Instagrammers lainnya.', 'Kapan Saja\nOpen Trip\n1 Hari\nMin. 2 Orang', 'Obat Pribadi\nPakaian atau Jaket\nKebutuhan pribadi lainnya\nCemilan\nKamera pribadi\nFlaskdisk\nSandal atau Sepatu    ', 'trips\\kelingking.jpg', '0831-2345-6780'),
(5, 3, 'Candi Borobudur', 'Candi Borobudur adalah sebuah candi Buddha yang terletak di Borobudur, Magelang, Jawa Tengah, Indonesia. Candi ini terletak kurang lebih 100 km di sebelah barat daya Semarang, 86 km di sebelah barat Surakarta, dan 40 km di sebelah barat laut Yogyakarta. Candi dengan banyak stupa ini didirikan oleh para penganut agama Buddha Mahayana sekitar tahun 800-an Masehi pada masa pemerintahan wangsa Syailendra. Borobudur adalah candi atau kuil Buddha terbesar di dunia,sekaligus salah satu monumen Buddha terbesar di dunia.\n\nMonumen ini terdiri atas enam teras berbentuk bujur sangkar yang di atasnya terdapat tiga pelataran melingkar, pada dindingnya dihiasi dengan 2.672 panel relief dan aslinya terdapat 504 arca Buddha.Borobudur memiliki koleksi relief Buddha terlengkap dan terbanyak di dunia.Stupa utama terbesar terletak di tengah sekaligus memahkotai bangunan ini, dikelilingi oleh tiga barisan melingkar 72 stupa berlubang yang di dalamnya terdapat arca Buddha tengah duduk bersila dalam posisi teratai sempurna dengan mudra (sikap tangan) Dharmachakra mudra (memutar roda dharma).\n\nMonumen ini merupakan model alam semesta dan dibangun sebagai tempat suci untuk memuliakan Buddha sekaligus berfungsi sebagai tempat ziarah untuk menuntun umat manusia beralih dari alam nafsu duniawi menuju pencerahan dan kebijaksanaan sesuai ajaran Buddha.Para peziarah masuk melalui sisi timur dan memulai ritual di dasar candi dengan berjalan melingkari bangunan suci ini searah jarum jam, sambil terus naik ke undakan berikutnya melalui tiga tingkatan ranah dalam kosmologi Buddha. Ketiga tingkatan itu adalah Kāmadhātu (ranah hawa nafsu), Rupadhatu (ranah berwujud), dan Arupadhatu (ranah tak berwujud). Dalam perjalanannya para peziarah berjalan melalui serangkaian lorong dan tangga dengan menyaksikan tak kurang dari 1.460 panel relief indah yang terukir pada dinding dan pagar langkan.\n', 'Kapan Saja\nOpen Trip\n1 Hari\nMin. 2 Orang', 'Obat Pribadi\nPakaian atau Jaket\nKebutuhan pribadi lainnya\nCemilan\nKamera pribadi\nFlaskdisk\nSandal atau Sepatu    ', 'trips\\borobudur.jpg', '0822-3456-7891'),
(6, 1, 'Kuta Beach', 'Kalau pergi ke Bali, Kuta pasti masuk salah satu daftar kunjungan yang pantang dilewatkan. Betul nggak, Sobat Pesona? Kuta memang layak dijadikan tempat Iiburan yang paling ideal karena memiliki deretan pantai indah yang aduhai. Mampir ke Kuta juga nggak lengkap rasanya tanpa menjelajahi aneka kuliner yang menggugah selera, nih. Baru membayangkan kombinasi pemandangan ciamik dan makanannya yang enak saja udah bikin senyum-senyum sendiri !\nSepanjang pesisir pantai di Kuta memiliki ombak yang tidak terlalu tinggi, sehingga cocok banget buat Sobat Pesona yang berniat atau sedang belajar berselancar. Hamparan pasir putih bersih dan indahnya gradasi warna laut di Pantai Kuta juga dijamin memanjakan matamu, Sobat Pesona! Nah, jika sudah puas bermain air Sobat Pesona bisa mengelilingi destinasi menarik lainnya di sekitar Kuta, seperti Tugu Peringatan Bom Bali, Taman Satrya Gatotkaca, Patung Dewa Ruci, atau berbelanja ke pusat oleh-oleh yang menawarkan aneka produk ekonomi kreatif unggulan, misalnya kaus santai, produk anyaman, lukisan, hingga kain tradisional khas Bali.\n', 'Kapan Saja\nOpen Trip\n1 Hari\nMin. 2 Orang', 'Obat Pribadi\nPakaian atau Jaket\nKebutuhan pribadi lainnya\nCemilan\nKamera pribadi\nFlaskdisk\nSandal atau Sepatu    ', 'trips\\Pantai-Kuta.jpg', '0813-8765-4321'),
(7, 3, 'Dieng', '• Kawah Sikidang Dieng\nDataran Tinggi Dieng merupakan salah satu tempat paling indah di Profinsi Jawa Tengah. Dan Dataran Tinggi Dieng adalah tujuan yang cukup lengkap dengan banyak tempat wisata menarik. Salah satu tempat paling menarik di dataran tinggi ini adalah Kawah Sikidang.\n• Bukit Sikunir Dieng\nSalah objek wisatanya yaitu terletak di Desa Sembungan, yaitu Bukit Sikunir. Para wisatawan banyak mengunjungi Bukit Sikunir Dieng untuk menikmati matahari terbit yang sangat memukau. Mereka akan mendaki bukit dan mencapai puncaknya. Tujuan utamanya adalah untuk menikmati fenomena terkenal yang disebut Golden Sunrise of Sikunir. Bagi mereka yang suka jalan-jalan, tidak ada yang bisa mengalahkan keindahan Bukit Sikunir ini.\n• Telaga Warna Dieng\nObjek Wisata Telaga Warna Dieng merupakan salah satu destinasi wisata lokasinya berada di kawasan Dataran Tinggi Dieng, Kabupaten Wonosobo, Jawa Tengah. Dan Telaga Warna Dieng ini salah satu objek wisata andalah yang berada di Kabupaten Wonosobo. Pemberian nama Telaga Warna itu sendiri disebabkan memiliki Ciri khas serta keunikan pada fenomena alam yang terjadi di Telaga Warna ini, yaitu warna dari air di telaga ini sering berubah warna.\n', 'Kapan Saja\nOpen Trip\n1 Hari\nMin. 2 Orang', 'Obat Pribadi\nPakaian atau Jaket\nKebutuhan pribadi lainnya\nCemilan\nKamera pribadi\nFlaskdisk\nSandal atau Sepatu    ', 'trips\\dieng.jpg', '0852-1234-5678'),
(8, 7, 'Danau Toba', 'Danau Toba adalah sebuah keajaiban alam yang sangat menakjubkan. Danau ini diperkirakan terbentuk dari letusan dahsyat sebuah gunung api, Gunung Toba, yang terjadi sekitar 74.000 tahun yang lalu. Dengan luas lebih dari 1.145 kilometer persegi dan kedalaman 450 meter, Danau Toba sebenarnya lebih mirip lautan daripada danau. \nDi tengah danau vulkanik terbesar di dunia ini juga terdapat sebuah pulau yang berukuran cukup besar, yaitu Pulau Samosir. Danau Toba menjadi tempat yang sempurna untuk bersantai, karena udaranya sangat sejuk dan suasananya pun amat tenang. Tentu saja, sebab letak Danau Toba berada di 900 meter di atas permukaan laut. Selain panorama danau yang memukau, Sobat Pesona juga akan disuguhkan keindahan pemandangan deretan pegunungan dan pepohonan hijau yang menyegarkan mata. Pokoknya, cocok jadi tempat untuk melepas penat, deh!\n', 'Kapan Saja\nOpen Trip\n1 Hari\nMin. 2 Orang', 'Obat Pribadi\nPakaian atau Jaket\nKebutuhan pribadi lainnya\nCemilan\nKamera pribadi\nFlaskdisk\nSandal atau Sepatu    ', 'trips\\danau-toba.jpg', '0838-9876-5432'),
(9, 6, 'Raja Ampat', 'Jauh dari hiruk pikuk kota metropolitan, salah satu destinasi #DiIndonesiaAja istimewa ini menawarkan ketenangan dan kedamaian. Raja Ampat, sebuah Kabupaten dan merupakan bagian dari Provinsi Papua Barat. Suguhan alam yang ditawarkan begitu mengagumkan, hingga bisa membuat wisatawan enggan pulang.\nBagi Sobat Pesona yang gemar diving dan snorkeling, wilayah perairan Raja Ampat adalah salah satu destinasi diving terbaik di dunia. Menurut laporan sebuah organisasi sosial lingkungan internasional, The Nature Conservancy and Conservation International, sekitar 75% spesies karang di dunia hidup di kepulauan Raja Ampat. Destinasi ini memiliki kekayaan dan keunikan spesies yang tinggi dengan ditemukannya 1.318 jenis ikan, 699 jenis moluska (hewan lunak), dan 537 jenis terumbu karang. Rasakan sendiri sensasi menyelam dan bertemu dengan ragam jenis biota laut yang unik, seperti kuda laut kerdil (pygmy seahorse), ikan kelelawar, hingga dugong bisa kamu temukan di wilayah perairan Raja Ampat. Beberapa spot menyelam terbaik dan paling terkenal di Raja Ampat di antaranya adalah Kabui Passage, di sekitar Dermaga Pulau Arborek, Sauwandarek, Yenbuba, Dinding Friwen, dan banyak lagi!\n', 'Kapan Saja\nOpen Trip\n1 Hari\nMin. 2 Orang', 'Obat Pribadi\nPakaian atau Jaket\nKebutuhan pribadi lainnya\nCemilan\nKamera pribadi\nFlaskdisk\nSandal atau Sepatu    ', 'trips\\Raja-Ampat..jpg', '0821-2345-6789');

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
  ADD KEY `id_prices` (`id_prices`),
  ADD KEY `id_destinations` (`id_destinations`),
  ADD KEY `id_trip` (`id_trip`);

--
-- Indexes for table `tbl_destinations`
--
ALTER TABLE `tbl_destinations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_prices`
--
ALTER TABLE `tbl_prices`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_trip` (`id_trip`);

--
-- Indexes for table `tbl_trips`
--
ALTER TABLE `tbl_trips`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_destination` (`id_destination`);

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
  MODIFY `id_booking` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `tbl_destinations`
--
ALTER TABLE `tbl_destinations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `tbl_prices`
--
ALTER TABLE `tbl_prices`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `tbl_trips`
--
ALTER TABLE `tbl_trips`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

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
  ADD CONSTRAINT `tbl_bookings_ibfk_4` FOREIGN KEY (`id_prices`) REFERENCES `tbl_prices` (`id`),
  ADD CONSTRAINT `tbl_bookings_ibfk_6` FOREIGN KEY (`id_trip`) REFERENCES `tbl_trips` (`id`),
  ADD CONSTRAINT `tbl_bookings_ibfk_7` FOREIGN KEY (`id_destinations`) REFERENCES `tbl_destinations` (`id`);

--
-- Constraints for table `tbl_prices`
--
ALTER TABLE `tbl_prices`
  ADD CONSTRAINT `tbl_prices_ibfk_1` FOREIGN KEY (`id_trip`) REFERENCES `tbl_trips` (`id`);

--
-- Constraints for table `tbl_trips`
--
ALTER TABLE `tbl_trips`
  ADD CONSTRAINT `tbl_trips_ibfk_1` FOREIGN KEY (`id_destination`) REFERENCES `tbl_destinations` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
