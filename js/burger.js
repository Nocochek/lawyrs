const burger = document.querySelector('.burger')
const headerDrop = document.querySelector('.header-drop')


burger.addEventListener('click',()=>{

    headerDrop.classList.toggle('item-hidden')
})