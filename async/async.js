const users = ["Aung Myat Oo", "Myo Thant Kyaw", "Aung Aung"];

users.forEach((user) => {
  console.log(user);
});
console.log("end"); // synchronous

setTimeout(() => {
  console.log("asynchronous");
}, 2000);
console.log("Don't wait for data");

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject({ error: "failed to fetch" });
  }, 2000);
});
promise
  .then((res) => {
    console.log(res.data);
  })
  .catch((err) => {
    console.log(err);
  });
