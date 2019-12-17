const bateryButton = document.querySelector('.js-batery-button')
const screenButton = document.querySelector('.js-broken-screen-button')
const connectorsButton = document.querySelector('.js-connectors-button')
const photoButton = document.querySelector('.js-photo-button')
const bateryIcon = document.querySelector('.js-batery-icon')
const screenIcon = document.querySelector('.js-screen-icon')
const connectorsIcon = document.querySelector('.js-connectors-icon')
const photoIcon = document.querySelector('.js-photo-icon')
const continueButton = document.querySelector('.js-continue-button')


// Button selection
bateryButton.addEventListener('click', () =>
{
    bateryButton.style.backgroundColor = "#B42F3C"
    continueButton.style.backgroundColor = "#B42F3C"
    bateryIcon.style.backgroundColor = "white"
})

screenButton.addEventListener('click', () =>
{
    screenButton.style.backgroundColor = "#B42F3C"
    continueButton.style.backgroundColor = "#B42F3C"
    screenIcon.style.backgroundColor = "white"
})

connectorsButton.addEventListener('click', () =>
{
    connectorsButton.style.backgroundColor = "#B42F3C"
    continueButton.style.backgroundColor = "#B42F3C"
    connectorsIcon.style.backgroundColor = "white"
})

photoButton.addEventListener('click', () =>
{
    photoButton.style.backgroundColor = "#B42F3C"
    continueButton.style.backgroundColor = "#B42F3C"
    photoIcon.style.backgroundColor = "white"
})


/*// Progress bar variables
let step = 'step1'

const step1 = document.getElementById('step1')
const step2 = document.getElementById('step2')
const step3 = document.getElementById('step3')
const step4 = document.getElementById('step4')

// Making the PROGRESS STEP BAR working
function next() {
  if (step === 'step1') {
    step = 'step2';
    step1.classList.remove("is-active");
    step1.classList.add("is-complete");
    step2.classList.add("is-active");

  } else if (step === 'step2') {
    step = 'step3';
    step2.classList.remove("is-active");
    step2.classList.add("is-complete");
    step3.classList.add("is-active");

  } else if (step === 'step3') {
    step = 'step4d';
    step3.classList.remove("is-active");
    step3.classList.add("is-complete");
    step4.classList.add("is-active");

  } else if (step === 'step4d') {
    step = 'complete';
    step4.classList.remove("is-active");
    step4.classList.add("is-complete");

  } else if (step === 'complete') {
    step = 'step1';
    step4.classList.remove("is-complete");
    step3.classList.remove("is-complete");
    step2.classList.remove("is-complete");
    step1.classList.remove("is-complete");
    step1.classList.add("is-active");
  }
}

continueButton.addEventListener('click', () =>
{
  next()
})*/