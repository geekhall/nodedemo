//_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
// Object Types
// '?' means the properties are optional.
//_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
function printName(obj: {first: string; last?: string}) {
  // ...
  console.log("Name: " + obj.first + " " + obj.last);

}
printName({first: "Ethan"});
printName({first: "Eric", last:"Yin"});
