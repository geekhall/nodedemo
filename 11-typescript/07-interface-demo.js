//_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
// Interaces demo
//_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
function printCoordWithInterface(pt) {
    console.log("The coordinate's x value is : " + pt.x);
    console.log("The coordinate's y value is : " + pt.y);
}
// The coordinate's x value is : 100
// The coordinate's y value is : 200
printCoordWithInterface({ x: 300, y: 400 });
