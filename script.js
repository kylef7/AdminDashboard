const root = document.querySelector(':root');
const btn = document.querySelector('.bell');

let amount = 0;

document.querySelector(".sliderContainer").addEventListener('click', () => {
    if (amount % 2 == 0) {
        root.classList.add('dark');
        btn.classList.add('moveForward');
    } else {
        root.classList.remove('dark');
        btn.classList.remove('moveForward');
    }

    amount++
})