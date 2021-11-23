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
      // console.log(limitedMovies);

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

      setCreateCardContainer(2);

      const createCard = (i) => {
        const cardContainer =
          document.getElementsByClassName("card-container")[i];
        const cardList = document.createElement("div");
        cardList.setAttribute("class", "card col-sm", "style", "width: 18rem");
        cardList.innerHTML = `
        <div class="card-body">
          <h5 class="card-title">Movie1</h5>
          <h5 class="card-text">Category1</h5>
          <a href="/detail.html" class="btn btn-primary">Go Detail page</a>
        </div>
        `;
        cardContainer.append(cardList);
      };

      const createCardList = (row, times) => {
        for (let t = 0; t < times; t++) {
          for (let i = 0; i < row; i++) {
            createCard(t);
          }
        }
      };

      createCardList(3, 2);

      // for (let i = 0; i < row; i++) {
      //   createCard(0);
      // }
      // for (let i = 0; i < row; i++) {
      //   createCard(1);
      // }

      // createCard();

      // <div class="card col-sm" style="width: 18rem;">

      // </div>

      // const createCardFirstRow = () => {
      //   const cardContainer = document.getElementById("card-container-first");
      //   // const cardList = document.createElement("div");
      //   // cardList.setAttribute("class", "row");
      //   cardContainer.innerHTML = `
      //   <div class="card col-sm" style="width: 18rem;">
      //   <div class="card-body">
      //     <h5 class="card-title">Movie1</h5>
      //     <h5 class="card-text">Category1</h5>
      //     <a href="/detail.html" class="btn btn-primary">Go Detail page</a>
      //   </div>
      // </div>
      // <div class="card col-sm" style="width: 18rem;">
      //   <div class="card-body">
      //     <h5 class="card-title">Movie1</h5>
      //     <h5 class="card-text">Category1</h5>
      //     <a href="/detail.html" class="btn btn-primary">Go Detail page</a>
      //   </div>
      // </div>
      // <div class="card col-sm" style="width: 18rem;">
      //   <div class="card-body">
      //     <h5 class="card-title">Movie1</h5>
      //     <h5 class="card-text">Category1</h5>
      //     <a href="/detail.html" class="btn btn-primary">Go Detail page</a>
      //   </div>
      // </div>
      //   `;
      //   // cardContainer.append(cardList);
      // };

      // const createCardSecondRow = () => {
      //   const cardContainer = document.getElementById("card-container-second");
      //   // const cardList = document.createElement("div");
      //   // cardList.setAttribute("class", "row");
      //   cardContainer.innerHTML = `
      //   <div class="card col-sm" style="width: 18rem;">
      //   <div class="card-body">
      //     <h5 class="card-title">Movie1</h5>
      //     <h5 class="card-text">Category1</h5>
      //     <a href="/detail.html" class="btn btn-primary">Go Detail page</a>
      //   </div>
      // </div>
      // <div class="card col-sm" style="width: 18rem;">
      //   <div class="card-body">
      //     <h5 class="card-title">Movie1</h5>
      //     <h5 class="card-text">Category1</h5>
      //     <a href="/detail.html" class="btn btn-primary">Go Detail page</a>
      //   </div>
      // </div>
      // <div class="card col-sm" style="width: 18rem;">
      //   <div class="card-body">
      //     <h5 class="card-title">Movie1</h5>
      //     <h5 class="card-text">Category1</h5>
      //     <a href="/detail.html" class="btn btn-primary">Go Detail page</a>
      //   </div>
      // </div>
      //   `;
      //   // cardContainer.append(cardList);
      // };

      // const createCardList = () => {
      //   createCardFirstRow();
      //   createCardSecondRow();
      // };

      // // createCard();

      // createCardList();

      //   <div class="row card-container">
      //   <div class="card col-sm" style="width: 18rem;">
      //     <div id="setBackdrop"></div>
      //     <div class="card-body">
      //       <h5 class="card-title" id="movie1Title"></h5>
      //       <h5 class="card-text" id="movie1Category"></h5>
      //       <a href="/detail.html" class="btn btn-primary">Go Detail page</a>
      //     </div>
      //   <!-- </div>
      //   <div class="card col-sm" style="width: 18rem;">
      //     <div class="card-body">
      //       <h5 class="card-title">Movie2</h5>
      //       <h5 class="card-text">Category2</h5>
      //       <a href="/detail.html" class="btn btn-primary">Go Detail page</a>
      //     </div>
      //   </div>
      //   <div class="card col-sm" style="width: 18rem;">
      //     <div class="card-body">
      //       <h5 class="card-title">Movie3</h5>
      //       <h5 class="card-text">Category3</h5>
      //       <a href="/detail.html" class="btn btn-primary">Go Detail page</a>
      //     </div>
      //   </div>
      // </div>
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
