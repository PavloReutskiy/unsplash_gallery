import { Link } from "react-router-dom";
import { Photo } from "../../../types/Photo";
import './galleryItem.scss';

type Props = {
  photo: Photo;
}

export const GalleryItem: React.FC<Props> = ({ photo }) => {
  return (
    <div className="gallery__item-container">
      <Link 
        to={`/photos/${photo.id}`}
        className="gallery__item-link"
      >
        <img 
          src={photo.urls.raw} 
          alt={photo.description}
          className="masonry-item"
        />
        <div className="overlay">
          <button className="gallery__button gallery__button--1">
            <i className="fa-sharp fa-solid fa-heart"></i>
          </button>
          <button className="gallery__button gallery__button--2">
            <i className="fa-sharp fa-solid fa-plus"></i>
          </button>
        </div>
      </Link>
    </div>
  );
}