
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    let appleCount = 0;
    let orangeCount = 0;

    //counting apples
    for(let apple of apples){
        let pos =a+Number(apple)
        if(pos>=s && pos<=t){
            appleCount++
        }
    }
    //counting oranges
    for(let orange of oranges){
        let pos =b+Number(orange)
        if(pos>=s && pos<=t){
            orangeCount++
        }
    }
    console.log(appleCount)
    console.log(orangeCount)
}
countApplesAndOranges(7,11,5,15,[-2,2,1],[5,-6])
// 7 11
// 5 15
// 3 2
// -2 2 1
// 5 -6