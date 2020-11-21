-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 20-Nov-2020 às 00:07
-- Versão do servidor: 10.4.14-MariaDB
-- versão do PHP: 7.2.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `helppet`
--

-- --------------------------------------------------------

--
-- Estrutura stand-in para vista `animais_doacoes`
-- (Veja abaixo para a view atual)
--
CREATE TABLE `animais_doacoes` (
`imagem_pet` longtext
,`nome_pet` varchar(50)
,`raca_pet` varchar(50)
,`sexo_pet` varchar(10)
,`cor_pet` varchar(50)
,`descricao_pet` longtext
,`nome_usuario` varchar(50)
);

-- --------------------------------------------------------

--
-- Estrutura stand-in para vista `animais_perdidos`
-- (Veja abaixo para a view atual)
--
CREATE TABLE `animais_perdidos` (
`imagem_pet` longtext
,`nome_pet` varchar(50)
,`raca_pet` varchar(50)
,`sexo_pet` varchar(10)
,`cor_pet` varchar(50)
,`descricao_pet` longtext
,`nome_usuario` varchar(50)
);

-- --------------------------------------------------------

--
-- Estrutura stand-in para vista `cartaz_perdido`
-- (Veja abaixo para a view atual)
--
CREATE TABLE `cartaz_perdido` (
`imagem_pet` longtext
,`nome_usuario` varchar(50)
,`telefone` varchar(20)
,`whatsapp` varchar(20)
,`telegram` varchar(20)
,`nome_pet` varchar(50)
,`raca_pet` varchar(50)
,`sexo_pet` varchar(10)
,`cor_pet` varchar(50)
,`descricao_pet` longtext
);

-- --------------------------------------------------------

--
-- Estrutura da tabela `dados_pessoais`
--

CREATE TABLE `dados_pessoais` (
  `imagem_usuario` longtext NOT NULL,
  `cpf` varchar(20) NOT NULL,
  `id_usuario_dados_fk` int(11) NOT NULL,
  `telefone` varchar(20) NOT NULL,
  `whatsapp` varchar(20) DEFAULT NULL,
  `telegram` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `dados_pessoais`
--

INSERT INTO `dados_pessoais` (`imagem_usuario`, `cpf`, `id_usuario_dados_fk`, `telefone`, `whatsapp`, `telegram`) VALUES
('asiopdjasdpioj', '422', 1, '9481234', NULL, NULL),
('asiopdjasdpioj', '4222222', 2, '9481234', NULL, NULL),
('asiopdjasdpioj', '4222222666', 3, '9481234', NULL, NULL);

-- --------------------------------------------------------

--
-- Estrutura da tabela `denuncia`
--

CREATE TABLE `denuncia` (
  `id_denuncia` int(11) NOT NULL,
  `nome_intituicao` varchar(15) NOT NULL,
  `contato_denuncia` varchar(15) NOT NULL,
  `whatsapp_denuncia` varchar(15) NOT NULL,
  `id_usuario_denuncia_fk` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `endereco_orgao`
--

CREATE TABLE `endereco_orgao` (
  `cep` varchar(8) NOT NULL,
  `id_denuncia_orgao_fk` int(11) NOT NULL,
  `rua` varchar(50) NOT NULL,
  `num_residencia` varchar(10) NOT NULL,
  `complemento` varchar(50) DEFAULT NULL,
  `bairo` varchar(50) NOT NULL,
  `cidade` varchar(50) NOT NULL,
  `estado` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `endereco_usuario`
--

CREATE TABLE `endereco_usuario` (
  `cep` varchar(8) NOT NULL,
  `id_usuario_endereco_fk` int(11) NOT NULL,
  `rua` varchar(50) NOT NULL,
  `num_residencia` varchar(10) NOT NULL,
  `complemento` varchar(50) DEFAULT NULL,
  `bairo` varchar(50) NOT NULL,
  `cidade` varchar(50) NOT NULL,
  `estado` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura stand-in para vista `perfil_usuario`
-- (Veja abaixo para a view atual)
--
CREATE TABLE `perfil_usuario` (
`imagem_usuario` longtext
,`id_usuario` int(11)
,`nome_usuario` varchar(50)
,`sobrenome_usuario` varchar(50)
,`email` varchar(30)
,`telefone` varchar(20)
,`whatsapp` varchar(20)
,`telegram` varchar(20)
);

-- --------------------------------------------------------

--
-- Estrutura da tabela `pet`
--

CREATE TABLE `pet` (
  `imagem_pet` longtext NOT NULL,
  `id_pet` int(11) NOT NULL,
  `id_usuario_pet_fk` int(11) NOT NULL,
  `nome_pet` varchar(50) NOT NULL,
  `raca_pet` varchar(50) NOT NULL,
  `sexo_pet` varchar(10) NOT NULL,
  `cor_pet` varchar(50) NOT NULL,
  `numero_coleira` int(11) NOT NULL,
  `descricao_pet` longtext DEFAULT NULL,
  `longitude` decimal(10,8) NOT NULL,
  `latitude` decimal(10,8) NOT NULL,
  `status_pet` char(1) NOT NULL CHECK (`status_pet` in ('n','a','d','l'))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `pet`
--

INSERT INTO `pet` (`imagem_pet`, `id_pet`, `id_usuario_pet_fk`, `nome_pet`, `raca_pet`, `sexo_pet`, `cor_pet`, `numero_coleira`, `descricao_pet`, `longitude`, `latitude`, `status_pet`) VALUES
('', 1, 3, 'Adota ai', '', '', '', 10, '', '-49.27737400', '-16.72769400', 'a'),
('', 2, 3, 'Adota ai 2', '', '', '', 10, '', '-49.27737400', '-16.72769400', 'a'),
('data:/base46:aspidjasdpasji', 3, 3, 'teste', 'chitsu', 'm', 'preto', 10, 'dasdasd', '-49.27737400', '-16.72769400', 'l');

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuario`
--

CREATE TABLE `usuario` (
  `id_usuario` int(11) NOT NULL,
  `nome_usuario` varchar(50) NOT NULL,
  `sobrenome_usuario` varchar(50) NOT NULL,
  `email` varchar(30) NOT NULL,
  `senha` varchar(50) NOT NULL,
  `tipo_usuario` char(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `usuario`
--

INSERT INTO `usuario` (`id_usuario`, `nome_usuario`, `sobrenome_usuario`, `email`, `senha`, `tipo_usuario`) VALUES
(1, 'Pedro', 'Silva', 'teste@gmail.co', 'da39a3ee5e6b4b0d3255bfef95601890afd80709', 'A'),
(2, '@', 'Silva', 'test@gmail.co', '6c72aa7088115c5241935c25842558377be5d7ad', 'A'),
(3, 'dim', 'sade', 'sade@gmail2.com', '0276c9e42f3d16651a101a3ef691d8e473cb3820', 'A'),
(4, 'sadao', 'bufalo', 'dim@dim.com', '0276c9e42f3d16651a101a3ef691d8e473cb3820', 'A'),
(5, 'sadim', 'branco', 'cavalo@mam.com', '0276c9e42f3d16651a101a3ef691d8e473cb3820', 'A'),
(6, 'lene', 'nininha', 'bichinha@pan.com', '0276c9e42f3d16651a101a3ef691d8e473cb3820', 'A'),
(7, 'lene', 'nininha', 'bichinha@pansss.com', '0276c9e42f3d16651a101a3ef691d8e473cb3820', 'A');

-- --------------------------------------------------------

--
-- Estrutura para vista `animais_doacoes`
--
DROP TABLE IF EXISTS `animais_doacoes`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `animais_doacoes`  AS  select `p`.`imagem_pet` AS `imagem_pet`,`p`.`nome_pet` AS `nome_pet`,`p`.`raca_pet` AS `raca_pet`,`p`.`sexo_pet` AS `sexo_pet`,`p`.`cor_pet` AS `cor_pet`,`p`.`descricao_pet` AS `descricao_pet`,`u`.`nome_usuario` AS `nome_usuario` from (`pet` `p` join `usuario` `u`) where `u`.`id_usuario` = `p`.`id_usuario_pet_fk` and `p`.`status_pet` = 'a' ;

-- --------------------------------------------------------

--
-- Estrutura para vista `animais_perdidos`
--
DROP TABLE IF EXISTS `animais_perdidos`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `animais_perdidos`  AS  select `p`.`imagem_pet` AS `imagem_pet`,`p`.`nome_pet` AS `nome_pet`,`p`.`raca_pet` AS `raca_pet`,`p`.`sexo_pet` AS `sexo_pet`,`p`.`cor_pet` AS `cor_pet`,`p`.`descricao_pet` AS `descricao_pet`,`u`.`nome_usuario` AS `nome_usuario` from (`pet` `p` join `usuario` `u`) where `u`.`id_usuario` = `p`.`id_usuario_pet_fk` and `p`.`status_pet` = 'd' ;

-- --------------------------------------------------------

--
-- Estrutura para vista `cartaz_perdido`
--
DROP TABLE IF EXISTS `cartaz_perdido`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `cartaz_perdido`  AS  select `p`.`imagem_pet` AS `imagem_pet`,`pu`.`nome_usuario` AS `nome_usuario`,`pu`.`telefone` AS `telefone`,`pu`.`whatsapp` AS `whatsapp`,`pu`.`telegram` AS `telegram`,`p`.`nome_pet` AS `nome_pet`,`p`.`raca_pet` AS `raca_pet`,`p`.`sexo_pet` AS `sexo_pet`,`p`.`cor_pet` AS `cor_pet`,`p`.`descricao_pet` AS `descricao_pet` from (`pet` `p` join `perfil_usuario` `pu`) where `pu`.`id_usuario` = `p`.`id_usuario_pet_fk` ;

-- --------------------------------------------------------

--
-- Estrutura para vista `perfil_usuario`
--
DROP TABLE IF EXISTS `perfil_usuario`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `perfil_usuario`  AS  select `dp`.`imagem_usuario` AS `imagem_usuario`,`u`.`id_usuario` AS `id_usuario`,`u`.`nome_usuario` AS `nome_usuario`,`u`.`sobrenome_usuario` AS `sobrenome_usuario`,`u`.`email` AS `email`,`dp`.`telefone` AS `telefone`,`dp`.`whatsapp` AS `whatsapp`,`dp`.`telegram` AS `telegram` from (`usuario` `u` join `dados_pessoais` `dp`) where `u`.`id_usuario` = `dp`.`id_usuario_dados_fk` ;

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `dados_pessoais`
--
ALTER TABLE `dados_pessoais`
  ADD KEY `fk_dados_pessoais_usuario` (`id_usuario_dados_fk`);

--
-- Índices para tabela `denuncia`
--
ALTER TABLE `denuncia`
  ADD PRIMARY KEY (`id_denuncia`),
  ADD UNIQUE KEY `id_denuncia` (`id_denuncia`),
  ADD KEY `fk_usuario_denuncia` (`id_usuario_denuncia_fk`);

--
-- Índices para tabela `endereco_orgao`
--
ALTER TABLE `endereco_orgao`
  ADD KEY `fk_endereco_orgao` (`id_denuncia_orgao_fk`);

--
-- Índices para tabela `endereco_usuario`
--
ALTER TABLE `endereco_usuario`
  ADD KEY `fk_endereco_usuario` (`id_usuario_endereco_fk`);

--
-- Índices para tabela `pet`
--
ALTER TABLE `pet`
  ADD PRIMARY KEY (`id_pet`),
  ADD UNIQUE KEY `id_pet` (`id_pet`),
  ADD KEY `fk_pet_usuario` (`id_usuario_pet_fk`);

--
-- Índices para tabela `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id_usuario`),
  ADD UNIQUE KEY `id_usuario` (`id_usuario`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `denuncia`
--
ALTER TABLE `denuncia`
  MODIFY `id_denuncia` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `pet`
--
ALTER TABLE `pet`
  MODIFY `id_pet` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `dados_pessoais`
--
ALTER TABLE `dados_pessoais`
  ADD CONSTRAINT `fk_dados_pessoais_usuario` FOREIGN KEY (`id_usuario_dados_fk`) REFERENCES `usuario` (`id_usuario`);

--
-- Limitadores para a tabela `denuncia`
--
ALTER TABLE `denuncia`
  ADD CONSTRAINT `fk_usuario_denuncia` FOREIGN KEY (`id_usuario_denuncia_fk`) REFERENCES `usuario` (`id_usuario`);

--
-- Limitadores para a tabela `endereco_orgao`
--
ALTER TABLE `endereco_orgao`
  ADD CONSTRAINT `fk_endereco_orgao` FOREIGN KEY (`id_denuncia_orgao_fk`) REFERENCES `denuncia` (`id_denuncia`);

--
-- Limitadores para a tabela `endereco_usuario`
--
ALTER TABLE `endereco_usuario`
  ADD CONSTRAINT `fk_endereco_usuario` FOREIGN KEY (`id_usuario_endereco_fk`) REFERENCES `usuario` (`id_usuario`);

--
-- Limitadores para a tabela `pet`
--
ALTER TABLE `pet`
  ADD CONSTRAINT `fk_pet_usuario` FOREIGN KEY (`id_usuario_pet_fk`) REFERENCES `usuario` (`id_usuario`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
