import sys
input = sys.stdin.readline

N, M = input().split()
ans1 ,ans2 = '',''

for i in range (len(N) - 1  , -1 , -1) :
    ans1 = ans1 + N[i]

for i in range (len(M) - 1  , -1 , -1) :
    ans2 = ans2 + M[i]

print(max((int(ans2)),int(ans1)))
