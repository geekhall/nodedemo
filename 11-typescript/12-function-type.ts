// Function Type Expressions
function greeter1(fn: (a:string) => void){
  fn("Hello, TypeScript")
}

function printToConsole1(s: string) {
  console.log(s);
}

greeter1(printToConsole1)


