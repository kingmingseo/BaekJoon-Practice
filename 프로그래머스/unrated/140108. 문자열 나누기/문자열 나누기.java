class Solution {
    public int solution(String s){
        int answer = 0;
        int same = 0;
        int diff = 0;
        char x = s.charAt(0);
        for (int i =0; i < s.length(); i++){
            if (same == diff){
                answer = answer + 1;
                same = 0;
                diff = 0;
                x = s.charAt(i);
            }
            if (x != s.charAt(i)){
                diff += 1;
            }
            else{
                same += 1;
            }
        }

        return answer;
    }
}