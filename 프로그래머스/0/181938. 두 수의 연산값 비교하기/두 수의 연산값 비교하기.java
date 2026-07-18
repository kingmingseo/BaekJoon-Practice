class Solution {
    public int solution(int a, int b) {
        int temp1 = Integer.parseInt(Integer.toString(a) + Integer.toString(b));
        int temp2 = 2 * a * b;
        
        if(temp1 < temp2){
            return temp2;
        }
        else{
            return temp1;
        }
    }
}