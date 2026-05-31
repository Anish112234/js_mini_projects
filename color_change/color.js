let ColorBtn = document.querySelector("#colorBtn");

ColorBtn.addEventListener("click",()=>{

    if(document.body.style.backgroundColor === "black" ) {
        document.body.style.backgroundColor="White"
        document.body.style.color="black"
    }else{
document.body.style.backgroundColor="black";    
 document.body.style.color="white";
    }
    
});

