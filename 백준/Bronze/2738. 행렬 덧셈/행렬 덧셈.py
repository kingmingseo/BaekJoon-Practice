import sys
input = sys.stdin.readline

N, M =map(int,input().split())
mat1 = []
mat2 = []
result = [[0 for _ in range(M)] for _ in range(N)]


for _ in range(N):
    mat1.append(list(map(int,input().split())))

for _ in range(N):
     mat2.append(list(map(int,input().split())))


for i in range (N):
    for j in range(M):
        result[i][j] = mat1[i][j] + mat2[i][j]

for i in range(N):
    for j in range(M):
        print(result[i][j],end=' ')
    print()
