import sys
input = sys.stdin.readline
N , M = map(int,input().split())
basket = [i for i in range(1,N+1)]
temp = []
for _ in range (M):
    start , end = map(int,input().split())

    for i in range(start , end + 1 ):
        temp.append(basket[i - 1])

    a = len(temp) - 1
    for i in range(start, end + 1 ):
        basket[i - 1] = temp[a]
        a = a - 1

print(*basket)





