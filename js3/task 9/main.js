function canIGetADrivingLicense(age) {
    if (age >= 20)
        document.write(`yes you can`)
    else {
        complemntAge = 20 - age;
        document.write(`please come back after ${complemntAge} years to get one`)
    }
}
