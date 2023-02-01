import sys
input = sys.stdin.readline

N , K = map(int,input().split())
data = list(map(int,input().split()))

start = 0
end = K

answer = -2147483648
temp = sum(data[start:end])

while (end < N+1):
    
    if (temp > answer):
        answer = temp
    if (end == N ):
        end = end + 1
        continue

    temp = temp - data[start] + data[end]
    start = start + 1
    end = end +1

print(answer)