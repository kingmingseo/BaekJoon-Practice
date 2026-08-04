import java.util.*;
import java.util.stream.*;

class Solution {
    public int[] solution(int[] num_list) {
        int last = num_list[num_list.length - 1];
        int previous = num_list[num_list.length - 2];

        List<Integer> data = Arrays.stream(num_list)
                                   .boxed()
                                   .collect(Collectors.toList());

        if (last > previous) {
            data.add(last - previous);
        } else {
            data.add(last * 2);
        }

        return data.stream()
                   .mapToInt(Integer::intValue)
                   .toArray();
    }
}