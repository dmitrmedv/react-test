import { useDispatch, useSelector } from 'react-redux';
import { toggleCheck } from 'redux/check/checkSlice';
// import { toggleCheck } from 'redux/check/actions';
import { decrement, increment } from 'redux/counter/actions';

const Counter = () => {
  // const store = useSelector(store => store);
  // console.log('store', store);

  const { number } = useSelector(store => store.count);

  const { check } = useSelector(store => store.check);

  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment(check ? 10 : 1));
  };
  const handleDecrement = () => {
    dispatch(decrement(check ? 10 : 1));
  };

  const handleCheck = () => {
    dispatch(toggleCheck());
  };

  return (
    <div>
      <button onClick={handleIncrement}>decrement</button>
      <div>
        <p>{number}</p>
        <input type="checkbox" onChange={handleCheck} checked={check} />
      </div>
      <button onClick={handleDecrement}>increment</button>
    </div>
  );
};

export default Counter;
