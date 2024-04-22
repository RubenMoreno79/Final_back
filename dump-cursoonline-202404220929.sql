-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: cursoonline
-- ------------------------------------------------------
-- Server version	8.0.36

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
-- Table structure for table `alumnos`
--

DROP TABLE IF EXISTS `alumnos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `alumnos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usuarios_id` int NOT NULL,
  `foto` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `campoInteres` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `alumnos_unique` (`usuarios_id`),
  KEY `alumnos_usuarios_FK` (`usuarios_id`),
  CONSTRAINT `alumnos_usuarios_FK` FOREIGN KEY (`usuarios_id`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `alumnos`
--

LOCK TABLES `alumnos` WRITE;
/*!40000 ALTER TABLE `alumnos` DISABLE KEYS */;
INSERT INTO `alumnos` VALUES (1,7,'prueba',''),(8,8,'prueba de foto','prueba dedsfaaaaaaa interes');
/*!40000 ALTER TABLE `alumnos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `alumnos_has_cursos`
--

DROP TABLE IF EXISTS `alumnos_has_cursos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `alumnos_has_cursos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `alumno_id` int NOT NULL,
  `cursos_id` int NOT NULL,
  `progreso` int unsigned NOT NULL DEFAULT '0',
  `nota` int unsigned NOT NULL DEFAULT '0',
  `finalizado` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `alumnos_has_cursos_alumnos_FK` (`alumno_id`),
  KEY `alumnos_has_cursos_cursos_FK` (`cursos_id`),
  CONSTRAINT `alumnos_has_cursos_alumnos_FK` FOREIGN KEY (`alumno_id`) REFERENCES `alumnos` (`id`),
  CONSTRAINT `alumnos_has_cursos_cursos_FK` FOREIGN KEY (`cursos_id`) REFERENCES `cursos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `alumnos_has_cursos`
--

LOCK TABLES `alumnos_has_cursos` WRITE;
/*!40000 ALTER TABLE `alumnos_has_cursos` DISABLE KEYS */;
INSERT INTO `alumnos_has_cursos` VALUES (7,1,10,0,0,0),(8,1,7,0,0,0),(9,8,8,10,7,1),(15,8,10,40,8,0),(20,8,10,0,0,0),(22,8,10,0,0,0);
/*!40000 ALTER TABLE `alumnos_has_cursos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cursos`
--

DROP TABLE IF EXISTS `cursos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cursos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `horas` int unsigned NOT NULL,
  `categoria` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `profesor_id` int NOT NULL,
  `Imagen` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `descripcion` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `contenido` text COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `cursos_profesores_FK` (`profesor_id`),
  CONSTRAINT `cursos_profesores_FK` FOREIGN KEY (`profesor_id`) REFERENCES `profesores` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cursos`
--

LOCK TABLES `cursos` WRITE;
/*!40000 ALTER TABLE `cursos` DISABLE KEYS */;
INSERT INTO `cursos` VALUES (3,'Confdsaion',140,'Bienestar personal',2,'Prueba','Hola que tal estais mis amsadas',''),(4,'Confdsaion',140,'Bienestar personal',1,'Prueba','Hola que tal estais mis amsadas',''),(5,'Confdsaion',140,'Bienestar personal',1,'Prueba','Hola que tal estais mis amsadas',''),(7,'Confdsaion',140,'Bienestar personal',2,'Prueba','Hola que tal estais mis amsadas','prueba de contenido para ver que funciona correctamente'),(8,'Desarrollo personal',140,'Bienestar personal',2,'Prueba','Hola que tal estais mis amiguis',''),(9,'Desarrollo personal',140,'Bienestar personal',2,'Prueba','Hola que tal estais mis amiguis','prueba de contenido para ver que funciona correctamente'),(10,'OSTIAS',100,'cantar',2,'trolio','trolio2','trolio3'),(11,'Desarrollo personal',140,'Bienestar personal',3,'Prueba','Hola que tal estais mis amiguis','prueba de contenido para ver que funciona correctamente'),(15,'Desarrollo personal',140,'Bienestar personal',3,'Prueba','Hola que tal estais mis amiguis','prueba de contenido para ver que funciona correctamente');
/*!40000 ALTER TABLE `cursos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lecciones`
--

DROP TABLE IF EXISTS `lecciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lecciones` (
  `id` int NOT NULL AUTO_INCREMENT,
  `imagen` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `video` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `texto` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `curso_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `lecciones_cursos_FK` (`curso_id`),
  CONSTRAINT `lecciones_cursos_FK` FOREIGN KEY (`curso_id`) REFERENCES `cursos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lecciones`
--

LOCK TABLES `lecciones` WRITE;
/*!40000 ALTER TABLE `lecciones` DISABLE KEYS */;
INSERT INTO `lecciones` VALUES (2,'Holfsdsfsdfds32','hol32a2','hol3232a3',3),(3,'Hola','hola2','hola3',3),(4,'Hola','hola2','hola3',3),(5,'Hola','hola2','hola3',3),(6,'Hola','hola2','hola3',3),(7,'Hola','hola2','hola3',3);
/*!40000 ALTER TABLE `lecciones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `preguntas_examenes`
--

DROP TABLE IF EXISTS `preguntas_examenes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `preguntas_examenes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `respuesta_correcta` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `respuesta_incorrecta1` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `respuesta_incorrecta2` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `curso_id` int NOT NULL,
  `respuesta_incorrecta3` mediumtext COLLATE utf8mb4_unicode_ci,
  `enunciado` text COLLATE utf8mb4_unicode_ci,
  PRIMARY KEY (`id`),
  KEY `preguntas_examenes_preguntas_examenes_FK` (`curso_id`),
  CONSTRAINT `preguntas_examenes_cursos_FK` FOREIGN KEY (`curso_id`) REFERENCES `cursos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `preguntas_examenes`
--

LOCK TABLES `preguntas_examenes` WRITE;
/*!40000 ALTER TABLE `preguntas_examenes` DISABLE KEYS */;
INSERT INTO `preguntas_examenes` VALUES (12,'Preguntas de examen','esta bien','esta mal','esta mal',11,'esta mal','Esto es un enunciado'),(13,'Preguntas de examen','esta bien','esta mal','esta mal',10,'esta mal','Esto es un enunciado'),(14,'Preguntas de examen','esta bien','esta mal','esta mal',11,'esta mal','Esto es un enunciado'),(15,'Preguntas de examen','esta bien','esta mal','esta mal',11,'esta mal','Esto es un enunciado'),(16,'Preguntas de examen','esta bien','esta mal','esta mal',11,'esta mal','Esto es un enunciado'),(17,'Preguntas de examen','esta bien','esta mal','esta mal',11,'esta mal','Esto es un enunciado');
/*!40000 ALTER TABLE `preguntas_examenes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `profesores`
--

DROP TABLE IF EXISTS `profesores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `profesores` (
  `id` int NOT NULL AUTO_INCREMENT,
  `experiencia` int unsigned NOT NULL,
  `usuarios_id` int NOT NULL,
  `especialidad` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `foto` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `descripcion_experiencia` text COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `profesores_unique` (`usuarios_id`),
  KEY `profesores_usuarios_FK` (`usuarios_id`),
  CONSTRAINT `profesores_usuarios_FK` FOREIGN KEY (`usuarios_id`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profesores`
--

LOCK TABLES `profesores` WRITE;
/*!40000 ALTER TABLE `profesores` DISABLE KEYS */;
INSERT INTO `profesores` VALUES (1,6,1,'','',''),(2,5,4,'','',''),(3,5,9,'','','');
/*!40000 ALTER TABLE `profesores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `rol` enum('profesor','alumno','admin') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `nombre` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `apellidos` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `fecha_nacimiento` date NOT NULL,
  `fecha_registro` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `genero` enum('h','m','o') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `telefono` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `usuarios_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'peredeldev','pere@gmail.com','12345','profesor','pere','planells','1994-06-09','2024-04-15 08:35:28','h','666555444'),(2,'Rubencio','ruben1@gmail.com','$2b$10$YJtKMJGiR8wgw5/rnNadJeNWsUH9RQtqA2tfp..18T7ljP.DUvXnS','alumno','ruben','moreno','2000-02-02','2024-04-16 07:56:50','m','6177171'),(4,'pere','pere2@gmail.com','$2b$10$DBrT1cf9GiXe.ZtvsIz6/.9PHt6tTEsdvYH7H2Iakw62PFlpEX7BG','profesor','ruben','moreno','2000-02-02','2024-04-16 08:23:34','m','6177171'),(5,'pere','pere3@gmail.com','$2b$10$N0ye7Yw/kiHhYGQkIPxZbeHBWAlCmGSqfrILfZ2PrWjILk94Vnew2','profesor','ruben','moreno','2000-02-02','2024-04-17 08:27:28','m','6177171'),(7,'pere','pere4@gmail.com','$2b$10$RP8ypzG7N8hyII4cvm5GQeCneCcKt8FeibQIekbeXNUG22Ve3UQEC','alumno','ruben','moreno','2000-02-02','2024-04-17 08:27:43','m','6177171'),(8,'pere','pere7@gmail.com','$2b$10$ZC4aaaSBUkPeG86ZOi9rDeCeAmBLL9STDMk7YeVzwjBuYkg42xzVi','alumno','ruben','moreno','2000-02-02','2024-04-17 13:27:49','m','6177171'),(9,'pere','pere6@gmail.com','$2b$10$z4TomzxHPCBx3g8sjzLUXO/rEqSSkqkHAfym3mqb1nasPDlWeb4ay','profesor','ruben','moreno','2000-02-02','2024-04-18 13:14:41','m','6177171'),(11,'pere','pere8@gmail.com','$2b$10$mAntJpANJnwC9Hk0./X/m.VeQ1PBPESXY9aROIy/D8qRTukpUhMJ2','profesor','ruben','moreno','2000-02-02','2024-04-21 11:16:58','m','6177171');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'cursoonline'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-22  9:29:37
