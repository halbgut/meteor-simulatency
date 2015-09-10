getCookie = function getCookie (str, cookie) {
  return str
    .split(':')
    .map(function (elem) {
      return elem.split('=')
    })
    .filter(function (elem) {
      return elem[0] === 'lagTimeout'
    })[0] || []
}

inject = function inject (obj, prop, func) {
  var old = obj[prop]
  obj[prop] = function () {
    var args = [].slice.call(arguments)
    var self = this
    func.call(self, args, function (newArgs) {
      old.apply(self, newArgs || args)
    })
  }
}
