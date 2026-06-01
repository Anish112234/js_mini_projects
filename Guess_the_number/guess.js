let number = document.querySelector("#txt");
let btn = document.querySelector("#btn");
let result = document.querySelector("#result");

let gussTimeElement = document.querySelector("#guessTime")


let secretNumber = Math.floor(Math.random()*100)+1;
console.log(secretNumber)

let guessTime =0;

btn.addEventListener("click",()=>{
   let guess = Number(number.value);
   if(guess === secretNumber){
    result.innerText="Correct!You gussed it"
   }else if(guess > secretNumber){
    result.innerText="Guess is high"
   }else{
    result.innerText="Guess is low"
   }   
})



let newGame = document.querySelector("#newGame")
newGame.addEventListener("click",()=>{
   secretNumber=Math.floor(Math.random()*100)+1;
    result.innerText="Guess Again"
    guessTime=0;
     gussTimeElement.innerText=guessTime
   number.value="";
   
})



btn.addEventListener("click",()=>{
    guessTime++;
    gussTimeElement.innerText=guessTime + ":times Guess";
})




