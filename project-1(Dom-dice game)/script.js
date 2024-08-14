function PlayGame() {

    var randomNumber1 = Math.floor(Math.random()*6)+1; //1-6
    var imageNumber1 = "dice" + randomNumber1 + ".png"; //dice1-dice6
    
    var imageAdress1 = "images/" + imageNumber1;
    var image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", imageAdress1);
    
    
    var randomNumber2 = Math.floor(Math.random()*6) + 1;
    var imageAdress2 = "images/" + "dice" + randomNumber2 + ".png";
    var image1 = document.querySelectorAll("img")[1];
    image1.setAttribute("src", imageAdress2);
    
    
    if(randomNumber1 > randomNumber2){
        document.querySelector("h1").innerHTML = "Player 1 Win!";
    }
    if(randomNumber2 > randomNumber1){
        document.querySelector("h1").innerHTML = "Player 2 Win!";
    }
    if(randomNumber1 === randomNumber2){
        document.querySelector("h1").innerHTML = "Game Draw!";
    }
}

var clickBtn = document.getElementsByClassName("btn")[0];
clickBtn.addEventListener("click", PlayGame);