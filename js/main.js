
let btn = document.querySelector('.header__btn');

console.log(btn);
btn.addEventListener('click', (e) => {
    window.scroll  ({
        top: 900,
        behavior: 'smooth'
    })
})



document.addEventListener('click', documentClick);

function  documentClick(e) {
    const targetItem = e.target;

    if (targetItem.closest('.icon-menu')) {
        document.documentElement.classList.toggle('menu-open');
    }
}