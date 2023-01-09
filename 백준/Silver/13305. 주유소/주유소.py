import sys
input= sys.stdin.readline

city=int(input())
dist=list(map(int,input().split()))
price=list(map(int,input().split()))
total=0
j=0
for i in range (0,city):
    min_price=min(price[0:i+1])
    if j==len(dist): break
    else:
        total=total+min_price*dist[j]
        j+=1

print(total)

