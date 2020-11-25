




// Write a function definition named second that takes in sequence and returns the second value of that sequence.
function second(sequence){
    var secondValue = sequence[1];
    return secondValue;
}
console.log(second([1, 2, 3]))





// Write a function definition named third that takes in sequence and returns the third value of that sequence.
function third(sequence){
    var thirdValue = sequence[2]
    return thirdValue;
}
console.log(third([1, 2, 3, 4]));




// Exercise 53
// Write a function definition named forth that takes in sequence and returns the forth value of that sequence.
function forth(sequence){
    var forthValue = sequence[3]
    return forthValue;
} console.log(forth([1, 2, 3, 4]));



// Exercise 54
// Write a function definition named last that takes in sequence and returns the last value of that sequence.

function last(sequence){
    var lastValue = sequence[sequence.length - 1];
    return lastValue;
} console.log(last([1, 2, 3, 4]));

function addition(a, b) {
    return a +++ b
}

//Write a function that takes an integer minutes and converts it to seconds.
function convert(minutes) {
    var seconds = minutes * 60;
    return seconds;
}

//Write a function that returns the string "something" joined with a space " " and the given argument a.
function giveMeSomething(a) {
    return "something " + a
}

// Write a function definition named last that takes in sequence and returns the last value of that sequence.

function last(sequence){
    var lastValue = sequence[sequence.length - 1];
    return lastValue;
} console.log(last([1, 2, 3, 4]));

// / Write a function definition named isNegativeEven that takes in a number and returns true or false if the value is both less than zero and even.

const isNegativeEven = number => number < 0 && number % 2 === 0;

// Write a function definition named double that takes in a number and returns double the provided number.

const double = number => number * 2;