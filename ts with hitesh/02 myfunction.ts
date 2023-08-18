function addTwo (num : number) : number {
    return num + 2
}
addTwo(5)
// we face any problem
// putting default values

let loginUser = (name : string , password : string , paid : boolean = true) => {

}

loginUser("yogesh" , "singla")

const getHello = (a :string) :string => {
    return "hello"
}

const heros = ["thor" , "ironman" , "hulk"]

heros.map(hero => {
    return hero
})


function consoleError(errmsg : string) : void{
    console.log(errmsg)
}

// error handling

function fail (errmsg : string) :never {
    throw new Error (errmsg)
}

export{} 