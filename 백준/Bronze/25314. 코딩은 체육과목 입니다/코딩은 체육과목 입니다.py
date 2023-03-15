import sys
input = sys.stdin.readline

n = int(input())

loop = n // 4

for _ in range(loop):
    print("long", end=' ')
print("int")