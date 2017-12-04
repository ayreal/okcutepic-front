import React from "react";
const ROUTE = "https://okcutepic-back.herokuapp.com/api/v1";
const TESTROUTE = "http://localhost:3000/api/v1";

// const headers = {
//   Accepts: "application/json, text/plain",
//
//   "Content-Type": "application/json"
// };

export function fetchUsers() {
  return fetch(`${ROUTE}/users`).then(res => res.json());
}

export function fetchInterests() {
  return fetch(`${ROUTE}/interests`).then(res => res.json());
}
