let input = require('fs').readFileSync('dev/stdin').toString()
input = Number(input)

input >= 90 ? console.log('A') : input>=80 ? console.log('B') : input>=70 ? console.log('C') : input>=60 ? console.log('D') : console.log('F')

