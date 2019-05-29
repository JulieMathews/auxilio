-- MySQL dump 10.13  Distrib 8.0.15, for macos10.14 (x86_64)
--
-- Host: localhost    Database: articles_db
-- ------------------------------------------------------
-- Server version	8.0.15

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8mb4 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `articles`
--

DROP TABLE IF EXISTS `articles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `articles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `article` text NOT NULL,
  `blurb` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `headerImageUrl` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `articles`
--

LOCK TABLES `articles` WRITE;
/*!40000 ALTER TABLE `articles` DISABLE KEYS */;
INSERT INTO `articles` VALUES (33,'Love, Actually! The Feedback Your Child Needs Most','<p>As children, we learn who we are and how we are valued by the feedback we\nreceive from other people. If we do something and others respond with warmth, admiration, and\npleasure, we think of that action as reflecting the good part of ourselves. If, on the other\nhand, we do something and it is met with disapproval or withdrawal of love, we have been bad\nand we must not do it again.</p>\n\n<h3>How Kids with ADHD Are Perceived and Judged</h3>\n\n<p>There are three basic ways in which this feedback loop goes wrong for children with attention\ndeficit disorder. The first is that kids with ADHD rarely behave the same way consistently enough\nto get a consistent stream of feedback. Sometimes they are empathic and other times self-absorbed.\nIf they find something interesting, they can achieve anything but they cannot do 20 minutes of\nhomework without a meltdown. It can be hard to develop a singular sense of self while evoking\ncontradictory feedback.</p>\n','What feedback do our children need the most?','2019-05-23 13:52:09','2019-05-23 13:52:09','https://images.pexels.com/photos/2306850/pexels-photo-2306850.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'),(34,'You Are Not Broken:” How ADHD Erodes a Child’s Self-Confidence','<h3>You Are Not Broken:” How ADHD Erodes a Child’s Self-Confidence<h3>\n<p>One lesser known curse of attention deficit disorder (ADHD or ADD) is low self-esteem.\nIn my more than 20 years of mental health training and practice, I have yet to meet a child diagnosed with ADHD who doesn’t feel bad about him or herself from time to time. In addition to attention and concentration issues, children with ADHD struggle with an underlying belief that they are broken — that something’s wrong with them and they cannot control it.\nIn the very moments when they are trying to do their best, their bodies betray them. The world reprimands them for being “a little too much.” And they are externally stigmatized and internally shamed with the notion that, even if they want to be good — they can’t.\nParents whose children have ADHD know the scenario all too well: Your child gets overly excited at an inopportune moment. You see him try to control himself, but he can’t. You or someone else tells him to calm down or stop. Your child does the exact opposite. Your patience diminishes and your frustration increases; maybe you scold him more harshly than you mean to or maybe he feels the shame coming and act out even more.\nIn the end, your child feels worse about himself. It’s heartbreaking for parents and providers who know deep down that these kids are good kids trying every day to do their best.</p>\n\n<h5> My work with brave, resilient, and astute children has taught me that children with ADHD can stop the cycle. Here are a few simple and fun mind-body awareness exercises that kids can do to begin to do to take back control:</h5>\n<ol>\n<li> 1. Deep breathing. Taking a big, deep belly breath teaches kids that they can stop themselves and regroup. And, even better, they often feel calmer afterwards.</li>\n<li> 2. Progressive muscle relaxation. Children can learn body control and gain another tool for self-calming by practicing tightening and relaxing different muscle groups. In my own daily life, I have found that I can stop myself from saying or doing something I may otherwise regret by shrugging my shoulders in an exaggerated way and then dropping them back down.</li>\n<li> 3. Taking your pulse and regulating it. Because heart rate is often linked to emotions, some kids find it useful to take their pulse when they feel excited, nervous, or angry as an indicator of their mind-body state. Gaining control of heart rate can be a wonderful proxy for developing emotional regulation.</li>\n</ol>\n<p>It is tremendously liberating when kids realize that they can stop the cycle of low self-esteem by controlling some part of their body. In fact, I distinctly remember the day when a patient of mine realized his own power of self-control. He was the youngest of four very successful over-achieving brothers. He was bright, articulate, sensitive, and reactive. He would often have an outburst in school settings surrounding math (a challenging subject for him). Then, he would feel terrible and act out even more because he couldn’t control his feelings of shame around his initial over-reaction.\nAll who knew him struggled to watch him in this cycle. After three days of mind-body work he came running into my office: “Erina, Erina, guess what I just realized! These games — they taught me that I CAN control myself. I don’t HAVE to be a bad kid. I can fix myself.”\nHealthcare practitioners tend to look at ADHD as a deficit that needs to be fixed through medication or long-term therapy. What gets lost is the emotional burden that children with ADHD take on. Because they feel responsible for their behavior and the disruptions it can cause, they’re desperate for tools to self-regulate. Mind-body awareness is one of those tools, and it can be incredibly freeing and empowering for children who learn how to use it.</p>\n','One lesser known curse of attention deficit disorder (ADHD or ADD) is low self-esteem.','2019-05-23 13:52:09','2019-05-23 13:52:09','/images/happy_kids_2.jpeg'),(35,'Are we going to be able to get this done?','<h3>You Are Not Broken:” How ADHD Erodes a Child’s Self-Confidence<h3>\n<p>One lesser known curse of attention deficit disorder (ADHD or ADD) is low self-esteem.\nIn my more than 20 years of mental health training and practice, I have yet to meet a child diagnosed with ADHD who doesn’t feel bad about him or herself from time to time. In addition to attention and concentration issues, children with ADHD struggle with an underlying belief that they are broken — that something’s wrong with them and they cannot control it.\nIn the very moments when they are trying to do their best, their bodies betray them. The world reprimands them for being “a little too much.” And they are externally stigmatized and internally shamed with the notion that, even if they want to be good — they can’t.\nParents whose children have ADHD know the scenario all too well: Your child gets overly excited at an inopportune moment. You see him try to control himself, but he can’t. You or someone else tells him to calm down or stop. Your child does the exact opposite. Your patience diminishes and your frustration increases; maybe you scold him more harshly than you mean to or maybe he feels the shame coming and act out even more.\nIn the end, your child feels worse about himself. It’s heartbreaking for parents and providers who know deep down that these kids are good kids trying every day to do their best.</p>\n\n<h5> My work with brave, resilient, and astute children has taught me that children with ADHD can stop the cycle. Here are a few simple and fun mind-body awareness exercises that kids can do to begin to do to take back control:</h5>\n<ol>\n<li> 1. Deep breathing. Taking a big, deep belly breath teaches kids that they can stop themselves and regroup. And, even better, they often feel calmer afterwards.</li>\n<li> 2. Progressive muscle relaxation. Children can learn body control and gain another tool for self-calming by practicing tightening and relaxing different muscle groups. In my own daily life, I have found that I can stop myself from saying or doing something I may otherwise regret by shrugging my shoulders in an exaggerated way and then dropping them back down.</li>\n<li> 3. Taking your pulse and regulating it. Because heart rate is often linked to emotions, some kids find it useful to take their pulse when they feel excited, nervous, or angry as an indicator of their mind-body state. Gaining control of heart rate can be a wonderful proxy for developing emotional regulation.</li>\n</ol>\n<p>It is tremendously liberating when kids realize that they can stop the cycle of low self-esteem by controlling some part of their body. In fact, I distinctly remember the day when a patient of mine realized his own power of self-control. He was the youngest of four very successful over-achieving brothers. He was bright, articulate, sensitive, and reactive. He would often have an outburst in school settings surrounding math (a challenging subject for him). Then, he would feel terrible and act out even more because he couldn’t control his feelings of shame around his initial over-reaction.\nAll who knew him struggled to watch him in this cycle. After three days of mind-body work he came running into my office: “Erina, Erina, guess what I just realized! These games — they taught me that I CAN control myself. I don’t HAVE to be a bad kid. I can fix myself.”\nHealthcare practitioners tend to look at ADHD as a deficit that needs to be fixed through medication or long-term therapy. What gets lost is the emotional burden that children with ADHD take on. Because they feel responsible for their behavior and the disruptions it can cause, they’re desperate for tools to self-regulate. Mind-body awareness is one of those tools, and it can be incredibly freeing and empowering for children who learn how to use it.</p>\n','Let us get this shit done in time.','2019-05-23 13:52:09','2019-05-23 13:52:09','/images/happy_kids_4.jpeg');
/*!40000 ALTER TABLE `articles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Conversations`
--

DROP TABLE IF EXISTS `Conversations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `Conversations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user1Uuid` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `user2Uuid` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user1Uuid` (`user1Uuid`),
  KEY `user2Uuid` (`user2Uuid`),
  CONSTRAINT `conversations_ibfk_1` FOREIGN KEY (`user1Uuid`) REFERENCES `users` (`uuid`),
  CONSTRAINT `conversations_ibfk_2` FOREIGN KEY (`user2Uuid`) REFERENCES `users` (`uuid`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Conversations`
--

LOCK TABLES `Conversations` WRITE;
/*!40000 ALTER TABLE `Conversations` DISABLE KEYS */;
INSERT INTO `Conversations` VALUES (1,'2c35d9a0-7997-11e9-85ea-db4701ef29f4','988ae1e0-791a-11e9-bac7-b156ec1ca70a','2019-05-26 04:33:22','2019-05-26 04:33:22'),(2,'6f673600-801e-11e9-b91c-8d03386ea680','988ae1e0-791a-11e9-bac7-b156ec1ca70a','2019-05-28 05:33:10','2019-05-28 05:33:10'),(3,'988ae1e0-791a-11e9-bac7-b156ec1ca70a','f5b01710-80a8-11e9-87dc-d9306140d08b','2019-05-28 05:42:13','2019-05-28 05:42:13'),(4,'988ae1e0-791a-11e9-bac7-b156ec1ca70a','f59323f0-80ce-11e9-ba2b-d7389317c662','2019-05-28 06:12:17','2019-05-28 06:12:17'),(5,'2c35d9a0-7997-11e9-85ea-db4701ef29f4','f5d97bd0-7b28-11e9-8613-1972471cfcb2','2019-05-28 06:34:44','2019-05-28 06:34:44'),(6,'2c35d9a0-7997-11e9-85ea-db4701ef29f4','2dd6bfd0-8023-11e9-bd6e-a58753408755','2019-05-28 06:34:58','2019-05-28 06:34:58');
/*!40000 ALTER TABLE `Conversations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Discussion`
--

DROP TABLE IF EXISTS `Discussion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `Discussion` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `discussion` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Discussion`
--

LOCK TABLES `Discussion` WRITE;
/*!40000 ALTER TABLE `Discussion` DISABLE KEYS */;
/*!40000 ALTER TABLE `Discussion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Discussions`
--

DROP TABLE IF EXISTS `Discussions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `Discussions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `discussion` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Discussions`
--

LOCK TABLES `Discussions` WRITE;
/*!40000 ALTER TABLE `Discussions` DISABLE KEYS */;
INSERT INTO `Discussions` VALUES (1,'asdf','2019-05-22 08:14:28','2019-05-22 08:14:28'),(2,'asdf','2019-05-22 08:22:03','2019-05-22 08:22:03'),(3,'boogers\n\n','2019-05-22 13:23:27','2019-05-22 13:23:27'),(4,'Hello\n','2019-05-22 15:06:18','2019-05-22 15:06:18'),(5,'Hi\n','2019-05-22 15:06:33','2019-05-22 15:06:33');
/*!40000 ALTER TABLE `Discussions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Forums`
--

DROP TABLE IF EXISTS `Forums`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `Forums` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `message` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Forums`
--

LOCK TABLES `Forums` WRITE;
/*!40000 ALTER TABLE `Forums` DISABLE KEYS */;
INSERT INTO `Forums` VALUES (1,'Community Forum','','2019-05-12 04:39:00','2019-05-12 04:39:00'),(2,'Community Forum','','2019-05-12 04:39:22','2019-05-12 04:39:22');
/*!40000 ALTER TABLE `Forums` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Posts`
--

DROP TABLE IF EXISTS `Posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `Posts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `message` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `title` varchar(255) NOT NULL,
  `userUuid` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `parentId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `Posts_userUuid_foreign_idx` (`userUuid`),
  KEY `Posts_parentId_foreign_idx` (`parentId`),
  CONSTRAINT `Posts_parentId_foreign_idx` FOREIGN KEY (`parentId`) REFERENCES `posts` (`id`),
  CONSTRAINT `Posts_userUuid_foreign_idx` FOREIGN KEY (`userUuid`) REFERENCES `users` (`uuid`)
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Posts`
--

LOCK TABLES `Posts` WRITE;
/*!40000 ALTER TABLE `Posts` DISABLE KEYS */;
INSERT INTO `Posts` VALUES (1,'I misplaced my keys and now I can\'t drive my son to school.','2019-05-12 04:39:22','2019-05-12 04:39:22','',NULL,NULL),(2,'I misplaced my keys and now I can\'t drive my son to school.','2019-05-22 17:17:17','2019-05-22 17:17:17','',NULL,NULL),(3,'I misplaced my keys and now I can\'t drive my son to school.','2019-05-22 18:32:28','2019-05-22 18:32:28','',NULL,NULL),(4,'I misplaced my keys and now I can\'t drive my son to school.','2019-05-22 18:40:35','2019-05-22 18:40:35','',NULL,NULL),(5,'I misplaced my keys and now I can\'t drive my son to school.','2019-05-22 20:40:41','2019-05-22 20:40:41','',NULL,NULL),(6,'I misplaced my keys and now I can\'t drive my son to school.','2019-05-22 20:42:32','2019-05-22 20:42:32','',NULL,NULL),(7,'I misplaced my keys and now I can\'t drive my son to school.','2019-05-22 20:46:07','2019-05-22 20:46:07','',NULL,NULL),(8,'I misplaced my keys and now I can\'t drive my son to school.','2019-05-23 13:52:09','2019-05-23 13:52:09','',NULL,NULL),(9,'And this is the body.','2019-05-24 05:25:19','2019-05-24 05:25:19','',NULL,NULL),(10,'And this is the body.','2019-05-24 05:34:30','2019-05-24 05:34:30','',NULL,NULL),(11,'And this is the body.','2019-05-24 05:42:23','2019-05-24 05:42:23','',NULL,NULL),(12,'And this is the body.','2019-05-24 05:43:26','2019-05-24 05:43:26','',NULL,NULL),(13,'And this is the body.','2019-05-24 05:43:57','2019-05-24 05:43:57','',NULL,NULL),(14,'And this is the body.','2019-05-24 05:45:57','2019-05-24 05:45:57','',NULL,NULL),(15,'Body','2019-05-25 04:22:35','2019-05-25 04:22:35','',NULL,NULL),(16,'Body','2019-05-25 04:32:38','2019-05-25 04:34:36','',NULL,NULL),(17,'Body','2019-05-25 04:37:51','2019-05-25 04:37:52','',NULL,NULL),(18,'body\n','2019-05-25 04:58:53','2019-05-25 04:58:53','',NULL,NULL),(19,'body','2019-05-25 05:00:11','2019-05-25 05:00:11','',NULL,NULL),(20,'And this is the body.','2019-05-25 05:11:36','2019-05-25 05:11:36','',NULL,NULL),(21,'The text of the post.','2019-05-25 05:16:50','2019-05-25 05:16:50','',NULL,NULL),(22,'This post is about stuff, ya know.','2019-05-25 05:18:05','2019-05-25 05:18:05','',NULL,NULL),(23,'body text','2019-05-25 05:23:27','2019-05-25 05:23:27','',NULL,NULL),(24,'ajsifdophawieophr','2019-05-25 05:35:14','2019-05-25 05:35:14','',NULL,NULL),(25,'tjiaopfsioaphseir ophiaowhe riophasieop hriaopsehr ioahseir ophaes','2019-05-25 05:51:02','2019-05-25 05:51:02','',NULL,NULL),(26,'I forgot my banjo.\n','2019-05-25 05:58:22','2019-05-25 05:58:22','',NULL,NULL),(27,'The world\'s best post body.','2019-05-25 06:00:13','2019-05-25 06:00:13','',NULL,NULL),(28,'Tasjidfoph ip','2019-05-25 06:02:56','2019-05-25 06:02:56','',NULL,NULL),(29,'Post, not pots.\n','2019-05-26 02:32:36','2019-05-26 02:32:36','',NULL,NULL),(30,'','2019-05-26 06:42:52','2019-05-26 06:42:52','','2c35d9a0-7997-11e9-85ea-db4701ef29f4',29),(31,'','2019-05-26 06:43:20','2019-05-26 06:43:20','','2c35d9a0-7997-11e9-85ea-db4701ef29f4',29),(32,'asdf','2019-05-26 06:46:21','2019-05-26 06:46:21','','2c35d9a0-7997-11e9-85ea-db4701ef29f4',29),(33,'a3749gdfsk','2019-05-26 06:52:08','2019-05-26 06:52:08','','2c35d9a0-7997-11e9-85ea-db4701ef29f4',29),(34,'asdf','2019-05-26 06:55:52','2019-05-26 06:55:52','','2c35d9a0-7997-11e9-85ea-db4701ef29f4',29),(35,'','2019-05-26 06:56:09','2019-05-26 06:56:09','','2c35d9a0-7997-11e9-85ea-db4701ef29f4',29),(36,'asdfjipuw34','2019-05-26 06:56:44','2019-05-26 06:56:44','','2c35d9a0-7997-11e9-85ea-db4701ef29f4',29),(37,'asdf','2019-05-26 07:04:15','2019-05-26 07:04:15','','2c35d9a0-7997-11e9-85ea-db4701ef29f4',29),(38,'asdfaw34','2019-05-26 07:07:34','2019-05-26 07:07:34','','2c35d9a0-7997-11e9-85ea-db4701ef29f4',29),(39,'please talk to me!','2019-05-26 07:54:18','2019-05-26 07:54:18','','2c35d9a0-7997-11e9-85ea-db4701ef29f4',29),(40,'more stuff','2019-05-26 07:59:02','2019-05-26 07:59:02','','2c35d9a0-7997-11e9-85ea-db4701ef29f4',29),(41,'hmmmm','2019-05-26 07:59:07','2019-05-26 07:59:07','','2c35d9a0-7997-11e9-85ea-db4701ef29f4',29),(42,'This is the body of my post. Please comment!','2019-05-26 07:59:36','2019-05-26 07:59:36','This is a new post with a title and everything','2c35d9a0-7997-11e9-85ea-db4701ef29f4',NULL),(43,'here\'s a comment: you suck!','2019-05-26 08:00:36','2019-05-26 08:00:36','','2c35d9a0-7997-11e9-85ea-db4701ef29f4',42),(44,'wowee','2019-05-26 08:00:45','2019-05-26 08:00:45','','2c35d9a0-7997-11e9-85ea-db4701ef29f4',24),(45,'this is interesting too','2019-05-26 08:00:50','2019-05-26 08:00:50','','2c35d9a0-7997-11e9-85ea-db4701ef29f4',23),(46,'Can we please change the drop down menus, we only have one option. it\' s silly for a drop down','2019-05-26 14:55:59','2019-05-26 14:55:59','','2c35d9a0-7997-11e9-85ea-db4701ef29f4',42),(47,'I lost my keys and I need to pick my son up from school.','2019-05-26 15:00:47','2019-05-26 15:00:47','Missing Keys','2c35d9a0-7997-11e9-85ea-db4701ef29f4',NULL),(48,'how to I make him stop.','2019-05-26 15:06:20','2019-05-26 15:06:20','Help, my son is crying and won\'t stop','2c35d9a0-7997-11e9-85ea-db4701ef29f4',NULL),(49,'I\'ve always wanted to drive an RV across the country, but... they\'re so big and ornery.\n\nWhat should I do?','2019-05-27 17:59:44','2019-05-27 17:59:44','Recreational Vehicle','f5b01710-80a8-11e9-87dc-d9306140d08b',NULL),(50,'I think I saw a pig fly, can someone confirm please','2019-05-27 22:30:40','2019-05-27 22:30:40','Can pigs fly?','f59323f0-80ce-11e9-ba2b-d7389317c662',NULL),(51,'Never get one!','2019-05-27 22:30:53','2019-05-27 22:30:53','','f59323f0-80ce-11e9-ba2b-d7389317c662',49),(52,'nope you didn\'t, check your eyes','2019-05-28 15:07:23','2019-05-28 15:07:23','','2c35d9a0-7997-11e9-85ea-db4701ef29f4',50);
/*!40000 ALTER TABLE `Posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `SequelizeMeta`
--

DROP TABLE IF EXISTS `SequelizeMeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SequelizeMeta`
--

LOCK TABLES `SequelizeMeta` WRITE;
/*!40000 ALTER TABLE `SequelizeMeta` DISABLE KEYS */;
INSERT INTO `SequelizeMeta` VALUES ('20190505154346-create-article.js'),('20190506052227-create-forum.js'),('20190512042013-create-post.js'),('20190513142746-create-user.js'),('20190515000000-discussion.js'),('20190522195955-create-add-header-image-url.js'),('20190523074624-create-conversation.js'),('20190524010315-update-posts.js'),('20190526025105-create-session.js'),('20190527013153-profile-image.js');
/*!40000 ALTER TABLE `SequelizeMeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Sessions`
--

DROP TABLE IF EXISTS `Sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `Sessions` (
  `session_id` varchar(32) NOT NULL,
  `expires` datetime DEFAULT NULL,
  `data` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`session_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Sessions`
--

LOCK TABLES `Sessions` WRITE;
/*!40000 ALTER TABLE `Sessions` DISABLE KEYS */;
INSERT INTO `Sessions` VALUES ('-q_JBFBWssQnW5SW3KtgJ_Cf0-UiqTWa','2019-05-27 20:39:07','{\"cookie\":{\"originalMaxAge\":6000000,\"expires\":\"2019-05-27T20:39:07.053Z\",\"httpOnly\":true,\"path\":\"/\"},\"passport\":{\"user\":\"988ae1e0-791a-11e9-bac7-b156ec1ca70a\"},\"expires\":\"2019-05-27T20:39:07.053Z\"}','2019-05-27 17:59:00','2019-05-27 18:59:07'),('69FeaGGgUI1Bkr9sKZm2QrclOCfJJkcr','2019-05-28 07:13:11','{\"cookie\":{\"originalMaxAge\":6000000,\"expires\":\"2019-05-28T05:33:41.939Z\",\"httpOnly\":true,\"path\":\"/\"},\"passport\":{\"user\":\"988ae1e0-791a-11e9-bac7-b156ec1ca70a\"},\"expires\":\"2019-05-28T05:33:41.939Z\"}','2019-05-28 03:53:41','2019-05-28 05:33:11'),('9DQnH2JcvbHVCichD0AUMJxOkmWnqAq9','2019-05-28 18:08:05','{\"cookie\":{\"originalMaxAge\":6000000,\"expires\":\"2019-05-28T18:07:54.561Z\",\"httpOnly\":true,\"path\":\"/\"},\"passport\":{},\"expires\":\"2019-05-28T18:07:54.561Z\"}','2019-05-28 15:06:23','2019-05-28 16:28:05'),('EQ3enc8k4cKAEgb9YiI0dd0nmHbq9HF0','2019-05-28 08:16:24','{\"cookie\":{\"originalMaxAge\":6000000,\"expires\":\"2019-05-28T08:14:03.830Z\",\"httpOnly\":true,\"path\":\"/\"},\"passport\":{\"user\":\"2c35d9a0-7997-11e9-85ea-db4701ef29f4\"},\"expires\":\"2019-05-28T08:14:03.830Z\"}','2019-05-28 06:34:03','2019-05-28 06:36:24'),('k4Inz7RXc69snOMomMi30GNAX4hxbIDO','2019-05-27 06:36:40','{\"cookie\":{\"originalMaxAge\":6000000,\"expires\":\"2019-05-27T06:14:04.802Z\",\"httpOnly\":true,\"path\":\"/\"},\"passport\":{\"user\":\"2c35d9a0-7997-11e9-85ea-db4701ef29f4\"},\"expires\":\"2019-05-27T06:14:04.802Z\"}','2019-05-27 00:49:30','2019-05-27 04:56:40'),('Mopvl-AieqdFdEXlujX_G0PIcPu30a2u','2019-05-26 06:36:25','{\"cookie\":{\"originalMaxAge\":6000000,\"expires\":\"2019-05-26T05:07:09.763Z\",\"httpOnly\":true,\"path\":\"/\"},\"passport\":{\"user\":\"2c35d9a0-7997-11e9-85ea-db4701ef29f4\"},\"expires\":\"2019-05-26T05:07:09.763Z\"}','2019-05-26 03:27:09','2019-05-26 04:56:25'),('NfYEwaMmN1Bnq_9-vGGvk2vgpbzcETcI','2019-05-28 00:39:08','{\"cookie\":{\"originalMaxAge\":6000000,\"expires\":\"2019-05-28T00:11:29.587Z\",\"httpOnly\":true,\"path\":\"/\"},\"passport\":{},\"expires\":\"2019-05-28T00:11:29.587Z\"}','2019-05-27 21:42:59','2019-05-27 22:59:08'),('qOKf5MhJODlCcaYQAl9TooGQEIG4aS2E','2019-05-28 08:14:17','{\"cookie\":{\"originalMaxAge\":6000000,\"expires\":\"2019-05-28T07:16:40.367Z\",\"httpOnly\":true,\"path\":\"/\"},\"passport\":{\"user\":\"988ae1e0-791a-11e9-bac7-b156ec1ca70a\"},\"expires\":\"2019-05-28T07:16:40.367Z\"}','2019-05-28 05:36:40','2019-05-28 06:34:17'),('totSqm6sjh2ksRv42skDFJl7eFIFjX-6','2019-05-28 02:42:28','{\"cookie\":{\"originalMaxAge\":6000000,\"expires\":\"2019-05-28T01:52:54.141Z\",\"httpOnly\":true,\"path\":\"/\"},\"passport\":{\"user\":\"2c35d9a0-7997-11e9-85ea-db4701ef29f4\"},\"expires\":\"2019-05-28T01:52:54.141Z\"}','2019-05-28 00:12:54','2019-05-28 01:02:28'),('vgPaAM-nq1fd7P1MJr-gtWTe3IIHARUe','2019-05-26 09:40:50','{\"cookie\":{\"originalMaxAge\":6000000,\"expires\":\"2019-05-26T08:29:37.454Z\",\"httpOnly\":true,\"path\":\"/\"},\"passport\":{\"user\":\"2c35d9a0-7997-11e9-85ea-db4701ef29f4\"},\"expires\":\"2019-05-26T08:29:37.454Z\"}','2019-05-26 06:49:37','2019-05-26 08:00:50'),('xIVyYrydyE85JowS2-mf23umnwXDAQ-y','2019-05-26 17:39:03','{\"cookie\":{\"originalMaxAge\":6000000,\"expires\":\"2019-05-26T17:38:59.245Z\",\"httpOnly\":true,\"path\":\"/\"},\"passport\":{},\"expires\":\"2019-05-26T17:38:59.245Z\"}','2019-05-26 14:55:25','2019-05-26 15:59:03'),('yas-Qc_sIMk3yAIyxQMulf3V3-FVmLDx','2019-05-26 08:28:46','{\"cookie\":{\"originalMaxAge\":6000000,\"expires\":\"2019-05-26T06:49:12.905Z\",\"httpOnly\":true,\"path\":\"/\"},\"passport\":{\"user\":\"2c35d9a0-7997-11e9-85ea-db4701ef29f4\"},\"expires\":\"2019-05-26T06:49:12.905Z\"}','2019-05-26 05:09:12','2019-05-26 06:48:46');
/*!40000 ALTER TABLE `Sessions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Sessions_backup`
--

DROP TABLE IF EXISTS `Sessions_backup`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `Sessions_backup` (
  `session_id` varchar(32) NOT NULL,
  `expires` datetime DEFAULT NULL,
  `data` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`session_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Sessions_backup`
--

LOCK TABLES `Sessions_backup` WRITE;
/*!40000 ALTER TABLE `Sessions_backup` DISABLE KEYS */;
INSERT INTO `Sessions_backup` VALUES ('Mopvl-AieqdFdEXlujX_G0PIcPu30a2u','2019-05-26 05:24:44','{\"cookie\":{\"originalMaxAge\":6000000,\"expires\":\"2019-05-26T05:07:09.763Z\",\"httpOnly\":true,\"path\":\"/\"},\"passport\":{\"user\":\"2c35d9a0-7997-11e9-85ea-db4701ef29f4\"},\"expires\":\"2019-05-26T05:07:09.763Z\"}','2019-05-26 03:27:09','2019-05-26 03:44:44');
/*!40000 ALTER TABLE `Sessions_backup` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Threads`
--

DROP TABLE IF EXISTS `Threads`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `Threads` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `discussion` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Threads`
--

LOCK TABLES `Threads` WRITE;
/*!40000 ALTER TABLE `Threads` DISABLE KEYS */;
/*!40000 ALTER TABLE `Threads` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `users` (
  `uuid` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `ownerUuid` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `profileImage` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`uuid`),
  UNIQUE KEY `email` (`email`),
  KEY `ownerUuid` (`ownerUuid`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`ownerUuid`) REFERENCES `users` (`uuid`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('2c35d9a0-7997-11e9-85ea-db4701ef29f4','smash','a@gmail.com','$2b$08$Dac9GDnabiha8sdU6oSQOOD3n4zH18oSdwlKjaaBVMNZZNWvIhY/y','2019-05-18 18:03:00','2019-05-18 18:03:00',NULL,NULL),('2dd6bfd0-8023-11e9-bd6e-a58753408755','Sonja','c@gmail.com','$2b$08$bVN4IjxWEnJRo5gBBveWZ.KBcQL1ybi/o.pLPL6vkZt9JgoCzFTam','2019-05-27 02:00:19','2019-05-27 02:00:19',NULL,NULL),('3e119740-7aaa-11e9-bbb9-4f79ae4f7d89','Sonja','r@gmail.com','$2b$08$AMESpFBNaOZUpQFBvkYXgOuxgj30D0BajEKmyjf64oJq5ZSARYFxm','2019-05-20 02:52:01','2019-05-20 02:52:01',NULL,NULL),('6f673600-801e-11e9-b91c-8d03386ea680','Bonja','b@gmail.com','$2b$08$xZsl6L4PxCHysqDY0f2Pg.eS11ZdZXqtMeWohRVa4lM3mWjZZoXIy','2019-05-27 01:26:21','2019-05-27 01:26:21',NULL,NULL),('988ae1e0-791a-11e9-bac7-b156ec1ca70a','Face','d@gmail.com','$2b$08$ZDOuFj5OtIOOvjwLco2KDeuzApiwuVsgqMakpOciTlBwBzLZ0Gk42','2019-05-18 03:11:14','2019-05-18 03:11:14',NULL,NULL),('f59323f0-80ce-11e9-ba2b-d7389317c662','Fish','t@gmail.com','$2b$08$dZzinbAkiHnOB0s80H/a.uTIj8osN1tzz2S303V7x6yy8CwJ5UjSS','2019-05-27 22:29:58','2019-05-27 22:29:58',NULL,'b91637ee-385a-4604-a08a-4389a170e634.png'),('f5b01710-80a8-11e9-87dc-d9306140d08b','Dogstar','dtweston@gmail.com','$2b$08$8l8FLlS3hDqT84.5N/LXFuZzcIN4voaFyghVKkGD3Rdhv8wnV6UGe','2019-05-27 17:57:57','2019-05-27 17:57:57',NULL,'79245e9d-b758-487f-9ae4-f8753f2d9e44.png'),('f5d97bd0-7b28-11e9-8613-1972471cfcb2','Sonja','z@gmail.com','$2b$08$Br2D6O/L79HLQD9Utwu4MuJvkVdNZQwLVcdwnATNdrjaBIcAqSb/G','2019-05-20 17:59:06','2019-05-20 17:59:06',NULL,NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-05-28 14:28:49
