// 分别暴露，Named exports
// Named Exports (Zero or more exports per module)
let name1 = 'Ethan Yin'
let name2 = 'Ethan Gin'
let nameN = 'geekhall'
let nickname1 = 'ocean'
let nickname2 = 'silver'
// export let name1='name1', name2='name2', nameN='nameN'; // also var, const
// export let name1 = 'name1', name2 = …, …, nameN; // also var, const

// export function
export function foo(){
  console.log("in function foo")

 }

// export class
export class Reactangle {
  constructor(height, width){
    this.height = height
    this.width = width
  }
  premeter(){
    return 2*(this.height + this.width )
  }
  area() {
    return this.height * this.width
  }
}

// Export list
export { name1, name2, nameN };

// Renaming exports
export { nickname1 as nic1, nickname2 as nic2 };

