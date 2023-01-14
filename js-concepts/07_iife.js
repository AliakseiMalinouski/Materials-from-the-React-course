"use strict";

// IIFE - Immediate Invoked Function Expression

// пример:

// (function () {

// })()  -  вызываются моментально

// let result = []
// // for (var i = 0; i < 5; i++) {
// //     result.push(function () {
// //         console.log(i)
// //     })
// // }

// // result[2]();

// for (var i = 0; i < 5; i++) {
//     (function () {
//         let j = i
//         result.push(function () {
//         console.log(j)
//     })
//     })()
// }

