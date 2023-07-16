import './photoModal.scss';
import { useNavigate } from 'react-router-dom';

type Props = {
  photoId: string;
  onClick: (id: string | null) => void;
  previousPath: string;
}

const tags = [
  { title: 'man' },
  { title: 'drinking' },
  { title: 'coffee' },
  { title: 'man' },
  { title: 'drinking' },
  { title: 'coffee' },
  { title: 'man' },
  { title: 'drinking' },
  { title: 'coffee' },
  { title: 'man' },
  { title: 'drinking' },
  { title: 'coffee' },
  { title: 'man' },
  { title: 'drinking' },
  { title: 'coffee' },
  { title: 'man' },
  { title: 'drinking' },
  { title: 'coffee' },
  { title: 'man' },
  { title: 'drinking' },
  { title: 'coffee' },
  { title: 'man' },
  { title: 'drinking' },
  { title: 'coffee' },
  { title: 'man' },
  { title: 'drinking' },
  { title: 'coffee' },
  { title: 'man' },
  { title: 'drinking' },
  { title: 'coffee' },
];

export const PhotoModal: React.FC<Props> = ({ photoId, onClick, previousPath }) => {
  const navigate = useNavigate();

  return (
    <div className="modal-container">
      <div className="modal-content">

        <div className="modal-top">
          <div className="author-container">
            <div className="author-photo"><img src="https://via.placeholder.com/30x30" alt="Placeholder image" /></div>
            <div className="author">Pavlo Reutskiy</div>
          </div>
          <div className="action-buttons">
            <div className="action-button"><i className="fa-sharp fa-solid fa-heart"></i></div>
            <div className="action-button"><i className="fa-sharp fa-solid fa-plus"></i></div>
            <div className="action-button">Download</div>
          </div>
        </div>

        <img 
          className="modal-photo" 
          src="https://via.placeholder.com/440x660" 
          alt="Placeholder image" 
        />

        <div className="tags">
          {tags.map(tag => (
            <button key={tag.title} className="tag">
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
