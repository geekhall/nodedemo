import * as total from './es6_named_export.js'

console.log(total.Reactangle)
console.log(total.foo)
console.log(total.name1)  // Ethan Yin
console.log(total.name2)  // Ethan Gin
console.log(total.nameN)  // geekhall
console.log(total.nic1)   // ocean
console.log(total.nic2)   // silver
console.log(total.nickname1)   // undefined

let rectangle = new total.Reactangle(3,4)
console.log('the square of rectangle is : ' + rectangle.premeter())
console.log('the area of rectangle is : ' + rectangle.area())


