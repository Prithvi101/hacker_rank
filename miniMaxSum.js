
const arr = [1,2,3,4,5]

function miniMaxSum(arr) {
    // Write your code here
    let sum = 0;
    let max = Number.MIN_VALUE;
    let min = Number.MAX_VALUE
    for(let i = 0 ; i < arr.length ; i++){
        sum+=arr[i];
        if(arr[i]<min){
            min = arr[i];
        }
        if(arr[i]>max){
            max = arr[i];
        }
    }

    console.log((sum-max)+" "+(sum-min))



}
miniMaxSum(arr)