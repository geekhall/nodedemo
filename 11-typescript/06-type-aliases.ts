
//_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
// Type Aliases
//_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/

type Point = {
  x: number;
  y: number;
}

function printCoord(pt: Point) {
  console.log("The coordinate's x value is : " + pt.x);
  console.log("The coordinate's y value is : " + pt.y);
}

// The coordinate's x value is : 100
// The coordinate's y value is : 200
printCoord({x:100, y:200});


type UserInputSanitizedString = string

function sanitize(str: string) {
  return str.toLowerCase();
}

function sanitizeInput(str: string): UserInputSanitizedString {
  return sanitize(str);
}

