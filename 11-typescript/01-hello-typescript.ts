// tsc 01-hello-typescript.ts
// node 01-hello-typescript.js
function greeting(person: string, date: Date){
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

greeting('geekhall', new Date())

