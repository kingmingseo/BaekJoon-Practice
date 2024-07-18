let [N, arr] = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
N = Number(N);
arr = arr.split(' ').map(Number);
arr = arr.reverse();

let data = [0];
function getLowerBound(arr, start, end, target) {
    let result = 0;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] < target) {
            result = mid;
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return result;
}


for (let i = 0; i < arr.length; i++) {
    let upperBound = getLowerBound(data, 0, data.length -1, arr[i]);
    if (data[upperBound] > data[data.length - 1]) {
        data.push(arr[i]);
    } else {
        data[upperBound+1] = arr[i];
    }

}

console.log(arr.length - (data.length -1))
