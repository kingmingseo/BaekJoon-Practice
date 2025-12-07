let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n').map(data => data.replace('\r', '').split(' ').map(Number))
let data = input.slice(1)
let nowRow = 0
class MinHeap {
    constructor() {
        this.h = []
    }

    size() {
        return this.h.length
    }

    push(v) {
        const h = this.h
        h.push(v)
        let i = h.length - 1

        while (i > 0) {
            let p = Math.floor((i - 1) / 2)

            if (h[p][0] <= h[i][0]) break
            [h[p], h[i]] = [h[i], h[p]]

            i = p
        }
    }

    pop() {
        const h = this.h
        if (h.length === 1) return h.pop()

        let top = h[0]
        let last = h.pop()
        h[0] = last

        let i = 0
        while (true) {
            let s = i
            let l = i * 2 + 1
            let r = i * 2 + 2

            if (l < h.length && h[l][0] < h[s][0]) s = l
            if (r < h.length && h[r][0] < h[s][0]) s = r
            if (i === s) break

            [h[i], h[s]] = [h[s], h[i]]
            i = s
        }

        return top

    }
}


while (nowRow < data.length) {
    let [V, E, startPoint] = data[nowRow]
    nowRow++

    //그래프 만들기
    let graph = Array.from({ length: V + 1 }, () => [])
    for (let i = 0; i < E; i++) {
        let [start, end, time] = data[nowRow]
        graph[end].push([start, time])
        nowRow++
    }

    //거리 기록을 위한 배열 준비
    let distance = Array(V + 1).fill(Infinity)
    distance[startPoint] = 0
    //최소힙 사용준비
    let pq = new MinHeap()
    pq.push([0, startPoint])


    while (pq.size()) {
        let [currentCost, node] = pq.pop()

        if (currentCost > distance[node]) continue

        for (let [nextNode, weight] of graph[node]) {
            let newCost = weight + currentCost

            if (distance[nextNode] > newCost) {
                distance[nextNode] = newCost
                pq.push([newCost, nextNode])
            }
        }
    }

    let infectedCount = distance.filter(x => x !== Infinity).length
    let maxTime = Math.max(...distance.filter(x => x !== Infinity))

    console.log(infectedCount, maxTime)
}






