"use strict"

// как работает оператор new

// function Cat(color, name) {
//     this.color = color
//     this.name = name
// }
// // const cat = new Cat('black', 'Кот');

// // console.log(cat)

// function TestNew(constructor, ...args) {
//     const obj = {}
//     Object.setPrototypeOf(obj, constructor.prototype)
//     return constructor.apply(obj, args) || obj

// }

// const cat = new TestNew("black", 'Кот')

// console.log(cat)