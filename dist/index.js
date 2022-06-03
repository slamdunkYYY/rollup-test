'use strict';

// 编写加法：src/addition.js
// 使用 es6 语法，需要使用 babel 转为 es5
var addition = function addition(a, b) {
  return a + b;
};

// 编写减法：src/subtraction.js
function subtraction(a, b) {
  return a - b;
}

// 编写入口文件：main.js
var main = {
  addition: addition,
  subtraction: subtraction
};

module.exports = main;
