/* || VARIABLES */
let lightmode = localStorage.getItem("lightmode")
const themeSwitch = document.getElementById("theme-switch")
const allBtn = document.getElementById('all-btn')
const activeBtn = document.getElementById('active-btn')
const inactiveBtn = document.getElementById('inactive-btn')
const removeButtons = document.querySelectorAll('.removebutton')


/* || THEME TOGGLE */

/* 
1. This adds the lightmode theme class to the body, this overwrites the darkmode theme class that's the default.
2. This stores the lightmode theme in local storage and makes the theme active.
*/
const enableLightMode = () => {
    document.body.classList.add('lightmode')
    localStorage.setItem('lightmode', 'active')
}

/* 
1. This removes the lightmode theme class from the body and restores the darkmode theme.
2. This removes the active state of the lightmode theme. */
const disableLightMode = () => {
    document.body.classList.remove('lightmode')
    localStorage.setItem('lightmode', null)
}

/* 
This line helps to save the current selected theme even when the website is refreshed. 
1. If lightmode is active then it is enabled again.
2. If lightmode is not active then the default dark theme is active.
*/
if (lightmode === "active") enableLightMode()

/* 
When the theme switch button is clicked, it gets the lightmode theme from local storage. 
    If lightmode is not active then the enableLightMode() function is triggered. 
    If it's active then the disableLightMode() function is triggered.*/
themeSwitch.addEventListener('click', () => {
    // !== - Means "Does Not Equal", ? - Means "Then", : - Means "Else"
    lightmode = localStorage.getItem('lightmode')
    lightmode !== "active" ? enableLightMode() : disableLightMode()
})

/* || SELECTED BUTTONS */

/* 
When the all button is clicked and it does not have the .selected class, it removes the .selected class from either the active button or inactive button, and it adds the .selected class to the all button.
*/
allBtn.addEventListener('click', () => {
    if (allBtn.className !== 'selected') {
        activeBtn.classList.remove('selected') || inactiveBtn.classList.remove('selected')
        allBtn.classList.add('selected')
    }
})

/* 
When the active button is clicked and it does not have the .selected class, it removes the .selected class from either the all button or inactive button, and it adds the .selected class to the active button.
*/
activeBtn.addEventListener('click', () => {
    if (activeBtn.className !== 'selected') {
        allBtn.classList.remove('selected') || inactiveBtn.classList.remove('selected')
        activeBtn.classList.add('selected')
        displayActiveCards()
    }
})

/* 
When the inactive button is clicked and it does not have the .selected class, it removes the .selected class from either the all button or active button, and it adds the .selected class to the inactive button.
*/
inactiveBtn.addEventListener('click', () => {
    if (inactiveBtn.className !== 'selected') {
        allBtn.classList.remove('selected') || activeBtn.classList.remove('selected')
        inactiveBtn.classList.add('selected')
    }
})

/* || ACTIVE AND INACTIVE EXTENSIONS */

/* 
1. If the checkbox is checked, the card should have the active class. If the inactive button is selected then add the hidden class to the card, else remove the hidden class if the active or all buttons are selected.
2. If the checkbox is NOT checked, the card should NOT have the active class. If the active button is selected then add the hidden class to the card, else remove the hidden class if the inactive or all buttons are selected.
*/
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

/* This displays all the cards at default, whether active or inactive. */
let currentFilter = 'all';

/* 
This creates a filterCards function whenever any of the buttons are clicked, and assigns a parameter(type) to the currentFilter variable.
    1. If the currentFilter(type) is all, then remove the hidden class from all cards.
    2. If the currentFilter(type) is active, it adds the hidden class to those cards that are NOT active, so only the active cards are displayed.
    3. If the currentFilter(type) is inactive, it adds the hidden class to those cards that are active, so only the inactive cards are displayed.  */
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

/* 
For each button in the removeButtons list, remove the card when it's button is clicked */
removeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const card = button.parentElement
        card.parentElement.remove()
    })
})

