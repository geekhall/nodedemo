// Function Type Expressions
function greeter(fn: (a:string) => void){
  fn("Hello, TypeScript")
}

function printToConsole(s: string) {
  console.log(s);
}

greeter(printToConsole)


