import sys
input = sys.stdin.readline

temp  = "abcdefghijklmnopqrstuvwxyz"
S = input().rstrip()

for i in temp:
    if i in S :
        print(S.index(i), end= ' ')
    else:
        print(-1, end= ' ')