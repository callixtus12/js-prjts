const menuBtn = document.querySelector('.ri-menu-3-line')
const menuClsBtn = document.querySelector('.ri-close-line')
const nav = document.querySelector('nav ul')
const navLinks = document.querySelectorAll('nav ul li')
const login = document.querySelectorAll('nav button')
const loginModal = document.querySelector('.modalContainerBg')
const loginModalClose = document.querySelector('.no')
const loginModalOpen = document.querySelector('.yes')
const backtotop = document.querySelector('.btt')


menuBtn.addEventListener('click', function(){
    nav.style.right = "20px"
    menuBtn.style.display = "none"
    menuClsBtn.style.display = "block"
})

menuClsBtn.addEventListener('click', function(){
    closeNav()
})

function closeNav(){
    nav.style.right = "-200px"
    menuClsBtn.style.display = "none"
    menuBtn.style.display = "block"
}

navLinks.forEach(function(link){
    link.addEventListener('click', function(){
        closeNav()
    })
})

login.forEach(function(loginBtn){
    loginBtn.addEventListener('click', function(){
        closeNav()
        loginModal.style.display = 'flex'
    })
})

loginModalClose.addEventListener('click', function(){
    loginModal.style.display = 'none'
})

loginModalOpen.addEventListener('click', function(){
    window.location.reload()
})

window.addEventListener("scroll", function () {
    //when the user scrolls 30px from the top, show the 'back-to-top' button(first for crome, second for Safari)
    if (document.documentElement.scrollTop >= 50 || document.body.scrollTop >= 50) {
      backtotop.style.bottom = "20px";
    } else {
      backtotop.style.bottom = "-50px";
    }
});