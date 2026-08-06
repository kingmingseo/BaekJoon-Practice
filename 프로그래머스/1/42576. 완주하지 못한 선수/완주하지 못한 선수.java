import java.util.*;

class Solution {
    public String solution(String[] participant, String[] completion) {
        String answer = "";
        Map<String,Integer> map = new HashMap<>();
        
   
        //participant로 1씩 value값 키우기
        for(String data : participant){
            map.put(data, map.getOrDefault(data, 0) + 1);
        }
        
        //완주자 1씩 감소시키기
        for(String data : completion){
            map.put(data, map.getOrDefault(data, 0) - 1);
        }
        
    
        
        for (Map.Entry<String, Integer> entry : map.entrySet()) {
    if (entry.getValue() == 1) {
        answer+= entry.getKey();
    }
}
        return answer;
    }
}