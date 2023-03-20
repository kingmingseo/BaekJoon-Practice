import sys
input = sys.stdin.readline

T = int(input())

for _ in range(T):
    N, M = input().split()
    N = int(N)

    for letter in M :
        print(letter * N, end='')
    print()