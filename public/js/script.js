import apiKey from "./config.js";

const baseUrl = "https://api.themoviedb.org/3";
const imgUrl = "https://image.tmdb.org/t/p/w500";

const popularUrl = `${baseUrl}/discover/movie?sort_by=popularity.desc&${apiKey}`;
const genreUrl = `${baseUrl}/genre/movie/list?${apiKey}`;
const searchUrl = `${baseUrl}/search/movie?${apiKey}&query=`;

const movieContainer = document.getElementById("movie-container");
const form = document.getElementById("form");
const search = document.getElementById("search");

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
  displayMovie(result, url);
};

const displayMovie = async (result, url) => {
  const titleList = result.map((data) => data.title);
  const categoryIdList = result.map((data) => data.genre_ids[0]);
  const backdropUrlList = result.map((data) => data.backdrop_path);
  const posterUrlList = result.map((data) => data.poster_path);
  const overviewList = result.map((data) => data.overview);
  const releaseDateList = result.map((data) => data.release_date);
  const voteList = result.map((data) => data.vote_average);
  const genres = await fetchMovieGenre(genreUrl);
  const categoryNameList = createCategoryNameList(categoryIdList, genres);

  if (url !== popularUrl) {
    window.localStorage.setItem("newTitleList", JSON.stringify(`${titleList}`));
    window.localStorage.setItem(
      "newCategoryNameList",
      JSON.stringify(`${categoryNameList}`)
    );
    window.localStorage.setItem(
      "newPosterUrlList",
      JSON.stringify(`${posterUrlList}`)
    );
    window.localStorage.setItem(
      "newOverviewList",
      JSON.stringify(`${overviewList}`)
    );
    window.localStorage.setItem(
      "newReleaseDateList",
      JSON.stringify(`${releaseDateList}`)
    );
    window.localStorage.setItem("url", JSON.stringify(url));
  }

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
      id: `${itemIndex}`,
      onclick: () => {
        window.localStorage.setItem("btnId", JSON.stringify(`${itemIndex}`));
      },
    });

    const shortOverviewList = overviewList.map((overview) =>
      overview.length >= 50 ? overview.substring(0, 50) + " ..." : overview
    );

    cardList.innerHTML = `
      <div>
        <img style="width:100%" src= ${imgUrl}${backdropUrlList[itemIndex]}
        onerror="this.onerror=null;this.src='images/error-image.jpeg'">
      </div>
      <div class="card-body">
        <h2 class="card-title">${titleList[itemIndex]}</h2>
        <h3 class="card-text">${categoryNameList[itemIndex]}</h3>
        <p class="hide">${shortOverviewList[itemIndex]}</p>
        <p class="hide">${releaseDateList[itemIndex]}</p>
        <span class=${getColor(voteList[itemIndex])}>
          ${voteList[itemIndex]}
        </span>
      </div>
  `;
    cardContainer.append(cardList);
  };

  const createCardList = (row, column) => {
    setCreateCardContainer(column);
    for (let t = 0; t < column; t++) {
      for (let i = 0; i < row; i++) {
        createCard(t, i + row * t);
      }
    }
  };

  if (window.location.href.indexOf("detail.html") > 0) {
    // detail page
    const originalTitle = JSON.parse(
      window.localStorage.getItem("newTitleList")
    );
    const originalCategoryName = JSON.parse(
      window.localStorage.getItem("newCategoryNameList")
    );
    const originalPosterUrl = JSON.parse(
      window.localStorage.getItem("newPosterUrlList")
    );
    const originalOverview = JSON.parse(
      window.localStorage.getItem("newOverviewList")
    );
    const originalReleaseDate = JSON.parse(
      window.localStorage.getItem("newReleaseDateList")
    );
    const newUrl = JSON.parse(window.localStorage.getItem("url"));

    if (url == popularUrl && newUrl == null) {
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
          <div class="detail-card">
            <div>
              <img class="card-image__detail" src= ${imgUrl}${posterUrlList[itemIndex]} onerror="this.onerror=null;this.src='images/error-image-detail.jpeg'"}>
            </div>
            <div class="card-body">
              <h1 class="card-title" class="card-title__detail">${titleList[itemIndex]}</h1>
              <h2 class="card-text">${categoryNameList[itemIndex]}</h2>
              <h4>${releaseDateList[itemIndex]}</h4>
              <p>${overviewList[itemIndex]}</p>
              <a href="index.html" button type="button" class="btn btn-primary">
                > Back
              </a>
            </div>
          </div>
          `;
        detail.append(createDetailContainer);
      };

      const btnIdStr = JSON.parse(window.localStorage.getItem("btnId"));
      const btnId = parseInt(btnIdStr);
      createDetailCard(btnId);
      localStorage.clear();
    } else {
      const title = originalTitle.split(",");
      const categoryName = originalCategoryName.split(",");
      const posterUrl = originalPosterUrl.split(",");
      const overview = originalOverview.split(",");
      const releaseDate = originalReleaseDate.split(",");

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
          <div class="detail-card">
            <div>
              <img class="card-image__detail" src= ${imgUrl}${posterUrl[itemIndex]} onerror="this.onerror=null;this.src='images/error-image-detail.jpeg'">
            </div>
            <div class="card-body" class="card-title__detail">
              <h1 class="card-title">${title[itemIndex]}</h1>
              <h2 class="card-text">${categoryName[itemIndex]}</h2>
              <h4>${releaseDate[itemIndex]}</h4>
              <p>${overview[itemIndex]}</p>
                <a href="index.html" type="button" class="btn btn-primary">
                  > Back
                </a>
            </div>
          </div>
          `;
        detail.append(createDetailContainer);
      };

      const btnIdStr = JSON.parse(window.localStorage.getItem("btnId"));
      const btnId = parseInt(btnIdStr);
      createDetailCard(btnId);
      localStorage.clear();
    }
  } else {
    // home page
    searchByQuery();
    createCardList(4, 5);
  }
};

const createCategoryNameList = (categoryIdList, genres) => {
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

fetchMovie(popularUrl);

const searchByQuery = () => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const searchWord = search.value;
    window.localStorage.setItem("searchWord", JSON.stringify(`${searchWord}`));
    if (searchWord) {
      movieContainer.innerHTML = "";
      fetchMovie(`${searchUrl}${searchWord}`);
      search.value = "";
    } else if (searchWord == undefined) {
      alert("please input any value");
    }
  });
};

const getColor = (vote) => {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 5) {
    return "orange";
  } else {
    return "red";
  }
};
