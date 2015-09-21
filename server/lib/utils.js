getCookie = function getCookie (str = '', cookie) {
  return str
    .split(':')
    .map( (elem) => elem.split('=') )
    .filter( (elem) => elem[0] === 'lagTimeout' )[0] || []
}

inject = function inject (obj, prop, func) {
  let old = obj[prop]
  obj[prop] = function (...args) {
    func.call(this, args, (newArgs) => {
      old.apply(this, newArgs || args)
    })
  }
}
