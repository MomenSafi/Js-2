function scoreInUniversty(mark) {
    if (mark <= 100 && mark >= 95) {
        return 'A';
    }
    else if (mark >= 85) {
        return 'B';
    }
    else if (mark >= 70) {
        return 'C';
    }
    else if (mark >= 50) {
        return 'D';
    }
    else
        return 'F';
}

document.write(scoreInUniversty(49));