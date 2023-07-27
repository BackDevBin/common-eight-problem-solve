// Task 2 : Create a function
// that takes an array of numbers as input and returns the sum of all positive numbers in the array. 



const sumOfAllPositiveNumber = inputArray => {
    let sum = 0;

    for (let x in inputArray) {
        if (inputArray[x] > 0) {
            sum += inputArray[x];

        }
    }

    return sum;

}


let inputArray = [2, 4, 6, 7, 8, 10, -4, -3, -20];
const sum = sumOfAllPositiveNumber(inputArray);
console.log(sum);
