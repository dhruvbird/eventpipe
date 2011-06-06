function EventPipe() {
}

EventPipe.prototype = {
    _ep_init: function() {
	if (!this._ep_events) {
	    this._ep_events = { };
	    this._maxListeners = 10;
	}
    }, 
    on: function(event, proc, priority) {
	var _l = this.listeners(event);
	
	if (typeof proc !== 'function') {
	    throw new Error('The event listener MUST be a function. You passed in a ' + typeof proc);
	}

	if (_l.length >= this._maxListeners) {
	    console.error('Error: Too many listeners!! This may be a bug in your code');
	}

	priority = priority || 50;
	_l.push({
	    priority: priority, 
	    proc: proc
	});
	_l.sort(function(l, r) {
	    return l.priority - r.priority;
	});
    }, 
    removeListener: function(event, listener) {
	var _l = this.listeners(event);
	var _x = _l.filter(function(lo) {
	    return lo.proc !== listener;
	});
	_x.unshift(0, _l.length);
	_l.splice.apply(_l, _x);
    }, 
    removeAllListeners: function(event) {
	var _l = this.listeners(event);
	_l.splice(0, _l.length);
    }, 
    emit: function(event) {
	var _l = this.listeners(event);
	var args = Array.prototype.slice.call(arguments, 1);
	var i, _args;
	for (i = 0; i < _l.length && args !== false; ++i) {
	    _args = _l[i].proc.apply(null, args);
	    if (typeof _args !== 'undefined') {
		args = _args;
	    }
	}
	return i > 0;
    }, 
    listeners: function(event) {
	this._ep_init();
	if (!event) {
	    throw new Error("Event is not defined or is falsy");
	}

	if (!this._ep_events[event]) {
	    this._ep_events[event] = [ ];
	}
	return this._ep_events[event];
    }, 
    setMaxListeners: function(n) {
	this._ep_init();
	this._maxListeners = Number(n) === NaN ? 10 : Number(n);
    }
};

EventPipe.prototype.addListener = EventPipe.prototype.on;

exports.EventPipe = EventPipe;
