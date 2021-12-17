const apiKey = "api_key=67a465f165043b63372ea02407bc5582";
const baseUrl = "https://api.themoviedb.org/3";
const imgUrl = "https://image.tmdb.org/t/p/w500";

const popularUrl = `${baseUrl}/discover/movie?sort_by=popularity.desc&${apiKey}`;
const genreUrl = `${baseUrl}/genre/movie/list?${apiKey}`;
const searchUrl = `${baseUrl}/search/movie?${apiKey}&query=`;

export { apiKey, baseUrl, imgUrl, popularUrl, genreUrl, searchUrl };
