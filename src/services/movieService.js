import http from './httpServices';
import { apiUrl } from '../config.json';

const apiEndPoint = apiUrl + "/movies";

export function getMovies() {
  return http.get(apiEndPoint + ".json");
}

export function getMovie(movieId) {
  return http.get(apiEndPoint + "/" + movieId + ".json");
}

export function saveMovie() {
}

export function deleteMovie(movieId) {
  return http.delete(apiEndPoint + "/" + movieId + ".json");
}