interface Exif {
  make: string;
  model: string;
  exposure_time: string;
  aperture: string;
  focal_length: string;
  iso: number;
}

interface Position {
  latitude: number;
  longitude: number;
}

interface Location {
  name: string;
  city: string;
  country: string;
  position: Position;
}

interface Urls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
}

export interface Links {
  self: string;
  html: string;
  download: string;
  download_location: string;
}

interface User {
  id: string;
  updated_at: string;
  username: string;
  name: string;
  portfolio_url: string;
  bio: string;
  location: string;
  total_likes: number;
  total_photos: number;
  total_collections: number;
  instagram_username: string;
  twitter_username: string;
  links: Links;
}

interface Tag {
  title: string;
}

export interface Photo {
  id: string;
  created_at: string;
  updated_at: string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  downloads: number;
  likes: number;
  liked_by_user: boolean;
  description: string;
  exif: Exif;
  tags: Tag[];
  location: Location;
  current_user_collections: any[]; 
  urls: Urls;
  links: Links;
  user: User;
}