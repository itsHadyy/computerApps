-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 04, 2024 at 04:24 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `BIT_company`
--

-- --------------------------------------------------------

--
-- Table structure for table `department`
--

CREATE TABLE `department` (
  `Department No` int(3) NOT NULL,
  `Name` varchar(50) NOT NULL,
  `Location` varchar(100) NOT NULL,
  `Phone Ext` int(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `department`
--

INSERT INTO `department` (`Department No`, `Name`, `Location`, `Phone Ext`) VALUES
(110, 'Data Mining', 'Building A, Ground Floor, Room A001', 146),
(210, 'Graphical Design', 'Building A, Ground Floor, Room A002', 144),
(310, 'Software Development', 'Building B, First Floor, Room B102', 741),
(410, 'Administration', 'Building B, First Floor, Room B104', 450);

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `EmpID` int(5) NOT NULL,
  `Name` varchar(100) NOT NULL,
  `Username` varchar(100) NOT NULL,
  `Password` varchar(100) NOT NULL,
  `Salary` decimal(8,2) NOT NULL,
  `Gender` varchar(6) NOT NULL,
  `DeptNo` int(3) NOT NULL,
  `SupervisorID` int(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`EmpID`, `Name`, `Username`, `Password`, `Salary`, `Gender`, `DeptNo`, `SupervisorID`) VALUES
(234, 'Abdullah Imam', 'abdullah.imam', 'joker123456', 5600.00, 'Male', 110, 1041),
(588, 'Noha Barakat', 'noha.barakat', 'p@ssw0rd', 5670.00, 'Female', 310, 1085),
(651, 'Carol Emad', 'carol.emad', '11cookie11', 5688.00, 'Female', 310, 1085),
(727, 'Hala Awad', 'hala.awad', 'angelola', 8400.00, 'Female', 110, NULL),
(920, 'Yehia Ahmed', 'yehia.ahmed', 'yaya_1234', 10200.00, 'Male', 410, 974),
(974, 'Aya Ahmed', 'aya.ahmed', 'youpimed', 13570.00, 'Female', 410, NULL),
(1041, 'Randa Hamdy', 'randa.hamdy', 'malana159', 8950.00, 'Female', 110, NULL),
(1085, 'Mahmoud Ali', 'mahmoud.ali', 'king_mido', 7640.00, 'Male', 310, 1225),
(1225, 'George Azmy', 'george.azmy', '13051982', 9600.00, 'Male', 310, NULL),
(1425, 'Farah Helmy', 'farah.helmy', 'cleopatra1425', 5750.00, 'Female', 210, 2252),
(1559, 'Fady Adly', 'fady.adly', 'fido_dido', 11400.00, 'Male', 410, 974),
(1995, 'Bassem Maged', 'bassem.maged', 'prince_2018', 4500.00, 'Male', 210, 2252),
(2252, 'Omar Khaled', 'omar.khaled', 'roma_98', 8086.00, 'Male', 210, NULL),
(4384, 'Bassem Khaled', 'Gindy', 'passForGindy', 32000.00, 'Male', 310, NULL),
(5682, 'Hady Korshem', 'hk', '12345', 25000.00, 'Male', 310, 588),
(8989, 'Salma', 'sal', '123', 24351.00, 'Female', 410, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `employee_project`
--

CREATE TABLE `employee_project` (
  `EmpID` int(5) NOT NULL,
  `ProjectNo` int(5) NOT NULL,
  `Hours` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_520_ci;

--
-- Dumping data for table `employee_project`
--

INSERT INTO `employee_project` (`EmpID`, `ProjectNo`, `Hours`) VALUES
(234, 100, 18),
(588, 300, 20),
(588, 302, 16),
(651, 301, 20),
(651, 302, 14),
(974, 100, 32),
(1085, 300, 20),
(1225, 301, 20),
(1425, 201, 12),
(1559, 200, 18),
(1995, 100, 24),
(1995, 300, 8),
(2252, 301, 16);

-- --------------------------------------------------------

--
-- Table structure for table `project`
--

CREATE TABLE `project` (
  `Project Number` int(5) NOT NULL,
  `Name` varchar(100) NOT NULL,
  `Delivery Date` date NOT NULL,
  `Cost` decimal(8,2) NOT NULL,
  `DeptNo` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_520_ci;

--
-- Dumping data for table `project`
--

INSERT INTO `project` (`Project Number`, `Name`, `Delivery Date`, `Cost`, `DeptNo`) VALUES
(100, 'Misr Petroleum Mining Software', '2019-01-31', 72000.00, 110),
(200, 'Advantek Egypt', '2019-02-14', 17000.00, 210),
(201, 'GUST University Logo', '2019-05-15', 15000.00, 210),
(300, 'GUST University Online System', '2019-05-15', 35000.00, 310),
(301, 'GUST University Offline System', '2019-05-15', 30000.00, 310),
(302, 'Misr Petroleum Local System', '2019-08-31', 60000.00, 310);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `department`
--
ALTER TABLE `department`
  ADD PRIMARY KEY (`Department No`);

--
-- Indexes for table `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`EmpID`),
  ADD KEY `employee_ibfk_1` (`DeptNo`),
  ADD KEY `SupervisorID` (`SupervisorID`);

--
-- Indexes for table `employee_project`
--
ALTER TABLE `employee_project`
  ADD PRIMARY KEY (`EmpID`,`ProjectNo`),
  ADD KEY `ProjectNo` (`ProjectNo`);

--
-- Indexes for table `project`
--
ALTER TABLE `project`
  ADD PRIMARY KEY (`Project Number`),
  ADD KEY `DeptNo` (`DeptNo`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `department`
--
ALTER TABLE `department`
  MODIFY `Department No` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=411;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `employee`
--
ALTER TABLE `employee`
  ADD CONSTRAINT `employee_ibfk_1` FOREIGN KEY (`DeptNo`) REFERENCES `department` (`Department No`),
  ADD CONSTRAINT `employee_ibfk_2` FOREIGN KEY (`SupervisorID`) REFERENCES `employee` (`EmpID`);

--
-- Constraints for table `employee_project`
--
ALTER TABLE `employee_project`
  ADD CONSTRAINT `employee_project_ibfk_1` FOREIGN KEY (`EmpID`) REFERENCES `employee` (`EmpID`),
  ADD CONSTRAINT `employee_project_ibfk_2` FOREIGN KEY (`ProjectNo`) REFERENCES `project` (`Project Number`);

--
-- Constraints for table `project`
--
ALTER TABLE `project`
  ADD CONSTRAINT `project_ibfk_1` FOREIGN KEY (`DeptNo`) REFERENCES `department` (`Department No`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
