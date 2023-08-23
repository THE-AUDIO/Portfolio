const injection = document.querySelector('.hidden');
const btn = document.querySelector('.span_class');
const nav = document.querySelector('.nav_barre');
const form = document.getElementById('form')
console.log(nav)
btn.addEventListener('click',function(){
    injection.classList.toggle('vue');
    btn.classList.toggle('show')

});
window.onscroll = function () {
    if (window.scrollY){
       form.classList.add('form')
       console.log('ok');
    }
    else{
        form.classList.remove('form')
    }
}
window.onscroll();
