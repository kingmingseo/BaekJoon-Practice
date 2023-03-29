import sys
input = sys.stdin.readline
INF = sys.maxsize
def func(start,N,M):
    distance[start] = 0
    for i in range(N):
        for j in range(M):
            cur_node = edge[j][0]
            end_node = edge[j][1]
            weight = edge[j][2]

            if  distance[end_node] > distance[cur_node] + weight:
                distance[end_node] = distance[cur_node] + weight

                if i == N - 1:
                    print("YES")
                    return

    print("NO")
    return


TC = int(input())
for _ in range(TC):
    edge = []
    N, M, W = map(int, input().split())
    distance = [INF for _ in range(N+1)]

    for _ in range(M):
        S, E, T = map(int,input().split())
        edge.append((S, E, T))
        edge.append((E, S, T))
    for _ in range(W):
        S, E, T = map(int,input().split())
        edge.append((S, E, -T))

    func(1, N, len(edge))
    

