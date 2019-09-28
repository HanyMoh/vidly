import http from './httpServices';

const apiEndPoint = "http://localhost:5000/movies.json";

export function getMovies() {
  return http.get(apiEndPoint);
}

export function deleteMovie(movieId) {
  return http.delete(apiEndPoint + "/" + movieId);
}