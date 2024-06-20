
const factorial=(arr)=>{
    let sum=1
    for(let i=arr;i>0;i--)
     {
         sum=sum*i
     }
     
     return sum
 }
let result=factorial(4)
console.log(result)