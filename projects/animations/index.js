let textTag = document.querySelector('.section h1')
let text = textTag.textContent

let splittedText = text.split('')

textTag.innerHTML = ''

for(let i = 0; i < splittedText.length; i++) {
    if(splittedText[i] == " ") {
        splittedText[i] = "&nbsp" 
    }
    textTag.innerHTML += `<span>${splittedText[i]}</span>`
}

let spans = textTag.querySelectorAll('span')

let j = 0
let interval = setInterval(() => {
    let singleSpan = spans[j]
    
    singleSpan.className = 'fadeMove'
    j++

    if(j === spans.length) {
        clearInterval(interval)
    }

}, 70)

let border = document.querySelector('.border-line')
let animationWidth = 0

window.onscroll = () => {

    if(this.oldScroll > this.scrollY) {
        animationWidth -= 1.5
    } else {
        animationWidth += 1.5
    }

    if(animationWidth >= 100) {
        animationWidth = 100
    } 

    if(animationWidth <= 0) {
        animationWidth = 0
    }

    border.style.width = animationWidth + '%'

    this.oldScroll = this.scrollY

    let sectionForAnimation = document.querySelector('.section2 .images')
    let sectionPosition = sectionForAnimation.getBoundingClientRect().top
    let screenPosition = window.innerHeight

    let leftImg = document.querySelector('.slideFromLeft')
    let rightImg = document.querySelector('.slideFromRight')

    if(sectionPosition < screenPosition) {
        leftImg.classList.add('animated')
        rightImg.classList.add('animated')
    }
}