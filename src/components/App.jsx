import { Component } from 'react';
import { ToDo } from './ToDo/ToDo';
import { List } from './List/List';
import { Search } from './Search/Search';
import css from './App.module.css';

export class App extends Component {
  state = {
    letters: [],
    filter: '',
  };

  handleAddLetter = newLetter => {
    this.setState(prevState => {
      return { letters: [newLetter, ...prevState.letters] };
    });
  };

  render() {
    return (
      <div className={css.container}>
        <ToDo addItem={this.handleAddLetter} />
        <div className={css.infoBlock}>
          <Search />
          <List list={this.state.letters} />
        </div>
      </div>
    );
  }
}
