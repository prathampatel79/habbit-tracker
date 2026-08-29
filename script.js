function addHabbit() {
    const input = document.querySelector("#input");
    const habbit = input.value;

    const display = document.querySelector("#habbit-displayer")
    display.innerHTML = habbit;

    
}
const button = document.querySelector("#add-button")
button.addEventListener("click", addHabbit)


