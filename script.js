
/* With the help of Google and Youtube as always */  

function displayThankYouMessage() {

const container = document.querySelector(".container")
const rates = document.querySelectorAll(".rate")
const button = document.querySelector(".btn")
const rating = document.querySelector("#grade")
const thankYouCard = document.querySelector(".thankYouCard") 

for (let i = 0; i<rates.length; i++){
    rates[i].addEventListener('click', () =>{
       rating.innerHTML = rates[i].innerHTML
    })
}

button.addEventListener("click", () => {
    container.style.display = "none"
    thankYouCard.style.display = "block"

 })



 }


displayThankYouMessage()
