let input = document.querySelector(".inp");
let btn1 = document.getElementById("Reset");
btn1.onclick = function(){
    input.value = "";
}
let btn2 = document.getElementById("slash");
btn2.onclick = function(){
    pressKey('/');
}
let btn3 = document.getElementById("star");
btn3.onclick = function(){
    pressKey('*');
}
let btn4 = document.getElementById("seven");
btn4.onclick = function(){
    pressKey(7);
}
let btn5 = document.getElementById("eight");
btn5.onclick = function(){
    pressKey(8);
}
let btn6 = document.getElementById("nine");
btn6.onclick = function(){
    pressKey(9);
}
let btn7 = document.getElementById("dash");
btn7.onclick = function(){
    pressKey('-');
}
let btn8 = document.getElementById("four");
btn8.onclick = function(){
    pressKey(4);
}
let btn9 = document.getElementById("five");
btn9.onclick = function(){
    pressKey(5);
}
let btn10 = document.getElementById("six");
btn10.onclick = function(){
    pressKey(6);
}
let btn11 = document.getElementById("plus");
btn11.onclick = function(){
    pressKey('+');
}
let btn12 = document.getElementById("one");
btn12.onclick = function(){
    pressKey(1);

}
let btn13 = document.getElementById("two");
btn13.onclick = function(){
    pressKey(2);
}
let btn14 = document.getElementById("three");
btn14.onclick = function(){
    pressKey(3);
}
let btn15 = document.getElementById("percent");
btn15.onclick = function(){
    pressKey('%');
}
let btn16 = document.getElementById("zero");
btn16.onclick = function(){
    pressKey(0);
}
let btn17 = document.getElementById("zeros");
btn17.onclick = function(){
    pressKey('00');
}
let btn18 = document.getElementById("dot");
btn18.onclick = function(){
    pressKey('.');
}
let btn19 = document.getElementById("Equal");
btn19.onclick = function(){
    onclick=calculate();
}

function pressKey(keyValue){
    input.value += keyValue; 

}
function calculate(){
    input.value=eval(input.value);
}
function clear(){
    input.value=clear(input.value);
}
