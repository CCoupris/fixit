const clasicButton = document.querySelector('.js-clasic')
const premiumButton = document.querySelector('.js-premium')
const clasicPriceButton = document.querySelector('.js-price-tag-clasic')
const premiumPriceButton = document.querySelector('.js-price-tag-premium')
const phoneproblem = sessionStorage.getItem('phoneproblem')
console.log(phoneproblem)
const premium = document.querySelector('.js-price-tag-premium')
const classic = document.querySelector('.js-price-tag-clasic')

const clasicButtonlaptop = document.querySelector('.js-clasic-laptop')
const premiumButtonlaptop = document.querySelector('.js-premium-laptop')
const clasicPriceButtonlaptop = document.querySelector('.js-price-tag-clasic-laptop')
const premiumPriceButtonlaptop = document.querySelector('.js-price-tag-premium-laptop')
const premiumlaptop = document.querySelector('.js-price-tag-premium-laptop')
const classiclaptop = document.querySelector('.js-price-tag-clasic-laptop')

const objecttype = sessionStorage.getItem('devisetype')
const path_one = document.querySelector('.pathone')
const path_two = document.querySelector('.pathtwo')

const continueButton = document.querySelector('.js-continue-button')
const continueButtonlaptop = document.querySelector('.js-continue-button-laptop')
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
if(objecttype == 'Electronics > Communications > Telephony > Mobile Phones')
{
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
        break
  }  
}
else
{
  switch(phoneproblem){
    case 'L\'écran':
      classiclaptop.innerHTML='80,60€'
      premiumlaptop.innerHTML='140.99€'
      break;
    case 'La batterie':
      classiclaptop.innerHTML='80.99€'
      premiumlaptop.innerHTML='120.99€'
      break;
    case 'Les connecteurs':
      classiclaptop.innerHTML='59.99€'
      premiumlaptop.innerHTML='104.99€'
      break;
    case 'Le clavier':
      classiclaptop.innerHTML='90.99€'
      premiumlaptop.innerHTML='120.99€'
      break;
      default:
        console.log('Sorry, you need to go to the previous page to make your test')
        break
  }  
}


// Option selection
clasicButton.addEventListener('click', () =>
{
  sessionStorage.setItem('pricetype','classic')
  sessionStorage.setItem('price',classic.innerHTML)
  if(clasicButton.style.backgroundColor == "white"){
    clasicButton.style.backgroundColor = "#B42F3C"
    clasicButton.style.color = "#ffffff"
    clasicPriceButton.style.color = "#ffffff"
    }
    else{
      clasicButton.style.backgroundColor = "white"
      clasicButton.style.color = "black"
      clasicPriceButton.style.color = "black"
    }
  continueButton.style.backgroundColor = "#B42F3C"
})

premiumButton.addEventListener('click', () =>
{
  sessionStorage.setItem('pricetype','premium')
  sessionStorage.setItem('price',premium.innerHTML)
  if(premiumButton.style.backgroundColor == "white"){
    premiumButton.style.backgroundColor = "#B42F3C"
    premiumButton.style.color = "#ffffff"
    premiumPriceButton.style.color = "#ffffff"
    }
    else{
      premiumButton.style.backgroundColor = "white"
      premiumButton.style.color = "black"
      premiumPriceButton.style.color = "black"
    }
  continueButton.style.backgroundColor = "#B42F3C"
})
// Option selection laptop
clasicButtonlaptop.addEventListener('click', () =>
{
  sessionStorage.setItem('pricetype','classic')
  sessionStorage.setItem('price',classiclaptop.innerHTML)
  if(clasicButtonlaptop.style.backgroundColor == "white"){
    clasicButtonlaptop.style.backgroundColor = "#B42F3C"
    clasicButtonlaptop.style.color = "#ffffff"
    clasicPriceButtonlaptop.style.color = "#ffffff"
    }
    else{
      clasicButtonlaptop.style.backgroundColor = "white"
      clasicButtonlaptop.style.color = "black"
      clasicPriceButtonlaptop.style.color = "black"
    }
  continueButtonlaptop.style.backgroundColor = "#B42F3C"

})

premiumButtonlaptop.addEventListener('click', () =>
{
  sessionStorage.setItem('pricetype','premium')
  sessionStorage.setItem('price',premiumlaptop.innerHTML)
  if(premiumButtonlaptop.style.backgroundColor == "white"){
  premiumButtonlaptop.style.backgroundColor = "#B42F3C"
  premiumButtonlaptop.style.color = "#ffffff"
  premiumPriceButtonlaptop.style.color = "#ffffff"
  }
  else{
    premiumButtonlaptop.style.backgroundColor = "white"
    premiumButtonlaptop.style.color = "black"
    premiumPriceButtonlaptop.style.color = "black"
  }
 
  continueButtonlaptop.style.backgroundColor = "#B42F3C"

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