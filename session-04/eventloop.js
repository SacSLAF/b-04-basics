// This example demonstrates how Promises work in JavaScript.
// Try changing 'success' to false to see how rejection is handled.
let success = true; // Change to false to see rejection

let myPromise = new Promise((resolve, reject) => {
  console.log("Promise started...");
  setTimeout(() => {
    if (success) {
      console.log("Promise is resolving...");
      resolve("Promise resolved successfully!");
    } else {
      console.log("Promise is rejecting...");
      reject("Promise rejected!");
    }
  }, 2000); // 2 second delay
});

async function handlePromise() {
  console.log("handlePromise started...");
  try {
    let result = await myPromise;
    console.log("Promise result:", result);
    // Fetch user and posts data in parallel
    const [userRes, postsRes] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users/1"),
      fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
    ]);
    const userData = await userRes.json();
    const postsData = await postsRes.json();
    console.log("User:", userData);
    console.log("Posts:", postsData);
  } catch (error) {
    console.log("Error caught in handlePromise:", error);
  }
  console.log("handlePromise finished.");
}

handlePromise();
console.log("Script continues after calling handlePromise...");