import sys
input = sys.stdin.readline

S = input()
ans = 0

for letter in S :
    if letter in 'ABC':
        ans = ans + 3
    elif letter in 'DEF':
        ans = ans + 4
    elif letter in 'GHI':
        ans = ans + 5
    elif letter in 'JKL':
        ans = ans + 6
    elif letter in 'MNO':
        ans = ans + 7
    elif letter in 'PQRS':
        ans = ans + 8
    elif letter in 'TUV':
        ans = ans + 9
    elif letter in 'WXYZ':
        ans = ans + 10

print(ans)