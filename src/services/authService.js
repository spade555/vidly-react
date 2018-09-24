import http from "./httpService";
import { apiURL } from "../config.json";

const apiEndpoint = apiURL + "/auth";

export function login(email, password) {
  return http.post(apiEndpoint, { email, password });
}
