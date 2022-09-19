CREATE DATABASE IF NOT EXISTS `my_test_db`;
use `my_test_db`;
CREATE TABLE IF NOT EXISTS `test_table` (
  `test_field` varchar(255) DEFAULT NULL,
  `test_field2` int(11) DEFAULT 0
) ENGINE=InnoDB;