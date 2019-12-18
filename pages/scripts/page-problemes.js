const batteryButton = document.querySelector('.js-battery-button')
const screenButton = document.querySelector('.js-broken-screen-button')
const connectorsButton = document.querySelector('.js-connectors-button')
const photoButton = document.querySelector('.js-photo-button')
const batteryIcon = document.querySelector('.js-battery-icon')
const screenIcon = document.querySelector('.js-screen-icon')
const connectorsIcon = document.querySelector('.js-connectors-icon')
const photoIcon = document.querySelector('.js-photo-icon')
const continueButton = document.querySelector('.js-continue-button')
const name = sessionStorage.getItem('phonetype')
const objectName = document.querySelector('.object-name')
objectName.innerHTML = name

// Button selection
function toggleBattery() {
  if (batteryButton.style.backgroundColor == "white") {
    batteryButton.style.backgroundColor = "#B42F3C";
  } else {
    batteryButton.style.backgroundColor = "white";
  }
  
}
    toggleBattery()
batteryButton.addEventListener('click', () =>
{
    sessionStorage.setItem('phoneproblem','La batterie')
    toggleBattery()
    continueButton.style.backgroundColor = "#B42F3C"
    batteryIcon.style.backgroundColor = "white"
})

    //
function toggleScreen() {
  if (screenButton.style.backgroundColor == "white") {
    screenButton.style.backgroundColor = "#B42F3C";
  } else {
    screenButton.style.backgroundColor = "white";
  }
}
    toggleScreen()
screenButton.addEventListener('click', () =>
{
  sessionStorage.setItem('phoneproblem','L\'écran')
    toggleScreen()
    continueButton.style.backgroundColor = "#B42F3C"
    screenIcon.style.backgroundColor = "white"
})

    //
function toggleConnectors() {
  if (connectorsButton.style.backgroundColor == "white") {
    connectorsButton.style.backgroundColor = "#B42F3C";
  } else {
    connectorsButton.style.backgroundColor = "white";
  }
}
    toggleConnectors()
connectorsButton.addEventListener('click', () =>
{
    sessionStorage.setItem('phoneproblem','Les connecteurs')
    toggleConnectors()
    continueButton.style.backgroundColor = "#B42F3C"
    connectorsIcon.style.backgroundColor = "white"
})

    //
function togglePhoto() {
  if (photoButton.style.backgroundColor == "white") {
    photoButton.style.backgroundColor = "#B42F3C";
  } else {
    photoButton.style.backgroundColor = "white";
  }
}
    togglePhoto()
photoButton.addEventListener('click', () =>
{
  sessionStorage.setItem('phoneproblem','L\'appareil photo')
    togglePhoto()
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