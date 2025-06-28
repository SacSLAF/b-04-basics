// console.log("session 04");
// console.log("Start");
// setTimeout(() => console.log("Timeout 01"),1000);
// console.log("End");

// console.log("Start");
// let myPromise = new Promise((resolve, reject) => {
//   let success = true;
//   if (success) {
//     resolve("Promise resolved successfully!");
//   } else {
//     reject("Promise rejected!");
//   }
// });

// myPromise
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((error) => {
//     console.error(error);
//   })
//   .finally(() => {
//     console.log("Promise handling completed.");
//   });
// console.log("End");

// function fetchData1() {
//   console.log("Data 01");
// }
// let fetchData2 = () => {
//   console.log("Data 02");
// };
// // fetchData1();
// // fetchData2();

// // async await
// function fetchData3() {
//   console.log("Data 03");
// }
// let fetchData4 = async() => {
//   console.log("Data 04");
// };
// fetchData3();
// fetchData4();

// Javascript Callbacks
// function fetchData(callback) {
//   console.log("Fetching data...");
//   setTimeout(() => {
//     const data = "Data fetched successfully!";
//     callback(data);
//   }, 2000);
// }
// function processData(data) {
//   console.log("Processing data:", data);
// } ;
// fetchData(processData);

// Session storage and local storage
// const userName = sessionStorage.getItem("username");
// if (userName) {
//   console.log("Welcome back, " + userName + "!");
// } else {
//   console.log("No user in session");
// }

sessionStorage.setItem("username", "JohnDoe");
// Retrieve the username from session storage
const userName = sessionStorage.getItem("username");
console.log("Session storage updated with username:",userName);
