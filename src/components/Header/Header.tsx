import { CollectionsList } from "../CollectionsList";
import { HeaderTopBar } from "../HeaderTopBar";
import "./header.scss";

export const Header: React.FC = () => {
  return (
    <header className="header">
      <HeaderTopBar />
      <CollectionsList />
    </header>
  );
};
