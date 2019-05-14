let dataKey = '1';
let test2__ul = document.getElementById('test2__ul');
let test2__menu = document.getElementById('test2__menu');
let test2__container = document.getElementById('test2__container');
[].forEach.call(test2__ul.getElementsByTagName('li'), (el) => {
    el.onclick = () => {
        test2__ul.querySelector(`[data-key="${dataKey}"]`).classList.remove('active');
        dataKey = el.getAttribute('data-key');
        el.classList.add('active');
        test2__menu.innerHTML = el.innerHTML;
        test2__container.blur();
    }
});
