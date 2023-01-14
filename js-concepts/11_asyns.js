"use strict"

const first = () => console.log('first') 
const second = () => console.log('second') 

// если завернуть в setTimeout порядок вывода изменится
// если func в setTimeout, тогда func помещается в callback queue