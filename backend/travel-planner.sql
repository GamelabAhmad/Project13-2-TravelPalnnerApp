-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 03, 2024 at 10:48 AM
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
  `transfer_proof` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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

-- --------------------------------------------------------

--
-- Table structure for table `tbl_users`
--

CREATE TABLE `tbl_users` (
  `id_user` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` tinyint(4) DEFAULT 0 COMMENT '0 = user , 1 = admin'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_bookings`
--
ALTER TABLE `tbl_bookings`
  ADD PRIMARY KEY (`id_booking`),
  ADD KEY `destination_id` (`id_destinations`),
  ADD KEY `id_user` (`id_user`);

--
-- Indexes for table `tbl_destinations`
--
ALTER TABLE `tbl_destinations`
  ADD PRIMARY KEY (`id_destination`);

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
  MODIFY `id_booking` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_destinations`
--
ALTER TABLE `tbl_destinations`
  MODIFY `id_destination` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_users`
--
ALTER TABLE `tbl_users`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tbl_bookings`
--
ALTER TABLE `tbl_bookings`
  ADD CONSTRAINT `tbl_bookings_ibfk_1` FOREIGN KEY (`id_destinations`) REFERENCES `tbl_destinations` (`id_destination`),
  ADD CONSTRAINT `tbl_bookings_ibfk_2` FOREIGN KEY (`id_user`) REFERENCES `tbl_users` (`id_user`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
