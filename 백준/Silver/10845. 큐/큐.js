let [n,...arr] = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
class Queue{
  constructor(){
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }

  enqueue(item){
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }

  dequeue(){
    const item = this.items[this.headIndex]
    if(!item){
      return -1
    }
    delete this.items[this.headIndex];
    this.headIndex++
    return item
  }

  front(){
    if(!this.items[this.headIndex]){
      return -1
    }
    return this.items[this.headIndex];
  }

  getLength(){
    return this.tailIndex-this.headIndex;
  }

  back(){
    if(!this.items[this.tailIndex-1]){
      return -1
    }
    return this.items[this.tailIndex-1];
  }

}

let queue = new Queue();
let answer ='';
for(let i=0; i<n; i++){
  let [order,number] = arr[i].replace('\r','').split(' ')

  if(order === 'push'){
    queue.enqueue(number)
  }
  else if(order === 'pop'){
    answer+=queue.dequeue()+'\n'
  }

  else if(order === 'size'){
    answer += queue.getLength()+'\n'
  
  }

  else if(order ==='back'){
    answer += queue.back() +'\n'
  }

  else if(order ==='front'){
    answer+= queue.front() + '\n'
  }

  else if(order ==='empty'){
    if(queue.getLength()===0){
      answer += 1 +'\n'
    }
    else{
      answer += 0 +'\n'
    }
  }
}

console.log(answer.trim())
