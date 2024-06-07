-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 07, 2024 at 03:20 PM
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
  `email` varchar(225) NOT NULL,
  `booking_date` date NOT NULL,
  `status` tinyint(4) DEFAULT 0 COMMENT '0 = Processing, \r\n1 = Delivered, \r\n2 = Cancelled',
  `payment` varchar(225) NOT NULL,
  `transfer_proof` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_bookings`
--

INSERT INTO `tbl_bookings` (`id_booking`, `id_destinations`, `id_user`, `name`, `phone`, `email`, `booking_date`, `status`, `payment`, `transfer_proof`) VALUES
(2, 1, 15, 'Alvaro', '081234567890', 'alvaro@example.com', '2024-12-31', 1, 'Gopay', '1'),
(3, 1, 12, 'John Doe', '081234567890', 'john.doe@example.com', '2023-06-01', 0, 'bank transfer', 'transfer_proof\\transfer_proof_1717733274598.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_destinations`
--

CREATE TABLE `tbl_destinations` (
  `id_destination` int(11) NOT NULL,
  `destination_name` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL,
  `price` double NOT NULL,
  `duration` varchar(225) NOT NULL,
  `trip_type` varchar(50) NOT NULL COMMENT 'Open Trip',
  `time` varchar(225) NOT NULL COMMENT 'Kapan Saja',
  `equipment_suggestions` text DEFAULT NULL,
  `description` text NOT NULL,
  `image` text NOT NULL,
  `status` tinyint(4) DEFAULT 0 COMMENT '0 = draft , 1 = published'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_destinations`
--

INSERT INTO `tbl_destinations` (`id_destination`, `destination_name`, `location`, `price`, `duration`, `trip_type`, `time`, `equipment_suggestions`, `description`, `image`, `status`) VALUES
(1, 'a', 'a', 900000, 'a', 'a', 'a', 'a,a,a,a,a,a,a,a,a,a', 'affsfdsxzcxvsd', 'asfcfdvrerfgfdgbfbdf', 0);

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
(14, 'frieren', '081309005612', 'Jl. sousou no frieren No.123, Jepang', 'frieren@gmail.com', '$2b$11$7ygyEp3YKnsU/MM32JFh8.fZFDQUdhBesHVR9R/GOcmMVyi/NkQTa', 1),
(15, 'Alvaro', '081234567890', 'Jl. Merdeka No.123, Jakarta', 'alvaro@example.com', '$2b$11$Tk9cUUCtKbiQ1yBk35s.0Ol0AHDU6db9RHeRFfMcgLn//RYXnoZvy', 0);

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
-- Indexes for table `tbl_destinations`
--
ALTER TABLE `tbl_destinations`
  ADD PRIMARY KEY (`id_destination`);

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
  MODIFY `id_booking` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `tbl_destinations`
--
ALTER TABLE `tbl_destinations`
  MODIFY `id_destination` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tbl_trip`
--
ALTER TABLE `tbl_trip`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `tbl_users`
--
ALTER TABLE `tbl_users`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tbl_bookings`
--
ALTER TABLE `tbl_bookings`
  ADD CONSTRAINT `tbl_bookings_ibfk_2` FOREIGN KEY (`id_user`) REFERENCES `tbl_users` (`id_user`),
  ADD CONSTRAINT `tbl_bookings_ibfk_3` FOREIGN KEY (`id_destinations`) REFERENCES `tbl_trip` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
