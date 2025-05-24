const leftSelect = document.getElementById("leftSelect")
const rightSelect = document.getElementById("rightSelect")
leftSelect.innerText = "<"
rightSelect.innerText = ">"

const navOne = document.getElementById("navOne")
const navTwo = document.getElementById("navTwo")
const navThree = document.getElementById("navThree")
const navFour = document.getElementById("navFour")
const navFive = document.getElementById("navFive")

const navs = [navOne, navTwo, navThree, navFour, navFive]

const blendGalOne = document.getElementById("blendGalOne")
const blendGalTwo = document.getElementById("blendGalTwo")
const blendGalThree = document.getElementById("blendGalThree")
const blendGalFour = document.getElementById("blendGalFour")
const blendGalFive = document.getElementById("blendGalFive")

const slides = [blendGalOne, blendGalTwo, blendGalThree, blendGalFour, blendGalFive]

let blendPage = 0

const gLine = document.getElementById("gLine")

function greenScroll() {
  let gHeight = 80 * blendPage
  gLine.style.height = String(gHeight) + "px"
  localStorage.setItem("gHeight", gHeight)
  localStorage.setItem("blendPage", blendPage)
}

blendPage = localStorage.getItem("blendPage")

// function navChange() {
//   if (blendPage == 0) {
//     navOne.innerText = "X"
//     navTwo.innerText = "0"
//     navFive.innerText = "0"
//   } else if (blendPage == 1) {
//     navOne.innerText = "0"
//     navTwo.innerText = "X"
//     navThree.innerText = "0"
//   } else if (blendPage == 2) {
//     navTwo.innerText = "0"
//     navThree.innerText = "X"
//     navFour.innerText = "0"
//   } else if (blendPage == 3) {
//     navThree.innerText = "0"
//     navFour.innerText = "X"
//     navFive.innerText = "0"
//   } else if (blendPage == 4) {
//     navOne.innerText = "0"
//     navFour.innerText = "0"
//     navFive.innerText = "X"
//   }
//   greenScroll()
// }

function navChange() {
  for (let i in navs) {

    if (i == blendPage) {
      navs[i].innerText = "X"

    } else {
      navs[i].innerText = "0"
    }
  }
  greenScroll()
}

function slideChange() {

  for (let i in slides) {
    slides[i].classList.remove("blendHide")
    slides[i].classList.remove("blendShow")
    if (blendPage == i) {
      slides[i].classList.add("blendShow")
    } else {
      slides[i].classList.add("blendHide")
    }
  }
}

function leftHandler() {
  if (blendPage == 0) {
    blendPage = 4
  } else {
    blendPage--
  }
  navChange()
  slideChange()
}

function rightHandler() {
  if (blendPage == 4) {
    blendPage = 0
  } else {
    blendPage++
  }
  navChange()
  slideChange()
}

navChange()
slideChange()


leftSelect.addEventListener("click", leftHandler)
rightSelect.addEventListener("click", rightHandler)