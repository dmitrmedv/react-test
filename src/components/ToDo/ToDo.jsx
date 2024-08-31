import { Component } from 'react';
import css from './ToDo.module.css';
import { nanoid } from 'nanoid';
import { GenService } from 'components/GenService/GenService';

const INITIAL_STATE = {
  address: '',
  userName: '',
  complited: false,
  service: [],
};

export class ToDo extends Component {
  state = { ...INITIAL_STATE, id: nanoid() };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addItem(this.state);
    this.setState({ ...INITIAL_STATE, id: nanoid() });
  };

  handleAddServ = e => {
    const { value, checked } = e.target;

    this.setState(prevState => ({
      service: checked
        ? [...prevState.service, value]
        : prevState.service.filter(service => service !== value),
    }));
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
          name="userName"
          onChange={this.handleChange}
          value={this.state.userName}
        />
        <label className={css.label} htmlFor="id-2">
          Адреса
        </label>
        <input
          type="text"
          className={css.input}
          id="id-2"
          name="address"
          onChange={this.handleChange}
          value={this.state.address}
        />
        <GenService handleAddServ={this.handleAddServ} />
        <button type="submit" className={css.button}>
          Зареєструвати
        </button>
      </form>
    );
  }
}
