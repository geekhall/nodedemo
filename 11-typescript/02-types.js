function type_test() {
    // any
    var obj = { x: 0 };
    obj.foo();
    obj();
    obj.bar = 100;
    obj = "hello";
    var n = obj;
}
type_test();
