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

function toggleCardStatus(checkbox) {
    const card = checkbox.closest('.card');
    const id = card.dataset.id;
    const isChecked = checkbox.checked;
  
    card.classList.toggle('active', isChecked);
  
    if (currentFilter === 'active' && !isChecked) card.classList.add('hidden');
    else if (currentFilter === 'inactive' && isChecked) card.classList.add('hidden');
    else card.classList.remove('hidden');
  
    // Save to localStorage
    const savedStates = JSON.parse(localStorage.getItem('cardStates')) || {};
    savedStates[id] = isChecked;
    localStorage.setItem('cardStates', JSON.stringify(savedStates));
  }

let currentFilter = 'all';

function filterCards(type) {
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
