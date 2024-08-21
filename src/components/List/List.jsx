import css from './List.module.css';

export const List = ({ list, handleDeleteLetter, handlerComplited }) => {
  return (
    <table className={css.table}>
      <thead>
        <tr>
          <th>Адреса</th>
          <th>Замовник</th>
          <th>Видалення</th>
        </tr>
      </thead>
      <tbody>
        {list.map(({ id, userName, address, complited }) => {
          return (
            <tr
              key={id}
              className={complited ? css.complited : css.nonComplited}
            >
              <td>{address}</td>
              <td>{userName}</td>
              <td>
                <button
                  type="button"
                  disabled={!complited}
                  onClick={() => handleDeleteLetter(id)}
                >
                  Видалити
                </button>
                <input
                  type="checkbox"
                  checked={complited}
                  onChange={() => handlerComplited(id)}
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
