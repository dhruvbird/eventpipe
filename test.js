var EventPipe = require('./eventpipe.js').EventPipe;

var ep = new EventPipe();
ep.setMaxListeners(20);

function print_rest(s) {
    var _s = s.split(' ');
    console.log(s);
    return [ _s.slice(1).join(' ') ];
}

function return_false() {
    return false;
}

function return_nothing(s) {
    console.log(s);
}

ep.on('log', print_rest, 10);
ep.on('log', print_rest, 20);
ep.on('log', print_rest, 30);
ep.on('log', print_rest, 40);
ep.on('log', print_rest, 80);
ep.on('log', print_rest, 90);
ep.on('log', print_rest); // Default priority is 50
ep.on('log', print_rest); // Default priority is 50
ep.on('log', return_nothing, 15);
ep.on('log', return_false, 55);
ep.once('log', function() { console.log("ONCE"); }, 0);

ep.emit('log', 'The Quick Brown Fox Jumps Over the Lazy Dog');
ep.emit('log', 'The Quick Brown Fox Jumps Over the Lazy Dog');
