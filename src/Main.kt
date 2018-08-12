import kotlin.browser.document
import kotlin.browser.window

fun main(args: Array<String>) {
    val num = 10
    val root = document.getElementById("root")

    val main = document.createElement("div")
    val rootHeader = document.createElement("p")
    val b1 = document.createElement("button")

    main.textContent = "요"
    rootHeader.textContent = num.toString()
    b1.textContent = "눌러염"

    b1.addEventListener("click", {
        window.alert("캬컄캬")
    })

    main.appendChild(rootHeader)
    main.appendChild(b1)
    root!!.appendChild(main)

}