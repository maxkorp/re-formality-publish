// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Belt_Id from "bs-platform/lib/es6/belt_Id.mjs";
import * as Caml_obj from "bs-platform/lib/es6/caml_obj.mjs";
import * as FormalityCompat__FormWithId from "./FormalityCompat__FormWithId.bs.js";

function Make(Form) {
  var cmp = Caml_obj.caml_compare;
  var FieldId = Belt_Id.MakeComparable({
        cmp: cmp
      });
  return FormalityCompat__FormWithId.Make({
              validators: Form.validators,
              FieldId: FieldId
            });
}

var Validation;

export {
  Validation ,
  Make ,
  
}
/* FormalityCompat__FormWithId Not a pure module */
