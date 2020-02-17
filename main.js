const total = document.querySelector('#total');
const btn = document.querySelector('#btn');
const tip = document.querySelector('#tip');
const rate = document.querySelector('#rate');
const result = document.querySelector('#result');
const tax = document.querySelector('#tax');
btn.addEventListener("click",calculate);


function calculate()
{
    const taxp = 5.50;
    const tax=(taxp*total.value)/100;
    
    tip.textContent='Tip: $' + ((rate.value*total.value)/100.0);
    calctotal = (rate.value*total.value/100.0)+Number(total.value)+tax;
    result.textContent = 'Your Total is: $'+calctotal;
}

