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
const decimalBUtton = document.querySelector('.decimal')

console.log(clearButton)
let tempCompute = 0;


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


clearButton.addEventListener('click', function empty() {
    currentOutput.textContent = '';
    previousOutput.textContent = '';
    tempCompute = 0;
})


deleteButton.addEventListener('click', function() {
    currentOutput.textContent = currentOutput.textContent.toString().slice(0, -1)
})

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

let lastChar = (currentOutput.textContent).slice(-1)

for (const button of numberButton) {
    button.addEventListener('click', function() {
        if ((currentOutput.textContent).slice(-1) == 'x' || 
        (currentOutput.textContent).slice(-1) == '+' || 
        (currentOutput.textContent).slice(-1) == '-' || 
        (currentOutput.textContent).slice(-1) == '÷') {
            tempCompute += button.textContent;
            currentOutput.textContent += button.textContent;
        }
        else {
            currentOutput.textContent += button.textContent;  
        } 
    })
}

for (const operation of operationButton) {
    operation.addEventListener('click', function() {
        if (previousOutput.textContent == '') {
            previousOutput.textContent = currentOutput.textContent;
            currentOutput.textContent += operation.textContent;
            tempResult = currentOutput.textContent.toString().slice(0, -1)
        }
       else {
        if (operationButton.textContent == '+') {
            previousOutput.textContent = (previousOutput.textContent) + tempCompute;
            currentOutput.textContent = ''; 
        }
    }   
        
})
}
