// ПРАВИЛЬНОЕ ПОДКЛЮЧЕНИЕ JS.
// <script src="main.js"></script> Если подключать поверх всего кода HTML то в console выводит null.
// main.js ищет элемент div, сверху вниз. Если что то нарушено то модель DOM,
// не успеет прогрузиться и выведет ошибку.
let divs = document.getElementById("div");
let ps = document.getElementById("p");
console.log(divs);
console.log(ps);
// Еще один вариант подключения JS.
// Свойство onload.
// Обьект WINDOW вызовет любую фукнцию, связанную со свойством onload, но только после того,
// как страница будет полностью загружена.
function init(){
    let div = document.getElementById("div");
    let p = document.getElementById("p");

    console.log(div);
    console.log(p);
}
// ЕСТЬ ЕЩЕ 1 ГЛОБАЛЬНЫЙ ОБЬЕКТ ЭТО WINDOW, ОН ГЛОБАЛЬНЕЕ DOCUMENT.
// WINDOW ПРЕДСТАВЛЯЕТ ОКНО ВСЕГО SБРАУЗЕРА.
// У WINDOW есть метод ONLOAD.
// onload вызывает функцию но только тогда, когда загрузится вся наша страница.
// в нашем случае функция init сработает, когда полностью загрузится страница.
window.onload = init;