




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