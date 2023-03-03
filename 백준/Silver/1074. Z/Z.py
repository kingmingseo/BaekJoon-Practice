import sys
input = sys.stdin.readline

def find_order(n, r, c):

    if n == 1:
        return find_q(n,r,c)

    temp = find_q(n,r,c)

    if temp == 0:
        return find_order(n-1, r ,c)

    elif temp == 1:
        return 2 **(2 * (n-1)) + find_order(n-1, r , c- 2 ** (n-1))

    elif temp == 2:
        return 2 **(2 * (n-1)) * 2 + find_order(n-1, r - 2 ** (n - 1), c)

    elif temp == 3:
        return 2 **(2 * (n-1)) * 3 + find_order(n-1, r- 2 ** (n - 1), c - 2 ** (n - 1))


def find_q(n, r, c):
    num = 2 ** (n-1)

    if num > r and num > c :
        return 0

    elif num > r and num <= c :
        return 1

    elif num <= r and num > c :
        return 2

    elif num <= r and num <= c :
        return 3


n , r , c = map(int,input().split())

print(find_order(n,r,c))