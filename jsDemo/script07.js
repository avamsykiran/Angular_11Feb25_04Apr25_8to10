//String Class

s = "Hello World";
console.log(s.length);
console.log(s.toLowerCase());
console.log(s.substring(1,5));

//Math Class
console.log(Math.PI);
console.log(Math.sin(Math.PI));
console.log(Math.pow(2,5));

//Date Class
today = new Date();
console.log(today);
dob = new Date("1985-11-06");
console.log(dob);
console.log(dob>today);
console.log(today-dob);
console.log(today.getFullYear()-dob.getFullYear());