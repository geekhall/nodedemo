let obj1 = require('./common_export4')
let obj2 = require('./common_export4')
console.log(obj1)  // { name: 'Ethan Yin', age: 27 }
console.log(obj2)  // { name: 'Ethan Yin', age: 27 }

obj1.name="geekhall"

console.log(obj1)  // { name: 'geekhall', age: 27 }
console.log(obj2)  // { name: 'geekhall', age: 27 }

// 即使再require也是从cache中引入
let obj3 = require('./common_export4')
console.log(obj3) // { name: 'geekhall', age: '27' }

// 使用delete清除缓存之后，再次引入就不再使用缓存了
delete require.cache[require.resolve('./common_export4')]
let obj4 = require('./common_export4')
console.log(obj4) // { name: 'Ethan Yin', age: '27' }

