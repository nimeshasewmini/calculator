const display= document.getElementById("display");
const deleteButton = document.getElementById('deleteBtn')

function appenedToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}
function clearDisplay(){
    display.value = "";
}

function calculate(){
   try {
        display.value = eval(display.value);
   } catch (error) {
     display.value = "Error";
   }
}

function deleteLdwastCharacter(){
    display.value = display.value.slice(0, -1);
}
/*
function clearEntry(){
    display.value = display.value.slice(0, -1);
}*/

function calculatePercentage(){
    try {
        display.value = eval(display.value) / 100;
    } catch (error) {
        display.value = "Error";
    }
}



function exponent(){
    try {
        // Replace 'E' or 'e' with '*10^' for exponentiation
        let input = display.value.replace(/e/gi, '*10^');
        display.value = eval(input);
    } catch (error) {
        display.value = "Error";
    }
}