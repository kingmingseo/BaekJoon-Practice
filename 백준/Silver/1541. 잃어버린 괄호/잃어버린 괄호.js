let input = require('fs').readFileSync('dev/stdin').toString().trim().split('-').map((a)=>{
    let newItem = a.split('+')
    return newItem.reduce((a,b)=>Number(a)+Number(b),0)
})

console.log(input.reduce((a,b)=>a-b))

