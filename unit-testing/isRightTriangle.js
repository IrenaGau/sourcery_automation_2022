function isRightTriangle(a, b, c) {
    return (a*a===b*b+c*c)||(b*b===a*a+c*c)||(c*c===a*a+b*b);
}

module.exports = isRightTriangle;
