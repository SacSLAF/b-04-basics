//Javascript scopes

//block scope
{
  let a = 10;
  let b = 24;
  const cd = 30;
  console.log("01", a, b, cd);
}

console.log("02", a, b, cd);
