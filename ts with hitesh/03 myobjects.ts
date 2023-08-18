const User = {
    "name" : "yogesh",
    "email" : "yogesh@g.com",
    "isActive" : true
}
// first method
function createUser ({
    name : string,
    isPaid : boolean
}) {

}
createUser({name : "yogesh" , isPaid : true}) 


// type aliasis

type User = {
    name : string;
    email : string ;
    isActive : boolean
}

function createUsertype (user : User) {
}
// we define user

createUsertype({name : "" , email : "" , isActive : true})



export {}