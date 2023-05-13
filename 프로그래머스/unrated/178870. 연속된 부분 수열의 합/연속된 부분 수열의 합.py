import sys
input = sys.stdin.readline

def solution(sequence, k):
    start = 0
    end = -1
    temp = 0
    answer =[99999999999,99999999999]
    while (end < len(sequence)+1):
        
        if temp == k :
            if start >= answer[0] and end - start == answer[1]-answer[0]:
                temp = temp - sequence[start]
                start = start + 1
                continue
            answer = []
            answer.append(start)
            answer.append(end)
            temp = temp - sequence[start]
            start = start +1

        elif temp > k :
            temp = temp - sequence[start]
            if start >= len(sequence):
                break
            start = start + 1


        elif temp < k :
            end = end + 1
            if end >= len(sequence):
                break
            temp = temp + sequence[end]



    return(answer)

print(solution([1, 1, 1, 2, 3, 4, 5],5))








