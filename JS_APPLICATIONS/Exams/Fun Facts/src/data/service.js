import { get } from "./api.js";

export async function getAllFunFacts() {
  return get("/data/facts?sortBy=_createdOn%20desc");
}
