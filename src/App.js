import React from 'react';
import Test from './components/test/Test';
import './App.css';

export default class App extends React.Component {
  componentDidMount() {
    console.log('App  is ready');
  }

  componentDidUpdate() {
    console.log('App updated');
  }
  render() {
    return (
      <div className='App'>
        <Test names={['BADRO', 'BASMO']} />
      </div>
    );
  }
}
