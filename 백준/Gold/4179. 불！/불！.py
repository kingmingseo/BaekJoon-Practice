import sys
input = sys.stdin.readline
from collections import deque
import copy
def BFS(start_point):

    while start_point:
        x, y = start_point.popleft()
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]

            if 0 <= nx < R and 0 <= ny < C:
                if array[nx][ny] == '.':
                    start_point.append((nx,ny))
                    array[nx][ny] = array[x][y] + 1
def BFS2(start_point):

    while start_point:
        x, y = start_point.popleft()
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]

            if 0 <= nx < R and 0 <= ny < C:
                if array2[nx][ny] == '.':

                    if array[nx][ny] == '.' or array[nx][ny] > array2[x][y] + 1:
                        start_point.append((nx, ny))
                        array2[nx][ny] = array2[x][y] + 1

            else:
                result.append(array2[x][y])
                return


array = []
fire = deque()
jihun = deque()
result = []
dx = [1,0,-1,0]
dy = [0,1,0,-1]

R , C = map(int,input().split())

for _ in range(R):
    array.append(list(input().rstrip()))

array2 = copy.deepcopy(array)

for i in range(R):
    for j in range(C):
        if array[i][j] == 'F':
            array[i][j] = 0
            fire.append((i ,j))

for i in range(R):
    for j in range(C):
        if array2[i][j] == 'J':
            array2[i][j] = 0
            jihun.append((i ,j))

BFS(fire)
BFS2(jihun)


if not result:
    print("IMPOSSIBLE")
else:
    print(result[0]+1)
