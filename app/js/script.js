const themeImg = document.getElementById("theme")











themeImg.addEventListener('click', () => {
    if (themeImg.src.includes("icon-sun.svg")) {
        themeImg.src = "assets/images/icon-moon.svg"
        img.alt = "dark-mode"
    } else { 
        themeImg.src = "assets/images/icon-sun.svg"
        img.alt = "light-mode"
    }

})











