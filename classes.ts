class Person {
    private age: number = 23;
    protected relationship : string = 'self';
    constructor( public name: string, public username: string){

    }
    getAge() {
        return this.age;
    }
};

let person: Person = new Person('anand', 'andy');
console.log(person.name, person.username);
console.log(person.getAge());

//checking for getter and setter
class Plant {
    private _species: string = "Rose";
    get species(){
        console.log('Calling the getter');
        return this._species
    }

    set species(value: string){
        console.log('Setting the species');
        this._species = value;
    }
};

let plant:Plant = new Plant();
console.log('Plant is ', plant.species);
plant.species = "Cactus";
console.log('New Plant is set to ', plant.species);

//Static Classer
class Helpers {
    static PI: number = 3.14;
    static circum(diameter: number):number {
        return this.PI * diameter;
    };
};

console.log('PI value ',Helpers.PI);
console.log('Circum value ',Helpers.circum(30));

//Abstract Classes
abstract class ProjectName {
    projectName : string = "Default";
    abstract setProjectName(name: string): void;
};

class MyProject extends ProjectName {
    setProjectName(name: string): void {
        this.projectName = name;
    }
};

let petPRoject = new MyProject();
console.log('What is the default project name ', petPRoject);
petPRoject.setProjectName('LASOO');
console.log('What is the new Project now ', petPRoject);

//Singleton classes
class writeSingleTon {
    private static instace: writeSingleTon;
    private props: string = "";
    private constructor(public nametoset: string) {
        this.props = nametoset;
    }
    static getInstance(){
        if(!writeSingleTon.instace){
            console.log('Created for the first time');
            writeSingleTon.instace = new writeSingleTon("Anna");
        } else{
            console.log('Old instance returned');
            
        }
        return writeSingleTon.instace;
    }
};
let inst = writeSingleTon.getInstance();
console.log('Short Cut getter and setter ', inst.nametoset);