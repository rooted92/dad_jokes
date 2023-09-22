// API link used: https://icanhazdadjoke.com/api

const jokeBtn = document.querySelector('#jokeBtn');
const joke = document.querySelector('#joke');

const generateJoke = async () => {
    // API requires header to be set to application/json, otherwise it will return html
    const setHeader = {
        headers: {
        Accept: 'application/json'
        }
    }
    
    // Fetching data from API
    const response = await fetch('https://icanhazdadjoke.com', setHeader)
    // Storing data in JSON format
    const data = await response.json();
    // Displaying data
    joke.textContent = data.joke;
}

generateJoke();

// Event listener
jokeBtn.addEventListener('click', generateJoke);