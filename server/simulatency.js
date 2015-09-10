global.simulatency = {}

global.simulatency.timeout = 100

inject(Meteor.server.stream_server.server._events, 'connection', function (args, done) {
  inject(args[0], 'write', function (args, done) {
    setTimeout(done, global.simulatency.timeout)
  })
  done()
})

function httpDelay (args, done) {
  global.simulatency.timeout =
    getCookie(args[0].headers.cookie, 'lag')[1]
    || global.simulatency.timeout
  setTimeout(done, global.simulatency.timeout)
}

inject(WebApp.httpServer._events, 'upgrade', httpDelay)
inject(WebApp.httpServer._events, 'request', httpDelay)
