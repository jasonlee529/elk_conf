/*
Navicat MySQL Data Transfer

Source Server         : 192.168.1.91_3306
Source Server Version : 50626
Source Host           : 192.168.1.91:3306
Source Database       : web_extracting

Target Server Type    : MYSQL
Target Server Version : 50626
File Encoding         : 65001

Date: 2016-12-07 18:30:40
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for infisa_extracting_config
-- ----------------------------
DROP TABLE IF EXISTS `infisa_extracting_config`;
CREATE TABLE `infisa_extracting_config` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `label` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `parent_id` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `hosp_id` varchar(255) DEFAULT NULL,
  `dept_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of infisa_extracting_config
-- ----------------------------
INSERT INTO `infisa_extracting_config` VALUES ('1', '自然信息', 'a', null, 'category', null, null);
INSERT INTO `infisa_extracting_config` VALUES ('2', '性别', '', '1', 'tag', null, null);
INSERT INTO `infisa_extracting_config` VALUES ('3', '既往病史', 'a', null, 'category', null, null);
INSERT INTO `infisa_extracting_config` VALUES ('4', '既往手术史', '', '3', 'category', null, null);
INSERT INTO `infisa_extracting_config` VALUES ('5', '手术名称', '', '4', 'tag', null, null);

-- ----------------------------
-- Table structure for infisa_extracting_tag
-- ----------------------------
DROP TABLE IF EXISTS `infisa_extracting_tag`;
CREATE TABLE `infisa_extracting_tag` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `label` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `es_field` varchar(255) DEFAULT NULL,
  `resource_id` varchar(255) DEFAULT NULL,
  `more_resouce_id` varchar(11) DEFAULT NULL,
  `more_resource_label` varchar(255) DEFAULT NULL,
  `tab_resouce_id` varchar(11) DEFAULT NULL COMMENT '分类标签',
  `tab_resouce_label` varchar(255) DEFAULT NULL,
  `pre_resource_id` varchar(11) DEFAULT NULL COMMENT '前置条件',
  `pre_resouce_label` varchar(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of infisa_extracting_tag
-- ----------------------------
INSERT INTO `infisa_extracting_tag` VALUES ('1', '32sdfa', null, null, null, null, null, null, null, null, null);
