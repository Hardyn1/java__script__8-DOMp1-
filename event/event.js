// Фукнции обратного вызова и события.
// События в JS - это сигнал браузера о том что что то произошло.
// Каждому событию можно добавить функцию обратного вызова или событий.
// Одни события генерируются браузером, другие при взаимодействия пользователя со страницей.
// РАБОТА С АТРИБУТАМИ.
let btn = document.getElementById("btn");
div = document.getElementById("div");
// свойство btn.type !
console.log(btn.type); //button а type для div является стандартным.
console.log(div.type); //undefined type не является стандартным тегом для div.

// Метод getAttribute.
// С помощью метода getAttribute мы сможем получить любой атрибут у html элемента.
// В качестве аргумента мы пишем название атрибута.
let bts = document.getElementById("btn");
let attr = btn.getAttribute("type");
console.log(bts);
console.log(attr);

// Метод hasAttribute.
// С помощью метода hasAttribute, мы можем проверить есть ли у нас такой то атрибут или нет.
let btt = document.getElementById("btn");
console.log(btt.hasAttribute("button")); //false

// Метод setAttribute.
// Все обьекты element содержат метод setAttribute, который может вызываться для задания атрибутов.
// Метод принимает(2 параметра - 1:qualifiedName: в качестве string(название атрибута), 2:ее значение).
// let ell = document.querySelector(".front"); - находим по классу.
let ell = document.getElementById("front"); // находим по id.
ell.setAttribute("class", "blue-text"); //добавился class = "blue-text", был class = "front" но он перезаписался.
// Сначала класса не было затем добавили новой атрибут "class" и дали значение "blue-text".
// В index.html добавить стилями через id(#front) color blue.

// Метод removeAttribute.
// С помощью этого метода мы можем удалить какой то атрибут.
// Метод принимает атрибуты, и удалим у параграфа P его id.
let elt = document.getElementById("p");
elt.removeAttribute("id");
console.log(elt); //<p>P</p>

// ОБРАБОТЧИКИ СОБЫТИЙ В JS.
// 1 Обработчик - onclick.
// On стандартное начало название обработчика / click уже конкретное название обработки которое происходит.
//<button onclick="alert(`ты начал на кнопку`)">click</button>
// можно и console.log() вместо alert.
// при обработчики onclick будет всплывать через alert `ты нажал на кнопку`
// вместо действия alert можно использовать функцию foo().
let btq = document.getElementById("btn");
function foo() {
    // можно и с вычислениями.
    let num1 = 100;
    num2 = 200;
    console.log(num1 + num2);
    alert("ты нажал на кнопку");
};
// Можно функцию вызвать еще таким способом.
// По клику на эту кнопку мы вызываем функцию foo.
// btn.onclick = foo;
// В html из button если убрать onclick="foo()", то сработает.
// Приоритетнее будет срабатывать функция из js.
