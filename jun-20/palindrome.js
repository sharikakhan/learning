const ispalindrome=(str)=>{
    let str_low=str.toLowerCase() 
    let str_rev=str_low.split("").reverse().join("")
    if(str_low==str_rev)
        return true
    else
        return false
}

let result=ispalindrome("racecar")
console.log(result)