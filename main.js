const total = document.querySelector('#total');
const btn = document.querySelector('#btn');
const tip = document.querySelector('#tip');
const rate = document.querySelector('#rate');
const result = document.querySelector('#result');
btn.addEventListener("click",calculate);


function calculate()
{
    const tax = 5.50;
    
    tip.textContent='Tip: $' + ((rate.value*total.value)/100.0);
    calctotal = (rate.value*total.value/100.0)+Number(total.value)+tax;
    result.textContent = 'Your Total is: $'+calctotal;
}

