const txt = document.querySelector('p');
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
   txt.textContent = 'ボタンをクリックしました';
});