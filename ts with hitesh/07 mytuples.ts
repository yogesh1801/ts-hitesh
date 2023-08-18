// not very good implementation of tuples in typescript
// only available in ts not js



let user : (string | number )[]  
// what if we need a proper order

let pUser : [string , number , boolean]
pUser = ["yogesh" , 18 , true]
// only specific order is allowed 

type USer = [number , string] //  this is also allowed 
export {}