//phone
const batteryButton = document.querySelector('.js-battery-button')
const screenButton = document.querySelector('.js-broken-screen-button')
const connectorsButton = document.querySelector('.js-connectors-button')
const photoButton = document.querySelector('.js-photo-button')
const batteryIcon = document.querySelector('.js-battery-icon')
const screenIcon = document.querySelector('.js-screen-icon')
const connectorsIcon = document.querySelector('.js-connectors-icon')
const photoIcon = document.querySelector('.js-photo-icon')
const continueButton = document.querySelector('.js-continue-button')
//laptop
const batteryButtonlaptop = document.querySelector('.js-battery-button-laptop')
const screenButtonlaptop = document.querySelector('.js-broken-screen-button-laptop')
const connectorsButtonlaptop = document.querySelector('.js-connectors-button-laptop')
const photoButtonlaptop = document.querySelector('.js-photo-button-laptop')
const batteryIconlaptop = document.querySelector('.js-battery-icon-laptop')
const screenIconlaptop = document.querySelector('.js-screen-icon-laptop')
const connectorsIconlaptop = document.querySelector('.js-connectors-icon-laptop')
const photoIconlaptop = document.querySelector('.js-photo-icon-laptop')
const continueButtonlaptop = document.querySelector('.js-continue-button-laptop')
//information session
const name = sessionStorage.getItem('phonetype')
const objectName = document.querySelector('.phone')
objectName.innerHTML = name
const objectNamelaptop = document.querySelector('.laptop')
objectNamelaptop.innerHTML = name
const objecttype = sessionStorage.getItem('devisetype')
console.log(objecttype)
const path_one = document.querySelector('.path1')
const path_two = document.querySelector('.path2')
switch (objecttype) {
  case 'Electronics > Computers > Desktop Computers':
    path_one.classList.toggle('invisible')
    break;
  case 'Electronics > Communications > Telephony > Mobile Phones':
    path_two.classList.toggle('invisible')
    break;
  default:
    path_two.classList.toggle('invisible')
    break
}
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

//laptop

// Button selection
function toggleBatterylaptop() {
  if (batteryButtonlaptop.style.backgroundColor == "white") {
    batteryButtonlaptop.style.backgroundColor = "#B42F3C";
  } else {
    batteryButtonlaptop.style.backgroundColor = "white";
  }
  
}
    toggleBatterylaptop()
batteryButtonlaptop.addEventListener('click', () =>
{
    sessionStorage.setItem('phoneproblem','l\'écran')
    toggleBatterylaptop()
    continueButtonlaptop.style.backgroundColor = "#B42F3C"
    batteryIconlaptop.style.backgroundColor = "white"
})

    //
function toggleScreenlaptop() {
  if (screenButtonlaptop.style.backgroundColor == "white") {
    screenButtonlaptop.style.backgroundColor = "#B42F3C";
  } else {
    screenButtonlaptop.style.backgroundColor = "white";
  }
}
    toggleScreenlaptop()
screenButtonlaptop.addEventListener('click', () =>
{
  sessionStorage.setItem('phoneproblem','la batterie')
    toggleScreenlaptop()
    continueButtonlaptop.style.backgroundColor = "#B42F3C"
    screenIconlaptop.style.backgroundColor = "white"
})

    //
function toggleConnectorslaptop() {
  if (connectorsButtonlaptop.style.backgroundColor == "white") {
    connectorsButtonlaptop.style.backgroundColor = "#B42F3C";
  } else {
    connectorsButtonlaptop.style.backgroundColor = "white";
  }
}
    toggleConnectorslaptop()
connectorsButtonlaptop.addEventListener('click', () =>
{
    sessionStorage.setItem('phoneproblem','Les connecteurs')
    toggleConnectorslaptop()
    continueButtonlaptop.style.backgroundColor = "#B42F3C"
    connectorsIconlaptop.style.backgroundColor = "white"
})

    //
function togglePhotolaptop() {
  if (photoButtonlaptop.style.backgroundColor == "white") {
    photoButtonlaptop.style.backgroundColor = "#B42F3C";
  } else {
    photoButtonlaptop.style.backgroundColor = "white";
  }
}
    togglePhotolaptop()
photoButtonlaptop.addEventListener('click', () =>
{
  sessionStorage.setItem('phoneproblem','Le clavier')
    togglePhotolaptop()
    continueButtonlaptop.style.backgroundColor = "#B42F3C"
    photoIconlaptop.style.backgroundColor = "white"
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