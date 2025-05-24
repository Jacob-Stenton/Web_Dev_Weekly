
const img0 = document.querySelector("#img")
const img1 = document.querySelector("#img1")
const img2 = document.querySelector("#img2")
const img3 = document.querySelector("#img3")
const img4 = document.querySelector("#img4")
const img5 = document.querySelector("#img5")
const img6 = document.querySelector("#img6")
const img7 = document.querySelector("#img7")
const img8 = document.querySelector("#img8")
const img9 = document.querySelector("#img9")
const img10 = document.querySelector("#img10")

img1.style.transform = "translateX(-50%)"


function onScroll() {
    let yOffset = window.scrollY
    img0.style.transform = "translate(22%, -" + String(yOffset * 1.3) + "px)"
    img1.style.transform = "translate(22%, -" + String(yOffset * 1.3) + "px)"
    img2.style.transform = "translate(22%, -" + String(yOffset * 1.3) + "px)"
    img3.style.transform = "translate(22%, -" + String(yOffset * 1.3) + "px)"
    img4.style.transform = "translate(22%, -" + String(yOffset * 1.3) + "px)"
    img5.style.transform = "translate(22%, -" + String(yOffset * 1.3) + "px)"
    img6.style.transform = "translate(22%, -" + String(yOffset * 1.3) + "px)"
    img7.style.transform = "translate(22%, -" + String(yOffset * 1.3) + "px)"
    img8.style.transform = "translate(22%, -" + String(yOffset * 1.3) + "px)"
    img9.style.transform = "translate(22%, -" + String(yOffset * 1.3) + "px)"
    img10.style.transform = "translate(22%, -" + String(yOffset * 1.3) + "px)"
}

window.addEventListener("scroll", onScroll)
