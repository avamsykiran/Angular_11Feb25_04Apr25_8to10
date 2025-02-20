"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enumsDemofunction = function () {
    let concerns;
    (function (concerns) {
        concerns[concerns["YES"] = 0] = "YES";
        concerns[concerns["NO"] = 1] = "NO";
        concerns[concerns["ALRIGHT"] = 2] = "ALRIGHT";
    })(concerns || (concerns = {}));
    ;
    console.log(concerns.YES);
    console.log(concerns.NO);
    console.log(concerns.ALRIGHT);
    let directions;
    (function (directions) {
        directions[directions["NORTH"] = 1] = "NORTH";
        directions[directions["SOUTH"] = 2] = "SOUTH";
        directions[directions["EAST"] = 3] = "EAST";
        directions[directions["WEST"] = 4] = "WEST";
    })(directions || (directions = {}));
    console.log(directions.NORTH);
    console.log(directions.SOUTH);
    console.log(directions.EAST);
    console.log(directions.WEST);
    let quarters;
    (function (quarters) {
        quarters[quarters["Q1"] = 0] = "Q1";
        quarters[quarters["Q2"] = 90] = "Q2";
        quarters[quarters["Q3"] = 180] = "Q3";
        quarters[quarters["Q4"] = 270] = "Q4";
    })(quarters || (quarters = {}));
    console.log(quarters.Q1);
    console.log(quarters.Q2);
    console.log(quarters.Q3);
    console.log(quarters.Q4);
    let gender;
    (function (gender) {
        gender["LADY"] = "LADY";
        gender["GENT"] = "GENBT";
    })(gender || (gender = {}));
    console.log(gender.LADY);
    console.log(gender.GENT);
};
exports.default = enumsDemofunction;
