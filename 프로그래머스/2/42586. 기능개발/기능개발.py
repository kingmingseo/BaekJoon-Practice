from collections import deque

def solution(progresses, speeds):
    answer = []
    progress_deque = deque(progresses)
    speed_deque = deque(speeds)
    
    while(len(progress_deque)>0):
        
        #기능 개발
        for i in range(0, len(progress_deque)):
            progress_deque[i] += speed_deque[i]

        #하루의 끝에 배포할 기능 체크
        count = 0
        loop_count = len(progress_deque)

        for i in range(0, loop_count):
            if(progress_deque[0] >= 100):
                progress_deque.popleft()
                speed_deque.popleft()
                count+=1
            elif (count != 0 ) : 
                answer.append(count)
                count = 0
        
        if(count !=0):
            answer.append(count)
        
        
    return answer