let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')

let data = []
for(let i=1; i<input.length; i++){
    let temp=input[i].split(' ')
    temp[0] = Number(temp[0])
    temp[1] = temp[1].replace('\r','')
    data.push(temp)
}

for(let i=0; i<data.length; i++){
    let output = ''
    for(let j=0; j<data[i][1].length; j++){
        output+= data[i][1][j].repeat(data[i][0])
    }
    console.log(output)
  
}




