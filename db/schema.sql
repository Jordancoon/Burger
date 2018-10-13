DROP TABLE IF EXISTS `burgers`;

CREATE TABLE `burgers` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `burger_name` varchar(255) NOT NULL DEFAULT '',
  `devoured` tinyint(1) DEFAULT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;