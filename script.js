const apiKey = "67a465f165043b63372ea02407bc5582";
// const randomId = Math.floor(Math.random() * 1000)
// `https://api.themoviedb.org/3/movie/550?api_key=${apiKey}`

const fetchMovie = () => {
  fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&page=1&query="movie"&poster_path="string"`
  ).then((response) => {
    if (response.status == 200) {
      console.log("It's working!");
    } else if (response.status == 404) {
      console.log("Something wrong, try again");
    }
    response.json().then((data) => {
      // console.log(data.results);
      const limitedMovies = data.results.slice(0, 6);
      console.log(limitedMovies);
      //       const movie1Title = document.getElementById("movie1Title");
      //       const movie1Category = document.getElementById("movie1Category");
      //       const backdrop_path = data.backdrop_path;
      //       const backdropUrl = `https://image.tmdb.org/t/p/w200${backdrop_path}`;
      //       console.log(backdropUrl);

      //       movie1Title.innerHTML = `${data.title}`;
      //       movie1Category.innerHTML = `${data.genres[0].name}`;

      //       const createBackdrop = () => {
      //         const backdrop = document.createElement("IMG");
      //         backdrop.setAttribute("src", `${backdropUrl}`);
      //         // backdrop.setAttribute("width", "200");
      //         // backdrop.setAttribute("height", "200");
      //         backdrop.setAttribute("alt", "fight club");
      //         document.getElementById("setBackdrop").append(backdrop);
      //         // movie1Image.innerHTML = `<img class="card-img-top" id="movie1Image" src=https://image.tmdb.org/t/p/w500/hZkgoQYus5vegHoetLkCJzb17zJ.jpg alt="Card image cap">`;
      //         console.log(data);
      //       };
      //       createBackdrop();
    });
  });
};

fetchMovie();

// https://image.tmdb.org/t/p/w500${data.backdrop_path}

// https://image.tmdb.org/t/p/w500/hZkgoQYus5vegHoetLkCJzb17zJ.jpg
// 157336
//`https://api.themoviedb.org/3/movie/550?api_key=${apiKey}`
