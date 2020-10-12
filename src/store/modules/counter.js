import { createAction, handleActions } from 'redux-actions';

const CHANGE_COLOR = 'counter/CHANGE_COLOR';
const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';

export const changeColor = createAction(CHANGE_COLOR, color => color);
export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);

const initialValue = {
  color: 'red',
  number: 1,
};

export default handleActions({
  [CHANGE_COLOR]: (state, action) => ({
    ...state,
    color: action.payload,
  }),
  [INCREMENT]: state => ({
    ...state,
    number: state.number + 1,
  }),
  [DECREMENT]: state => ({
    ...state,
    number: state.number - 1,
  }),
}, initialValue);

