const menuButton = document.querySelector(".menu-icon")
const menu = document.querySelector(".menu")
const modal = document.querySelector(".popup")
const emailButton = document.querySelector(".show-popup")





menuButton.addEventListener('click', showMenu)


function showMenu () {
    const display = menu.classList.toggle("display-on")
    const buttons = document.querySelectorAll(".direct")
    

    if(menu.classList.contains('display-on')){
    menuButton.style.backgroundImage = `url('./img/cancel.png')`
    } else {
        menuButton.style.backgroundImage = `url('./img/menu.jpg')`
    }

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            menu.classList.remove("display-on")
            menuButton.style.backgroundImage = `url('./img/menu.jpg')`
        })
    })
}

emailButton.addEventListener("click", showModal)


function showModal () {
    
        modal.classList.toggle("popup-display");

        const infoContainer = document.createElement("div")
        infoContainer.classList.add("modal-container")
        modal.appendChild(infoContainer)

        const crossButton = document.createElement('button')
        crossButton.classList.add('cross-btn')
        infoContainer.appendChild(crossButton)

        const heading = document.createElement("h1")
        heading.classList.add("our-email")
        heading.innerHTML = `our email`
        infoContainer.appendChild(heading)

        const description = document.createElement("h3")
        description.classList.add("descr-of-modal")
        description.innerHTML = `cattiethough@gmail.com`
        infoContainer.appendChild(description)

        crossButton.addEventListener('click', () => {
            modal.classList.add("close-modal")
            modal.classList.remove('popup-display')
            modal.classList.remove("close-modal")
            infoContainer.remove()
            
            
        })
        
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
    
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });


