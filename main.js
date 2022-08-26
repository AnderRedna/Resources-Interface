import { App } from './src/App.js';
const modalInfo = document.querySelector('.modal-containerInfo');
const modalReport = document.querySelector('.modal-containerReport');
var userUrl = document.querySelector('#systemUrl');
var userLogin = document.querySelector('#userLogin');
var userPass = document.querySelector('#userPass');
var btnAcess = document.getElementById('textAcess');
const notif = document.getElementById('Notif');

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

function changeStatus(z){
    let rgbDiv = window.getComputedStyle(z).backgroundColor;
    let rgbChild = z.children[2].children[0];
    // let txtChild = z.children[2];
    if(rgbDiv == "rgb(95, 196, 121)"){
        z.style.background = "#c45f5f";
        rgbChild.style.background = "#ff1010";
    }else{
        z.style.background = "#5fc479";
        rgbChild.style.background = "#1eee53";
    }
}

notif.onclick = () => {
    App.start();
}
function countdown(btnElement, element, minutes, seconds) {
    var el = document.getElementById(element);
    var btnEl = document.getElementById(btnElement);
        var interval = setInterval(function() {
            if(seconds == 0) {
                if(minutes == 0) {
                    el.innerHTML = "10:00";
                    btnEl.style.display="block";
                    clearInterval(interval);
                    return;
                }else {
                    btnEl.style.display="none";
                    minutes--;
                    seconds = 60;
                }
            }
            if(minutes > 9 && minutes < 100) {
                var minute_text = minutes;
            }else if(minutes > 0 && minutes < 10){
                var minute_text = '0' + minutes;
            }else {
                var minute_text = '0' + minutes;
            }
            var second_text = seconds < 10 ? '0' : '';
            el.innerHTML = minute_text + ':' + second_text + seconds;
            seconds--;
        }, 10);
    }

var start1 = document.getElementById('timer1');
var start2 = document.getElementById('timer2');
var start3 = document.getElementById('timer3');
var start4 = document.getElementById('timer4');

start1.onclick = function() {
    countdown('timer1', 'Countdown_sm1', 11, 02);
}

start2.onclick = function() {
    countdown('timer2','Countdown_sm2', 5, 20);
}

start3.onclick = function() {
    countdown('timer3','Countdown_sm3', 3, 15);
}

start4.onclick = function() {
    countdown('timer4','Countdown_sm4', 1, 15);
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
