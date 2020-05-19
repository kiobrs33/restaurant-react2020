export default function apiCall(method, url, token) {
   return fetch(url, {
      method,
      headers: {
         token: token,
      },
   }).then((response) => response.json());
}
