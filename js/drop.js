const button = document.querySelector ('#dropbtn')
const menu = document.querySelector ('#drop-menu')
const customButton = document.querySelector ('.custom-dropbtn')
const customMenu = document.querySelector ('.custom-drop-menu')
const customButton1 = document.querySelector ('.custom-dropbtn1')
const customMenu1 = document.querySelector ('.custom-drop-menu1')
const customButton2 = document.querySelector ('.custom-dropbtn2')
const customMenu2 = document.querySelector ('.custom-drop-menu2')

customButton1.addEventListener('click', ()=>{
    customMenu1.classList.toggle('hidden')
})
customButton2.addEventListener('click', ()=>{
    customMenu2.classList.toggle('hidden')
})
button.addEventListener('click', ()=>{
    menu.classList.toggle('hidden')
})  
customButton.addEventListener('click', ()=>{
   customMenu.classList.toggle('hidden')
})