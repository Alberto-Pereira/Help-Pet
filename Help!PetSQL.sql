-- --------------------------------------------------------
-- Servidor:                     klbcedmmqp7w17ik.cbetxkdyhwsb.us-east-1.rds.amazonaws.com
-- Versão do servidor:           10.4.8-MariaDB-log - Source distribution
-- OS do Servidor:               Linux
-- HeidiSQL Versão:              11.1.0.6116
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Copiando estrutura do banco de dados para helppet
CREATE DATABASE IF NOT EXISTS `helppet` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci */;
USE `helppet`;

-- Copiando estrutura para view helppet.animais_doacoes
-- Criando tabela temporária para evitar erros de dependência de VIEW
CREATE TABLE `animais_doacoes` (
	`id_usuario` INT(11) NOT NULL,
	`nome_usuario` VARCHAR(50) NOT NULL COLLATE 'latin1_swedish_ci',
	`sobrenome_usuario` VARCHAR(50) NOT NULL COLLATE 'latin1_swedish_ci',
	`telefone` VARCHAR(20) NOT NULL COLLATE 'latin1_swedish_ci',
	`whatsapp` VARCHAR(20) NULL COLLATE 'latin1_swedish_ci',
	`telegram` VARCHAR(20) NULL COLLATE 'latin1_swedish_ci',
	`imagem_usuario` LONGTEXT NOT NULL COLLATE 'latin1_swedish_ci',
	`id_pet` INT(11) NOT NULL,
	`imagem_pet` LONGTEXT NOT NULL COLLATE 'latin1_swedish_ci',
	`nome_pet` VARCHAR(50) NOT NULL COLLATE 'latin1_swedish_ci',
	`raca_pet` VARCHAR(50) NOT NULL COLLATE 'latin1_swedish_ci',
	`sexo_pet` VARCHAR(10) NOT NULL COLLATE 'latin1_swedish_ci',
	`cor_pet` VARCHAR(50) NOT NULL COLLATE 'latin1_swedish_ci',
	`numero_coleira` INT(11) NULL,
	`descricao_pet` LONGTEXT NULL COLLATE 'latin1_swedish_ci',
	`longitude` TEXT NULL COLLATE 'latin1_swedish_ci',
	`latitude` TEXT NULL COLLATE 'latin1_swedish_ci',
	`status_pet` CHAR(1) NOT NULL COLLATE 'latin1_swedish_ci'
) ENGINE=MyISAM;

-- Copiando estrutura para view helppet.animais_perdidos
-- Criando tabela temporária para evitar erros de dependência de VIEW
CREATE TABLE `animais_perdidos` (
	`id_usuario` INT(11) NOT NULL,
	`nome_usuario` VARCHAR(50) NOT NULL COLLATE 'latin1_swedish_ci',
	`sobrenome_usuario` VARCHAR(50) NOT NULL COLLATE 'latin1_swedish_ci',
	`telefone` VARCHAR(20) NOT NULL COLLATE 'latin1_swedish_ci',
	`whatsapp` VARCHAR(20) NULL COLLATE 'latin1_swedish_ci',
	`telegram` VARCHAR(20) NULL COLLATE 'latin1_swedish_ci',
	`imagem_usuario` LONGTEXT NOT NULL COLLATE 'latin1_swedish_ci',
	`id_pet` INT(11) NOT NULL,
	`imagem_pet` LONGTEXT NOT NULL COLLATE 'latin1_swedish_ci',
	`nome_pet` VARCHAR(50) NOT NULL COLLATE 'latin1_swedish_ci',
	`raca_pet` VARCHAR(50) NOT NULL COLLATE 'latin1_swedish_ci',
	`sexo_pet` VARCHAR(10) NOT NULL COLLATE 'latin1_swedish_ci',
	`cor_pet` VARCHAR(50) NOT NULL COLLATE 'latin1_swedish_ci',
	`numero_coleira` INT(11) NULL,
	`descricao_pet` LONGTEXT NULL COLLATE 'latin1_swedish_ci',
	`longitude` TEXT NULL COLLATE 'latin1_swedish_ci',
	`latitude` TEXT NULL COLLATE 'latin1_swedish_ci',
	`status_pet` CHAR(1) NOT NULL COLLATE 'latin1_swedish_ci'
) ENGINE=MyISAM;

-- Copiando estrutura para view helppet.cartaz_perdido
-- Criando tabela temporária para evitar erros de dependência de VIEW
CREATE TABLE `cartaz_perdido` (
	`imagem_pet` LONGTEXT NOT NULL COLLATE 'latin1_swedish_ci',
	`nome_usuario` VARCHAR(50) NOT NULL COLLATE 'latin1_swedish_ci',
	`telefone` VARCHAR(20) NOT NULL COLLATE 'latin1_swedish_ci',
	`whatsapp` VARCHAR(20) NULL COLLATE 'latin1_swedish_ci',
	`telegram` VARCHAR(20) NULL COLLATE 'latin1_swedish_ci',
	`nome_pet` VARCHAR(50) NOT NULL COLLATE 'latin1_swedish_ci',
	`raca_pet` VARCHAR(50) NOT NULL COLLATE 'latin1_swedish_ci',
	`sexo_pet` VARCHAR(10) NOT NULL COLLATE 'latin1_swedish_ci',
	`cor_pet` VARCHAR(50) NOT NULL COLLATE 'latin1_swedish_ci',
	`descricao_pet` LONGTEXT NULL COLLATE 'latin1_swedish_ci'
) ENGINE=MyISAM;

-- Copiando estrutura para tabela helppet.dados_pessoais
CREATE TABLE IF NOT EXISTS `dados_pessoais` (
  `imagem_usuario` longtext NOT NULL,
  `cpf` varchar(20) NOT NULL,
  `id_usuario_dados_fk` int(11) NOT NULL,
  `telefone` varchar(20) NOT NULL,
  `whatsapp` varchar(20) DEFAULT NULL,
  `telegram` varchar(20) DEFAULT NULL,
  KEY `fk_dados_pessoais_usuario` (`id_usuario_dados_fk`),
  CONSTRAINT `fk_dados_pessoais_usuario` FOREIGN KEY (`id_usuario_dados_fk`) REFERENCES `usuario` (`id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Exportação de dados foi desmarcado.

-- Copiando estrutura para tabela helppet.endereco_usuario
CREATE TABLE IF NOT EXISTS `endereco_usuario` (
  `cep` varchar(8) NOT NULL,
  `id_usuario_endereco_fk` int(11) NOT NULL,
  `rua` varchar(50) NOT NULL,
  `num_residencia` varchar(10) NOT NULL,
  `complemento` varchar(50) DEFAULT NULL,
  `bairro` varchar(50) DEFAULT NULL,
  `cidade` varchar(50) NOT NULL,
  `estado` varchar(50) NOT NULL,
  KEY `fk_endereco_usuario` (`id_usuario_endereco_fk`),
  CONSTRAINT `fk_endereco_usuario` FOREIGN KEY (`id_usuario_endereco_fk`) REFERENCES `usuario` (`id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Exportação de dados foi desmarcado.

-- Copiando estrutura para view helppet.perfil_usuario
-- Criando tabela temporária para evitar erros de dependência de VIEW
CREATE TABLE `perfil_usuario` (
	`imagem_usuario` LONGTEXT NOT NULL COLLATE 'latin1_swedish_ci',
	`id_usuario` INT(11) NOT NULL,
	`nome_usuario` VARCHAR(50) NOT NULL COLLATE 'latin1_swedish_ci',
	`sobrenome_usuario` VARCHAR(50) NOT NULL COLLATE 'latin1_swedish_ci',
	`email` VARCHAR(30) NOT NULL COLLATE 'latin1_swedish_ci',
	`telefone` VARCHAR(20) NOT NULL COLLATE 'latin1_swedish_ci',
	`whatsapp` VARCHAR(20) NULL COLLATE 'latin1_swedish_ci',
	`telegram` VARCHAR(20) NULL COLLATE 'latin1_swedish_ci'
) ENGINE=MyISAM;

-- Copiando estrutura para tabela helppet.pet
CREATE TABLE IF NOT EXISTS `pet` (
  `imagem_pet` longtext NOT NULL,
  `id_pet` int(11) NOT NULL AUTO_INCREMENT,
  `id_usuario_pet_fk` int(11) NOT NULL,
  `nome_pet` varchar(50) NOT NULL,
  `raca_pet` varchar(50) NOT NULL,
  `sexo_pet` varchar(10) NOT NULL,
  `cor_pet` varchar(50) NOT NULL,
  `numero_coleira` int(11) DEFAULT NULL,
  `descricao_pet` longtext DEFAULT NULL,
  `longitude` text DEFAULT NULL,
  `latitude` text DEFAULT NULL,
  `status_pet` char(1) NOT NULL CHECK (`status_pet` in ('n','a','d','l')),
  PRIMARY KEY (`id_pet`),
  UNIQUE KEY `id_pet` (`id_pet`),
  KEY `fk_pet_usuario` (`id_usuario_pet_fk`),
  CONSTRAINT `fk_pet_usuario` FOREIGN KEY (`id_usuario_pet_fk`) REFERENCES `usuario` (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

-- Exportação de dados foi desmarcado.

-- Copiando estrutura para tabela helppet.usuario
CREATE TABLE IF NOT EXISTS `usuario` (
  `id_usuario` int(11) NOT NULL AUTO_INCREMENT,
  `nome_usuario` varchar(50) NOT NULL,
  `sobrenome_usuario` varchar(50) NOT NULL,
  `email` varchar(30) NOT NULL,
  `senha` varchar(50) NOT NULL,
  `tipo_usuario` char(1) NOT NULL,
  PRIMARY KEY (`id_usuario`),
  UNIQUE KEY `id_usuario` (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- Exportação de dados foi desmarcado.

-- Copiando estrutura para view helppet.animais_doacoes
-- Removendo tabela temporária e criando a estrutura VIEW final
DROP TABLE IF EXISTS `animais_doacoes`;
CREATE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `animais_doacoes` AS select `u`.`id_usuario` AS `id_usuario`,`u`.`nome_usuario` AS `nome_usuario`,`u`.`sobrenome_usuario` AS `sobrenome_usuario`,`dp`.`telefone` AS `telefone`,`dp`.`whatsapp` AS `whatsapp`,`dp`.`telegram` AS `telegram`,`dp`.`imagem_usuario` AS `imagem_usuario`,`p`.`id_pet` AS `id_pet`,`p`.`imagem_pet` AS `imagem_pet`,`p`.`nome_pet` AS `nome_pet`,`p`.`raca_pet` AS `raca_pet`,`p`.`sexo_pet` AS `sexo_pet`,`p`.`cor_pet` AS `cor_pet`,`p`.`numero_coleira` AS `numero_coleira`,`p`.`descricao_pet` AS `descricao_pet`,`p`.`longitude` AS `longitude`,`p`.`latitude` AS `latitude`,`p`.`status_pet` AS `status_pet` from ((`usuario` `u` join `dados_pessoais` `dp` on(`u`.`id_usuario` = `dp`.`id_usuario_dados_fk`)) join `pet` `p` on(`u`.`id_usuario` = `p`.`id_usuario_pet_fk`)) where `p`.`status_pet` = 'a';

-- Copiando estrutura para view helppet.animais_perdidos
-- Removendo tabela temporária e criando a estrutura VIEW final
DROP TABLE IF EXISTS `animais_perdidos`;
CREATE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `animais_perdidos` AS select `u`.`id_usuario` AS `id_usuario`,`u`.`nome_usuario` AS `nome_usuario`,`u`.`sobrenome_usuario` AS `sobrenome_usuario`,`dp`.`telefone` AS `telefone`,`dp`.`whatsapp` AS `whatsapp`,`dp`.`telegram` AS `telegram`,`dp`.`imagem_usuario` AS `imagem_usuario`,`p`.`id_pet` AS `id_pet`,`p`.`imagem_pet` AS `imagem_pet`,`p`.`nome_pet` AS `nome_pet`,`p`.`raca_pet` AS `raca_pet`,`p`.`sexo_pet` AS `sexo_pet`,`p`.`cor_pet` AS `cor_pet`,`p`.`numero_coleira` AS `numero_coleira`,`p`.`descricao_pet` AS `descricao_pet`,`p`.`longitude` AS `longitude`,`p`.`latitude` AS `latitude`,`p`.`status_pet` AS `status_pet` from ((`usuario` `u` join `dados_pessoais` `dp` on(`u`.`id_usuario` = `dp`.`id_usuario_dados_fk`)) join `pet` `p` on(`u`.`id_usuario` = `p`.`id_usuario_pet_fk`)) where `u`.`id_usuario` = `p`.`id_usuario_pet_fk` and `p`.`status_pet` = 'd';

-- Copiando estrutura para view helppet.cartaz_perdido
-- Removendo tabela temporária e criando a estrutura VIEW final
DROP TABLE IF EXISTS `cartaz_perdido`;
CREATE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `cartaz_perdido` AS select `p`.`imagem_pet` AS `imagem_pet`,`pu`.`nome_usuario` AS `nome_usuario`,`pu`.`telefone` AS `telefone`,`pu`.`whatsapp` AS `whatsapp`,`pu`.`telegram` AS `telegram`,`p`.`nome_pet` AS `nome_pet`,`p`.`raca_pet` AS `raca_pet`,`p`.`sexo_pet` AS `sexo_pet`,`p`.`cor_pet` AS `cor_pet`,`p`.`descricao_pet` AS `descricao_pet` from (`pet` `p` join `perfil_usuario` `pu`) where `pu`.`id_usuario` = `p`.`id_usuario_pet_fk`;

-- Copiando estrutura para view helppet.perfil_usuario
-- Removendo tabela temporária e criando a estrutura VIEW final
DROP TABLE IF EXISTS `perfil_usuario`;
CREATE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `perfil_usuario` AS select `dp`.`imagem_usuario` AS `imagem_usuario`,`u`.`id_usuario` AS `id_usuario`,`u`.`nome_usuario` AS `nome_usuario`,`u`.`sobrenome_usuario` AS `sobrenome_usuario`,`u`.`email` AS `email`,`dp`.`telefone` AS `telefone`,`dp`.`whatsapp` AS `whatsapp`,`dp`.`telegram` AS `telegram` from (`usuario` `u` join `dados_pessoais` `dp`) where `u`.`id_usuario` = `dp`.`id_usuario_dados_fk`;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
