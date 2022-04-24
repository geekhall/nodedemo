// Call Signatures

type DescribableFunction = {
  description: string;
  (someArg: number): boolean;
};

function doSomething(fn : DescribableFunction) {
  console.log(fn.description + " returned " + fn(6));
}

const boring = (a:number): boolean=>{
  // add properties here is not properate.
  // will get a result of 'undefined returned false' at console.
  description: 'typescript is interesting'
  console.log("a = " + a);
  return a>10;
}
boring.description = 'Elon Musk'

doSomething(boring)

