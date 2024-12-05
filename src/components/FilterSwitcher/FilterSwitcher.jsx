import css from './FilterSwitcher.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeCompleteFilter, selectorFilterComplite } from 'redux/todoSlice';

function FilterSwitcher() {
  const filterValue = useSelector(selectorFilterComplite);
  const dispath = useDispatch();

  const handleChange = e => {
    dispath(changeCompleteFilter(e.target.value));
  };

  return (
    <form className={css.formSwitcher}>
      <input
        type="radio"
        name="one"
        id="1"
        value="all"
        onChange={handleChange}
        checked={filterValue === 'all'}
        className={css.input}
      />
      <label htmlFor="1" className={css.button}>
        all
      </label>

      <input
        type="radio"
        name="one"
        id="2"
        value="completed"
        onChange={handleChange}
        checked={filterValue === 'completed'}
        className={css.input}
      />
      <label htmlFor="2" className={css.button}>
        completed
      </label>

      <input
        type="radio"
        name="one"
        id="3"
        value="not completed"
        onChange={handleChange}
        checked={filterValue === 'not completed'}
        className={css.input}
      />
      <label htmlFor="3" className={css.button}>
        not completed
      </label>
    </form>
  );
}

export default FilterSwitcher;
