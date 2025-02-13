// spread operator on arrays

a1 = [1,2,3];
a2 = [5,6,7];
a3 = [ a1, a2 ];
a4 = [ ...a1, ...a2 ];
console.log(a3);
console.log(a4);

// spread operator on objects

contact1 = {fullName:"Vamsy",mobile:"9052224753",mail:"a.vamc.it@gmail.com"};
console.log(contact1);
contact2 = {...contact1,mail:undefined,alternateMobile:"9999999999"};
console.log(contact2);

// structured assignemnt

id = 9;
name = "Vasanth";
mobile = "1231231231";

c = {id,name,mobile};

console.log(c);

// destructured assignemnt

var {fullName,mail} = contact1;
console.log(fullName);
console.log(mail);

// destructured assignemnt on arrays

let [,x,,y] = a4;
console.log(x);
console.log(y);
