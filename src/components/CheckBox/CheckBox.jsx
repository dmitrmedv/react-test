import { Component } from 'react';
import css from './CheckBox.module.css';

export class CheckBox extends Component {
  state = {
    values: [],
    stovg: false,
    abon: false,
    skpga: false,
    skbsg: false,
  };

  handleCheck = e => {
    const { name, value, checked } = e.target;

    this.setState(prevState => {
      return {
        [name]: checked,
        values: checked
          ? [...prevState.values, value]
          : prevState.values.filter(val => val !== value),
      };
    });
  };

  render() {
    return (
      <form action="" className={css.checkForm}>
        <label htmlFor="1" className={this.state.stovg ? css.add : css.item}>
          СТОВГ
          <input
            type="checkbox"
            id="1"
            className={css.checkBox}
            value="СТОВГ"
            onChange={this.handleCheck}
            name="stovg"
          />
        </label>
        <label htmlFor="2" className={this.state.abon ? css.add : css.item}>
          Абонвідділ
          <input
            type="checkbox"
            id="2"
            className={css.checkBox}
            value="Абонвідділ"
            onChange={this.handleCheck}
            name="abon"
          />
        </label>
        <label htmlFor="3" className={this.state.skbsg ? css.add : css.item}>
          СКПЛГ
          <input
            type="checkbox"
            id="3"
            className={css.checkBox}
            value="СКПЛГ"
            onChange={this.handleCheck}
            name="skbsg"
          />
        </label>
        <label htmlFor="4" className={this.state.skpga ? css.add : css.item}>
          СКПГА
          <input
            type="checkbox"
            id="4"
            className={css.checkBox}
            value="СКПГА"
            onChange={this.handleCheck}
            name="skpga"
          />
        </label>
      </form>
    );
  }
}
