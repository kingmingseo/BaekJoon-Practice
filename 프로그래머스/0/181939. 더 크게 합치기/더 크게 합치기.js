function solution(a, b) {
    var answer = 0;
    a = String(a)
    b = String(b)
    return Math.max(Number(a+b),Number(b+a))
}