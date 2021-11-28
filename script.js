const baseUrl = "https://api.themoviedb.org/3";
const genreUrl = `${baseUrl}/genre/movie/list?${apiKey}`;
const imgUrl = "https://image.tmdb.org/t/p/w500";
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

  const title = await result.map((data) => data.title);
  const categoryIdList = await result.map((data) => data.genre_ids[0]);
  const backdropUrl = await result.map((data) => data.backdrop_path);
  const overview = await result.map((data) => data.overview);
  const releaseDate = await result.map((data) => data.release_date);

  const genres = await fetchMovieGenre(genreUrl);

  const createCategoryNameList = () => {
    const categoryNameList = [];
    for (let i = 0; i < categoryIdList.length; i++) {
      for (let t = 0; t < genres.length; t++) {
        if (categoryIdList[i] == genres[t].id) {
          categoryNameList.push(genres[t].name);
        }
      }
    }
    return categoryNameList;
  };
  const categoryName = createCategoryNameList();

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
    const cardList = document.createElement("div");
    cardList.setAttribute("class", "card col-sm", "style", "width: 18rem");

    cardList.innerHTML = `
  <div><img style="width:100%" src= ${imgUrl}${backdropUrl[itemIndex]}></div>
  <div class="card-body">
    <h2 class="card-title">${title[itemIndex]}</h2>
    <h3 class="card-text">${categoryName[itemIndex]}</h3>
    <a href="detail.html" id=${itemIndex} onclick="window.localStorage.setItem('btnId', JSON.stringify(this.id))"  button type="button" class="btn btn-info">Go Detail page</a>
  </div>
  `;
    cardContainer.append(cardList);

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
        const createDetailContainer = document.createElement("div");
        createDetailContainer.setAttribute(
          "class",
          "card col-md-8",
          "style",
          "width: 100%"
        );
        createDetailContainer.innerHTML = `
    <div><img style="width:100%" src= https://image.tmdb.org/t/p/w500${backdropUrl[itemIndex]}></div>
    <div class="card-body">
      <h1 class="card-title">${title[itemIndex]}</h1>
      <h2 class="card-text">${categoryName[itemIndex]}</h2>
      <h4>${releaseDate[itemIndex]}</h4>
      <p>${overview[itemIndex]}</p>
      <a href="index.html" button type="button" class="btn btn-primary">Return Home page</a>
    </div>
    `;
        detail.append(createDetailContainer);
      };

      const btnIdStr = JSON.parse(window.localStorage.getItem("btnId"));
      const btnId = parseInt(btnIdStr);
      createDetailCard(btnId);
    }
    // createDataList(result);
  };

  // const createDataList = async (result) => {

  // };

  // setContents(
  //   titleList,
  //   categoryNameList,
  //   backdropUrlList,
  //   overviewList,
  //   releaseDateList
  // );
};
fetchMovie(searchUrl);

// const setContents = async (
//   title,
//   categoryName,
//   backdropUrl,
//   overview,
//   releaseDate
// ) => {
// };
