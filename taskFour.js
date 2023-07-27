// Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.



function findIndicesTwoNum(arr, target) {
    let minIndex = 0;
    let maxIndex = arr.length - 1;

    while (minIndex < maxIndex) {
        const summation = arr[minIndex] + arr[maxIndex];

        if (summation === target) {
            return [minIndex, maxIndex];
        } else if (summation < target) {
            minIndex++;
        } else {
            maxIndex--;
        }
    }


    return [];
}

const sortedArray = [1, 3, 6, 8, 11, 15];
const targetValue = 9;
const result = findIndicesTwoNum(sortedArray, targetValue);
console.log(result);
