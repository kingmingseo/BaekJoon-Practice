let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
let [temp1, n, ...arr] = input;
let [length, width, height] = temp1.split(' ').map(Number);
let cubes = new Array(20).fill(0)

for (let i=0; i<n; i++){
    let a = Number(arr[i].split(' ')[0]);
    let b = Number(arr[i].split(' ')[1]);
    cubes[a] = b
}


function nearestSquare(size) {
    let i = 1;
    while (2 ** i <= size) {
        i += 1;
    }
    return i - 1;
}

let size = 19;
size = nearestSquare(length);
size = Math.min(size, nearestSquare(height));
size = Math.min(size, nearestSquare(width));

let res = 0;
let used = 0;

for (let i = size; i >= 0; i--) {
    used *= 8;
    cur = 2 ** i;

    let required = parseInt(length / cur) * parseInt(height / cur) * parseInt(width / cur) - used;

    let usage = Math.min(required, cubes[i]);
    res += usage;
    used += usage;
}

if (used == length * width * height) console.log(res);
else console.log(-1);
