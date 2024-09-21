let [floor, start, goal, up, down] = require('fs')
    .readFileSync('dev/stdin')
    .toString()
    .trim()
    .split(' ')
    .map(Number);

class Queue {
    constructor() {
        this.items = {};
        this.headIndex = 0;
        this.tailIndex = 0;
    }

    enqueue(item) {
        this.items[this.tailIndex] = item;
        this.tailIndex++;
    }
    dequeue() {
        const deleteItem = this.items[this.headIndex];
        delete this.items[this.headIndex];
        this.headIndex++;
        return deleteItem;
    }
    getLength() {
        return this.headIndex - this.tailIndex;
    }
}

function bfs(visited, now) {
    let queue = new Queue();
    visited[now] = true;
    queue.enqueue(now);

    while (queue.getLength() !== 0) {
        let [nowFloor, count] = queue.dequeue();
        if (nowFloor === goal) {
            answer.push(count);
        }   
        count += 1;
        for (let item of temp) {
            let nextFloor = nowFloor + item;
            if (!visited[nextFloor] && nextFloor <= floor && nextFloor > 0) {
                visited[nextFloor] = true;
                queue.enqueue([nextFloor, count]);
            }
        }
    }
}

let visited = new Array(floor + 1).fill(false);
let temp = [up, -down];
let count = 0;
let answer = [];
bfs(visited, [start, count]);

if (answer.length === 0) {
    console.log('use the stairs');
} else {
    console.log(answer[0]);
}
