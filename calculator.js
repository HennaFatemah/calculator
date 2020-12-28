class Calculator {
    constructor(displayTextElement){
        this.displayTextElement = displayTextElement;
        this.clearAll()
    }

    clearAll(){
        this.display = ''
        this.operator = undefined
    }
    return(){

    }
    appendNumber(number){
        this.display = number;
    }
    pressOperator(operator){

    }
    compute(){

    }
    updateDisplay(){
        this.displayTextElement.innerText = this.display;
    }
}




const allClear = document.querySelector('all-clear');
const equalsTo = document.querySelector('equals');
const backSpace = document.querySelector('back-space');
const operators = document.querySelectorAll('operator');
const numbers = document.querySelectorAll('number');
const display = document.querySelector('display');

const calculator = new Calculator(displayTextElement);

numbers.forEach(calcButton => {
    calcButton.addEventListener('click', () => {
        calculator.appendNumber(calcButton.innerText)
        calculator.updateDisplay()
    })
})

// function zero() {
//     return 0;
// }
// function one() {
//     return 1;
// }

// let digitOne, digitTwo, digitThree, digitFour, digitFive, digitSix, digitSeven, digitEight;


// function firstNumber() {
//     if (digitOne === 0 || 1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9) {
//         record(digitOne);
//     } else if (digitTwo === 0 || 1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9){
//         record(10 * digitOne + digitTwo);
//     } else if (digitThree === 0 || 1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9){
//         record((100 * digitOne) + (10 * digitTwo) + digitThree);
//     } else if (digitFour === 0 || 1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9){
//         record((1000 * digitOne) + (100 * digitTwo) + (10 * digitThree) + (digitFour));
//     } else if (digitFive === 0 || 1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9){
//         record((10000 * digitOne) + (1000 * digitTwo) + (100 * digitThree) + (10 * digitFour) + (digitFive));
//     } else if (digitSix === 0 || 1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9){
//         record((100000 * digitOne) + (10000 * digitTwo) + (1000 * digitThree) + (100 * digitFour) + (10 * digitFive) + (digitSix));
//     } else if (digitSeven === 0 || 1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9){
//         record((1000000 * digitOne) + (100000 * digitTwo) + (10000 * digitThree) + (1000 * digitFour) + (100 * digitFive) + (10 * digitSix) + digitSeven);
//     } else if (digitEight === 0 || 1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9){
//         record((10000000 * digitOne) + (1000000 * digitTwo) + (100000 * digitThree) + (10000 * digitFour) + (1000 * digitFive) + (100 * digitSix) + (10 * digitSeven) + digitEight);
//     } else if (digitNine === 0 || 1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9){
//         record((100000000 * digitOne) + (10000000 * digitTwo) + (1000000 * digitThree) + (100000 * digitFour) + (10000 * digitFive) + (1000 * digitSix) + (100 * digitSeven) + (10 * digitEight) + digitNine);
//     } else {
//         record ("error");
//     }

//     return record;
// }

// function secondNumber() {
//     if (digitOne === 0 || 1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9) {
//         record(digitOne);
//     } else if (digitTwo === 0 || 1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9){
//         record(10 * digitOne + digitTwo);
//     } else if (digitThree === 0 || 1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9){
//         record((100 * digitOne) + (10 * digitTwo) + digitThree);
//     } else if (digitFour === 0 || 1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9){
//         record((1000 * digitOne) + (100 * digitTwo) + (10 * digitThree) + (digitFour));
//     } else if (digitFive === 0 || 1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9){
//         record((10000 * digitOne) + (1000 * digitTwo) + (100 * digitThree) + (10 * digitFour) + (digitFive));
//     } else if (digitSix === 0 || 1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9){
//         record((100000 * digitOne) + (10000 * digitTwo) + (1000 * digitThree) + (100 * digitFour) + (10 * digitFive) + (digitSix));
//     } else if (digitSeven === 0 || 1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9){
//         record((1000000 * digitOne) + (100000 * digitTwo) + (10000 * digitThree) + (1000 * digitFour) + (100 * digitFive) + (10 * digitSix) + digitSeven);
//     } else if (digitEight === 0 || 1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9){
//         record((10000000 * digitOne) + (1000000 * digitTwo) + (100000 * digitThree) + (10000 * digitFour) + (1000 * digitFive) + (100 * digitSix) + (10 * digitSeven) + digitEight);
//     } else if (digitNine === 0 || 1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9){
//         record((100000000 * digitOne) + (10000000 * digitTwo) + (1000000 * digitThree) + (100000 * digitFour) + (10000 * digitFive) + (1000 * digitSix) + (100 * digitSeven) + (10 * digitEight) + digitNine);
//     } else {
//         record ("error");
//     }

//     return record;
// }
//     document.getElementById("demo").innerHTML = zero() || one();