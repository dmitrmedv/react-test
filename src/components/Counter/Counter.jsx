import { Component } from 'react';
import css from './Counter.module.css';

export class Counter extends Component {
  state = {
    total: JSON.parse(localStorage.getItem('total')) || 0,
  };

  handleClick = e => {
    this.setState(({ total }) => {
      localStorage.setItem('total', JSON.stringify(total + 1));
      if (e.target.textContent === '+') {
        return { total: total + 1 };
      }
      localStorage.setItem('total', JSON.stringify(total - 1));
      return { total: total - 1 };
    });
  };

  render() {
    const { total } = this.state;
    const { handleClick } = this;
    return (
      <div className={css.conterWrapper}>
        <h2 className={css.title}>Counter</h2>
        <p className={css.value}>{total}</p>
        <div className={css.buttonsWrapper}>
          <button
            className={css.minus}
            onClick={handleClick}
            disabled={total === 0}
          >
            -
          </button>
          <button className={css.plus} onClick={handleClick}>
            +
          </button>
        </div>
      </div>
    );
  }
}
