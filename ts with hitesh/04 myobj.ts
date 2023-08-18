type User = {
    readonly _id : string;
    name : string;
    email : string;
    isActive : boolean;
    credCardDetails ?: number
}

// above readonly keyword is one that no one can change
// here ? means it is a optional paramter 
let myuser : User = {
    _id : "1234",
    name : "H",
    email : "y@y.com",
    isActive : true
}

// user created 
myuser.email = "hello"

// & takes feild from all given classes

export {}