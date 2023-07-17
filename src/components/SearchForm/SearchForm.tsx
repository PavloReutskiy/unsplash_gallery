import { ChangeEvent, FormEvent } from 'react';
import './searchForm.scss';

type Props = {
  query: string;
  onHandleFormSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onHandleQueryChange: (inputEvent: ChangeEvent<HTMLInputElement>) => void;
  onHandleReset: () => void;
  isResetButtonActive: boolean;
}

export const SearchForm: React.FC<Props> = ({
  query,
  onHandleFormSubmit,
  onHandleQueryChange,
  onHandleReset,
  isResetButtonActive,
}) => {
  return (
    <form onSubmit={onHandleFormSubmit}>
      <input
        type="text"
        className="input banner__search-field"
        placeholder="Search high-resolution images"
        value={query}
        onChange={onHandleQueryChange}
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
            onClick={onHandleReset}
          />
        )}
      </span>

      <span className="banner__search-icon banner__search-icon--right">
        <i className="fa-sharp fa-solid fa-expand"></i>
      </span>
    </form>
  )
}