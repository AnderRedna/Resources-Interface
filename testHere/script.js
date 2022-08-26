function countdown(btnElement, element, minutes, seconds) {
    var el = document.getElementById(element);
    var btnEl = document.getElementById(btnElement);
        var interval = setInterval(function() {
            if(seconds == 0) {
                if(minutes == 0) {
                    el.innerHTML = "10:00";
                    // btnEl.style.display="inline-flex";
                    clearInterval(interval);
                    return;
                }else { 
                    minutes--;
                    seconds = 60;
                }
            }
            if(minutes < 5){
                // btnEl.style.display="none";
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
    countdown('timer1', 'countdown1', 11, 02);
}
start2.onclick = function() {
    countdown('timer2','countdown2', 5, 20);

}

start3.onclick = function() {
    countdown('timer3','countdown3', 3, 15);
}

start4.onclick = function() {
    countdown('timer4','countdown4', 1, 15);
}