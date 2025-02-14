//all about functions

function greetUser(unm) {
    console.log("Hello "+unm);
}

greetUser("Vamsy");
greetUser(1234);

function qut(a,b) {
    console.log("Qut "+(a/b));
}

qut(12,4);
qut("$","*");

const sum = function(a,b) {
    return a+b;
}

console.log(sum(10,9));

const greetingInEnglish = function(){
    return "Hello";
}

const greetingInTelugu = function(){
    return "Namskaram";
}

const greetingInHindi = function(){
    return "Namskar";
}

//Call Back - is a function that is passed as arg to another function.

const greet = function(unm,greetProvider)  {
    console.log(greetProvider() + " "+unm);
}

greet("Vamsy",greetingInEnglish);
greet("Vamsy",greetingInTelugu);
greet("Vamsy",greetingInHindi);

//Closure -  is a function that returns another function

const generateGreetMe = function(greeting) {
    return function(unm) {
        console.log(greeting +" " + unm);
    }
}

const g1 = generateGreetMe("Hello");
const g2 = generateGreetMe("Vanakkam");
const g3 = generateGreetMe("Namaskar");

g1("Vamsy");
g2("Vamsy");
g3("Vamsy");

generateGreetMe("Hai")("Kiran");

