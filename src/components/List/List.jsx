// import css from './List.module.css';

export const List = ({ list }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Адреса</th>
          <th>Замовник</th>
        </tr>
      </thead>
      <tbody>
        {list.map(({ id, userName, address }) => {
          return (
            <tr key={id}>
              <td>{userName}</td>
              <td>{address}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
