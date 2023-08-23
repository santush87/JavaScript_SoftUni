import { del, get, post } from "./api.js";

export async function getAllFunFacts() {
  return get("/data/facts?sortBy=_createdOn%20desc");
}

export async function getFactById(id) {
  return get("/data/facts/" + id);
}

export async function createFunFact(fact) {
  return post("/data/facts", fact);
}

export async function deleteById(id) {
  return del("/data/facts/" + id);
}

export async function editFact(id) {
  return put("/data/facts/" + id);
}

export async function getAllLikes(factId) {
  return get(
    `/data/likes?where=factId%3D%22${factId}%22&distinct=_ownerId&count`
  );
}

export async function getMyLikes(factId, userId) {
  return get(
    `/data/likes?where=factId%3D%22${factId}%22%20and%20_ownerId%3D%22${userId}%22&count`
  );
}

export async function likeFact(factId) {
  return post("/data/likes", {
    factId,
  });
}
