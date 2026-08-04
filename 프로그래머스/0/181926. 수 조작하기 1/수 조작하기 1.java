class Solution {
    public int solution(int n, String data) {
        int answer = 0;
        String[] control = data.split("");
        for(String letter : control){
            if(letter.equals("w")){
                n+=1;
            }
            else if (letter.equals("s")){
                n-=1;
            }
            else if (letter.equals("d")){
                n+=10;
            }
            else{
                n-=10;
            }
        }
        return n;
    }
}