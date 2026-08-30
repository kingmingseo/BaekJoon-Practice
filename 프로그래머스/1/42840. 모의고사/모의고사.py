def solution(answers):
    answer = []
    temp = [[1,2,3,4,5],[2,1,2,3,2,4,2,5],[3,3,1,1,2,2,4,4,5,5]]
    
    score = [0,0,0]
    
    for i in range(len(score)):
        score[i] = checkAnswer(temp[i],answers)
    
    maxNum = max(score)
    
    for i in range(len(score)):
        if(maxNum == score[i]):
            answer.append(i+1)

    return answer


def checkAnswer(person, answer):
    score = 0
    
    for i in range(len(answer)): 
        if person[i%len(person)] == answer[i]:
            score+=1
    return score
    