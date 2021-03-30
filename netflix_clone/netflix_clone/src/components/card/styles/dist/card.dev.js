"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Maturity = exports.Content = exports.FeatureClose = exports.FeatureTitle = exports.Feature = exports.FeatureText = exports.Item = exports.Image = exports.Meta = exports.Entities = exports.Text = exports.SubTitle = exports.Group = exports.Container = exports.Title = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n    background-color: ", ";\n    border-radius: 15px;\n    width: 20px;\n    padding: 5px;\n    text-align: center;\n    color: white;\n    font-weight: bold;\n    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);\n    margin-right: 10px;\n    font-size: 12px;\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n    margin: 56px;\n    max-width: 500px;\n    line-height: normal;\n    \n    @media (max-width: 1000px) {\n        margin: 30px;\n        max-width: none;\n    }\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n    color: white;\n    position: absolute;\n    right: 20px;\n    top: 20px;\n    cursor: pointer;\n    background-color: transparent;\n    border: 0;\n    \n    img {\n        filter: brightness(0) invert(1);\n        width: 24px;\n    }\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n    margin-left: 0;\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: row;\n    background: url(", ");\n    background-size: contain;\n    position: relative;\n    height: 360px;\n    background-position-x: right;\n    background-repeat: no-repeat;\n    background-color: black;\n    \n    @media (max-width: 1000px) {\n        height: auto;\n        background-size: auto;\n        \n        ", " {\n            font-size: 20px;\n            line-height: 20px;\n            margin-bottom: 10px;\n        }\n        ", " {\n            font-size: 14px;\n        }\n    }\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n    font-size: 18px;\n    color: white;\n    font-weight: ", ";\n    margin: 0;\n    \n    @media (max-width: 800px) {\n        line-height: 22px;\n    }\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: column;\n    margin-right: 5px;\n    position: relative;\n    cursor: pointer;\n    transition: transform 0.2;\n    \n    &:hover {\n        transform: scale(1.3);\n        z-index: 99;\n    }\n    \n    @media (min-width: 1000px) {\n        &:hover ", ", &:hover ", ", &:hover ", " {\n            display: block;\n            z-index: 100;\n        }\n    }\n    \n    &:first-of-type {\n        margin-left: 56px;\n        \n        @media (max-width: 1000px) {\n            margin-left: 30px;\n        }\n    }\n    \n    &:last-of-type {\n        margin-right: 56px;\n        \n        @media (max-width: 1000px) {\n            margin-right: 30px;\n        }\n    }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    border: 0;\n    width: 100%;\n    max-width: 305px;\n    cursor: pointer;\n    height: auto;\n    padding: 0;\n    margin: 0;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    display: none;\n    position: absolute;\n    bottom: 0;\n    padding: 10px;\n    background-color: #0000008f;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: row;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    margin-top: 5px;\n    font-size: 10px;\n    color: white;\n    margin-bottom: 0;\n    user-select: none;\n    display: none;\n    line-height: normal;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    font-size: 12px;\n    color: white;\n    font-weight: bold;\n    margin-top: 0;\n    margin-bottom: 0;\n    user-select: none;\n    display: none;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: ", ";\n    ", ";\n    ", ";\n    \n    > ", ":first-of-type {\n        @media (min-width: 1100px) {\n            margin-top: -150px;\n        }\n    }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 50px;\n    box-sizing: border-box;\n    \n    > ", " {\n        @media (max-width: 1000px) {\n            margin-left: 30px;\n        }\n    }\n    \n    &:last-of-type {\n        margin-bottom: 0;\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    font-size: 24px;\n    color: #e5e5e5;\n    font-weight: bold;\n    margin-left: 56px;\n    margin-right: 56px;\n    margin-top: 0;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Title = _styledComponents["default"].p(_templateObject());

exports.Title = Title;

var Container = _styledComponents["default"].div(_templateObject2(), Title);

exports.Container = Container;

var Group = _styledComponents["default"].div(_templateObject3(), function (_ref) {
  var flexDirection = _ref.flexDirection;
  return flexDirection === 'row' ? 'row' : 'column';
}, function (_ref2) {
  var alignItems = _ref2.alignItems;
  return alignItems && "align-items: ".concat(alignItems);
}, function (_ref3) {
  var margin = _ref3.margin;
  return margin && "margin: ".concat(margin);
}, Container);

exports.Group = Group;

var SubTitle = _styledComponents["default"].p(_templateObject4());

exports.SubTitle = SubTitle;

var Text = _styledComponents["default"].p(_templateObject5());

exports.Text = Text;

var Entities = _styledComponents["default"].div(_templateObject6());

exports.Entities = Entities;

var Meta = _styledComponents["default"].div(_templateObject7());

exports.Meta = Meta;

var Image = _styledComponents["default"].img(_templateObject8());

exports.Image = Image;

var Item = _styledComponents["default"].div(_templateObject9(), Meta, Text, SubTitle);

exports.Item = Item;

var FeatureText = _styledComponents["default"].p(_templateObject10(), function (_ref4) {
  var fontWeight = _ref4.fontWeight;
  return fontWeight === 'bold' ? 'bold' : 'normal';
});

exports.FeatureText = FeatureText;

var Feature = _styledComponents["default"].div(_templateObject11(), function (_ref5) {
  var src = _ref5.src;
  return src;
}, Title, FeatureText);

exports.Feature = Feature;
var FeatureTitle = (0, _styledComponents["default"])(Title)(_templateObject12());
exports.FeatureTitle = FeatureTitle;

var FeatureClose = _styledComponents["default"].button(_templateObject13());

exports.FeatureClose = FeatureClose;

var Content = _styledComponents["default"].div(_templateObject14());

exports.Content = Content;

var Maturity = _styledComponents["default"].div(_templateObject15(), function (_ref6) {
  var rating = _ref6.rating;
  return rating >= 15 ? 'red' : 'green';
});

exports.Maturity = Maturity;