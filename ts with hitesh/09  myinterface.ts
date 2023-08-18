interface User {
    email : string,
    userId : number,
    googleId ?: string,
    readonly id:number,
    // defining a methof
    startTrial : () => string,
    //another method
    startTrial2() :string,
    getCoupon(couponName : string) : number

}

// like type and classes

// interfaces can be reopned

interface User {
    githubToken : string
}

const yogesh : User = {
    email : "yogesh",
    userId : 1212,
    id : 12121,
    startTrial : () => "trial started",
    startTrial2 : ()=> "trial started",
    getCoupon : (name : "yogesh") => 10,
    githubToken : "1010"
}

// here also we cannot manipulate any readonly value

// interface extend

interface Admin extends User {
    role : string
}

export {}