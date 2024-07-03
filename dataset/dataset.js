/* dataset.
    Внутри data атрибутов могут хранится любые данные кроме обьекта.
    Чтобы написать data атрибут: ключевое слово data - и название атрибута(любое на выбор).
    Посмотри какие значения находятся в атрибутах.
*/ 

let lis = document.querySelectorAll(".li-elem")[0]; //так как это псевдо массив, то по индексу [0] тоже можно обращаться.
console.log(lis.dataset.index); // 1 - значение у первого li-elem = 1.
// Если [3] получаем значение 4 потому что псевдо массив и счет идет с 0.
console.log(lis.dataset.string); // first-li.