import './columnsRadio.scss';

type Props = {
  onChangeColumns: (event: React.ChangeEvent<HTMLInputElement>) => void;
  columns: number;
}

export const ColumnsRadio: React.FC<Props> = ({ onChangeColumns, columns }) => {
  return (
    <div className="radio">
      <label className="radio__lable">
        <input
          type="radio"
          className="radio__input"
          value="3"
          checked={columns === 3}
          onChange={onChangeColumns}
        />
        3 columns
      </label>
      <label className="radio__lable">
        <input
          type="radio"
          className="radio__input"
          value="5"
          checked={columns === 5}
          onChange={onChangeColumns}
        />
        5 columns
      </label>
    </div>
  );
}