const display = document.querySelector(".display");
const button = document.querySelectorAll(".buttons button");
const specialChars = ["%","*","/","-","+","="];
let output = "";

const calculate = (btn) =>{
    display.focus();
    if(btn === "="&& output!==""){
        output=eval(output.replace("%","/100"));
    }
    else if(btn === "AC"){
        output="";
    }
    else if(btn === "DEL"){
        output= output.toString().slice(0,-1);
    }
    else{
        if(output===""&& specialChars.includes(btn)) return;
        output += btn;
    }
    display.value = output;
};

button.forEach((button)=>{
    button.addEventListener("click",(e)=> calculate(e.target.dataset.value));
})