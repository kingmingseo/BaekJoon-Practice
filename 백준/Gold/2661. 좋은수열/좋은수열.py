import sys
input = sys.stdin.readline

n = int(input())
ans = []
def func(k):
    for i in range(1, (k // 2) + 1):
        if ans[-i:] == ans[-2 * i:-i]:
            return -1

    if k == n :
        for i in range(n): print(ans[i], end = '')
        return 0

    for i in range(1,4):
        ans.append(i)
        if func(k+1) == 0 :
            return 0
        ans.pop()


func(0)