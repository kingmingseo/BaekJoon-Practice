let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n').map(data => data.replace('\r', ''))
input = input.map(data => data.split(' ').map(Number))

let [V, E] = input[0]
let startPoint = input[1]
let data = input.slice(2)

//그래프 만들기
let graph = Array.from({ length: V + 1 }, () => [])

for (let [startNode, endNode, length] of data) {
  graph[startNode].push([endNode, length])
}

//최소힙 만들기
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
    if (h.length === 1) return h.pop();

    let last = h.pop()
    let top = h[0]
    h[0] = last

    let i = 0
    while (true) {
      let l = i * 2 + 1
      let r = i * 2 + 2
      let s = i

      if (h.length > l && h[l][0] < h[s][0]) s = l
      if (h.length > r && h[r][0] < h[s][0]) s = r
      if (i === s) break

      [h[i], h[s]] = [h[s], h[i]]
      i = s
    }

    return top
  }
}

let dist = Array(V + 1).fill(Infinity)
dist[startPoint] = 0

let pq = new MinHeap()
pq.push([0,startPoint])

while(pq.size()){
  let [currentCost , node] = pq.pop()

  if(currentCost > dist[node]) continue
  
  for(let [next, weight] of graph[node]){
    let newCost = currentCost + weight

    if (newCost < dist[next]){
      dist[next] = newCost
      pq.push([newCost,next])
    }
  }
}

let answer = ''
for (let i = 1; i <= V; i++) {
  answer += (dist[i] === Infinity ? "INF" : dist[i]) + '\n'
}
console.log(answer.trim())
