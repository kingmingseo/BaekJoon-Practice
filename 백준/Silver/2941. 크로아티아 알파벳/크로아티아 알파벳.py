import sys
input = sys.stdin.readline

data = ['c=','c-','dz=','d-','lj','nj','s=','z=']

word = input().rstrip()

for i in data:

    word = word.replace(i,'*')

    
print(len(word))