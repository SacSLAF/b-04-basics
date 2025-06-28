// Delayed greeting function
function delayedGreeting(name) {
  setTimeout(function () {
    console.log(`Hello, ${name}!`);
    alert(`Hello, ${name}!`);
  }, 2000);
}


function greetUser() {
  const name = document.getElementById("nameInput").value;
  delayedGreeting(name);
}
