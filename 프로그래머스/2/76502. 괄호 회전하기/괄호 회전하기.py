from collections import deque

def solution(s):
    answer = 0 
    s = deque(s)
    
    for i in range(len(s)):

        if checkString(s):

            answer+=1
        
        temp = s.popleft()
        s.append(temp)
        
        
        
    return answer


def checkString(s):
    data = []
    
    for i in range(0,len(s)) :
        if s[i] in ["]","}",")"] and i == 0:
            return False
        
        if s[i] in ["{","(","["]:
            data.append(s[i])
        
        elif(len(data) > 0):
            if(s[i] == "}" and data[len(data)-1] == "{"):
                data.pop()
            elif(s[i] == ")" and data[len(data)-1] == "("):
                data.pop()
            elif(s[i] == "]" and data[len(data)-1] == "["):
                data.pop()
                
    
    if len(data) >0 :
        return False
    
    return True
        