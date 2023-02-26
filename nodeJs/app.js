const names = require('./2-namesModule')
// const {john, riya} = require('./2-namesModule')  another way to destructing it

const sayHi = require('./2-utilsModule')

console.log(names);

sayHi('peter')
// sayHi(john)
sayHi(names.john)
sayHi(names.riya)