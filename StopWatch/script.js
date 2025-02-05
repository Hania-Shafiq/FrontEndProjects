window.onload = function () {
    let seconds = 0;
    let milliSeconds = 0;

    let interval; // Will update the value of stopwatch
    const addSeconds = document.querySelector(".seconds");
    const addMilliSeconds = document.querySelector(".milli");

    const startBtn = document.querySelector(".start");
    const stopBtn = document.querySelector(".stop");
    const resetBtn = document.querySelector(".reset");

    // Start button functionality
    startBtn.onclick = function () {
        clearInterval(interval);
        interval = setInterval(start, 10); // Call start function every 10ms
    };

    // Stop button functionality
    stopBtn.onclick = function () {
        clearInterval(interval);
    };

    // Reset button functionality
    resetBtn.onclick = function () {
        clearInterval(interval);
        seconds = 0;
        milliSeconds = 0;
        addSeconds.innerHTML = "00";
        addMilliSeconds.innerHTML = "00";
    };

    // Function to increment time
    function start() {
        milliSeconds += 10;

        if (milliSeconds < 100) {
            addMilliSeconds.innerHTML = "0" + milliSeconds;
        } else {
            addMilliSeconds.innerHTML = milliSeconds;
        }

        if (milliSeconds >= 1000) {
            seconds++;
            addSeconds.innerHTML = seconds < 10 ? "0" + seconds : seconds;
            milliSeconds = 0;
            addMilliSeconds.innerHTML = "00";
        }
    }
};
