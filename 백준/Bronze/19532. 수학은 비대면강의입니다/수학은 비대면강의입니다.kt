import java.util.*
fun process(a:Int,b:Int,c:Int,d:Int,e:Int,f:Int){
    for (i in -999.. 1001){
        for(j in -999..1001){
            if (a * i + b * j == c && d * i + e * j == f ){
                print(i)
                print(" ")
                print(j)

            }
        }
    }
}
fun main(args: Array<String>) = with(Scanner(System.`in`)) {
    var a = nextInt()
    var b = nextInt()
    var c = nextInt()
    var d = nextInt()
    var e = nextInt()
    var f = nextInt()
    process(a,b,c,d,e,f)
}



