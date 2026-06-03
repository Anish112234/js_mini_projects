let dob = document.querySelector("#dob")
let calculate = document.querySelector("#calculate")
let result = document.querySelector("#result")




   



calculate.addEventListener("click",()=>{
   let birthDate = dob.value;
  
   let birth= new Date(birthDate)
    let today = new Date();

   let birthyear = birth.getFullYear();
   let currentyear = today.getFullYear();
   
let age =currentyear-birthyear;

result.innerText=`you are ${age} years old`;
console.log(age)
    
})