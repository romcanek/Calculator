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
    const cSign = document.getElementById("c")
    const gons = document.getElementsByClassName("btn-gon")
    const del = document.getElementById("del")

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
                }
                dotDisabled = false
            }
            else {
                alert("Teď nemůžeš použít znaménko")
            }
        })
    }
    // equal clicked
    equalSign.addEventListener("click", () => {
        output.innerText = eval(output.innerText)
        znamenkoPressed = false
        dotDisabled = false
        znamenkoDisabled = false
    })
    // dot clicked
    floatDot.addEventListener("click", () => {
        if (dotDisabled == false) {
            output.innerText = output.innerText + "."
            dotDisabled = true
        }
        else {
            alert("Teď nelze použít desetinnou tečku")
        }
    })
    // pi clicked
    piSign.addEventListener("click", () => {
        if (dotDisabled == false) {
            if (znamenkoPressed == false)
                output.innerText = Math.PI
            else if (znamenkoPressed == true)
                output.innerText = output.innerText + Math.PI
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
    //del clicked
    del.addEventListener("click", (e) => {
        output.innerText = output.innerText.substring(0, output.innerText.length - 1)
        if (output.innerText == "") output.innerText = "0"
    })

    // goniometric clicked
    for (let g of gons) {
        g.addEventListener("click", e => {
            if (znamenkoPressed == false) {
                if (e.target.dataset.text == "sin") {
                    output.innerText = Math.sin(parseFloat(output.innerText) * (Math.PI / 180))
                }
                else if (e.target.dataset.text == "cos") {
                    output.innerText = Math.cos(parseFloat(output.innerText) * (Math.PI / 180))
                }
                else if (e.target.dataset.text == "tan") {
                    output.innerText = Math.tan(parseFloat(output.innerText) * (Math.PI / 180))
                }
            }
            else {
                alert("Na tenhle výraz nemůžeš použít goniometrickou funkci zjendoduš ho na jedno číslo")
            }
        })
    }
}

document.addEventListener("DOMContentLoaded", init)