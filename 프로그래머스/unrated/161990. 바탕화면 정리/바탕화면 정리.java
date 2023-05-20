class Solution {
    public int[] solution(String[] wallpaper) {
        int[] answer = new int[4];
        int minimum_x = 999;
        int minimum_y = 999;
        int maximum_x = -1;
        int maximum_y = -1;
        boolean button = false;
        for (int i=0; i<wallpaper.length; i++){
            for (int j=0; j<wallpaper[i].length(); j++){
                if(wallpaper[i].charAt(j) == '#'){
                    if(i < minimum_x ){
                        minimum_x = i;
                    }
                    if (j < minimum_y ){
                        minimum_y = j;
                    }
                    if (i > maximum_x ){
                        maximum_x = i;
                    }
                    if (j > maximum_y ){
                        maximum_y = j;
                    }

                }

            }
        }
        answer[0]=minimum_x;
        answer[1]=minimum_y;
        answer[2]=maximum_x+1;
        answer[3]=maximum_y+1;

        return answer;
    }
}