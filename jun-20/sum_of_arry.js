let a=[1,2,3,4,5]
/*new_arr=arr.reduce((value_1,value_2)=>{
    return value_1+value_2
})
console.log(new_arr)*/

const sumArray=(arr)=>{
   let sum=0
   for(i=0;i<arr.length;i++)
    {
        sum=sum+arr[i]
    }
    
    return sum
}

 let res=sumArray(a)
console.log(res)


