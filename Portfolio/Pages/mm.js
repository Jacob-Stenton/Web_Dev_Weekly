const bLine = document.getElementById("bLine")

function blueScroll() {
    let bHeight = 320 / ((document.body.clientHeight) / scrollY)
    bLine.style.height = String(bHeight) + "px"
    localStorage.setItem("bHeight", bHeight)
    localStorage.setItem("bScroll", scrollY)
}

window.scrollTo(0,localStorage.getItem("bScroll"))

window.addEventListener("scroll", blueScroll)

