
//_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
// Interaces demo
//_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/

interface IPoint {
  x: number;
  y: number;
}

function printCoordinate(pt: IPoint) {
  console.log("The coordinate's x value is : " + pt.x);
  console.log("The coordinate's y value is : " + pt.y);
}

// The coordinate's x value is : 100
// The coordinate's y value is : 200
printCoordinate({x:300, y:400});
