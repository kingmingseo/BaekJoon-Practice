function solution(my_string, overwrite_string, s) {
    var answer = '';
    let word1 = my_string.slice(0,s);
    let word2 = my_string.slice(overwrite_string.length+s,my_string.length)
    answer = word1 + overwrite_string + word2
    return answer;
}