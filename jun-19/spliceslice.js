/* Splice can be used to add new items and if nececcery remove old item from array*/
let num=[551,22,3,14,5,6,7,8,229]
num.splice(2,4,1021,2341,5432,7890)
/* here 2-->position to add,
    4-->number of elements to remove,
    1021,2341,5432,7890-->elements to be added */
console.log(num)
let deletedValues=num.splice(2,4,1021,2341,5432,7890) // returns newly added values
console.log(deletedValues) //[ 1021, 2341, 5432, 7890 ]

/*Slice out a piece from an array .it creates a new array
let num1=[551,22,3,14,5,6,7,8,229]
new_num=num1.slice(2) //new_num new array is created from index 2 to end */
console.log(new_num)