-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 08, 2026 at 04:05 PM
-- Server version: 8.0.39
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `fastfood_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `dishes`
--

CREATE TABLE `dishes` (
  `dish_id` int NOT NULL,
  `dish_cost` double DEFAULT NULL,
  `dish_name` varchar(255) DEFAULT NULL,
  `quantity` int NOT NULL,
  `image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `dishes`
--

INSERT INTO `dishes` (`dish_id`, `dish_cost`, `dish_name`, `quantity`, `image`) VALUES
(1, 600, 'Burger', 10, '1772898425379_burger.jpg'),
(2, 500, 'Shawarma', 10, '1772896887204_shawarma.jpg'),
(3, 600, 'pizza', 10, '1772896953227_pizza.jpg'),
(4, 450, 'Fries', 10, '1772896990767_fries.jpg'),
(5, 450, 'Submarine', 10, '1772897034026_submarine.jpg'),
(6, 250, 'Tacos', 10, '1772897673141_tacos.jpg'),
(7, 340, 'Sliders', 10, '1772897709699_sliders.jpg'),
(8, 250, 'Bagles', 10, '1772898483101_bagel.jpg'),
(9, 340, 'Sandwitches', 10, '1772897797296_sandwitches.jpg'),
(11, 400, 'Wraps', 10, '1772897869948_wraps.jpg'),
(12, 300, 'Nuggets', 10, '1772897906367_nuggets.jpg'),
(13, 600, 'Steak', 10, '1772897944135_steak.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `order_id_seq`
--

CREATE TABLE `order_id_seq` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `order_id_seq`
--

INSERT INTO `order_id_seq` (`next_val`) VALUES
(1001);

-- --------------------------------------------------------

--
-- Table structure for table `resturant_order_details`
--

CREATE TABLE `resturant_order_details` (
  `order_id` bigint NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `customer_name` varchar(255) DEFAULT NULL,
  `dishes_details` varchar(255) DEFAULT NULL,
  `timestamp` varchar(255) DEFAULT NULL,
  `payment_method` varchar(255) DEFAULT NULL,
  `phone_number` varchar(255) DEFAULT NULL,
  `total_amount` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `dishes`
--
ALTER TABLE `dishes`
  ADD PRIMARY KEY (`dish_id`);

--
-- Indexes for table `resturant_order_details`
--
ALTER TABLE `resturant_order_details`
  ADD PRIMARY KEY (`order_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `dishes`
--
ALTER TABLE `dishes`
  MODIFY `dish_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
