import http from "./httpService";

const apiEndpoint = "http://localhost:3900/api/movies";

export async function getMovies() {
  return await http.get(apiEndpoint);
}

export async function deleteMovie(movieId) {
  return await http.delete(apiEndpoint + "/" + movieId);
}
