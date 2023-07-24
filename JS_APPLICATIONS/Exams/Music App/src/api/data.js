import { get, post, put, del } from "./api.js";

const endpoints = {
  albums: "/data/albums",
};

export async function createAlbum(data) {
  return post(endpoints.albums, data);
}
