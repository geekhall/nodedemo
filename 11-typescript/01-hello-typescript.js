// tsc hello-typescript.ts
function greet(person, date) {
    console.log("Hello ".concat(person, ", today is ").concat(date.toDateString(), "!"));
}
var user = "geekhall";
greet(user, new Date());
