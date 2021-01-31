-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: localhost    Database: mabase
-- ------------------------------------------------------
-- Server version	8.0.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `customers`
--

DROP TABLE IF EXISTS `customers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `active` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customers`
--

LOCK TABLES `customers` WRITE;
/*!40000 ALTER TABLE `customers` DISABLE KEYS */;
/*!40000 ALTER TABLE `customers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `magasin_entity`
--

DROP TABLE IF EXISTS `magasin_entity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `magasin_entity` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) NOT NULL,
  `adresse` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `magasin_entity`
--

LOCK TABLES `magasin_entity` WRITE;
/*!40000 ALTER TABLE `magasin_entity` DISABLE KEYS */;
INSERT INTO `magasin_entity` VALUES (1,'Goshan','123, TarkovStreet');
/*!40000 ALTER TABLE `magasin_entity` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `offre_entity`
--

DROP TABLE IF EXISTS `offre_entity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `offre_entity` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `dateOfCreation` datetime NOT NULL,
  `magasinsId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_75b89527164929391d4b8d5b26b` (`magasinsId`),
  CONSTRAINT `FK_75b89527164929391d4b8d5b26b` FOREIGN KEY (`magasinsId`) REFERENCES `magasin_entity` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `offre_entity`
--

LOCK TABLES `offre_entity` WRITE;
/*!40000 ALTER TABLE `offre_entity` DISABLE KEYS */;
INSERT INTO `offre_entity` VALUES (1,'vincent','2021-01-29 02:45:39',NULL),(2,'L\'offre du Siècle !','2021-01-29 02:46:14',NULL),(3,'GoodOffer','2021-01-29 04:34:20',NULL),(4,'La GoodOffer','2021-01-29 04:35:30',NULL),(5,'A Very Well Offer','2021-01-29 04:44:18',NULL),(6,'A pas belle Offer','2021-01-29 04:44:44',NULL),(7,'A pas belle Offer','2021-01-29 04:57:46',NULL),(8,'A pas belle Offer','2021-01-29 04:57:59',NULL),(9,'GoshanOffer','2021-01-29 06:03:55',NULL),(10,'GoshanOffer','2021-01-29 06:08:21',NULL),(11,'GoshanOffer03','2021-01-29 06:08:45',NULL);
/*!40000 ALTER TABLE `offre_entity` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `offre_entity_partenaires_partenaire`
--

DROP TABLE IF EXISTS `offre_entity_partenaires_partenaire`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `offre_entity_partenaires_partenaire` (
  `offreEntityId` int NOT NULL,
  `partenaireId` int NOT NULL,
  PRIMARY KEY (`offreEntityId`,`partenaireId`),
  KEY `IDX_e3ba90f1416d598aa86cdfebe7` (`offreEntityId`),
  KEY `IDX_aee144725453fcda6025ebfb24` (`partenaireId`),
  CONSTRAINT `FK_aee144725453fcda6025ebfb24d` FOREIGN KEY (`partenaireId`) REFERENCES `partenaire` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_e3ba90f1416d598aa86cdfebe75` FOREIGN KEY (`offreEntityId`) REFERENCES `offre_entity` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `offre_entity_partenaires_partenaire`
--

LOCK TABLES `offre_entity_partenaires_partenaire` WRITE;
/*!40000 ALTER TABLE `offre_entity_partenaires_partenaire` DISABLE KEYS */;
/*!40000 ALTER TABLE `offre_entity_partenaires_partenaire` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `partenaire`
--

DROP TABLE IF EXISTS `partenaire`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `partenaire` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `partenaire`
--

LOCK TABLES `partenaire` WRITE;
/*!40000 ALTER TABLE `partenaire` DISABLE KEYS */;
INSERT INTO `partenaire` VALUES (2,'Google'),(3,'Google'),(4,'Google'),(5,'Google'),(6,'Google'),(7,'Google'),(8,'Google'),(9,'Google'),(10,'Google'),(11,'Google'),(12,'Google'),(13,'vincent'),(14,'oui-oui'),(15,'steve');
/*!40000 ALTER TABLE `partenaire` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `partenaire_offres_offre_entity`
--

DROP TABLE IF EXISTS `partenaire_offres_offre_entity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `partenaire_offres_offre_entity` (
  `partenaireId` int NOT NULL,
  `offreEntityId` int NOT NULL,
  PRIMARY KEY (`partenaireId`,`offreEntityId`),
  KEY `IDX_a7ab28d25aa1a33eb48326974f` (`partenaireId`),
  KEY `IDX_0fc73f96aea51f670f7dcc14b5` (`offreEntityId`),
  CONSTRAINT `FK_0fc73f96aea51f670f7dcc14b5a` FOREIGN KEY (`offreEntityId`) REFERENCES `offre_entity` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_a7ab28d25aa1a33eb48326974f7` FOREIGN KEY (`partenaireId`) REFERENCES `partenaire` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `partenaire_offres_offre_entity`
--

LOCK TABLES `partenaire_offres_offre_entity` WRITE;
/*!40000 ALTER TABLE `partenaire_offres_offre_entity` DISABLE KEYS */;
/*!40000 ALTER TABLE `partenaire_offres_offre_entity` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `age` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Timber','Saw',25),(2,'Timber','Saw',25),(3,'Timber','Saw',25),(4,'Timber','Saw',25),(5,'Timber','Saw',25),(6,'Timber','Saw',25),(7,'Timber','Saw',25),(8,'Timber','Saw',25),(9,'Timber','Saw',25),(10,'Timber','Saw',25),(11,'Timber','Saw',25),(12,'Timber','Saw',25);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-01-29  6:14:24
