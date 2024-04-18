import * as usersAPI from "./users-api";

export function logOut() {
  localStorage.removeItem("token");
}

export async function signUp(userData) {
  const token = await usersAPI.signUp(userData);
  // return user object from token instead
  localStorage.setItem("token", token);
  return getUser();
}

export function getToken() {
  const token = localStorage.getItem("token");
  if (!token) return null;
  // Obtain the payload of the token
  const payload = JSON.parse(atob(token.split(".")[1]));
  // A JWT's exp is espressed in seconds, not milliseconds, so convert
  if (payload.exp < Date.now() / 1000) {
    // Token has expired - remove it from localStorage
    localStorage.removeItem("token");
    return null;
  }
  return token;
}

export async function login(credentials) {
    const token = await usersAPI.login(credentials);
    localStorage.setItem("token", token);
    return getUser();
}

export function getUser() {
  const token = getToken();
  // if there's a token, return the user payload, otherwise return null
  return token ? JSON.parse(atob(token.split(".")[1])).user : null;
}

export function checkToken() {
    return usersAPI.checkToken()
        .then(dateStr => new Date(dateStr));
}

