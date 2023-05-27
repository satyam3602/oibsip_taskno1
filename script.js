const pi=Math.PI;
const e=Math.E;

var input=document.getElementById("Input");
var result=document.getElementById("Result");

function appendChar(char) {
    input.value+=char;
}
function clearInput() {
    input.value='';
}
function deleteChar() {
    input.value=input.value.slice(0,-1);
}
function calculate() {
    try {
        result.value=eval(input.value);
    } catch (error) {
        result.value=error;
    }
}