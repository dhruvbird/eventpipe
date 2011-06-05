
See the file tests.js for details on usage

  # API is the same as node.js' EventEmitter http://nodejs.org/docs/v0.4.2/api/events.html
  # Additional 'priority' parameter in addListener (or on) specifies when to call handler
  # Listeners are called in non-decreasing order of priority (listeners with a lesser numerical priority are called first)
  # Listeners with the same priority are called in any order
  # Returning an array or an array-like object will cause that object to be passed on to the next listener
  # Returning nothing (undefined) causes the arguments to the current listener to be used for the next one
  # Returning false terminates the piped calling of listeners (the listener returning false will be the last one to be called)
  # All listeners with a given priority *may* not be called if any one of them returns false
