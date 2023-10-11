

document.getElementById('btn-deposite').addEventListener('click', function(){
    const depositeValue = getNewinputAmountById('inp-deposite');
    const myDeposite = getTextElememtValueById('my-deposite');
    const myBalance = getTextElememtValueById('my-balance');
    if (depositeValue < 10) {
        alert('Sorry !!! You should deposite atlist 10$');
        return;
    }
    const totalDeposite = depositeValue+myDeposite;
    setNewTextValue('my-deposite', totalDeposite);
    const totalBalance = depositeValue + myBalance;
    setNewTextValue('my-balance', totalBalance);
});