-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Hôte : db
-- Généré le : mar. 08 juil. 2025 à 07:30
-- Version du serveur : 8.0.29
-- Version de PHP : 8.2.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `CONCESSIONNAIRE 2`
--

-- --------------------------------------------------------

--
-- Structure de la table `COULEUR`
--

CREATE TABLE `COULEUR` (
  `ID_Couleur` int NOT NULL,
  `Nom_Couleur` varchar(256) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `COULEUR`
--

INSERT INTO `COULEUR` (`ID_Couleur`, `Nom_Couleur`) VALUES
(1, 'Black'),
(2, 'Red'),
(3, 'Gray'),
(4, 'Yellow'),
(5, 'Green'),
(6, 'Orange'),
(7, 'Mat'),
(8, 'Personnaliser');

-- --------------------------------------------------------

--
-- Structure de la table `TYPE_VEHICULE`
--

CREATE TABLE `TYPE_VEHICULE` (
  `ID_Type` int NOT NULL,
  `Nom_Type` varchar(256) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `TYPE_VEHICULE`
--

INSERT INTO `TYPE_VEHICULE` (`ID_Type`, `Nom_Type`) VALUES
(1, 'Citadines'),
(2, 'Berlines'),
(3, 'Breaks'),
(4, 'SUV'),
(5, 'CABRIOLET'),
(6, 'COUPÉ');

-- --------------------------------------------------------

--
-- Structure de la table `VEHICULE`
--

CREATE TABLE `VEHICULE` (
  `ID_Vehicule` int NOT NULL,
  `Nom_Vehicule` varchar(256) DEFAULT NULL,
  `Immatriculation` varchar(256) DEFAULT NULL,
  `ID_Couleur` int NOT NULL,
  `ID_Type` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `VEHICULE`
--

INSERT INTO `VEHICULE` (`ID_Vehicule`, `Nom_Vehicule`, `Immatriculation`, `ID_Couleur`, `ID_Type`) VALUES
(1, 'AUDI A1', 'FV-823-AV', 1, 1),
(2, 'AUDI A1', 'FR-756-AZ', 3, 1),
(3, 'AUDI A1', 'FR-786-AZ', 1, 1),
(4, 'AUDI A3', 'FR-654-CZ', 7, 2),
(5, 'AUDI A3', 'FR-692-CZ', 3, 2),
(6, 'AUDI A4', 'FR-841-DZ', 1, 4),
(7, 'AUDI A4', 'FR-857-DZ', 4, 4),
(8, 'AUDI A5', 'FR-498-MC', 6, 5),
(9, 'AUDI A5', 'FR-475-MC', 2, 5),
(10, 'AUDI A6', 'FR-666-BD', 1, 4),
(11, 'AUDI A6', 'FR-696-BD', 5, 4),
(12, 'AUDI A7', 'FR-001-AB', 8, 2);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `COULEUR`
--
ALTER TABLE `COULEUR`
  ADD PRIMARY KEY (`ID_Couleur`);

--
-- Index pour la table `TYPE_VEHICULE`
--
ALTER TABLE `TYPE_VEHICULE`
  ADD PRIMARY KEY (`ID_Type`);

--
-- Index pour la table `VEHICULE`
--
ALTER TABLE `VEHICULE`
  ADD PRIMARY KEY (`ID_Vehicule`),
  ADD KEY `FK_VEHICULE_ID_Couleur` (`ID_Couleur`),
  ADD KEY `FK_VEHICULE_ID_Type` (`ID_Type`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `COULEUR`
--
ALTER TABLE `COULEUR`
  MODIFY `ID_Couleur` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT pour la table `TYPE_VEHICULE`
--
ALTER TABLE `TYPE_VEHICULE`
  MODIFY `ID_Type` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT pour la table `VEHICULE`
--
ALTER TABLE `VEHICULE`
  MODIFY `ID_Vehicule` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `VEHICULE`
--
ALTER TABLE `VEHICULE`
  ADD CONSTRAINT `FK_VEHICULE_ID_Couleur` FOREIGN KEY (`ID_Couleur`) REFERENCES `COULEUR` (`ID_Couleur`),
  ADD CONSTRAINT `FK_VEHICULE_ID_Type` FOREIGN KEY (`ID_Type`) REFERENCES `TYPE_VEHICULE` (`ID_Type`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
