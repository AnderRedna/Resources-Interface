// import { App } from './src/App.js';
const modalInfo = document.querySelector('.modal-containerInfo');
const modalReport = document.querySelector('.modal-containerReport');
var userUrl = document.querySelector('#systemUrl');
var userLogin = document.querySelector('#userLogin');
var userPass = document.querySelector('#userPass');


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
if (document.getElementById("name sm1").innerHTML == "Disponível") {
    console.log("Disponível");
}
}

function changeStatus(z){
    let rgbDiv = window.getComputedStyle(z).backgroundColor;
    let rgbChild = z.children[2].children[0];
    let txtChild = z.children[2];
    console.log(txtChild)
    if(rgbDiv == "rgb(95, 196, 121)"){
        z.style.background = "#c45f5f";
        rgbChild.style.background = "#ff1010";
    }else{
        z.style.background = "#5fc479";
        rgbChild.style.background = "#1eee53";
    }
}

function NotifStart(){
    App.start();
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
