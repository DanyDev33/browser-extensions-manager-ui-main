/* || VARIABLES */
let lightmode = localStorage.getItem("lightmode")
const themeSwitch = document.getElementById("theme-switch")
const allBtn = document.getElementById('all-btn')
const activeBtn = document.getElementById('active-btn')
const inactiveBtn = document.getElementById('inactive-btn')

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
    if (activeBtn.className !== 'selected') {
        allBtn.classList.remove('selected')
        activeBtn.className.add('selected')
    } else if (activeBtn.className || inactiveBtn.className === 'selected') {
        activeBtn.classList.remove('selected')
        inactiveBtn.classList.remove('selected')
        allBtn.className.add('selected')
    }
})

activeBtn.addEventListener('click', () => {
    if (activeBtn.className !== 'selected') {
        allBtn.className.remove('selected')
    } else if (activeBtn.className || inactiveBtn.className === 'selected') {
        allBtn.classList.remove('selected')
        inactiveBtn.classList.remove('selected')
        activeBtn.className.add('selected')
    }
})

inactiveBtn.addEventListener('click', () => {
    if (inactiveBtn.className !== 'selected') {
        inactiveBtn.className.remove('selected')
    } else if (activeBtn.className || inactiveBtn.className === 'selected') {
        activeBtn.classList.remove('selected')
        allBtn.classList.remove('selected')
        inactiveBtnBtn.className.add('selected')
    }
})









