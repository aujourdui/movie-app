import createDataList from "./createDataList";

export const fetchMovieGenre = async (url) => {
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

export const fetchMovie = async (url) => {
  const response = await fetch(url);
  if (response.status == 200) {
    console.log("It's working!");
  } else if (response.status == 404) {
    console.log("Something wrong, try again");
  }
  const data = await response.json();
  const result = data.results;
  createDataList(result, url);
};
