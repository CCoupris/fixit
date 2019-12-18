class Open {
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

let list = document.querySelectorAll("h4")
let faq = new Open()
for (let i = 0; i < list.length; i++) {
  list[i].addEventListener("click", function() {
    faq.open(i,list)
  })
}


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