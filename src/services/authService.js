import http from './httpServices';
import { apiUrl } from '../config.json';

const apiEndPoint = apiUrl + "/v1/user";

export function login(email, password) {
  return http.post(apiEndPoint + '/sessions.json', {
    user: {
      password: password,
      email: email
    }
  });
}