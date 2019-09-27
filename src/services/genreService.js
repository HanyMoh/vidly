import http from './httpServices';

export function getGenres() {
  return http.get('http://localhost:5000/genres.json');
}
