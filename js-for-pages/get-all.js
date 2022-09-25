const URL = "https://jsonplaceholder.typicode.com/users/"

let allUsers = []
if (allUsers.length === 0) {
  allUsers = await showAll()
}

export function getAllUsers(){
  return allUsers
}

export function jsForAllUsers() {
  document.getElementById("btn-get-all").onclick = showAll
}

export async function showAll() {
  const all = await fetch(URL).then(r => r.json())
  allUsers = all;
  const tableRows = allUsers.map(user => `
          <tr>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.username}</td>
            <td>${user.email}</td>
          </tr>
        `
  ).join("")
  document.getElementById("tbl-body").innerHTML = tableRows
}
