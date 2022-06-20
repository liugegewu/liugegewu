CREATE TABLE `user` (
  `userName` varchar(20) DEFAULT NULL,
  `userCode` int DEFAULT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  `sex` varchar(1) DEFAULT NULL,
  `birthDay` date DEFAULT NULL,
  `age` int DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;



INSERT INTO testdemo.`user`
(userName, userCode, id, sex, birthDay, age, address)
VALUES('王五', 1, 1, '男', '2020-01-01', 18, '托马斯行星');
INSERT INTO testdemo.`user`
(userName, userCode, id, sex, birthDay, age, address)
VALUES('张三', 2, 2, '男', '2018-01-01', 20, '呼啦啦转一圈');
INSERT INTO testdemo.`user`
(userName, userCode, id, sex, birthDay, age, address)
VALUES('老刘', 0, 3, '男', NULL, 0, '上海');