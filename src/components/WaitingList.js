import React from 'react';
import './WaitingList.css';

const WaitingItem = ({ text, entered, onEnter, onLeave }) => {
  return (
    <li>
      <div className={`text ${entered ? 'entered' : ''}`}>{text}</div>
      <div className="buttons">
        <button onClick={onEnter}>입장</button>
        <button onClick={onLeave}>나감</button>
      </div>
    </li>
  );
};

const WaitingList = ({ input, waitingList, onEnter, onLeave, onChange, onSubmit }) => {
  const WaitingItems = waitingList.map(({ id, name, entered }) =>
    <WaitingItem id={id} text={name} entered={entered} onLeave={() => onLeave(id)} onEnter={() => onEnter(id)}/>)


  return (
    <div className="WaitingList">
      <h2>대기자 명단</h2>
      <form onSubmit={onSubmit}>
        <input value={input} onChange={onChange}/>
        <button>등록</button>
      </form>
      <ul>{WaitingItems}</ul>
    </div>
  );
};

export default WaitingList;
