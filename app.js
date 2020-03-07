const aedes = require('aedes')()
const httpServer = require('http').createServer()
const ws = require('websocket-stream')
const port = 8081

ws.createServer({ server: httpServer }, aedes.handle)

httpServer.listen(port, function () {
  console.log('websocket server listening on port ', port)
})