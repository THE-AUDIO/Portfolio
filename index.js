const injection = document.querySelector('.hidden');
const btn = document.querySelector('.span_class');
const nav = document.querySelector('.nav_barre');
const form = document.getElementById('form')
const tech = document.querySelector('.tech')
btn.addEventListener('click',function(){
    injection.classList.toggle('vue');
    btn.classList.toggle('show')

});
window.onscroll = function () {
    if (window.scrollY){
       form.classList.add('form')
       tech.classList.add('tech1')
    }
    else{
        form.classList.remove('form')
        tech.classList.remove('tech1')
    }
}
window.onscroll();
