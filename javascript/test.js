function squateDigits(n) {
    return n.toString().replace(/\D/g, '');
}
console.log(squateDigits(123456789));