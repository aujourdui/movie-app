const apiKey = "67a465f165043b63372ea02407bc5582";

const fetchMovie = () => {
  fetch(`https://api.themoviedb.org/3/movie/2?api_key=${apiKey}`).then(
    (response) => {
      if (response.status == 200) {
        console.log("It's working!");
      } else if (response.status == 404) {
        console.log("Something wrong, try again");
      }
      response.json().then((data) => {
        const movie1Title = document.getElementById("movie1");
        movie1Title.innerHTML = `${data.title}`;
        console.log(data.title);
      });
    }
  );
};

fetchMovie();

// 157336
//`https://api.themoviedb.org/3/movie/550?api_key=${apiKey}`
