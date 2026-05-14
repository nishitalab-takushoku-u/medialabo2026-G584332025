function greeting(){
     console.log('こんにちは、'+aisatsu+'さん');
}
    b = document.querySelector('button#print');
b.addEventListener('click', greeting);
i = document.querySelector('input[name="shimei"]');
i.getAttribute('name');
i.value;
p = document.querySelector('p#message');
aisatsu = i.value;
p.textContent = 'こんにちは、'+aisatsu+'さん';
