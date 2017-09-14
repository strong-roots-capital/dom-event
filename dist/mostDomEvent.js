(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.mostDomEvent = global.mostDomEvent || {})));
}(this, (function (exports) { 'use strict';

/** @license MIT License (c) copyright 2015-2016 original author or authors */
/** @author Brian Cavalier */
// domEvent :: (EventTarget t, Event e) => String -> t -> boolean=false -> Stream e
var domEvent = function (event, node, capture) {
    if ( capture === void 0 ) capture = false;

    return new DomEvent(event, node, capture);
};

var blur = function (node, capture) {
  if ( capture === void 0 ) capture = false;

  return domEvent('blur', node, capture);
};
var focus = function (node, capture) {
  if ( capture === void 0 ) capture = false;

  return domEvent('focus', node, capture);
};
var focusin = function (node, capture) {
  if ( capture === void 0 ) capture = false;

  return domEvent('focusin', node, capture);
};
var focusout = function (node, capture) {
  if ( capture === void 0 ) capture = false;

  return domEvent('focusout', node, capture);
};
var click = function (node, capture) {
  if ( capture === void 0 ) capture = false;

  return domEvent('click', node, capture);
};
var dblclick = function (node, capture) {
  if ( capture === void 0 ) capture = false;

  return domEvent('dblclick', node, capture);
};
var mousedown = function (node, capture) {
  if ( capture === void 0 ) capture = false;

  return domEvent('mousedown', node, capture);
};
var mouseup = function (node, capture) {
  if ( capture === void 0 ) capture = false;

  return domEvent('mouseup', node, capture);
};
var mousemove = function (node, capture) {
  if ( capture === void 0 ) capture = false;

  return domEvent('mousemove', node, capture);
};
var mouseover = function (node, capture) {
  if ( capture === void 0 ) capture = false;

  return domEvent('mouseover', node, capture);
};
var mouseenter = function (node, capture) {
  if ( capture === void 0 ) capture = false;

  return domEvent('mouseenter', node, capture);
};
var mouseout = function (node, capture) {
  if ( capture === void 0 ) capture = false;

  return domEvent('mouseout', node, capture);
};
var mouseleave = function (node, capture) {
  if ( capture === void 0 ) capture = false;

  return domEvent('mouseleave', node, capture);
};
var change = function (node, capture) {
  if ( capture === void 0 ) capture = false;

  return domEvent('change', node, capture);
};
var select = function (node, capture) {
  if ( capture === void 0 ) capture = false;

  return domEvent('select', node, capture);
};
var submit = function (node, capture) {
  if ( capture === void 0 ) capture = false;

  return domEvent('submit', node, capture);
};
var keydown = function (node, capture) {
  if ( capture === void 0 ) capture = false;

  return domEvent('keydown', node, capture);
};
var keypress = function (node, capture) {
  if ( capture === void 0 ) capture = false;

  return domEvent('keypress', node, capture);
};
var keyup = function (node, capture) {
  if ( capture === void 0 ) capture = false;

  return domEvent('keyup', node, capture);
};
var input = function (node, capture) {
  if ( capture === void 0 ) capture = false;

  return domEvent('input', node, capture);
};
var contextmenu = function (node, capture) {
  if ( capture === void 0 ) capture = false;

  return domEvent('contextmenu', node, capture);
};
var resize = function (node, capture) {
  if ( capture === void 0 ) capture = false;

  return domEvent('resize', node, capture);
};
var scroll = function (node, capture) {
  if ( capture === void 0 ) capture = false;

  return domEvent('scroll', node, capture);
};
var error = function (node, capture) {
  if ( capture === void 0 ) capture = false;

  return domEvent('error', node, capture);
};

var hashchange = function (node, capture) {
  if ( capture === void 0 ) capture = false;

  return domEvent('hashchange', node, capture);
};
var popstate = function (node, capture) {
  if ( capture === void 0 ) capture = false;

  return domEvent('popstate', node, capture);
};
var load = function (node, capture) {
  if ( capture === void 0 ) capture = false;

  return domEvent('load', node, capture);
};
var unload = function (node, capture) {
  if ( capture === void 0 ) capture = false;

  return domEvent('unload', node, capture);
};

var pointerdown = function (node, capture) {
  if ( capture === void 0 ) capture = false;

  return domEvent('pointerdown', node, capture);
};
var pointerup = function (node, capture) {
  if ( capture === void 0 ) capture = false;

  return domEvent('pointerup', node, capture);
};
var pointermove = function (node, capture) {
  if ( capture === void 0 ) capture = false;

  return domEvent('pointermove', node, capture);
};
var pointerover = function (node, capture) {
  if ( capture === void 0 ) capture = false;

  return domEvent('pointerover', node, capture);
};
var pointerenter = function (node, capture) {
  if ( capture === void 0 ) capture = false;

  return domEvent('pointerenter', node, capture);
};
var pointerout = function (node, capture) {
  if ( capture === void 0 ) capture = false;

  return domEvent('pointerout', node, capture);
};
var pointerleave = function (node, capture) {
  if ( capture === void 0 ) capture = false;

  return domEvent('pointerleave', node, capture);
};

var touchstart = function (node, capture) {
  if ( capture === void 0 ) capture = false;

  return domEvent('touchstart', node, capture);
};
var touchend = function (node, capture) {
  if ( capture === void 0 ) capture = false;

  return domEvent('touchend', node, capture);
};
var touchmove = function (node, capture) {
  if ( capture === void 0 ) capture = false;

  return domEvent('touchmove', node, capture);
};
var touchcancel = function (node, capture) {
  if ( capture === void 0 ) capture = false;

  return domEvent('touchcancel', node, capture);
};

var DomEvent = function DomEvent (event, node, capture) {
  this.event = event;
  this.node = node;
  this.capture = capture;
};

DomEvent.prototype.run = function run (sink, scheduler) {
    var this$1 = this;

  var send = function (e) { return tryEvent(scheduler.currentTime(), e, sink); };
  var dispose = function () { return this$1.node.removeEventListener(this$1.event, send, this$1.capture); };

  this.node.addEventListener(this.event, send, this.capture);

  return { dispose: dispose }
};

function tryEvent (t, x, sink) {
  try {
    sink.event(t, x);
  } catch (e) {
    sink.error(t, e);
  }
}

exports.domEvent = domEvent;
exports.blur = blur;
exports.focus = focus;
exports.focusin = focusin;
exports.focusout = focusout;
exports.click = click;
exports.dblclick = dblclick;
exports.mousedown = mousedown;
exports.mouseup = mouseup;
exports.mousemove = mousemove;
exports.mouseover = mouseover;
exports.mouseenter = mouseenter;
exports.mouseout = mouseout;
exports.mouseleave = mouseleave;
exports.change = change;
exports.select = select;
exports.submit = submit;
exports.keydown = keydown;
exports.keypress = keypress;
exports.keyup = keyup;
exports.input = input;
exports.contextmenu = contextmenu;
exports.resize = resize;
exports.scroll = scroll;
exports.error = error;
exports.hashchange = hashchange;
exports.popstate = popstate;
exports.load = load;
exports.unload = unload;
exports.pointerdown = pointerdown;
exports.pointerup = pointerup;
exports.pointermove = pointermove;
exports.pointerover = pointerover;
exports.pointerenter = pointerenter;
exports.pointerout = pointerout;
exports.pointerleave = pointerleave;
exports.touchstart = touchstart;
exports.touchend = touchend;
exports.touchmove = touchmove;
exports.touchcancel = touchcancel;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=mostDomEvent.js.map
