import http from './httpServices';
import { apiUrl } from '../config.json';

const apiEndPoint = apiUrl + "/movies";

export function getMovies() {
  return http.get(apiEndPoint + ".json");
}

export function deleteMovie(movieId) {
  return http.delete(apiEndPoint + "/" + movieId + ".json");
}