import { get, post, put, del } from "./api.js";

const endpoints = {
  albums: "/data/albums",
  getAllAlbums: "/data/albums?sortBy=_createdOn%20desc&distinct=name",
  getAlbum: "/data/albums/",
};

export async function createAlbum(data) {
  return post(endpoints.albums, data);
}

export async function getAllAlbums() {
  return get(endpoints.getAllAlbums);
}

export async function getDetailsById(id) {
  return get(endpoints.getAlbum + id);
}

export async function deleteAlbumById(id) {
  return del(endpoints.getAlbum + id);
}

export async function updateAlbum(id, data) {
  return put(endpoints.getAlbum + id, data);
}
