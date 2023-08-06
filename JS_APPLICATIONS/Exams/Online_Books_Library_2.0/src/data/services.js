import { post, get, del, put } from "./api.js";

export async function getAllBooks() {
  return get("/data/books?sortBy=_createdOn%20desc");
}

export async function createBook(book) {
  return post("/data/books", book);
}
