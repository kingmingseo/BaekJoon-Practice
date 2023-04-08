import sys
input = sys.stdin.readline

def func(arr):
    for i in range(N):
        for j in range(i+1, N):
            if arr[i] > arr[j]:
                temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp






N = int(input())
data = []
for _ in range(N):
    data.append(int(input()))

func(data)

for i in range(N):
    print(data[i])



