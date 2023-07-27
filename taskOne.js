// Task 1 : Create a function that takes a string as input and returns the reversed version of the string
//  without using the built-in reverse() method.



const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



const stringReversing = inputString => {

  let revString = "";

  for (let i = inputString.length - 1; i >= 0; i--) {
    revString += inputString[i];
  }

  return revString;

}


rl.question('Enter a string to reverse: ', (userInput) => {
  const reversed = stringReversing(userInput);
  console.log(reversed);
  rl.close();
});
