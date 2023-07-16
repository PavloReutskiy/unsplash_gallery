import InfiniteScroll from 'react-infinite-scroll-component';
import "./mainPage.scss";
import { Banner } from "./Banner";
import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { getPhotos, getCollection, searchPhotos } from "../../api/photos";
import { Photo } from "../../types/Photo";
import Masonry from 'react-masonry-css';
import { GalleryItem } from "./GalleryItem";
import { Loader } from "../Loader";
import { PhotoModal } from '../PhotoModal';

export const MainPage: React.FC = () => {
  const { collectionName, id: urlId, query } = useParams();
  const location = useLocation();
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [columns, setColumns] = useState(3);
  const [activePhotoId, setActivePhotoId] = useState<string | null>(urlId || null);
  const [previousPath, setPreviousPath] = useState('');

  const handlePhotoClick = (id: string | null) => {
    if (id) {
      setPreviousPath(location.pathname);
    }
    setActivePhotoId(id);
  }
  
  useEffect(() => {
    if (location.pathname === '/') {
      getPhotos(currentPage).then(response => {
        
        if (response.length > 0) {
          setPhotos(prevPhotos => [...prevPhotos, ...response]);
        } else {
          setCurrentPage(1);
        }
      })
    } else if (location.pathname.includes('/t/')) {
      if (collectionName) {
        getCollection(collectionName, currentPage).then(response => {
          setPhotos(prevPhotos => [...prevPhotos, ...response]);
        });
      }
    } else if (location.pathname.includes('/s/photos/')) {
      if (query) {
        searchPhotos(query).then(response => {
          setPhotos(prevPhotos => [...prevPhotos, ...response.results]);
        });
      }
    }
  }, [location, collectionName, currentPage, query]);

  useEffect(() => {
    setPhotos([]);
  }, [location, collectionName]);

  const fetchMoreData = () => {
    setTimeout(() => {
      setCurrentPage(currentPage + 1);
    }, 1500)
  };

  const changeColumns = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColumns(Number(event.target.value));
  };

  return (
    <>
      <Banner />

      <div className="gallery-container">
          <div className="radio">
            <label className="radio__lable">
              <input
                type="radio"
                className="radio__input"
                value="3"
                checked={columns === 3}
                onChange={changeColumns}
              />
              3 columns
            </label>
            <label className="radio__lable">
              <input
                type="radio"
                className="radio__input"
                value="4"
                checked={columns === 4}
                onChange={changeColumns}
              />
              4 columns
            </label>
          </div>

        <section className="gallery">
          <InfiniteScroll
            dataLength={photos.length}
            next={fetchMoreData}
            hasMore={true}
            loader={<Loader />}
          >
            <Masonry 
              breakpointCols={{
                default: columns,
                1200: 3,
                991: 2,
                767: 1,
              }}
              className="masonry-grid"
              columnClassName="masonry-grid_column"
            >
              {photos.map(photo => (
                <GalleryItem 
                  key={photo.id} 
                  photo={photo}
                  onPhotoClick={handlePhotoClick}
                />
              ))}
            </Masonry>
          </InfiniteScroll>
        </section>

        {activePhotoId && 
          <PhotoModal 
            photoId={activePhotoId} 
            onClick={handlePhotoClick}
            previousPath={previousPath}
          />
        }
      </div>
    </>
  )
};
