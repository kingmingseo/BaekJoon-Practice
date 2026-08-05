import java.util.*;
class Solution {
 
    public int solution(int[][] board, int[] moves) {
               
        List<Integer> result = new ArrayList<>();
        int answer = 0;
        //크레인을 한번씩 내려보기
        for(int move : moves){
            
            //내린 위치로 한 칸씩 내려가보기
            for(int i=0; i<board.length; i++){
                
                //인형이 있고
                if(board[i][move-1] != 0){
                    
                    //현재 결과가 안비어있고 뽑은인형이 마지막 뽑은인형과 같을때 
                    if(result.size() > 0 &&result.get(result.size()-1)==board[i][move-1]){
                        result.remove(result.size()-1);   
                        answer+=2;
                    }
                    
                    //인형을 뽑기만 한 경우 
                    else{
                         result.add(board[i][move-1]);
                    }
                    board[i][move-1]=0;
                    break;
                 
                }
                
            }
        }
        return answer;
    }
    

}