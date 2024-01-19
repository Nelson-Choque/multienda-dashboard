import axios from "axios";
import { constans } from "../const/const";

export class AuthService {
  API_URL = constans.API_BACKEND;

  async login(username: string, password: string) {
    const response = await axios.post(`${this.API_URL}/user/login/`, {
      username,
      password,
    });

    const data = await response.data;

    return data;
  }

  async register(username: string, password: string, storeName: string) {
    const response = await axios.post(`${this.API_URL}/user/register/`, {
      username,
      password,
      storeName,
    });

    const data = await response.data;

    return data;
  }
}
