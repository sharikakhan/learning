const calculateAverage=(a)=>{
    sum=0
    n=a.length
    for(i=0;i<n;i++)
        {
            sum=sum+a[i]
        }
return sum/n
}
let arr=[10,20,30,40]
let result=calculateAverage(arr)
console.log(result)