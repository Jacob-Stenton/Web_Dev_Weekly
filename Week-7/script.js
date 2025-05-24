
const body = document.querySelector("body")
const container = document.querySelector("#maindiv")
const colPick = document.querySelector("#col")

let vw = document.documentElement.clientWidth
let vh = document.documentElement.clientHeight

let inputText = ""
const padMax = 30
let colOne = "rgb(0,0,0)"
let colTwo = "rgb(255,255,255)"

function createBackground() {
    for (let i = 0; i < 150; i++) {
        let backText = document.createElement("h2")
        container.append(backText)
        if (Math.random() > 0.5) {
            if (Math.random() > 0.5) {
                backText.innerText = "0_0"
            } else {
                backText.innerText = "0o0"
            }

            backText.style.color = colOne
        } else {
            if (Math.random() > 0.5) {
                backText.innerText = "0_0"
            } else {
                backText.innerText = "0o0"
            }
            backText.style.color = colTwo
        }

        backText.style.top = String((vh - 50) * Math.random()) + "px"
        backText.style.left = String((vw - 50) * Math.random()) + "px"
    }
}
createBackground()



function change(event) {
    while (container.firstChild) {
        container.removeChild(container.lastChild)
    }
    vw = document.documentElement.clientWidth
    vh = document.documentElement.clientHeight
    createBackground()
}

function colorChange(event) {
    body.style.backgroundColor = colPick.value
    change()
}


colPick.addEventListener("input", colorChange)
window.addEventListener("resize", change);

