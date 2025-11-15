let [N, K] = require('fs').readFileSync('dev/stdin').toString().trim().split(' ').map(Number)
let basket = []

let total = 0
for(let i=1; i<=K; i++){
    total +=i
}

if(total > N){
    console.log(-1)
}

else{
    if((N-total)%K ===0){
        console.log(K-1)
    }
    else{
        console.log(K)
    }
}


