function longerString(str1, str2, str3, str4) {
    let longest = str1;
    if (str2.length > longest.length)
        longest = str2;

    if (str3.length > longest.length)
        longest = str3;

    if (str4.length > longest.length)
        longest = str4;

    return longest;
}

document.writeln(longerString("air", "school", "car", "github"));
document.writeln(longerString("air","schoo","car","github"));