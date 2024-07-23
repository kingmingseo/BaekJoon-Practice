let [N,Tshirt,temp1] = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
N = Number(N)
Tshirt = Tshirt.split(' ').map(Number);
let [T,P] = temp1.split(' ').map(Number);

let shirt = 0;

Tshirt.forEach(element => {
  shirt+= Math.ceil(element/T)
});

let pen1 = Math.floor(N/P);
let pen2 = N%P
console.log(shirt)
console.log(pen1,pen2)