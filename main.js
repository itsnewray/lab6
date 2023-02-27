////1.	Write a function that prints “Hello, World!” three times (line by line).
function printHelloWorldx3times(i){
    for (let i = 0; i < 3; i++) {
        console.log("Hello, World")
    }
}
    
printHelloWorldx3times(1)
printHelloWorldx3times(2)
printHelloWorldx3times(3)


/////9.	Write a function to check whether a given number is positive or negative.
function checkPositive (num)
{
    if (num < 0) {
        console.log("number is negative")
    }
    else if (num > 0) {
        console.log("number is positive")
    }
    else {
        console.log("number is equal to zero")
    }
}
checkPositive (-50)
checkPositive (50)
checkPositive (0)


//////13.	Write a function that returns the greatest among the given two numbers.

function ReturnGreatestNumber(number1, number2) 
{
    if (number1<number2) {
        console.log("The greatest number is: %i", number2)
    }
    else if (number1>number2) {
        console.log("The greatest number is: %i", number1)
    }
    else {
        console.log("The numbers are equal")
    }
}

ReturnGreatestNumber(50,50)
ReturnGreatestNumber(0,9)
ReturnGreatestNumber(99,9)

