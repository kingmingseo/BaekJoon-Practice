import sys
input = sys.stdin.readline

N = int(input())
data = list(map(int,input().split()))
search = int(input())
answer = 0

for search_data in data:
    if search_data == search:
        answer = answer + 1

print(answer)