//calls a function,once for each array element
let num=[10,20,45,30,40,50]

num.forEach((ele) => {
   console.log('foreach', ele*2);
})

let result = num.map((ele) => {
   return ele*2;
})
console.log('map', result)

let result1 = num.filter((ele) => {
    return ele%2===0;
})
console.log('filter', result1)

let arr = num.reduce((sum, ele) => {
   return ele+sum;
}, 0)
console.log('reduce', arr)

//prog 1
const array1 = ['a', 'b', 'c'];

array1.forEach((element) => console.log(element));

//prog2 

const items = ["item1", '', "item2", "item3", ''];

const aaa = items.map((elements)=>{
    return elements
}).filter((ele) => {
    return ele!='';
})
console.log('aaa', aaa)

let str = 'a.b.c.d.e';
let out=str.split('.')
console.log("array",out)


console.log(out1)
var out1 = out.join('.')
