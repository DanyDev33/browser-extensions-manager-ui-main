/* || VARIABLES */
let lightmode = localStorage.getItem("lightmode")
const themeSwitch = document.getElementById("theme-switch")
const allBtn = document.getElementById('all-btn')
const activeBtn = document.getElementById('active-btn')
const inactiveBtn = document.getElementById('inactive-btn')
const card = document.getElementById('card')
const cardState = document.getElementById('toggle')

/* || THEME TOGGLE */
const enableLightMode = () => {
    document.body.classList.add('lightmode')
    localStorage.setItem('lightmode', 'active')
}

const disableLightMode = () => {
    document.body.classList.remove('lightmode')
    localStorage.setItem('lightmode', null)
}

if (lightmode === "active") enableLightMode()

themeSwitch.addEventListener('click', () => {
    // !== - Means "Does Not Equal", ? - Means "Then", : - Means "Else"
    lightmode = localStorage.getItem('lightmode')
    lightmode !== "active" ? enableLightMode() : disableLightMode()
})

/* || SELECTED BUTTONS */
allBtn.addEventListener('click', () => {
    if (allBtn.className !== 'selected') {
        activeBtn.classList.remove('selected') || inactiveBtn.classList.remove('selected')
        allBtn.classList.add('selected')
    }
})

activeBtn.addEventListener('click', () => {
    if (activeBtn.className !== 'selected') {
        allBtn.classList.remove('selected') || inactiveBtn.classList.remove('selected')
        activeBtn.classList.add('selected')
        displayActiveCards()
    }
})

inactiveBtn.addEventListener('click', () => {
    if (inactiveBtn.className !== 'selected') {
        allBtn.classList.remove('selected') || activeBtn.classList.remove('selected')
        inactiveBtn.classList.add('selected')
    }
})

/* || ACTIVE AND INACTIVE EXTENSIONS */

const displayActiveCards = () => {
    if (cardState.checked) {
        activeBtn.appendChild(card)
        document.getElementById("activeBtn").style.display = "block";
        document.getElementById("inactiveBtn").style.display = "none";
    } else {
        inactiveBtn.appendChild(card)
    }
}



