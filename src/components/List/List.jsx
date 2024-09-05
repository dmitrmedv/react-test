import css from './List.module.css';

export const List = ({ list, handleDeleteLetter, handlerComplited }) => {
  return (
    <table className={css.table}>
      <thead>
        <tr>
          <th>Адреса</th>
          <th>Замовник</th>
          <th>Служби</th>
          <th>Видалення</th>
        </tr>
      </thead>
      <tbody>
        {list.map(({ id, userName, address, complited, service }) => {
          return (
            <tr
              key={id}
              className={complited ? css.complited : css.nonComplited}
            >
              <td>{address}</td>
              <td>{userName}</td>
              <td>{service ? service.join(', ') : 'інформації немає'}</td>
              <td>
                <button type="button" onClick={() => handleDeleteLetter(id)}>
                  Видалити
                </button>
                <input
                  type="checkbox"
                  onChange={() => handlerComplited(id, complited)}
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
