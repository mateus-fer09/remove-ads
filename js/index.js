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


const button1 = document.querySelector("#version1")
const button2 = document.querySelector("#version2")

mostrarVersion1 = () => {
    let container1 = document.querySelector(".version1")
    let container2 = document.querySelector(".version2")

    container1.style.display = "block"
    container2.style.display = "none"
    
    let iframes = document.querySelectorAll("iframe")
    let contentMsg = document.querySelector(".message-container")

    if (iframes.length > 0) {
        iframes.forEach(iframe => {
            iframe.parentNode.removeChild(iframe);
        });
    }

    contentMsg.innerText = ""
}

mostrarVersion2 = () => {
    let container1 = document.querySelector(".version1")
    let container2 = document.querySelector(".version2")

    container1.style.display = "none"
    container2.style.display = "block"
    
    let iframes = document.querySelectorAll("iframe")
    let h3 = document.querySelectorAll("h3")
    let contentMsg = document.querySelector(".text-alerta")

    if (iframes.length > 0) {
        iframes.forEach(iframe => {
            iframe.parentNode.removeChild(iframe);
        });
    }

    if (h3.length > 0) {
        h3.forEach(h3 => {
            h3.parentNode.removeChild(h3)
        })
    }

    contentMsg.innerText = ""
}

button1.addEventListener("click", mostrarVersion1)
button2.addEventListener("click", mostrarVersion2)