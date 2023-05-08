import { post, get, put, del } from "./api.js";

const url = "/data/books?sortBy=_createdOn%20desc";

export async function getAllBooks(){
    return get(url);
}

export async function createBook(book){
    return post("/data/books", book);
}