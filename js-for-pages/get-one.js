
const URL = "https://jsonplaceholder.typicode.com/users/"

export function setupJsForFindOne() {
  document.getElementById("user-info").value = ""
  document.getElementById("text-for-id").value = ""
  document.getElementById("btn-find-one").onclick = findOne
}

async function findOne() {
  const userToFindId = document.getElementById("text-for-id").value
  const user = await fetch(URL + userToFindId).then(r => r.json())
  document.getElementById("user-info").innerText = JSON.stringify(user, null, 2)
}