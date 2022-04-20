// 在一个自定义模块中，默认情况下，module.export = {}
const age = 20
module.exports.username = '张三'

module.exports.sayHello = function(){
  console.log("Hello")
}
module.exports.age = age

module.exports = {
  nickname: '小黑',
  sayHi(){
    console.log("Hi :")

  }
}
