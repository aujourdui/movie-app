const apiKey = "67a465f165043b63372ea02407bc5582";
// const randomId = Math.floor(Math.random() * 1000)
// `https://api.themoviedb.org/3/movie/550?api_key=${apiKey}`

// `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&page=1&query=
//"movie"&poster_path="string"`

//`https://api.themoviedb.org/3/genre/movie/list?api_key=<<api_key>>&language=en-US`

const fetchMovieGenre = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`
  );
  const genre = await response.json();
  // console.log(genre);

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
    // console.log(data.results);
    const limitedMovies = data.results.slice(0, 6);
    console.log(limitedMovies);
    const movieTitleList = limitedMovies.map((data) => data.title);
    const movieCategoryIdList = limitedMovies.map((data) => data.genre_ids[0]);
    const movieCategoryNameList = console.log(genre);

    // console.log(movieTitleList);
    console.log(movieCategoryIdList);

    // let object = [
    //   { id: 28, name: "Action" },
    //   { id: 12, name: "Adventure" },
    //   { id: 16, name: "Animation" },
    //   { id: 35, name: "Comedy" },
    //   { id: 80, name: "Crime" },
    //   { id: 99, name: "Documentary" },
    //   { id: 18, name: "Drama" },
    //   { id: 10751, name: "Family" },
    //   { id: 14, name: "Fantasy" },
    //   { id: 36, name: "History" },
    //   { id: 27, name: "Horror" },
    //   { id: 10402, name: "Music" },
    //   { id: 9648, name: "Mystery" },
    //   { id: 10749, name: "Romance" },
    //   { id: 878, name: "Science Fiction" },
    //   { id: 10770, name: "TV Movie" },
    //   { id: 53, name: "Thriller" },
    //   { id: 10752, name: "War" },
    //   { id: 37, name: "Western" },
    // ];

    // let arr = [16, 16, 16, 16, 35, 28];

    // const newArr = [];

    // for (let i = 0; i < arr.length; i++) {
    //   for (let t = 0; t < object.length; t++) {
    //     if (arr[i] == object[t].id) {
    //       newArr.push(object[t].name);
    //     }
    //   }
    // }
    // console.log(newArr);

    //     let object = { a: 1, b: 2 };

    // console.log(object.a);

    //       const createCardContainer = () => {
    //         const movieContainer = document.getElementById("movie-container");
    //         const cardContainer = document.createElement("div");
    //         cardContainer.setAttribute("class", "row card-container");
    //         cardContainer.innerHTML = "";
    //         movieContainer.append(cardContainer);
    //       };

    //       const setCreateCardContainer = (column) => {
    //         for (let i = 0; i < column; i++) {
    //           createCardContainer();
    //         }
    //       };

    //       const createCard = (i) => {
    //         const cardContainer =
    //           document.getElementsByClassName("card-container")[i];
    //         const cardList = document.createElement("div");
    //         cardList.setAttribute("class", "card col-sm", "style", "width: 18rem");
    //         cardList.innerHTML = `
    //         <div class="card-body">
    //           <h5 class="card-title">Movie1</h5>
    //           <h5 class="card-text">Category1</h5>
    //           <a href="/detail.html" class="btn btn-primary">Go Detail page</a>
    //         </div>
    //         `;
    //         cardContainer.append(cardList);
    //       };

    //       const createCardList = (row, column) => {
    //         setCreateCardContainer(column);
    //         for (let t = 0; t < column; t++) {
    //           for (let i = 0; i < row; i++) {
    //             createCard(t);
    //           }
    //         }
    //       };

    //       createCardList(3, 2);

    //       //       const movie1Title = document.getElementById("movie1Title");
    //       //       const movie1Category = document.getElementById("movie1Category");
    //       //       const backdrop_path = data.backdrop_path;
    //       //       const backdropUrl = `https://image.tmdb.org/t/p/w200${backdrop_path}`;
    //       //       console.log(backdropUrl);

    //       //       movie1Title.innerHTML = `${data.title}`;
    //       //       movie1Category.innerHTML = `${data.genres[0].name}`;

    //       //       const createBackdrop = () => {
    //       //         const backdrop = document.createElement("IMG");
    //       //         backdrop.setAttribute("src", `${backdropUrl}`);
    //       //         // backdrop.setAttribute("width", "200");
    //       //         // backdrop.setAttribute("height", "200");
    //       //         backdrop.setAttribute("alt", "fight club");
    //       //         document.getElementById("setBackdrop").append(backdrop);
    //       //         // movie1Image.innerHTML = `<img class="card-img-top" id="movie1Image" src=https://image.tmdb.org/t/p/w500/hZkgoQYus5vegHoetLkCJzb17zJ.jpg alt="Card image cap">`;
    //       //         console.log(data);
    //       //       };
    //       //       createBackdrop();
    //     });
    //   });
    // };

    // const fetchMovie = () => {
    //   fetch(
    //     `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`
    //   ).then((response) => {
    //     if (response.status == 200) {
    //       console.log("It's working!");
    //     } else if (response.status == 404) {
    //       console.log("Something wrong, try again");
    //     }
    //     response.json().then((data) => {
    //       console.log(data);
    //       // console.log(data.results);
    //       // const limitedMovies = data.results.slice(0, 6);
    //       // console.log(limitedMovies);
    //       // const movieTitleList = limitedMovies.map((data) => data.title);
    //       // const movieCategoryList = limitedMovies.map((data) => data.category);
    //       // console.log(movieCategoryList);

    //       const createCardContainer = () => {
    //         const movieContainer = document.getElementById("movie-container");
    //         const cardContainer = document.createElement("div");
    //         cardContainer.setAttribute("class", "row card-container");
    //         cardContainer.innerHTML = "";
    //         movieContainer.append(cardContainer);
    //       };

    //       const setCreateCardContainer = (column) => {
    //         for (let i = 0; i < column; i++) {
    //           createCardContainer();
    //         }
    //       };

    //       const createCard = (i) => {
    //         const cardContainer =
    //           document.getElementsByClassName("card-container")[i];
    //         const cardList = document.createElement("div");
    //         cardList.setAttribute("class", "card col-sm", "style", "width: 18rem");
    //         cardList.innerHTML = `
    //         <div class="card-body">
    //           <h5 class="card-title">Movie1</h5>
    //           <h5 class="card-text">Category1</h5>
    //           <a href="/detail.html" class="btn btn-primary">Go Detail page</a>
    //         </div>
    //         `;
    //         cardContainer.append(cardList);
    //       };

    //       const createCardList = (row, column) => {
    //         setCreateCardContainer(column);
    //         for (let t = 0; t < column; t++) {
    //           for (let i = 0; i < row; i++) {
    //             createCard(t);
    //           }
    //         }
    //       };

    //       createCardList(3, 2);

    //       //       const movie1Title = document.getElementById("movie1Title");
    //       //       const movie1Category = document.getElementById("movie1Category");
    //       //       const backdrop_path = data.backdrop_path;
    //       //       const backdropUrl = `https://image.tmdb.org/t/p/w200${backdrop_path}`;
    //       //       console.log(backdropUrl);

    //       //       movie1Title.innerHTML = `${data.title}`;
    //       //       movie1Category.innerHTML = `${data.genres[0].name}`;

    //       //       const createBackdrop = () => {
    //       //         const backdrop = document.createElement("IMG");
    //       //         backdrop.setAttribute("src", `${backdropUrl}`);
    //       //         // backdrop.setAttribute("width", "200");
    //       //         // backdrop.setAttribute("height", "200");
    //       //         backdrop.setAttribute("alt", "fight club");
    //       //         document.getElementById("setBackdrop").append(backdrop);
    //       //         // movie1Image.innerHTML = `<img class="card-img-top" id="movie1Image" src=https://image.tmdb.org/t/p/w500/hZkgoQYus5vegHoetLkCJzb17zJ.jpg alt="Card image cap">`;
    //       //         console.log(data);
    //       //       };
    //       //       createBackdrop();
    //     });
    //   });
  };
  fetchMovie();
};

fetchMovieGenre();
// const fetchMovie = async () => {
//   const response = await fetch(
//     `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`
//   );
//   if (response.status == 200) {
//     console.log("It's working!");
//   } else if (response.status == 404) {
//     console.log("Something wrong, try again");
//   }
//   const data = await response.json();
//   console.log(data);
//   //       // console.log(data.results);
//   //       // const limitedMovies = data.results.slice(0, 6);
//   //       // console.log(limitedMovies);
//   //       // const movieTitleList = limitedMovies.map((data) => data.title);
//   //       // const movieCategoryList = limitedMovies.map((data) => data.category);
//   //       // console.log(movieCategoryList);

//   //       const createCardContainer = () => {
//   //         const movieContainer = document.getElementById("movie-container");
//   //         const cardContainer = document.createElement("div");
//   //         cardContainer.setAttribute("class", "row card-container");
//   //         cardContainer.innerHTML = "";
//   //         movieContainer.append(cardContainer);
//   //       };

//   //       const setCreateCardContainer = (column) => {
//   //         for (let i = 0; i < column; i++) {
//   //           createCardContainer();
//   //         }
//   //       };

//   //       const createCard = (i) => {
//   //         const cardContainer =
//   //           document.getElementsByClassName("card-container")[i];
//   //         const cardList = document.createElement("div");
//   //         cardList.setAttribute("class", "card col-sm", "style", "width: 18rem");
//   //         cardList.innerHTML = `
//   //         <div class="card-body">
//   //           <h5 class="card-title">Movie1</h5>
//   //           <h5 class="card-text">Category1</h5>
//   //           <a href="/detail.html" class="btn btn-primary">Go Detail page</a>
//   //         </div>
//   //         `;
//   //         cardContainer.append(cardList);
//   //       };

//   //       const createCardList = (row, column) => {
//   //         setCreateCardContainer(column);
//   //         for (let t = 0; t < column; t++) {
//   //           for (let i = 0; i < row; i++) {
//   //             createCard(t);
//   //           }
//   //         }
//   //       };

//   //       createCardList(3, 2);

//   //       //       const movie1Title = document.getElementById("movie1Title");
//   //       //       const movie1Category = document.getElementById("movie1Category");
//   //       //       const backdrop_path = data.backdrop_path;
//   //       //       const backdropUrl = `https://image.tmdb.org/t/p/w200${backdrop_path}`;
//   //       //       console.log(backdropUrl);

//   //       //       movie1Title.innerHTML = `${data.title}`;
//   //       //       movie1Category.innerHTML = `${data.genres[0].name}`;

//   //       //       const createBackdrop = () => {
//   //       //         const backdrop = document.createElement("IMG");
//   //       //         backdrop.setAttribute("src", `${backdropUrl}`);
//   //       //         // backdrop.setAttribute("width", "200");
//   //       //         // backdrop.setAttribute("height", "200");
//   //       //         backdrop.setAttribute("alt", "fight club");
//   //       //         document.getElementById("setBackdrop").append(backdrop);
//   //       //         // movie1Image.innerHTML = `<img class="card-img-top" id="movie1Image" src=https://image.tmdb.org/t/p/w500/hZkgoQYus5vegHoetLkCJzb17zJ.jpg alt="Card image cap">`;
//   //       //         console.log(data);
//   //       //       };
//   //       //       createBackdrop();
//   //     });
//   //   });
//   // };

//   // const fetchMovie = () => {
//   //   fetch(
//   //     `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`
//   //   ).then((response) => {
//   //     if (response.status == 200) {
//   //       console.log("It's working!");
//   //     } else if (response.status == 404) {
//   //       console.log("Something wrong, try again");
//   //     }
//   //     response.json().then((data) => {
//   //       console.log(data);
//   //       // console.log(data.results);
//   //       // const limitedMovies = data.results.slice(0, 6);
//   //       // console.log(limitedMovies);
//   //       // const movieTitleList = limitedMovies.map((data) => data.title);
//   //       // const movieCategoryList = limitedMovies.map((data) => data.category);
//   //       // console.log(movieCategoryList);

//   //       const createCardContainer = () => {
//   //         const movieContainer = document.getElementById("movie-container");
//   //         const cardContainer = document.createElement("div");
//   //         cardContainer.setAttribute("class", "row card-container");
//   //         cardContainer.innerHTML = "";
//   //         movieContainer.append(cardContainer);
//   //       };

//   //       const setCreateCardContainer = (column) => {
//   //         for (let i = 0; i < column; i++) {
//   //           createCardContainer();
//   //         }
//   //       };

//   //       const createCard = (i) => {
//   //         const cardContainer =
//   //           document.getElementsByClassName("card-container")[i];
//   //         const cardList = document.createElement("div");
//   //         cardList.setAttribute("class", "card col-sm", "style", "width: 18rem");
//   //         cardList.innerHTML = `
//   //         <div class="card-body">
//   //           <h5 class="card-title">Movie1</h5>
//   //           <h5 class="card-text">Category1</h5>
//   //           <a href="/detail.html" class="btn btn-primary">Go Detail page</a>
//   //         </div>
//   //         `;
//   //         cardContainer.append(cardList);
//   //       };

//   //       const createCardList = (row, column) => {
//   //         setCreateCardContainer(column);
//   //         for (let t = 0; t < column; t++) {
//   //           for (let i = 0; i < row; i++) {
//   //             createCard(t);
//   //           }
//   //         }
//   //       };

//   //       createCardList(3, 2);

//   //       //       const movie1Title = document.getElementById("movie1Title");
//   //       //       const movie1Category = document.getElementById("movie1Category");
//   //       //       const backdrop_path = data.backdrop_path;
//   //       //       const backdropUrl = `https://image.tmdb.org/t/p/w200${backdrop_path}`;
//   //       //       console.log(backdropUrl);

//   //       //       movie1Title.innerHTML = `${data.title}`;
//   //       //       movie1Category.innerHTML = `${data.genres[0].name}`;

//   //       //       const createBackdrop = () => {
//   //       //         const backdrop = document.createElement("IMG");
//   //       //         backdrop.setAttribute("src", `${backdropUrl}`);
//   //       //         // backdrop.setAttribute("width", "200");
//   //       //         // backdrop.setAttribute("height", "200");
//   //       //         backdrop.setAttribute("alt", "fight club");
//   //       //         document.getElementById("setBackdrop").append(backdrop);
//   //       //         // movie1Image.innerHTML = `<img class="card-img-top" id="movie1Image" src=https://image.tmdb.org/t/p/w500/hZkgoQYus5vegHoetLkCJzb17zJ.jpg alt="Card image cap">`;
//   //       //         console.log(data);
//   //       //       };
//   //       //       createBackdrop();
//   //     });
//   //   });
// };

// fetchMovie();

// https://image.tmdb.org/t/p/w500${data.backdrop_path}

// https://image.tmdb.org/t/p/w500/hZkgoQYus5vegHoetLkCJzb17zJ.jpg
// 157336
//`https://api.themoviedb.org/3/movie/550?api_key=${apiKey}`
