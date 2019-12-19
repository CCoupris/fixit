/*class Open {
  construction(){
  }
  open(i,list){
    let close = document.querySelector(".is-open")
    if((list[i].classList.contains("is-open"))||(!list[i].classList.contains("is-open")))
    {
      if((close != null)&&(!list[i].classList.contains("is-open"))){
        close.classList.toggle("is-open")
        list[i].classList.toggle("is-open")
      }
      else {
        list[i].classList.toggle("is-open")
      }
    }
    else
    {
        close.classList.toggle("is-open")

      }
    }
  }

let list = document.querySelectorAll("li")
let faq = new Open()
for (let i = 0; i < list.length; i++) {
  list[i].addEventListener("click", function() {
    faq.open(i,list)
  })
}*/


// CARD FORM
const cardHolder = document.querySelector('.js-card-holder')
const cardInformation = document.querySelector('.js-card-information')
const holderDisplay = document.querySelector('.card-holder-display')
const validateButton = document.querySelector('.js-button-valid')

    //
function toggleColor() {
  if (cardInformation.style.backgroundColor == "white") {
    cardInformation.style.backgroundColor = "#B42F3C";
  } else {
    cardInformation.style.backgroundColor = "white";
  }
}
    toggleColor()
cardInformation.addEventListener('click', () =>
{
    toggleColor()
    validateButton.style.backgroundColor = "#B42F3C"
})

validateButton.addEventListener("click", () =>
{
  cardHolder.classList.toggle('card-holder-display')
})

const name = sessionStorage.getItem('phonetype')
const phoneprob = sessionStorage.getItem('phoneproblem')
const pricetype = sessionStorage.getItem('pricetype')
const price = sessionStorage.getItem('price')
const where = sessionStorage.getItem('where')
const address = sessionStorage.getItem('adresse')
const hours = sessionStorage.getItem('hours')
const day = sessionStorage.getItem('day')
const jsreparation = document.querySelector('.js-reparation')
const jspremium = document.querySelector('.js-premium')
const jsprice = document.querySelector('.js-price')
const jsday = document.querySelector('.js-day')
const jsaddress = document.querySelector('.js-address')

jspremium.innerHTML= pricetype
jsreparation.innerHTML = price 
jsday.innerHTML = "Rendez-vous le "+day+" à "+hours
jsaddress.innerHTML = where +" au " + address
jsprice.innerHTML = price
jsreparation.innerHTML="L'appareil "+name+" pour un problème sur "+phoneprob