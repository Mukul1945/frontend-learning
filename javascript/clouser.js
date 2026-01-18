function outer(){
    var a=10;
    return function inner(){
        a++;
        return a;
    };

}

const counter = outer();
console.log(counter());
console.log(counter());