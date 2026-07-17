import java.util.List;
import java.util.ArrayList;
import java.util.stream.Collectors;

class Solution {
    public int[] solution(int[] numbers) {
        int[] answer = {};
        
        List<Integer> candidate = new ArrayList<>();
        
        for(int i=0; i<numbers.length-1; i++){
            for(int j=i+1; j<numbers.length; j++){
                candidate.add(numbers[i]+numbers[j]);
            }
        }
        
        List<Integer> hashTemp = candidate.stream().distinct().sorted().collect(Collectors.toCollection(ArrayList::new));
        
        System.out.println(hashTemp);
        return hashTemp.stream()
                .mapToInt(Integer::intValue)
                .toArray();
    }
}

