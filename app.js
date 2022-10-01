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
var allSockets = [];
io.on('connection', (socket) => {
    console.log('Nova conexao')
    var userID = allSockets.push(socket);
    console.log(userID)

    socket.on('vmChosen', (objVm) => {
        countdown(objVm);
        
    }) 
})
function countdown(object) {
    var interval = setInterval(function() {
            if(object.secondsVm == 0) {
                if(object.minutesVm == 0) {
                    io.emit('reset', object);
                    clearInterval(interval);
                    return;
                }else { 
                    object.minutesVm--;
                    object.secondsVm = 60;
                }
            }
            if(object.minutesVm > 9 && object.minutesVm < 100) {
                var minute_text = object.minutesVm;
            }else if(object.minutesVm > 0 && object.minutesVm <= 10){
                var minute_text = '0' + object.minutesVm;
            }else {
                var minute_text = '0' + object.minutesVm;
            }
            var second_text = object.secondsVm <= 10 ? '0' : '';
            object.secondsVm--;
            io.emit('resposta', object, object.minutesVm, object.secondsVm, minute_text, second_text)
        }, 100);
    }

