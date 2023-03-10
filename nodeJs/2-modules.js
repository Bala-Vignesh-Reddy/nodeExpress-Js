// Common Js, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
// console.log(module) can be used to see the details of module

const names = require('./2-namesModule')
// const {john, riya} = require('./2-namesModule')  another way to destructing it

const sayHi = require('./2-utilsModule')

console.log(names);

sayHi('peter')
// sayHi(john)
sayHi(names.john)
sayHi(names.riya)

//more about modules and function inside modules
const names = require('./3-alternative-way')
require('./4-mind-grenade')

console.log(names.items);
console.log(names.singlePerson);