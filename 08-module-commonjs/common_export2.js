// 先声明module.exports对象后，下面的改动不会导出
exports.nickname='geekhall'
exports.age=30

// 时刻谨记，require()模块时，得到的永远是module.exports指向的对象：
module.exports = {
  name: 'Ethan Yin',
  age: '27'
}
