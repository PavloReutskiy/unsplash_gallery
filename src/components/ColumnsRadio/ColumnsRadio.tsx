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
          value="4"
          checked={columns === 4}
          onChange={onChangeColumns}
        />
        4 columns
      </label>
    </div>
  );
}