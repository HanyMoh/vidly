import http from './httpServices';

const apiEndPoint = "http://localhost:5000/movies";

export function getMovies() {
  return http.get(apiEndPoint + ".json");
}

export function deleteMovie(movieId) {
  return http.delete(apiEndPoint + "/" + movieId + ".json");
}