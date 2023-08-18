interface PersonInterface {
    name:string;
    age : number
}
// classes implementing the interface
class Person implements PersonInterface {
    name :string
    age : number 
    gender : String
    constructor(name : string , age : number){
        this.name = name, 
        this.age = age
        this.gender = "male"
    }

    greet() {
        return "hi " + this.name
    }
}

// interface implementing other interface 
interface IntefaceCanUseInterface {
    name : string;
    age : Number;
    person : Person
}

// interface extenting interface

interface ExtendedIterface extends PersonInterface {
    relegion : string

    // here Person inteface things are also added
}

function printing (input : ExtendedIterface) {
    console.log(input)
}

printing({
    relegion : "hindu",
    name : "yogesh",
    age : 20
})
// interfaces can use other interfaces
// we can also use extends to class and extends also
// we can also use types but cannot extend types to classes nor can be used in other interfaces
// enums and optional paramters (?)
// & and | in types