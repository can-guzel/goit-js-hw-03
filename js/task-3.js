function filterArray(numbers, value) {
    let sameNumbers = []
    for (const arg of numbers) {
        if (arg > value) {
            sameNumbers.push(arg)
        }
    }
    return sameNumbers
}
console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
console.log("---------------------------------- Finished Task 3 --------------------------------")