"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.request = request;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function request(config) {
  // 服务端
  // axios.defaults.baseURL="https://corsun.xyz/fafuhelp"
  // 本机
  _axios["default"].defaults.baseURL = "http://localhost:8080/fafuhelp_backend";

  var instance = _axios["default"].create({});

  return instance(config);
}