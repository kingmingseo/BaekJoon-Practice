import java.util.*;

class Solution {
    public int solution(int[] num_list) {
        int A = num_list[0];
        int B = num_list[0];
        
        for(int i =1; i<num_list.length; i++){
            A = A * num_list[i];
            B += num_list[i];
        }
        
        System.out.println(A);
        System.out.println(B);
        return A < (int)Math.pow(B,2) ? 1 : 0;
    }
}