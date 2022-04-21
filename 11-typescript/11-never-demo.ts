interface Circle {
  kind: "circle";
  radius: number;
}

interface Square{
  kind: "square";
  sideLength: number;
}

interface Triangle{
  kind: "triangle"
  sideLength: number;
}

type Shape = Circle | Square | Triangle

function getArea(shape: Shape){
  switch(shape.kind) {
    case "circle" :
      return Math.PI * shape.radius**2;
    case "square" :
      return shape.sideLength**2;
    case "triangle":
      return shape.sideLength* shape.sideLength*Math.cos(Math.PI / 6) /2
    default:
      const _exhaustiveCheck : never = shape;
      return _exhaustiveCheck
  }


}

let triangle : Triangle = {
  kind: "triangle",
  sideLength: 100
}

let circle: Circle = {
  kind: "circle",
  radius: 100,
}

let square: Square = {
  kind: "square",
  sideLength: 100
}

console.log(getArea(circle));
console.log(getArea(square));
console.log(getArea(triangle));
