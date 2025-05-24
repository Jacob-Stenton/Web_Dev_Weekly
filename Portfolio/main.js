import "./style.css"

const mainRLine = document.getElementById("mainRLine")
const mainGLine = document.getElementById("mainGLine")
const mainBLine = document.getElementById("mainBLine")


let mainRHeight = localStorage.getItem("rHeight")
let mainGHeight = localStorage.getItem("gHeight")
let mainBHeight = localStorage.getItem("bHeight")

console.log(mainGHeight)

mainRLine.style.height = String(mainRHeight) + "px"
mainGLine.style.height = String(mainGHeight) + "px"
mainBLine.style.height = String(mainBHeight) + "px"