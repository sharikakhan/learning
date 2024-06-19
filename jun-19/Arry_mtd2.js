let name ="Harry Potter"
//Array.from--> coverts strings or other format into array 
let arr=Array.from(name)
console.log(arr)

//for.of   
num=[3,4,5,6,7]//for.of objects ke values deta hai
for(let i of num){
    console.log(i)
}
//for.in
for(let i in num) //for.in objects ke keys deta hai yaha pe keys index number hai
    {
        console.log(i)
        console.log("values "+num[i])
    }

