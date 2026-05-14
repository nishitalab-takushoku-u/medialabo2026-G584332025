function greeting(){
    num1 = Number(i1.value);
    num2 = Number(i2.value);
    span.textContent = num1 + num2;
}
p = document.querySelector('button#calc');
p.addEventListener('click',greeting);
i1 = document.querySelector('input#left');
i2 = document.querySelector('input#right');
i1.value;
i2.value;
span = document.querySelector('span#answer');
