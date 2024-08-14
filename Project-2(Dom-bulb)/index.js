function ONbulb(){
    var bulb = document.querySelector(".img");
    bulb.setAttribute("src", "/ONbulb.jpg");
    var heading = document.querySelector("h1");
    heading.innerHTML = "OFF The Bulb";
}

function OFFbulb(){
    var bulb = document.querySelector(".img");
    bulb.setAttribute("src", "/OFFbulb.jpg");
    var heading = document.querySelector("h1");
    heading.innerHTML = "ON The Bulb";
}
