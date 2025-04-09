//Names DOM
const elementCardName = document.getElementById("userName");
const elementNameInput = document.getElementById("nameInput");

//Numbers DOM
const elementCardNumber = document.getElementById("numbers");
const elementNumberInput = document.getElementById("numberInput");

//Date & Year DOM
const elementCardMm = document.getElementById("mm");
const elementMnInput = document.getElementById("mmInput");

const elementCardYy = document.getElementById("yy");
const elementYyInput = document.getElementById("yyInput");

const elementCardCvc = document.getElementById("cvc");
const elementCvcInput = document.getElementById("cvcInput");

//Button
const elementButtonSubmit = document.getElementById("button");
//Expresiones regulares:
//(!/[0-9]/.test(elementNameInput.value)) //no Numeros
// (!/[a-z]/gi.test(elementMnInput.value))//letras Numeros
//
const nameSyncAndChange = () => {
  const name = elementNameInput.value;
  if (!/[0-9]/.test(elementNameInput.value)) { // tampoco puede leer iconos
    elementCardName.textContent = name;
  } else {
    elementNameInput.disabled;
  }
};

const numberSyncAndChange = () => {
  const numbers = elementNumberInput.value; 
  if (!/[a-z]/gi.test(elementNumberInput.value)) { // tampoco puede leer iconos
    elementCardNumber.textContent = numbers;
  }
};

const mmSyncAndChange = () => {
  const month = elementMnInput.value;
  if (!/[a-z]/gi.test(elementMnInput.value)) {
    elementCardMm.textContent = month;
  }
};

const yySyncAndChange = () => {
  const year = elementYyInput.value;
  if (!/[a-z]/gi.test(elementYyInput.value)) {
    elementCardYy.textContent = year;
  }
};

const cvcSyncAndChange = () => {
  const cvc = elementCvcInput.value;
  if (!/[a-z]/gi.test(elementCvcInput.value)) {
    elementCardCvc.textContent = cvc;
  }
};

const validateInputContextName = () => {
    if (/[0-9]/.test(elementNameInput.value))
};

//Sync events
elementNameInput.addEventListener("input", nameSyncAndChange);
elementNumberInput.addEventListener("input", numberSyncAndChange);
elementMnInput.addEventListener("input", mmSyncAndChange);
elementYyInput.addEventListener("input", yySyncAndChange);
elementCvcInput.addEventListener("input", cvcSyncAndChange);

//Validate events
elementButtonSubmit.addEventListener("click", validateInputContext);
