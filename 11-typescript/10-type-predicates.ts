type Fish = {name?:string; swim: () => void }
type Bird = {name?:string; fly: ()=> void}
type Human = { swim?: ()=> void; fly?: ()=> {}}

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined
}
function getSmallPet() : Fish | Bird{
  if (Math.random() > 0.5)
    return {
      swim: ()=>{
        console.log("I am a Fish, I can swim");
      }
    }
  else
    return {
      fly: ()=>{
        console.log("I am a Bird, I can fly");
      }
    }
}
let pet = getSmallPet()

if (isFish(pet)) {
  pet.swim()
} else {
  pet.fly()
}


const zoo: (Fish|Bird)[] = [getSmallPet(), getSmallPet(), getSmallPet(), getSmallPet(), getSmallPet()]
const underWater1: Fish[] = zoo.filter(isFish)
const underWater2: Fish[] = zoo.filter(isFish) as Fish[];
const underWater3: Fish[] = <Fish[]>zoo.filter(isFish);

// The predicate may need repeating for more complex examples
const underWater4: Fish[] = zoo.filter((pet): pet is Fish =>{
  if (pet.name === "sharkey") return false;
  return isFish(pet)
})

zoo.forEach((animal, index)=>{
  console.log(`No. ${index} animal is ${isFish(animal) ? `a fish` : `not a fish`}` );
})
