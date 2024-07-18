-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jul 16, 2024 at 09:38 AM
-- Server version: 10.11.8-MariaDB-cll-lve
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `u534462265_crm`
--

-- --------------------------------------------------------

--
-- Table structure for table `api_logs`
--

CREATE TABLE `api_logs` (
  `log_id` int(11) NOT NULL,
  `api_hit_time` datetime DEFAULT NULL,
  `start_date` datetime DEFAULT NULL,
  `end_date` datetime DEFAULT NULL,
  `count` varchar(100) DEFAULT NULL,
  `res_code` varchar(50) DEFAULT NULL,
  `message` varchar(10000) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `api_logs`
--

INSERT INTO `api_logs` (`log_id`, `api_hit_time`, `start_date`, `end_date`, `count`, `res_code`, `message`, `created_at`, `updated_at`) VALUES
(1, '2024-05-10 10:38:58', '2024-05-10 00:00:00', '2024-05-10 00:00:00', '11', '200', 'Success. 11 leads were returned for this API request.', '2024-05-10 10:38:58', NULL),
(2, '2024-05-10 10:41:10', '2024-05-10 03:30:00', '2024-05-10 15:30:00', '0', '429', 'It is advised to hit this API once in every 5 minutes,but it seems that you have crossed this limit. Please try again after 5 minutes.', '2024-05-10 10:41:10', NULL),
(3, '2024-05-10 10:41:11', '2024-05-10 03:30:00', '2024-05-10 15:30:00', '0', '429', 'It is advised to hit this API once in every 5 minutes,but it seems that you have crossed this limit. Please try again after 5 minutes.', '2024-05-10 10:41:11', NULL),
(4, '2024-05-10 10:41:14', '2024-05-10 03:30:00', '2024-05-10 15:30:00', '0', '429', 'It is advised to hit this API once in every 5 minutes,but it seems that you have crossed this limit. Please try again after 5 minutes.', '2024-05-10 10:41:14', NULL),
(5, '2024-05-10 10:41:14', '2024-05-10 03:30:00', '2024-05-10 15:30:00', '0', '429', 'It is advised to hit this API once in every 5 minutes,but it seems that you have crossed this limit. Please try again after 5 minutes.', '2024-05-10 10:41:14', NULL),
(6, '2024-05-10 10:41:15', '2024-05-10 03:30:00', '2024-05-10 15:30:00', '0', '429', 'It is advised to hit this API once in every 5 minutes,but it seems that you have crossed this limit. Please try again after 5 minutes.', '2024-05-10 10:41:15', NULL),
(7, '2024-05-10 10:56:24', '2024-05-09 22:00:00', '2024-05-10 10:00:00', '1', '200', 'Success. 1 leads were returned for this API request.', '2024-05-10 10:56:24', NULL),
(8, '2024-05-10 10:58:16', '2024-05-09 22:00:00', '2024-05-10 10:00:00', '0', '429', 'It is advised to hit this API once in every 5 minutes,but it seems that you have crossed this limit. Please try again after 5 minutes.', '2024-05-10 10:58:16', NULL),
(9, '2024-05-10 10:58:17', '2024-05-09 22:00:00', '2024-05-10 10:00:00', '0', '429', 'It is advised to hit this API once in every 5 minutes,but it seems that you have crossed this limit. Please try again after 5 minutes.', '2024-05-10 10:58:17', NULL),
(10, '2024-05-10 10:58:17', '2024-05-09 22:00:00', '2024-05-10 10:00:00', '0', '429', 'It is advised to hit this API once in every 5 minutes,but it seems that you have crossed this limit. Please try again after 5 minutes.', '2024-05-10 10:58:17', NULL),
(11, '2024-05-10 10:58:17', '2024-05-09 22:00:00', '2024-05-10 10:00:00', '0', '429', 'It is advised to hit this API once in every 5 minutes,but it seems that you have crossed this limit. Please try again after 5 minutes.', '2024-05-10 10:58:17', NULL),
(12, '2024-05-10 10:58:17', '2024-05-09 22:00:00', '2024-05-10 10:00:00', '0', '429', 'It is advised to hit this API once in every 5 minutes,but it seems that you have crossed this limit. Please try again after 5 minutes.', '2024-05-10 10:58:17', NULL),
(13, '2024-05-10 11:14:02', '2024-05-09 22:00:00', '2024-05-10 10:00:00', '1', '200', 'Success. 1 leads were returned for this API request.', '2024-05-10 11:14:02', NULL),
(14, '2024-05-10 11:14:02', '2024-05-09 22:00:00', '2024-05-10 10:00:00', '0', '429', 'It is advised to hit this API once in every 5 minutes,but it seems that you have crossed this limit. Please try again after 5 minutes.', '2024-05-10 11:14:02', NULL),
(15, '2024-05-10 11:14:47', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0', '400', 'Date format used in API URL is incorrect. Ideally end_time should be greater than start_time and in proper\n					format.You can use the following date formats: 1) Date format (DD-MON-YYYY format) e.g. 25-JAN-2022. 2) Timestamp format\n					(DD-MM-YYYY HH:MM:SS) e.g. 25-01-2022 16:30:00. Kindly refer to CRM Integration doc for more details.', '2024-05-10 11:14:47', NULL),
(16, '2024-05-10 11:14:47', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0', '400', 'Date format used in API URL is incorrect. Ideally end_time should be greater than start_time and in proper\n					format.You can use the following date formats: 1) Date format (DD-MON-YYYY format) e.g. 25-JAN-2022. 2) Timestamp format\n					(DD-MM-YYYY HH:MM:SS) e.g. 25-01-2022 16:30:00. Kindly refer to CRM Integration doc for more details.', '2024-05-10 11:14:47', NULL),
(17, '2024-05-10 11:15:04', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0', '400', 'Date format used in API URL is incorrect. Ideally end_time should be greater than start_time and in proper\n					format.You can use the following date formats: 1) Date format (DD-MON-YYYY format) e.g. 25-JAN-2022. 2) Timestamp format\n					(DD-MM-YYYY HH:MM:SS) e.g. 25-01-2022 16:30:00. Kindly refer to CRM Integration doc for more details.', '2024-05-10 11:15:04', NULL),
(18, '2024-05-10 11:15:04', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0', '400', 'Date format used in API URL is incorrect. Ideally end_time should be greater than start_time and in proper\n					format.You can use the following date formats: 1) Date format (DD-MON-YYYY format) e.g. 25-JAN-2022. 2) Timestamp format\n					(DD-MM-YYYY HH:MM:SS) e.g. 25-01-2022 16:30:00. Kindly refer to CRM Integration doc for more details.', '2024-05-10 11:15:04', NULL),
(19, '2024-05-10 11:15:06', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0', '400', 'Date format used in API URL is incorrect. Ideally end_time should be greater than start_time and in proper\n					format.You can use the following date formats: 1) Date format (DD-MON-YYYY format) e.g. 25-JAN-2022. 2) Timestamp format\n					(DD-MM-YYYY HH:MM:SS) e.g. 25-01-2022 16:30:00. Kindly refer to CRM Integration doc for more details.', '2024-05-10 11:15:06', NULL),
(20, '2024-05-10 11:15:06', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0', '400', 'Date format used in API URL is incorrect. Ideally end_time should be greater than start_time and in proper\n					format.You can use the following date formats: 1) Date format (DD-MON-YYYY format) e.g. 25-JAN-2022. 2) Timestamp format\n					(DD-MM-YYYY HH:MM:SS) e.g. 25-01-2022 16:30:00. Kindly refer to CRM Integration doc for more details.', '2024-05-10 11:15:06', NULL),
(21, '2024-05-10 11:15:15', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0', '400', 'Date format used in API URL is incorrect. Ideally end_time should be greater than start_time and in proper\n					format.You can use the following date formats: 1) Date format (DD-MON-YYYY format) e.g. 25-JAN-2022. 2) Timestamp format\n					(DD-MM-YYYY HH:MM:SS) e.g. 25-01-2022 16:30:00. Kindly refer to CRM Integration doc for more details.', '2024-05-10 11:15:15', NULL),
(22, '2024-05-10 11:33:13', '2024-05-09 22:00:00', '2024-05-10 10:00:00', '0', '429', 'It is advised to hit this API once in every 5 minutes,but it seems that you have crossed this limit. Please try again after 5 minutes.', '2024-05-10 11:33:13', NULL),
(23, '2024-05-10 11:33:13', '2024-05-09 22:00:00', '2024-05-10 10:00:00', '0', '429', 'It is advised to hit this API once in every 5 minutes,but it seems that you have crossed this limit. Please try again after 5 minutes.', '2024-05-10 11:33:13', NULL),
(24, '2024-05-10 11:39:55', '2024-05-09 22:00:00', '2024-05-10 10:00:00', '1', '200', 'Success. 1 leads were returned for this API request.', '2024-05-10 11:39:55', NULL),
(25, '2024-05-10 11:39:55', '2024-05-09 22:00:00', '2024-05-10 10:00:00', '0', '429', 'It is advised to hit this API once in every 5 minutes,but it seems that you have crossed this limit. Please try again after 5 minutes.', '2024-05-10 11:39:55', NULL),
(26, '2024-05-10 11:45:54', '2024-05-09 22:00:00', '2024-05-10 10:00:00', '1', '200', 'Success. 1 leads were returned for this API request.', '2024-05-10 11:45:54', NULL),
(27, '2024-05-10 11:45:54', '2024-05-09 22:00:00', '2024-05-10 10:00:00', '0', '429', 'It is advised to hit this API once in every 5 minutes,but it seems that you have crossed this limit. Please try again after 5 minutes.', '2024-05-10 11:45:54', NULL),
(28, '2024-05-10 11:53:23', '2024-05-09 22:00:00', '2024-05-10 10:00:00', '1', '200', 'Success. 1 leads were returned for this API request.', '2024-05-10 11:53:23', NULL),
(29, '2024-05-10 11:53:23', '2024-05-09 22:00:00', '2024-05-10 10:00:00', '0', '429', 'It is advised to hit this API once in every 5 minutes,but it seems that you have crossed this limit. Please try again after 5 minutes.', '2024-05-10 11:53:23', NULL),
(30, '2024-05-10 11:54:50', '2024-05-09 22:00:00', '2024-05-10 10:00:00', '0', '429', 'It is advised to hit this API once in every 5 minutes,but it seems that you have crossed this limit. Please try again after 5 minutes.', '2024-05-10 11:54:50', NULL),
(31, '2024-05-10 12:46:58', '2024-05-08 22:00:00', '2024-05-10 10:00:00', '31', '200', 'Success. 31 leads were returned for this API request.', '2024-05-10 12:46:58', NULL),
(32, '2024-05-10 13:02:47', '2024-05-07 22:00:00', '2024-05-10 10:00:00', '67', '200', 'Success. 67 leads were returned for this API request.', '2024-05-10 13:02:47', NULL),
(33, '2024-05-10 13:21:36', '2024-05-07 22:00:00', '2024-05-10 10:00:00', '67', '200', 'Success. 67 leads were returned for this API request.', '2024-05-10 13:21:36', NULL),
(34, '2024-05-10 13:26:39', '2024-05-07 22:00:00', '2024-05-10 10:00:00', '67', '200', 'Success. 67 leads were returned for this API request.', '2024-05-10 13:26:39', NULL),
(35, '2024-05-10 13:31:46', '2024-05-07 22:00:00', '2024-05-10 10:00:00', '67', '200', 'Success. 67 leads were returned for this API request.', '2024-05-10 13:31:46', NULL),
(36, '2024-05-10 13:40:55', '2024-05-07 22:00:00', '2024-05-10 10:00:00', '67', '200', 'Success. 67 leads were returned for this API request.', '2024-05-10 13:40:55', NULL),
(37, '2024-05-10 13:46:04', '2024-05-07 22:00:00', '2024-05-10 10:00:00', '67', '200', 'Success. 67 leads were returned for this API request.', '2024-05-10 13:46:04', NULL),
(38, '2024-05-10 13:59:37', '2024-05-07 22:00:00', '2024-05-10 10:00:00', '0', '429', 'It is advised to hit this API once in every 5 minutes,but it seems that you have crossed this limit. Please try again after 5 minutes.', '2024-05-10 13:59:37', NULL),
(39, '2024-05-10 14:05:12', '2024-05-07 22:00:00', '2024-05-10 10:00:00', '67', '200', 'Success. 67 leads were returned for this API request.', '2024-05-10 14:05:12', NULL),
(40, '2024-05-10 14:42:19', '2024-05-07 22:00:00', '2024-05-10 10:00:00', '67', '200', 'Success. 67 leads were returned for this API request.', '2024-05-10 14:42:19', NULL),
(41, '2024-05-10 15:08:52', '2024-05-07 22:00:00', '2024-05-10 10:00:00', '67', '200', 'Success. 67 leads were returned for this API request.', '2024-05-10 15:08:52', NULL),
(42, '2024-05-10 16:18:46', '2024-05-09 22:00:00', '2024-05-10 10:00:00', '0', '429', 'It is advised to hit this API once in every 5 minutes,but it seems that you have crossed this limit. Please try again after 5 minutes.', '2024-05-10 16:18:46', NULL),
(43, '2024-05-10 16:18:46', '2024-05-09 22:00:00', '2024-05-10 10:00:00', '1', '200', 'Success. 1 leads were returned for this API request.', '2024-05-10 16:18:46', NULL),
(44, '2024-05-10 16:26:53', '2024-05-09 22:00:00', '2024-05-10 10:00:00', '1', '200', 'Success. 1 leads were returned for this API request.', '2024-05-10 16:26:53', NULL),
(45, '2024-05-10 16:39:06', '2024-05-09 22:00:00', '2024-05-10 10:00:00', '1', '200', 'Success. 1 leads were returned for this API request.', '2024-05-10 16:39:06', NULL),
(46, '2024-05-10 16:59:04', '2024-05-01 00:00:00', '2024-05-03 00:00:00', '118', '200', 'Success. 118 leads were returned for this API request.', '2024-05-10 16:59:04', NULL),
(47, '2024-05-10 17:10:07', '2024-05-09 22:00:00', '2024-05-10 10:00:00', '1', '200', 'Success. 1 leads were returned for this API request.', '2024-05-10 17:10:07', NULL),
(48, '2024-05-10 17:15:14', '2024-05-09 22:00:00', '2024-05-10 10:00:00', '1', '200', 'Success. 1 leads were returned for this API request.', '2024-05-10 17:15:14', NULL),
(49, '2024-05-10 17:21:33', '2024-05-01 00:00:00', '2024-05-03 00:00:00', '118', '200', 'Success. 118 leads were returned for this API request.', '2024-05-10 17:21:33', NULL),
(50, '2024-05-10 17:30:30', '2024-05-09 22:00:00', '2024-05-10 10:00:00', '1', '200', 'Success. 1 leads were returned for this API request.', '2024-05-10 17:30:30', NULL),
(51, '2024-05-10 17:43:48', '2024-05-09 22:00:00', '2024-05-10 10:00:00', '1', '200', 'Success. 1 leads were returned for this API request.', '2024-05-10 17:43:48', NULL),
(52, '2024-05-10 17:53:18', '2024-05-01 00:00:00', '2024-05-03 00:00:00', '118', '200', 'Success. 118 leads were returned for this API request.', '2024-05-10 17:53:18', NULL),
(53, '2024-05-10 18:02:43', '2024-02-01 00:00:00', '2024-02-04 00:00:00', '169', '200', 'Success. 169 leads were returned for this API request.', '2024-05-10 18:02:43', NULL),
(54, '2024-05-10 18:08:59', '2024-05-01 00:00:00', '2024-05-03 00:00:00', '118', '200', 'Success. 118 leads were returned for this API request.', '2024-05-10 18:08:59', NULL),
(55, '2024-05-10 18:15:05', '2024-05-01 00:00:00', '2024-05-03 00:00:00', '118', '200', 'Success. 118 leads were returned for this API request.', '2024-05-10 18:15:05', NULL),
(56, '2024-05-10 18:21:05', '2024-05-07 22:00:00', '2024-05-10 10:00:00', '67', '200', 'Success. 67 leads were returned for this API request.', '2024-05-10 18:21:05', NULL),
(57, '2024-05-11 10:01:18', '2024-05-10 22:00:00', '2024-05-11 10:00:00', '10', '200', 'Success. 10 leads were returned for this API request.', '2024-05-11 10:01:18', NULL),
(58, '2024-05-11 10:06:46', '2024-05-10 22:00:00', '2024-05-11 10:00:00', '10', '200', 'Success. 10 leads were returned for this API request.', '2024-05-11 10:06:46', NULL),
(59, '2024-05-11 10:19:33', '2024-05-10 22:00:00', '2024-05-11 10:00:00', '10', '200', 'Success. 10 leads were returned for this API request.', '2024-05-11 10:19:33', NULL),
(60, '2024-05-11 10:25:35', '2024-05-10 22:00:00', '2024-05-11 10:00:00', '10', '200', 'Success. 10 leads were returned for this API request.', '2024-05-11 10:25:35', NULL),
(61, '2024-05-11 10:31:24', '2024-05-10 22:00:00', '2024-05-11 10:00:00', '10', '200', 'Success. 10 leads were returned for this API request.', '2024-05-11 10:31:24', NULL),
(62, '2024-05-11 10:39:48', '2024-05-10 22:00:00', '2024-05-11 10:00:00', '10', '200', 'Success. 10 leads were returned for this API request.', '2024-05-11 10:39:48', NULL),
(63, '2024-05-11 12:23:16', '2024-05-10 22:00:00', '2024-05-11 10:00:00', '10', '200', 'Success. 10 leads were returned for this API request.', '2024-05-11 12:23:16', NULL),
(64, '2024-05-11 13:09:34', '2024-05-01 00:00:00', '2024-05-03 00:00:00', '118', '200', 'Success. 118 leads were returned for this API request.', '2024-05-11 13:09:34', NULL),
(65, '2024-05-11 13:18:46', '2024-05-01 00:00:00', '2024-05-04 00:00:00', '153', '200', 'Success. 153 leads were returned for this API request.', '2024-05-11 13:18:46', NULL),
(66, '2024-05-11 14:44:18', '2024-05-01 00:00:00', '2024-05-04 00:00:00', '153', '200', 'Success. 153 leads were returned for this API request.', '2024-05-11 14:44:18', NULL),
(67, '2024-05-11 14:50:11', '2024-05-01 00:00:00', '2024-05-04 00:00:00', '153', '200', 'Success. 153 leads were returned for this API request.', '2024-05-11 14:50:11', NULL),
(68, '2024-05-11 15:09:35', '2024-05-10 22:00:00', '2024-05-11 10:00:00', '10', '200', 'Success. 10 leads were returned for this API request.', '2024-05-11 15:09:35', NULL),
(69, '2024-05-11 16:31:23', '2024-05-10 22:00:00', '2024-05-11 10:00:00', '10', '200', 'Success. 10 leads were returned for this API request.', '2024-05-11 16:31:23', NULL),
(70, '2024-05-13 10:35:38', '2024-05-12 22:00:00', '2024-05-13 10:00:00', '3', '200', 'Success. 3 leads were returned for this API request.', '2024-05-13 10:35:38', NULL),
(71, '2024-05-13 10:53:06', '2024-05-12 22:00:00', '2024-05-13 10:00:00', '3', '200', 'Success. 3 leads were returned for this API request.', '2024-05-13 10:53:06', NULL),
(72, '2024-05-15 14:07:55', '2024-05-14 22:00:00', '2024-05-15 10:00:00', '8', '200', 'Success. 8 leads were returned for this API request.', '2024-05-15 14:07:55', NULL),
(73, '2024-05-15 18:14:13', '2024-05-14 22:00:00', '2024-05-15 10:00:00', '8', '200', 'Success. 8 leads were returned for this API request.', '2024-05-15 18:14:13', NULL),
(74, '2024-05-16 10:21:18', '2024-05-15 22:00:00', '2024-05-16 10:00:00', '11', '200', 'Success. 11 leads were returned for this API request.', '2024-05-16 10:21:18', NULL),
(75, '2024-05-16 18:09:06', '2024-05-15 22:00:00', '2024-05-16 10:00:00', '11', '200', 'Success. 11 leads were returned for this API request.', '2024-05-16 18:09:06', NULL),
(76, '2024-05-17 13:16:12', '2024-05-16 22:00:00', '2024-05-17 10:00:00', '1', '200', 'Success. 1 leads were returned for this API request.', '2024-05-17 13:16:12', NULL),
(77, '2024-05-17 13:24:22', '2024-05-16 22:00:00', '2024-05-17 10:00:00', '1', '200', 'Success. 1 leads were returned for this API request.', '2024-05-17 13:24:22', NULL),
(78, '2024-05-17 16:58:23', '2024-05-16 22:00:00', '2024-05-17 10:00:00', '1', '200', 'Success. 1 leads were returned for this API request.', '2024-05-17 16:58:23', NULL),
(79, '2024-05-19 00:09:21', '2024-05-18 22:00:00', '2024-05-19 10:00:00', '3', '200', 'Success. 3 leads were returned for this API request.', '2024-05-19 00:09:21', NULL),
(80, '2024-05-23 14:44:58', '2024-05-22 22:00:00', '2024-05-23 10:00:00', '17', '200', 'Success. 17 leads were returned for this API request.', '2024-05-23 14:44:58', NULL),
(81, '2024-05-27 05:45:40', '2024-05-25 18:30:00', '2024-05-26 18:30:00', '18', '200', 'Success. 18 leads were returned for this API request.', '2024-05-27 05:45:40', NULL),
(82, '2024-05-27 09:55:06', '2024-05-26 22:00:00', '2024-05-27 10:00:00', '12', '200', 'Success. 12 leads were returned for this API request.', '2024-05-27 09:55:06', NULL),
(83, '2024-05-27 10:01:14', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0', '400', 'Date format used in API URL is incorrect. Ideally end_time should be greater than start_time and in proper\n					format.You can use the following date formats: 1) Date format (DD-MON-YYYY format) e.g. 25-JAN-2022. 2) Timestamp format\n					(DD-MM-YYYY HH:MM:SS) e.g. 25-01-2022 16:30:00. Kindly refer to CRM Integration doc for more details.', '2024-05-27 10:01:14', NULL),
(84, '2024-05-27 10:10:04', '2024-05-26 22:00:00', '2024-05-27 10:00:00', '12', '200', 'Success. 12 leads were returned for this API request.', '2024-05-27 10:10:04', NULL),
(85, '2024-05-27 10:33:34', '2024-05-26 22:00:00', '2024-05-27 10:00:00', '0', '429', 'It is advised to hit this API once in every 5 minutes,but it seems that you have crossed this limit. Please try again after 5 minutes.', '2024-05-27 10:33:34', NULL),
(86, '2024-05-27 10:40:26', '2024-05-26 22:00:00', '2024-05-27 10:00:00', '12', '200', 'Success. 12 leads were returned for this API request.', '2024-05-27 10:40:26', NULL),
(87, '2024-05-27 11:05:59', '2024-05-26 22:00:00', '2024-05-27 10:00:00', '12', '200', 'Success. 12 leads were returned for this API request.', '2024-05-27 11:05:59', NULL),
(88, '2024-06-10 05:36:11', '2024-06-09 22:00:00', '2024-06-10 10:00:00', '5', '200', 'Success. 5 leads were returned for this API request.', '2024-06-10 05:36:11', NULL),
(89, '2024-06-11 12:47:03', '2024-06-10 22:00:00', '2024-06-11 10:00:00', '4', '200', 'Success. 4 leads were returned for this API request.', '2024-06-11 12:47:03', NULL),
(90, '2024-06-11 12:57:38', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0', '400', 'Date format used in API URL is incorrect. Ideally end_time should be greater than start_time and in proper\n					format.You can use the following date formats: 1) Date format (DD-MON-YYYY format) e.g. 25-JAN-2022. 2) Timestamp format\n					(DD-MM-YYYY HH:MM:SS) e.g. 25-01-2022 16:30:00. Kindly refer to CRM Integration doc for more details.', '2024-06-11 12:57:38', NULL),
(91, '2024-06-11 13:02:57', '2024-06-10 22:00:00', '2024-06-11 10:00:00', '4', '200', 'Success. 4 leads were returned for this API request.', '2024-06-11 13:02:57', NULL),
(92, '2024-06-11 13:09:17', '2024-06-10 11:30:00', '2024-06-11 06:30:00', '25', '200', 'Success. 25 leads were returned for this API request.', '2024-06-11 13:09:17', NULL),
(93, '2024-06-11 13:18:05', '2024-06-10 22:00:00', '2024-06-11 10:00:00', '4', '200', 'Success. 4 leads were returned for this API request.', '2024-06-11 13:18:05', NULL),
(94, '2024-06-11 13:31:08', '2024-06-08 18:30:00', '2024-06-10 18:30:00', '58', '200', 'Success. 58 leads were returned for this API request.', '2024-06-11 13:31:08', NULL),
(95, '2024-06-12 06:51:50', '2024-06-10 18:30:00', '2024-06-11 18:30:00', '35', '200', 'Success. 35 leads were returned for this API request.', '2024-06-12 06:51:50', NULL),
(96, '2024-06-12 07:13:52', '2024-06-10 18:30:00', '2024-06-11 18:30:00', '35', '200', 'Success. 35 leads were returned for this API request.', '2024-06-12 07:13:52', NULL),
(97, '2024-06-12 07:33:42', '2024-06-11 22:00:00', '2024-06-12 10:00:00', '11', '200', 'Success. 11 leads were returned for this API request.', '2024-06-12 07:33:42', NULL),
(98, '2024-06-12 09:23:26', '2024-06-11 22:00:00', '2024-06-12 10:00:00', '11', '200', 'Success. 11 leads were returned for this API request.', '2024-06-12 09:23:26', NULL),
(99, '2024-06-12 10:02:32', '2024-06-11 22:00:00', '2024-06-12 10:00:00', '11', '200', 'Success. 11 leads were returned for this API request.', '2024-06-12 10:02:32', NULL),
(100, '2024-06-12 10:15:24', '2024-06-11 22:00:00', '2024-06-12 10:00:00', '11', '200', 'Success. 11 leads were returned for this API request.', '2024-06-12 10:15:24', NULL),
(101, '2024-06-14 05:14:49', '2024-06-13 22:00:00', '2024-06-14 10:00:00', '10', '200', 'Success. 10 leads were returned for this API request.', '2024-06-14 05:14:49', NULL),
(102, '2024-07-16 11:46:08', '2024-07-15 22:00:00', '2024-07-16 10:00:00', '14', '200', 'Success. 14 leads were returned for this API request.', '2024-07-16 11:46:08', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `cust_purch_logs`
--

CREATE TABLE `cust_purch_logs` (
  `cust_purch_id` int(11) NOT NULL,
  `cust_id` int(11) DEFAULT NULL,
  `pro_id` int(11) DEFAULT NULL,
  `quantity` varchar(100) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `payment_type` varchar(100) DEFAULT NULL,
  `advance` decimal(10,2) DEFAULT NULL,
  `balance` decimal(10,2) DEFAULT NULL,
  `total` decimal(10,2) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cust_purch_logs`
--

INSERT INTO `cust_purch_logs` (`cust_purch_id`, `cust_id`, `pro_id`, `quantity`, `price`, `payment_type`, `advance`, `balance`, `total`, `created_at`, `updated_at`) VALUES
(1, 1, 2, '2', 100.00, '', 200.00, 0.00, 200.00, '2024-05-23 13:16:22', '2024-05-18 15:56:09'),
(3, 1, 3, '4', 2000.00, 'partial', 10000.00, 0.00, 8000.00, '2024-05-23 13:16:22', '2024-05-16 18:12:46'),
(7, 1, 3, '2', 200.00, 'partial', 400.00, 0.00, 400.00, '2024-05-23 13:16:22', '2024-05-18 15:55:57'),
(8, 6, 6, '5', 500.00, 'full', 2500.00, 0.00, 2500.00, '2024-05-23 13:16:22', NULL),
(9, 7, 7, '10', 800.00, 'partial', 5000.00, 3000.00, 8000.00, '2024-05-18 11:01:37', NULL),
(10, 6, 2, '10', 1500.00, 'partial', 10000.00, 5000.00, 15000.00, '2024-05-18 11:02:59', NULL),
(11, 7, 8, '2', 10000.00, 'partial', 10000.00, 10000.00, 20000.00, '2024-05-18 11:04:05', '2024-05-18 11:04:58'),
(12, 6, 3, '2', 500.00, 'partial', 1000.00, 0.00, 1000.00, '2024-05-18 14:02:37', NULL),
(13, 6, 3, '2', 500.00, 'partial', 500.00, 500.00, 1000.00, '2024-05-27 10:38:41', NULL),
(14, 9, 3, '2', 1000.00, 'partial', 1000.00, 1000.00, 2000.00, '2024-05-27 10:45:02', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `department`
--

CREATE TABLE `department` (
  `dept_id` int(7) NOT NULL,
  `dept_name` varchar(50) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `department`
--

INSERT INTO `department` (`dept_id`, `dept_name`, `created_at`, `updated_at`) VALUES
(1, 'Sales', '2024-05-03 05:10:40', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `emp_id` int(7) NOT NULL,
  `dept_id` int(7) NOT NULL,
  `role_id` int(7) NOT NULL,
  `lang_id` int(7) DEFAULT NULL,
  `emp_name` varchar(50) DEFAULT NULL,
  `emp_email` varchar(200) DEFAULT NULL,
  `emp_mobile` varchar(20) DEFAULT NULL,
  `emp_img` varchar(1000) DEFAULT NULL,
  `state` varchar(100) DEFAULT NULL,
  `dist` varchar(100) DEFAULT NULL,
  `city` varchar(100) DEFAULT NULL,
  `is_active` tinyint(1) DEFAULT 1,
  `hire_date` datetime DEFAULT NULL,
  `resign_date` datetime DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`emp_id`, `dept_id`, `role_id`, `lang_id`, `emp_name`, `emp_email`, `emp_mobile`, `emp_img`, `state`, `dist`, `city`, `is_active`, `hire_date`, `resign_date`, `created_at`, `updated_at`) VALUES
(2, 1, 1, 2, 'Kannan V', 'kannan@gmail.com', '8667326535', NULL, 'Tamil Nadu', 'Tirunelveli', 'Sivagiri', 1, '0000-00-00 00:00:00', NULL, '2024-05-04 13:27:58', '2024-05-17 12:55:50'),
(5, 1, 1, 1, 'Raja V', 'rajavijayan900@gmail.com', '8667326535', NULL, 'Tamil Nadu', 'Tirunelveli', 'Sivagiri', 1, '2024-05-08 00:00:00', NULL, '2024-05-09 10:17:40', NULL),
(6, 1, 1, 1, 'Ajay ', 'rajavijayan900@gmail.com', '8667326535', NULL, 'Tamil Nadu', 'Virudhunagar', 'Seithur', 1, '2024-05-09 00:00:00', NULL, '2024-05-09 11:26:25', NULL),
(10, 1, 1, 1, 'Raja Vijayan', 'rajavijayan900@gmail.com', '8520741085', NULL, 'Tamil Nadu', 'Tirunelveli', 'Sivagiri', 1, '2024-05-09 00:00:00', NULL, '2024-05-09 11:42:45', NULL),
(12, 1, 1, 2, 'Test Data', 'rajavijayan900@gmail.com', '8520741096', NULL, 'Goa', 'North Goa', 'test', 1, '2024-05-17 00:00:00', NULL, '2024-05-17 12:56:28', NULL),
(13, 1, 1, 1, 'Thangameena', 'krishnaindustries51015@gmail.com', '8270333353', NULL, 'Tamil Nadu', 'Coimbatore', 'Coimbatore', 1, '2024-05-01 00:00:00', NULL, '2024-05-27 10:09:24', NULL),
(14, 1, 1, 1, 'ELAKIYA', 'krishnaindustries51015@gmail.com', '8270333363', NULL, 'Tamil Nadu', 'Chennai', 'COIMBATORE', 1, '2024-02-06 00:00:00', NULL, '2024-05-27 10:30:32', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `emp_attendance`
--

CREATE TABLE `emp_attendance` (
  `attendance_id` int(11) NOT NULL,
  `emp_id` int(11) DEFAULT NULL,
  `entry_at` datetime DEFAULT NULL,
  `exit_at` datetime DEFAULT NULL,
  `empIn` tinyint(1) DEFAULT 1,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `emp_attendance`
--

INSERT INTO `emp_attendance` (`attendance_id`, `emp_id`, `entry_at`, `exit_at`, `empIn`, `created_at`, `updated_at`) VALUES
(1, 5, '2024-01-01 08:00:00', '2024-01-01 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(2, 5, '2024-01-02 08:00:00', '2024-01-02 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(3, 5, '2024-01-03 08:00:00', '2024-01-03 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(4, 5, '2024-01-04 08:00:00', '2024-01-04 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(5, 5, '2024-01-05 08:00:00', '2024-01-05 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(6, 5, '2024-01-06 08:00:00', '2024-01-06 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(7, 5, '2024-01-08 08:00:00', '2024-01-08 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(8, 5, '2024-01-09 08:00:00', '2024-01-09 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(9, 5, '2024-01-10 08:00:00', '2024-01-10 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(10, 5, '2024-01-11 08:00:00', '2024-01-11 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(11, 5, '2024-01-12 08:00:00', '2024-01-12 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(12, 5, '2024-01-13 08:00:00', '2024-01-13 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(13, 5, '2024-01-15 08:00:00', '2024-01-15 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(14, 5, '2024-01-16 08:00:00', '2024-01-16 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(15, 5, '2024-01-17 08:00:00', '2024-01-17 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(16, 5, '2024-01-18 08:00:00', '2024-01-18 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(17, 5, '2024-01-19 08:00:00', '2024-01-19 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(18, 5, '2024-01-20 08:00:00', '2024-01-20 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(19, 5, '2024-01-22 08:00:00', '2024-01-22 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(20, 5, '2024-01-23 08:00:00', '2024-01-23 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(21, 5, '2024-01-24 08:00:00', '2024-01-24 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(22, 5, '2024-01-25 08:00:00', '2024-01-25 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(23, 5, '2024-01-26 08:00:00', '2024-01-26 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(24, 5, '2024-01-27 08:00:00', '2024-01-27 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(25, 5, '2024-01-29 08:00:00', '2024-01-29 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(26, 5, '2024-01-30 08:00:00', '2024-01-30 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(27, 5, '2024-01-31 08:00:00', '2024-01-31 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(28, 5, '2024-02-01 08:00:00', '2024-02-01 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(29, 5, '2024-02-02 08:00:00', '2024-02-02 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(30, 5, '2024-02-03 08:00:00', '2024-02-03 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(31, 5, '2024-02-05 08:00:00', '2024-02-05 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(32, 5, '2024-02-06 08:00:00', '2024-02-06 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(33, 5, '2024-02-07 08:00:00', '2024-02-07 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(34, 5, '2024-02-08 08:00:00', '2024-02-08 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(35, 5, '2024-02-09 08:00:00', '2024-02-09 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(36, 5, '2024-02-10 08:00:00', '2024-02-10 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(37, 5, '2024-02-12 08:00:00', '2024-02-12 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(38, 5, '2024-02-13 08:00:00', '2024-02-13 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(39, 5, '2024-02-14 08:00:00', '2024-02-14 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(40, 5, '2024-02-15 08:00:00', '2024-02-15 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(41, 5, '2024-02-16 08:00:00', '2024-02-16 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(42, 5, '2024-02-17 08:00:00', '2024-02-17 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(43, 5, '2024-02-19 08:00:00', '2024-02-19 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(44, 5, '2024-02-20 08:00:00', '2024-02-20 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(45, 5, '2024-02-21 08:00:00', '2024-02-21 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(46, 5, '2024-02-22 08:00:00', '2024-02-22 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(47, 5, '2024-02-23 08:00:00', '2024-02-23 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(48, 5, '2024-02-24 08:00:00', '2024-02-24 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(49, 5, '2024-02-26 08:00:00', '2024-02-26 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(50, 5, '2024-02-27 08:00:00', '2024-02-27 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(51, 5, '2024-02-28 08:00:00', '2024-02-28 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(52, 5, '2024-02-29 08:00:00', '2024-02-29 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(53, 5, '2024-03-01 08:00:00', '2024-03-01 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(54, 5, '2024-03-02 08:00:00', '2024-03-02 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(55, 5, '2024-03-04 08:00:00', '2024-03-04 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(56, 5, '2024-03-05 08:00:00', '2024-03-05 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(57, 5, '2024-03-06 08:00:00', '2024-03-06 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(58, 5, '2024-03-07 08:00:00', '2024-03-07 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(59, 5, '2024-03-08 08:00:00', '2024-03-08 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(60, 5, '2024-03-09 08:00:00', '2024-03-09 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(61, 5, '2024-03-11 08:00:00', '2024-03-11 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(62, 5, '2024-03-12 08:00:00', '2024-03-12 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(63, 5, '2024-03-13 08:00:00', '2024-03-13 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(64, 5, '2024-03-14 08:00:00', '2024-03-14 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(65, 5, '2024-03-15 08:00:00', '2024-03-15 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(66, 5, '2024-03-16 08:00:00', '2024-03-16 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(67, 5, '2024-03-18 08:00:00', '2024-03-18 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(68, 5, '2024-03-19 08:00:00', '2024-03-19 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(69, 5, '2024-03-20 08:00:00', '2024-03-20 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(70, 5, '2024-03-21 08:00:00', '2024-03-21 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(71, 5, '2024-03-22 08:00:00', '2024-03-22 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(72, 5, '2024-03-23 08:00:00', '2024-03-23 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(73, 5, '2024-03-25 08:00:00', '2024-03-25 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(74, 5, '2024-03-26 08:00:00', '2024-03-26 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(75, 5, '2024-03-27 08:00:00', '2024-03-27 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(76, 5, '2024-03-28 08:00:00', '2024-03-28 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(77, 5, '2024-03-29 08:00:00', '2024-03-29 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(78, 5, '2024-03-30 08:00:00', '2024-03-30 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(79, 5, '2024-04-01 08:00:00', '2024-04-01 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(80, 5, '2024-04-02 08:00:00', '2024-04-02 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(81, 5, '2024-04-03 08:00:00', '2024-04-03 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(82, 5, '2024-04-04 08:00:00', '2024-04-04 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(83, 5, '2024-04-05 08:00:00', '2024-04-05 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(84, 5, '2024-04-06 08:00:00', '2024-04-06 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(85, 5, '2024-04-08 08:00:00', '2024-04-08 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(86, 5, '2024-04-09 08:00:00', '2024-04-09 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(87, 5, '2024-04-10 08:00:00', '2024-04-10 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(88, 5, '2024-04-11 08:00:00', '2024-04-11 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(89, 5, '2024-04-12 08:00:00', '2024-04-12 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(90, 5, '2024-04-13 08:00:00', '2024-04-13 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(91, 5, '2024-04-15 08:00:00', '2024-04-15 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(92, 5, '2024-04-16 08:00:00', '2024-04-16 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(93, 5, '2024-04-17 08:00:00', '2024-04-17 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(94, 5, '2024-04-18 08:00:00', '2024-04-18 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(95, 5, '2024-04-19 08:00:00', '2024-04-19 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(96, 5, '2024-04-20 08:00:00', '2024-04-20 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(97, 5, '2024-04-22 08:00:00', '2024-04-22 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(98, 5, '2024-04-23 08:00:00', '2024-04-23 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(99, 5, '2024-04-24 08:00:00', '2024-04-24 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(100, 5, '2024-04-25 08:00:00', '2024-04-25 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(101, 5, '2024-04-26 08:00:00', '2024-04-26 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(102, 5, '2024-04-27 08:00:00', '2024-04-27 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(103, 5, '2024-04-29 08:00:00', '2024-04-29 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(104, 5, '2024-04-30 08:00:00', '2024-04-30 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(105, 5, '2024-05-01 08:00:00', '2024-05-01 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(106, 5, '2024-05-02 08:00:00', '2024-05-02 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(107, 5, '2024-05-03 08:00:00', '2024-05-03 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(108, 5, '2024-05-04 08:00:00', '2024-05-04 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(109, 5, '2024-05-06 08:00:00', '2024-05-06 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(110, 5, '2024-05-07 08:00:00', '2024-05-07 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(111, 5, '2024-05-08 08:00:00', '2024-05-08 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(112, 5, '2024-05-09 08:00:00', '2024-05-09 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(113, 5, '2024-05-10 08:00:00', '2024-05-10 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(114, 5, '2024-05-11 08:00:00', '2024-05-11 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(115, 5, '2024-05-13 08:00:00', '2024-05-13 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(116, 5, '2024-05-14 08:00:00', '2024-05-14 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(117, 5, '2024-05-15 08:00:00', '2024-05-15 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(118, 5, '2024-05-16 08:00:00', '2024-05-16 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(119, 5, '2024-05-17 08:00:00', '2024-05-17 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(120, 5, '2024-05-18 08:00:00', '2024-05-18 17:00:00', 1, '2024-05-18 17:51:57', NULL),
(121, 5, '2024-05-19 00:00:46', '2024-05-19 00:00:58', 1, '2024-05-19 00:00:46', NULL),
(122, 2, '2024-05-23 06:48:41', '2024-05-23 06:49:04', 1, '2024-05-23 06:48:41', NULL),
(123, 14, '2024-05-27 10:32:45', NULL, 1, '2024-05-27 10:32:45', NULL),
(124, 14, '2024-05-28 06:31:36', NULL, 1, '2024-05-28 06:31:36', NULL),
(125, 14, '2024-06-12 05:05:14', NULL, 1, '2024-06-12 05:05:14', NULL),
(126, 14, '2024-06-18 06:41:12', NULL, 1, '2024-06-18 06:41:12', NULL),
(127, 2, '2024-07-16 13:01:12', NULL, 1, '2024-07-16 13:01:12', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `following_leads`
--

CREATE TABLE `following_leads` (
  `follow_id` int(11) NOT NULL,
  `emp_id` int(11) DEFAULT NULL,
  `leads_id` int(11) DEFAULT NULL,
  `leads_name` varchar(50) DEFAULT NULL,
  `leads_mobile` varchar(25) DEFAULT NULL,
  `leads_email` varchar(100) DEFAULT NULL,
  `leads_company` varchar(1000) DEFAULT NULL,
  `leads_address` varchar(2500) DEFAULT NULL,
  `leads_state` varchar(50) DEFAULT NULL,
  `leads_city` varchar(100) DEFAULT NULL,
  `product_name` varchar(1000) DEFAULT NULL,
  `leads_query` mediumtext DEFAULT NULL,
  `remember` varchar(10) DEFAULT NULL,
  `reminder_date` date DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `following_leads`
--

INSERT INTO `following_leads` (`follow_id`, `emp_id`, `leads_id`, `leads_name`, `leads_mobile`, `leads_email`, `leads_company`, `leads_address`, `leads_state`, `leads_city`, `product_name`, `leads_query`, `remember`, `reminder_date`, `created_at`, `updated_at`) VALUES
(1, 5, 827546037, 'Prashant Kumar', '+91-9801086112', 'pra55hantkumar@gmail.com', 'IRUWDP', 'Patna, Bihar,         800023', 'Bihar', 'Patna', 'Electric Vegetable Cutter Machine Commercial', 'Test', 'Yes', '2024-05-27', '2024-05-09 14:01:34', NULL),
(2, 5, 2147483647, 'Ashish', '+91-9881366620', 'gopalashish05@gmail.com', 'luxmi foods', 'Chandigarh, Chandigarh', 'Chandigarh', 'Chandigarh', 'Steel Body Wet Grinder 5 Litre', 'Test', 'Yes', '2024-05-27', '2024-05-09 18:05:56', NULL),
(3, 5, 2147483647, 'Darshan Patel', '+91-9950680182', '', '', 'Khanapur, Karnataka', 'Karnataka', 'Khanapur', 'Mixture Making Machine, Sevai Machine, Sandhagam Machine, Muruku Machine, Pakkoda Machine', 'Test', 'Yes', '2024-05-27', '2024-05-09 18:06:36', NULL),
(4, 5, 2147483647, 'Nandakumar', '+91-6382755695', 'rkdigital75@gmail.com', 'rk studio', 'Coimbatore, Tamil Nadu', 'Tamil Nadu', 'Coimbatore', 'ELETRIC ICE CREAM MACHINE COUNTER TOP', 'For Test', 'Yes', '2024-05-27', '2024-05-09 18:06:56', NULL),
(5, 2, 2147483647, 'Chakkaravarthi S', '+91-8344097977', '', '', 'Arakkonam, Tamil Nadu,         632505', 'Tamil Nadu', 'Arakkonam', 'SS Chicken Feather Cleaning Machine', 'For Test', 'No', '0000-00-00', '2024-05-09 18:07:11', NULL),
(6, 2, 2147483647, 'Sivabalan', '+91-9790716653', 'saisiva00040@gmail.com', 'Anar Foot Fish Massage', 'Chennai, Tamil Nadu', 'Tamil Nadu', 'Chennai', 'ELETRIC ICE CREAM MACHINE COUNTER TOP, 11 - 25 Litre', 'Testing', 'Yes', '2024-05-27', '2024-05-09 19:06:28', NULL),
(7, 5, 2147483647, 'Arul Selvam', '+91-9994499625', 'jackajohnie@gmail.com', '', 'Thoothukudi, Tamil Nadu', 'Tamil Nadu', 'Thoothukudi', 'Cotton Candy Machine', 'For Testing', 'Yes', '2024-05-11', '2024-05-10 17:31:29', NULL),
(8, 2, 2147483647, 'Satya', '+91-9078191959', '', '', 'Jharsuguda, Odisha', 'Odisha', 'Jharsuguda', 'ICE Cube', 'For Test', 'Yes', '2024-05-18', '2024-05-10 18:10:41', NULL),
(9, 5, 2147483647, 'Anil Kumar R', '+91-7892317706', 'anil.tsip07@gmail.com', 'soda juice and center', 'Bengaluru, Karnataka,         560037', 'Karnataka', 'Bengaluru', 'ICE Cubes', 'For Test', 'No', '2024-05-27', '2024-05-11 12:25:38', '2024-05-16 10:10:56'),
(10, 2, 2147483647, 'Tom Shaji', '+61-', 'tom.shaji2645@gmail.com', 'Royal', '', '', '', '', 'For Test', 'Yes', '2024-05-27', '2024-05-11 12:25:56', NULL),
(11, 2, 2147483647, 'Vignesh', '+91-9894303243', 'nnvignesh@gmail.com', 'The Silk Princesss', '2nd Floor F-202, Coimbatore, Tamil Nadu,         641006', 'Tamil Nadu', 'Coimbatore', 'ICE Cubes', 'Testing', 'Yes', '2024-05-13', '2024-05-11 12:26:22', NULL),
(12, 5, 2147483647, 'RAGUPATHI D', '+91-7200769563', '', '', 'Vellore, Tamil Nadu', 'Tamil Nadu', 'Vellore', 'Dry ICE Cubes', 'Test', 'Yes', '2024-05-17', '2024-05-11 12:26:39', NULL),
(13, 2, 828592062, 'Padma Mertei', '+91-6000141293', 'padmad916@gmail.com', '', 'Nagaon, Assam,         782446', 'Assam', 'Nagaon', 'Butter Popcorn Making Machine', 'Test', 'Yes', '2024-05-17', '2024-05-11 12:51:10', NULL),
(14, 5, 2147483647, 'Bejoy', '+966-', 'bejoyanjali@gmail.com', '', '', '', '', 'ELETRIC ICE CREAM MACHINE COUNTER TOP', 'Testing', 'Yes', '2024-05-27', '2024-05-18 13:23:15', NULL),
(15, 5, 828592192, 'Jorawarsinh Bhati', '+91-9925194682', 'rajatest@gmail.com', 'Madhav Rai', 'Surat, Gujarat', 'Gujarat', 'Surat', 'Atta Dough Maker', 'Test', 'Yes', '2024-05-15', '2024-05-18 14:27:06', '2024-05-15 18:54:37'),
(16, 5, 2147483647, 'Ayyar', '+91-9242922343', '', '', 'Chennai, Tamil Nadu', 'Tamil Nadu', 'Chennai', 'K1 Chicken Cutting Machine', 'testing', 'Yes', '2024-05-14', '2024-05-18 10:53:43', NULL),
(17, 5, 831374084, 'Ajith N Alex', '+91-9188032156', 'ajithnalex5@gmail.com', '', 'Thazhakara, Kerala', 'Kerala', 'Thazhakara', 'Vegetable Cutter Machine', 'Test', 'Yes', '2024-05-19', '2024-05-18 18:10:11', '2024-05-19 00:09:11'),
(18, 5, 2147483647, 'Parmod', '+91-7975629481', 'pramodkakkanavar@yahoo.co.in', 'Ankura Group Of Education', '12/ B, Gurudevnagar Rajnagar, Hubli, Karnataka,         580032', 'Karnataka', 'Hubli', 'Commercial Wet Grinder, Capacity: 5 Litre', 'Testing', 'Yes', '2024-05-19', '2024-05-19 00:09:38', NULL),
(19, 5, 2147483647, 'KIRAN KANVAR', '+91-7067153969', 'chitrabhawanrathiyapardeshiram@gmail.com', '', '495683', '', '', 'krishna Chicken Feather Plucking Machine W/O MOTOR', 'CFCM', 'Yes', '2024-05-28', '2024-05-27 10:11:06', '2024-05-27 10:12:05'),
(20, 14, 837459121, 'Gaikwad', '+91-9822218761', 'gaikwadg146@gmail.com', 'TEST', 'Aurangabad, Maharashtra', 'Maharashtra', 'Aurangabad', 'Popcorn Maker Machine', 'TEST', 'Yes', '2024-05-27', '2024-05-27 10:41:44', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `languages`
--

CREATE TABLE `languages` (
  `lang_id` int(10) NOT NULL,
  `language_name` varchar(100) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `languages`
--

INSERT INTO `languages` (`lang_id`, `language_name`, `created_at`, `updated_at`) VALUES
(1, 'Tamil', NULL, NULL),
(2, 'English', NULL, NULL),
(3, 'Kannadam', NULL, NULL),
(4, 'Malayalam', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `pro_id` int(11) NOT NULL,
  `pro_name` varchar(100) DEFAULT NULL,
  `pro_img` varchar(1000) DEFAULT NULL,
  `description` varchar(5000) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`pro_id`, `pro_name`, `pro_img`, `description`, `created_at`, `updated_at`) VALUES
(2, 'Grinder', 'pro_img-1715704013015-211119789', 'Test Grinder', '2024-05-14 21:56:01', '2024-05-18 10:55:30'),
(3, 'Mixer', 'pro_img-1715703967731-711984791', 'Testing Data', '2024-05-14 21:56:07', '2024-05-18 10:54:18'),
(6, 'Kettle', 'pro_img-1716010038683-669957514', 'Test', '2024-05-18 10:57:19', '2024-05-18 10:59:10'),
(7, 'Iron box', 'pro_img-1716010080434-411837371', 'Test', '2024-05-18 10:58:00', '2024-05-18 10:59:16'),
(8, 'Washing machine', 'pro_img-1716010118418-803731210', 'Test', '2024-05-18 10:58:38', '2024-05-18 10:59:22'),
(9, 'Egg Sausage', 'pro_img-1716805086107-491746011', NULL, '2024-05-27 10:18:06', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `pro_specification`
--

CREATE TABLE `pro_specification` (
  `spec_id` int(11) NOT NULL,
  `pro_id` int(11) DEFAULT NULL,
  `spec_name` varchar(500) DEFAULT NULL,
  `spec_data` varchar(1000) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pro_specification`
--

INSERT INTO `pro_specification` (`spec_id`, `pro_id`, `spec_name`, `spec_data`, `created_at`, `updated_at`) VALUES
(10, NULL, NULL, NULL, '2024-05-15 17:07:04', NULL),
(11, NULL, NULL, NULL, '2024-05-15 17:09:52', NULL),
(12, 2, 'asdad', 'asdads', '2024-05-15 17:22:50', NULL),
(13, 2, 'adads', 'adsads', '2024-05-15 17:22:50', NULL),
(14, 2, 'asdasd', 'asdadsa', '2024-05-15 17:22:50', NULL),
(18, 3, 'test', 'test12', '2024-05-15 18:10:05', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `purchase`
--

CREATE TABLE `purchase` (
  `purch_id` int(11) NOT NULL,
  `pro_name` varchar(100) DEFAULT NULL,
  `specification` varchar(100) DEFAULT NULL,
  `purch_address` varchar(10000) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `total` decimal(10,2) DEFAULT NULL,
  `gst` decimal(10,2) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `purchase`
--

INSERT INTO `purchase` (`purch_id`, `pro_name`, `specification`, `purch_address`, `quantity`, `price`, `total`, `gst`, `created_at`, `updated_at`) VALUES
(2, 'Testing', 'Testing', 'Test', 1, 1000.00, 1100.00, 10.00, '2024-05-14 10:52:01', NULL),
(4, 'sadfas', 'asfdas', NULL, 1, 2.00, 2.00, 12.00, '2024-05-13 18:50:00', NULL),
(5, 'sdfsadf', 'sdfsadf', NULL, 12, 12.00, 12.00, 1.00, '2024-05-13 19:05:13', NULL),
(6, 'sdsafdsafds', 'fsdfsfsdf', NULL, 23, 23.00, 23.00, NULL, '2024-05-11 18:26:21', NULL),
(7, 'hfghfghfd', 'vdsgdsfgsd', 'testt', 445, 4323.00, 236.00, 7.00, '2024-05-11 18:26:32', '2024-06-12 10:16:03'),
(8, 'sds', 'sds', NULL, 23, 23.00, 32.00, 20.00, '2024-05-13 18:49:28', NULL),
(9, 'Egg Sausage', 'Electric', 'R.R.Agency', 1, 1500.00, 1800.00, 300.00, '2024-05-27 10:31:11', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE `role` (
  `role_id` int(7) NOT NULL,
  `dept_id` int(7) NOT NULL,
  `role` varchar(100) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `role`
--

INSERT INTO `role` (`role_id`, `dept_id`, `role`, `created_at`, `updated_at`) VALUES
(1, 1, 'Sales Reb', '2024-05-03 05:10:40', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `sales`
--

CREATE TABLE `sales` (
  `sale_id` int(11) NOT NULL,
  `pro_id` int(11) DEFAULT NULL,
  `sale_address` varchar(1000) DEFAULT NULL,
  `specification` varchar(100) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `gst` decimal(10,2) DEFAULT NULL,
  `total` decimal(10,2) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sales`
--

INSERT INTO `sales` (`sale_id`, `pro_id`, `sale_address`, `specification`, `quantity`, `price`, `gst`, `total`, `created_at`, `updated_at`) VALUES
(1, 2, 'Test Address', NULL, 1, 2500.00, 300.00, 2800.00, NULL, '2024-05-15 15:10:05'),
(3, 3, 'Testing Address', NULL, 2, 5000.00, 500.00, 5500.00, '2024-05-15 17:27:33', NULL),
(4, 6, 'Testing', NULL, 5, 500.00, 200.00, 2700.00, '2024-05-18 11:00:18', NULL),
(6, 8, 'hbhjki', NULL, 8, 1200.00, 200.00, 1400.00, '2024-07-16 11:58:02', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `spec_details`
--

CREATE TABLE `spec_details` (
  `detail_id` int(11) NOT NULL,
  `spec_id` int(11) DEFAULT NULL,
  `detail` varchar(1000) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `api_logs`
--
ALTER TABLE `api_logs`
  ADD PRIMARY KEY (`log_id`);

--
-- Indexes for table `cust_purch_logs`
--
ALTER TABLE `cust_purch_logs`
  ADD PRIMARY KEY (`cust_purch_id`),
  ADD KEY `cust_id` (`cust_id`),
  ADD KEY `pro_id` (`pro_id`);

--
-- Indexes for table `department`
--
ALTER TABLE `department`
  ADD PRIMARY KEY (`dept_id`);

--
-- Indexes for table `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`emp_id`),
  ADD KEY `dept_id` (`dept_id`),
  ADD KEY `role_id` (`role_id`),
  ADD KEY `lang_id` (`lang_id`);

--
-- Indexes for table `emp_attendance`
--
ALTER TABLE `emp_attendance`
  ADD PRIMARY KEY (`attendance_id`),
  ADD KEY `emp_id` (`emp_id`);

--
-- Indexes for table `following_leads`
--
ALTER TABLE `following_leads`
  ADD PRIMARY KEY (`follow_id`),
  ADD KEY `emp_id` (`emp_id`);

--
-- Indexes for table `languages`
--
ALTER TABLE `languages`
  ADD PRIMARY KEY (`lang_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`pro_id`);

--
-- Indexes for table `pro_specification`
--
ALTER TABLE `pro_specification`
  ADD PRIMARY KEY (`spec_id`),
  ADD KEY `fk_pro_id` (`pro_id`);

--
-- Indexes for table `purchase`
--
ALTER TABLE `purchase`
  ADD PRIMARY KEY (`purch_id`);

--
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`role_id`),
  ADD KEY `dept_id` (`dept_id`);

--
-- Indexes for table `sales`
--
ALTER TABLE `sales`
  ADD PRIMARY KEY (`sale_id`),
  ADD KEY `pro_id` (`pro_id`);

--
-- Indexes for table `spec_details`
--
ALTER TABLE `spec_details`
  ADD PRIMARY KEY (`detail_id`),
  ADD KEY `spec_id` (`spec_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `api_logs`
--
ALTER TABLE `api_logs`
  MODIFY `log_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=103;

--
-- AUTO_INCREMENT for table `cust_purch_logs`
--
ALTER TABLE `cust_purch_logs`
  MODIFY `cust_purch_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `department`
--
ALTER TABLE `department`
  MODIFY `dept_id` int(7) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `employee`
--
ALTER TABLE `employee`
  MODIFY `emp_id` int(7) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `emp_attendance`
--
ALTER TABLE `emp_attendance`
  MODIFY `attendance_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=128;

--
-- AUTO_INCREMENT for table `following_leads`
--
ALTER TABLE `following_leads`
  MODIFY `follow_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `languages`
--
ALTER TABLE `languages`
  MODIFY `lang_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `pro_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `pro_specification`
--
ALTER TABLE `pro_specification`
  MODIFY `spec_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `purchase`
--
ALTER TABLE `purchase`
  MODIFY `purch_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `role`
--
ALTER TABLE `role`
  MODIFY `role_id` int(7) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `sales`
--
ALTER TABLE `sales`
  MODIFY `sale_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `spec_details`
--
ALTER TABLE `spec_details`
  MODIFY `detail_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cust_purch_logs`
--
ALTER TABLE `cust_purch_logs`
  ADD CONSTRAINT `cust_purch_logs_ibfk_1` FOREIGN KEY (`cust_id`) REFERENCES `customers` (`cust_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `cust_purch_logs_ibfk_2` FOREIGN KEY (`pro_id`) REFERENCES `products` (`pro_id`);

--
-- Constraints for table `employee`
--
ALTER TABLE `employee`
  ADD CONSTRAINT `employee_ibfk_1` FOREIGN KEY (`dept_id`) REFERENCES `department` (`dept_id`),
  ADD CONSTRAINT `employee_ibfk_2` FOREIGN KEY (`role_id`) REFERENCES `role` (`role_id`),
  ADD CONSTRAINT `employee_ibfk_3` FOREIGN KEY (`lang_id`) REFERENCES `languages` (`lang_id`);

--
-- Constraints for table `emp_attendance`
--
ALTER TABLE `emp_attendance`
  ADD CONSTRAINT `emp_attendance_ibfk_1` FOREIGN KEY (`emp_id`) REFERENCES `employee` (`emp_id`) ON DELETE CASCADE;

--
-- Constraints for table `following_leads`
--
ALTER TABLE `following_leads`
  ADD CONSTRAINT `following_leads_ibfk_1` FOREIGN KEY (`emp_id`) REFERENCES `employee` (`emp_id`);

--
-- Constraints for table `pro_specification`
--
ALTER TABLE `pro_specification`
  ADD CONSTRAINT `fk_pro_id` FOREIGN KEY (`pro_id`) REFERENCES `products` (`pro_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `pro_specification_ibfk_1` FOREIGN KEY (`pro_id`) REFERENCES `products` (`pro_id`);

--
-- Constraints for table `role`
--
ALTER TABLE `role`
  ADD CONSTRAINT `role_ibfk_1` FOREIGN KEY (`dept_id`) REFERENCES `department` (`dept_id`) ON DELETE CASCADE;

--
-- Constraints for table `sales`
--
ALTER TABLE `sales`
  ADD CONSTRAINT `sales_ibfk_1` FOREIGN KEY (`pro_id`) REFERENCES `products` (`pro_id`) ON DELETE CASCADE;

--
-- Constraints for table `spec_details`
--
ALTER TABLE `spec_details`
  ADD CONSTRAINT `spec_details_ibfk_1` FOREIGN KEY (`spec_id`) REFERENCES `pro_specification` (`spec_id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
