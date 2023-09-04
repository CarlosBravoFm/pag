const PI = 3.1416

function sum(a,b) {
    return a+b
}

function subtract(a,b) {
    return a-b
}
function multiply(a,b) {
    return a*b
}

function divide(a,b) {
    return a/b
    if(b === 0) {
        console.log("No se puede dividir entre cero")
    } else{
        return a/b
    }
}

exports.PI = PI
exports.sum = sum;
exports.subtract = subtract;
exports.multiply = multiply;
exports.divide = divide;