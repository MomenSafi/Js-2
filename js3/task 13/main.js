function shorterString(str1, str2, str3, str4, str5) {
    let shorter = str1;
    if (str2.length < shorter.length) {
        shorter = str2;
    }

    if (str3.length < shorter.length) {
        shorter = str3;
    }

    if (str4.length < shorter.length) {
        shorter = str4;
    }

    if (str5.length < shorter.length) {
        shorter = str5;
    }

    return shorter;
}

document.writeln(shorterString("air", "school", "car", "by", "github")); 
document.writeln(shorterString("air", "tr", "car", "by", "github"));      
document.writeln(shorterString("by", "tr", "car", "air", "github"));      
document.writeln(shorterString("air", "by", "car", "school", "github")); 
document.writeln(shorterString("air", "tr", "car", "github", "by"));
