"use strict";

var _hello = _interopRequireDefault(require("./hello"));

var _world = _interopRequireDefault(require("./world"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.getElelmentById('demo').innerHTML = "".concat(_hello.default, ", ").concat(_world.default, "!");