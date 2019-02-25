var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, username) {
        this.name = name;
        this.username = username;
        this.age = 23;
        this.relationship = 'self';
    }
    Person.prototype.getAge = function () {
        return this.age;
    };
    return Person;
}());
;
var person = new Person('anand', 'andy');
console.log(person.name, person.username);
console.log(person.getAge());
//checking for getter and setter
var Plant = /** @class */ (function () {
    function Plant() {
        this._species = "Rose";
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            console.log('Calling the getter');
            return this._species;
        },
        set: function (value) {
            console.log('Setting the species');
            this._species = value;
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
;
var plant = new Plant();
console.log('Plant is ', plant.species);
plant.species = "Cactus";
console.log('New Plant is set to ', plant.species);
//Static Classer
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.circum = function (diameter) {
        return this.PI * diameter;
    };
    ;
    Helpers.PI = 3.14;
    return Helpers;
}());
;
console.log('PI value ', Helpers.PI);
console.log('Circum value ', Helpers.circum(30));
//Abstract Classes
var ProjectName = /** @class */ (function () {
    function ProjectName() {
        this.projectName = "Default";
    }
    return ProjectName;
}());
;
var MyProject = /** @class */ (function (_super) {
    __extends(MyProject, _super);
    function MyProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MyProject.prototype.setProjectName = function (name) {
        this.projectName = name;
    };
    return MyProject;
}(ProjectName));
;
var petPRoject = new MyProject();
console.log('What is the default project name ', petPRoject);
petPRoject.setProjectName('LASOO');
console.log('What is the new Project now ', petPRoject);
//Singleton classes
var writeSingleTon = /** @class */ (function () {
    function writeSingleTon(nametoset) {
        this.nametoset = nametoset;
        this.props = "";
        this.props = nametoset;
    }
    writeSingleTon.getInstance = function () {
        if (!writeSingleTon.instace) {
            console.log('Created for the first time');
            writeSingleTon.instace = new writeSingleTon("Anna");
        }
        else {
            console.log('Old instance returned');
        }
        return writeSingleTon.instace;
    };
    return writeSingleTon;
}());
;
var inst = writeSingleTon.getInstance();
console.log('Short Cut getter and setter ', inst.nametoset);
