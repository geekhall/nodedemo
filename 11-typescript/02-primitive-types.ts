function type_test(){
  // any
  let obj:any = {x: 0};

  obj.foo();
  obj();
  obj.bar = 100;
  obj = "hello";
  const n: number = obj;
}


// type_test()


/**
 * The primitives : string, number, and boolean
 */
function primitives_test(){
  const name = "geekhall";
  const age = 18;
  const is_coder = true;

  console.log(name);
  console.log(age);
  console.log(is_coder);
  greet(name);
}

function greet(name: string){
  console.log("Hello, " + name.toUpperCase() + "!!");
}

primitives_test();
