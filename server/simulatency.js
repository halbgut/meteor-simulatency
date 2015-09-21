global.simulatency = {}

global.simulatency.timeout = 0

inject(Meteor.server.stream_server.server._events, 'connection', function (args, done) {
  inject(args[0], 'write', (args, done) => {
    setTimeout(done, global.simulatency.timeout)
  })
  inject(args[0], 'data', (args, done) => {
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
