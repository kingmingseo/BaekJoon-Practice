import sys
input = sys.stdin.readline

T = int(input())
for _ in range (T):
    temp = input().rstrip()
    print(temp[0], end ='')
    print(temp[len(temp)-1])