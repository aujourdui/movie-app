import setData from "./setData";

const createDataList = async (result, url) => {
  const titleList = result.map((data) => data.title);
  const categoryIdList = result.map((data) => data.genre_ids[0]);
  const backdropUrlList = result.map((data) => data.backdrop_path);
  const posterUrlList = result.map((data) => data.poster_path);
  const overviewList = result.map((data) => data.overview);
  const releaseDateList = result.map((data) => data.release_date);
  const voteList = result.map((data) => data.vote_average);
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
  const categoryNameList = createCategoryNameList();

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

  setData(
    titleList,
    categoryNameList,
    backdropUrlList,
    posterUrlList,
    overviewList,
    releaseDateList,
    voteList,
    url
  );
};

export default createDataList;
