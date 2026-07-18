class Solution {
    public int solution(int a, int b) {
        int answer = 0;
        int temp1 = Integer.parseInt(Integer.toString(a)+Integer.toString(b));
        int temp2 = Integer.parseInt(Integer.toString(b)+Integer.toString(a));
        
        if(temp1<temp2){
            return temp2;
        }
        else{
            return temp1;
        }
        
    }
}