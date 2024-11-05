const root = document.querySelector(':root');
const btn = document.querySelector('.slider');
const bellBtn = document.querySelector('.bell');

let amount = 0;
let theRoot = document.documentElement;

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

let bellAmount = 0;

bellBtn.addEventListener('click', () => {
    if (bellAmount % 2 == 0) {
    theRoot.style.setProperty('--notification-pop', "visible");
    } else {
        theRoot.style.setProperty('--notification-pop', "hidden");  
    }

    let change = getPosition(bellBtn);
    theRoot.style.setProperty('--popdown-position', change.x + "px");

    bellAmount++;
});

function getPosition(element) {
    var rect = element.getBoundingClientRect();
    return {
        x: rect.left,
        y: rect.top
    };
}



window.addEventListener('resize', () => {
    let change = getPosition(bellBtn);
    theRoot.style.setProperty('--popdown-position', change.x + "px");
});
