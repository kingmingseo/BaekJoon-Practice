import java.util.*;

class Solution {
    public int[] solution(int[] answers) {
        String math1 = "12345";
        String math2 = "21232425";
        String math3 = "3311224455";
     
        int[] scores = new int[3];
        
        for(int i =0; i<answers.length; i++){
            int NowNumber = answers[i];
            
            if(Character.getNumericValue(math1.charAt(i%math1.length())) == NowNumber){
                scores[0] += 1;
            }
            if(Character.getNumericValue(math2.charAt(i%math2.length())) == NowNumber){
                scores[1] += 1;
            }
            if(Character.getNumericValue(math3.charAt(i%math3.length())) == NowNumber){
                scores[2] += 1;
            }
        }
        
        int maxScore = scores[0];

        for (int i = 0; i < scores.length; i++) {
            if (scores[i] > maxScore) {
                maxScore = scores[i];
            }
        }
        
        ArrayList<Integer> answer = new ArrayList<>();

        for (int i = 0; i < scores.length; i++) {
            if (scores[i] == maxScore) {
                answer.add(i+1);
            }
        }
        
         return answer.stream().mapToInt(Integer::intValue).toArray();
       
    }

}