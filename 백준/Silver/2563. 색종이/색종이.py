import sys
input = sys.stdin.readline

paper = [[0 for _ in range (100)] for _ in range (100)]

color_paper = int(input())
answer = 0
for _ in range (color_paper):
    x, y = map(int,input().split())
    for i in range (y, y+10):
        for j in range (x, x+10):
            if paper[i][j] == 0 :
                paper[i][j] = 1
                answer = answer + 1

print(answer)