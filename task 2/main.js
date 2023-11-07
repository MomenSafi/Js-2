let num = 1;
for (let i = 1; i <= 4; i++) {
    let line = "";
    for (let j = 1; j <= 4; j++) {
        line += num;
        num++;
        if (i == j) {
            break;
        }
    }
    console.log(line);
}
