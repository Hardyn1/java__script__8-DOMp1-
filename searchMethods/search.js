// Методы поиска элементов.
// 1. quarySelectorAll() - поиск по css селектору.
// Возвращает все элемент которые в аргументе указаны.
let elems = document.querySelectorAll("ul, li");
let elems2 = document.querySelectorAll("ul>li:last-child"); //дотянуться в ul до li последнего элемента.
console.log(elems);
console.log(elems2); //последний li.

// quarySelectorAll().
let elems3 = document.querySelectorAll("first-li");
console.log(elems3);

// 2. quarySelector() - поиск по css классу.
// Возвращает 1 попавшийся элемент который в аргументе указаны.
let elems4 = document.querySelector(".li-first"); //возвращает 1 элемент который соответствует данному селектору.
console.log(elems4);
