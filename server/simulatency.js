// Set the delay you want
var timeout = 100

// stream_server abstracts sockJS the DDP-Server talks to it.
var streamServer = Meteor.server.stream_server
// The connect event listener
var standardConnect = streamServer.server._events.connection

// Overwrite the default event-handler
streamServer.server._events.connection = function (socket) {
  // Overwrite the writes to the socket
  var write = socket.write
  socket.write = function () {
    var self = this
    var args = arguments
    // Add a delay
    setTimeout(function () {
      // Call the normal write methods with the arguments passed to this call
      write.apply(self, args)
    }, timeout)
  }
  // Call the normal handler after overwritting the socket.write function
  standardConnect.apply(this, arguments)
}

// Add a simple connect handler, wich calls the next handler after a delay
WebApp.rawConnectHandlers.use(function (req, res, next) {
  return setTimeout(next, getCookie(req.headers.cookie, 'lag')[1] || timeout)
})
