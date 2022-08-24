const modalInfo = document.querySelector('.modal-containerInfo');
const modalReport = document.querySelector('.modal-containerReport');
var userUrl = document.querySelector('#systemUrl');
var userLogin = document.querySelector('#userLogin');
var userPass = document.querySelector('#userPass');
var btnAcess = document.getElementById('textAcess');


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



const startingMinutes = 0.1;
let time = startingMinutes * 60;
var sera = 0;
let ativar = 0;

function startTimer(){
    // if (sera == 0) {
        //     sera = 1;
        // }else if (sera == 2) {
            //     console.log('executando o sera 2')
            //     clearInterval(obj)
            // }
            if(btnAcess.innerText != '00:00'){
        obj = setInterval(startTimer, 500);
            var minutes = Math.floor(time / 60);
            let seconds = time % 60;
        
            minutes = minutes < 10 ? '0' + minutes : minutes;
            seconds = seconds < 10 ? '0' + seconds : seconds;
        
            btnAcess.innerHTML = `${minutes}:${seconds}`;
            time--;
        }else{
            btnAcess.innerHTML = 'Acessar'
            clearInterval(obj)
        }
    }
