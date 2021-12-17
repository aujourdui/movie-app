import createDataList from "./createDataList";

const setData = (
  title,
  categoryName,
  backdropUrl,
  posterUrl,
  overview,
  releaseDate,
  vote,
  url
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
      id: `${itemIndex}`,
      onclick: () => {
        window.localStorage.setItem("btnId", JSON.stringify(`${itemIndex}`));
      },
    });
    console.log(overview);
    const shortOverviewList = overview.map((overview) =>
      overview.length >= 50 ? overview.substring(0, 50) + " ..." : overview
    );

    cardList.innerHTML = `
    <div><img style="width:100%" src= ${imgUrl}${
      backdropUrl[itemIndex]
    } onerror="imgError(this)"></div>
    <div class="card-body">
      <h2 class="card-title">${title[itemIndex]}</h2>
      <h3 class="card-text">${categoryName[itemIndex]}</h3>
      <p class="hide">${shortOverviewList[itemIndex]}</p>
      <p class="hide">${releaseDate[itemIndex]}</p>
      <span class=${getColor(vote[itemIndex])}>${vote[itemIndex]}</span>
    </div>
  `;
    cardContainer.append(cardList);
  };
};
