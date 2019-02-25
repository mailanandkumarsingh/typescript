function myDetail(name: string, age: number) : string {
    return name+age;
};

myDetail('13', 15);

//Function types
let mul : (nu1: number, n2: number) => number;
mul = function(nu: number, num: number) {
    return nu*num;
};
console.log(mul(3,4));