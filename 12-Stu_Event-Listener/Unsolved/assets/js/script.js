var count = 0;
var incrementEl = document.querySelector("#increment");
var decrementEl = document.querySelector("#decrement");
var countEl = document.querySelector("#count");

function setCounterText() {
  countEl.textContent = count;
}

// TODO: Add event listener to increment button

document.addEventListener("click", function(event) {
  for (let i = 0; i < 1; i++) {
    if (event.target === incrementEl) {
      count++;
      setCounterText();
    } 
// TODO: Add event listener to decrement button 
    else if (event.target === decrementEl) {
      count--;
      setCounterText();
    }
  }
});
