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

console.log(operationButton.textContent)
console.log(numberButton.textContent)

clearButton.addEventListener('click', function() {
    currentOutput.textContent = '';
    previousOutput.textContent = '';
})

for (const button of numberButton) {
    button.addEventListener('click', function() {
        currentOutput.innerHTML += button.innerHTML;
    } )
}

deleteButton.addEventListener('click', function() {
    currentOutput.innerHTML = currentOutput.innerHTML.toString().slice(0, -1)
})

for (const operation of operationButton) {
    operation.addEventListener('click', function() {
        currentOutput.innerHTML += operation.textContent;   
    })
}

