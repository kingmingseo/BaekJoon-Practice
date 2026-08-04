import java.util.*;

class Solution {
    public String solution(String s, int n) {
        String upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ";
        String lowerCase = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
        
        String answer = "";
        
        for(int i =0; i<s.length(); i++){
            char nowLetter = s.charAt(i);
            int index;
            if(nowLetter == ' ') answer += ' ';
            //1. 대소문자 구분후 인덱스 찾기
            else if(Character.isUpperCase(nowLetter)){
                index = upperCase.indexOf(nowLetter);
                
                answer += String.valueOf(upperCase.charAt(index+n));
            }
            else{
                index = lowerCase.indexOf(nowLetter);
                answer += String.valueOf(lowerCase.charAt(index+n));
            }
        
        }
                                         
        return answer;
    }
    
}
