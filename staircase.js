function staircase(n) {
    // Write your code here
            for (let i = 0; i < n; i++) {
                let str = ''
                for (let j = 0; j < n; j++) {
                    if((n-j-1)<=i){
                        str+='#'
                    }
                    else{
                        str+=' '
                    } 
                }
                console.log(str)
            }
}
staircase(5)