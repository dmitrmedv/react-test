import { useDispatch, useSelector } from 'react-redux';
import {
  changeStep,
  decrement,
  increment,
  initialState,
  reset,
} from 'redux/counterSlice';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter);
  const step = useSelector(state => state.counter.step);
  const initialCounter = initialState.counter;
  const initialStep = initialState.step;

  const setNewStep = e => {
    dispatch(changeStep(+e.target.value));
  };

  return (
    <div>
      <button type="button" onClick={() => dispatch(increment())}>
        +
      </button>
      <button
        type="button"
        onClick={() => dispatch(decrement())}
        disabled={counter < 0 || counter === 0}
      >
        -
      </button>
      <button
        type="button"
        onClick={() => dispatch(reset())}
        disabled={counter === initialCounter && step === initialStep}
      >
        RESET
      </button>
      <p>{counter}</p>
      <label htmlFor="id">Step</label>
      <input type="number" id="id" value={step} onChange={setNewStep} />
    </div>
  );
};

export default Counter;
