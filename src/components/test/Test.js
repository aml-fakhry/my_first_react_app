import React from 'react';
import './Test.css';
export default function Test(props) {
  function pressed() {
    console.log('pressed.');
  }

  return (
    <React.Fragment>
      {props.names.map((name) => (
        <h1 className='testStyle'>HALLO REACT YA {name}</h1>
      ))}
      <button className='changeClr' onClick={pressed}>
        change Color
      </button>
    </React.Fragment>
  );
}
