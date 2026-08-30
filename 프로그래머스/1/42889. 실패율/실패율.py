def solution(N, stages):
    data = {}
    for number in range(1,N+1):
        data[number] = 0
        
    for number in stages:
        if number not in data:
            continue
        data[number] = data.get(number,0) + 1
    
    ratioNum = len(stages)
    
    for dicKey in data.keys():
        peopleCount = data[dicKey]
        
        if(ratioNum ==0):
            data[dicKey] = 0
            
        else:
            data[dicKey] = peopleCount/ratioNum
            ratioNum = ratioNum - peopleCount
    
    data = sorted(data, key=lambda key: (-data[key], key))
    print(data)
    return data


