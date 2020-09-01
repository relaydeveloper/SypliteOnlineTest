const promise1 = new Promise((resolve, reject) => {
  let ranomSecond = Math.floor((Math.random() * 3) + 1);
  setTimeout(resolve(ranomSecond), ranomSecond);
});
const promise2 = new Promise((resolve, reject) => {
  let ranomSecond = Math.floor((Math.random() * 3) + 1);
  setTimeout(resolve(ranomSecond), ranomSecond);
});
const promise3 = new Promise((resolve, reject) => {
  let ranomSecond = Math.floor((Math.random() * 3) + 1);
  setTimeout(resolve(ranomSecond), ranomSecond);
});
const promise4 = new Promise((resolve, reject) => {
  let ranomSecond = Math.floor((Math.random() * 3) + 1);
  setTimeout(resolve(ranomSecond), ranomSecond);
});
const promise5 = new Promise((resolve, reject) => {
  let ranomSecond = Math.floor((Math.random() * 3) + 1);
  setTimeout(resolve(ranomSecond), ranomSecond);
});
const promise6 = new Promise((resolve, reject) => {
  let ranomSecond = Math.floor((Math.random() * 3) + 1);
  setTimeout(resolve(ranomSecond), ranomSecond);
});
const promise7 = new Promise((resolve, reject) => {
  let ranomSecond = Math.floor((Math.random() * 3) + 1);
  setTimeout(resolve(ranomSecond), ranomSecond);
});
const promise8 = new Promise((resolve, reject) => {
  let ranomSecond = Math.floor((Math.random() * 3) + 1);
  setTimeout(resolve(ranomSecond), ranomSecond);
});
const promise9 = new Promise((resolve, reject) => {
  let ranomSecond = Math.floor((Math.random() * 3) + 1);
  setTimeout(resolve(ranomSecond), ranomSecond);
});
const promise10 = new Promise((resolve, reject) => {
  let ranomSecond = Math.floor((Math.random() * 3) + 1);
  setTimeout(resolve(ranomSecond), ranomSecond);
});

Promise.all([promise1,promise2,promise3,promise4,promise5,promise6,promise7,promise8,promise9,promise10])
  .then((result)=>{
    console.log('all promise completed =', result);
  })
