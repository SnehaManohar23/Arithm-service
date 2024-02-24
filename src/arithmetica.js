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

function isPrime(n) {
    if (n <= 1) {
        return false; // 0 and 1 are not prime numbers
    }
    if (n <= 3) {
        return true; // 2 and 3 are prime numbers
    }
    if (n % 2 === 0 || n % 3 === 0) {
        return false; // Check if n is divisible by 2 or 3
    }
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) {
            return false; // Check if n is divisible by any number of the form 6k ± 1
        }
    }
    return true;
}


module.exports = { add, subtract, multiply, divide, isPrime };