let [s, e] = require('fs').readFileSync('dev/stdin').toString().trim().split(' ').map(Number)


class MinHeap {
    constructor() {
        this.h = []
    }

    push(item) {
        const h = this.h
        let i = h.length - 1
        h.push(item)

        while (i > 0) {
            let p = Math.floor((i - 1) / 2);

            if (h[p][0] <= h[i][0]) break
            [h[p], h[i]] = [h[i], h[p]]

            i = p
        }
    }

    pop() {
        const h = this.h
        if (h.length === 1) return h.pop()

        let last = h.pop()
        let top = h[0]
        h[0] = last

        let i = 0
        while (true) {
            let l = i * 2 + 1
            let r = i * 2 + 2
            let s = i

            if (l < h.length && h[l][0] < h[s][0]) s = l
            if (r < h.length && h[r][0] < h[s][0]) s = r
            if (s === i) break

            [h[i], h[s]] = [h[s], h[i]]
            i = s
        }

        return top
    }

    size() {
        return this.h.length
    }
}

let pq = new MinHeap()
pq.push([0, s])
let distance = Array(100001).fill(Infinity)

distance[s] = 0

while (pq.size()) {
    let [length, node] = pq.pop()
    if (length > distance[node]) continue

    let canGoList = [node + 1, node - 1, node * 2]

    for (let i = 0; i < 3; i++) {
        let nextNode = canGoList[i]
        if (nextNode > 100000 || nextNode < 0) continue
        let newLength = length
        if (i !== 2) newLength = newLength + 1

        if (distance[nextNode] > newLength) {
            distance[nextNode] = newLength
            pq.push([newLength, nextNode])
        }

    }
}

console.log(distance[e])