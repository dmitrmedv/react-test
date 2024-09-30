import css from './List.module.css';

export const List = ({ list }) => {
  if (list) {
    return (
      <>
        <table className={css.table}>
          <thead>
            <tr>
              <th>вхідний №</th>
              <th>Дата</th>
              <th>Адреса</th>
              {/* <th>прізвище, ім’я, по батькові (найменування)</th> */}
              <th>суть питання</th>
              <th>виконавець (головний)</th>
              {/* <th>виконавець (інші)</th> */}
              <th>інша інформація</th>
              {/* <th>тип споживача </th>
              <th>Предмет звернення</th> */}
            </tr>
          </thead>
          <tbody>
            {list.map(
              ({
                innerNumber,
                incominпDate,
                sender,
                address,
                essence,
                executor,
                overExecutors,
                overInfo,
                // type,
                // typeOfSender,
              }) => (
                <tr key={innerNumber}>
                  <td className={css.number}>{innerNumber + 'к'}</td>
                  <td className={css.date}>{incominпDate}</td>
                  <td className={css.addres}>
                    <p>{address}</p>
                    <p>{sender}</p>
                  </td>
                  {/* <td className={css.sender}>{sender}</td> */}
                  <td className={css.essence}>{essence}</td>
                  <td className={css.executor}>
                    <p>{executor}</p>
                    <p className={css.executors}>
                      {overExecutors ? overExecutors.join(', ') : ''}
                    </p>
                  </td>
                  {/* <td className={css.executor}>
                    {overExecutors ? overExecutors.join(', ') : '-'}
                  </td> */}
                  <td className={css.info}>{overInfo}</td>
                  {/* <td className={css.type}>{type}</td>
                  <td className={css.typeOf}>{typeOfSender}</td> */}
                </tr>
              )
            )}
          </tbody>
        </table>
      </>
    );
  }
  return;
};
