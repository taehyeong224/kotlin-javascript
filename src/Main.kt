import kotlin.browser.document
import kotlin.browser.window

fun main(args: Array<String>) {
    val message = "Hello JavaScript!"
    val num = 10
    val header = """
        <h1>Hello World</h1>
        <button id="b1">안녕</button>
        $num
    """.trimIndent()
    println(message)

    val root = document.getElementById("root")
    root!!.innerHTML = "<div>hi<div>"
    println(root)

    val rootHeader = document.getElementById("root-header")
    rootHeader!!.innerHTML = header
    println(rootHeader)

    val b1 = document.getElementById("b1")
    b1!!.addEventListener("click", {
        window.alert("캬컄캬")
    })
}