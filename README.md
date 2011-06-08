
See the file [test.js](https://github.com/dhruvbird/eventpipe/blob/master/test.js) for details on usage

1. API is the same as node.js' EventEmitter http://nodejs.org/docs/v0.4.2/api/events.html
2. Drop-In replacement for node.js' EventEmitter except in cases when the listener function returns something or the array returned by the listeners() function is directly manipulated (see conditions 6-9)
3. Additional 'priority' parameter in addListener (or on) specifies when to call handler
4. Listeners are called in non-decreasing order of priority (listeners with a lesser numerical priority are called first)
5. Listeners with the same priority are called in any order
6. Returning an array or an array-like object will cause that object to be passed on to the next listener
7. Returning nothing (undefined) causes the arguments to the current listener to be used for the next one
8. Returning false terminates the piped calling of listeners (the listener returning false will be the last one to be called)
9. The array returned by listeners() function is not an array of functions. Instead it contains objects of the type { priority: PRIO, proc: PROC }. Please avoid using/manipulaiting it directly. Instead use all the nice functions given to you
10. All listeners with a given priority *may* not be called if any one of them returns false
