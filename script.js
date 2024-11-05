const root = document.querySelector(':root');
const btn = document.querySelector('.bell');

let amount = 0;

btn.addEventListener('click', () => {
    if (amount % 2 == 0) {
        root.classList.add('dark');
    } else {
        root.classList.remove('dark');
    }

    amount++
})