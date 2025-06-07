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

console.log("Hello, World!", {data,constdata,age});
console.log("Value:", isAuthenticated, "Type:", typeof isAuthenticated);
console.log("Value:", lastName, "Type:", typeof lastName);
console.log("Value:", firstName, "Type:", typeof firstName);
console.log("Value:", fruits, "Type:", typeof fruits);
console.log("Value:", userData, "Type:", typeof userData);
console.log("Value:", usersDataSet, "Type:", typeof usersDataSet);
