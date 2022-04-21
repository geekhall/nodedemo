// Call Signatures
function doSomething(fn) {
    console.log(fn.description + " returned " + fn(6)); // undefined returned false .   why undefined.
}
var boring = function (a) {
    description: 'typescript is interesting';
    console.log("a = " + a);
    return a > 10;
};
doSomething(boring);
