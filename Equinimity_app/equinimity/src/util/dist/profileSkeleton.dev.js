"use strict";

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _LocationOn = _interopRequireDefault(require("@material-ui/icons/LocationOn"));

var _Link = _interopRequireDefault(require("@material-ui/icons/Link"));

var _CalendarToday = _interopRequireDefault(require("@material-ui/icons/CalendarToday"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = function styles(theme) {
  return _objectSpread({}, theme, {
    handle: {
      height: 20,
      backgroundColor: theme.palette.primary.main,
      width: 60,
      margin: '0 auto 7px auto'
    },
    fullLine: {
      height: 15,
      backgroundColor: 'rgba(0,0,0,0.6)',
      width: '100%',
      marginBottom: 10
    },
    halfLine: {
      height: 15,
      backgroundColor: 'rgba(0,0,0,0.6)',
      width: '50%',
      marginBottom: 10
    }
  });
};

function ProfileSkeleton(_ref) {
  var children = _ref.children,
      props = _ref.props;
  var classes = props.classes;
  return;
}