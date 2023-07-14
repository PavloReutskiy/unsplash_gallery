import { NavLink } from "react-router-dom";
import cn from 'classnames';
import './collectionsList.scss';
import { collections } from "../../../data/collections";

export const CollectionsList: React.FC = () => {
  return (
    <nav className="nav">
      <NavLink 
        to="/" 
        className={
          ({ isActive }) => cn('nav__link', { 'is-active': isActive })
        }
      >
        Editorial
      </NavLink>

      <div className="nav__separator"></div>

      <ul className='nav__list'>
        {collections.map(collection => (
          <li key={collection.id} className="nav__item">
            <NavLink
              to={`/t/${collection.slug}`}
              className={({ isActive }) => 
                cn('nav__link', { 
                  'is-active': isActive, 
                })
              }
            >
              {collection.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}