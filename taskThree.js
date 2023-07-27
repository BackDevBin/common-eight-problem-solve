//Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 


function findMostFrequentElement(arr) {

    if (!Array.isArray(arr) || arr.length === 0) {
        return null;
    }

    let maxfrequency = 1;
    let maxfrequencyElement;

    for (let i = 0; i < arr.length; i++) {

        let count = 1;

        for (let j = i + 1; j < arr.length; j++) {

            if (arr[i] == arr[j]) {
                count++;
            }


        }

        if (count >= maxfrequency) {
            maxfrequency = count;
            maxfrequencyElement = arr[i];
        }
    }

    return maxfrequencyObj = {
        "maxfrequency": maxfrequency,
        "maxfrequencyElement": maxfrequencyElement
    };
}


const array = [1, 20, 30, 20, 2, 4, 2, 4, 50, 50, 50, 5];
const mostFrequent = findMostFrequentElement(array);
console.log(`The most frequent element is: ${mostFrequent?.maxfrequencyElement} and repeating ${mostFrequent?.maxfrequency} time`);
