LOCK TABLES `burgers` WRITE;

INSERT INTO `burgers` (`id`, `burger_name`, `devoured`, `date`)
VALUES
	(1,'Bacon Cheddar',0,'2017-08-05 16:29:59'),
	(2,'Jalapeño Jack',0,'2017-08-05 16:30:08'),
	(3,'Hawaiian',0,'2017-08-05 16:30:18');

UNLOCK TABLES;