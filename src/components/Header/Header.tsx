import { CollectionsList } from './CollectionsList';
import { HeaderTopBar } from './HeaderTopBar';

export const Header: React.FC = () => {
  return (
    <header className='header'>
      <HeaderTopBar />
      <CollectionsList />
    </header>
  );
}