/*let age=10 //check age
age>=18?console.log('older'):console.log('Minor')*/

/*check credentials
let checkCredentials=(hasUsername,hasPassword)=>
{if(hasUsername && hasPassword)
    {
        return true
    }
    else{
        return false
    }
}
res=checkCredentials(true,true)
console.log(res)*/
/*let x=5;
let y='5';
console.log(x==y)
console.log(x===y)*/
/*let divideAndCheck=(a,b)=>{
    if(b!=0)
        return a/b
    else
    return "Division by zero error"
}
res=divideAndCheck(4,2)
console.log(res)*/

const getDayNAme=(dayOfWeek)=>{
    switch(dayOfWeek)
    {
        case 1:
            console.log("Sunday");
            break;
        case 2:
            console.log("Monday");
            break;
        case 3:
            console.log("Tuesday");
            break;
        case 4:
            console.log("wednesday");
            break;
        case 5:
            console.log("Thursday");
            break;
        case 6:
            console.log("Friday");
            break;
        case 7:
            console.log("Saturday");
            break;

    }
} 
getDayNAme(1)
