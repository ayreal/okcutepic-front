const ROUTE = "https://okcutepic-back.herokuapp.com/api/v1";
const TEST_ROUTE = "http://localhost:3001/api/v1";

// ADD TO HEADERS   "Authorization": "Token ----------"
const headers = {
  Accepts: "application/json, text/plain",
  "Content-Type": "application/json"
};

// AUTHENTICATION
export function fetchUser(data) {
  return fetch(`${TEST_ROUTE}/auth`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(data)
  }).then(res => res.json());
}

export function fetchCurrentUser() {
  //debugger;
  const token = localStorage.getItem("token");
  return fetch(`${TEST_ROUTE}/current_user`, {
    headers: { Authorization: token }
  }).then(res => res.json());
}

//

export function fetchUsers() {
  return fetch(`${ROUTE}/users`).then(res => res.json());
}

export function fetchInterests() {
  return fetch(`${ROUTE}/interests`).then(res => res.json());
}

export function createLike(data) {
  fetch(`${ROUTE}/matches`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(res => console.log(res));
}

export function postUser(body) {
  fetch(`${ROUTE}/users`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(body)
  })
    .then(res => res.json())
    .then(res => console.log(res));
}

export function fetchMatches(user) {
  return fetch(`${ROUTE}/users/${user.id}`).then(res => res.json());
}
