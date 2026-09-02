def solution(s):
    answer = -1
    stack = []
    
    for letter in s:
        if(len(stack) == 0):
            stack.append(letter)
        elif(stack[len(stack)-1] == letter):
            stack.pop()
        else : 
            stack.append(letter)
            
    if(len(stack) == 0):
        return 1
    return 0
    cbbbc