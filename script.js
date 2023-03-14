const numberButton = document.querySelectorAll('.number')
const operationButton = document.querySelectorAll('.operation')
const equalsButton = document.querySelector('.equal')
const deleteButton = document.querySelector('.delete')
const clearButton = document.querySelector('.clear')
const previousOutput = document.querySelector('.previous')
const currentOutput = document.querySelector('.current')
const negativeButton = document.querySelector('.negative')
const moreButton = document.querySelector('.more')
const bracketButton = document.querySelectorAll('.bracket')
//const decimalBUtton = document.querySelector('.decimal')



/*for (const button of numberButton) {
    button.addEventListener('click', function() {
        if (previousOutput.textContent == '') {
            currentOutput.textContent += button.textContent;
        }
        else {
            tempCompute += button.textContent;
            currentOutput.textContent += button.textContent;
        }
    } )
}*/



/*for (const operation of operationButton) {
    operation.addEventListener('click', function() {
        if (previousOutput.textContent == '' || isNaN(previousOutput.textContent) == true) {
            currentOutput.textContent += operation.textContent; 
            previousOutput.textContent += currentOutput.textContent;
            currentOutput.textContent = '';  
        } else {
            return empty();
        }
    })
}
*/



/*  MAIN  let tempResult = 0; 

for (const operation of operationButton) {
    operation.addEventListener('click', function() {
        if (previousOutput.textContent == '') {
            previousOutput.textContent = currentOutput.textContent;
            currentOutput.textContent += operation.textContent; 
        }
       else {


        if (operationButton.textContent == '+') {
                previousOutput.textContent = (previousOutput.textContent) + currentOutput.textContent;
                currentOutput.textContent = ''; 
            }
        else if (operationButton.textContent == '-') {
            previousOutput.textContent == (previousOutput.textContent) - tempCompute;
            currentOutput.textContent += operation.textContent; 
        }
        else if (operationButton.textContent == '÷') {
            previousOutput.textContent == (previousOutput.textContent) / tempCompute;
            currentOutput.textContent += operation.textContent; 
        }
        else if (operationButton.textContent == 'x') {
            previousOutput.textContent == (previousOutput.textContent) * tempCompute;
            currentOutput.textContent += operation.textContent; 
        }
        
        
        
            }   
        
       })
    }*/

let currentNumber = '';
let previousNumber = '';
let operation = undefined;

function appendNumber(number) {
    if (number === '.' && currentNumber.includes('.')) return;
    currentNumber += number
}

function selectOperation(op) {
    if (currentNumber === '') return;
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
        case '-':
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
            result = prev / 100;
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


deleteButton.addEventListener('click', function() {
    currentOutput.textContent = currentOutput.textContent.toString().slice(0, -1);
    currentNumber = parseFloat(currentNumber.toString().slice(0, -1));
})