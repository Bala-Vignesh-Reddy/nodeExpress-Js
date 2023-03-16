const EventEmitter = require('events');

const customEmitter = new EventEmitter()

// on - listen for an event
// emit - emit an event
// we can n number of response we want
// first on should be used then only emit should be used
customEmitter.on('response', (name, id)=>{
    console.log(`data recieved user ${name} with id: ${id}`);
})
customEmitter.on('response', ()=>{
    console.log('data recieved');
})

customEmitter.emit('response', 'john', 18);

