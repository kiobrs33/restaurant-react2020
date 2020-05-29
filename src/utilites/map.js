export function drawRoute(array) {
   let newArray = [];
   array.map((c) => {
      newArray.push({ lat: c[1], lng: c[0] });
   });
   return newArray;
}
