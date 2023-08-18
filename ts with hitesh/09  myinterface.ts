interface User {
    email : string,
    userId : number,
    googleId ?: string,
    readonly id:number
}

// like type and classes

const yogesh : User = {
    email : "yogesh",
    userId : 1212,
    id : 12121
}

// here also we cannot manipulate any readonly value