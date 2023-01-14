"use strict"

// Контекст - определяет как функция была вызвана
// указывает на this, с ним связанные методы call(), bind()

// const person = {
//     surname: 'Старк',
//     knows: function (what, name) {
//         console.log( `Ты ${what} знаешь, ${name} ${this.surname}`)
//     }
// }

// // call() - первым параметром принимает контекст,  т.e объект,
// // а потом остальные параметры

// const john = {
//     surname: "Сноу",
// }

// // apply() - принимает два параметра, второй параметр всегда массив

// person.knows('все', 'Бран');
// person.knows.call(john, 'ничего не', 'Джон');
// person.knows.apply(john, ['ничего не', 'Джон']);

// // bind () - принимает первым параметров контекст, отличие,
// // возвращает новую функцию, имеет множество аргументов

// const bound = person.knows.bind(john, 'ничего не', 'Джон');

// function Person (name, age) {
//     this.name = name
//     this.age = age
// }

// let aliaskei = new Person("Aliaksei", 19);

// // Aliaksei === this внутри Person


// // явный bind, когда мы указываем, с каким контекстом будет работать

// function logThis () {
//     console.log(this)
// }

// const obj = {num: 42}
// logThis.apply(obj)
// logThis.call(obj) // - привязываем контект к функции logThis
// logThis.bind(obj)()

// неявный

// const animal = {
//     legs: 4,
//     logThis: function () {
//         console.log(this) // объект === animal
//     }
// }


// function Cat (color) {
//     this.color = color
//     console.log('This ', this);
//     (() => console.log('Arrow this ', this))()
// }

// let cat = new Cat('red')