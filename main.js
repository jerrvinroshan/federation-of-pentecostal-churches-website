const toggleBtn = document.querySelector('.menu-icon')
const toggleIcon = document.querySelector('.menu-icon i')

const mainMenu = document.querySelector('.nav-mobile-menu-container')

toggleBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    if(mainMenu.classList.contains('open')){
        mainMenu.classList.remove('open')
        toggleIcon.classList.remove('fa-close')

    }else{
        mainMenu.classList.add('open')
        toggleIcon.classList.add('fa-close')
    }
})

const dropDown = document.querySelectorAll(".menu-item_link_dropdown")
const dropDownMenu = document.querySelectorAll(".dropdown-menu")
dropDown.addEventListener("click", (e)=>{
    e.preventDefault();
    if(dropDownMenu.classList.contains('open')){
        dropDownMenu.classList.remove('open')
    }else{
        mainMenu.classList.add('open')
    }
})