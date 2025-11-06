let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')
let ans = 0

for (let i = 1; i < input.length; i++) {
    let alreadyWord = []
    let prevWord = ''
    let flag = false

    for (let j = 0; j < input[i].length; j++) {
        let nowWord = input[i][j]

        if(prevWord === nowWord) continue //이전 단어랑 같은 단어인 경우

        if (alreadyWord.includes(nowWord)) { //이미 나온 단어가 또 나온경우
            flag = true
            break
        }
        if (prevWord !== nowWord) { //이전단어랑 지금 단어랑 다른 경우
            alreadyWord.push(nowWord)
        }
        prevWord = nowWord
    }

    if(flag===false){
        ans+=1
    }
}

console.log(ans)

