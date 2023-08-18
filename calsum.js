"use strict";
// classes implementing the interface
class Person {
    constructor(name, age) {
        this.name = name,
            this.age = age;
        this.gender = "male";
    }
    greet() {
        return "hi " + this.name;
    }
}
function printing(input) {
    console.log(input);
}
printing({
    relegion: "hindu",
    name: "yogesh",
    age: 20
});
// interfaces can use other interfaces
// we can also use extends to class and extends also
// we can also use types but cannot extend types to classes nor can be used in other interfaces
// enums and optional paramters (?)
// & and | in types
