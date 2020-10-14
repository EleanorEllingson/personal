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