const url = "https://official-joke-api.appspot.com/random_joke"; 
document.getElementById('myButton').addEventListener('click', () => {
    fetch(url)
    .then((response) => response.json())
    .then((joke) => {
        document.getElementById("setup").innerText = joke.setup;
        document.getElementById("punchline").innerText = joke['punchline'];
    });
});

