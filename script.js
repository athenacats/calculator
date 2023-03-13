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



function empty() {
    clearButton.addEventListener('click', function() {
        currentOutput.textContent = '';
        previousOutput.textContent = '';
    })
}

for (const button of numberButton) {
    button.addEventListener('click', function() {
        currentOutput.textContent += button.textContent;
    } )
}

deleteButton.addEventListener('click', function() {
    currentOutput.textContent = currentOutput.textContent.toString().slice(0, -1)
})

for (const operation of operationButton) {
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

