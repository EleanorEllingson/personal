//Write three functions to calculate the bitwise AND, bitwise OR and bitwise XOR of two numbers.
function bitwiseAND(n1, n2) {
    return (n1) & (n2)
}

function bitwiseOR(n1, n2) {
    return (n1) | (n2)
}

function bitwiseXOR(n1, n2) {
    return (n1) ^= (n2)
}

//Write a function that converts hours into seconds.
function howManySeconds(hours) {
    var minutes = hours * 60;
    var seconds = minutes * 60;
    return seconds;
}
//Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
function lessThan100(a, b) {
    if(a +++ b < 100){
        return true;
    } return false;
}

//Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.
function lessThanOrEqualToZero(num) {
    if(num <= 0){
        return true
    } return false
}

//Create a function that takes the number of wins, draws and losses and calculates the number of points a football team has obtained so far.
// wins get 3 points
// draws get 1 point
// losses get 0 points
function footballPoints(wins, draws, losses) {
    var winsPoints = 3;
    var drawsPoints = 1;
    var lossesPoints = 0;
    var points = wins * winsPoints +++ draws * drawsPoints +++ losses * lossesPoints;
    return points;
}
// Create a function that takes a number (step) as an argument and returns the number of matchsticks in that step. See step 1, 2 and 3 in the image above.

function matchHouses(step) {
    var matchsticks = step * 6
    if(step > 1){
        matchsticks -= step - 1
    }
    return matchsticks
}
//Create a function that returns true when num1 is equal to num2; otherwise return false.

function isSameNum(num1, num2) {
    if(num1 === num2){
        return true
    }
    return false


    //Create a function that takes the age and return the age in days.
    function calcAge(age) {
        var days = age * 365
        return days
    }
}