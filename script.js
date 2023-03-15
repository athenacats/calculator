/*call all the buttons. the buttons that are commented out, i 
changed their class to number. in case it fails in the future,
i'll reactivate them*/
const numberButton = document.querySelectorAll('.number')
const operationButton = document.querySelectorAll('.operation')
const equalsButton = document.querySelector('.equal')
const deleteButton = document.querySelector('.delete')
const clearButton = document.querySelector('.clear')
const previousOutput = document.querySelector('.previous')
const currentOutput = document.querySelector('.current')
//const negativeButton = document.querySelector('.negative')
const moreButton = document.querySelector('.more')
const bracketButton = document.querySelectorAll('.bracket')
//const decimalBUtton = document.querySelector('.decimal')

/*the current and previous numbers are temporary holders. start as blank*/
let currentNumber = '';
let previousNumber = '';
let operation = undefined;

/*this is to progressively add numbers as buttons as pressed.*/
function appendNumber(number) {
    /*the below is to restrict decimals to only be added once*/
    if (number === '.' && currentNumber.includes('.')) return;
    currentNumber += number;
}

function selectOperation(op) {
    if(currentNumber === '' && operation === '%' && previousNumber !== '') {
        calculate();
    }
    if (currentNumber === '' && operation != '%') return;
    if (previousNumber !== '') {
        calculate();
    }
    operation = op;
    previousNumber = currentNumber;
    currentNumber = '';
}

function calculate() {
    let result;
    const prev = parseFloat(previousNumber);
    const curr = parseFloat(currentNumber);
    if (isNaN(prev) || isNaN(curr)) return;
    switch (operation) {
        case '+':
            result = prev + curr;
            break;
        case '—':
            result = prev - curr;
            break;
        case 'x':
            result = prev * curr;
            break;
        case '÷':
            if (curr === 0) {
                alert("Can't divide by 0")
                clearAll();
            } else {
                result = prev / curr;
            }
            break;
        case '%':
            if (currentNumber === '') {
                result = prev /100;
            }  
            result = prev / 100 * curr;
        break;  
        default: 
        return;
    }
    //currentNumber = result.toFixed(2);
    if (result.toFixed(2).toString().slice(-1) == 0) {
        currentNumber = result.toFixed(1);
    }
    if (result.toFixed(2).toString().slice(-2) == 00)  {
        currentNumber = result;
    }
    else {
        currentNumber = result.toFixed(2);
    }
    operation = undefined;
    previousNumber = '';
}

function clearAll(){
    currentNumber = '';
    previousNumber = '';
    operation = undefined;
    currentOutput.textContent = '';
    previousOutput.textContent = '';
}

function updateOutput() {
    currentOutput.textContent = currentNumber;
    
    if (operation != undefined) {
        previousOutput.textContent = `${previousNumber} ${operation}`;
    }
    else {
        previousOutput.textContent = '';
    }
}

numberButton.forEach((button) => { 
    button.addEventListener('click', function() {
        appendNumber(button.textContent);
        updateOutput();
    });
});

operationButton.forEach((button) => {
    button.addEventListener('click', function() {
        selectOperation(button.textContent);
        updateOutput();     
    });
});

equalsButton.addEventListener('click', function() {
    calculate();
    updateOutput();
    /*numberButton.addEventListener('click', function() {
            currentNumber = '';
            currentOutput.textContent = '';
            appendNumber();
            previousNumber = '';
            operation = undefined;
            
            previousOutput.textContent = '';
        });*/
    });
    


clearButton.addEventListener('click', function() {
    clearAll();
    updateOutput();
})


deleteButton.addEventListener('click', function remove() {
    currentOutput.textContent = currentOutput.textContent.toString().slice(0, -1);
    currentNumber = parseFloat(currentNumber.toString().slice(0, -1));
})


document.addEventListener('keypress', function (event) {
    const key = event.key;
    const keyCode = event.keyCode;

    if (keyCode >= 48 && keyCode <= 57) {
        appendNumber(event.key);
        updateOutput();
    }

    if (key === '.') {+
        appendNumber(event.key);
        updateOutput();
    }

    if (key === '+' || key === '-' || key === '*' || key === '/') {
        selectOperation(event.key);
        updateOutput();
    }

    if (key === 'Enter' || key === '=') {
        calculate(event.key);
        updateOutput();
    }

    if (key === 'Backspace') {
        currentNumber = parseFloat(currentNumber.toString().slice(0, -1));
        currentOutput.textContent = currentOutput.textContent.toString().slice(0, -1);
    }
    
    if (key === 'Delete') {
        clearAll(event.key);
        updateOutput();
    }
})