import sys
input = sys.stdin.readline

mat = []
max_col = 0
for _ in range(5):
    temp = list(input().rstrip())
    mat.append(temp)
    max_col = max(len(temp),max_col)

for i in range(max_col):
    for j in range(5):
        try:
            print(mat[j][i],end='')
        except:
            continue