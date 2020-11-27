"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

var _mutations = _interopRequireDefault(require("./mutations"));

var _actions = _interopRequireDefault(require("./actions"));

var _modules = _interopRequireDefault(require("./modules"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vuex["default"]);

var _default = new _vuex["default"].Store({
  state: {
    cookie: ''
  },
  mutations: _mutations["default"],
  actions: _actions["default"],
  modules: _modules["default"]
});

exports["default"] = _default;