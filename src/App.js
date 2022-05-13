import React from 'react';

import Test from './components/test/Test';
import './App.css';
import AppServices from './services/app.services';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  async componentDidMount() {
    console.log('App  is ready');

    const dataFromApi = await AppServices.testDataFromApi();

    dataFromApi &&
      this.setState({
        data: { ...dataFromApi },
      });
  }

  componentDidUpdate() {
    console.log('App updated');
  }

  render() {
    return (
      <div className='App'>
        <Test name={'BADRO'} />
        <Test name={'BASMO'} />
        <Test name={this.state.data.name} />
      </div>
    );
  }
}
