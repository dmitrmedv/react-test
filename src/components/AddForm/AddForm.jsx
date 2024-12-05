import React from 'react';
import css from './AddForm.module.css';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addTodo } from 'redux/operations';
// import { addTodo } from 'redux/todoSlice';

const AddForm = () => {
  const dispatch = useDispatch();

  const idForName = nanoid();

  const addUser = e => {
    e.preventDefault();
    const { name } = e.target;

    const newUser = {
      id: nanoid(),
      name: name.value,
      complete: false,
    };

    dispatch(addTodo(newUser));

    e.target.reset();
  };

  return (
    <form className={css.form} onSubmit={addUser}>
      <label className={css.inputLine} htmlFor={idForName}>
        Text
      </label>
      <input type="text" name="name" id={idForName} />
      <button type="submit" className={css.subbmitButton}>
        ADD
      </button>
    </form>
  );
};

export default AddForm;
