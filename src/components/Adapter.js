const ROUTE = "https://okcutepic-back.herokuapp.com/api/v1";
const TEST_ROUTE = "http://localhost:3001/api/v1";

const headers = {
  Accepts: "application/json, text/plain",
  "Content-Type": "application/json"
};

export function fetchUser(data) {
  return fetch(`${TEST_ROUTE}/auth`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(data)
  }).then(res => res.json());
}

export function fetchCurrentUser() {
  const token = localStorage.getItem("token");
  return fetch(`${TEST_ROUTE}/current_user`, {
    headers: { Authorization: token }
  }).then(res => res.json());
}

export function fetchUsers() {
  return fetch(`${ROUTE}/users`).then(res => res.json());
}

export function fetchInterests() {
  return fetch(`${ROUTE}/interests`).then(res => res.json());
}
