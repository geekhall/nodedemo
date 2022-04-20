// The requested module './es6_default_export3.js' does not provide an export named 'Rectangle'
// import { Rectangle } from './es6_default_export3.js'


import { default as Rect } from './es6_default_export3.js'


console.log(Rect) //  [class Reactangle]

let rect = new Rect(3,6)
console.log(rect) // Reactangle { height: 3, width: 6 }

