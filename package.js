Package.describe({
  name: 'kriegslustig:simulatency',
  version: '0.0.0',
  description: 'Adds a lag to all connections you make to the server',
  repository: 'https://github.com/Kriegslustig/meteor-lag.git',
  debugOnly: true
})

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.1.0.3')
  api.use(['ddp', 'webapp'])
  api.addFiles([
    'server/simulatency.js',
    'server/lib/utils.js'
  ], 'server')
  api.addFiles(['client/simulatency.js'], 'client')
  api.export('setLag')
})