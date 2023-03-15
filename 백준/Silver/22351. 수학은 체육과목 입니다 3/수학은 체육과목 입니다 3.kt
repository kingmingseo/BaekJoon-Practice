import java.util.*
import java.lang.*

fun process(input:String){
    for (i in 1..3){
        var start_str = input.substring(0 until i)
        var n = start_str.toInt()

        while (start_str.length < input.length) {
            n = n + 1
            start_str = start_str + n.toString()

        }
        if (input == start_str){
            print(input.substring(0 until i))
            print(' ')
            print(n)
            break

        }

    }
}
fun main(args: Array<String>) = with(Scanner(System.`in`)) {
    
    var input = nextLine()
    process(input)

}
