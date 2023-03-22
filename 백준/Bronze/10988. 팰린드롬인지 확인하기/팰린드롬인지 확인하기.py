import sys
input = sys.stdin.readline

S = input().rstrip()
flag = 1
for i in range (1,len(S)+1):
    if S[i-1] != S[-i]:
        flag = 0

print(flag)
