function outer() {
    let a = 10;

    function inner() {
        return a++;
    }

    return inner; // ✅ return the function
}

const counter = outer();

console.log(counter()); // 10
console.log(counter()); // 11
