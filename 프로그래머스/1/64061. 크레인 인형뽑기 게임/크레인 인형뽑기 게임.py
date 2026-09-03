#[1,5,3,5,1,2,1,4]
def solution(board, moves):
    score = 0
    stack = []

    for move in moves:
        move = move -1 
        
        for floor in range (0,len(board)):
            
            if (board[floor][move]) != 0 :
                catch_doll = board[floor][move]
                board[floor][move] = 0
                    
                if(len(stack) == 0 or catch_doll != stack[-1]):
                    stack.append(catch_doll)

                elif(catch_doll == stack[-1]):
                    stack.pop()
                    score+=2
                    
                break
                
        
        
    return score