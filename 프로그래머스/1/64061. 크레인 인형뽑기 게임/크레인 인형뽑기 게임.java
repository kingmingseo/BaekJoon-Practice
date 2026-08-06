import java.util.*;
class Solution {
    public int solution(int[][] board, int[] moves) {
        int answer = 0;
        List<Integer> result = new ArrayList<>();
        
        //크레인 내려가는 위치
        for(int move : moves){
            
            //한층씩 내려가기
            for(int i=0; i<board.length; i++){
                
                // 집게에 잡힐 인형이 있고 
                if(board[i][move-1] != 0){
                    
                    //result 비어있지 않고 이전이랑 같은경우
                    if( result.size() > 0 && result.get(result.size()-1)== board[i][move-1] ){
                        result.remove(result.size()-1);
                        board[i][move-1] =0;
                        answer+=2;
                        break;
                    }
                    
                   
                    result.add(board[i][move-1]);
                    board[i][move-1] = 0;
                    break;
                    
                }
            }
        }
        return answer;
    }
}