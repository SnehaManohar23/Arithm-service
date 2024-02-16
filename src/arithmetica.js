function add(n,m){
    return n+m;

}
function subtract(n, m) {
    return n - m;
}

function multiply(n, m) {
    return n * m;
}

function divide(n, m) {
    if (m === 0) {
        throw new Error("Cannot divide by zero");
    }
    return n / m;
}

module.exports = { add, subtract, multiply, divide };