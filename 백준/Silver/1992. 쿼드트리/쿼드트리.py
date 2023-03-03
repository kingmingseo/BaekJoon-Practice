import sys
input = sys.stdin.readline

def cut (x, y, N) :

    number = array[x][y]
    global result
    for i in range (x, x + N):
       for j in range(y, y + N):
            if number != array[i][j]:
                print('(', end = "")
                cut(x, y , N//2)
                cut(x, y + N//2, N//2)
                cut(x + N //2 , y , N//2)
                cut(x + N // 2, y + N//2, N // 2)
                print(')',end="")
                return

    if number == '1':
        print(1,end="")
    else:
        print(0,end="")

n = int(input())
array = []
result = []
for i in range (n):
    array.append(list(input().rstrip()))
cut(0,0,n)
