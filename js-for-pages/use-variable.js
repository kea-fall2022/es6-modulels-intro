

import { getVariable } from "../js-for-pages/declare-variable.js"

export function setText() {
  document.getElementById("text-from-other-module").innerHTML = getVariable()
}