import InfiniteScroll from "react-infinite-scroll-component";
import "./gallery.scss";
import Masonry from "react-masonry-css";
import { GalleryItem } from "../GalleryItem";
import { Loader } from "../Loader";
import { Photo } from "../../types/Photo";

type Props = {
  photos: Photo[];
  columns: number;
  onFetchMoreData: () => void;
  onHandlePhotoClick: (id: string | null) => void;
};

export const Gallery: React.FC<Props> = ({
  photos,
  columns,
  onFetchMoreData,
  onHandlePhotoClick,
}) => {
  return (
    <InfiniteScroll
      dataLength={photos.length}
      next={onFetchMoreData}
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
        {photos.map((photo) => (
          <GalleryItem
            key={photo.id}
            photo={photo}
            onPhotoClick={onHandlePhotoClick}
          />
        ))}
      </Masonry>
    </InfiniteScroll>
  );
};
