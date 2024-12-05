import css from './search.module.css';
import AddForm from 'components/AddForm/AddForm';
import List from 'components/List/List';
import SearchLine from 'components/SearchLine/SearchLine';
import { useSelector } from 'react-redux';

const Search = () => {
  return (
    <div className={css.serchWrapper}>
      <AddForm />
      <div className={css.listWrapper}>
        <SearchLine />
        <List />
      </div>
    </div>
  );
};

export default Search;
