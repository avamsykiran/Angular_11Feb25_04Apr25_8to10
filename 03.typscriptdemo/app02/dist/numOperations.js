"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const checkPrime = function (n) {
    let factors = [1];
    for (let i = 2; i <= n / 2; i++) {
        if (n % i === 0) {
            factors.push(i);
        }
    }
    factors.push(n);
    return [factors, factors.length === 2 ? "Prime" : "Composite"];
};
exports.default = checkPrime;
