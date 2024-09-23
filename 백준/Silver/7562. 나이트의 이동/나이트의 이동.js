let input = require('fs')
    .readFileSync('dev/stdin')
    .toString()
    .trim()
    .split('\n')
    .map((data) => data.split(' ').map(Number));

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
        return this.tailIndex - this.headIndex;
    }
}

let totalTestCase = input.shift();
let line = 0;
let dx = [1, 1, -1, -1, 2, 2, -2, -2];
let dy = [2, -2, 2, -2, 1, -1, 1, -1];
while (line < input.length) {
    l = input[line++];
    let [startRow, startCol] = input[line++];
    [goalRow, goalCol] = input[line++];
    let visited = [];
    for (let i = 0; i < l; i++) {
        visited.push(new Array(l[0]).fill(false));
    }
    let answer = bfs(visited, startRow, startCol);
    console.log(answer);
}

function bfs(visited, row, col) {
    let queue = new Queue();
    visited[row][col] = true;
    queue.enqueue([row, col, 0]);
    let answer = 0;
    while (queue.getLength !== 0 ) {
        let [row, col, count] = queue.dequeue();

        if (goalRow === row && goalCol === col) {
            answer = count;
            break;
        }

        count += 1;
        for (let i = 0; i < 8; i++) {
            let nextRow = row + dx[i];
            let nextCol = col + dy[i];

            //체스판 안에 들어오고 방문을 하지 않은 경우
            if (nextRow >= 0 && nextRow < l && nextCol >= 0 && nextCol < l && !visited[nextRow][nextCol]) {
                visited[nextRow][nextCol] = true;
                queue.enqueue([nextRow, nextCol, count]);
            }
        }
    }

    return answer;
}
