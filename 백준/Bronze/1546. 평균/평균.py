import sys
input = sys.stdin.readline

N = int(input())
data = list(map(int,input().split()))
total = 0
max_value = max(data)

for score in data:
    total = total + score / max_value * 100

print(total / N)