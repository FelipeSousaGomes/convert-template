const amount = document.getElementById("amount");
const currency = document.getElementById("currency")
const form = document.querySelector("form")

amount.addEventListener("input", () => {
  const hasCharactersRegex = /\D+/g;

  amount.value = amount.value.replace(hasCharactersRegex, "");
});

form.onsubmit = (event) => {
    
  event.preventDefault()

  console.log(currency.value)
}


