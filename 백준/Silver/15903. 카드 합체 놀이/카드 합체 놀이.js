class MinHeap {
    constructor() {
        this.heap = [];
    }

    swap(indexA, indexB) {
        [this.heap[indexA], this.heap[indexB]] = [this.heap[indexB], this.heap[indexA]];
    }

    push(data) {
        this.heap.push(data);
        this.upHeap();
    }

    pop() {
        if (this.heap.length === 0) {
            return 0;
        }
        this.swap(0, this.heap.length - 1);
        const value = this.heap.pop();
        this.downHeap(0);
        return value;
    }

    upHeap() {
        let current = this.heap.length - 1;

        while (0 < current) {
            if (this.heap[Math.floor((current - 1) / 2)] > this.heap[current]) {
                this.swap(Math.floor((current - 1) / 2), current);
            } else {
                break;
            }
            current = Math.floor((current - 1) / 2);
        }
    }

    downHeap(idx) {
        let current = idx;
        while (current < this.heap.length) {
            //왼쪽 자식이 없으면 바로 종료
            if (!this.heap[current * 2 + 1]) {
                break;
            }
            //왼쪽 자식만 있는 경우
            if (!this.heap[current * 2 + 2]) {
                //왼쪽 자식이 더 작은경우
                if (this.heap[current * 2 + 1] < this.heap[current]) {
                    this.swap(current, current * 2 + 1);
                    current = current * 2 + 1;
                    continue;
                } else {
                    break;
                }
            }
            //왼쪽과 오른쪽 자식 둘다 있는 경우
            const nextChild =
                this.heap[current * 2 + 1] <= this.heap[current * 2 + 2] ? current * 2 + 1 : current * 2 + 2;

            if (this.heap[current] <= this.heap[nextChild]) {
                break;
            }
            this.swap(current, nextChild);
            current = nextChild;
        }
    }

    size() {
        return this.heap.length;
    }
}

let [a, b] = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

[n, m] = a.split(' ').map(BigInt);
arr = b.split(' ').map(BigInt);

let answer = BigInt(0);
let dataStorage = new MinHeap();

for (let i = 0; i < n; i++) {
    dataStorage.push(arr[i]);
}

for (let i = 0; i < m; i++) {
    let x = dataStorage.pop();

    let y = dataStorage.pop();

    dataStorage.push(x + y);
    dataStorage.push(x + y);
}

while (dataStorage.size() > 0) {
    answer += dataStorage.pop();
}
console.log(answer.toString());
