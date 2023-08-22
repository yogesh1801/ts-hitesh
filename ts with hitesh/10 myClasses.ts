class User {
    email : string
    name : string
    readonly city : string = "goa"
    constructor(email : string , name : string){
        this.email = email;
        this.name = name
    }
}

const yogesh = new User ("y@y.com" , "yogesh")
console.log(yogesh.city)

