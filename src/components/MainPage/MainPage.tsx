import InfiniteScroll from 'react-infinite-scroll-component';
import "./mainPage.scss";
import { Banner } from "./Banner";
import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { getPhotos, getCollection } from "../../api/photos";
import { Photo } from "../../types/Photo";
import Masonry from 'react-masonry-css';
import { GalleryItem } from "./GalleryItem";
import { Loader } from "../Loader";

export const MainPage: React.FC = () => {
  const { collectionName } = useParams();
  const location = useLocation();
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [columns, setColumns] = useState(3);
  // const [isLoading, setIsLoading] = useState(false) 

  useEffect(() => {
    // setIsLoading(true)
    if (location.pathname === '/') {
      getPhotos(currentPage).then(response => {
        console.log(response);
        
        // setIsLoading(false)
        if (response.length > 0) {
          setPhotos(prevPhotos => [...prevPhotos, ...response]);
        } else {
          setCurrentPage(1);
        }
      })
    } else if (location.pathname.includes('/t/')) {
      if (collectionName) {
        getCollection(collectionName, currentPage).then(response => {
          // setIsLoading(false);
          setPhotos(prevPhotos => [...prevPhotos, ...response]);
        });
      }
    }
  }, [location, collectionName, currentPage]);

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
                />
              ))}
            </Masonry>
          </InfiniteScroll>
        </section>
      </div>
    </>
  )
};
