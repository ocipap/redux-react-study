const CHANGE_INPUT = 'waiting/CHANGE_INPUT';
const CREATE = 'waiting/CREATE';
const ENTER = 'waiting/ENTER';
const LEAVE = 'waiting/LEAVE';

export const changeInput = text => ({ type: CHANGE_INPUT, payload: text });
export const create = text => ({ type: CREATE, payload: text });
export const enter = id => ({ type: ENTER, payload: id });
export const leave = id => ({ type: LEAVE, payload: id });
