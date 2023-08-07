
const calculate = (a, b, operation) =>
{
    return operation(a,b);

}
// // method 1 

const addition = calculate(3,4,  function(num1, num2)
{
    return num1+ num2;
});
console.log(addition);

// // method 2 

const subtraction =  (a,b)  => a-b;         // using arrow function 

const subresult = calculate (12,4, subtraction);

console.log(subresult);             // 8

// // method 3

function multiply(a, b)             // using normal function 
{
    return a*b;
}
const mulresult = calculate(12,13, multiply);
console.log(mulresult);             //156
