let [a,b] = require('fs').readFileSync('dev/stdin').toString().trim().split(' ')

a = a.split('').reverse().join('')
b = b.split('').reverse().join('')

console.log(Math.max(a,b))

