import { useState, useEffect, ChangeEvent } from "react";
import { getRandomPhoto } from "../../api/photos";
import "./banner.scss";
import { useNavigate } from "react-router-dom";
import { TrendingList } from "../TrendingList";
import { SearchForm } from "../SearchForm";
import { Photo } from "../../types/Photo";

export const Banner: React.FC = () => {
  const [query, setQuery] = useState("");
  const [isResetButtonActive, setIsResetButtonActive] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState<string>("");
  const [photoAuthor, setPhotoAuthor] = useState<string>("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchRandomPhoto = async () => {
      try {
        const photo: Photo = await getRandomPhoto();
        setBackgroundImage(photo.urls.full);
        setPhotoAuthor(photo.user.name);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRandomPhoto();
  }, []);

  const handleQueryChange = (inputEvent: ChangeEvent<HTMLInputElement>) => {
    const { value } = inputEvent.target;

    setQuery(value);
    setIsResetButtonActive(!!value);
  };

  const handleReset = () => {
    setQuery("");
    setIsResetButtonActive(false);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate(`/s/photos/${query}`);
    setQuery("");
    setIsResetButtonActive(false);
  };

  const handleLiClick = (text: string) => {
    navigate(`/s/photos/${text}`);
  };

  return (
    <section
      className="banner"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="banner__content">
        <div className="inner-container">
          <h1 className="banner__title">Unsplash</h1>
          <p className="banner__description">
            The internet’s source for visuals. <br /> Powered by creators
            everywhere.
          </p>

          <div className="banner__search control has-icons-left has-icons-right">
            <SearchForm
              query={query}
              onHandleFormSubmit={handleFormSubmit}
              onHandleQueryChange={handleQueryChange}
              onHandleReset={handleReset}
              isResetButtonActive={isResetButtonActive}
            />
          </div>

          <div className="banner__trend-container">
            <TrendingList onHandleLiClick={handleLiClick} />
          </div>
        </div>
        <ul className="banner__info">
          <li className="banner__info-element">Photo by {photoAuthor}</li>
          <li className="banner__info-element">
            Read more about the Unsplash License
          </li>
        </ul>
      </div>
    </section>
  );
};
