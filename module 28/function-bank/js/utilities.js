function getInputFieldValueById(inputFieldID) {
  const inputField = document.getElementById(inputFieldID);
  const inputFieldValueString = inputField.value;
  const inputFieldValue = parseFloat(inputFieldValueString);
  inputField.value = '';
  return inputFieldValue;
}

function getTextElementValueById(elementID) {
  const textElement = document.getElementById(elementID);
  const textElementValueString = textElement.innerText;
  const textElementValue = parseFloat(textElementValueString);
  return textElementValue;
}

function setTextElementValueById(element, newValue) {
  const textElement = document.getElementById(element);
  textElement.innerText = newValue;
}
