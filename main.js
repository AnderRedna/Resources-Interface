const modalInfo = document.querySelector('.modal-containerInfo');
const modalReport = document.querySelector('.modal-containerReport');
var userUrl = document.querySelector('#systemUrl');
var userLogin = document.querySelector('#userLogin');
var userPass = document.querySelector('#userPass');
var btnAcess = document.getElementById('textAcess');
const notif = document.getElementById('Notif');

//#region GetELements

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

let Vm1 = new VmInfo("vm1", "timer1", "countdown1", 2, 0);
let Vm2 = new VmInfo("vm2", "timer2", "countdown2", 1, 0);
let Vm3 = new VmInfo("vm3", "timer3", "countdown3", 1, 0);
let Vm4 = new VmInfo("vm4", "timer4", "countdown4", 1, 0);

//#endregion

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

function setNewValue(cdown, divItem, textItem, start, iconItem, objectMinutesVm, objectSecondsVm, minute_text, second_text){
    cdown.innerHTML = minute_text + ':' + second_text + objectSecondsVm;
    if(objectSecondsVm == 0) {
        if(objectMinutesVm == 0) {
            start.style.display = "inline-block";
            divItem.style.backgroundColor = "#5fc479";
            iconItem.style.backgroundColor = "#1eee53";
            textItem.innerHTML = "Disponível";
            cdown.innerHTML = "10:00";
        }
    }
    if(objectMinutesVm != 0 && objectSecondsVm != 0){
        start.style.display = "none";
        divItem.style.backgroundColor = "#c45f5f";
        iconItem.style.backgroundColor = "#ff1010";
        textItem.innerHTML = "Ocupado"
    }
}

socket.on('resposta', (object, objectMinutesVm, objectSecondsVm, minute_text, second_text) => {
    if(object.name == 'vm1'){
        setNewValue(cd1, divItem1, textItem1, start1, iconItem1, objectMinutesVm, objectSecondsVm, minute_text, second_text)
    }else if(object.name == 'vm2'){
        setNewValue(cd2, divItem2, textItem2, start2, iconItem2, objectMinutesVm, objectSecondsVm, minute_text, second_text)
    }else if(object.name == 'vm3'){
        setNewValue(cd3, divItem3, textItem3, start3, iconItem3, objectMinutesVm, objectSecondsVm, minute_text, second_text)
    }else if(object.name == 'vm4'){
        setNewValue(cd4, divItem4, textItem4, start4, iconItem4, objectMinutesVm, objectSecondsVm, minute_text, second_text)
    }

    }
)

socket.on('reset', (ObjToReset) => {
    ResetVm1(ObjToReset)
    }
)

function saveState(object, objectMinutesVm, objectSecondsVm, minute_text, second_text){
    if(object.name == 'vm1'){
        socket.emit("yourEvent", object, objectMinutesVm, objectSecondsVm, minute_text, second_text)
    }else if(object.name == 'vm2'){
        socket.emit("yourEvent", object, objectMinutesVm, objectSecondsVm, minute_text, second_text)
    }else if(object.name == 'vm3'){
        socket.emit("yourEvent", object, objectMinutesVm, objectSecondsVm, minute_text, second_text)
    }else if(object.name == 'vm4'){
        socket.emit("yourEvent", object, objectMinutesVm, objectSecondsVm, minute_text, second_text)
    }
}

start1.onclick = function() {
    socket.emit("vmChosen", Vm1);
}
start2.onclick = function() {
    socket.emit("vmChosen", Vm2);
}

start3.onclick = function() {
    socket.emit("vmChosen", Vm3);
}

start4.onclick = function() {
    socket.emit("vmChosen", Vm4);
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