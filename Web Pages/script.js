let hamburger = document.querySelector(".hamburger")
let bars = document.querySelectorAll(".bar")
let navList = document.querySelector(".nav-list")
let navLinks = document.querySelectorAll(".nav-link")

hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle('active')
    navList.classList.toggle('active')
})
navLinks.forEach(link=>{
    link.addEventListener('click', ()=>{
        hamburger.classList.remove('active')
        navList.classList.remove('active')
    })
})

let day = document.querySelector('.fa-sun')
let night = document.querySelector('.fa-moon')
let toggler = document.querySelectorAll('.toggler')

function darkMode(){
    document.body.classList.add('dark-mode')
    localStorage.setItem('mode', 'dark')
}
function noDark(){
    document.body.classList.remove('dark-mode')
    localStorage.setItem('mode', '')
}
if (localStorage.getItem('mode') === "dark"){
    darkMode()
}else{
    noDark()
}
toggler.forEach(toggler=>{
    toggler.addEventListener('click', e=>{

        document.body.classList.toggle('dark-mode')
        if (document.body.classList.contains('dark-mode')){
            darkMode()
            night.style.display = "none"
            day.style.display="block"
        }else{
            noDark()
            day.style.display = "none"
            night.style.display= "block"
        }
    })
})



