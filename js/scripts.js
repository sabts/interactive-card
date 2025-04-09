//Card DOMS
const elementCardName = document.getElementById("userName");
const elementCardNumber = document.getElementById("numbers");
const elementCardMm = document.getElementById("mm");
const elementCardYy = document.getElementById("yy");
const elementCardCvc = document.getElementById("cvc");

//Form DOMS
const elementForm = document.getElementById("form")
const elementNameInput = document.getElementById("nameInput");
const elementNumberInput = document.getElementById("numberInput");
const elementMnInput = document.getElementById("mmInput");
const elementYyInput = document.getElementById("yyInput");
const elementCvcInput = document.getElementById("cvcInput");
const elementButtonSubmit = document.getElementById("button");

//Error DOMS 
const cardNameError = document.getElementById("card-name-error");
const cardNumberError = document.getElementById("card-number-error");
const cardDateError = document.getElementById("card-date-error");
const cardCvcError = document.getElementById("card-cvc-error");

//Expresiones regulares: espacios(si el campo esta vacio)
const letters = /[^a-zA-ZñÑ\s]+$/; //letras y espacios
const numbers = /\d+/;  //numeros
const month = /^(0[1-9]|1[0-2])$/;

//Sync funtions
const nameSyncAndChange = () => {
  const name = elementNameInput.value;
  elementCardName.textContent = name;
};

const numberSyncAndChange = () => {
  const digits = elementNumberInput.value; 
  elementCardNumber.textContent = digits;
};

const mmSyncAndChange = () => {
  const month = elementMnInput.value;
    elementCardMm.textContent = month;
};

const yySyncAndChange = () => {
  const year = elementYyInput.value;
  elementCardYy.textContent = year;
};

const cvcSyncAndChange = () => {
  const cvc = elementCvcInput.value;
  elementCardCvc.textContent = cvc;
};

//Validate Funtions
const validateInputContextName = () => {
  event.preventDefault();
  //const name = elementNameInput.value;
  
  if (letters.test(elementNameInput.value)) {
    elementNameInput.classList.remove('invalid')
    cardNameError.classList.remove('show');} 

  else if (elementNameInput.value === "")
    {elementNameInput.classList.add('invalid')
    cardNameError.classList.add('show');
    cardNameError.textContent = 'Can’t be blank'; }

    else {
    elementNameInput.classList.add('invalid');
    cardNameError.classList.add('show');
    cardNameError.textContent = 'Wrong format, letters only'; } 
  }  

const validateInputContextNumber = () => {}

//Sync events
elementNameInput.addEventListener("input", nameSyncAndChange);
elementNumberInput.addEventListener("input", numberSyncAndChange);
elementMnInput.addEventListener("input", mmSyncAndChange);
elementYyInput.addEventListener("input", yySyncAndChange);
elementCvcInput.addEventListener("input", cvcSyncAndChange);

//Validate events
elementForm.addEventListener("submit",validateInputContextName)
