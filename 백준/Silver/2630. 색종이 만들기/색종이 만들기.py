import sys
input = sys.stdin.readline
def cut (x, y, N) :

    first_color = array[x][y]
    global result
    for i in range (x, x + N):
       for j in range(y, y + N):
            if first_color != array[i][j]:
                cut(x, y , N//2)
                cut(x, y + N//2, N//2)
                cut(x + N //2 , y , N//2)
                cut(x + N // 2, y + N//2, N // 2)
                return

    if first_color == 0:
        result.append(0)
    else:
        result.append(1)


n = int(input())
array = []
result = []
for i in range(n):
    array.append(list(map(int,input().split())))


cut(0,0,n)
print(result.count(0))
print(result.count(1))
