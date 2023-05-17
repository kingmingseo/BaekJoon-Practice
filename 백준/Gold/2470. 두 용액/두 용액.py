import sys
input = sys.stdin.readline

n = int(input())
data = list(map(int,input().split()))
start = 0
end = n-1
data.sort()
temp = 2e+9+1
ans_start = 0
ans_end = 0

while start < end:
    hap = data[start] + data[end]
    if temp > abs(hap):
        temp = abs(hap)
        ans_start = start
        ans_end = end

    if hap < 0:
        start = start +1
    else:
        end = end -1

print(data[ans_start], data[ans_end])

