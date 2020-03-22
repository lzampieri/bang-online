var http = require('http');
const express = require('express');

const app = express(); 
const server = http.createServer(app);  
app.get('*', function(req, res) {  
    res.send("Backend alive").status(200);
});

// Load socket
const initSocket = require('./socket')
initSocket(server)

server.listen(4001);
