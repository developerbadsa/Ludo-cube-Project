var display = document.getElementById("display");
var display1 = document.getElementById("display1");
var btn = document.getElementById("btn");



function PressBtn(){

    var randNumber = Math.floor(Math.random() * 6+1);
    var nmber = randNumber;

    if(nmber === 6){
        display1.innerHTML="!!Yes You Have got Six!!";
    }else{
        display1.innerHTML="";
    }

    display.innerHTML=nmber;
    console.log(nmber);

}


btn.addEventListener("click", PressBtn)

