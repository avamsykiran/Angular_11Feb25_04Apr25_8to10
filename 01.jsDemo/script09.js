//OOP - JSON

emp1 = {id:101,name:"Vamsy Kiran",sal:45000};
emp2 = {id:102,name:"Murthy",sal:41000};
console.log(emp1);
console.log(emp2);

emp1.desg="Manager";
emp2.sal=undefined;
console.log(emp1);
console.log(emp2);

//OOP - Constructor Function

function Emp(id,name,sal){
    this.id=id;
    this.name=name;
    this.sal=sal;
}

emp3 = new Emp(103,"Suresh",50000);
emp4 = new Emp(104,"Ramesh",55000);
console.log(emp3);
console.log(emp4);

emp3.desg="Manager";
emp4.sal=undefined;
console.log(emp1);
console.log(emp2);

//OOP - Classes

class Employee {
    constructor(id,name,sal){
        this.id=id;
        this.name=name;
        this.sal=sal;
    }   

    getTA(){
        return this.sal*0.10;
    }

    getGrossPay(){
        return this.sal+this.getTA();
    }
}

emp5 = new Employee(105,"Suseela",90000);
console.log(emp5);
console.log(emp5.getTA());
emp5.desg = "Jr. Associate";
console.log(emp5);

class Manager extends Employee {
    constructor(id,name,sal,hra){
        super(id,name,sal);
        this.hra=hra;
    }

    getTA(){
        return this.sal*0.20;
    }

    getGrossPay(){
        return super.getGrossPay() + this.hra;
    }
}

mgr = new Manager(201,"Kiran",98000,8000);
console.log(mgr);
console.log(mgr.getTA());