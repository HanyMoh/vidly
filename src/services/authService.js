import jwtDecode from 'jwt-decode';
import http from './httpServices';
import { apiUrl } from '../config.json';

const apiEndPoint = apiUrl + "/v1/user";
const tokenKey = "token";

export async function login(email, password) {
  const { data: jwt } = await http.post(apiEndPoint + '/sessions.json', {
    user: {
      password: password,
      email: email
    }
  });
  localStorage.setItem(tokenKey, jwt.token);
}

export function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt.token);
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (ex) {
    return null
  }
}

export default {
  login,
  loginWithJwt,
  logout,
  getCurrentUser
}