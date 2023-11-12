function randomBetweenNumbers(num1, num2) {
    if (num1 > num2) {
        min = Math.ceil(num2);
        max = Math.floor(num1);
    }
    else {
        min = Math.ceil(num1);
        max = Math.floor(num2);
    }
    
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.write(randomBetweenNumbers(1, 8));