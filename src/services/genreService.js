import http from "./httpService";

export async function getGenres() {
  return await http.get("http://localhost:3900/api/genres");
}
