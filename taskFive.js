// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.



function simpleCalculator(num, num2, operator) {
    num = parseFloat(num);
    num2 = parseFloat(num2);

    switch (operator) {
        case "+":
            return num + num2;
        case "-":
            return num - num2;
        case "*":
            return num * num2;
        case "/":
            return num / num2;
        default:
            return "Invalid operator";
    }
}


const result = simpleCalculator(5, 30, "*");
console.log(result);
