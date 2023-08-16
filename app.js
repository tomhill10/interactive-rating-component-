const containerOne = document.getElementById("container1");
const containerTwo = document.getElementById("container2");
const submitButton = document.getElementById("button");
const numbers = document.getElementsByClassName("numbers");
const selectedText = document.getElementById("selectionText")
let selectedNumber;


submitButton.addEventListener("click", submitFunc)

function submitFunc () {
    const test = "1";
    console.log(typeof(test))
    if (typeof(selectedNumber) != typeof(test)) {
        alert("Please select a number");
    }

    if (typeof(selectedNumber) == typeof(test)) {
        containerOne.style.display = "none";
        containerTwo.style.display = "flex";
        selectedText.textContent = `You selected ${selectedNumber} out of 5`;
        console.log(selectedNumber);
       
    }

 }

for (const number of numbers) {
    number.addEventListener("click", function () {
        for (const num of numbers) {
            num.classList.remove("numberSelected")
        }
        number.classList.add("numberSelected");
        selectedNumber = number.textContent;
    })
}




// Execute a function when the user presses a key on the keyboard
window.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
   submitButton.click();
  }
});