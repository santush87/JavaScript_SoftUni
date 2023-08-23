import { post, get, del, put } from "./api.js";

export async function getAllMotos() {
  return get("/data/motorcycles?sortBy=_createdOn%20desc");
}

export async function getMoto(id) {
  return get("/data/motorcycles/" + id);
}

export async function editMoto(id, moto) {
  return put("/data/motorcycles/" + id, moto);
}

export async function addMoto(moto) {
  return post("/data/motorcycles", moto);
}

export async function deleteById(id) {
  return del("/data/motorcycles/" + id);
}

export async function getSearch(query) {
  return get(`/data/motorcycles?where=model%20LIKE%20%22${query}%22`);
}
