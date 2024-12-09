window.onload = function () {
    // After 3 seconds, hide the intro screen
    setTimeout(function () {
        document.getElementById("intro-screen").style.display = 'none'; 
    }, 3500); // 3 seconds
};

const result=document.getElementById('result');
let currentInput='';
let previousInput='';
let operator='';
let items=document.querySelectorAll('.grid-item');

function appendNumber(number){
    currentInput+=number;
    result.textContent=currentInput;
}

function appendOperator(op){
    if (currentInput==='') return;
    if (previousInput!='') calculate();
    operator=op;
    previousInput=currentInput;
    currentInput='';
}

function calculate() {
    let computation;
    const prev = parseFloat(previousInput);
    const curr = parseFloat(currentInput);
    if (isNaN(prev) || isNaN(curr)) return;

    switch (operator) {
        case '+':
            computation = prev + curr;
            break;
        case '-':
            computation = prev - curr;
            break;
        case 'X':
            computation = prev * curr;
            break;
        case '/':
            computation = curr === 0 ? 'Error' : prev / curr;
            break;
        default:
            return;
    }
    currentInput=computation.toString();
    operator='';
    previousInput='';
    result.textContent=currentInput;
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = '';
    result.textContent = '0';
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    result.textContent = currentInput || '0';
}


