const display = document.querySelector('.display')
const a_cBtn = document.querySelector('.a-c')

const equalBtn = document.querySelector('.equals')
const addBtn = document.querySelector('.add')
const subtractBtn = document.querySelector('.subtract')
const divideBtn = document.querySelector('.divide')
const multiplyBtn = document.querySelector('.multiply')

const numBtns = document.querySelectorAll('.num')

let tempNums = []
let firstNum = 0
let secondNum = 0
let operator 
let solution

numBtns.forEach(num => {
    num.addEventListener('click', function(){
        
        tempNums.push(num.dataset.id)
        tempNum = parseInt(tempNums.join(''))
        console.log(operator)
        if(operator === undefined){
            firstNum = tempNum;
            display.innerHTML = tempNum
            
        }else {
            secondNum = tempNum
            display.innerHTML += secondNum
        }
        console.log(firstNum);
        console.log(secondNum);
        
    })
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




const add = function (a,b) {
    solution = a +b;
    display.innerHTML = solution
}

const subtract = function (a,b) {
    solution = a - b;
    display.innerHTML = solution
}

const multiply = function (a,b) {
    solution = a * b;
    display.innerHTML = solution
}

const divide = function (a,b) {
    solution = a/b;
    display.innerHTML = solution
}


function operate() {
    console.log(operator)
    operator(firstNum, secondNum)
}


equalBtn.addEventListener('click', operate)