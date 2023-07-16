import { Photo } from "../types/Photo";
import { client } from "../utils/fetchClient";

export const getRandomPhoto = () => {
  return client.get<Photo>('/photos/random')
}

export const getPhotos = (page: number = 1, perPage: number = 10) => {
  return client.get<Photo[]>(`/photos?page=${page}&per_page=${perPage}`)
}

export const getCollection = (slug: string, page: number = 1, perPage: number = 10) => {
  return client.get<Photo[]>(`/topics/${slug}/photos?page=${page}&per_page=${perPage}`)
}