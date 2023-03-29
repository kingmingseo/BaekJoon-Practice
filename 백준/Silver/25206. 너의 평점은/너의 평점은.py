import sys
input = sys.stdin.readline

learn_point = 0
total_grade  = 0
for _ in range (20):
    name, point, grade = input().split()
    point = float(point)
    if grade=='P':
        continue
    else:
        total_grade = total_grade + point
        if grade == 'A+':
            learn_point = learn_point + (point * 4.5)
        elif grade == 'A0':
            learn_point = learn_point + (point * 4.0)
        elif grade == 'B+':
            learn_point = learn_point + (point * 3.5)
        elif grade == 'B0':
            learn_point = learn_point + (point * 3.0)
        elif grade == 'C+':
            learn_point = learn_point + (point * 2.5)
        elif grade == 'C0':
            learn_point = learn_point + (point * 2.0)
        elif grade == 'D+':
            learn_point = learn_point + (point * 1.5)
        elif grade == 'D0':
            learn_point = learn_point + (point * 1.0)
        elif grade == 'F':
            learn_point = learn_point + (point * 0.0)


print(learn_point / total_grade)
