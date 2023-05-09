let firstNumber = '';
let firstNumberUsed = false;
let operator = null;
let operatorUsed = false;
let secondNumber = '';
let secondNumberUsed = false;
let currentResult;

const displayResult = document.querySelector('.displayResult')
const buttonZero = document.querySelector('#zero')
const buttonOne = document.querySelector('.one');
const buttonTwo = document.querySelector('.two');
const buttonThree = document.querySelector('.three');
const buttonFour = document.querySelector('.four');
const buttonFive = document.querySelector('.five');
const buttonSix = document.querySelector('.six');
const buttonSeven = document.querySelector('.seven');
const buttonEight = document.querySelector('.eight');
const buttonNine = document.querySelector('.nine');
const buttonAdd = document.querySelector('#Add')
const buttonSubtract = document.querySelector('#Subtract');
const buttonMultiply = document.querySelector('#Multiply');
const buttonDivide = document.querySelector('#Divide');
const buttonClear = document.querySelector('.Clear');
const buttonEqual = document.querySelector('#Equals')

buttonZero.addEventListener('click', () => {
    if (firstNumberUsed == false) {
        firstNumber += '0';
        currentResult = firstNumber;
        displayResult.innerHTML = currentResult
    } else if (firstNumberUsed == true) {
        secondNumber += '0';
        currentResult = firstNumber + ' ' + operator + ' ' + secondNumber;
        displayResult.innerHTML = currentResult
    }
})

buttonOne.addEventListener('click', () => {
    if (firstNumberUsed == false) {
        firstNumber += '1';
        currentResult = firstNumber;
        displayResult.innerHTML = currentResult
    } else if (firstNumberUsed == true) {
        secondNumber += '1';
        currentResult = firstNumber + ' ' + operator + ' ' + secondNumber;
        displayResult.innerHTML = currentResult
    }
});
buttonTwo.addEventListener('click', () => {
    if (firstNumberUsed == false) {
        firstNumber += '2';
        currentResult = firstNumber;
        displayResult.innerHTML = currentResult
    } else if (firstNumberUsed == true) {
        secondNumber += '2';
        currentResult = firstNumber + ' ' + operator + ' ' + secondNumber;
        displayResult.innerHTML = currentResult
    }
});
buttonThree.addEventListener('click', () => {
    if (firstNumberUsed == false) {
        firstNumber += '3';
        currentResult = firstNumber;
        displayResult.innerHTML = currentResult
    } else if (firstNumberUsed == true) {
        secondNumber += '3';
        currentResult = firstNumber + ' ' + operator + ' ' + secondNumber;
        displayResult.innerHTML = currentResult
    }
})
buttonFour.addEventListener('click', () => {
    if (firstNumberUsed == false) {
        firstNumber += '4';
        currentResult = firstNumber;
        displayResult.innerHTML = currentResult
    } else if (firstNumberUsed == true) {
        secondNumber += '4';
        currentResult = firstNumber + ' ' + operator + ' ' + secondNumber;
        displayResult.innerHTML = currentResult
    }
})
buttonFive.addEventListener('click', () => {
    if (firstNumberUsed == false) {
        firstNumber += '5';
        currentResult = firstNumber;
        displayResult.innerHTML = currentResult
    } else if (firstNumberUsed == true) {
        secondNumber += '5';
        currentResult = firstNumber + ' ' + operator + ' ' + secondNumber;
        displayResult.innerHTML = currentResult
    }
})
buttonSix.addEventListener('click', () => {
    if (firstNumberUsed == false) {
        firstNumber += '6';
        currentResult = firstNumber;
        displayResult.innerHTML = currentResult
    } else if (firstNumberUsed == true) {
        secondNumber += '6';
        currentResult = firstNumber + ' ' + operator + ' ' + secondNumber;
        displayResult.innerHTML = currentResult
    }
})
buttonSeven.addEventListener('click', () => {
    if (firstNumberUsed == false) {
        firstNumber += '7';
        currentResult = firstNumber;
        displayResult.innerHTML = currentResult
    } else if (firstNumberUsed == true) {
        secondNumber += '7';
        currentResult = firstNumber + ' ' + operator + ' ' + secondNumber;
        displayResult.innerHTML = currentResult
    }
})
buttonEight.addEventListener('click', () => {
    if (firstNumberUsed == false) {
        firstNumber += '8';
        currentResult = firstNumber;
        displayResult.innerHTML = currentResult
    } else if (firstNumberUsed == true) {
        secondNumber += '8';
        currentResult = firstNumber + ' ' + operator + ' ' + secondNumber;
        displayResult.innerHTML = currentResult
    }
})
buttonNine.addEventListener('click', () => {
    if (firstNumberUsed == false) {
        firstNumber += '9';
        currentResult = firstNumber;
        displayResult.innerHTML = currentResult
    } else if (firstNumberUsed == true) {
        secondNumber += '9';
        currentResult = firstNumber + ' ' + operator + ' ' + secondNumber;
        displayResult.innerHTML = currentResult
    }
})
buttonAdd.addEventListener('click', () => {
    if (firstNumberUsed == false) {
        firstNumberUsed = true;
        operator = '+';
        operatorUsed = true;
        currentResult = firstNumber + ' ' + operator;
        displayResult.innerHTML = currentResult
    }
})
buttonSubtract.addEventListener('click', () => {
    if (firstNumberUsed == false) {
        firstNumberUsed = true;
        operator = '-';
        operatorUsed = true;
        currentResult = firstNumber + ' ' + operator;
        displayResult.innerHTML = currentResult
    }
})
buttonMultiply.addEventListener('click', () => {
    if (firstNumberUsed == false) {
        firstNumberUsed = true;
        operator = '*';
        operatorUsed = true;
        currentResult = firstNumber + ' ' + operator;
        displayResult.innerHTML = currentResult
    }
})
buttonDivide.addEventListener('click', () => {
    if (firstNumberUsed == false) {
        firstNumberUsed = true;
        operator = '/';
        operatorUsed = true;
        currentResult = firstNumber + ' ' + operator;
        displayResult.innerHTML = currentResult
    }
})

function additionResult() {
    return Math.round(parseInt(firstNumber) + parseInt(secondNumber))
}

function subtractionResult() {

}

function multiplicationResult() {

}

function divisionResult() {

}

buttonClear.addEventListener('click', clear)
buttonEqual.addEventListener('click', () => {
    if (operator == '+') {
        currentResult = additionResult();
    } else if (operator == '-') {
        currentResult = Number(firstNumber) - Number(secondNumber);
    } else if (operator == '*') {
        currentResult = Number(firstNumber) * Number(secondNumber);
    } else if (operator == '/') {
        currentResult = Number(firstNumber) / Number(secondNumber);
    }
    displayResult.innerHTML = currentResult
    console.log(currentResult)
    reset()
})

function reset() {
    firstNumberUsed = false;
    secondNumberUsed = false;
    operatorUsed = false;
    firstNumber = currentResult;
    secondNumber = '';
    operator = '';
}
function operate() {
    if (operator == 'addition' && secondNumber != null) {
        currentResult = add(firstNumber, secondNumber);
    } else if (operator == 'subtraction' && secondNumber != null) {
        currentResult = subtract(firstNumber, secondNumber);
    } else if (operator == 'multiplication' && secondNumber != null) {
        currentResult = multiply(firstNumber, secondNumber);
    } else if (operator == 'division' && secondNumber != null) {
        currentResult = divide(firstNumber, secondNumber);
    }
}

function clear() {
    firstNumber = 0;
    secondNumber = 0;
    firstNumberUsed = 0;
    secondNumberUsed = 0;
    operator = null;
    operatorUsed = false;
    currentResult = 0;
    displayResult.innerHTML = currentResult;
}

function add(numberOne, numberTwo) {
    return numberOne + numberTwo;
}

function subtract(numberOne, numberTwo) {
    return numberOne - numberTwo;
}

function multiply(numberOne, numberTwo) {
    return numberOne * numberTwo;
}

function divide(numberOne, numberTwo) {
    return numberOne / numberTwo;
}