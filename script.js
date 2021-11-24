const apiKey = "67a465f165043b63372ea02407bc5582";

// home page
const fetchMovieGenre = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`
  );
  const data = await response.json();
  const genres = data.genres;

  const fetchMovie = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&page=1&query=
      //"movie"&poster_path="string"`
    );
    if (response.status == 200) {
      console.log("It's working!");
    } else if (response.status == 404) {
      console.log("Something wrong, try again");
    }
    const data = await response.json();
    const limitedMovies = data.results.slice(0, 30);
    const movieTitleList = limitedMovies.map((data) => data.title);
    const movieCategoryIdList = limitedMovies.map((data) => data.genre_ids[0]);
    const movieBackdropUrlList = limitedMovies.map(
      (data) => data.backdrop_path
    );

    const createCategoryNameList = () => {
      const movieCategoryNameList = [];
      for (let i = 0; i < movieCategoryIdList.length; i++) {
        for (let t = 0; t < genres.length; t++) {
          if (movieCategoryIdList[i] == genres[t].id) {
            movieCategoryNameList.push(genres[t].name);
          }
        }
      }
      return movieCategoryNameList;
    };

    const createCardContainer = () => {
      const movieContainer = document.getElementById("movie-container");
      const cardContainer = document.createElement("div");
      cardContainer.setAttribute("class", "row card-container");
      cardContainer.innerHTML = "";
      movieContainer.append(cardContainer);
    };

    const setCreateCardContainer = (column) => {
      for (let i = 0; i < column; i++) {
        createCardContainer();
      }
    };

    const createCard = (column, item) => {
      const cardContainer =
        document.getElementsByClassName("card-container")[column];
      const cardList = document.createElement("div");
      cardList.setAttribute("class", "card col-sm", "style", "width: 18rem");

      cardList.innerHTML = `
            <div><img style="width:100%" src= https://image.tmdb.org/t/p/w200${
              movieBackdropUrlList[item]
            }></div>
            <div class="card-body">
              <h5 class="card-title">${movieTitleList[item]}</h5>
              <h5 class="card-text">${createCategoryNameList()[item]}</h5>
              <a href="/detail.html" class="btn btn-primary">Go Detail page</a>
            </div>
            `;
      cardContainer.append(cardList);
    };

    if (window.location.href == "http://127.0.0.1:5502/index.html") {
      const createCardList = (row, column) => {
        setCreateCardContainer(column);
        for (let t = 0; t < column; t++) {
          for (let i = 0; i < row; i++) {
            createCard(t, i + 3 * t);
          }
        }
      };
      createCardList(3, 2);
    } else {
      const createDetail = () => {
        const detail = document.getElementById("movie-container-detail");
        const createDetailContainer = document.createElement("div");
        createDetailContainer.innerHTML = "Hello world";
        detail.append(createDetailContainer);
      };
      createDetail();
    }

    // detail page
    // const createDetail = () => {
    //   const detail = document.getElementById("movie-container-detail");
    //   const createDetailContainer = document.createElement("div");
    //   createDetailContainer.innerHTML = "Hello world";
    //   detail.append(createDetailContainer);
    // };
    // createDetail();
  };
  fetchMovie();
};
fetchMovieGenre();
