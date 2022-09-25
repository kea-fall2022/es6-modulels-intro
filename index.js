import { jsForCreateVariable } from "./js-for-pages/declare-variable.js"
import { setText } from "./js-for-pages/use-variable.js"
import { jsForAllUsers } from "./js-for-pages/get-all.js"
import { setupJsForFindOne } from "./js-for-pages/get-one.js"

let lastVisibleContent = document.getElementById("div-info");
document.getElementById("btns").onclick = handleButtonClick

//Handle the switching between the different views
function handleButtonClick(evt) {
  const target = evt.target
  const isMenuBtn = target.tagName === "BUTTON" && target.id.startsWith("menu-btn-")
  if (!isMenuBtn) {
    return
  }
  lastVisibleContent.style.display = "none"
  const idForNewVisibleContent = target.id.replace("menu-btn", "div")
  lastVisibleContent = document.getElementById(idForNewVisibleContent);
  lastVisibleContent.style.display = "block"

  //Now handle JavaScript for the buttom clicked
  switch (target.id) {
    case "menu-btn-info": break //No JavaScript for this view
    case "menu-btn-declare-variable": jsForCreateVariable(); break
    case "menu-btn-use-variable": setText(); break
    case "menu-btn-show-all": jsForAllUsers(); break
    case "menu-btn-find-one": setupJsForFindOne(); break
  }
}
