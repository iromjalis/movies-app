import axios from "axios";

async function getTrendingFilms() {
  const response = await axios({
    method: "GET",
    url: "https://api.themoviedb.org/3/trending/movie/week?api_key=0dba41d64d38d3842f2e56a581ca4bf3",
  });
  return response;
}

function getFilmById(id) {
  const response = axios({
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/${id}?api_key=0dba41d64d38d3842f2e56a581ca4bf3`,
  });
  return response;
}
function getFilmByQuery(query) {
  const response = axios({
    method: "GET",
    url:
      `https://api.themoviedb.org/3/search/movie?api_key=0dba41d64d38d3842f2e56a581ca4bf3` +
      query,
  });
  return response;
}

export { getTrendingFilms, getFilmByQuery, getFilmById };
