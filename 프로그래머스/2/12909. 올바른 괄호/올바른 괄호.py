def solution(s):
    answer = []
    idx =0
    for i in range(len(s)) :
        if(i==0 and s[i] ==")"):
            return False
        
        
        if s[i] == "(":
            answer.append('(')
        elif s[i] ==")" and len(answer)>0:
            answer.pop()
        
    if(len(answer) == 0):
        return True
    
    return False