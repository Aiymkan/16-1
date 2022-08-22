const block = document.querySelector(".block");

let position = 0;
let topPosition = 0;

const move = () => {
  if(position <= 440 && topPosition == 0) {
    position+= 16;
    block.style.left = `${position}px`;
    // move() 
    setTimeout(move, 150);
  }else if(position >= 440 && topPosition <= 440){
    topPosition+= 16;
    block.style.top = `${topPosition}px`;
    setTimeout(move, 150);
  }else if(topPosition >= 400 && position != 0 ){
    position-= 16;
    block.style.left = `${position}px`;
    setTimeout(move, 150);
  }else if(position == 0 && topPosition != 0){
    topPosition-= 16;
    block.style.top = `${topPosition}px`;
    setTimeout(move, 150);};
};

move();

let i = 0;
setInterval(()=> {
i ++;
console.log("Прошло " + i + " секунд");
},1000);