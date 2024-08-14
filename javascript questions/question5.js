// conditional
// Q.5 Write a function that checks if a number is even or odd and returns "Even" or "Odd" accordingly.

function checkNumber(number){
    if(number%2 === 0){
        return "Even";
    }else{
        return "Odd";
    }
}
console.log(checkNumber(15));