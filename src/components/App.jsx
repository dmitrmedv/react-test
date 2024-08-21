import { Component } from 'react';
import { ToDo } from './ToDo/ToDo';
import { List } from './List/List';
import { Search } from './Search/Search';
import css from './App.module.css';

export class App extends Component {
  state = {
    letters: [
      { id: '1', address: 'Дерибасівська 10', userName: 'Мішка Япончик' },
      { id: '2', address: 'Троїцька 12', userName: 'Льова Артеллерист' },
      { id: '3', address: 'Рішельєвська 8', userName: 'Моня Рижий' },
      { id: '4', address: 'Канатна 77', userName: 'Сонька Вінницька' },
      { id: '5', address: 'Балківська 44', userName: 'Фройм Грач' },
    ],
    filterQuery: '',
  };

  handleFilter = query => {
    this.setState({ filterQuery: query });
  };

  handleAddLetter = newLetter => {
    this.setState(prevState => {
      return { letters: [newLetter, ...prevState.letters] };
    });
  };

  render() {
    const { letters, filterQuery } = this.state;
    let normalizeQuery = filterQuery.toLowerCase();
    let visibleItems = letters.filter(({ address }) =>
      address.toLowerCase().includes(normalizeQuery)
    );
    return (
      <div className={css.container}>
        <ToDo addItem={this.handleAddLetter} />
        <div className={css.infoBlock}>
          <Search handleFilter={this.handleFilter} />
          <List list={visibleItems} />
        </div>
      </div>
    );
  }
}
