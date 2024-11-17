const textEl = document.getElementById("text-input")
const emailEl = document.getElementById("email-input")
const passEl = document.getElementById("password-input")
const btnEl = document.getElementById("btn")

const nameResult = document.getElementById("name-result")
const emailResult = document.getElementById("email-result")
const passwordResult = document.getElementById("password-result")

const resultCon = document.querySelector(".result-container")
const inputArea = document.querySelector(".input-area")


function fetchDetails() {
    const textEl = document.getElementById("text-input");
    const emailEl = document.getElementById("email-input");
    const passEl = document.getElementById("password-input");

    const nameResult = document.getElementById("name-result")
const emailResult = document.getElementById("email-result")
const passwordResult = document.getElementById("password-result")

if(textEl.value.length === 0 && emailEl.value.length === 0 && passEl.value.length === 0) {
    // alert("Input field cannot be empty")
    inputArea.classList.add("vibrate")
    resultCon.classList.add("hide-result-container")
} else {
    
    resultCon.classList.remove("hide-result-container")
    resultCon.classList.add("down-result-container")
    nameResult.textContent = textEl.value;
    emailResult.textContent = emailEl.value;
    passwordResult.textContent = passEl.value;
}
  
}

btnEl.addEventListener("click", () => {
    fetchDetails();
})