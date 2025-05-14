/* || VARIABLES */
let lightmode = localStorage.getItem("lightmode")
const themeSwitch = document.getElementById("theme-switch")
const allBtn = document.getElementById('all-btn')
const activeBtn = document.getElementById('active-btn')
const inactiveBtn = document.getElementById('inactive-btn')
const removeButtons = document.querySelectorAll('.removebutton')


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

const toggleCardStatus = (checkbox) => {
    const card = checkbox.closest('.card');
    const isActiveView = currentFilter === 'active';
    const isInactiveView = currentFilter === 'inactive';

    if (checkbox.checked) {
        card.classList.add('active');
        if (isInactiveView) card.classList.add('hidden');
        else card.classList.remove('hidden');
    } else {
        card.classList.remove('active');
        if (isActiveView) card.classList.add('hidden');
        else card.classList.remove('hidden');
    }
}

let currentFilter = 'all';

const filterCards = (type) => {
    currentFilter = type;
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const isActive = card.classList.contains('active');
        if (type === 'all') {
            card.classList.remove('hidden');
        } else if (type === 'active') {
            card.classList.toggle('hidden', !isActive);
        } else if (type === 'inactive') {
            card.classList.toggle('hidden', isActive);
        }
    });
}

/* || REMOVE BUTTON */

removeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const card = button.parentElement
        card.parentElement.remove()
    })
})