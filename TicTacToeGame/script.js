// Wait until the page is fully loaded
window.onload = function() {
  // After 4 seconds, hide the intro screen and show the game
  setTimeout(function() {
      // Hide the intro screen
      document.getElementById("intro-screen").style.display = 'none';
      // Show the game container
      document.getElementById("game-container").style.display = 'block';
  }, 4000); //4000ms=4sec
};


let boxes=document.querySelectorAll(".box");
let rstBtn=document.querySelector("#resetButton");
let newGame=document.querySelector("#newButton");
let messageContainer=document.querySelector(".msgContainer");
let msg=document.querySelector("#msg");

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];
  const resetGame = () => {
    turnO = true;
    count = 0;
    enableBoxes();
    messageContainer.classList.add("hide");
  };
  const enableBoxes = () => {
    for (let box of boxes) {
      box.disabled = false;
      box.innerText = "";
    }
  };  
turnO=true; //X or O
count=0;
const gameDraw = () => {
  msg.innerText = `Game Draw.`;
  messageContainer.classList.remove("hide");
  disableBoxes();
};

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        count++
        let isWinner = checkWinner();
        if (count === 9 && !isWinner) {
          gameDraw();
      
        }
    })
})
const disableBoxes = () => {
    for (let box of boxes) {
      box.disabled = true;
    }
  };

const showWinner=(winner)=>{
    msg.innerText=`Congratulations! winner is ${winner}`;
    messageContainer.classList.remove("hide");
    disableBoxes();
}
const checkWinner=()=>{
    for(let pattern of winPatterns){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;
        if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
            if (pos1Val === pos2Val && pos2Val === pos3Val){
            showWinner(pos1Val);
            return true;
            }
       
        }
    }
}
newGame.addEventListener("click", resetGame);
rstBtn.addEventListener("click", resetGame);
