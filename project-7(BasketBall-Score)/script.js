var Home = document.getElementById('home');
var Guest = document.getElementById('guest');

var homeValue = 0;
var guestValue = 0;

function homeOne(){
    homeValue += 1;
    Home.innerHTML = homeValue; 
}
function homeTwo(){
    homeValue += 2;
    Home.innerHTML = homeValue; 
}
function homeThree(){
    homeValue += 3;
    Home.innerHTML = homeValue; 
}

function guestOne(){
    guestValue += 1;
    Guest.innerHTML = guestValue; 
}
function guestTwo(){
    guestValue += 2;
    Guest.innerHTML = guestValue; 
}
function guestThree(){
    guestValue += 3;
    Guest.innerHTML = guestValue; 
}

