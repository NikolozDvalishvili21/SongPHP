-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 10, 2024 at 11:46 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `songproject`
--

-- --------------------------------------------------------

--
-- Table structure for table `albums`
--

CREATE TABLE `albums` (
  `album_id` int(3) UNSIGNED NOT NULL,
  `title` varchar(55) NOT NULL,
  `singer_id` int(3) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `albums`
--

INSERT INTO `albums` (`album_id`, `title`, `singer_id`) VALUES
(1, 'Blond', 1),
(2, 'Astroworld', 5),
(3, 'DAMN.', 3),
(4, 'INLFTRGMH', 6),
(6, 'JUNGLE', 10),
(7, 'The Off Season', 11);

-- --------------------------------------------------------

--
-- Table structure for table `likedsongs`
--

CREATE TABLE `likedsongs` (
  `id` int(11) NOT NULL,
  `SongName` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `likedsongs`
--

INSERT INTO `likedsongs` (`id`, `SongName`, `created_at`) VALUES
(17, 'New Chains, Same Shackles', '2024-06-10 21:34:20');

-- --------------------------------------------------------

--
-- Table structure for table `singers`
--

CREATE TABLE `singers` (
  `singer_id` int(55) UNSIGNED NOT NULL,
  `FirstName` varchar(55) NOT NULL,
  `LastName` varchar(55) DEFAULT NULL,
  `Description` varchar(200) NOT NULL,
  `Age` int(2) NOT NULL,
  `Top_Album` varchar(55) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `singers`
--

INSERT INTO `singers` (`singer_id`, `FirstName`, `LastName`, `Description`, `Age`, `Top_Album`) VALUES
(1, 'Frank', 'Ocean', 'Frank Ocean is a singer, rapper, songwriter, record producer and photographer. He was born Christopher Edwin Breaux on October 28, 1987 in Long Beach, California.', 36, 'Blond'),
(2, 'Drake', NULL, 'Drake, is a Canadian rapper, singer and actor. An influential figure in popular music', 37, 'Scorpion'),
(3, 'Kendrick', 'Lamar', 'is an American rapper and songwriter. Often regarded as one of the greatest rappers of all time', 36, 'DAMN.'),
(4, 'Merab', 'Sefashvili', 'Georgian singer.', 61, 'Nislisferi Ganshoreba'),
(5, 'Travis', 'Scott', 'American rapper, singer, songwriter, and record producer. Throughout his career, Scott has achieved four number-one hits on the US Billboard Hot 100 chart, along with a total of over one hundred chart', 33, 'Astroworld'),
(6, '$uicideBoys', NULL, 'Hailing from New Orleans, $UICIDEBOY$ are a rap duo of two cousins: Scott Arceneaux Jr. and Aristos Petrou. ', 30, 'Stop Staring At the Shadows'),
(10, 'THE', 'BLAZE', 'The Blaze are a Paris-based ambient electronic dance music duo consisting of two cousins, Guillaume and Jonathan Alric', 25, 'JUNGLE'),
(11, 'J.', 'Cole', 'American rapper J. Cole has released six studio albums, one live album, four compilation albums, three extended plays, four mixtapes, 58 singles ', 40, 'The Off Season');

-- --------------------------------------------------------

--
-- Table structure for table `songs`
--

CREATE TABLE `songs` (
  `song_id` int(3) UNSIGNED NOT NULL,
  `SongName` varchar(55) NOT NULL,
  `Duration` varchar(8) NOT NULL,
  `singer_id` int(3) UNSIGNED NOT NULL,
  `album_id` int(3) UNSIGNED NOT NULL,
  `likes` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `songs`
--

INSERT INTO `songs` (`song_id`, `SongName`, `Duration`, `singer_id`, `album_id`, `likes`) VALUES
(1, 'Nights', '05:16', 1, 1, 5),
(2, 'Sicko Mode', '05:13', 5, 2, 1),
(3, 'Pride', '04:36', 3, 3, 1),
(4, 'I NO LONGER FEAR THE RAZOR GUARDING MY HEEL', '02:47', 6, 4, 1),
(5, 'New Chains, Same Shackles', '1:57', 6, 4, 0),
(7, 'EYES', '03:45', 10, 6, 0),
(8, 'My Life', '03:39', 11, 6, 0);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(3) UNSIGNED NOT NULL,
  `email` varchar(55) NOT NULL,
  `password` varchar(55) NOT NULL,
  `roles` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `email`, `password`, `roles`) VALUES
(1, 'nika@gmail.com', '1234', 1),
(2, 'gigi2@gmail.com', '4321', 0),
(3, 'gulverda@gmail.com', '1234567', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `albums`
--
ALTER TABLE `albums`
  ADD PRIMARY KEY (`album_id`),
  ADD KEY `singer_id` (`singer_id`);

--
-- Indexes for table `likedsongs`
--
ALTER TABLE `likedsongs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `singers`
--
ALTER TABLE `singers`
  ADD PRIMARY KEY (`singer_id`);

--
-- Indexes for table `songs`
--
ALTER TABLE `songs`
  ADD PRIMARY KEY (`song_id`),
  ADD KEY `singer_id` (`singer_id`),
  ADD KEY `album_id` (`album_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `albums`
--
ALTER TABLE `albums`
  MODIFY `album_id` int(3) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `likedsongs`
--
ALTER TABLE `likedsongs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `singers`
--
ALTER TABLE `singers`
  MODIFY `singer_id` int(55) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `songs`
--
ALTER TABLE `songs`
  MODIFY `song_id` int(3) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(3) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `albums`
--
ALTER TABLE `albums`
  ADD CONSTRAINT `albums_ibfk_1` FOREIGN KEY (`singer_id`) REFERENCES `singers` (`singer_id`);

--
-- Constraints for table `songs`
--
ALTER TABLE `songs`
  ADD CONSTRAINT `songs_ibfk_1` FOREIGN KEY (`singer_id`) REFERENCES `singers` (`singer_id`),
  ADD CONSTRAINT `songs_ibfk_2` FOREIGN KEY (`album_id`) REFERENCES `albums` (`album_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
