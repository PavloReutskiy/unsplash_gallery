import { Photo } from "./Photo";

export interface SearchResults {
  total: number;
  total_pages: number;
  results: Photo[];
}