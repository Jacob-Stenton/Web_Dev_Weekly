const container = document.querySelector("#imgBlock")


async function getIMG() {
    const response = await fetch("https://api.are.na/v2/channels/spaceship-earth/contents");
    const data = await response.json();

    data.contents.forEach((element) => {
        const newImg = document.createElement("img")
        newImg.src = element.image.square.url
        newImg.classList.add("image")
        function randNum() {
            let newSize = Math.random() * 1000
            if (newSize < 50) {
                randNum()
            } else {
                return newSize
            }

        }

        newImg.style.height = String(randNum()) + "px"
        newImg.style.marginBottom = String(Math.random() * 300) + "px"
        container.append(newImg)
    });
}

getIMG()

const starContainer = document.querySelector("#starBacking")

for (let i = 0; i < 600; i++) {
    const star = document.createElement("h1")
    star.innerText = "*"
    star.classList.add("star")
    star.style.paddingLeft = String(Math.random() * 500) + "px"
    starContainer.append(star)
}