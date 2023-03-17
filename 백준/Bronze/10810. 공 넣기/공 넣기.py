import sys
input = sys.stdin.readline

N , M = map(int,input().split())
data = [0 for _ in range(N+1)]
for _ in range(M):
    i, j ,k = map(int,input().split())
    for basket_number in range (i,j+1):
        data[basket_number] = k

for i in range(1,N+1):
    print(data[i], end= ' ')