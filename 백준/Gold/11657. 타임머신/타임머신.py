import sys
input = sys.stdin.readline

N, M = map(int,input().split())
edge = []
INF = sys.maxsize
distance = [INF for _ in range(N+1)]

for _ in range(M):
    A, B, C = map(int,input().split())
    edge.append((A,B,C))

def func(start):
    distance[start] = 0
    for i in range(N):
        for j in range(M):
            cur_node = edge[j][0]
            end_node = edge[j][1]
            weight = edge[j][2]


            if distance[cur_node] != INF and distance[end_node] > distance[cur_node] + weight:
                distance[end_node] = distance[cur_node] + weight

                if i == N-1:
                    return False

    return True

flag = func(1)

if flag == False:
    print(-1)

else:
    for i in range(2,N+1):
        if distance[i] == INF:
            print(-1)
        else:
            print(distance[i])