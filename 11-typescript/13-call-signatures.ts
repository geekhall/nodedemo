// Call Signatures

type DescribableFunction = {
  description: string;
  (someArg: number): boolean;
};

function doSomething(fn : DescribableFunction) {
  console.log(fn.description + " returned " + fn(6)); // undefined returned false .   why undefined.
}

let boring = (a:number): boolean=>{
  description: 'typescript is interesting'
  console.log("a = " + a);
  return a> 10
}
doSomething(boring as DescribableFunction)

