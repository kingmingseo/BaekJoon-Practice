import sys
input = sys.stdin.readline

C = int(input())
for _ in range(C):
    temp = list(map(int,input().split()))
    total = 0
    for i in range(1,len(temp)):
        total = total + temp[i]

    avg = total // temp[0]
    over = 0

    for i in range(1,len(temp)):
        if temp[i] > avg:
            over = over + 1

    print("%.3f" %(over / temp[0] * 100) +"%")