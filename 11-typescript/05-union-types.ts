
//_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
// Union Types
//_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
function printId(id: number | string){
  console.log("Your ID is: " + id);
}

// OK
printId(101);
// OK
printId("King");

function narrowPrintId(id:number | string){
  if (typeof id === "string") {
    // In this branch, id is of type 'string'
    console.log(id.toUpperCase());
  } else {
    // Here, id is of type 'number'
    console.log(id);
  }
}
// OK
narrowPrintId(101);
// OK
narrowPrintId("King");


function welcomePeople(x: string[] | string) {
  if (Array.isArray(x)) {
    console.log("Hello, " + x.join(" and "));
  } else {
    console.log("Welcome lone traveler " + x);
  }
}

welcomePeople(["Alice", "Bob", "Charlie"]); // Hello, Alice and Bob and Charlie
welcomePeople(["Ethan"]); // Hello, Ethan
welcomePeople("Ethan");   // Welcome lone traveler Ethan

function getFirstThree(x: number[] | string) {
  return x.slice(0, 3);
}
console.log(getFirstThree([1,2,3,4,5]));  // [ 1, 2, 3 ]
console.log(getFirstThree("Hello"));  // Hel

