def solution(prices):
    answer = [0] * len(prices)

    for i in range(0,len(prices)):
        count = 1
        for j in range(i+1, len(prices)):
            if(prices[i]<= prices[j] and j != len(prices)-1):
                count+=1
                continue
            
            answer[i] = count
            break
            
            
        
    return answer