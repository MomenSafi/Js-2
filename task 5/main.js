function area(base,height) {
    document.write(`${0.5 * height * base}`);
}
let base = parseFloat((prompt`plz enter base to calc area`));
let height = parseFloat((prompt`plz enter height number to calc area`));
area(base,height);