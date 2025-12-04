let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')
input = input.map(data => data.replace('\r', '').split(' ').map(Number))
let testCase = input.slice(1)
let nowRow = 0

class Queue {
    constructor() {
        this.tailIndex = 0
        this.headIndex = 0
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

    getLength() {
        return this.tailIndex - this.headIndex
    }
}



while (nowRow < testCase.length) {
    let i = testCase[nowRow][0]
    nowRow++
    let [startX, startY] = testCase[nowRow]
    nowRow++
    let [goalX, goalY] = testCase[nowRow]
    nowRow++

    console.log(bfs(startX, startY, goalX, goalY, i))


}


function bfs(x, y, targetX, targetY, i) {
    if(x===targetX && y===targetY) return 0
    let visited = Array.from({ length: i }, () => Array(i).fill(false))

    let queue = new Queue()

    queue.enqueue([x, y, 0])
    visited[x][y] = true

    while (queue.getLength() > 0) {
        let [nowX, nowY, count] = queue.dequeue()
        let canGoPosition = [[nowX + 2, nowY + 1], [nowX + 2, nowY - 1], [nowX + 1, nowY + 2], [nowX + 1, nowY - 2], [nowX - 1, nowY - 2], [nowX - 1, nowY + 2], [nowX - 2, nowY - 1], [nowX - 2, nowY + 1]]
        for (let [nextX, nextY] of canGoPosition) {
            if (nextX === targetX && nextY === targetY) return count + 1
            if (nextX < 0 || nextY < 0 || nextX >= i || nextY >= i) continue
            if (visited[nextX][nextY]) continue

            queue.enqueue([nextX, nextY, count + 1])
            visited[nextX][nextY] = true
        }
    }

}