function type_test(){
  // any
  let obj:any = {x: 0}

  obj.foo()
  obj()
  obj.bar = 100
  obj = "hello"
  const n: number = obj
}

type_test()
