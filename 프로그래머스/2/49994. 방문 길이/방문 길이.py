def solution(dirs):
    visited = []
    answer = 0;
    
    #테이블 템플릿 제작
    for i in range(11):
        visited.append([{},{},{},{},{},{},{},{},{},{},{},{}])
        
    x = 5
    y = 5
    
    
    #이동하면서 기록하기
    for moveLetter in dirs:
        
        start_x = x
        start_y = y
        
        #이동 하기+범위도 제한
        if(moveLetter == 'U' and y!=10):
            y+=1
        elif(moveLetter =="D" and y!=0):
            y-=1
        elif(moveLetter =="R" and x!=10):
            x+=1
        elif(moveLetter =="L" and x!=0):
            x-=1
        else:
            continue
        
        # 지나온 길인지 체크
        start = (start_x, start_y)
        end = (x, y)
        
        if start not in visited[x][y]:
        # 도착지 ← 출발지
            visited[x][y][start] = True

            # 반대 방향도 같은 길로 기록
            visited[start_x][start_y][end] = True

            answer += 1
        
    
    return answer



        
    