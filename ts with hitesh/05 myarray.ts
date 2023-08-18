//const superHeros = []
//shows never if declared like that

const superHeros :string[] = []
superHeros.push("ironman")

// above is the way we do 

// another way
// this is also correct
const superHeros2 :Array<number> = []


// we can also use types
type User = {
    name : string;
    isActive : boolean
}

const ArrUser : User[] = []

// making 2D arrays
const MLmodels : number[][] = []

export {}