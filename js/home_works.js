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


let left = 0
const animation = () => {
    left += 1
    childBlock.style.left = `${left}px`
    if (left <= 448) {
        requestAnimationFrame(animation)
    }
}
animation()


