//Phone checking

const phoneInput = document.querySelector('#phone_input')
const phoneButton = document.querySelector('#phone_button')
const phoneResult = document.querySelector('#phone_result')

const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/

phoneButton.onclick = () => {
    if (regExp.test(phoneInput.value)) {
        phoneResult.innerHTML = 'OK'
        phoneResult.style.color = 'green'
    } else {
        phoneResult.innerHTML = 'NOT OK'
        phoneResult.style.color = 'red'
    }
}

//tab slider

const tabContentBlocks = document.querySelectorAll('.tab_content_block')
const tabContentItems = document.querySelectorAll('.tab_content_item')
const tabsParent = document.querySelector('.tab_content_items')

const hideTabContent = () => {
    tabContentBlocks.forEach((item) => {
        item.style.display = 'none'
    })
    tabContentItems.forEach((item) => {
        item.classList.remove('tab_content_item_active')
    })
}
const showTabContent = (index = 0) => {
    tabContentBlocks[index].style.display = 'block'
    tabContentItems[index].classList.add('tab_content_item_active')
}

hideTabContent()
showTabContent()


let tabIndex = 0
const tabCount = tabContentItems.length

const scrollTabContent = () => {
    hideTabContent()
    if (tabIndex < tabCount - 1) {
        tabIndex++
    }
    showTabContent(tabIndex)
}

const interval = setInterval(scrollTabContent, 3000)
tabsParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabContentItems.forEach((item, index) => {
            if (event.target === item) {
                hideTabContent()
                showTabContent(index)
            }
        })
    }
    clearInterval(interval)
}

//Convertor

const usdInput = document.querySelector('#usd')
const somInput = document.querySelector('#som')
const euroInput = document.querySelector('#eur')
const convertor = (element, targetElement, targetElement2) => {
    element.oninput = () => {
        const request = new XMLHttpRequest()
        request.open('GET', '../data/converter.json')
        request.setRequestHeader('Content-type', 'application/json')
        request.send()
        request.onload = () => {
            const data = JSON.parse(request.response)
            if (element.id === 'som') {
                targetElement.value = (element.value / data.usd).toFixed(2)
                targetElement2.value = (element.value / data.euro).toFixed(2)
            }
            if (element.id === 'usd') {
                targetElement.value = (element.value * data.usd).toFixed(2)
                targetElement2.value = (element.value / data.euroToDollar).toFixed(2)
            }
            if (element.id === 'eur') {
                targetElement.value = (element.value * data.euro).toFixed(2)
                targetElement2.value = (element.value * data.euroToDollar).toFixed(2)
            }
            (element.value === '') && (targetElement.value = '', targetElement2.value = '')
        }
    }
}
convertor(somInput, usdInput, euroInput)
convertor(usdInput, somInput, euroInput)
convertor(euroInput, somInput, usdInput)


//DRY - don't repeat yourself
//KISS - keep it simple stupid
//SOLID


//Card switcher
const card = document.querySelector('.card')
const btnContainer = document.querySelector('.inner_card_switcher')

let cardId = 1
const firstId = async () => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${cardId}`)
        const data = await response.json()
        card.innerHTML = `
            <p>${data.title}</p>   
            <p style="color: ${data.completed ? 'green' : 'red'}">${data.completed}</p>   
            <span>${data.id}</span>   
            `
    } catch (error) {
        console.error(error)
    }
}
firstId(cardId)
btnContainer.onclick = (event) => {
    if (event.target.tagName.toLowerCase() === 'button') {
        if (event.target.id === 'btn-next') {
            cardId < 200 ? cardId++ : cardId = 1
        } else if (event.target.id === 'btn-prev') {
            cardId > 1 ? cardId-- : cardId = 200
        }
        firstId(cardId)
    }
}