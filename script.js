let firstNumber;
let secondNumber;
let operator;

const operators = ['+', '-', '/', 'x', '%'];

function calculate() {
    const screen = document.querySelector('.screen');

    const num = screen.innerHTML.split(operator);
    firstNumber = parseInt(num[0]);
    secondNumber = parseInt(num[1]);

    let result;

    if (operator == '+') {
        result = firstNumber + secondNumber;
    } 
    if (operator == '-') {
        result = firstNumber - secondNumber;
    }
    if (operator == '/') {
        result = Math.round(firstNumber / secondNumber);
    }
    if (operator == 'x') {
        result = firstNumber * secondNumber;
    }
    if (operator == '%') {
        result = firstNumber % secondNumber;
    }

    screen.innerHTML = result;

}

function undo() {
    let expression = document.querySelector('.screen').innerHTML;

    const prev = expression.charAt(expression.length - 1);

    if (operators.includes(prev)) {
        operator = null;
    }

    document.querySelector('.screen').innerHTML = expression.slice(0, expression.length - 1);
    
}

function clear(){
    const screen = document.querySelector('.screen');
    screen.innerHTML = '';
    firstNumber, secondNumber, operator = null;
    return
}

function calculator(key) {

    const element = key.target.textContent;

    if (element == 'C') {
        clear();
        return
    }

    if (element == 'Undo') {
        undo();
        return
    }

    if (element == '=') {
        calculate();
        operator = null;
        return
    }

    const screen = document.querySelector('.screen');

    if (operators.includes(element)) {
        if (operator != null) {
            calculate();
            operator = element;
        }
        else {
            operator = element
        }
    }


    screen.textContent = screen.textContent + element;
    
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('click', calculator));