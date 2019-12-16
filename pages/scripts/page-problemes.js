const bateryButton = document.querySelector('.js-batery-button')
const continueButton = document.querySelector('.js-continue-button')
const bateryIcon = document.querySelector('.js-batery-icon')

// Button selection
bateryButton.addEventListener('click', () =>
{
    bateryButton.style.backgroundColor = "#B42F3C"
    continueButton.style.backgroundColor = "#B42F3C"
    bateryIcon.style.backgroundColor = "white"
})