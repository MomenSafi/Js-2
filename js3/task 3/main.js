function calculateSupply(age, amount) {
    const maxAge = 100;
    const complementAge = maxAge - age;
    const amountNeeded = complementAge * 365 * amount;
    document.write(`You will need ${amountNeeded} to last you until
        the ripe old age of ${maxAge}`);
}

calculateSupply(30, 3);