import sys
input = sys.stdin.readline

def func(start , mid, end , n):

    if n == 1:
        print(start , end)

        return
    else:
        func(start, end , mid , n-1)
        print(start , end)
    
        func(mid ,start , end , n-1)


n = int(input())
print(2**n -1)
func(1,2,3,n)

