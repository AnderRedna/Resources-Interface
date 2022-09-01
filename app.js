const express = require('express'); 
var path = require('path');
const app = express();
const http = require('http');
const { Server } = require('socket.io'); 
const server = http.createServer(app)
const io = new Server(server);

server.listen(3000, () => {
    console.log("Rodando")
});
app.use(express.static(path.join(__dirname,)));

io.on('connection', (socket) => {
    console.log('Nova conexao')

    socket.on('yourEvent', (NAAobject, NAAobjectminutesVm, NAAobjectsecondsVm, NAAminute_text, NAAsecond_text, NAAbtnEl, NAAel) => {
        console.log('o server recebeu')
        io.emit('resposta', NAAobject, NAAobjectminutesVm, NAAobjectsecondsVm, NAAminute_text, NAAsecond_text, NAAbtnEl, NAAel)
    }) 
})
