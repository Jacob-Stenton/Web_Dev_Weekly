const rLine = document.getElementById("rLine")

function redScroll() {
    let rHeight = 350 / ((document.body.clientHeight) / scrollY)
    rLine.style.height = String(rHeight) + "px"
    localStorage.setItem("rHeight", rHeight)
    localStorage.setItem("rScroll", scrollY)
}

window.scrollTo(0,localStorage.getItem("rScroll"))

window.addEventListener("scroll", redScroll)

