let values = [1, 2, 3, 4, 5, 6, 7];

// 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, ...., 60

function isDivisible(greatestValue, values) {
    for (let value of values) {
        if (greatestValue % value != 0) return false;
    }
    return true;
}

function findLCM(values) {
    // find the greatest value
    let greatestValue = Math.max(...values);

    // iterate from the maximum value
    while (true) {
        if (isDivisible(greatestValue, values)) return greatestValue;
        greatestValue++;
    }
}


console.log(findLCM(values));