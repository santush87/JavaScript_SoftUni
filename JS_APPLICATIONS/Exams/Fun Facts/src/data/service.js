import { get, post } from "./api.js";

export async function getAllFunFacts() {
  return get("/data/facts?sortBy=_createdOn%20desc");
}

export async function createFunFact(fact) {
  return post("/data/facts", fact);
}
