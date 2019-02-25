// Exercise 1
class Car {
    private name: string = "";
    private _accelerate: number = 0;
    public readonly honk = "Tooooootttt";
    constructor(carname: string){
        this.name = carname;
    }
    
    get accelerate() {
        return this._accelerate;
    }

    set accelerate(num: number) {
        this._accelerate = this._accelerate + num;
    }
};
var car = new Car("BMW");
car.honk;
console.log(car.accelerate);
car.accelerate = 10;
console.log(car.accelerate);

// Exercise 2
var baseObject = {
    width: 0,
    length: 0
};
var rectangle = Object.create(baseObject);
rectangle.width = 5;
rectangle.length = 2;
rectangle.calcSize = function() {
    return this.width * this.length;
};
console.log(rectangle.calcSize());

// Exercise 3
var person = {
    _firstName: ""
};
Object.defineProperty(person, "firstName", {
    get: function () {
        return this._firstName;
    },
    set: function (value) {
        if (value.length > 3) {
            this._firstName = value;
        }
        else {
            this._firstName = "";
        }
    },
    enumerable: true,
    configurable: true
});
console.log(person.firstName);
person.firstName = "Ma";
console.log(person.firstName);
person.firstName = "Maximilian";
console.log(person.firstName);
