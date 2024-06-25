/*
ГЛАВНОЕ !!!

Коллекция узлов доступна только для чтения, что то изменять в ней нельзя !

*/

// Цикл for of.
// Синтаксис такой: for(let ...переменная, цикл Of, название обьекта).
descendates = document.body.childNodes;
for(let node of descendates){
    console.log("узел" + node);
}; /*
узел[object Text]
forof.js:5 узел[object Comment]
forof.js:5 узел[object Text]
forof.js:5 узел[object HTMLDivElement]
forof.js:5 узел[object Text]
forof.js:5 узел[object HTMLDivElement]
forof.js:5 узел[object Text]
forof.js:5 узел[object HTMLDivElement]
forof.js:5 узел[object Text]
forof.js:5 узел[object HTMLDivElement]
forof.js:5 узел[object Text]
forof.js:5 узел[object HTMLScriptElement]
forof.js:5 узел[object Text]
forof.js:5 узел[object HTMLScriptElement]
    */

// Перебор циклом forEach.
descendates.forEach(function (item) {
    console.log(item);
});

// Метод map не работает.
// let newArray = descendates.map(function(element){
//     return element;
// });
// console.log(newArray);

// Чтобы перебирать коллекцию узлов, обязательно использовать цикл FOR OF.
