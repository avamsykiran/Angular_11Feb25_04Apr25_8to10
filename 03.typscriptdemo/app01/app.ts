let userName : string;

userName="Vamsy Kiran";

console.log("Hello " + userName );

let age : number;
age = 67;

let isEligibleToVote : boolean;
isEligibleToVote = age>=18;

console.log(`Hai ${userName}! You are ${age} years old and hence you ${isEligibleToVote?"can vote":"cannot vote"}.`);

const sum = function(a:number,b:number):number {
    return a+b;
}

console.log(sum(10,56));

let x : any;

x="Vamsy";
console.log(`${x} is a ${typeof x}`);

x=45;
console.log(`${x} is a ${typeof x}`);

x=false;
console.log(`${x} is a ${typeof x}`);



