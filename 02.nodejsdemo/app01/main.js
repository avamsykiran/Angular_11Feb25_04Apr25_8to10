import { sum,dif } from './arth.js'

console.log("My first nodejs application");

console.log(sum(10,20));
console.log(dif(10,20));

import * as a from './arth.js';

console.log(a.prd(10,20));
console.log(a.qut(10,20));

import getFactors from './arth.js';

console.log(getFactors(1024));