let input =require('fs').readFileSync('dev/stdin').toString()
let answer =''
for(let i=1; i<10; i++){
    answer += `${Number(input)} * ${i} = ${Number(input)*i}\n`
}

console.log(answer.trim())