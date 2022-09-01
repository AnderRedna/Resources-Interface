const modalInfo = document.querySelector('.modal-containerInfo');
const modalReport = document.querySelector('.modal-containerReport');
var userUrl = document.querySelector('#systemUrl');
var userLogin = document.querySelector('#userLogin');
var userPass = document.querySelector('#userPass');
var btnAcess = document.getElementById('textAcess');
const notif = document.getElementById('Notif');

let Vm1 = new VmInfo(objVm.vm[0].name, objVm.vm[0].btnTimer, objVm.vm[0].countdown, objVm.vm[0].minutes, objVm.vm[0].seconds);
let Vm2 = new VmInfo(objVm.vm[1].name, objVm.vm[1].btnTimer, objVm.vm[1].countdown, objVm.vm[1].minutes, objVm.vm[1].seconds);
let Vm3 = new VmInfo(objVm.vm[2].name, objVm.vm[2].btnTimer, objVm.vm[2].countdown, objVm.vm[2].minutes, objVm.vm[2].seconds);
let Vm4 = new VmInfo(objVm.vm[3].name, objVm.vm[3].btnTimer, objVm.vm[3].countdown, objVm.vm[3].minutes, objVm.vm[3].seconds);

function sysCredentials(url, login, password){
    userUrl.innerHTML = url;
    userLogin.innerHTML = login;
    userPass.innerHTML = password;
}
function openModal(int){
    if(int == 1){
        sysCredentials("Anderton.Rodrigues:9999", "user2", "Ander%23")
        modalInfo.classList.add('active');

    }else if(int == 2){
        sysCredentials("Anderton.Rodrigues:9999", "user3", "Ander%23")
        modalInfo.classList.add('active');
    }else if(int == 3){
        sysCredentials("Anderton.Rodrigues:9999", "Aluno", "Ander%23")
        modalInfo.classList.add('active');
    }else if(int == 4){
        sysCredentials("Anderton.Rodrigues:9999", "Aluno2", "Ander%23")
        modalInfo.classList.add('active');
    }
}
function closeModal(){
    modalInfo.classList.remove('active');
}

function openReport(){
    modalReport.classList.add('active');
}

function CancelReport(){
    modalReport.classList.remove('active');
}

function sendMail(){
    var params = {
        from_name : document.getElementById("inputReportName").value,
        vm_erro : document.getElementById("inputReportText").value,
        to_email : "anderton.rodrigues@brazil.com.br"
    }
    emailjs.send("default_service", "template_ebbd32j", params).then(function (res) {
        alert("E-mail enviado com sucesso!");
        CancelReport()
    })
}

// notif.onclick = () => {
//     App.start();
// }

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
var divItem1 = document.getElementById("Item Sm1 1");
var divItem2 = document.getElementById("Item Sm1 2");
var divItem3 = document.getElementById("Item Sm1 3");
var divItem4 = document.getElementById("Item Sm1 4");

var iconItem1 = document.getElementById("statusIcon1 Sm1 1");
var iconItem2 = document.getElementById("statusIcon2 Sm1 2");
var iconItem3 = document.getElementById("statusIcon3 Sm1 3");
var iconItem4 = document.getElementById("statusIcon4 Sm1 4");

var textItem1 = document.getElementById("status ItemSm1 1");
var textItem2 = document.getElementById("status ItemSm1 2");
var textItem3 = document.getElementById("status ItemSm1 3");
var textItem4 = document.getElementById("status ItemSm1 4");

function setNewValue(cdown, divItem, textItem, start, iconItem, objectminutesVm, objectsecondsVm, minute_text, second_text){
    cdown.innerHTML = minute_text + ':' + second_text + objectsecondsVm;
    if(objectsecondsVm == 0) {
        if(objectminutesVm == 0) {
            start.style.display = "inline-block";
            divItem.style.backgroundColor = "#5fc479";
            iconItem.style.backgroundColor = "#1eee53";
            textItem.innerHTML = "Disponível";
            cdown.innerHTML = "10:00";
        }
    }
    console.log("minutes: " + objectminutesVm)
    // if (objectminutesVm < 5){
    //     //sumir
    // }
    if(objectminutesVm != 0 && objectsecondsVm != 0){
        start.style.display = "none";
        divItem.style.backgroundColor = "#c45f5f";
        iconItem.style.backgroundColor = "#ff1010";
        textItem.innerHTML = "Ocupado"
    }
}

socket.on('resposta', (object, objectminutesVm, objectsecondsVm, minute_text, second_text) => {
    if(object.name == 'vm1'){
        setNewValue(cd1, divItem1, textItem1, start1, iconItem1, objectminutesVm, objectsecondsVm, minute_text, second_text)
    }else if(object.name == 'vm2'){
        setNewValue(cd2, divItem2, textItem2, start2, iconItem2, objectminutesVm, objectsecondsVm, minute_text, second_text)
    }else if(object.name == 'vm3'){
        setNewValue(cd3, divItem3, textItem3, start3, iconItem3, objectminutesVm, objectsecondsVm, minute_text, second_text)
    }else if(object.name == 'vm4'){
        setNewValue(cd4, divItem4, textItem4, start4, iconItem4, objectminutesVm, objectsecondsVm, minute_text, second_text)
    }

}
)

function countdown(object) {
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
            socket.emit("yourEvent", object, object.minutesVm, object.secondsVm, minute_text, second_text)
        }, 1000);
    }

var start1 = document.getElementById('timer1');
var start2 = document.getElementById('timer2');
var start3 = document.getElementById('timer3');
var start4 = document.getElementById('timer4');
var cd1 = document.getElementById('Countdown_sm1');
var cd2 = document.getElementById('Countdown_sm2');
var cd3 = document.getElementById('Countdown_sm3');
var cd4 = document.getElementById('Countdown_sm4');
var btnInfo1 = document.getElementById('info ItemSm1');
var btnInfo2 = document.getElementById('info ItemSm2');
var btnInfo3 = document.getElementById('info ItemSm3');
var btnInfo4 = document.getElementById('info ItemSm4');
var btnOkModal = document.getElementById('btnOk');
var btnReportItem1 = document.getElementById('report ItemSm1');
var btnReportItem2 = document.getElementById('report ItemSm2');
var btnReportItem3 = document.getElementById('report ItemSm3');
var btnReportItem4 = document.getElementById('report ItemSm4');
var sendReport = document.getElementById('btnSend');
var cancelReport = document.getElementById('btnCancel');

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

btnInfo1.onclick = function() {
    openModal(1);
}

btnInfo2.onclick = function() {
    openModal(2);
}

btnOkModal.onclick = function() {
    closeModal();
}

btnInfo3.onclick = function() {
    openModal(3);
}

btnInfo4.onclick = function() {
    openModal(4);
}

btnReportItem1.onclick = function() {
    openReport();
}

btnReportItem2.onclick = function() {
    openReport();
}

btnReportItem3.onclick = function() {
    openReport();
}

btnReportItem4.onclick = function() {
    openReport();
}

sendReport.onclick = function() {
    sendMail();
}

cancelReport.onclick = function() {
    CancelReport();
}

// not Using
// function clicarnoBotao(){
//     $('button').click(function(){
//         $('.alert').removeClass("hide");
//         $('.alert').addClass("show");
//         $('.alert').addClass("showAlert");
//         setTimeout(function() {
//             $('.alert').addClass("hide");
//             $('.alert').removeClass("show");
//     },5000);
// });
//     $('.close-btn').click(function(){
//         $('.alert').addClass("hide");
//         $('.alert').removeClass("show");
//     });
// }


// function importApp(){
//     App.start()

// }
