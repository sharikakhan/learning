let obj={harry:98,
    rohan:70,
    akash:7}// program to print a marks

    /*console.log(Object.keys(obj)) //output the keys 
    console.log(Object.keys(obj).length) //output the length of keys
    console.log(Object.keys(obj)[0]) // outputs first element from array
    console.log(obj[Object.keys(obj)[0]]) //outputs the first elements value*/


for(let i=0;i<Object.keys(obj).length;i++){
    console.log("The marks of "+Object.keys(obj)[i]+"are"+obj[Object.keys(obj)[i]])
}
for(let keys in obj)
    {
        console.log("The marks of "+keys+" are "+obj[keys]);
    }