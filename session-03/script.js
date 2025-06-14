//Javascript scopes

//block scope
{
  let a = 10;
  let b = 24;
  const cd = 30;
  var dfg = 55;
  console.log("01", a, b, cd, dfg);
}

// console.log("02", a, b, cd);
console.log("03", dfg);

// function scope

function myFunction() {
  let letData = 100;
  return letData;
}
//This will throw an error because letData is not defined inside the scope. 
console.log(letData);


function addThem(a, b) {
  return a + b;
}
// console.log("04", addThem(10, 20));

let bigNumber = 2342353462463573575375367356735n;
// console.log("05", typeof bigNumber);
