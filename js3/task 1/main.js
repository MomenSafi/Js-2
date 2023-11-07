function tellFortune(x,y, z, n) {
    let variables = `You will be a ${x} in ${y}, and married to ${z} with ${n} kids.`;
    return variables;
}
let variables = tellFortune('software engineer', 'Jordan', 'Alice', 3);
document.write(variables)