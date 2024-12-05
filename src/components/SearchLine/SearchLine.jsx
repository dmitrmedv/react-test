import { nanoid } from 'nanoid';
import React from 'react';
import css from './SearchLine.module.css';
import { useDispatch, useSelector } from 'react-redux';
import FilterSwitcher from 'components/FilterSwitcher/FilterSwitcher';
import { changeFilterQuery, selectorFilterQuery } from 'redux/todoSlice';

const SearchLine = () => {
  const idForSerchLine = nanoid();
  const filterQuery = useSelector(selectorFilterQuery);
  const dispatch = useDispatch();

  const filter = e => {
    dispatch(changeFilterQuery(e.target.value));
  };

  return (
    <>
      <form className={css.form}>
        <label htmlFor={idForSerchLine}>Search Query</label>
        <input
          value={filterQuery}
          onChange={filter}
          type="text"
          id={idForSerchLine}
          name="searchQuery"
          className={css.input}
        />
      </form>
      <FilterSwitcher />
    </>
  );
};

export default SearchLine;
