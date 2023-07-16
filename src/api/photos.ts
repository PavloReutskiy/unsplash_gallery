import { Author } from "../types/Author";
import { Photo } from "../types/Photo";
import { SearchResults } from "../types/SearchResults";
import { client } from "../utils/fetchClient";

export const getRandomPhoto = () => {
  return client.get<Photo>('/photos/random')
}

export const getPhotoById = (id: string) => {
  return client.get<Photo>(`/photos/${id}`)
}

export const getAuthor = (name: string) => {
  return client.get<Author>(`/users/${name}`)
}

export const getPhotos = (page: number = 1, perPage: number = 10) => {
  return client.get<Photo[]>(`/photos?page=${page}&per_page=${perPage}`)
}

export const searchPhotos = (query: string) => {
  return client.get<SearchResults>(`/search/photos?query=${query}`)
}

export const getCollection = (slug: string, page: number = 1, perPage: number = 10) => {
  return client.get<Photo[]>(`/topics/${slug}/photos?page=${page}&per_page=${perPage}`)
}