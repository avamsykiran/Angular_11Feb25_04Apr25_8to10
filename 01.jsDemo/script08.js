
//Templet Leterals or Interpolation
name= "Vamsy";
age = 45;
sal = 45000;

console.log("Hai "+name+"! You are "+age+". And you earn "+sal);
console.log('Hai '+name+'! You are '+age+'. And you earn '+sal);
console.log(`Hai ${name}! You are ${age}. And you earn ${sal}`);

//Default params
const greet = (unm="Somebody") => `Hello! ${unm}! How do you do? ` ;

console.log(greet());
console.log(greet("Vamsy"));

//Rest Params 

const greetAll = (...names) => {
    if(names.length>0){
        for(name of names){
            console.log(`Hello ${name}`);
        }
    }
};

greetAll();
greetAll("a");
greetAll("a","b","c","d","e","f");
