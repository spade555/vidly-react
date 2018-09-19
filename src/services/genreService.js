import http from "./httpService";
import { apiURL } from "../config.json";

export async function getGenres() {
  return await http.get(apiURL + "/genres");
}
