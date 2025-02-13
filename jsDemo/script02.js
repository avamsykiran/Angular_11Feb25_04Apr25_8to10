//javascript is a type infered language or dynamically typed language

x = 90;
console.log(x +" is of type "+ (typeof x));

x = "Apple";
console.log(x +" is of type "+ (typeof x));

x = true;
console.log(x +" is of type "+ (typeof x));

x = [1,2,3,4,5,6,7,8,9];
console.log(x +" is of type "+ (typeof x));

x = {id:1,fullName:"Vamsy",mobile:"999999999"};
console.log(x +" is of type "+ (typeof x));

x = function () {
    console.log("This is a function");
}
console.log(x +" is of type "+ (typeof x));