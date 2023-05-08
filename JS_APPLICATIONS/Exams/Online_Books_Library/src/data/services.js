import { post, get, put, del } from "./api.js";

const url = "/data/books?sortBy=_createdOn%20desc";

export async function getAllBooks(){
    return get(url);
}