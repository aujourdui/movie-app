const apiKey = "67a465f165043b63372ea02407bc5582";
// const randomId = Math.floor(Math.random() * 1000)

const fetchMovie = () => {
  fetch(`https://api.themoviedb.org/3/movie/550?api_key=${apiKey}`).then(
    (response) => {
      if (response.status == 200) {
        console.log("It's working!");
      } else if (response.status == 404) {
        console.log("Something wrong, try again");
      }
      response.json().then((data) => {
        // const limitedMovies = data.slice(0, 6);
        // console.log(limitedMovies);
        const movie1Title = document.getElementById("movie1Title");
        const movie1Category = document.getElementById("movie1Category");
        const movie1Image = document.getElementById("movie1Image");
        const backdrop_path = data.backdrop_path;
        console.log(backdrop_path);
        movie1Title.innerHTML = `${data.title}`;
        movie1Category.innerHTML = `${data.genres[0].name}`;
        movie1Image.innerHTML = `<img class="card-img-top" id="movie1Image" src=https://image.tmdb.org/t/p/w500/hZkgoQYus5vegHoetLkCJzb17zJ.jpg alt="Card image cap">`;
        console.log(data);
      });
    }
  );
};

fetchMovie();

// https://image.tmdb.org/t/p/w500${data.backdrop_path}

// https://image.tmdb.org/t/p/w500/hZkgoQYus5vegHoetLkCJzb17zJ.jpg
// 157336
//`https://api.themoviedb.org/3/movie/550?api_key=${apiKey}`
