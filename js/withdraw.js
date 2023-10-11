document.getElementById('btn-withdraw').addEventListener('click', function(){
    const newainputValue = getNewinputAmountById('inp-withdraw');
    const withdraw = getTextElememtValueById('my-withdraw');
    const balance = getTextElememtValueById('my-balance');
    if (newainputValue > balance ) {
        alert('Sorry !!! Insafecient balance');
        return;
    };
    const totalWithdraw = newainputValue + withdraw ;
    setNewTextValue('my-withdraw', totalWithdraw);
    const afterWithdrawBalance = balance - newainputValue ;
    setNewTextValue('my-balance', afterWithdrawBalance);
});