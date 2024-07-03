/* DOM (Document Object Model) - обьектаная модель документа.
Чтобы язык HTML разметки И язык программирования JavaScripts работали вместе для этого и есть DOM.
В JS все является обьектами и с обьектами JS работать удобнее всего.
Корнем дерева является DOCUMENT на нем как бы и строится.
Через обьект DOCUMENT можем иметь доступ ко всей нашей структуре дерева.
Каждый представленный блочок это обьект и у обьекта есть свойства и методы.
Каждый тег который есть в дереве называется узлом (он представлен ввиде классического обьекта).
Если есть узел с текстом, то это текстовый узел.
У тегов так же есть родственные связи: (родитель, дочерний, если на одном уровне теги расположены то соседи ).
*/

// Как получить DOM элемент в JS ?
// Чтобы использовать элемент из HTML, надо обратиться к главному обьекту DOCUMENT.
// Дальше DOCUMENT и его метод getElementById(принимает аргумент в виде строки под ID ("html")).
// Теперь переменная становится ссылкой на обьект и у нее есть свои методы и свойства.
// Один из самых главных обьектом HTML это DOCUMENT.
let html = document.getElementById("html");
let css = document.getElementById("css");
let js = document.getElementById("javascript");
// 1 узел - html. 
// 2 узел - css.
// 3 узел - js.
console.log(html);
console.log(css);
console.log(js);

// У ссылки есть свойство innerHTMl, можно добавить к console.log(...InnerHTML).
console.log(html.innerHTML);

// Значение на HTML странице между менять через JS таким образом.
// Например - html.innerHTML = "php";
// Так как переменные теперь ссылки на обьект, и являются обьектами то,
// у них есть свойство innerHTML.

// Научились брать теги из одних мест и класть в другие.
html.innerHTML = "php";
css.innerHTML = "Sss";
js.innerHTML = "dotcom";

let result = getElementById = "result";

let text1 = html.innerHTML,
    text2 = css.innerHTML,
    text3 = js.innerHTML;
result.innerHTML = "я знаю технологии такие как " + text1 + " " + text2 + " " + text3;

// свойство innerHTML используется для изменения содержимого нашего элемента.
// Как еще получить DOM элементы ?
// Можно обратить напрямую к тегу, а не по классу или id.
html = document.documentElement;
head = document.head;
// body = document.body;
console.log(html); //весь тег html со всем его содержимым.
console.log(head); //весь тег head со всем его содержимым.
// console.log(body); //весь тег body со всем его содержимым.

// chilNodes коллекция потомков.
// childNodes НЕ МАССИВ ! МЕТОДЫ МАССИВА РАБОТАТЬ НЕ БУДУТ !
let descendates = document.body.childNodes;
console.log(descendates); //список узлов, можем посмотреть коллекцию элементов которые у нас лежат внутри body.
for(let i = 0; i < descendates.length; i++){
    console.log("узел" + descendates[i]);
};/*
узел[object Text]
main.js:61 узел[object Comment]
main.js:61 узел[object Text]
main.js:61 узел[object HTMLDivElement]
main.js:61 узел[object Text]
main.js:61 узел[object HTMLDivElement]
main.js:61 узел[object Text]
main.js:61 узел[object HTMLDivElement]
main.js:61 узел[object Text]
main.js:61 узел[object HTMLDivElement]
main.js:61 узел[object Text]
main.js:61 узел[object HTMLScriptElement]
    */

// СОСЕДИ И РОДИТЕЛИ.
// СВОЙСТВА FIRSTCHILD & LASTCHILD.
let firstEl = document.body.firstChild,
    lastEl = document.body.lastChild;
console.log(firstEl); //#text
console.log(lastEl); //script

// Другой способ.
let firstElem = document.getElementById("ul").firstChild; //#text
// Выводит текстовый узел #text.
console.log(firstElem);

// Соседи
// Соседи это узлы, у которых один и тот же родитель.
// Метод parentNode поможет нам дотянуться от дочернего элемента к родителю.
// Метод nextSibling / previousSibling поможет нам дотянуться до соседа справа, и соседа слева соответственно.
let body = document.body;
console.log(body.children); //все children которые есть у body (без текстовых узлов);
let results = document.getElementById("result");
console.log(results.parentNode); //общий родитель body.

// THIS В DOM.
// Внутри обработчика THIS ссылается на текущий элемент.
// Узнать по какому элементу кликнули если воспльзовались коллекцией событий, используем THIS.
let elemP = document.querySelectorAll(".elem-btn");
for(let node of elemP) {
    node.onclick = function(){
        console.log(this);
    };
};

// addEventListener.
// В тот момент когда нам нужно повесить сразу несколько событий на один элемент.
// 1: параметр - какое событие мы будем слушать, на данный момент это click.
// 2: параметр - ставится функция которая будет вызываться в тот момент когда мы по ней кликаем.
let elems = document.querySelectorAll(".elem-btn");

function foo1() {
console.log("вызов 1");
};

function foo2() {
console.log("вызов 2");
};

elems = addEventListener("click", foo1); //вызов 1
elems = addEventListener("click", foo2); //вызов 2