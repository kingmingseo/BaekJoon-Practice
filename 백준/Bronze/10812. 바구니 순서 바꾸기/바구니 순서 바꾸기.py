import sys
input = sys.stdin.readline


n, m = map(int, input().split())
box = [i for i in range(1, n + 1)]

for _ in range(m):
  i,j,k = map(int, input().split())
  
  box = box[:i-1] + box[k-1:j] + box[i-1:k-1] + box[j:] # 바구니 앞부분 + 바구니 순서 바뀌는 부분(기준이 앞으로) + 기준이 앞으로 가고 나머지 부분 + 바구니 나머지  
  
for b in box:
  print(b, end=' ')

