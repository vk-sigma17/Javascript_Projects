const jokeContainer = document.getElementById("jokeContainer");
const getJokeBtn = document.getElementById("getJokeBtn");

const URL = `https://v2.jokeapi.dev/joke/Any?type=single`;

const getJokes = async() => {
    let response = await fetch(URL);
    let data = await response.json();
    jokeContainer.innerHTML = data.joke;
}

getJokeBtn.addEventListener("click", getJokes);