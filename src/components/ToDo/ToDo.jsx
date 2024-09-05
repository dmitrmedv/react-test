import { Component, useState } from 'react';
import css from './ToDo.module.css';
import { nanoid } from 'nanoid';
import { GenService } from 'components/GenService/GenService';

export const ToDo = ({ addItem }) => {
  const [address, setAddress] = useState('');
  const [userName, setUserName] = useState('');
  const [complited, setComplited] = useState(false);
  const [service, setService] = useState([]);

  const handleChange = e => {
    const { value, name } = e.target;
    if (name === 'userName') {
      setUserName(value);
    }
    if (name === 'address') {
      setAddress(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    addItem({ address, userName });
  };

  const handleAddServ = e => {
    const { value, checked } = e.target;
    setService(prevState => ({
      service: checked
        ? [...prevState.service, value]
        : prevState.service.filter(service => service !== value),
    }));
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label} htmlFor="id-1">
        Змовник
      </label>
      <input
        type="text"
        className={css.input}
        id="id-1"
        name="userName"
        onChange={handleChange}
        value={userName}
      />
      <label className={css.label} htmlFor="id-2">
        Адреса
      </label>
      <input
        type="text"
        className={css.input}
        id="id-2"
        name="address"
        onChange={handleChange}
        value={address}
      />
      <GenService handleAddServ={handleAddServ} />
      <button type="submit" className={css.button}>
        Зареєструвати
      </button>
    </form>
  );
};
