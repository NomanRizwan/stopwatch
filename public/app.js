var min = 0;
var sec = 0;
var mili = 0;
var interval
var minute = document.getElementById('min')
var second = document.getElementById('sec')
var miliSec = document.getElementById('milisec')
//miliSec.Math.fixed()


function timer() {
    mili++;
    miliSec.innerHTML = mili;


    if (mili >= 100) {
        sec++;
        second.innerHTML = sec++
        mili = 0;
    }
    else if (sec >= 60) {
        min++
        minute.innerHTML = min;
        sec = 0;
    }

}



function start() {
    interval = setInterval(timer, 10);
    document.getElementById('disable').disabled = true

}

function stop() {
    clearInterval(interval)
    document.getElementById('disable').disabled = false
}

function reset() {
    stop()
    min = 0;
    sec = 0;
    mili = 0;

    minute.innerHTML = min;
    second.innerHTML = sec
    miliSec.innerHTML = mili;
}