import './trendingList.scss';

type Props = {
  onHandleLiClick: (text: string) => void
}

export const TrendingList: React.FC<Props> = ({ onHandleLiClick }) => (
  <>
    <span className="banner__trend">Trending:</span>
    <ul className="banner__list">
      <li className="banner__item" onClick={() => onHandleLiClick('nature')}>nature,</li>
      <li className="banner__item" onClick={() => onHandleLiClick('film')}>film,</li>
      <li className="banner__item" onClick={() => onHandleLiClick('animals')}>animals,</li>
      <li className="banner__item" onClick={() => onHandleLiClick('wallpapers')}>wallpapers,</li>
      <li className="banner__item" onClick={() => onHandleLiClick('people')}>people</li>
    </ul>
  </>
)