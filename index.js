const injection = document.querySelector('.hidden');
const btn = document.querySelector('.span_class');
btn.addEventListener('click',function(){
    injection.classList.toggle('vue');
    btn.classList.toggle('show')

});
