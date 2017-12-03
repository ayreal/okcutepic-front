const ROUTE = "https://okcutepic-back.herokuapp.com/api/v1/users";

const headers = {
  Accepts: "application/json, text/plain",

  "Content-Type": "application/json"
};

export function fetchUsers() {
  return fetch(ROUTE).then(res => res.json());
}

// fetchUsers = () => {
//   return fetch(
//     `https://okcutepic-back.herokuapp.com/api/v1/users`
//   ).then(res => res.json());
// };
