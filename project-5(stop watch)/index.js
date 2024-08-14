let startbtn = document.getElementById("start");
let stopbtn = document.getElementById("stop");
let resetbtn = document.getElementById("reset");

let hour = 0;
let minute = 0;
let second = 0;
let count = 0;

let timer;
startbtn.addEventListener("click", function(){
    timer = true;
    stopwatch();
});
stopbtn.addEventListener("click", function(){
    timer = false;
})
resetbtn.addEventListener("click", function(){
    timer = false;

    hour = 0;
    minute = 0;
    second = 0;
    count = 0;

    document.getElementById("hr").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("count").innerHTML = "00";
});


function stopwatch(){
    if(timer){
        count++;
        if(count == 100){
            second++;
            count = 0;
        };
        if(second == 60){
            minute++;
            second = 0;
        };
        if(minute == 60){
            hour++;
            minute = 0;
            second = 0;
        }
        // let hrString = hour;
        // let minString = minute;
        // let secString = second;
        // let countString = count;

        let hrString = hour < 10 ? "0" + hour : hour;
        let minString = minute < 10 ? "0" + minute : minute;
        let secString = second < 10 ? "0" + second : second;
        let countString = count < 10 ? "0" + count : count;
        // if(hour < 10){
        //     hrString = "0" + hrString;
        // }
        // if(minute < 10){
        //     minString = "0" + minString;
        // }
        // if(second < 10){
        //     secString = "0" + secString;
        // }
        // if(count < 10){
        //     countString = "0" + countString;
        // }
        document.getElementById('hr').innerHTML = hrString;
        document.getElementById('min').innerHTML = minString;
        document.getElementById('sec').innerHTML = secString;
        document.getElementById('count').innerHTML = countString;

        setTimeout(stopwatch, 10);
    }
}
