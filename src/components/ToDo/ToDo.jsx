import { Component } from 'react';
import css from './ToDo.module.css';
import { nanoid } from 'nanoid';

const INITIAL_STATE = {
  address: '',
  userName: '',
};

export class ToDo extends Component {
  state = INITIAL_STATE;

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value, id: nanoid() });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addItem(this.state);
    this.setState(INITIAL_STATE);
  };

  render() {
    return (
      <form
        className={css.form}
        onSubmit={this.handleSubmit}
        autoComplete="off"
      >
        <label className={css.label} htmlFor="id-1">
          Змовник
        </label>
        <input
          type="text"
          className={css.input}
          id="id-1"
          name="address"
          onChange={this.handleChange}
          value={this.state.address}
        />
        <label className={css.label} htmlFor="id-2">
          Адреса
        </label>
        <input
          type="text"
          className={css.input}
          id="id-2"
          name="userName"
          onChange={this.handleChange}
          value={this.state.userName}
        />
        <button type="submit" className={css.button}>
          Зареєструвати
        </button>
      </form>
    );
  }
}
