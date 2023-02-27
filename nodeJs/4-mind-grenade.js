//we have created this module and if we require it in main file and if we not assign any 
// variable to it then also it will work, since it is invoked it here

const num1 = 5;
const num2 = 10;

add = () => {
    console.log(`num1 + num2 = ${num1 + num2}`);
}

add()


// main file code can be
// require('./4-mind-grenade')
//this will do the same