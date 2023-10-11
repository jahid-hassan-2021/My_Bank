 function getNewinputAmountById(inputId) {
    const getNewInput = document.getElementById(inputId);
    const newInputString = getNewInput.value;
    const newinput = parseFloat(newInputString);
    getNewInput.value = '';
    return newinput;
 }
 function getTextElememtValueById(textValueId) {
    const getNewTextValue = document.getElementById(textValueId);
    const NewTextValueString = getNewTextValue.innerText;
    const NewTextValue = parseFloat(NewTextValueString);
    return NewTextValue;
 }
function setNewTextValue(textId, textValue) {
    const setNewValue = document.getElementById(textId);
    setNewValue.innerText = textValue;
}