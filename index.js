const injection = document.querySelector('.hidden');
const btn = document.querySelector('.span_class');
btn.addEventListener('click',function(){
    injection.classList.toggle('vue');
});

const textToType = document.querySelector('h3');

const typingElement = document.querySelector(".mesInfo");

let charIndex = 0;

function typeText() {
  if (charIndex < textToType.length) {
    typingElement.textContent += textToType.charAt(charIndex);
    charIndex++;
    setTimeout(typeText, 100);
  }
}

typeText();
