function isPandigital(number) {
    const numStr = number.toString();

    for (let digit = 0; digit <= 9; digit++) {
        if (!numStr.includes(digit.toString())) {
        return false;
    }
}

return true;
}

document.write(isPandigital(234518499967890));  

