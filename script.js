//Javascript variable types and declarations
var data = 'test data';
const constdata = "constant";
let age = 34;
const isAuthenticated = true;
const firstName = null;
const userData = {
    name: "John Doe",
    email: "test@email.com",
    age: 30,
};
const fruits = ["apple", "banana", "cherry"];
const lastName = undefined; // This will cause an error
const usersDataSet = [{id:1, name:"Alice"}, {id:2, name:"Bob"},{id:3, name:"Rist"}];

// console.log("Hello, World!", {data,constdata,age});
// console.log("Value:", isAuthenticated, "Type:", typeof isAuthenticated);
// console.log("Value:", lastName, "Type:", typeof lastName);
// console.log("Value:", firstName, "Type:", typeof firstName);
// console.log("Value:", fruits, "Type:", typeof fruits);
// console.log("Value:", userData, "Type:", typeof userData);
// console.log("Value:", usersDataSet, "Type:", typeof usersDataSet);


// Javascript var hoisting
// console.log("01:", dataset);
var dataset = "ABCEDR";
// console.log("02:", dataset);

// let and const hoisting
// console.log("04:", datalet);
let datalet = "Test345"; //initialization
// console.log("05:", datalet);
// datalet = "Test4567788"; //update or reassign
// console.log("06", datalet);

//const type
// console.log("07", userName);
const userName = "Don";
// console.log("08", userName);
userName = "Ton";
// console.log("", userName);  //can not re assign
const lastNameConst; //can not declare without initialization
// console.log("",lastNameConst);
