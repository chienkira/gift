-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- ホスト: localhost
-- 生成日時: 2016 年 9 月 11 日 12:36
-- サーバのバージョン: 5.5.50-0ubuntu0.14.04.1
-- PHP のバージョン: 5.5.9-1ubuntu4.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- データベース: `gift_reservation`
--

-- --------------------------------------------------------

--
-- テーブルの構造 `gift`
--

CREATE TABLE IF NOT EXISTS `gift` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `gift_id` varchar(10) NOT NULL,
  `title` varchar(100) DEFAULT NULL,
  `description` varchar(500) DEFAULT NULL,
  `url` varchar(100) DEFAULT NULL,
  `images_img` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=38 ;

--
-- テーブルのデータのダンプ `gift`
--

INSERT INTO `gift` (`id`, `gift_id`, `title`, `description`, `url`, `images_img`) VALUES
(32, 'G01', 'ベトナムコーヒー', 'ベトナムのお土産と言ったら絶対に買うべきお土産です！付属の器具でコーヒーを入れ、ベトナムコーヒーではおなじみの練乳で甘さを調節して飲んでみてください。インスタントはもちろん、その場で豆を挽いてくれるコーヒーもあります。', NULL, 'http://kiradev.me/gift/app-content/img/G01.jpg'),
(33, 'G02', 'ランタン', 'ランタンの景色が美しい古都ホイアンに訪れるなら絶対に買っておきたいお土産です。サイズも小さいものから大きなものまでありますよ！', NULL, 'http://kiradev.me/gift/app-content/img/G02.jpg'),
(34, 'G03', 'ノンラー', '外国人がベトナム人をイメージする“もの”といえばこのノンラー。このノンラーを被って観光すれば、気分はベトナム人！ベトナムの思い出を思い出させてくれるノンラー、せっかくベトナムに来たなら買ってみては？', NULL, 'http://kiradev.me/gift/app-content/img/G03.jpg'),
(35, 'G04', 'ライム塩胡椒', '塩胡椒にライムを絞ってそこに焼いた肉をつけて食べる。筆者がベトナム滞在中にどハマりした食べ方です。そんなベトナムで定番の塩胡椒×ライムの組み合わせを家に持ち帰っちゃいましょう！市場などで大量買いできる美味しいお土産です。', NULL, 'http://kiradev.me/gift/app-content/img/G04.jpg'),
(36, 'G05', 'インスタントフォー', 'ベトナム料理の代名詞でもあるフォーを、帰国してからもお手軽に食べたい方にはもってこいのお土産です。ベトナムに行ってきたよ！なんて言わなくても、このお土産を渡せば十分です。', NULL, 'http://kiradev.me/gift/app-content/img/G05.jpg'),
(37, 'G06', 'サテ・トム', 'これはベトナム風ラー油と言われているもので、海老の風味がするお土産です。普段の食事に数滴垂らすだけで、海老の風味が口の中に広がります！ビールとの相性が抜群のおすすめお土産です。', NULL, 'http://kiradev.me/gift/app-content/img/G06.jpg');

-- --------------------------------------------------------

--
-- テーブルの構造 `reservation`
--

CREATE TABLE IF NOT EXISTS `reservation` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `receiver_id` varchar(10) CHARACTER SET latin1 NOT NULL,
  `gift_id` varchar(10) CHARACTER SET latin1 NOT NULL,
  `requested_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=175 ;

--
-- テーブルのデータのダンプ `reservation`
--

INSERT INTO `reservation` (`id`, `receiver_id`, `gift_id`, `requested_time`) VALUES
(79, 'U005', 'G02', '2016-09-10 08:21:28'),
(174, 'U001', 'G01', '2016-09-11 00:45:47');

-- --------------------------------------------------------

--
-- テーブルの構造 `reveicer`
--

CREATE TABLE IF NOT EXISTS `reveicer` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `receiver_id` varchar(10) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `avatar_img` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=39 ;

--
-- テーブルのデータのダンプ `reveicer`
--

INSERT INTO `reveicer` (`id`, `receiver_id`, `name`, `avatar_img`) VALUES
(2, 'U002', '国吉', 'http://kiradev.me/gift/app-content/img/002.jpg'),
(3, 'U003', '野尻', 'http://kiradev.me/gift/app-content/img/005.jpg'),
(4, 'U004', '榎元', 'http://kiradev.me/gift/app-content/img/004.png'),
(33, 'U006', '腰本', 'http://kiradev.me/gift/app-content/img/003.jpg'),
(34, 'U007', '大城', 'http://kiradev.me/gift/app-content/img/007.png'),
(35, 'U008', '川崎', 'http://kiradev.me/gift/app-content/img/008.jpg'),
(36, 'U009', '小林', 'http://kiradev.me/gift/app-content/img/006.jpg'),
(37, 'U010', '三橋', 'http://kiradev.me/gift/app-content/img/010.jpg'),
(38, 'U011', '蛭田', 'http://kiradev.me/gift/app-content/img/011.jpg'),
(990, 'U001', 'Chien', 'http://kiradev.me/gift/app-content/img/001.jpg');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
