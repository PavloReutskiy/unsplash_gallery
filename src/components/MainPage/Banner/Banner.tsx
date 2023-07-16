import { useState, useEffect, ChangeEvent } from "react";
import { getRandomPhoto } from "../../../api/photos";
import "./banner.scss";
import { useNavigate } from "react-router-dom";

export const Banner: React.FC = () => {
  const [query, setQuery] = useState("");
  const [isResetButtonActive, setIsResetButtonActive] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState<string>("");
  const [photoAuthor, setPhotoAuthor] = useState<string>("");

  const navigate = useNavigate();

  // useEffect(() => {
  //   const fetchRandomPhoto = async () => {
  //     try {
  //       const photo: Photo = await getRandomPhoto();
  //       setBackgroundImage(photo.urls.full);
  //       setPhotoAuthor(photo.user.name);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchRandomPhoto();
  // }, []);

  useEffect(() => {
    const savedPhoto = localStorage.getItem("randomPhoto");
    if (savedPhoto) {
      setBackgroundImage(JSON.parse(savedPhoto).urls.regular);
      setPhotoAuthor(JSON.parse(savedPhoto).user.name);
    } else {
      getRandomPhoto().then((photo) => {
        setBackgroundImage(photo.urls.regular);
        setPhotoAuthor(photo.user.name);
        localStorage.setItem("randomPhoto", JSON.stringify(photo));
      });
    }
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
    navigate(`/s/photos/${query}`)
    setQuery('');
    setIsResetButtonActive(false);
  }

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
            <form onSubmit={handleFormSubmit}>
              <input
                type="text"
                className="input banner__search-field"
                placeholder="Search high-resolution images"
                value={query}
                onChange={handleQueryChange}
              />
              <span className="banner__search-icon banner__search-icon--left">
                <i className="fas fa-magnifying-glass" />
              </span>

              <span className="icon banner__reset">
                {isResetButtonActive && (
                  <button
                    type="button"
                    className="delete"
                    aria-label="Clear search"
                    onClick={handleReset}
                  />
                )}
              </span>

              <span className="banner__search-icon banner__search-icon--right">
                <i className="fa-sharp fa-solid fa-expand"></i>
              </span>
            </form>
          </div>

          <div className="banner__trend-container">
            <span className="banner__trend">Trending:</span>
            <ul className="banner__list">
              <li>nature,</li>
              <li>film,</li>
              <li>animals,</li>
              <li>wallpapers,</li>
              <li>people</li>
            </ul>
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
