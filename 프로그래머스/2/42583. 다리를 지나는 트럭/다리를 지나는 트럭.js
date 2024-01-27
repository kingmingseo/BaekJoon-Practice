function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    let onBridge = [];

    while (truck_weights.length > 0 || onBridge.length > 0) {
        // 트럭이 다리에 추가될 수 있는지 확인
        if (
            truck_weights.length > 0 &&
            onBridge.length < bridge_length &&
            weight >= onBridge.reduce((acc, truck) => acc + truck[0], 0) + truck_weights[0]
        ) {
            let nowTruck = truck_weights.shift();
            onBridge.push([nowTruck, bridge_length]);
        }

        // 다리 위의 트럭 이동
        for (let i = 0; i < onBridge.length; i++) {
            onBridge[i][1] = onBridge[i][1] - 1;
        }

        // 다리를 건넌 트럭 제거
        while (onBridge.length > 0 && onBridge[0][1] === 0) {
            onBridge.shift();
        }

        // 시간 증가
        answer += 1;
    }

    return answer+1;
}
