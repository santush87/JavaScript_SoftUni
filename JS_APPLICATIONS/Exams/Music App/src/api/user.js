import { get, post } from "./api.js";
import { clearUserData, setUserData } from "./util.js";

const endpoint = {
  login: "", //Add login endpoint!
  register: "", //Add register endpoint!
  logout: "", //Add logout endpoint!
};

export async function login(email, password) {
  const {
    _id,
    email: resultEmail,
    accessToken,
  } = await post(endpoint.login, { email, password });

  setUserData({
    _id,
    email: resultEmail,
    accessToken,
  });
}

export async function register(email, password) {
  const {
    _id,
    email: resultEmail,
    accessToken,
  } = await post(endpoint.register, { email, password });

  setUserData({
    _id,
    email: resultEmail,
    accessToken,
  });
}

export async function logout() {
  get(endpoint.logout);
  clearUserData();
}
