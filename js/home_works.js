//Homework 1
const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')
const childBlock = document.querySelector('.child_block')

const regExp = /^[\w\d\а-я\А-Я]{6,30}@gmail\.com$/
gmailButton.onclick = () => createGmail()

function createGmail() {
    if (regExp.test(gmailInput.value)) {
        gmailResult.innerHTML = 'OK'
        gmailResult.style.color = 'green'
    } else {
        gmailResult.innerHTML = 'NOT OK'
        gmailResult.style.color = 'red'
    }
    gmailInput.value = ''
}

window.onkeydown = (event) => {
    if (event.code === 'Enter') {
        createGmail()
    }
}


let positionX = 0
let positionY = 0

const maxParentWidth = parentBlock.offsetWidth - childBlock.offsetWidth
const maxParentHeight = parentBlock.offsetHeight - childBlock.offsetHeight

const animation = () => {
    if (positionX < maxParentWidth && positionY === 0) {
        positionX++
    } else if (positionX >= maxParentWidth && positionY < maxParentHeight) {
        positionY++
    } else if (positionX > 0 && positionY >= maxParentHeight) {
        positionX--
    } else if (positionX === 0 && positionY > 0) {
        positionY--
    }

    childBlock.style.left = `${positionX}px`
    childBlock.style.top = `${positionY}px`
    requestAnimationFrame(animation)
}

animation()

//ДЗ 2
const seconds = document.querySelector('#seconds')
const start = document.querySelector('#start')
const stop = document.querySelector('#stop')
const reset = document.querySelector('#reset')
let count = 0
let interval
start.addEventListener('click', ()=>{
    if(!interval){
        interval = setInterval(()=>{
            count++
            seconds.innerHTML = `${count}`
        },1000)
    }
})
function stopCounter() {
    clearInterval(interval)
    interval = null
}
stop.addEventListener('click',stopCounter)
reset.addEventListener('click', ()=> {
    stopCounter()
    count = 0
    seconds.innerHTML = `${count}`
})


