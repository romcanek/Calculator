let znamenkoPressed = false
let znamenkoDisabled = false
let dotDisabled = false

const init = () => {
    const output = document.getElementById("output")
    const numbers = document.getElementsByClassName("btn-number")
    const operations = document.getElementsByClassName("btn-operation")
    const equalSign = document.getElementById("eq")
    const floatDot = document.getElementById("dot")
    const piSign = document.getElementById("pi")
    const eSign = document.getElementById("e")
    const cSign = document.getElementById("c")

    // numbers clicked
    for (let n of numbers) {
        n.addEventListener("click", (e) => {
            if (output.innerText == "0")
                output.innerText = e.target.dataset.text;
            else {
                output.innerText = output.innerText + e.target.dataset.text
            }
            znamenkoDisabled = false
        })
    }
    // operations clicked
    for (let o of operations) {
        o.addEventListener("click", (e) => {
            if (znamenkoDisabled == false) {
                // osetreni zaporneho cisla
                if (e.target.dataset.text == "-" && output.innerText == "0") {
                    output.innerText = "-"
                    znamenkoDisabled = true
                    znamenkoPressed = true
                }
                else {
                    znamenkoPressed = true
                    znamenkoDisabled = true
                    output.innerText = output.innerText + e.target.dataset.text
                    console.log(e.target.dataset.text)
                }
                dotDisabled = false
            }
        })
    }
    // equal clicked
    equalSign.addEventListener("click", () => {
        output.innerText = eval(output.innerText)
    })
    // dot clicked
    floatDot.addEventListener("click", () => {
        if (dotDisabled == false) {
            output.innerText = output.innerText + "."
            dotDisabled = true
        }
    })
    // pi clicked
    piSign.addEventListener("click", () => {
        if (dotDisabled == false) {
            if (znamenkoPressed == false)
                output.innerText = "3.141592653589793238462643383279"
            else if (znamenkoPressed == true)
                output.innerText = output.innerText + "3.141592653589793238462643383279"
            dotDisabled = true
            znamenkoDisabled = false
        }

    })
    // e clicked
    eSign.addEventListener("click", () => {
        if (dotDisabled == false) {
            if (znamenkoPressed == false)
                output.innerText = "2.718281828459045235360287471352"
            else if (znamenkoPressed == true)
                output.innerText = output.innerText + "2.718281828459045235360287471352"
            dotDisabled = true
            znamenkoDisabled = false
        }
    })
    //c clicked
    cSign.addEventListener("click", () => {
        output.innerText = "0"
        znamenkoPressed = false
        dotDisabled = false
        znamenkoDisabled = false
    })
}

document.addEventListener("DOMContentLoaded", init)