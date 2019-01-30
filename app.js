'use strict';
const Readline = require('readline'); // for including readline module in your application
const rl = Readline.createInterface({ // Creates an Interface object
    input: process.stdin,
    output: process.stdout,
    terminal: false

});
const matcher = require('./matcher'); // to use the matcher module here
rl.setPrompt('> ');
rl.prompt();
rl.on('line', reply => {
    matcher(reply, cb => {
        switch(cb.intent){
            case 'Hello':
            console.log('Salut les amis');
            break;

            case 'Exit':
            console.log('Byebye');
            break;

            case 'Weather':
            console.log('The weather is nice');
            break;

            case 'Today':
            console.log('The weather today is');
            break;
        }
    });
});
