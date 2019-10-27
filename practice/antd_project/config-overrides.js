/*
 *@file config-override.js
 *@author Lyungui
 *基于customize和react-app-rewired的定制化文件
 */

//引入相关的方法
const { override,
  addLessLoader, 
  fixBabelImports,
  addDecoratorsLegacy } = require("customize-cra");

const modifyVars = require('./lessVars')

module.exports = override(
  addLessLoader({
    javascriptEnabled: true,
    modifyVars
  }),
  addDecoratorsLegacy(),
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: 'css',
  }),
);
