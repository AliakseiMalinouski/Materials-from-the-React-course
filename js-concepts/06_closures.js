"use strict"

// Замыкания

// Замыкания - это когда функция имеет доступ к переменным к вышестоящему scope,
// т.e замыкание переменных из внешнего scope


// function saySomething(param) {
//     const message = 'message ' + param; // замкнутая переменная
//     return function () {
//         console.log(message) - // данная функция замыкает доступ к переменной message
//     }
// }

// Даже если функция saySomething закончит полностью свою работу,
// то она не будет уничтожена, так как ее внутрення функция,
// замыкает доступ к переменной, которая была объявлена в функции saySomething

// на самом деле, в js всё является замыканиями

// const helloToSomebody = saySomething('Name')

// Практические примеры замыкании

// function createFrameworkManager() {
//     const fw = ['React, Angular, Vue']; // замкнутая переменная
    
//     return {
//         print: function () {
//             console.log(fw);
//         },
//         add: function (framework) {
//             fw.push(framework);
//         }
//     }
// }

// const manager = createFrameworkManager();
// manager.print();


// пример замыкании с setTimeout()

// const fib = [1, 2, 3, 5, 8, 13]

// for (let i = 0; i < fib.length; i++) {
//     setTimeout(function () {
//         console.log(`fib ${i} = ${fib[i]}` )
//     }, 1500)
// }

// for (let i = 0; i < fib.length; i++) {
//     (function (j) {
//         setTimeout(function () {
//         console.log(`fib ${j} = ${fib[j]}` )
//     }, 1500)
//     })(i)
// }