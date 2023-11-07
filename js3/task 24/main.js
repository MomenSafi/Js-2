let count = 0;

function counter() {
    count++;
    return count;
}

function resetCounter() {
    const currentCount = count;
    count = 0;
    return `${currentCount} and the counter is now reset`;
}

// Example usage:
document.writeln(counter());          // Output: 1
document.writeln(counter());          // Output: 2
document.writeln(counter());          // Output: 3
document.writeln(resetCounter());    // Output: "3 and the counter is now reset"
document.writeln(counter());          // Output: 1
document.writeln(counter());          // Output: 2
document.writeln(resetCounter());    // Output: "2 and the counter is now reset"
document.writeln(counter());          // Output: 1
