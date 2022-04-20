//_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
// Interaces vs Type
//_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
function getIBear() {
    return {};
}
var iBear = getIBear();
iBear.name = "i-Bear";
iBear.age = 18;
iBear.honey = true;
console.log(iBear); // { name: 'i-Bear', age: 18, honey: true }
// Error: A type cannot be changed after being created
// type Animal = {
//   age: number
// }
function getBear() {
    return {};
}
var bear = getBear();
bear.name = "Bear";
bear.honey = false;
console.log(bear); // { name: 'Bear', honey: false }
