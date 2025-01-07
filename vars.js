console.log(a);

var a = 10;
let b = "Hello";
const c = true;

console.log("After Declaration:");
console.log("var a:", a);
console.log("let b:", b);
console.log("const c:", c);

function testScope() {
    if (true) {
        var x = 20;
        let y = "Scoped String";
        const z = false;
    }
    console.log("var x inside function:", x);
}
testScope();

a = 30;
b = "New String";

console.log("After Reassignment:");
console.log("var a:", a);
console.log("let b:", b);
