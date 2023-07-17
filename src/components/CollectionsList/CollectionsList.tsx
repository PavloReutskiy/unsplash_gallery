import { NavLink } from "react-router-dom";
import cn from "classnames";
import "./collectionsList.scss";
import { collections } from "../../data/collections";
import { useRef } from "react";

export const CollectionsList: React.FC = () => {
  const listRef = useRef<HTMLUListElement>(null);

  const scrollLeft = () => {
    if (listRef.current) {
      listRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (listRef.current) {
      listRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="nav">
      <NavLink
        to="/"
        className={({ isActive }) => cn("nav__link", { "is-active": isActive })}
      >
        Editorial
      </NavLink>

      <div className="nav__separator"></div>
      <div className="nav__list-container">
        <button
          className="scroll-button scroll-button-left"
          onClick={scrollLeft}
        >
          &lt;
        </button>

        <ul ref={listRef} className="nav__list">
          {collections.map((collection) => (
            <li key={collection.id} className="nav__item">
              <NavLink
                to={`/t/${collection.slug}`}
                className={({ isActive }) =>
                  cn("nav__link", {
                    "is-active": isActive,
                  })
                }
              >
                {collection.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          className="scroll-button scroll-button-right"
          onClick={scrollRight}
        >
          &gt;
        </button>
      </div>
    </nav>
  );
};
