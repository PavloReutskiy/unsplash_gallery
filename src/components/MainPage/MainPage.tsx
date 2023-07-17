import "./mainPage.scss";
import { Banner } from "../Banner";
import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { getPhotos, getCollection, searchPhotos } from "../../api/photos";
import { Photo } from "../../types/Photo";
import { PhotoModal } from "../PhotoModal";
import { ColumnsRadio } from "../ColumnsRadio";
import { Gallery } from "../Gallery";

export const MainPage: React.FC = () => {
  const { collectionName, id: urlId, query } = useParams();
  const location = useLocation();
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [columns, setColumns] = useState(3);
  const [activePhotoId, setActivePhotoId] = useState<string | null>(
    urlId || null
  );
  const [previousPath, setPreviousPath] = useState("");

  const handlePhotoClick = (id: string | null) => {
    if (id) {
      setPreviousPath(location.pathname);
    }
    setActivePhotoId(id);
  };

  useEffect(() => {
    if (location.pathname !== "/") return;

    getPhotos(currentPage).then((response) => {
      if (response.length > 0) {
        setPhotos((prevPhotos) => [...prevPhotos, ...response]);
      } else {
        setCurrentPage(1);
      }
    });
  }, [location, currentPage]);

  useEffect(() => {
    if (!location.pathname.includes("/t/")) return;
    if (!collectionName) return;

    getCollection(collectionName, currentPage).then((response) => {
      setPhotos((prevPhotos) => [...prevPhotos, ...response]);
    });
  }, [location, collectionName, currentPage]);

  useEffect(() => {
    if (!location.pathname.includes("/s/photos/")) return;
    if (!query) return;

    searchPhotos(query, currentPage).then((response) => {
      setPhotos((prevPhotos) => [...prevPhotos, ...response.results]);
    });
  }, [location, query, currentPage]);

  useEffect(() => {
    setPhotos([]);
  }, [location, collectionName]);

  const fetchMoreData = () => {
    setTimeout(() => {
      setCurrentPage(currentPage + 1);
    }, 1500);
  };

  const changeColumns = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColumns(Number(event.target.value));
  };

  return (
    <>
      <Banner />

      <div className="gallery-container">
        <ColumnsRadio onChangeColumns={changeColumns} columns={columns} />

        <section className="gallery">
          <Gallery
            photos={photos}
            columns={columns}
            onFetchMoreData={fetchMoreData}
            onHandlePhotoClick={handlePhotoClick}
          />
        </section>

        {activePhotoId && (
          <PhotoModal
            photoId={activePhotoId}
            onClick={handlePhotoClick}
            previousPath={previousPath}
          />
        )}
      </div>
    </>
  );
};
