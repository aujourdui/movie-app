// home page
const fetchMovieGenre = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`
  );
  const data = await response.json();
  const genres = data.genres;

  const fetchMovie = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=
      //"movie"&poster_path="string"`
    );
    if (response.status == 200) {
      console.log("It's working!");
    } else if (response.status == 404) {
      console.log("Something wrong, try again");
    }
    const data = await response.json();
    const result = data.results;
    const movieTitleList = result.map((data) => data.title);
    const movieCategoryIdList = result.map((data) => data.genre_ids[0]);
    const movieBackdropUrlList = result.map((data) => data.backdrop_path);
    const movieOverviewList = result.map((data) => data.overview);
    const movieReleaseDateList = result.map((data) => data.release_date);

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
            <div><img style="width:100%" src= https://image.tmdb.org/t/p/w500${
              movieBackdropUrlList[item]
            }></div>
            <div class="card-body">
              <h2 class="card-title">${movieTitleList[item]}</h2>
              <h3 class="card-text">${createCategoryNameList()[item]}</h3>
              <a href="detail.html" id=${item} onclick="window.localStorage.setItem('btnId', JSON.stringify(this.id))"  button type="button" class="btn btn-info">Go Detail page</a>
            </div>
            `;
      cardContainer.append(cardList);
    };

    if (window.location.href == "http://127.0.0.1:5502/index.html") {
      const createCardList = (row, column) => {
        setCreateCardContainer(column);
        for (let t = 0; t < column; t++) {
          for (let i = 0; i < row; i++) {
            createCard(t, i + row * t);
          }
        }
      };
      createCardList(3, 2);
    } else {
      // detail page
      const createDetailCard = (item) => {
        const detail = document.getElementById("movie-container-detail");
        detail.innerHTML = "";
        const createDetailContainer = document.createElement("div");
        createDetailContainer.setAttribute(
          "class",
          "card col-md-8",
          "style",
          "width: 100%"
        );
        createDetailContainer.innerHTML = `
              <div><img style="width:100%" src= https://image.tmdb.org/t/p/w500${
                movieBackdropUrlList[item]
              }></div>
              <div class="card-body">
                <h1 class="card-title">${movieTitleList[item]}</h1>
                <h2 class="card-text">${createCategoryNameList()[item]}</h2>
                <h4>${movieReleaseDateList[item]}</h4>
                <p>${movieOverviewList[item]}</p>
                <a href="index.html" button type="button" class="btn btn-primary">Return Home page</a>
              </div>
              `;
        detail.append(createDetailContainer);
      };

      const btnIdStr = JSON.parse(window.localStorage.getItem("btnId"));
      const btnId = parseInt(btnIdStr);
      createDetailCard(btnId);
    }
  };
  fetchMovie();
};
fetchMovieGenre();
