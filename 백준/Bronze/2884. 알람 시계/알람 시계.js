const [hour, minute] = require('fs').readFileSync('dev/stdin').toString().trim().split(' ');

/* 조건1 : 45분 일찍 설정하면 시간이 24-1 되고 분은 60-x 해야하는 경우 */
if (minute - 45 < 0 && hour - 1 < 0) {
  console.log(23, 60 + (minute - 45))
}
/* 조건2 : 45분 일찍 설정하면 시간은 1개 빼고 분은 60 - x 해야하는 경우 */
else if (minute - 45 < 0) {
  console.log(hour - 1, 60 + (minute - 45))
}
/* 조건3 : 그냥 45분 일찍 설정하면 되는 경우 */
else {
  console.log(hour, minute - 45)
}
