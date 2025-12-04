let [start, target] = require('fs').readFileSync('dev/stdin').toString().trim().split(' ').map(Number)

class Queue {
    constructor() {
        this.headIndex = 0
        this.tailIndex = 0
        this.items = {}
    }

    enqueue(item) {
        this.items[this.tailIndex] = item
        this.tailIndex++
    }

    dequeue() {
        const item = this.items[this.headIndex]
        delete this.items[this.headIndex]
        this.headIndex++
        return item
    }
    peek() {
        return this.items[this.headIndex]
    }
    getLength() {
        return this.tailIndex - this.headIndex
    }
}


function bfs(start, target) {
    let queue = new Queue()
    let visitied = Array(100001).fill(false)
    queue.enqueue([start, 0])
    visitied[start] = true

    while (queue.getLength() !== 0) {
        let [nowNum, count] = queue.dequeue()
        if (nowNum === target) return count
        if (nowNum < 0 || nowNum > 100000) continue
        let nextList = [nowNum + 1, nowNum - 1, nowNum * 2]

        for (let nextNode of nextList) {
            if (visitied[nextNode]) {
                continue
            }
            visitied[nextNode] = true
            queue.enqueue([nextNode, count + 1])
        }

    }
}



console.log(bfs(start, target))

