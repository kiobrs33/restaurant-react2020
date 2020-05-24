export default function apiCall(method, url, token, data) {
   return fetch(url, {
      method,
      body: JSON.stringify(data),
      headers: {
         token: token,
         "Content-Type": "application/json",
      },
   }).then((response) => response.json());
}
