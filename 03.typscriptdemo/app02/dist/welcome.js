"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const greet = function (userName, salutation) {
    return "Hello " + (salutation ? salutation : "") + userName;
};
exports.default = greet;
