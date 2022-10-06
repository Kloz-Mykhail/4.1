/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: author
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `author` (
  `id` int NOT NULL AUTO_INCREMENT,
  `author` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_9f79b5a1b561f817e127cc4a42` (`author`)
) ENGINE = InnoDB AUTO_INCREMENT = 34 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: book
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `book` (
  `title` varchar(255) NOT NULL,
  `year` int NOT NULL,
  `pages` int NOT NULL,
  `about` varchar(255) NOT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  `count` int NOT NULL DEFAULT '0',
  `deleted` tinyint NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 30 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: book_author
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `book_author` (
  `id` int NOT NULL AUTO_INCREMENT,
  `book_id` int NOT NULL,
  `author_id` varchar(255) NOT NULL,
  `deleted` tinyint NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 29 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: author
# ------------------------------------------------------------

INSERT INTO
  `author` (`id`, `author`)
VALUES
  (32, 'af');
INSERT INTO
  `author` (`id`, `author`)
VALUES
  (29, 'afdcws');
INSERT INTO
  `author` (`id`, `author`)
VALUES
  (14, 'А. Белов');
INSERT INTO
  `author` (`id`, `author`)
VALUES
  (17, 'Александр Сераков');
INSERT INTO
  `author` (`id`, `author`)
VALUES
  (1, 'Андрей Богуславский');
INSERT INTO
  `author` (`id`, `author`)
VALUES
  (5, 'Брюс Эккель');
INSERT INTO
  `author` (`id`, `author`)
VALUES
  (8, 'Гэри Маклин Холл');
INSERT INTO
  `author` (`id`, `author`)
VALUES
  (23, 'Джей Макгаврен');
INSERT INTO
  `author` (`id`, `author`)
VALUES
  (9, 'Джеймс Р. Грофф');
INSERT INTO
  `author` (`id`, `author`)
VALUES
  (13, 'Джереми Блум');
INSERT INTO
  `author` (`id`, `author`)
VALUES
  (12, 'Джон Вудкок');
INSERT INTO
  `author` (`id`, `author`)
VALUES
  (24, 'Дрю Нейл');
INSERT INTO
  `author` (`id`, `author`)
VALUES
  (7, 'Дэвид Флэнаган');
INSERT INTO
  `author` (`id`, `author`)
VALUES
  (28, 'Клиффорд Штайн');
INSERT INTO
  `author` (`id`, `author`)
VALUES
  (10, 'Люк Веллинг');
INSERT INTO
  `author` (`id`, `author`)
VALUES
  (3, 'М. Вильямс');
INSERT INTO
  `author` (`id`, `author`)
VALUES
  (2, 'Марк Саммерфильд');
INSERT INTO
  `author` (`id`, `author`)
VALUES
  (22, 'Мартин Фаулер');
INSERT INTO
  `author` (`id`, `author`)
VALUES
  (19, 'Пол Дейтел');
INSERT INTO
  `author` (`id`, `author`)
VALUES
  (25, 'Прамодкумар Дж. Садаладж');
INSERT INTO
  `author` (`id`, `author`)
VALUES
  (20, 'Роберт Мартин');
INSERT INTO
  `author` (`id`, `author`)
VALUES
  (27, 'Рональд Ривест');
INSERT INTO
  `author` (`id`, `author`)
VALUES
  (11, 'Сергей Мастицкий');
INSERT INTO
  `author` (`id`, `author`)
VALUES
  (16, 'Сет Гринберг');
INSERT INTO
  `author` (`id`, `author`)
VALUES
  (15, 'Сэмюэл Грингард');
INSERT INTO
  `author` (`id`, `author`)
VALUES
  (18, 'Тим Кедлек');
INSERT INTO
  `author` (`id`, `author`)
VALUES
  (6, 'Томас Кормен');
INSERT INTO
  `author` (`id`, `author`)
VALUES
  (4, 'Уэс Маккинни');
INSERT INTO
  `author` (`id`, `author`)
VALUES
  (26, 'Чарльз Лейзерсон');
INSERT INTO
  `author` (`id`, `author`)
VALUES
  (21, 'Энтони Грей');

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: book
# ------------------------------------------------------------

INSERT INTO
  `book` (
    `title`,
    `year`,
    `pages`,
    `about`,
    `id`,
    `count`,
    `deleted`
  )
VALUES
  (
    'СИ++ И КОМПЬЮТЕРНАЯ ГРАФИКА',
    1999,
    356,
    'СИ++ И КОМПЬЮТЕРНАЯ ГРАФИКА',
    1,
    2,
    0
  );
INSERT INTO
  `book` (
    `title`,
    `year`,
    `pages`,
    `about`,
    `id`,
    `count`,
    `deleted`
  )
VALUES
  (
    'Программирование на языке Go!',
    1998,
    355,
    'Программирование на языке Go!',
    2,
    0,
    1
  );
INSERT INTO
  `book` (
    `title`,
    `year`,
    `pages`,
    `about`,
    `id`,
    `count`,
    `deleted`
  )
VALUES
  (
    'Толковый словарь сетевых терминов и аббревиатур',
    1997,
    354,
    'Толковый словарь сетевых терминов и аббревиатур',
    3,
    0,
    0
  );
INSERT INTO
  `book` (
    `title`,
    `year`,
    `pages`,
    `about`,
    `id`,
    `count`,
    `deleted`
  )
VALUES
  (
    'Python for Data Analysis',
    1996,
    353,
    'Python for Data Analysis',
    4,
    0,
    0
  );
INSERT INTO
  `book` (
    `title`,
    `year`,
    `pages`,
    `about`,
    `id`,
    `count`,
    `deleted`
  )
VALUES
  (
    'Thinking in Java (4th Edition)',
    1995,
    352,
    'Thinking in Java 4th Edition',
    5,
    0,
    0
  );
INSERT INTO
  `book` (
    `title`,
    `year`,
    `pages`,
    `about`,
    `id`,
    `count`,
    `deleted`
  )
VALUES
  (
    'Introduction to Algorithms',
    1921,
    351,
    'Introduction to Algorithms',
    6,
    0,
    0
  );
INSERT INTO
  `book` (
    `title`,
    `year`,
    `pages`,
    `about`,
    `id`,
    `count`,
    `deleted`
  )
VALUES
  (
    'JavaScript Pocket Reference',
    1994,
    350,
    'JavaScript Pocket Reference',
    7,
    0,
    0
  );
INSERT INTO
  `book` (
    `title`,
    `year`,
    `pages`,
    `about`,
    `id`,
    `count`,
    `deleted`
  )
VALUES
  (
    'Adaptive Code via C#: Class and Interface Design, Design Patterns, and SOLID Principles',
    1993,
    349,
    'Адаптивный код на С#, Class and Interface Design, Design Patterns, and SOLID Principles',
    8,
    0,
    0
  );
INSERT INTO
  `book` (
    `title`,
    `year`,
    `pages`,
    `about`,
    `id`,
    `count`,
    `deleted`
  )
VALUES
  (
    'SQL: The Complete Referenc',
    1992,
    348,
    'SQL: The Complete Referenc',
    9,
    0,
    0
  );
INSERT INTO
  `book` (
    `title`,
    `year`,
    `pages`,
    `about`,
    `id`,
    `count`,
    `deleted`
  )
VALUES
  (
    'PHP and MySQL Web Development',
    1991,
    347,
    'PHP and MySQL Web Development',
    10,
    0,
    0
  );
INSERT INTO
  `book` (
    `title`,
    `year`,
    `pages`,
    `about`,
    `id`,
    `count`,
    `deleted`
  )
VALUES
  (
    'Статистический анализ и визуализация данных с помощью R',
    1990,
    346,
    'Статистический анализ и визуализация данных с помощью R',
    11,
    0,
    0
  );
INSERT INTO
  `book` (
    `title`,
    `year`,
    `pages`,
    `about`,
    `id`,
    `count`,
    `deleted`
  )
VALUES
  (
    'Computer Coding for Kid',
    1885,
    345,
    'Computer Coding for Kid',
    12,
    12,
    0
  );
INSERT INTO
  `book` (
    `title`,
    `year`,
    `pages`,
    `about`,
    `id`,
    `count`,
    `deleted`
  )
VALUES
  (
    'Exploring Arduino: Tools and Techniques for Engineering Wizardry',
    2000,
    344,
    'Tools and Techniques for Engineering Wizardry',
    13,
    0,
    0
  );
INSERT INTO
  `book` (
    `title`,
    `year`,
    `pages`,
    `about`,
    `id`,
    `count`,
    `deleted`
  )
VALUES
  (
    'Программирование микроконтроллеров для начинающих и не только',
    2001,
    342,
    'Программирование микроконтроллеров для начинающих и не только',
    14,
    0,
    0
  );
INSERT INTO
  `book` (
    `title`,
    `year`,
    `pages`,
    `about`,
    `id`,
    `count`,
    `deleted`
  )
VALUES
  (
    'The Internet of Things',
    2002,
    341,
    'The Internet of Things',
    15,
    0,
    0
  );
INSERT INTO
  `book` (
    `title`,
    `year`,
    `pages`,
    `about`,
    `id`,
    `count`,
    `deleted`
  )
VALUES
  (
    'Sketching User Experiences: The Workbook',
    2003,
    340,
    'Sketching User Experiences: The Workbook',
    16,
    0,
    0
  );
INSERT INTO
  `book` (
    `title`,
    `year`,
    `pages`,
    `about`,
    `id`,
    `count`,
    `deleted`
  )
VALUES
  ('InDesign CS6', 2004, 339, 'InDesign CS6', 17, 0, 0);
INSERT INTO
  `book` (
    `title`,
    `year`,
    `pages`,
    `about`,
    `id`,
    `count`,
    `deleted`
  )
VALUES
  (
    'Адаптивный дизайн. Делаем сайты для любых устройств',
    2005,
    338,
    'Адаптивный дизайн. Делаем сайты для любых устройств',
    18,
    0,
    0
  );
INSERT INTO
  `book` (
    `title`,
    `year`,
    `pages`,
    `about`,
    `id`,
    `count`,
    `deleted`
  )
VALUES
  (
    'Android для разработчиков',
    2006,
    337,
    'Android для разработчиков',
    19,
    0,
    0
  );
INSERT INTO
  `book` (
    `title`,
    `year`,
    `pages`,
    `about`,
    `id`,
    `count`,
    `deleted`
  )
VALUES
  (
    'Clean Code: A Handbook of Agile Software Craftsmanship',
    2007,
    336,
    'Clean Code: A Handbook of Agile Software Craftsmanship',
    20,
    0,
    0
  );
INSERT INTO
  `book` (
    `title`,
    `year`,
    `pages`,
    `about`,
    `id`,
    `count`,
    `deleted`
  )
VALUES
  (
    'Swift Pocket Reference: Programming for iOS and OS X',
    2008,
    335,
    'Swift Pocket Reference: Programming for iOS and OS X',
    21,
    0,
    0
  );
INSERT INTO
  `book` (
    `title`,
    `year`,
    `pages`,
    `about`,
    `id`,
    `count`,
    `deleted`
  )
VALUES
  (
    'NoSQL Distilled: A Brief Guide to the Emerging World of Polyglot Persistence',
    2009,
    334,
    'NoSQL Distilled: A Brief Guide to the Emerging World of Polyglot Persistence',
    22,
    0,
    0
  );
INSERT INTO
  `book` (
    `title`,
    `year`,
    `pages`,
    `about`,
    `id`,
    `count`,
    `deleted`
  )
VALUES
  (
    'Head First Ruby',
    2010,
    333,
    'Head First Ruby',
    23,
    0,
    0
  );
INSERT INTO
  `book` (
    `title`,
    `year`,
    `pages`,
    `about`,
    `id`,
    `count`,
    `deleted`
  )
VALUES
  ('Practical Vim', 2011, 332, 'Practical Vim', 24, 0, 0);
INSERT INTO
  `book` (
    `title`,
    `year`,
    `pages`,
    `about`,
    `id`,
    `count`,
    `deleted`
  )
VALUES
  ('sdv', 213, 432, 'SDGvas', 25, 0, 0);
INSERT INTO
  `book` (
    `title`,
    `year`,
    `pages`,
    `about`,
    `id`,
    `count`,
    `deleted`
  )
VALUES
  ('sdv', 213, 432, 'SDGvas', 26, 0, 0);
INSERT INTO
  `book` (
    `title`,
    `year`,
    `pages`,
    `about`,
    `id`,
    `count`,
    `deleted`
  )
VALUES
  ('sdv', 213, 432, 'SDGvas', 27, 0, 0);
INSERT INTO
  `book` (
    `title`,
    `year`,
    `pages`,
    `about`,
    `id`,
    `count`,
    `deleted`
  )
VALUES
  ('argf', 123, 12, 'asddc', 28, 0, 0);
INSERT INTO
  `book` (
    `title`,
    `year`,
    `pages`,
    `about`,
    `id`,
    `count`,
    `deleted`
  )
VALUES
  ('sdv', 213, 432, 'SDGvas', 29, 0, 0);

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: book_author
# ------------------------------------------------------------

INSERT INTO
  `book_author` (`id`, `book_id`, `author_id`, `deleted`)
VALUES
  (1, 1, '1', 0);
INSERT INTO
  `book_author` (`id`, `book_id`, `author_id`, `deleted`)
VALUES
  (2, 2, '2', 0);
INSERT INTO
  `book_author` (`id`, `book_id`, `author_id`, `deleted`)
VALUES
  (3, 3, '3', 0);
INSERT INTO
  `book_author` (`id`, `book_id`, `author_id`, `deleted`)
VALUES
  (4, 4, '4', 0);
INSERT INTO
  `book_author` (`id`, `book_id`, `author_id`, `deleted`)
VALUES
  (5, 5, '5', 0);
INSERT INTO
  `book_author` (`id`, `book_id`, `author_id`, `deleted`)
VALUES
  (6, 6, '6', 0);
INSERT INTO
  `book_author` (`id`, `book_id`, `author_id`, `deleted`)
VALUES
  (7, 7, '7', 0);
INSERT INTO
  `book_author` (`id`, `book_id`, `author_id`, `deleted`)
VALUES
  (8, 8, '8', 0);
INSERT INTO
  `book_author` (`id`, `book_id`, `author_id`, `deleted`)
VALUES
  (9, 9, '9', 0);
INSERT INTO
  `book_author` (`id`, `book_id`, `author_id`, `deleted`)
VALUES
  (10, 10, '10', 0);
INSERT INTO
  `book_author` (`id`, `book_id`, `author_id`, `deleted`)
VALUES
  (11, 11, '11', 0);
INSERT INTO
  `book_author` (`id`, `book_id`, `author_id`, `deleted`)
VALUES
  (12, 12, '12', 0);
INSERT INTO
  `book_author` (`id`, `book_id`, `author_id`, `deleted`)
VALUES
  (13, 13, '13', 0);
INSERT INTO
  `book_author` (`id`, `book_id`, `author_id`, `deleted`)
VALUES
  (14, 14, '14', 0);
INSERT INTO
  `book_author` (`id`, `book_id`, `author_id`, `deleted`)
VALUES
  (15, 15, '15', 0);
INSERT INTO
  `book_author` (`id`, `book_id`, `author_id`, `deleted`)
VALUES
  (16, 16, '16', 0);
INSERT INTO
  `book_author` (`id`, `book_id`, `author_id`, `deleted`)
VALUES
  (17, 17, '17', 0);
INSERT INTO
  `book_author` (`id`, `book_id`, `author_id`, `deleted`)
VALUES
  (18, 18, '18', 0);
INSERT INTO
  `book_author` (`id`, `book_id`, `author_id`, `deleted`)
VALUES
  (19, 19, '19', 0);
INSERT INTO
  `book_author` (`id`, `book_id`, `author_id`, `deleted`)
VALUES
  (20, 20, '20', 0);
INSERT INTO
  `book_author` (`id`, `book_id`, `author_id`, `deleted`)
VALUES
  (21, 21, '21', 0);
INSERT INTO
  `book_author` (`id`, `book_id`, `author_id`, `deleted`)
VALUES
  (22, 22, '22', 0);
INSERT INTO
  `book_author` (`id`, `book_id`, `author_id`, `deleted`)
VALUES
  (23, 23, '23', 0);
INSERT INTO
  `book_author` (`id`, `book_id`, `author_id`, `deleted`)
VALUES
  (24, 24, '24', 0);
INSERT INTO
  `book_author` (`id`, `book_id`, `author_id`, `deleted`)
VALUES
  (25, 22, '25', 0);
INSERT INTO
  `book_author` (`id`, `book_id`, `author_id`, `deleted`)
VALUES
  (26, 6, '26', 0);
INSERT INTO
  `book_author` (`id`, `book_id`, `author_id`, `deleted`)
VALUES
  (27, 6, '27', 0);
INSERT INTO
  `book_author` (`id`, `book_id`, `author_id`, `deleted`)
VALUES
  (28, 6, '28', 0);

/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
