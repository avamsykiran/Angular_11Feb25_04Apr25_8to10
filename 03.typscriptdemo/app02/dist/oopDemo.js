"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Manager = exports.RegularEmployee = void 0;
class Employee {
    constructor(firstName, lastName, address, basicPay) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.basicPay = basicPay;
    }
}
class RegularEmployee extends Employee {
    constructor(firstName, lastName, address, basicPay) {
        super(firstName, lastName, address, basicPay);
        this.tax = 500;
    }
    netPay() {
        return this.basicPay - this.tax;
    }
}
exports.RegularEmployee = RegularEmployee;
class Manager extends RegularEmployee {
    constructor(firstName, lastName, address, basicPay, hra) {
        super(firstName, lastName, address, basicPay);
        this.hra = hra;
    }
    netPay() {
        return this.basicPay + this.hra - this.tax;
    }
}
exports.Manager = Manager;
