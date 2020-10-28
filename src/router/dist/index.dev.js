"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _nprogress = _interopRequireDefault(require("nprogress"));

require("nprogress/nprogress.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

_vue["default"].use(_vueRouter["default"]);

var routes = [{
  path: '/',
  name: 'userLoginIn',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/userLoginIn.vue'));
    });
  }
}, {
  path: '/userMsg',
  name: 'userMsg',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/userMsg.vue'));
    });
  }
}, {
  path: '/userLoginIn',
  name: 'userLoginIn',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/userLoginIn.vue'));
    });
  }
}, {
  path: '/servicerMsg',
  name: 'servicerMsg',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/servicerMsg.vue'));
    });
  }
}, {
  path: '/userOrder',
  name: 'userOrder',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/userOrder.vue'));
    });
  }
}, {
  path: '/servicerOrder',
  name: 'servicerOrder',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/servicerOrder.vue'));
    });
  }
}, {
  path: '/my',
  name: 'my',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/my.vue'));
    });
  }
}];
var router = new _vueRouter["default"]({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
}); // 进度条配置项这样写

_nprogress["default"].configure({
  showSpinner: false
}); // 路由跳转前钩子函数中 - 执行进度条开始加载


router.beforeEach(function (to, from, next) {
  _nprogress["default"].start();

  next();
}); // 路由跳转后钩子函数中 - 执行进度条加载结束

router.afterEach(function () {
  _nprogress["default"].done();
});
var _default = router;
exports["default"] = _default;