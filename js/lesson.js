//Phone checking

const phoneInput = document.querySelector('#phone_input')
const phoneButton = document.querySelector('#phone_button')
const phoneResult = document.querySelector('#phone_result')

const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/

phoneButton.onclick = () => {
    if(regExp.test(phoneInput.value)){
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

const hideTabContent = ()=>{
    tabContentBlocks.forEach((item)=>{
        item.style.display = 'none'
    })
    tabContentItems.forEach((item)=>{
        item.classList.remove('tab_content_item_active')
    })
}
const showTabContent = (index = 0)=>{
    tabContentBlocks[index].style.display = 'block'
    tabContentItems[index].classList.add('tab_content_item_active')
}

hideTabContent()
showTabContent()


let tabIndex = 0
const tabCount = tabContentItems.length

const scrollTabContent = ()=>{
    hideTabContent()
    tabIndex = (tabIndex + 1) % tabCount
    showTabContent(tabIndex)
}

const interval = setInterval(scrollTabContent,3000)
tabsParent.onclick = (event)=> {
    if(event.target.classList.contains('tab_content_item')){
        tabContentItems.forEach((item,index)=>{
            if(event.target === item){
                hideTabContent()
                showTabContent(index)
            }
        })
    }
    clearInterval(interval)
}
