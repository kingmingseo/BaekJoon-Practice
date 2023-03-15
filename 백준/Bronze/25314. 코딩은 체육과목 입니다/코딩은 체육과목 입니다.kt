import java.util.*

fun process (n:Int){
    var temp = n / 4
    for (i in 1..temp)
        print("long ")
    print("int")
}
fun main(args: Array<String>) = with(Scanner(System.`in`)) {
    var n = nextInt()
    process(n)
}





