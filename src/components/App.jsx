import { Component } from 'react';
import { ToDo } from './ToDo/ToDo';
import { List } from './List/List';
import { Search } from './Search/Search';
import css from './App.module.css';
import { Modal } from './Modal/Modal';
import axios from 'axios';

export class App extends Component {
  state = {
    letters: [],
    filterQuery: '',
    showModal: false,
    genService: '',
    services: [],
  };

  async componentDidMount() {
    try {
      const { data } = await axios.get('http://localhost:3000/letters');
      this.setState({ letters: data });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  toggleModal = () => {
    this.setState(prevState => {
      return {
        showModal: !prevState.showModal,
      };
    });
  };

  handleDeleteLetter = async id => {
    try {
      await axios.delete(`http://localhost:3000/letters/${id}`);
      this.setState(prevState => {
        return {
          letters: prevState.letters.filter(letter => letter.id !== id),
        };
      });
    } catch (error) {
      console.error('Error deleting letter:', error);
    }
  };

  handleFilter = query => {
    this.setState({ filterQuery: query });
  };

  handleAddLetter = async newLetter => {
    try {
      const { data } = await axios.post(
        'http://localhost:3000/letters',
        newLetter
      );

      this.setState(prevState => ({
        letters: [...prevState.letters, data],
      }));
    } catch (error) {
      console.log(error);
    } finally {
      this.toggleModal();
    }
  };

  handlerComplited = async (id, status) => {
    try {
      await axios.patch(`http://localhost:3000/letters/${id}`, {
        complited: !status,
      });
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
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { letters, filterQuery } = this.state;
    let normalizeQuery = filterQuery.toLowerCase();
    let visibleItems = letters.filter(
      ({ address, userName }) =>
        address.toLowerCase().includes(normalizeQuery) ||
        userName.toLowerCase().includes(normalizeQuery)
    );
    return (
      <div className={css.container}>
        {this.state.showModal && (
          <Modal toggleModal={this.toggleModal}>
            <ToDo addItem={this.handleAddLetter} />
          </Modal>
        )}
        <div className={css.infoBlock}>
          <Search
            handleFilter={this.handleFilter}
            toggleModal={this.toggleModal}
          />
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
