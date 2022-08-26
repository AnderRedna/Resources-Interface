function countdown(element, minutes, seconds) {
    // Fetch the display element
    var el = document.getElementById(element);

    // Set the timer
    var interval = setInterval(function() {
        if(seconds == 0) {
            if(minutes == 0) {
                (el.innerHTML = "10:00");     

                clearInterval(interval);
                return;
            } else {
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
    }, 100);
}

//Start as many timers as you want

var start1 = document.getElementById('timer1');
var start2 = document.getElementById('timer2');
var start3 = document.getElementById('timer3');
var start4 = document.getElementById('timer4');

start1.onclick = function() {
    countdown('countdown1', 11, 02);
}

start2.onclick = function() {
    countdown('countdown2', 0, 10);
}

start3.onclick = function() {
    countdown('countdown3', 0, 15);
}

start4.onclick = function() {
    countdown('countdown4', 0, 15);
}