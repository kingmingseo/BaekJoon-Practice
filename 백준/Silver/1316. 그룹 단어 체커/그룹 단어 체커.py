import sys
input = sys.stdin.readline

n = int(input())
abc = 'abcdefghijklmnopqrstuvwxyz'
ans = 0

for _ in range(n):
    word = input().rstrip()
    data = []
    flag = False

    for letter in word :
        if len(data) == 0:
            data.append(letter)
        elif letter not in data or data[-1] == letter :
            data.append(letter)
        else:
            flag = True
            break
    if flag == False:
        ans += 1

print(ans)


