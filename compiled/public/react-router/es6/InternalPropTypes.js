'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routes = exports.route = exports.components = exports.component = exports.history = undefined;
exports.falsy = falsy;

var _react = require('react');

var func = _react.PropTypes.func;
var object = _react.PropTypes.object;
var arrayOf = _react.PropTypes.arrayOf;
var oneOfType = _react.PropTypes.oneOfType;
var element = _react.PropTypes.element;
var shape = _react.PropTypes.shape;
var string = _react.PropTypes.string;

function falsy(props, propName, componentName) {
  if (props[propName]) return new Error('<' + componentName + '> should not have a "' + propName + '" prop');
}

var history = exports.history = shape({
  listen: func.isRequired,
  push: func.isRequired,
  replace: func.isRequired,
  go: func.isRequired,
  goBack: func.isRequired,
  goForward: func.isRequired
});

var component = exports.component = oneOfType([func, string]);
var components = exports.components = oneOfType([component, object]);
var route = exports.route = oneOfType([object, element]);
var routes = exports.routes = oneOfType([route, arrayOf(route)]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3B1YmxpYy9yZWFjdC1yb3V0ZXIvZXM2L0ludGVybmFsUHJvcFR5cGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztRQVdnQixLLEdBQUEsSzs7QUFYaEI7O0FBRUEsSUFBSSxPQUFPLGlCQUFVLElBQXJCO0FBQ0EsSUFBSSxTQUFTLGlCQUFVLE1BQXZCO0FBQ0EsSUFBSSxVQUFVLGlCQUFVLE9BQXhCO0FBQ0EsSUFBSSxZQUFZLGlCQUFVLFNBQTFCO0FBQ0EsSUFBSSxVQUFVLGlCQUFVLE9BQXhCO0FBQ0EsSUFBSSxRQUFRLGlCQUFVLEtBQXRCO0FBQ0EsSUFBSSxTQUFTLGlCQUFVLE1BQXZCOztBQUdPLFNBQVMsS0FBVCxDQUFlLEtBQWYsRUFBc0IsUUFBdEIsRUFBZ0MsYUFBaEMsRUFBK0M7QUFDcEQsTUFBSSxNQUFNLFFBQU4sQ0FBSixFQUFxQixPQUFPLElBQUksS0FBSixDQUFVLE1BQU0sYUFBTixHQUFzQix1QkFBdEIsR0FBZ0QsUUFBaEQsR0FBMkQsUUFBckUsQ0FBUDtBQUN0Qjs7QUFFTSxJQUFJLDRCQUFVLE1BQU07QUFDekIsVUFBUSxLQUFLLFVBRFk7QUFFekIsUUFBTSxLQUFLLFVBRmM7QUFHekIsV0FBUyxLQUFLLFVBSFc7QUFJekIsTUFBSSxLQUFLLFVBSmdCO0FBS3pCLFVBQVEsS0FBSyxVQUxZO0FBTXpCLGFBQVcsS0FBSztBQU5TLENBQU4sQ0FBZDs7QUFTQSxJQUFJLGdDQUFZLFVBQVUsQ0FBQyxJQUFELEVBQU8sTUFBUCxDQUFWLENBQWhCO0FBQ0EsSUFBSSxrQ0FBYSxVQUFVLENBQUMsU0FBRCxFQUFZLE1BQVosQ0FBVixDQUFqQjtBQUNBLElBQUksd0JBQVEsVUFBVSxDQUFDLE1BQUQsRUFBUyxPQUFULENBQVYsQ0FBWjtBQUNBLElBQUksMEJBQVMsVUFBVSxDQUFDLEtBQUQsRUFBUSxRQUFRLEtBQVIsQ0FBUixDQUFWLENBQWIiLCJmaWxlIjoiSW50ZXJuYWxQcm9wVHlwZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5cbnZhciBmdW5jID0gUHJvcFR5cGVzLmZ1bmM7XG52YXIgb2JqZWN0ID0gUHJvcFR5cGVzLm9iamVjdDtcbnZhciBhcnJheU9mID0gUHJvcFR5cGVzLmFycmF5T2Y7XG52YXIgb25lT2ZUeXBlID0gUHJvcFR5cGVzLm9uZU9mVHlwZTtcbnZhciBlbGVtZW50ID0gUHJvcFR5cGVzLmVsZW1lbnQ7XG52YXIgc2hhcGUgPSBQcm9wVHlwZXMuc2hhcGU7XG52YXIgc3RyaW5nID0gUHJvcFR5cGVzLnN0cmluZztcblxuXG5leHBvcnQgZnVuY3Rpb24gZmFsc3kocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gIGlmIChwcm9wc1twcm9wTmFtZV0pIHJldHVybiBuZXcgRXJyb3IoJzwnICsgY29tcG9uZW50TmFtZSArICc+IHNob3VsZCBub3QgaGF2ZSBhIFwiJyArIHByb3BOYW1lICsgJ1wiIHByb3AnKTtcbn1cblxuZXhwb3J0IHZhciBoaXN0b3J5ID0gc2hhcGUoe1xuICBsaXN0ZW46IGZ1bmMuaXNSZXF1aXJlZCxcbiAgcHVzaDogZnVuYy5pc1JlcXVpcmVkLFxuICByZXBsYWNlOiBmdW5jLmlzUmVxdWlyZWQsXG4gIGdvOiBmdW5jLmlzUmVxdWlyZWQsXG4gIGdvQmFjazogZnVuYy5pc1JlcXVpcmVkLFxuICBnb0ZvcndhcmQ6IGZ1bmMuaXNSZXF1aXJlZFxufSk7XG5cbmV4cG9ydCB2YXIgY29tcG9uZW50ID0gb25lT2ZUeXBlKFtmdW5jLCBzdHJpbmddKTtcbmV4cG9ydCB2YXIgY29tcG9uZW50cyA9IG9uZU9mVHlwZShbY29tcG9uZW50LCBvYmplY3RdKTtcbmV4cG9ydCB2YXIgcm91dGUgPSBvbmVPZlR5cGUoW29iamVjdCwgZWxlbWVudF0pO1xuZXhwb3J0IHZhciByb3V0ZXMgPSBvbmVPZlR5cGUoW3JvdXRlLCBhcnJheU9mKHJvdXRlKV0pOyJdfQ==