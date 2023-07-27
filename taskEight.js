// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.


function secondSmallestElement(array) {

    for (let i = 0; i < array.length; i++) {

        for (let j = 0; j < array.length - 1; j++) {

            if (array[j] > array[j + 1]) {

                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }

    return array[1];
}

const array = [4, 3, 55, 12, 22, 110, 900, 30];

console.log(secondSmallestElement(array));
