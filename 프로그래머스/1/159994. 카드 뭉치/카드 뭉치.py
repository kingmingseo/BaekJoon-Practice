from collections import deque

def solution(cards1, cards2, goal):
    goal = deque(goal)
    cards1 = deque(cards1)
    cards2 = deque(cards2)
    
    loop_count = len(goal)
    
    for i in range(0, loop_count):
        nowWord = goal[0]
        print(goal, cards1, cards2)
        #카드팩1번 체크 
        if(len(cards1)> 0 and cards1[0] == nowWord):
            cards1.popleft()
            goal.popleft()
            continue 
            
        elif(len(cards2)> 0 and cards2[0] == nowWord):
            cards2.popleft()
            goal.popleft()
       

    if (len(goal)==0):
        return "Yes"
    return "No"