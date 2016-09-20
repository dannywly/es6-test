function f (x, y, ...a) {
    return (x + y) * a.length;
}

var params = [ "hello", true, 7 ];
var other = [ 1, 2, ...params ]; // [ 1, 2, "hello", true, 7 ]
f(1, 2, ...params) === 9;

var str = "foo";
var chars = [ ...str ]; // [ "f", "o", "o" ]