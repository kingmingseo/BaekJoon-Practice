import sys
input = sys.stdin.readline

King, Queen, Rook, Bishop, Knight, Pone = map(int,input().split())

if King != 1 :
    print(1-King, end=' ')
else:
    print(0, end=' ')

if Queen != 1:
    print(1-Queen, end=' ')
else:
    print(0, end=' ')

if Rook != 2 :
    print(2 - Rook, end=' ')
else:
    print(0, end=' ')

if Bishop != 2:
    print(2 - Bishop, end=' ')
else:
    print(0, end=' ')

if Knight != 2 :
    print(2 - Knight, end=' ')
else:
    print(0, end=' ')

if Pone != 8:
    print(8- Pone, end=' ')
else:
    print(0, end=' ')