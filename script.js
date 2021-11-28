const baseUrl = "https://api.themoviedb.org/3";
const imgUrl = "https://image.tmdb.org/t/p/w500";

const popularUrl = `${baseUrl}/discover/movie?sort_by=popularity.desc&${apiKey}`;
const genreUrl = `${baseUrl}/genre/movie/list?${apiKey}`;
const searchUrl = `${baseUrl}/search/movie?${apiKey}&query="movie"`;

// home page
const fetchMovieGenre = async (url) => {
  const response = await fetch(url);
  if (response.status == 200) {
    console.log("It's working!");
  } else if (response.status == 404) {
    console.log("Something wrong, try again");
  }
  const data = await response.json();
  const genres = data.genres;
  return genres;
};

const fetchMovie = async (url) => {
  const response = await fetch(url);
  if (response.status == 200) {
    console.log("It's working!");
  } else if (response.status == 404) {
    console.log("Something wrong, try again");
  }
  const data = await response.json();
  const result = data.results;
  createDataList(result);
};

const createDataList = async (result) => {
  const movieTitleList = result.map((data) => data.title);
  const movieCategoryIdList = result.map((data) => data.genre_ids[0]);
  const movieBackdropUrlList = result.map((data) => data.backdrop_path);
  const moviePosterUrlList = result.map((data) => data.poster_path);
  const movieOverviewList = result.map((data) => data.overview);
  const movieReleaseDateList = result.map((data) => data.release_date);
  const genres = await fetchMovieGenre(genreUrl);

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
  const movieCategoryNameList = createCategoryNameList();

  setData(
    movieTitleList,
    movieCategoryNameList,
    movieBackdropUrlList,
    moviePosterUrlList,
    movieOverviewList,
    movieReleaseDateList
  );
};

const setData = (
  title,
  categoryName,
  backdropUrl,
  posterUrl,
  overview,
  releaseDate
) => {
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

  const createCard = (column, itemIndex) => {
    const cardContainer =
      document.getElementsByClassName("card-container")[column];
    const cardList = document.createElement("a");
    Object.assign(cardList, {
      className: "card col-sm",
      style: "width: 18rem",
      href: "detail.html",
      onclick: () => {
        window.localStorage.setItem("btnId", JSON.stringify(`${itemIndex}`));
      },
    });

    cardList.innerHTML = `
    <div><img style="width:100%" src= ${imgUrl}${backdropUrl[itemIndex]}></div>
    <div class="card-body">
      <h2 class="card-title">${title[itemIndex]}</h2>
      <h3 class="card-text">${categoryName[itemIndex]}</h3>
    </div>
  `;
    cardContainer.append(cardList);
  };

  // <a href="detail.html" id=${itemIndex} onclick="window.localStorage.setItem('btnId', JSON.stringify(this.id))"  button type="button">
  // </a>

  if (window.location.href == "http://127.0.0.1:5500/index.html") {
    const createCardList = (row, column) => {
      setCreateCardContainer(column);
      for (let t = 0; t < column; t++) {
        for (let i = 0; i < row; i++) {
          createCard(t, i + row * t);
        }
      }
    };
    createCardList(4, 5);
  } else {
    // detail page
    const createDetailCard = (itemIndex) => {
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
    <div><img style="width:100%" src= ${imgUrl}${posterUrl[itemIndex]}></div>
    <div class="card-body">
      <h1 class="card-title">${title[itemIndex]}</h1>
      <h2 class="card-text">${categoryName[itemIndex]}</h2>
      <h4>${releaseDate[itemIndex]}</h4>
      <p>${overview[itemIndex]}</p>
      <a href="index.html" button type="button" class="btn btn-primary">Return to Home</a>
    </div>
    `;
      detail.append(createDetailContainer);
    };

    const btnIdStr = JSON.parse(window.localStorage.getItem("btnId"));
    const btnId = parseInt(btnIdStr);
    createDetailCard(btnId);
  }
};

fetchMovie(popularUrl);
