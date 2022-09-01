function VmInfo(name, btn, countdown, minutes, seconds){
    this.name = name;
    this.btnUsed = btn;
    this.countdownUsed = countdown;
    this.minutesVm = minutes;
    this.secondsVm = seconds;
}

function ResetVm1(objReset){
    objReset.minutesVm = 7;
    objReset.secondsVm = 5;
}


function setNewValue(cdown, SNAAobjectminutesVm, SNAAobjectsecondsVm, SNAAminute_text, SNAAsecond_text){
    cdown.innerHTML = SNAAminute_text + ':' + SNAAsecond_text + SNAAobjectsecondsVm;
    if(SNAAobjectsecondsVm == 0) {
        if(SNAAobjectminutesVm == 0) {
            cdown.innerHTML = "10:00";
        }
    }
    console.log("minutes: " + SNAAobjectminutesVm)
    // if (SNAAobjectminutesVm < 5){
    //     //sumir
    // }
}

socket.on('resposta', (SNAAobject, SNAAobjectminutesVm, SNAAobjectsecondsVm, SNAAminute_text, SNAAsecond_text) => {
    if(SNAAobject.name == 'vm1'){
        setNewValue(cd1, SNAAobjectminutesVm, SNAAobjectsecondsVm, SNAAminute_text, SNAAsecond_text)
    }else if(SNAAobject.name == 'vm2'){
        setNewValue(cd2, SNAAobjectminutesVm, SNAAobjectsecondsVm, SNAAminute_text, SNAAsecond_text)
    }else if(SNAAobject.name == 'vm3'){
        setNewValue(cd3, SNAAobjectminutesVm, SNAAobjectsecondsVm, SNAAminute_text, SNAAsecond_text)
    }else if(SNAAobject.name == 'vm4'){
        setNewValue(cd4, SNAAobjectminutesVm, SNAAobjectsecondsVm, SNAAminute_text, SNAAsecond_text)
    }

}
)


function saveState(AAobject, AAobjectminutesVm, AAobjectsecondsVm, AAminute_text, AAsecond_text, AAbtnEl, AAel){
    if(AAobject.name == 'vm1'){
        socket.emit("yourEvent", AAobject, AAobjectminutesVm, AAobjectsecondsVm, AAminute_text, AAsecond_text, AAbtnEl, AAel)
    }else if(AAobject.name == 'vm2'){
        socket.emit("yourEvent", AAobject, AAobjectminutesVm, AAobjectsecondsVm, AAminute_text, AAsecond_text, AAbtnEl, AAel)
    }else if(AAobject.name == 'vm3'){
        socket.emit("yourEvent", AAobject, AAobjectminutesVm, AAobjectsecondsVm, AAminute_text, AAsecond_text, AAbtnEl, AAel)
    }else if(AAobject.name == 'vm4'){
        socket.emit("yourEvent", AAobject, AAobjectminutesVm, AAobjectsecondsVm, AAminute_text, AAsecond_text, AAbtnEl, AAel)
    }else{
        console.log("Erro quando transformou em json")
    }
}

let Vm1 = new VmInfo(objVm.vm[0].name, objVm.vm[0].btnTimer, objVm.vm[0].countdown, objVm.vm[0].minutes, objVm.vm[0].seconds);
let Vm2 = new VmInfo(objVm.vm[1].name, objVm.vm[1].btnTimer, objVm.vm[1].countdown, objVm.vm[1].minutes, objVm.vm[1].seconds);
let Vm3 = new VmInfo(objVm.vm[2].name, objVm.vm[2].btnTimer, objVm.vm[2].countdown, objVm.vm[2].minutes, objVm.vm[2].seconds);
let Vm4 = new VmInfo(objVm.vm[3].name, objVm.vm[3].btnTimer, objVm.vm[3].countdown, objVm.vm[3].minutes, objVm.vm[3].seconds);

function countdown(object) {
    var el = document.getElementById(object.countdownUsed);
    var btnEl = document.getElementById(object.btnUsed);
    var interval = setInterval(function() {
            console.log(object.secondsVm)
            if(object.secondsVm == 0) {
                if(object.minutesVm == 0) {
                    ResetVm1(object);
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
            saveState(object, object.minutesVm, object.secondsVm, minute_text, second_text, btnEl, el)
        }, 10);
    }

var start1 = document.getElementById('timer1');
var start2 = document.getElementById('timer2');
var start3 = document.getElementById('timer3');
var start4 = document.getElementById('timer4');
var cd1 = document.getElementById('countdown1');
var cd2 = document.getElementById('countdown2');
var cd3 = document.getElementById('countdown3');
var cd4 = document.getElementById('countdown4');

start1.onclick = function() {
    countdown(Vm1);
}
start2.onclick = function() {
    countdown(Vm2);
}

start3.onclick = function() {
    countdown(Vm3);
}

start4.onclick = function() {
    countdown(Vm4);
}