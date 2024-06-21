/*Given an array of N integers, and an integer K, find the number of pairs of elements in the array whose sum is equal to K.
N = 4, K = 6
arr[] = {1, 5, 7, 1}
Output: 2
Explanation: 
arr[0] + arr[1] = 1 + 5 = 6 
and arr[1] + arr[3] = 5 + 1 = 6. */
arr=[1,5,7,1,2,3]
let count=0
for(i=0;i<arr.length;i++)
    {
        //console.log(arr[i])
        for(j=i+1;j<arr.length;j++)
        {
            //console.log(arr[j])
            if(arr[i]+arr[j]==6)
                {
                    console.log(arr[i],arr[j])
                    count++
                }
        }
    }
    console.log("the number of pairs= "+count)