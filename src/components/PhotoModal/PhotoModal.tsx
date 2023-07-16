import './photoModal.scss';
import { useNavigate } from 'react-router-dom';
import { getPhotoById, getAuthor } from '../../api/photos';
import { useEffect, useState } from 'react';
import { Photo } from '../../types/Photo';
import { Author } from '../../types/Author';

type Props = {
  photoId: string;
  onClick: (id: string | null) => void;
  previousPath: string;
}

export const PhotoModal: React.FC<Props> = ({ photoId, onClick, previousPath }) => {
  const [photo, setPhoto] = useState<Photo | null>(null);
  const [author, setAuthor] = useState<Author | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (photoId) {
      getPhotoById(photoId).then(response => {
        setPhoto(response);
      });
    }
  }, [photoId]);

  useEffect(() => {
    if (photo?.user?.username) {
      getAuthor(photo.user.username).then(response => {
        setAuthor(response);
      });
    }
  }, [photo]);

  return (
    <div className="modal-container">
      <div className="modal-content">

        <div className="modal-top">
          <div className="author-container">
            <div className="author-photo"><img src={author?.profile_image.small} alt={author?.name} /></div>
            <div className="author">{photo?.user.name}</div>
          </div>
          <div className="action-buttons">
            <div className="action-button"><i className="fa-sharp fa-solid fa-heart"></i></div>
            <div className="action-button"><i className="fa-sharp fa-solid fa-plus"></i></div>
            <div className="action-button">Download</div>
          </div>
        </div>

        <img 
          className="modal-photo" 
          src={photo?.urls.small} 
          alt={photo?.description}
        />

        <div className="tags">
          {photo?.tags.map(tag => (
            <button 
              key={tag.title} 
              className="tag"
              onClick={() => {
                onClick(null);
                navigate(`/s/photos/${tag.title}`)
              }}
            >
                {tag.title.charAt(0).toUpperCase() + tag.title.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <button className="modal-next">
        <i className="fa-solid fa-chevron-right fa-xl"></i>
      </button>
      <button className="modal-prev">
        <i className="fa-solid fa-chevron-left fa-xl"></i>
      </button>
      <button 
        className="modal-close"
        onClick={() => {
          onClick(null);
          navigate(previousPath || '/');
        }}
      >
        <i className="fa-duotone fa-xmark"></i>
      </button>
    </div>
  );
}
