let username = "John";
function showMessage() {
    username = "Bob";
    console.log("Hello World" + username);
}
console.log(username);
showMessage();
console.log(username);
// Parameter
function showMessage1(from, text = "no text given") {
    console.log(from + ': ' + text);
}
showMessage1('Ann', 'Hello!'); // Ann: Hello! (*)
showMessage1('Ann', "What's up?");
showMessage1("Ann", undefined);
//   Returning Value
function checkAge(age) {
    if (age >= 18) {
        return true;
    }
    else {
        return console.log('Do you have permission from your parents?');
    }
}
let age = 1;
if (checkAge(age)) {
    console.log('Access granted');
}
else {
    console.log('Access denied');
}
// Min function
function min(a, b) {
    if (a > b) {
        console.log(`${a} is greater than ${b}`);
    }
    else if (a == b) {
        console.log(`${a} is equal to ${b}`);
    }
    else {
        console.log(`${b} is greater than ${a}`);
    }
}
min(2, 5);
min(3, -1);
min(1, 1);
// Power function
function power(num, p) {
    let result = 1;
    for (let i = 1; i <= p; i++) {
        result = result * num;
    }
    return result;
}
console.log(`The power of number is ${power(3, 2)}`);
console.log(`The power of number is ${power(3, 3)}`);
export {};
