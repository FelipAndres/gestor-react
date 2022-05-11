-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema pruebaGestor
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `pruebaGestor` ;

-- -----------------------------------------------------
-- Schema pruebaGestor
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `pruebaGestor` DEFAULT CHARACTER SET latin1 COLLATE latin1_spanish_ci ;
USE `pruebaGestor` ;

-- -----------------------------------------------------
-- Table `pruebaGestor`.`roles`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pruebaGestor`.`roles` ;

CREATE TABLE IF NOT EXISTS `pruebaGestor`.`roles` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(20) NOT NULL DEFAULT '',
  PRIMARY KEY (`Id`))
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = latin1
COLLATE = latin1_spanish_ci;


-- -----------------------------------------------------
-- Table `pruebaGestor`.`personas`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pruebaGestor`.`personas` ;

CREATE TABLE IF NOT EXISTS `pruebaGestor`.`personas` (
  `persona_id` INT NOT NULL AUTO_INCREMENT,
  `rut` VARCHAR(18) NOT NULL DEFAULT '',
  `nombre` VARCHAR(50) NOT NULL DEFAULT '',
  `apellido` VARCHAR(50) NOT NULL DEFAULT '',
  `email` VARCHAR(255) NOT NULL DEFAULT '',
  `telefono` VARCHAR(15) NOT NULL DEFAULT '0',
  `passw` VARCHAR(255) NOT NULL DEFAULT '',
  `rol` INT NULL DEFAULT '0',
  PRIMARY KEY (`persona_id`),
  UNIQUE INDEX `UC_PERSONAS` (`email` ASC, `passw` ASC, `telefono` ASC) VISIBLE,
  INDEX `roles_id_rol` (`rol` ASC) VISIBLE,
  CONSTRAINT `roles_id_rol`
    FOREIGN KEY (`rol`)
    REFERENCES `pruebaGestor`.`roles` (`Id`)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT)
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = latin1
COLLATE = latin1_spanish_ci;


-- -----------------------------------------------------
-- Table `pruebaGestor`.`estados`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pruebaGestor`.`estados` ;

CREATE TABLE IF NOT EXISTS `pruebaGestor`.`estados` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(20) NOT NULL DEFAULT '',
  PRIMARY KEY (`Id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1
COLLATE = latin1_spanish_ci;


-- -----------------------------------------------------
-- Table `pruebaGestor`.`solicitud`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pruebaGestor`.`solicitud` ;

CREATE TABLE IF NOT EXISTS `pruebaGestor`.`solicitud` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `usuario_id` INT NOT NULL DEFAULT '0',
  `fecha` DATETIME NOT NULL,
  `estado` INT NOT NULL DEFAULT '0',
  `comentario` TEXT NOT NULL,
  PRIMARY KEY (`Id`),
  INDEX `solic_estado_fk` (`estado` ASC) VISIBLE,
  INDEX `usuario_id` (`usuario_id` ASC) VISIBLE,
  CONSTRAINT `solicitud_ibfk_1`
    FOREIGN KEY (`estado`)
    REFERENCES `pruebaGestor`.`estados` (`Id`)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT,
  CONSTRAINT `solicitud_ibfk_2`
    FOREIGN KEY (`usuario_id`)
    REFERENCES `pruebaGestor`.`personas` (`persona_id`)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1
COLLATE = latin1_spanish_ci;


-- -----------------------------------------------------
-- Table `pruebaGestor`.`agenda`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pruebaGestor`.`agenda` ;

CREATE TABLE IF NOT EXISTS `pruebaGestor`.`agenda` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `bodeguero_id` INT NOT NULL DEFAULT '0',
  `solicitud_id` INT NOT NULL DEFAULT '0',
  `estado_solicitud` INT NOT NULL DEFAULT '0',
  `fecha` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`Id`),
  INDEX `bodeguero_id` (`bodeguero_id` ASC) VISIBLE,
  INDEX `solicitud_id` (`solicitud_id` ASC) VISIBLE,
  INDEX `estado_solicitud` (`estado_solicitud` ASC) VISIBLE,
  CONSTRAINT `agenda_ibfk_1`
    FOREIGN KEY (`bodeguero_id`)
    REFERENCES `pruebaGestor`.`personas` (`persona_id`)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT,
  CONSTRAINT `agenda_ibfk_2`
    FOREIGN KEY (`solicitud_id`)
    REFERENCES `pruebaGestor`.`solicitud` (`Id`)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT,
  CONSTRAINT `agenda_ibfk_3`
    FOREIGN KEY (`estado_solicitud`)
    REFERENCES `pruebaGestor`.`estados` (`Id`)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1
COLLATE = latin1_spanish_ci;


-- -----------------------------------------------------
-- Table `pruebaGestor`.`auditora`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pruebaGestor`.`auditora` ;

CREATE TABLE IF NOT EXISTS `pruebaGestor`.`auditora` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `persona_id` INT NOT NULL DEFAULT '0',
  `fecha` DATETIME NOT NULL,
  `agenda_id` INT NOT NULL DEFAULT '0',
  `solicitud_id` INT NOT NULL DEFAULT '0',
  `compra_id` INT NOT NULL DEFAULT '0',
  PRIMARY KEY (`Id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1
COLLATE = latin1_spanish_ci;


-- -----------------------------------------------------
-- Table `pruebaGestor`.`tipo_bodega`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pruebaGestor`.`tipo_bodega` ;

CREATE TABLE IF NOT EXISTS `pruebaGestor`.`tipo_bodega` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(20) NOT NULL DEFAULT '',
  PRIMARY KEY (`Id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1
COLLATE = latin1_spanish_ci;


-- -----------------------------------------------------
-- Table `pruebaGestor`.`regiones`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pruebaGestor`.`regiones` ;

CREATE TABLE IF NOT EXISTS `pruebaGestor`.`regiones` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(50) NOT NULL DEFAULT '',
  PRIMARY KEY (`Id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1
COLLATE = latin1_spanish_ci;


-- -----------------------------------------------------
-- Table `pruebaGestor`.`provincias`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pruebaGestor`.`provincias` ;

CREATE TABLE IF NOT EXISTS `pruebaGestor`.`provincias` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(50) NOT NULL DEFAULT '',
  `id_region` INT NOT NULL DEFAULT '0',
  PRIMARY KEY (`Id`),
  INDEX `id_region` (`id_region` ASC) VISIBLE,
  CONSTRAINT `provincias_ibfk_1`
    FOREIGN KEY (`id_region`)
    REFERENCES `pruebaGestor`.`regiones` (`Id`)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1
COLLATE = latin1_spanish_ci;


-- -----------------------------------------------------
-- Table `pruebaGestor`.`comunas`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pruebaGestor`.`comunas` ;

CREATE TABLE IF NOT EXISTS `pruebaGestor`.`comunas` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(50) NOT NULL DEFAULT '',
  `id_provincia` INT NOT NULL DEFAULT '0',
  PRIMARY KEY (`Id`),
  INDEX `id_provincia` (`id_provincia` ASC) VISIBLE,
  CONSTRAINT `comunas_ibfk_1`
    FOREIGN KEY (`id_provincia`)
    REFERENCES `pruebaGestor`.`provincias` (`Id`)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1
COLLATE = latin1_spanish_ci;


-- -----------------------------------------------------
-- Table `pruebaGestor`.`bodegas`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pruebaGestor`.`bodegas` ;

CREATE TABLE IF NOT EXISTS `pruebaGestor`.`bodegas` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(50) NOT NULL DEFAULT '',
  `comuna_id` INT NOT NULL DEFAULT '0',
  `tipo_bodega_id` INT NOT NULL DEFAULT '0',
  `estado` INT NULL DEFAULT NULL,
  PRIMARY KEY (`Id`),
  INDEX `bodega_tipo_fk` (`tipo_bodega_id` ASC) VISIBLE,
  INDEX `comuna_id` (`comuna_id` ASC) VISIBLE,
  CONSTRAINT `bodega_tipo_fk`
    FOREIGN KEY (`tipo_bodega_id`)
    REFERENCES `pruebaGestor`.`tipo_bodega` (`Id`)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT,
  CONSTRAINT `bodegas_ibfk_1`
    FOREIGN KEY (`comuna_id`)
    REFERENCES `pruebaGestor`.`comunas` (`Id`)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1
COLLATE = latin1_spanish_ci;


-- -----------------------------------------------------
-- Table `pruebaGestor`.`compras`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pruebaGestor`.`compras` ;

CREATE TABLE IF NOT EXISTS `pruebaGestor`.`compras` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `fecha_compra` DATETIME NOT NULL,
  `administrador_id` INT NOT NULL DEFAULT '0',
  PRIMARY KEY (`Id`),
  INDEX `admin_id_idx` (`administrador_id` ASC) VISIBLE,
  CONSTRAINT `admin_id`
    FOREIGN KEY (`administrador_id`)
    REFERENCES `pruebaGestor`.`personas` (`persona_id`)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1
COLLATE = latin1_spanish_ci;


-- -----------------------------------------------------
-- Table `pruebaGestor`.`ensambles`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pruebaGestor`.`ensambles` ;

CREATE TABLE IF NOT EXISTS `pruebaGestor`.`ensambles` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(50) NOT NULL DEFAULT '',
  `stock` INT NOT NULL DEFAULT '0',
  `precio` INT NOT NULL DEFAULT '0',
  PRIMARY KEY (`Id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1
COLLATE = latin1_spanish_ci;


-- -----------------------------------------------------
-- Table `pruebaGestor`.`ensamble_solicitud`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pruebaGestor`.`ensamble_solicitud` ;

CREATE TABLE IF NOT EXISTS `pruebaGestor`.`ensamble_solicitud` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `solicitud_id` INT NOT NULL DEFAULT '0',
  `ensamble_id` INT NOT NULL DEFAULT '0',
  `cantidad` INT NOT NULL DEFAULT '0',
  PRIMARY KEY (`Id`),
  INDEX `solicitud_id` (`solicitud_id` ASC) VISIBLE,
  INDEX `ensamble_id` (`ensamble_id` ASC) VISIBLE,
  CONSTRAINT `ensamble_solicitud_ibfk_1`
    FOREIGN KEY (`solicitud_id`)
    REFERENCES `pruebaGestor`.`solicitud` (`Id`)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT,
  CONSTRAINT `ensamble_solicitud_ibfk_2`
    FOREIGN KEY (`ensamble_id`)
    REFERENCES `pruebaGestor`.`ensambles` (`Id`)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1
COLLATE = latin1_spanish_ci;


-- -----------------------------------------------------
-- Table `pruebaGestor`.`fabricantes`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pruebaGestor`.`fabricantes` ;

CREATE TABLE IF NOT EXISTS `pruebaGestor`.`fabricantes` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(50) CHARACTER SET 'latin1' COLLATE 'latin1_spanish_ci' NOT NULL DEFAULT '',
  `createdAt` TIMESTAMP NULL DEFAULT NULL,
  `updatedAt` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`Id`))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = latin1
COLLATE = latin1_spanish_ci;


-- -----------------------------------------------------
-- Table `pruebaGestor`.`familia_prods`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pruebaGestor`.`familia_prods` ;

CREATE TABLE IF NOT EXISTS `pruebaGestor`.`familia_prods` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(50) NOT NULL DEFAULT '',
  `descripcion` TEXT NOT NULL,
  `id_familia` INT NULL DEFAULT NULL,
  `createdAt` TIMESTAMP NULL DEFAULT NULL,
  `updatedAt` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`Id`),
  INDEX `id_familia` (`id_familia` ASC) VISIBLE,
  CONSTRAINT `familia_prods_ibfk_1`
    FOREIGN KEY (`id_familia`)
    REFERENCES `pruebaGestor`.`familia_prods` (`Id`)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT)
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = latin1
COLLATE = latin1_spanish_ci;


-- -----------------------------------------------------
-- Table `pruebaGestor`.`proveedores`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pruebaGestor`.`proveedores` ;

CREATE TABLE IF NOT EXISTS `pruebaGestor`.`proveedores` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `rut` VARCHAR(18) NOT NULL DEFAULT '',
  `r_social` VARCHAR(50) NOT NULL DEFAULT '',
  `direccion` VARCHAR(50) NOT NULL DEFAULT '',
  `fono` VARCHAR(8) NOT NULL DEFAULT '',
  `email` VARCHAR(50) NOT NULL DEFAULT '',
  PRIMARY KEY (`Id`),
  UNIQUE INDEX `Unicos` (`rut` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1
COLLATE = latin1_spanish_ci;


-- -----------------------------------------------------
-- Table `pruebaGestor`.`productos`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pruebaGestor`.`productos` ;

CREATE TABLE IF NOT EXISTS `pruebaGestor`.`productos` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(100) NOT NULL DEFAULT '',
  `familia_producto_id` INT NULL DEFAULT NULL,
  `descripcion` TEXT NOT NULL,
  `estado` INT NOT NULL DEFAULT '0',
  `foto` VARCHAR(255) NOT NULL DEFAULT '',
  `precio` INT NOT NULL DEFAULT '0',
  `stock` INT NOT NULL DEFAULT '0',
  `createdAt` TIMESTAMP NULL DEFAULT NULL,
  `updatedAt` TIMESTAMP NULL DEFAULT NULL,
  `proveedores_id` INT NULL DEFAULT NULL,
  `fecha_registro` DATE NULL DEFAULT NULL,
  `fabricante_id` INT NULL DEFAULT NULL,
  PRIMARY KEY (`Id`),
  INDEX `familia_producto` (`familia_producto_id` ASC) VISIBLE,
  INDEX `Fk_prov_id` (`proveedores_id` ASC) VISIBLE,
  CONSTRAINT `familia_producto`
    FOREIGN KEY (`familia_producto_id`)
    REFERENCES `pruebaGestor`.`familia_prods` (`Id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `Fk_prov_id`
    FOREIGN KEY (`proveedores_id`)
    REFERENCES `pruebaGestor`.`proveedores` (`Id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
AUTO_INCREMENT = 16
DEFAULT CHARACTER SET = latin1
COLLATE = latin1_spanish_ci;


-- -----------------------------------------------------
-- Table `pruebaGestor`.`producto_solicitud`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pruebaGestor`.`producto_solicitud` ;

CREATE TABLE IF NOT EXISTS `pruebaGestor`.`producto_solicitud` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `id_solicitud` INT NOT NULL DEFAULT '0',
  `id_producto` INT NOT NULL DEFAULT '0',
  `cantidad` INT NOT NULL DEFAULT '0',
  PRIMARY KEY (`Id`),
  INDEX `id_solicitud` (`id_solicitud` ASC) VISIBLE,
  INDEX `id_producto` (`id_producto` ASC) VISIBLE,
  CONSTRAINT `producto_solicitud_ibfk_1`
    FOREIGN KEY (`id_solicitud`)
    REFERENCES `pruebaGestor`.`solicitud` (`Id`)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT,
  CONSTRAINT `producto_solicitud_ibfk_2`
    FOREIGN KEY (`id_producto`)
    REFERENCES `pruebaGestor`.`productos` (`Id`)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1
COLLATE = latin1_spanish_ci;


-- -----------------------------------------------------
-- Table `pruebaGestor`.`productos_compra`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pruebaGestor`.`productos_compra` ;

CREATE TABLE IF NOT EXISTS `pruebaGestor`.`productos_compra` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `producto_id` INT NOT NULL DEFAULT '0',
  `cantidad` INT NOT NULL DEFAULT '0',
  `compra_id` INT NOT NULL DEFAULT '0',
  PRIMARY KEY (`Id`),
  INDEX `compra_id_idx` (`compra_id` ASC) VISIBLE,
  INDEX `producto_id` (`producto_id` ASC) VISIBLE,
  CONSTRAINT `compra_id`
    FOREIGN KEY (`compra_id`)
    REFERENCES `pruebaGestor`.`compras` (`Id`),
  CONSTRAINT `producto_id`
    FOREIGN KEY (`producto_id`)
    REFERENCES `pruebaGestor`.`productos` (`Id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1
COLLATE = latin1_spanish_ci;


-- -----------------------------------------------------
-- Table `pruebaGestor`.`productos_ensamble`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pruebaGestor`.`productos_ensamble` ;

CREATE TABLE IF NOT EXISTS `pruebaGestor`.`productos_ensamble` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `producto_id` INT NOT NULL DEFAULT '0',
  `cantidad` INT NOT NULL DEFAULT '0',
  `ensamble_id` INT NOT NULL DEFAULT '0',
  PRIMARY KEY (`Id`),
  INDEX `ensamble_producto_id` (`producto_id` ASC) VISIBLE,
  INDEX `ensambleproducto_ensamble_id` (`ensamble_id` ASC) VISIBLE,
  CONSTRAINT `ensamble_producto_id`
    FOREIGN KEY (`producto_id`)
    REFERENCES `pruebaGestor`.`productos` (`Id`)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT,
  CONSTRAINT `ensambleproducto_ensamble_id`
    FOREIGN KEY (`ensamble_id`)
    REFERENCES `pruebaGestor`.`ensambles` (`Id`)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1
COLLATE = latin1_spanish_ci;


-- -----------------------------------------------------
-- Table `pruebaGestor`.`stock_bodega`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pruebaGestor`.`stock_bodega` ;

CREATE TABLE IF NOT EXISTS `pruebaGestor`.`stock_bodega` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `producto_id` INT NOT NULL DEFAULT '0',
  `bodega_id` INT NOT NULL DEFAULT '0',
  `cantidad` INT NOT NULL DEFAULT '0',
  PRIMARY KEY (`Id`),
  INDEX `stock_producto_id` (`producto_id` ASC) VISIBLE,
  INDEX `stockbodega_bodega_id` (`bodega_id` ASC) VISIBLE,
  CONSTRAINT `stock_producto_id`
    FOREIGN KEY (`producto_id`)
    REFERENCES `pruebaGestor`.`productos` (`Id`)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT,
  CONSTRAINT `stockbodega_bodega_id`
    FOREIGN KEY (`bodega_id`)
    REFERENCES `pruebaGestor`.`bodegas` (`Id`)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1
COLLATE = latin1_spanish_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
