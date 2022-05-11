import React from 'react';
import './Test.css';
export default function Test(props) {
  return (
    <React.Fragment>
      {props.names.map((name) => (
        <h1 className='testStyle'>HALLO REACT YA {name}</h1>
      ))}
    </React.Fragment>
  );
}
