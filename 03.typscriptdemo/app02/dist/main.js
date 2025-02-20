"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const welcome_1 = __importDefault(require("./welcome"));
console.log((0, welcome_1.default)("Vamsy Kiran"));
console.log((0, welcome_1.default)("Sagar Guru Charan", "Dr. "));
const numOperations_1 = __importDefault(require("./numOperations"));
let results = (0, numOperations_1.default)(169);
console.log(`169 is a ${results[1]} and the factors are ${results[0]}`);
let [factors, type] = (0, numOperations_1.default)(1024);
console.log(`1024 is a ${type} and the factors are ${factors}`);
