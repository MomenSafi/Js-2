function smallerNubmer(num1, num2, num3) {
    if (num1 < num2) {
        if (num1 < num3)
            return num1;
        else
            return num3;
    }
    else if (num2 < num3)
            return num2;
        else 
            return num3;
}

document.writeln(smallerNubmer(8,6,7));
document.writeln(smallerNubmer(5,99,34));
document.writeln(smallerNubmer(5,99,3));
document.writeln(smallerNubmer(5,3,3));