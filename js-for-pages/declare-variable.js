
let text = ""

document.getElementById("btn-save-text").onclick = () => {
  text = document.getElementById("input-text").value
  document.getElementById("text").innerText = text
}

export function jsForCreateVariable() {

}

export function getVariable() {
  return text;
}