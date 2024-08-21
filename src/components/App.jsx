import { Component } from 'react';
import { ToDo } from './ToDo/ToDo';
import { List } from './List/List';
import { Search } from './Search/Search';
import css from './App.module.css';

export class App extends Component {
  state = {
    letters: [
      {
        id: '1',
        address: 'Дерибасівська 10',
        userName: 'Мішка Япончик',
        complited: false,
      },
      {
        id: '2',
        address: 'Троїцька 12',
        userName: 'Льова Артеллерист',
        complited: false,
      },
      {
        id: '3',
        address: 'Рішельєвська 8',
        userName: 'Моня Рижий',
        complited: false,
      },
      {
        id: '4',
        address: 'Канатна 77',
        userName: 'Сонька Вінницька',
        complited: false,
      },
      {
        id: '5',
        address: 'Балківська 44',
        userName: 'Фройм Грач',
        complited: false,
      },
    ],
    filterQuery: '',
  };

  handleDeleteLetter = id => {
    this.setState(prevState => {
      return {
        letters: prevState.letters.filter(item => item.id !== id),
      };
    });
  };

  handleFilter = query => {
    this.setState({ filterQuery: query });
  };

  handleAddLetter = newLetter => {
    this.setState(prevState => {
      return { letters: [newLetter, ...prevState.letters] };
    });
  };

  handlerComplited = id => {
    this.setState(prevStete => {
      return {
        letters: prevStete.letters.map(letter => {
          if (letter.id === id) {
            return { ...letter, complited: !letter.complited };
          }
          return letter;
        }),
      };
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
          <List
            list={visibleItems}
            handleDeleteLetter={this.handleDeleteLetter}
            handlerComplited={this.handlerComplited}
          />
        </div>
      </div>
    );
  }
}
