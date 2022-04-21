// Function Type Expressions
function greeter1(fn) {
    fn("Hello, TypeScript");
}
function printToConsole1(s) {
    console.log(s);
}
greeter1(printToConsole1);
