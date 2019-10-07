import http from './httpServices';
import { apiUrl } from '../config.json';

const apiEndPoint = apiUrl + "/v1/user";

export function register(user) {
  return http.post(apiEndPoint + '/registrations.json', {
    user: {
      first_name: user.name,
      last_name: "L " + user.name,
      password: user.password,
      password_confirmation: user.password,
      email: user.username,
      gender: "male"
    }
  });
}