export default function apiCall(method, url, headers, data) {
   // console.log(token);
   return fetch(url, {
      method,
      // body: JSON.stringify(data),
      body: data,
      headers: headers,
      // headers: {
      //    token: token,
      //    // "Content-Type": "application/json",
      //    // "Content-Type": "multipart/form-data",
      // },
   }).then((response) => response.json());
}
