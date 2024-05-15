//Modal
const modal = document.querySelector('.modal')
const modalCloseBtn = document.querySelector('.modal_close')
const modalTrigger = document.querySelector('#btn-get')

const openModal = ()=>{
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
}
modalTrigger.onclick = ()=>{
    openModal()
}

const closeModal =()=> {
    modal.style.display = 'none'
    document.body.style.overflow = 'scroll'
}
modalCloseBtn.onclick = ()=>{
    closeModal()
}
modal.onclick = (event) => {
    if (event.target === modal) {
        closeModal()
    }
}

let scrollOpen = false
const scroll  = ()=>{
    if(!scrollOpen && (window.innerHeight + window.scrollY) >= document.body.offsetHeight){
        openModal()
        window.removeEventListener('scroll',scroll)
        scrollOpen = true
    }
}

window.addEventListener('scroll',scroll)

setTimeout(()=>openModal(),10000)