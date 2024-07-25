let [N, M] = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
N = Number(N);
let dict = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
};
let total =0;
let answer = []

for (i = 0; i < M.length; i++) {
  answer.push(dict[M[i]])
}

for(i=0; i<answer.length; i++){
  let r = 31**i
  total += (Number(answer[i])*r) % 1234567891
}

console.log(total)