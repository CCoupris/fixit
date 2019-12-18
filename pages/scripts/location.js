const homeButton = document.querySelector('.js-button-home')
const workButton = document.querySelector('.js-button-work')
const continueButton = document.querySelector('.js-continue-button')
const test = sessionStorage.getItem('price')

// Location selection
function toggleHome() {
  if (homeButton.style.backgroundColor == "white") {
    homeButton.style.backgroundColor = "#B42F3C";
  } else {
    homeButton.style.backgroundColor = "white";
  }
}
    toggleHome()
    homeButton.addEventListener('click', () =>
{
    sessionStorage.setItem('where','Chez vous')
    toggleHome()
    continueButton.style.backgroundColor = "#B42F3C"
})

    //
function toggleWork() {
  if (workButton.style.backgroundColor == "white") {
    workButton.style.backgroundColor = "#B42F3C";
  } else {
    workButton.style.backgroundColor = "white";
  }
}
    toggleWork()
workButton.addEventListener('click', () =>
{
    sessionStorage.setItem('where','Au travail')
    toggleWork()
    continueButton.style.backgroundColor = "#B42F3C"
})
function toggleday(){
  
}

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
}*/
