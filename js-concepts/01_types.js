"use strict"

// всего 7 типов

// null - примитив
// undefined - примитив
// boolean - примитив
// number - примитив
// string - примитив
// object - НЕпримитив
// symbol - примитив


// Приведение типов

// falsy values : "", 0, null, undefined, NaN, false

// пустой [], {}, func - приводятся к true

// Строки и числа

// если number * str - number
// если number - str - number
// если 42px - 2 - NaN
// undefined + 42 - NaN

// == vs ===

// == сравняет значение с приведением типов
// === сравнение без приведения типов

// неоднозначные моменты

// false == '' - true
// false == [] - true
// false == {} - false
// '' == 0 - true
// '' == {} - false
// 0 == [] - true
// 0 == {} - false

