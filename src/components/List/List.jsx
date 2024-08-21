import css from './List.module.css';

export const List = ({ list }) => {
  function handleShowId(e) {
    console.dir(e.currentTarget.dataset.id);
  }

  return (
    <table className={css.table}>
      <thead>
        <tr>
          <th>Адреса</th>
          <th>Замовник</th>
        </tr>
      </thead>
      <tbody>
        {list.map(({ id, userName, address }) => {
          return (
            <tr key={id} data-id={id} onClick={handleShowId}>
              <td>{address}</td>
              <td>{userName}</td>
              <td>
                <button type="button">Видалити</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
