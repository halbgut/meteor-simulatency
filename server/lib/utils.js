getCookie = function (str, cookie) {
  return str
    .split(':')
    .map(function (elem) {
      return elem.split('=')
    })
    .filter(function (elem) {
      return elem[0] === 'lagTimeout'
    })[0] || []
}
