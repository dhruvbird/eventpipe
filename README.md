
See the file tests.js for details on usage

1. API is the same as node.js' EventEmitter http://nodejs.org/docs/v0.4.2/api/events.html
2. Additional 'priority' parameter in addListener (or on) specifies when to call handler
3. Listeners are called in non-decreasing order of priority (listeners with a lesser numerical priority are called first)
4. Listeners with the same priority are called in any order
5. Returning an array or an array-like object will cause that object to be passed on to the next listener
6. Returning nothing (undefined) causes the arguments to the current listener to be used for the next one
7. Returning false terminates the piped calling of listeners (the listener returning false will be the last one to be called)
8. All listeners with a given priority *may* not be called if any one of them returns false
