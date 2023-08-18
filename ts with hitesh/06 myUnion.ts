// we can avoid any

let score : number | string = 33
score = 44
score = "55"

type User = {
    name : string;
    id : number 
}

type Admin = {
    username : string,
    id : number 
}

let Yogesh : User | Admin = {name : "yogesh" , id : 334}

Yogesh = {username : "yogesh" , id : 334}

function Dbid (id : number | string) {
    console.log(id)
    //id.toLowerCase() gives error
// we need to verify union narrowing

if (typeof id == "string"){
    id.toLowerCase()
} // this works
}

const data :number [] = [1,2,3]
const data2 : number [] | string [] = []
// this means either fullt string array or fully number array
const data3 : (number | string)[] = ["1" ,2 , 3]

const pi : 3.14 = 3.14 // literal assignment 

let seatAllotment  : "aisle" | "middle" | "window" // no other values are allowed

export {}