//_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
// Interaces vs Type
//_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/

// Interface
interface IAnimal{
  name: string
}

interface IBear extends IAnimal {
  honey: boolean
}
// Adding new fields to an existing interface
interface IAnimal {
  age: number
}

function getIBear(): IBear {
  // return <IBear>{};
  // or
  return {} as IBear;
}
const iBear: IBear = getIBear();
iBear.name = "i-Bear";
iBear.age = 18;
iBear.honey = true;
console.log(iBear); // { name: 'i-Bear', age: 18, honey: true }

// Type
type Animal = {
  name: string
}

type Bear = Animal & {
  honey: boolean
}

// Error: A type cannot be changed after being created
// type Animal = {
//   age: number
// }

function getBear(): Bear{
  return {} as Bear;
}
const bear = getBear();
bear.name = "Bear";
bear.honey = false;
console.log(bear);  // { name: 'Bear', honey: false }

