function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * Math.pow(shape.radius, 2);
        case "square":
            return Math.pow(shape.sideLength, 2);
        case "triangle":
            return shape.sideLength * shape.sideLength * Math.cos(Math.PI / 6) / 2;
        default:
            var _exhaustiveCheck = shape;
            return _exhaustiveCheck;
    }
}
var triangle = {
    kind: "triangle",
    sideLength: 100
};
var circle = {
    kind: "circle",
    radius: 100
};
var square = {
    kind: "square",
    sideLength: 100
};
console.log(getArea(circle));
console.log(getArea(square));
console.log(getArea(triangle));
