/*let arr=[45,50,52]
//Array map method
a=arr.map((value,index,array)=>{
    console.log(value,index,array)
    return value+index
})
console.log(a)
console.log("---new line----")
//forEach method
b=arr.forEach((value,index,array)=>{
    console.log(value,index,array)
    return value*value
})
console.log(b)
//Array filter method
let arr2=[45,50,52,0,4,2,3]
a2=arr2.filter((a)=>{
    return a<10
})
console.log(a2) */
//Array reduce Method
let arr3= [1,2,3,4,5,6] //adds 1+2=3+3=6+4=10+5=15+6=21
newarr=arr3.reduce((a1,a2)=>{
    return a1+a2
})
console.log(newarr) //21