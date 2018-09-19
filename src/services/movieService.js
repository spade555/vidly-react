import http from "./httpService";
import { apiURL } from "../config.json";

const apiEndpoint = apiURL + "/movies";

export async function getMovies() {
  return await http.get(apiEndpoint);
}

export async function deleteMovie(movieId) {
  return await http.delete(apiEndpoint + "/" + movieId);
}
