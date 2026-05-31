
let result = document.querySelector("#result");
let rollBtn = document.querySelector("#rollBtn");

rollBtn.addEventListener("click",()=>{
    let dice = Math.floor(Math.random()*6)+1;
    result.innerText =`You rolled dice:${dice}`;
});

