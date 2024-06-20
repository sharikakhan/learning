const reverseString=(str)=>{
    //let arr=str.split("")
    //let rev=arr.reverse() 
    //let out=rev.join("")
    //return out
    return str.split("").reverse().join("")
}
let result=reverseString("Sorry")
console.log(result)