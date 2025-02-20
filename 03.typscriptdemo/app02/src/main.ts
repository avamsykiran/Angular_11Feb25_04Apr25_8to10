import greet from './welcome';

console.log(greet("Vamsy Kiran"));
console.log(greet("Sagar Guru Charan","Dr. "));

import checkPrime from './numOperations';

let results = checkPrime(169);
console.log(`169 is a ${results[1]} and the factors are ${results[0]}`);

let [factors,type] = checkPrime(1024);
console.log(`1024 is a ${type} and the factors are ${factors}`);

import arraydemoFunction from './arrayDemo';
arraydemoFunction();

import enumsDemofunction from './enumsDemo';
enumsDemofunction();

import { RegularEmployee, Manager} from './oopDemo';

let emp = new RegularEmployee("Vamsy ","Kiran",{doorNumber:"9015",city:"VSP",state:"AP"},45000);
let emp2 = new RegularEmployee("Vinay ","Varma","#5678,MG Road,Banglore,Karnataka",35000);
let mgr = new Manager("Murthy ","KGN",{doorNumber:"5155",city:"VSP",state:"AP"},54000,8900);

console.log(emp);
console.log(emp.netPay());
console.log(emp2);
console.log(emp2.netPay());
console.log(mgr);
console.log(mgr.netPay());