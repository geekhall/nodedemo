// Function Type Expressions
function greeter(fn) {
    fn("Hello, TypeScript");
}
function printToConsole(s) {
    console.log(s);
}
greeter(printToConsole);
