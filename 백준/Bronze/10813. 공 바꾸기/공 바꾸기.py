import sys
input = sys.stdin.readline
N, M = map(int,input().split())
basket = [i for i in range(1,N+1)]

for _ in range (M):
    basket_1, basket_2 = map(int,input().split())
    temp1 = basket[basket_2 - 1]
    temp2 = basket[basket_1 - 1]
    basket[basket_2 - 1] = temp2
    basket[basket_1 - 1] = temp1

print(*basket)
