//Arrow Function - is a short cut function expression.
//An arrow function is a mapping from a args-list to its return value

const isEven = n => n%2===0;

const sum = (a,b) => (a+b);

console.log(isEven(12));
console.log(isEven(13));
console.log(sum(12,10));

//An arrow function is a mapping from a args-list to its function body

const findFactors = n => {
    factors =[1];

    for(i=2;i<=n/2;i++){
        if(n%i===0){
            factors.push(i);
        }
    }

    factors.push(n);

    return factors;
};

console.log("Factors of 1024 are "+findFactors(1024));

//An arrow function can be no-arg as well.

const greeting = () => {
    h = (new Date()).getHours();

    if(h>=3 && h<=11) return "Good Morning ";
    else if(h>11 && h<=15) return "Good Noon ";
    else return "Good Evening ";
};

console.log(greeting() + "Murthy");