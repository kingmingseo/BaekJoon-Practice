import java.util.*;

public class Solution {
    public int[] solution(int []arr) {
        int prevNum = arr[0];
        List<Integer> answer = new ArrayList<>();
        answer.add(prevNum);
        for(int i=1; i<arr.length; i++){
            if(prevNum == arr[i]){
                continue;
            }
            
            answer.add(arr[i]);
            prevNum = arr[i];
        }
        
        
        int[] array = answer.stream().mapToInt(Integer::intValue).toArray();
        
        return array;
    }
}