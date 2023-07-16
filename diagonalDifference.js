function diagonalDifference(){
    let arr  =[ [1,2,3],
                [4,5,6],
                [9,8,9]]
   console.log(getLeftSum(arr)-getRightSum(arr))
}
function getLeftSum(arr){
    let sum = 0
    for(let i = 0 ; i < arr.length; i++){
        for(let j = 0 ; j < arr[0].length ; j++){
            if(i==j){
                sum+=arr[i][j]
            }
        }
    }
    console.log(sum);
    return sum
}
function getRightSum(arr){
    let sum = 0
    for(let i = 0 ; i < arr.length; i++){
        for(let j = 0 ; j < arr[0].length ; j++){
            if((i+j)==(arr[0].length-1)){
                console.log(arr[i][j])
                sum+=arr[i][j]
            }
        }
    }
    console.log(sum);
    return sum
}
diagonalDifference()