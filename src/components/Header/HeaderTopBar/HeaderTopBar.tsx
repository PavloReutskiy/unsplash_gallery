import { Link } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';
import BurgerMenu from '../../../img/icons/burger.svg';
import Logo from '../../../img/logo-black.svg';
import { ChangeEvent, useState } from 'react';
import './headerTopBar.scss';

export const HeaderTopBar: React.FC = () => {
  const [query, setQuery] = useState('');
  const [isResetButtonActive, setIsResetButtonActive] = useState(false);
  const isTabletOrDesktop = useMediaQuery({ query: '(max-width: 767px)' })

  const handleQueryChange = (inputEvent: ChangeEvent<HTMLInputElement>) => {
    const { value } = inputEvent.target;

    setQuery(value);
    setIsResetButtonActive(!!value);
  };

  const handleReset = () => {
    setQuery('');
    setIsResetButtonActive(false);
  };
  return (
    <div className="header__top">
        <Link className='header__logo' to="/">
          <img src={Logo} alt="logo" />
        </Link>

        <div className="header__search control has-icons-left has-icons-right">
          <input 
            type="text" 
            className="input header__search-field"
            placeholder={isTabletOrDesktop ? "Search image" : "Search high-resolution images"}
            value={query}
            onChange={handleQueryChange}
          />
          <span className="header__search-icon header__search-icon--left">
            <i className="fas fa-magnifying-glass" />
          </span>

          <span className="icon reset">
            {isResetButtonActive && (
              <button
                type="button"
                className="delete"
                aria-label="Clear search"
                onClick={handleReset}
              />
            )}
          </span>

          <span className="header__search-icon header__search-icon--right">
            <i className="fa-sharp fa-solid fa-expand"></i>
          </span>
        </div>

        <div className="header__action-links">
          <Link className='header__auth' to="/">
            Log in
          </Link>
          <button className='header__submit' type='button'>
            Submit a photo
          </button>
        </div>

        <button className="burger-menu">
          <img src={BurgerMenu} alt="burger_menu" />
        </button>
      </div>
  );
}