let firstNumber = '';
let firstNumberUsed = false;
let operator = null;
let operatorUsed = false;
let secondNumber = '';
let secondNumberUsed = false;
let currentResult;
let firstDecimalUsed = false;
let secondDecimalUsed = false;
let currentTheme = 'darkmode';

const github = document.querySelector('#Github')
const body = document.querySelector('body')
const calculator = document.querySelector('.calculator')
const themeButton = document.querySelector('.Theme')
const themeImage = document.querySelector('.theme-image')
const buttonDecimal = document.querySelector('.decimal');
const displayResult = document.querySelector('.displayResult');
const buttonZero = document.querySelector('#zero');
const buttonOne = document.querySelector('.one');
const buttonTwo = document.querySelector('.two');
const buttonThree = document.querySelector('.three');
const buttonFour = document.querySelector('.four');
const buttonFive = document.querySelector('.five');
const buttonSix = document.querySelector('.six');
const buttonSeven = document.querySelector('.seven');
const buttonEight = document.querySelector('.eight');
const buttonNine = document.querySelector('.nine');
const buttonAdd = document.querySelector('#Add');
const buttonSubtract = document.querySelector('#Subtract');
const buttonMultiply = document.querySelector('#Multiply');
const buttonDivide = document.querySelector('#Divide');
const buttonClear = document.querySelector('#Clear');
const buttonEqual = document.querySelector('#Equals');

themeButton.addEventListener('click', () => {
    if (currentTheme == 'darkmode') {
        buttonAdd.style.cssText = 'background-color: rgb(241,163,60); color: black;'
        buttonSubtract.style.cssText = 'background-color: rgb(241,163,60); color: black;'
        buttonDivide.style.cssText = 'background-color: rgb(241,163,60); color: black;'
        buttonMultiply.style.cssText = 'background-color: rgb(241,163,60); color: black;'
        github.style.cssText = 'background-color: rgb(241,163,60); color: black;'
        themeButton.style.cssText = 'background-color: rgb(128,128,128); color: white;'
        buttonEqual.style.cssText = 'background-color: rgb(128,128,128); color: white;'
        buttonClear.style.cssText = 'background-color: rgb(128,128,128); color: white;'
        themeImage.style.cssText = 'content: url(images/lightmode.png); width: 40px;'
        body.style.cssText = 'background-color: white;'
        displayResult.style.cssText = 'color: black;'
        calculator.style.cssText = 'border-color: black'
        buttonDecimal.style.cssText = 'background-color: rgb(199,199,199); color: black;'
        buttonZero.style.cssText = 'background-color: rgb(199,199,199); color: black;'
        buttonOne.style.cssText = 'background-color: rgb(199,199,199); color: black;'
        buttonTwo.style.cssText = 'background-color: rgb(199,199,199); color: black;'
        buttonThree.style.cssText = 'background-color: rgb(199,199,199); color: black;'
        buttonFour.style.cssText = 'background-color: rgb(199,199,199); color: black;'
        buttonFive.style.cssText = 'background-color: rgb(199,199,199); color: black;'
        buttonSix.style.cssText = 'background-color: rgb(199,199,199); color: black;'
        buttonSeven.style.cssText = 'background-color: rgb(199,199,199); color: black;'
        buttonEight.style.cssText = 'background-color: rgb(199,199,199); color: black;'
        buttonNine.style.cssText = 'background-color: rgb(199,199,199); color: black;'
        currentTheme = 'lightmode'
    } else if (currentTheme == 'lightmode') {
        buttonAdd.style.cssText = 'background-color: rgb(241,163,60); color: white;'
        buttonSubtract.style.cssText = 'background-color: rgb(241,163,60); color: white;'
        buttonDivide.style.cssText = 'background-color: rgb(241,163,60); color: white;'
        buttonMultiply.style.cssText = 'background-color: rgb(241,163,60); color: white;'
        github.style.cssText = 'background-color: rgb(241,163,60); color: white;'
        themeButton.style.cssText = 'background-color: rgb(165,165,165); color: black;'
        buttonEqual.style.cssText = 'background-color: rgb(165,165,165); color: black;'
        buttonClear.style.cssText = 'background-color: rgb(165,165,165); color: black;'
        themeImage.style.cssText = 'content: url(images/darkmode.png); width: 30px;'
        body.style.cssText = 'background-color: black;'
        displayResult.style.cssText = 'color: white;'
        calculator.style.cssText = 'border-color: white'
        buttonDecimal.style.cssText = 'background-color: rgb(49,49,49); color: white;'
        buttonZero.style.cssText = 'background-color: rgb(49,49,49); color: white;'
        buttonOne.style.cssText = 'background-color: rgb(49,49,49); color: white;'
        buttonTwo.style.cssText = 'background-color: rgb(49,49,49); color: white;'
        buttonThree.style.cssText = 'background-color: rgb(49,49,49); color: white;'
        buttonFour.style.cssText = 'background-color: rgb(49,49,49); color: white'
        buttonFive.style.cssText = 'background-color: rgb(49,49,49); color: white;'
        buttonSix.style.cssText = 'background-color: rgb(49,49,49); color: white;'
        buttonSeven.style.cssText = 'background-color: rgb(49,49,49); color: white;'
        buttonEight.style.cssText = 'background-color: rgb(49,49,49); color: white;'
        buttonNine.style.cssText = 'background-color: rgb(49,49,49); color: white;'
        currentTheme = 'darkmode'
    }
})

buttonDecimal.addEventListener('click', () => {
    if (firstDecimalUsed == false && firstNumberUsed == false) {
        if (firstNumberUsed == false) {
            firstNumber += '.';
            currentResult = firstNumber;
            displayResult.innerHTML = currentResult
            firstDecimalUsed = true;
        }
    } else if (secondDecimalUsed == false && secondNumberUsed == false && firstNumberUsed == true) {
        secondNumber += '.';
        currentResult = firstNumber + ' ' + operator + ' ' + secondNumber;
        displayResult.innerHTML = currentResult
    }  
})

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
    return Number(firstNumber) + Number(secondNumber);
}

function subtractionResult() {
    return Number(firstNumber) - Number(secondNumber);
}

function multiplicationResult() {
    return Number(firstNumber) * Number(secondNumber);
}

function divisionResult() {
    return Number(firstNumber) / Number(secondNumber)
}

buttonClear.addEventListener('click', clear)
buttonEqual.addEventListener('click', () => {
    if (operator == '+') {
        currentResult = additionResult();
    } else if (operator == '-') {
        currentResult = subtractionResult();
    } else if (operator == '*') {
        currentResult = multiplicationResult();
    } else if (operator == '/') {
        currentResult = divisionResult();
    }
    displayResult.innerHTML = currentResult
    console.log(currentResult)
    reset()
})


function reset() {
    firstDecimalUsed = false;
    secondDecimalUsed = false;
    firstNumber = currentResult;
    firstNumberUsed = false;
    operator = null;
    operatorUsed = false;
    secondNumber = '';
    secondNumberUsed = false;
    currentResult;
    displayResult.innerHTML = currentResult;
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