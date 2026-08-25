import java.util.*;

class Solution {
    public int[] solution(int[] numbers) {
        int[] answer = {};
        ArrayList<Integer> data = new ArrayList<>();
        
        for(int i=0; i<numbers.length - 1; i++){
            for(int j=i+1; j<numbers.length; j++){
                data.add(numbers[i]+numbers[j]);
            }
        }
        
        answer = data.stream().distinct().sorted().mapToInt(Integer::intValue).toArray();
        
        return answer;
    }
}