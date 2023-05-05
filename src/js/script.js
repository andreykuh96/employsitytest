const select = document.querySelector('.form__input_select');
const list = document.querySelector('.form__input_select ul');
const items = list.querySelectorAll('li');
const span = select.querySelector('span');

select.addEventListener('click', (e) => {
    const target = e.target;
    if (target) {
        select.classList.toggle('form__input_select_active');
    }
});

items.forEach(item => {
    item.addEventListener('click', () => {
        span.innerHTML = item.innerHTML;
    });
});