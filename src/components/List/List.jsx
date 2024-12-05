import { useDispatch, useSelector } from 'react-redux';
import { removeTodo, toggleComplete } from 'redux/operations';
import { selectorFilterComplite, selectorFilterQuery } from 'redux/todoSlice';

const List = () => {
  const todos = useSelector(state => state.todos.todos);
  const isLoading = useSelector(state => state.todos.isLoading);
  const filterValue = useSelector(selectorFilterComplite);
  const filterQuery = useSelector(selectorFilterQuery);
  const dispatch = useDispatch();

  let visibleList = todos.filter(item =>
    item.name.toLowerCase().includes(filterQuery.toLowerCase())
  );

  switch (filterValue) {
    case 'completed':
      visibleList = visibleList.filter(item => item.complete);
      break;

    case 'not completed':
      visibleList = visibleList.filter(item => !item.complete);
      break;

    default:
      break;
  }

  return (
    <>
      {isLoading && <p>...isLoading</p>}
      {visibleList.length > 0 ? (
        <ul>
          {visibleList.map(({ name, id, complete }) => (
            <li key={id}>
              <p>{name}</p>
              <input
                type="checkbox"
                checked={complete}
                onChange={() => dispatch(toggleComplete({ id, complete }))}
              />
              <button
                type="button"
                onClick={() => dispatch(removeTodo(id))}
                disabled={!complete}
              >
                remove
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Список пустий</p>
      )}
    </>
  );
};

export default List;
