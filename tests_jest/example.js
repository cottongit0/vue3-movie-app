// // export function double(num) {
// //   if (!num) {
// //     return 0;
// //   }
// //   return num * 2;
// // }

// import axios from "axios";
// import _upperFirst from "lodash/upperFirst";
// import _toLower from "lodash/toLower";

// // 3. 모의함수

// // export function asyncFn() {
// //   return new Promise((resolve) => {
// //     setTimeout(() => {
// //       resolve("Done");
// //     }, 1000);
// //   });
// // }

// export async function fetchMovieTitle() {
//   const res = await axios.get(
//     "https://omdbapi.com?apikey=7035c60c&i=tt4520988"
//   );
//   return _upperFirst(_toLower(res.data.Title)); // Frozen II => Frozen ii
// }
