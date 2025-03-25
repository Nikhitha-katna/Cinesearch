const searchBox = document.getElementById("searchBox");
const searchBtn = document.getElementById("searchBtn");
const result = document.getElementById("result");

const API_URL = "http://www.omdbapi.com/?apikey=e1d21aae&t="; 

searchBtn.addEventListener("click", () => {
    const movieName = searchBox.value.trim();

    if (movieName === "") {
        result.innerHTML = "<p>Please enter a movie name.</p>";
        return;
    }

    fetch(API_URL + encodeURIComponent(movieName))
        .then(response => response.json())
        .then(data => {
            console.log(data); 
            if (data.Response === "True") {
                result.innerHTML = `
                    <h2>${data.Title} (${data.Year})</h2>
                    <img src="${data.Poster}" alt="Movie Poster">
                    <p>${data.Plot}</p>
                `;
            } else {
                result.innerHTML = "<p>Movie not found. Try another search.</p>";
            }
        })
        .catch(error => {
            console.error("Fetch error:", error);
            result.innerHTML = "<p>Something went wrong. Try again later.</p>";
        });
});
