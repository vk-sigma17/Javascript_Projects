// var vehicle = document.getElementById("car");
// var currentPosition = 0;
// var moveIncrement = 10; // Distance to move the car in each step

// function moveCar(distance) {
//     vehicle.style.left = distance + "px";
// }

// var animationInterval;

// function start() {
//     animationInterval = setInterval(function() {
//         currentPosition += moveIncrement;
//         moveCar(currentPosition);

//         // Example of boundary handling
//         if (currentPosition >= 1000) { // Adjust 1000 to the desired boundary
//             clearInterval(animationInterval); // Stop the animation
//         }
//     }, 1000); // Adjust the interval as needed
// }

// function stop() {
//     clearInterval(animationInterval);
// }


var distance = 0;
var Y;

function start() {
    Y = setInterval(run, 100);


    function run() {
        console.log(distance);
        if(distance>=1200){
            clearInterval(Y);
            distance=0;
        }
        else{
            distance += 10;
            var x = document.getElementById("car");
            x.style.marginLeft = distance + 'px';
        }
        
    }
}

function stop(){
    clearInterval(Y);
    
}