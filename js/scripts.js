//Names DOM
const elementCardName = document.getElementById("userName")
const elementNameInput= document.getElementById("nameInput")

//Numbers DOM
const elementCardNumber = document.getElementById("numbers")
const elementNumberInput = document.getElementById("numberInput")

//Date & Year DOM
const elementCardMm = document.getElementById("mm")
const elementMnInput = document.getElementById("mmInput")

const elementCardYy = document.getElementById("yy")
const elementYyInput = document.getElementById("yyInput")

const elementCardCvc = document.getElementById("cvc")
const elementCvcInput = document.getElementById("cvcInput")

//
const nameSyncAndChange = () =>{
    const name = elementNameInput.value;
    if(!/[0-9]/.test(elementNameInput.value))
        {
        elementCardName.textContent = name;
        } else {
            elementNameInput.disabled // evito que lo escriba en la tarjeta pero como evito para que no se escriba en el campo de texto?
        }
}

elementNameInput.addEventListener("input", nameSyncAndChange);