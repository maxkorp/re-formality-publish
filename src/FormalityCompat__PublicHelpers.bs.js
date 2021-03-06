// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Curry from "bs-platform/lib/es6/curry.mjs";

function preventDefault(submit, $$event) {
  if (!$$event.defaultPrevented) {
    $$event.preventDefault();
  }
  return Curry._1(submit, undefined);
}

function toValueOnChange($$event) {
  return $$event.target.value;
}

function toValueOnBlur($$event) {
  return $$event.target.value;
}

function toCheckedOnChange($$event) {
  return $$event.target.checked;
}

function toCheckedOnBlur($$event) {
  return $$event.target.checked;
}

var Dom = {
  preventDefault: preventDefault,
  toValueOnChange: toValueOnChange,
  toValueOnBlur: toValueOnBlur,
  toCheckedOnChange: toCheckedOnChange,
  toCheckedOnBlur: toCheckedOnBlur
};

export {
  Dom ,
  
}
/* No side effect */
