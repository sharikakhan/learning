unorder=[5,9,7,0,3]
a1=unorder.sort() //sorting 
console.log(unorder)//[ 0, 3, 5, 7, 9 ]

unorder1=[551,22,3,14,5,6,7,8,229]
a2=unorder1.sort() //sorting 
console.log(unorder1)//[14,22,229,3,5,551,6,7,8]
/* here sorting is based on alphabets so it os not giving ascending numbers*/

//for assending number we need to take help of another method like functions
let compare_asending=(a,b)=>{
    return a-b
}

let compare_desending=(a,b)=>{
    return b-a
}
let num=[551,22,3,14,5,6,7,8,229]
num.sort(compare_asending)
console.log(num)
num.sort(compare_desending)
console.log(num)

