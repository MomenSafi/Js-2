function outcounter() {
    let count = 0; // The counter variable is private and only accessible within the closure.

    return function () {
    count++;
    return count;
    };
}

let incounter = outcounter(); // Create a counter instance

document.writeln(incounter()); 
document.writeln(incounter()); 
document.writeln(incounter()); 
