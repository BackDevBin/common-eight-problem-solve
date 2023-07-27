// Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.



function romanToInteger(romanInput) {
    let result = 0;
    let prevRomanValue = 0;

    const allRomanNumerals = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    // console.log(allRomanNumerals['X']);

    for (let i = romanInput.length - 1; i >= 0; i--) {
        const currentRoman = romanInput[i];
        //   console.log(allRomanNumerals[currentRoman]);
        const currentRomanValue = allRomanNumerals[currentRoman];

        if (currentRomanValue >= prevRomanValue) {
            result += currentRomanValue;
        } else {
            result -= currentRomanValue;
        }

        prevRomanValue = currentRomanValue;
    }

    return result;
}

console.log(romanToInteger("IX"));
console.log(romanToInteger("XXI"));

