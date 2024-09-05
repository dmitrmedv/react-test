import { useEffect, useState } from 'react';
import { ToDo } from './ToDo/ToDo';
import { List } from './List/List';
import { Search } from './Search/Search';
import css from './App.module.css';
import { Modal } from './Modal/Modal';
import axios from 'axios';

export const App = () => {
  const [letters, setLetters] = useState([]);
  const [filterQuery, setFilterQuery] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [genService, setGenService] = useState('');
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get('http://localhost:3000/letters');
        setLetters(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleDeleteLetter = async letterId => {
    try {
      await axios.delete(`http://localhost:3000/letters/${letterId}`);
      setLetters(prevState => prevState.filter(({ id }) => id !== letterId));
    } catch (error) {
      console.error('Error deleting letter:', error);
    }
  };

  const handleFilter = query => {
    setFilterQuery(query);
  };

  const handleAddLetter = async newLetter => {
    try {
      const { data } = await axios.post(
        'http://localhost:3000/letters',
        newLetter
      );

      setLetters(prevState => [...prevState, data]);
    } catch (error) {
      console.log(error);
    } finally {
      toggleModal();
    }
  };

  const handlerComplited = async (id, status) => {
    try {
      await axios.patch(`http://localhost:3000/letters/${id}`, {
        complited: !status,
      });
      setLetters(prevStete => {
        setLetters(
          prevStete.letters.map(letter => {
            if (letter.id === id) {
              return { ...letter, complited: !letter.complited };
            }
            return letter;
          })
        );
      });
    } catch (error) {
      console.log(error);
    }
  };

  let normalizeQuery = filterQuery.toLowerCase();
  let visibleItems = letters.filter(
    ({ address, userName }) =>
      address.toLowerCase().includes(normalizeQuery) ||
      userName.toLowerCase().includes(normalizeQuery)
  );

  return (
    <>
      <div className={css.container}>
        {showModal && (
          <Modal toggleModal={toggleModal}>
            <ToDo addItem={handleAddLetter} />
          </Modal>
        )}
        <div className={css.infoBlock}>
          <Search handleFilter={handleFilter} toggleModal={toggleModal} />
        </div>
      </div>
      <List
        list={visibleItems}
        handleDeleteLetter={handleDeleteLetter}
        handlerComplited={handlerComplited}
      />
    </>
  );
};
