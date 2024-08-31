import { Component } from 'react';
import css from './List.module.css';

export class List extends Component {
  render() {
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
          {this.props.list.map(
            ({ id, userName, address, complited, service }) => {
              return (
                <tr
                  key={id}
                  className={complited ? css.complited : css.nonComplited}
                >
                  <td>{address}</td>
                  <td>{userName}</td>
                  <td>{service ? service.join(', ') : 'інформації немає'}</td>
                  <td>
                    <button
                      type="button"
                      disabled={!complited}
                      onClick={() => this.props.handleDeleteLetter(id)}
                    >
                      Видалити
                    </button>
                    <input
                      type="checkbox"
                      checked={complited}
                      onChange={() =>
                        this.props.handlerComplited(id, complited)
                      }
                    />
                  </td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    );
  }
}
