// Q.4 Write a function that takes a string and returns the reversed version of it.


var string = "Hello";

function reverseString(string){
    var splitString = string.split("");
    var reversed = splitString.reverse();
    var joinStr = reversed.join("");
    return joinStr;
}
console.log(reverseString(string));