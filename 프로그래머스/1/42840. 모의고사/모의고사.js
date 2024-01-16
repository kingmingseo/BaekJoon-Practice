function solution(answers) {
    let p1 = [1,2,3,4,5];
    let p2 = [2, 1, 2, 3, 2, 4, 2, 5];
    let p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let count =[0,0,0]
   
    for (let i =0; i< answers.length; i++){
        if(answers[i] === p1[i%p1.length]){
            count[0]+=1
        }
        if(answers[i] === p2[i%p2.length]){
            count[1]+=1
        }
        if(answers[i] === p3[i%p3.length]){
            count[2]+=1
        }
    }
    
    let maxValue = Math.max(...count);
    let answer = []
    
    for (let i=0; i<3; i++){
        if(maxValue === count[i]){
            answer.push(i+1);
        }
    }
    
    return answer;
}