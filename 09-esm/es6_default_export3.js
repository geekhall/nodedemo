// each export overwrites the previous one
// export default 只能使用一次：否者会SyntaxError: Duplicate export of 'default'
// export default class Reactangle {
export default class Reactangle{
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
