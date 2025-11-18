let input = Number(require('fs').readFileSync('dev/stdin').toString().trim())

let d = Array(1000001).fill(false)
d[0] = 0
d[1] = 1
d[2] = 2
for (let i = 3; i <= input; i++) {
    d[i] = (d[i - 2] + d[i - 1]) % 15746
}

console.log(d[input])
