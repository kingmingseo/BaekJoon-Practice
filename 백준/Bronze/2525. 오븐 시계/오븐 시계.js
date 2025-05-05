const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n').map((line) => line.trim())
const [hour, minute] = input[0].split(' ').map(num => Number(num))
const need = Number(input[1])
let addHour = Math.floor((minute + need) / 60)
let leaveMinute = (minute + need) % 60
if (addHour > 0) {
  if (hour + addHour > 23) {
    console.log(hour + addHour - 24, leaveMinute)
  }
  else {
    console.log(hour + addHour, leaveMinute)
  }
}
else {
  console.log(hour, minute + need)
}
