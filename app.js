
// getting my buttons
const display = document.querySelector('.display')
const a_cBtn = document.querySelector('.a-c')

const equalBtn = document.querySelector('.equals')
const addBtn = document.querySelector('.add')
const subtractBtn = document.querySelector('.subtract')
const divideBtn = document.querySelector('.divide')
const multiplyBtn = document.querySelector('.multiply')

const numBtns = document.querySelectorAll('.num')
// setting starting variables
let tempNums = []
let firstNum = 0
let secondNum = 0
let operator 
let solution

// making and displaying data
numBtns.forEach(num => {
    num.addEventListener('click', function(){
        
        tempNums.push(num.dataset.id)
        tempNum = parseInt(tempNums.join(''))
        
        if(operator === undefined){
            firstNum = tempNum;
            display.innerHTML = tempNum
            
        }else {
            secondNum = tempNum
            display.innerHTML += secondNum
        }
      
        
    })
})

// event listeners
a_cBtn.addEventListener('click', function() {
    tempNums = []
    firstNum = 0
    secondNum = 0
    operator = undefined
    solution = 0
    display.innerHTML = 0
})

addBtn.addEventListener('click', () => {
    operator = add
    display.innerHTML += '+'
    tempNums = []
    
})
subtractBtn.addEventListener('click', () => {
    operator = subtract
    display.innerHTML += '-'
    tempNums = []
    
})
multiplyBtn.addEventListener('click', () => {
    operator = multiply
    display.innerHTML += '*'
    tempNums = []
    
})
divideBtn.addEventListener('click', () => {
    operator = divide
    display.innerHTML += '/'
    tempNums = []
    
})


// maaaaaaaaaaaaath and displaying said math

const add = function (a,b) {
    solution = a +b;
    display.innerHTML = solution.toFixed(3)
}

const subtract = function (a,b) {
    solution = a - b;
    display.innerHTML = solution.toFixed(3)
}

const multiply = function (a,b) {
    solution = a * b;
    display.innerHTML = solution.toFixed(3)
}

const divide = function (a,b) {
    if(b === 0) {
        display.innerHTML = "Are you TRYING to kill us?!"
    }
    else{
    solution = a/b;
    display.innerHTML = solution.toFixed(3)
    }
}


function operate() {
    if(firstNum && secondNum) {
    operator(firstNum, secondNum)
    firstNum = solution
    secondNum = 0
    }
    else{
        console.log('something went wrong. You may need to input a second number')
    }

}


equalBtn.addEventListener('click', operate)