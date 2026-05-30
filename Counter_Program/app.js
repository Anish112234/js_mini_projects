
let countDisplay = document.querySelector("#countDisplay");
let increaseBtn = document.querySelector("#increaseBtn");
let decreaseBtn = document.querySelector("#decreaseBtn");
let resetBtn = document.querySelector("#resetBtn");

let count = 0;

increaseBtn.addEventListener("click",()=>{
    count++;
    countDisplay.innerText=count;
});

decreaseBtn.addEventListener("click",()=>{
    count--;
    countDisplay.innerText=count;
})

resetBtn.addEventListener("click",()=>{
    count = 0;
    countDisplay.innerText=count;
});
