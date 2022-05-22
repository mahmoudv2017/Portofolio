var staticServer = require('static-server')

var server = new staticServer({
    port : 8000,
    rootPath : './Dist/',
    name : 'porto'

})

server.start(function()  {
    console.log("Listening to " , server.port)
})