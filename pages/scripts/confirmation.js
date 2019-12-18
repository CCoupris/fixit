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

let list = document.querySelectorAll("li")
let faq = new Open()
for (let i = 0; i < list.length; i++) {
  list[i].addEventListener("click", function() {
    faq.open(i,list)
  })
}
