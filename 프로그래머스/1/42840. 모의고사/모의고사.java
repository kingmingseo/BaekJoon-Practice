import java.util.*;

class Solution {
    public int[] solution(int[] answers) {
        int[] answer = {};
        int[] math1 = {1,2,3,4,5};
        int[] math2 = {2,1,2,3,2,4,2,5};
        int[] math3 = {3,3,1,1,2,2,4,4,5,5};
        
        int[] scores = {0,0,0};
        
        //정답 체크
        for(int i =0; i< answers.length; i++){
            int nowNumber = answers[i];
            
            if(nowNumber == math1[i%math1.length]){
                scores[0] +=1;
            }
            if(nowNumber == math2[i%math2.length]){
                scores[1] +=1;
            }
            if(nowNumber == math3[i%math3.length]){
                scores[2] +=1;
            }
        }
        
        //최대 값 체크
        int maxScore = Arrays.stream(scores).max().getAsInt();
        ArrayList<Integer> answerData = new ArrayList<>();
        
        for(int i =0; i< scores.length; i++){
            if(maxScore == scores[i]){
                answerData.add(i+1);
            }
        }
        
         
        return answerData.stream().mapToInt(Integer::intValue).toArray();
    }
}