function openNav() {
    let nav = document.querySelector(".nav-left")
    nav.style.width = "300px"
}

function closeNav() {
    let nav = document.querySelector(".nav-left")
    nav.style.width = "0px"
}

let buttonOpen = document.getElementById("open-nav")
buttonOpen.addEventListener("click", openNav)

let buttonClose = document.getElementById("close-nav")
buttonClose.addEventListener("click", closeNav)
