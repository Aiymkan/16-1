// const hi =() => {
//     console.log("hi");
// };

// setTimeout(hi, 5000);

// setTimeout(() => {
//     console.log("1");
// }, 2000)

// const sayHi = () => {
//     console.log("hi, dude");
// };

// const interval = setInterval(sayHi, 1500);

// // clearInterval(interval);

// setTimeout (() => {
//     clearInterval(interval);
// }, 5000);

// setTimeout (() => {
//     console.log("1");
// }, 1000);

// setTimeout (() => {
//     console.log("2");
// }, 2000);

// setTimeout (() => {
//     console.log("3");
// }, 3000);

// setTimeout (() => {
//     console.log("4");
// }, 4000);

// console.log ("a");
// console.log ("b");
// console.log ("c");
// console.log ("d");

// setTimeout (() => {
//     console.log(0)
// },0);

const block = document.querySelector(".block");

let position = 0;
let topPosition = 0;

const move = () => {
  if(position < 440) {
    position+= 16;
    block.style.left = `${position}px`;
    // move() 
    setTimeout(move, 150);
  }else if(topPosition < 440){
    topPosition+= 16;
    block.style.top = `${topPosition}px`;
    setTimeout(move, 150);
  }else if(position > 440 || topPosition > 440){
    position-= 16;
    block.style.right = `${position}px`;
    setTimeout(move, 150);
  };
//   else if(topPosition < 440){
//     topPosition-= 16;
//     block.style.bottom = `${topPosition}px`;
//     setTimeout(move, 150);};
};

move();