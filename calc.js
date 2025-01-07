function calculator(a, b, operation) {
    switch (operation) {
        case "add":
            return a + b;
        case "subtract":
            return a - b;
        case "multiply":
            return a * b;
        case "divide":
            return b !== 0 ? a / b : "Error: Division by zero";
        default:
            return "Invalid operation";
    }
}

let num1 = 10;
let num2 = 5;
let operation = "divide";

console.log(`Result: ${calculator(num1, num2, operation)}`);
