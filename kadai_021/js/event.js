// const text = document.querySelector('p');
// const btn = document.querySelector('button');

// setTimeout(() => { 
//     btn.addEventListener('click', () => {
//         text.textContent = 'ボタンをクリックしました';
//         text.classList.add('--active');
//     });
// }, 5000);


const text = document.querySelector('p');
const btn = document.querySelector('button');


// btn.addEventListener('click', () => {
//         text.textContent = 'ボタンをクリックしました';
        
//     });

    
    

    btn.addEventListener('click', () => {
        setTimeout(() => {
        text.textContent = 'ボタンをクリックしました';
    }, 2000)});

