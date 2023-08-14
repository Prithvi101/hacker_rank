const  arr = [-4, 3, -9, 0, 4, 1]
function plusMinus(arr) {
    // Write your code here
    let pos = 0;
    let neg = 0;
    let zero = 0;

    for (let i = 0; i < arr.length; i++) {
        if(arr[i]==0){
            zero++;
        }
        else if(arr[i]>0){
            pos++;
        }
        else{
            neg++;
        }
    }

    console.log((pos/arr.length).toFixed(6))
    console.log((zero/arr.length).toFixed(6))
    console.log((neg/arr.length).toFixed(6))

}
plusMinus(arr)