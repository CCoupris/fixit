const clasicButton = document.querySelector('.js-clasic')
const premiumButton = document.querySelector('.js-premium')
const clasicPriceButton = document.querySelector('.js-price-tag-clasic')
const premiumPriceButton = document.querySelector('.js-price-tag-premium')
const phoneproblem = sessionStorage.getItem('phoneproblem')
const premium = document.querySelector('.js-price-tag-premium')
const classic = document.querySelector('.js-price-tag-clasic')
switch(phoneproblem){
  case 'La batterie':
    classic.innerHTML='69.99€'
    premium.innerHTML='104.99€'
    break;
  case 'L\'écran':
    classic.innerHTML='229.99€'
    premium.innerHTML='264.99€'
    break;
  case 'Les connecteurs':
    classic.innerHTML='59.99€'
    premium.innerHTML='94.99€'
    break;
  case 'L\'appareil photo':
    classic.innerHTML='149.99€'
    premium.innerHTML='184.99€'
    break;
    default:
      console.log('Sorry, you need to go to the previous page to make your test')
}

// Option selection
clasicButton.addEventListener('click', () =>
{
    clasicButton.style.backgroundColor = "#B42F3C"
    clasicPriceButton.style.color = "#ffffff"
    clasicButton.style.color = "#ffffff"
})

premiumButton.addEventListener('click', () =>
{
    premiumButton.style.backgroundColor = "#B42F3C"
    premiumPriceButton.style.color = "#ffffff"
    premiumButton.style.color = "#ffffff"
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
}*/