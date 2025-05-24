import anime from "animejs";

const ball = document.getElementById("ball")
const body = document.getElementById("background")

document.addEventListener("mousemove", mousPos)

let mouseX;
let mouseY;


let clientWidth
let clientHeight

function mousPos(e) {
  clientWidth = window.innerWidth
  clientHeight = window.innerHeight

  mouseX = e.clientX
  mouseY = e.clientY

  if (mouseX > clientWidth - 50) {
    mouseX = clientWidth - 50
  } else if (mouseX < 0 + 50) {
    mouseX = 50
  }

  if (mouseY > clientHeight - 50) {
    mouseY = clientHeight - 50
  } else if (mouseY < 0 + 50) {
    mouseY = 50
  }

  mouseX = mouseX - 50
  mouseY = mouseY - 50

  anime({
    targets: ball,
    translateX: mouseX,
    translateY: mouseY,
  });

  let R = mouseX / clientWidth * 255
  let G = mouseY / clientHeight * 255
  let B = (mouseX + mouseY) / (clientWidth + clientHeight) * 255

  body.style.backgroundColor = "rgb(" + (String(R) + "," + String(G) + "," + String(B) + ")")
}



