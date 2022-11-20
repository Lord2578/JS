let btnNext = document.getElementById("btnNext")
let btnPrev = document.getElementById("btnPrev")
let pic = document.getElementById("pic")
let sliderContainer = document.getElementById("sliderContainer")


// DOM level 0
// btnNext.onclick = function() {// }

let images = ["fantasy.png", "mountains.png", "tree.png", "img4.png", "img5.png", "img6.png", "img7.png"]
let pos = 0
let path = "../images/"

// DOM level 2
btnNext.addEventListener("click", function () {
    // pic.src = "../images/mountains.webp"
    nextSlide()
})

btnPrev.addEventListener("click", function () {
    prevSlide()
})

function nextSlide() {
    if (pos == images.length - 1)
        pos = -1
    pic.src = `${path}${images[++pos]}`
    
}



function prevSlide() {
    if (pos == images.length - 7)
        pos = 7
    pic.src = `${path}${images[--pos]}`
}

let intervalId

sliderContainer.addEventListener("mouseenter", function () {
    clearInterval(intervalId)
})

sliderContainer.addEventListener("mouseleave", function () {
    intervalId = setInterval(() => {
        nextSlide()
    }, 3000)

})