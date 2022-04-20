import * as total1 from './es6_default_export1.js'

console.log(total1) //  { default: [Function: myFunction] }
console.log(total1.default) // [Function: myFunction]
console.log(total1.default(2,3)) // 5


